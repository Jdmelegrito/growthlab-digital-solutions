import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();
  const port = process.env.PORT || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  let vite: any;
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  // Parse JSON and urlencoded request bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Handle Base44 analytics batch endpoint specifically
  app.post('/api/apps/:appId/analytics/track/batch', (_req, res) => {
    res.status(200).json({ success: true, count: 0 });
  });

  // Resilient fallback for any other /api requests (compatible with Express 5)
  app.use('/api', (_req, res) => {
    res.status(200).json({ success: true, count: 0 });
  });

  // Handle all GET and HEAD requests for HTML pages (including health checks)
  app.use(async (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return next();
    }

    const url = req.originalUrl;

    try {
      let template: string;
      let render: ((url: string) => { html: string }) | undefined;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        try {
          const module = await vite.ssrLoadModule('/src/entry-server.jsx');
          render = module.render;
        } catch (err) {
          console.error('SSR module load failed, serving CSR template:', err);
        }
      } else {
        const templatePath = path.resolve(__dirname, 'dist/client/index.html');
        template = fs.readFileSync(templatePath, 'utf-8');
        try {
          const entryServer = await import('./dist/server/entry-server.js' as any);
          render = entryServer.render;
        } catch {
          // fallback to client template
        }
      }

      let appHtml = '';
      if (render) {
        try {
          const rendered = render(url);
          appHtml = rendered.html;
        } catch (renderError) {
          console.error('SSR renderToString failed, falling back to CSR:', renderError);
        }
      }

      const html = template.replace('<!--app-html-->', appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error('SSR handler error:', e);
      next(e);
    }
  });

  const parsedPort = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  app.listen(parsedPort, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${parsedPort}`);
  });
}

createServer();


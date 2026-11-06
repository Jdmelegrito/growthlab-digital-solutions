import ReactDOMServer from 'react-dom/server';
import App from './App.jsx';

export function render(url) {
  const html = ReactDOMServer.renderToString(<App location={url} />);
  return { html };
}

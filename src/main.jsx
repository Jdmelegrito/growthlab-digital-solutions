import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Filter out legacy Base44 SDK error logs in standalone mode
if (typeof window !== 'undefined') {
  const origError = console.error;
  console.error = (...args) => {
    if (args.some(a => String(a).includes('[Base44 SDK Error]'))) return;
    origError.apply(console, args);
  };
}

const container = document.getElementById('root');
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, <App />);
} else {
  ReactDOM.createRoot(container).render(<App />);
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter is included so you can add extra routes later
        (e.g. a /blog or project detail pages). The portfolio itself
        is a single scrolling page using in-page anchor links. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

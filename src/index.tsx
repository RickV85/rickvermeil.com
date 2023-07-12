import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { inject } from '@vercel/analytics';
 
inject();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  < BrowserRouter >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals(console.log);

import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/App';
import './mock';
import './styles/index.css';
import { createRoot } from 'react-dom/client';


/**
 * This file can be ignored, please work in ./components/App.tsx
 */

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

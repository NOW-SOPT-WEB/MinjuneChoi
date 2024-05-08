import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import cardImages from './card';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App cardImages={cardImages} />
  </React.StrictMode>
);

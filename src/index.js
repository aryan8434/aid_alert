import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import signimg from './sign.png';
import AidAlert from './components/AidAlert';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AidAlert />
  </React.StrictMode>
);

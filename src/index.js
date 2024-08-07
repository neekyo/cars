import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.getElemendById('root');
const root = createRoot(el);

root.render(<App />);

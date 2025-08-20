import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { enableMockServiceWorker } from './mocks/browser';
import './index.css';
import App from './App.tsx';

enableMockServiceWorker().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});

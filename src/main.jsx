import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BotsContextProvider } from './context/BotsContext.jsx';

createRoot(document.getElementById('root')).render(
  <BotsContextProvider>
    <App />
  </BotsContextProvider>,
)

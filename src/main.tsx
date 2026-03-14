import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/theme.context.tsx';
import "./i18n"; 
import { LngtProvider } from './context/lng.context.tsx';
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <ContextProvider>
        <LngtProvider>
      <App />
      </LngtProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router";
import { RouterProvider } from 'react-router-dom';
import Portfolio from './Pages/Portfolio.jsx'
import { ContextProvider } from './contexts/ContextProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ContextProvider>
  </StrictMode>,
)

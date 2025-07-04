import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { BookingProvider } from './context/BookingContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BookingProvider>
    <HelmetProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </HelmetProvider>
    </BookingProvider>
  </StrictMode>,
)

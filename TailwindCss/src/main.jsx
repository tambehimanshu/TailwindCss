import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WebPage from './WebPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebPage/>
  </StrictMode>,
)

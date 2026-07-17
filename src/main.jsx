import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system">
      <SmoothScroll>
        <App />
      </SmoothScroll>
      <ThemeToggle />
    </ThemeProvider>
  </React.StrictMode>,
)

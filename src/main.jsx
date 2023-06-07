import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './App-router'
import './index.css'
import PortalProvider from './components/context/portalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter></AppRouter>
  </React.StrictMode>,
)

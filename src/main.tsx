import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'
import './global.css'
import Menu from './components/menu'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Menu />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Technical from './technical.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <br></br>
    <Technical />
  </React.StrictMode>,
)
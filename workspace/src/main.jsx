import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Router } from "react-router-dom";
import { ButtonProvider } from './context/ButtonContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ButtonProvider>
        <App router={Router} />
      </ButtonProvider>
    </BrowserRouter>
  </React.StrictMode>,
)


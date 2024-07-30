import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Router } from "react-router-dom";
import { ButtonProvider } from './context/ButtonContext.jsx';
import { CardProvider } from './context/CardContext.jsx';
import { TransitionProvider } from './context/TransitionContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TransitionProvider>
        <ButtonProvider>
          <CardProvider>
            <App router={Router} />
          </CardProvider>
        </ButtonProvider>
      </TransitionProvider>
    </BrowserRouter>
  </React.StrictMode>,
)


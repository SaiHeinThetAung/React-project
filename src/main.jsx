import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'animate.css'
import StateContextProvider from './context/StateContext'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <StateContextProvider>
        <BrowserRouter>
         <App />
        </BrowserRouter>
     
      </StateContextProvider>
  </React.StrictMode>,
)

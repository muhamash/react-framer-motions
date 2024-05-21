import { LazyMotion, domAnimation } from "framer-motion"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <LazyMotion features={domAnimation}>
        <App/>
      </LazyMotion>
    </Router>
  </React.StrictMode>,
)

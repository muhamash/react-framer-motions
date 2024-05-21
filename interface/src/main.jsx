import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from "framer-motion"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <LazyMotion features={domAnimation}>
        <QueryClientProvider client={queryClient}>
          <App/>
        </QueryClientProvider>
      </LazyMotion>
    </Router>
  </React.StrictMode>,
)

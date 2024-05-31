import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Page1 from './components/Page1/Page1.jsx'
import Footer from './components/Footer/Footer.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Page1/>
    <Footer/>
    
  </React.StrictMode>,
)

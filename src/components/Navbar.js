import React from 'react'
import logo from '../images/airbnb-logo.png'
import '../App.css'

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="navbar-logo" alt="Airbnb logo" />
    </div>
  )
}

export default Navbar
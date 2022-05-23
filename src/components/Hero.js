import React from 'react'
import heroPhoto from '../images/photo-grid.png'
import '../App.css'

function Hero() {
  return (
    <div className="hero-section">
      <img src={heroPhoto} alt="Collage of portraits" className="hero-photos" />
      <div className="hero-text-container">
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </div>
    </div>
  )
}

export default Hero
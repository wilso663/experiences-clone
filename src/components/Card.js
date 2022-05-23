import React from 'react'
import StarImage from '../images/star.png'

function Card({src, rating, reviewCount, location, desc, price, openSpots}) {

  let badgeText
  if(openSpots === 0)
    badgeText = "SOLD OUT"
  else if(location === "Online")
    badgeText = "ONLINE"

  return (
    <div className="card">
      {badgeText && <button className="status">{badgeText}</button> }
      <img src={`/experiences-clone/images/${src}`} alt="Katie Zaferes" className="card-image" />    
        <div className="cards-stats">
          <img src={StarImage} alt="red star" className="card-star"/>
          <span className="grey rating"> {rating}</span>
          <span className="grey amount-ratings">({reviewCount}) • </span>
          <span className="location">{location}</span>
        </div>
        <p className="card-title">{desc}</p>
        <p><span className="card-price">From ${price}</span> / person</p>
        
    </div>
  )
}

export default Card
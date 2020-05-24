import React from 'react'

export default function Explore() {
  return (
    <div>
      <h1 className="explore">Explore</h1>
      <div className="more-details-container">
        <button className="plus-button">
          <img className="plus-button" src={process.env.PUBLIC_URL + './plus-circle-solid.svg'} />
        </button>
        <p className="more-details">More Details</p>
      </div>
     </div> 
  )
}

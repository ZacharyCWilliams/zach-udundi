import React from 'react'

export default function Background() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="red-background"></div>
            <div className="test">
              <img className="background-image" src={process.env.PUBLIC_URL + './bg-img.png'} alt="background" />
            </div>
          </div>
        </div>
      </div>
    )
}

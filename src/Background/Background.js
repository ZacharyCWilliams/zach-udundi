import React from 'react';
import "./Background.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Background() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="red-background"></div>
            <div className="bg-image-container">
              <img
                className="background-image"
                src={process.env.PUBLIC_URL + "./bg-img.png"}
                alt="background"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

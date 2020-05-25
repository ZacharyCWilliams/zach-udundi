import React from 'react';
import "./Social.scss";

export default function Social() {
  return (
    <section className="social-section">
      <div className="button-container">
        <button className="facebook-button">
          <a href="https://www.facebook.com/udundi" target="_blank" rel="noopener noreferrer">
            <img className="facebook-image" src={process.env.PUBLIC_URL + './facebook-icon.png'} alt="facebook" />
          </a>
        </button>
        <button className="instagram-button">
          <a href="https://www.instagram.com/udundi/?hl=en" target="_blank" rel="noopener noreferrer">
            <img className="instagram-image" src={process.env.PUBLIC_URL + './insta-icon.png'} alt="instagram" />
          </a>
        </button>
      </div>
    </section>
  )
}

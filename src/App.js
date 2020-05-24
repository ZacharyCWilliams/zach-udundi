import React from "react";
import "./App.scss";
import Background from "./Background/Background";
import Explore from "./Explore/Explore";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Explore />
      <section className="social-section">
        <div className="button-container">
          <button className="facebook-button">
            <a href="https://www.facebook.com/udundi" target="_blank">
              <img className="facebook-image" src={process.env.PUBLIC_URL + './facebook-icon.png'} />
            </a>
          </button>
          <button className="instagram-button">
            <a href="https://www.instagram.com/udundi/?hl=en" target="_blank">
              <img className="instagram-image" src={process.env.PUBLIC_URL + './insta-icon.png'} />
            </a>
          </button>
        </div>
      </section>
      <Background />
    </div>
  );
}

export default App;

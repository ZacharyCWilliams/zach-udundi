import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Explore() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div>
      <h1 className="explore" data-aos="zoom-in">
        Explore
      </h1>
      <div className="more-details-container">
        <button className="plus-button">
          <img
            data-aos="fade-up"
            className="plus-button"
            src={process.env.PUBLIC_URL + "./plus-circle-solid.svg"}
            alt="explore"
          />
        </button>
        <p className="more-details" data-aos="fade-up">
          More Details
        </p>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Explore.scss";

export default function Explore({ handleShowBox, showInfo }) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className={!showInfo ? null : "hidden"}>
      <div className="explore-header-container">
        <h1 className="explore-header" data-aos="zoom-in">
          Explore
        </h1>
      </div>
      <div className="more-details-container">
        <button className="plus-button" onClick={handleShowBox}>
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

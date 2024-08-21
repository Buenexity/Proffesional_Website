import React from 'react';
import "./Hero.css";
import selfieImage from "../public/selfie.jpg"; 

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Rosendo Marquez</h1>
        <div className="info">
          <p>
            Computer Engineering student at University of California, Riverside
          </p>
        </div>
      </div>
      <div className="hero-img">
        <img id="img-pic" src={selfieImage} alt="Selfie" />
      </div>
    </div>
  );
}

export default Hero;

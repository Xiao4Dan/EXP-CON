import React, { useState } from "react";

import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero1.png";
import hero3 from "../../images/hero1.png";
function Hero(props) {
  const [heroBackground, setHeroBackground] = useState(hero1);
  return (
    <div className="HeroSection">
      <h1 className= "heading">INTERACTIVE CONCERT EXPERIENCE</h1>
      <h4 className= "heroSpec">
        Experience your favourite artists like never before and from the comfort
        of your own home.
      </h4>
      <button className="gradientBtn" onClick={() => console.log("trying")}>
        TRY IT NOW
      </button>
      <div className="heroSliderControl">
          <span id="hero1" className="active" onClick={() => setHeroBackground(hero1)}></span>
          <span id="hero2" onClick={() => setHeroBackground(hero2)}></span>
          <span id="hero3" onClick={() => setHeroBackground(hero3)}></span>
      </div>
      <img className="heroBackground" src={heroBackground} alt="heroBackgorund"/>
    </div>
  );
}

export default Hero;

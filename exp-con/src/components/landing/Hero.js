import React, { useEffect, useState, useRef } from "react";

import hero1 from "../../images/hero1.png";
import hero2 from "../../images/hero2.png";
import hero3 from "../../images/hero3.png";
import hoverEffect from "hover-effect/dist/hover-effect";
function Hero(props) {
  const heroImages = [hero1, hero2, hero3];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((heroIndex) => (heroIndex + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const item = document.querySelector(".heroBackground");
    while(item.firstChild){
        item.removeChild(item.firstChild);//remove duplicate
    }
    const animation = new hoverEffect({
      parent: document.querySelector(".heroBackground"),
      intensity: 0.8,
      image1: heroImages[(heroIndex + 1) % 3],
      image2: heroImages[heroIndex],
      displacementImage: heroImages[(heroIndex + 2) % 3],
    });
    animation.next();//new canvas transit
  }, [heroIndex]);

  return (
    <div className="HeroSection">
      <h1 className="heading">INTERACTIVE CONCERT EXPERIENCE</h1>
      <h4 className="heroSpec">
        Experience your favourite artists like never before and from the comfort
        of your own home.
      </h4>
      <button className="gradientBtn" onClick={() => console.log("trying")}>
        TRY IT NOW
      </button>
      <div className="heroSliderControl">
        <span
          id="hero1"
          className="active"
          onClick={() => setHeroIndex(0)}
        ></span>
        <span id="hero2" onClick={() => setHeroIndex(1)}></span>
        <span id="hero3" onClick={() => setHeroIndex(2)}></span>
      </div>
      <div className="heroBackground"></div>
    </div>
  );
}

export default Hero;

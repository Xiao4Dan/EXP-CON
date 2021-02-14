import React, { useEffect, useRef, useState } from "react";
import "../styles/Landing.scss";
import Hero from "./landing/Hero";
import Red from "./landing/Red";
import Yellow from "./landing/Yellow";
import Perks from "./landing/Perks";
import Reviews from "./landing/Reviews";
import Footer from "./landing/Footer";
function Landing(props) {
  const [scrollTop, setScrollTop] = useState(document.body.scrollTop);
  const innerRef = useRef(null);

  useEffect(() => {
    const body = innerRef.current;
    body.addEventListener("scroll", handleOnScroll);
    return () => {
      body.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const handleOnScroll = (e) => {
    // NOTE: This is for the sake of demonstration purpose only.
    // Doing this will greatly affect performance.
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div className="LandingPage" ref={innerRef}>
      <Hero />
      <Red />
      <Yellow />
      <Perks />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Landing;

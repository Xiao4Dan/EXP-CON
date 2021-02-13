import React from "react";
import '../styles/Landing.scss';
import Hero from './landing/Hero';
import Red from './landing/Red';
import Yellow from './landing/Yellow';
import Perks from './landing/Perks';
import Reviews from './landing/Reviews';
import Footer from './landing/Footer';
function Landing(props) {

  return (
    <div className="LandingPage">
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

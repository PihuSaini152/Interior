import React from "react";
import "./home.css";
import heroBg from "/homeimg/header.jpg"; 
import  Home2 from "./home2.jsx"

const Hero = () => {
  return (
    <section className="full-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="overlay">
        <div className="hero-text">
          <h1>
            Designing <span className="gold">Dreams</span>, <span className="gold">Building</span> Realities
          </h1>
          <p>
            From concept to creation, we design <span className="gold">timeless</span> spaces with 
            <span className="gold"> elegance & soul</span>.
          </p>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  
  );
};
  <Home2/>

export default Hero;

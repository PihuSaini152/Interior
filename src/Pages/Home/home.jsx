import React from "react";
import "./home.css";
import heroBg from "/homeimg/header.jpg"; 
import  Home2 from "./home2.jsx"
import ServicesPreview from "./servicesshort.jsx";
import Home3 from "./home3.jsx"
import Home4 from "./home4.jsx";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section className="full-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="overlay">
        <div className="hero-text">
          <h1>
            Designing <span className="gold1">Dreams</span>, <span className="gold1">Building</span> Realities
          </h1>
          <p>
            From concept to creation, we design <span className="gold">timeless</span> spaces with 
            <span className="gold"> elegance & soul</span>.
          </p>
        <Link to="/Projects">
         <button className="explore-btn">Explore Now</button>
         </Link>
        </div>
      </div>
    </section>
    
  <Home2/>
  <ServicesPreview/>
  <Home3/>
  <Home4/>

</>
  
  );
};
export default Hero;

import React, { useState } from "react";
import "./home3.css";

const slideImages = [
  "/homeimg/card1.jpg",
  "/homeimg/card2.jpg",
  "/homeimg/card3.jpg",
  "/homeimg/card4.jpg",
  "/homeimg/card5.jpg",
  "/homeimg/card6.jpg",
  "/homeimg/card7.jpg",
  "/homeimg/card8.jpg",
];

const HomeInterior = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleSlides = 4;

  const prevSlide = () => {
  setStartIndex((prev) => Math.max(prev - 1, 0));
};

const nextSlide = () => {
  setStartIndex((prev) =>
    prev + visibleSlides < slideImages.length ? prev + 1 : prev
  );
};


  const visibleImages = slideImages.slice(startIndex, startIndex + visibleSlides);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-grid">
      <div className="hero-box">
  <img src="/homeimg/home1.jpg" alt="Home 1" className="hero-image" />
  <div className="hero-title gold-title">Elegant Home</div>
</div>

<div className="hero-box">
  <img src="/homeimg/home2.jpg" alt="Home 2" className="hero-image" />
  <div className="hero-title blue-title">Modern Design</div>
</div>

      </div>
{/* 
      Slider Section */}
      <div className="slider-section">
        <h1 className="slider-heading">EXPLORE OUR INTERIORS</h1>
        <div className="slider-wrapper">
          <button className="slider-arrow" onClick={prevSlide}>&lt;</button>
          <div className="slider-container">
            {visibleImages.map((img, index) => (
             <div className="photo">
               <img
                key={index}
                src={img}
                alt={`Interior ${index + 1}`}
                className="slider-image"
              />
             </div>
            ))}
          </div>
          <button className="slider-arrow" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default HomeInterior;

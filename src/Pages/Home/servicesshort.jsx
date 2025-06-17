import React from "react";
import { Link } from "react-router-dom";
import { MdHomeWork, MdBusinessCenter, MdOutlineViewInAr } from "react-icons/md";
import "./servicesshort.css";

const ServicesPreview = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">
        Our <span className="gold">Services</span>
      </h2>

      <div className="services-grid">
        <div className="service-card">
          <MdHomeWork className="service-icon" />
          <h3>Residential Design</h3>
          <p>Transforming your home into a beautiful, functional space tailored to your lifestyle.</p>
        </div>

        <div className="service-card">
          <MdBusinessCenter className="service-icon" />
          <h3>Commercial Spaces</h3>
          <p>Crafting professional environments that inspire and leave a lasting impression.</p>
        </div>

        <div className="service-card">
          <MdOutlineViewInAr className="service-icon" />
          <h3>3D Visualizations</h3>
          <p>Preview your interiors with lifelike 3D renders before execution.</p>
        </div>
      </div>

      <Link to="/services">
        <button className="explore-btn">Explore All Services</button>
      </Link>
    </section>
  );
};

export default ServicesPreview;

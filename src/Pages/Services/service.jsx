import React from "react";
import "./service.css";
import {
  FaCouch,
  FaBed,
  FaUtensils,
  FaDoorClosed,
  FaLightbulb,
  FaPaintRoller,
  FaCheckCircle,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaCouch />,
    title: "Living Room Interior",
    description: "Stylish layouts for a comfortable, elegant space.",
  },
  {
    icon: <FaBed />,
    title: "Bedroom Design",
    description: "Personalized and peaceful bedroom interiors.",
  },
  {
    icon: <FaUtensils />,
    title: "Modular Kitchen",
    description: "Smart, functional kitchens for modern homes.",
  },
  {
    icon: <FaDoorClosed />,
    title: "Wardrobes & Storage",
    description: "Sleek, space-saving wardrobe designs.",
  },
  {
    icon: <FaLightbulb />,
    title: "False Ceiling & Lighting",
    description: "Stylish ceilings with ambient lighting.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Wall Textures & Panels",
    description: "Add depth and character to your walls.",
  },
];

const features = [
  "Custom Interior Design",
  "Quality Materials",
  "Budget-Friendly Packages",
  "On-Time Delivery",
  "End-to-End Execution",
  "3D Design Previews",
];

const Services = () => {
  return (
    <div className="services-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <h1>Crafting Elegant Interiors That Reflect You</h1>
        <p>
          From concept to completion, we transform your space into a dream home.
        </p>
        <button className="hero-btn">Explore Our Work</button>
      </section>

      {/* Core Services */}
      <section className="services-section">
        <h2 className="section-title">Our Core Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="work-process">
        <h2 className="section-title">How We Work</h2>
        <div className="steps-wrapper">
          <div className="step">
            <span>1</span>
            <h4>Free Consultation</h4>
            <p>We understand your vision and space needs.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h4>Design & 3D Visualization</h4>
            <p>We provide a clear plan with 3D layout & costing.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h4>Execution & Supervision</h4>
            <p>On-site work with quality checks and regular updates.</p>
          </div>
          <div className="step">
            <span>4</span>
            <h4>On-Time Handover</h4>
            <p>Your dream home – ready to move in, hassle-free.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
          {features.map((item, index) => (
            <div className="feature" key={index}>
              <FaCheckCircle className="check-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Your Dream Interior Awaits</h2>
        <p>Let Mukaesh Kumar and his team bring your vision to life.</p>
        <button className="cta-btn">Book Free Site Visit</button>
      </section>
    </div>
  );
};

export default Services;

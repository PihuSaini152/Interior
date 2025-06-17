
import React, { useEffect } from "react";
import "./about.css";

const AboutUs = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-us-page">
      <div className="about-banner">
        <div className="banner-content">
          <h1>About Us</h1>
          <p>Transforming Spaces into Beautiful Living</p>
        </div>
      </div>

      <section className="about-section reveal">
        <h2>Who We Are</h2>
        <p>
          We are an award-winning interior design studio focused on creating
          stunning and functional spaces. Our approach is client-centric,
          creative, and tailored for timeless results.
        </p>
      </section>

      <section className="about-section reveal">
        <h2>Our Mission</h2>
        <p>
          To create unique, sustainable, and soulful interiors that enhance
          lives, comfort, and personal expression.
        </p>
      </section>

      <section className="about-section reveal">
        <h2>Our Vision</h2>
        <p>
          To be recognized as the most innovative and trusted interior design
          brand globally, delivering spaces that speak for themselves.
        </p>
      </section>

      <section className="about-team reveal">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/team/member1.jpg" alt="Riya Sharma" />
            <h4>Riya Sharma</h4>
            <p>Lead Interior Designer</p>
          </div>
          <div className="team-member">
            <img src="/team/member2.jpg" alt="Arjun Mehta" />
            <h4>Arjun Mehta</h4>
            <p>Senior Architect</p>
          </div>
          <div className="team-member">
            <img src="/team/member3.jpg" alt="Sana Kapoor" />
            <h4>Sana Kapoor</h4>
            <p>Creative Head</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 

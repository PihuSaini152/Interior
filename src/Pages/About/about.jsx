
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

   useEffect(() => {
    const section = document.querySelector(".who-we-are-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
  }, []);

  return (
    <div className="about-us-page">
      <div className="about-banner">
        <div className="banner-content">
          <h1>About Us</h1>
          <p>Transforming Spaces into Beautiful Living</p>
        </div>
      </div>

       <section className="about-team reveal">
        <h2>ABOUT US</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/homeimg/card8.jpg" alt="Riya Sharma" />
            
          </div>
          <div className="team-member" style={{paddingTop:"10px"}}>
            <div className="abou-name">
            <h2>Mahesh Kumar Saini</h2>
            </div>
            <div className="about-us">
              <h3 style={{marginTop:"0px"}}>Experience : 8 years</h3>
              <h3>Location   : Samruddhi CHS, Worli, Mumbai - 400018</h3>
              <h3>Specialization : Mordan & Luxury Interiors</h3>
              <h3>Key Skills : Space Planning, 3D Design (INIFD)</h3>
              <h3>Project Completed : 55+ Homes, 35 Oftices, 20 Cafes</h3>
              <h3>Contact Info : grandgalaxygroup@gmail.com</h3>
            </div>
          </div>
         
        </div>
      </section>

      <section className="about-section reveal">
        <h2>Our Mission</h2>
        <p>
          To create unique, sustainable, and soulful interiors that enhance
          lives, comfort, and personal expression.
        </p>
      </section>


       <section className="who-we-are-section">
      
      <div className="who-we-are-content">
        <h2>More Than Design — We Craft Living Experiences</h2>
<p>
  At <strong>InteriorAura</strong>, we don’t simply style spaces — we tell stories through design.
  Every room is transformed into a reflection of the people who live, work, or gather there.
  Our approach is rooted in purpose, beauty, and meaning — where every texture, color,
  and layout choice is intentional.
</p>
<p>
  With over <strong>8 years of expertise</strong> and <strong>100+ thoughtfully executed projects</strong>,
  we merge timeless design sensibilities with contemporary aesthetics.
  Whether it’s a calm, soulful home or an energetic retail space, we craft environments
  that feel elegant, functional, and truly alive — spaces that speak to who you are.
</p>

      </div>
      <div className="who-we-are-image">
        <img src="/homeimg/card4.jpg" alt="Interior Design Studio" />
      </div>
    </section>

      <section className="about-section reveal">
  <h2>Our Vision</h2>
  <p>
    At <strong>InteriorAura</strong>, our vision is to redefine the way people experience spaces.
    We aspire to be a global leader in innovative, sustainable, and emotionally intelligent design —
    creating interiors that not only look stunning but tell a story and leave a lasting impression.
  </p>
  <p>
    We aim to inspire, uplift, and transform lives through meaningful design that blends
    creativity, comfort, and conscious living — making every space feel uniquely yours.
  </p>
</section>


     
      
    </div>

    
  );
};

export default AboutUs; 

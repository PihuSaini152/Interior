import React from "react";
import "./footer.css";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

// import logo from "/logo2.jpg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo + Description */}
        <div className="footer-left">
         <img src="/footerimg/logo2.jpg" alt="GRAND GALAXY GROUP" className="footer-logo" />

          <h2>GRAND GALAXY GROUP</h2>
          <p>We design luxury spaces with elegance, innovation, and style. Let's turn your dream home into reality.</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
        <div className="footer-center">
  <h3>Transform Your Space</h3>
  <p>Looking to transform your space? Let’s create your dream interior together.</p>
  <div className="placeholder-box">
    <input type="text" placeholder="Enter your email or phone..." />
    <span className="email-icon"><FiMail /></span>
  </div>
</div>



        {/* Right: Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GRAND GALAXY GROUP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

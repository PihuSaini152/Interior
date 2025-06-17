import React from "react";
import "./contact.css";
import { FaPhoneAlt, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      {/* Top Section */}
      <div className="top-section">
        <div className="left">
          <h2>CONTACT US</h2>
          <p className="desc">
            We are here to meet any interior need and<br />
            to transform your dream space beautifully.
          </p>

          <div className="contact-details">
            <p><strong>Phone:</strong> <a href="https://wa.me/917205853096">+91 7205853096</a></p>
            <p><strong>Location:</strong> Samruddhi CHS, Worli, Mumbai - 400018</p>
            <p><strong>Mail:</strong> <a href="mailto:grandgalaxygroup@gmail.com">grandgalaxygroup@gmail.com</a></p>
            <p><strong>Instagram:</strong> <a href="https://instagram.com/maheshsainik94">@maheshsainik94</a></p>
          </div>
        </div>

        <div className="right">
          <div className="circle-img">
            <img src="/contactimg/contact.jpg" alt="Workspace" />
          </div>
        </div>
      </div>

      {/* Bottom Info Cards */}
      <div className="bottom-cards">
        <div className="card">
          <FaPhoneAlt />
          <div>
            <h4>CALL US</h4>
            <p>+91 7205853096</p>
            
          </div>
        </div>

        <div className="card">
          <FaMapMarkerAlt />
          <div>
            <h4>LOCATION</h4>
            <p>Samruddhi CHS,</p>
            <p>Worli, Mumbai - 400018</p>
          </div>
        </div>

        <div className="card">
          <FaClock />
          <div>
            <h4>HOURS</h4>
            <p>Mon - Sat: 10AM - 7PM</p>
            <p>Sunday Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

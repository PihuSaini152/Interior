import React, { useState } from "react";
import "./home4.css";

const faqData = [
  {
    question: "Why choose our interior design services?",
    answer:
      "We offer personalized design plans tailored to your taste and lifestyle, using premium materials and experienced designers.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary, but most home interiors are completed within 4 to 8 weeks depending on the complexity.",
  },
  {
    question: "Do you offer eco-friendly design solutions?",
    answer:
      "Yes! We provide sustainable options like bamboo flooring, low-VOC paints, and energy-efficient lighting.",
  },
];

const Home4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>{item.question}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </section>
  );
};

export default Home4;

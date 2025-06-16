import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navebar/nav.jsx";
import Footer from "./Components/Footer/footer.jsx";

import Home from "./Pages/Home/home.jsx";
import About from "./Pages/About/about.jsx";
// import Projects from "./Pages/Projects/project.jsx";
// import Services from "./Pages/Services/service.jsx";
// import Contact from "./Pages/Contact/contact.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

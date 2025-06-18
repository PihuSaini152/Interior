import React, { useRef, useState, useEffect } from 'react';
import './project.css';
import Project_card from '../Projects/project_card.jsx';

function Project() {

  const hader_pics = [
    { id: 1, Image: '/project_img/IMG31.jpg', name: 'Modern Living Room' },
    { id: 2, Image: '/project_img/IMG32.jpg', name: 'Luxury Bedroom' },
    { id: 3, Image: '/project_img/IMG33.jpg', name: 'Classic Kitchen' }
  ];

  const sliderRef = useRef(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev < hader_pics.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [hader_pics.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${counter * 100}%)`;
    }
  }, [counter]);

  return (
    <>
      <div className="project_container">
        <div className="slider_main" ref={sliderRef}>
          {hader_pics.map((slide) => (
            <div key={slide.id} className="slider">
              <img src={slide.Image} alt={slide.name} className="slider_pic" />
              <h1 className="slider_heading">{slide.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <Project_card />
    </>

  );}

export default Project;

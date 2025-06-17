import React, { useRef, useState, useEffect } from 'react';
import './project.css';

function Project() {
  const hader_pics = [
    { id: 1, Image: '/project_img/IMG10.jpg', name: 'sourabh' },
    { id: 2, Image: '/project_img/IMG14.jpg', name: 'gaurav' },
    { id: 3, Image: '/project_img/IMG21.jpg', name: 'tunu' }
  ];

  const sliderRef = useRef(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev < hader_pics.length - 1 ? prev + 1 : 0));
    }, 2500); // 1 second

    return () => clearInterval(interval); // cleanup on unmount
  }, [hader_pics.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${counter * 100}%)`;
    }
  }, [counter]);

  return (
    <div className="project_container">
      <div className="slider_main" ref={sliderRef}>
        {hader_pics.map((slide) => (
          <div key={slide.id} className="slider">
            <img src={slide.Image} alt={slide.name} className="slider_pic" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

import React from 'react';
import './project_card.css';

function Project_card() {
  const names = [
    'Luxury Hall', 'Smart House Design ', 'Smart Kitchen','Modern Bedroom',
    'Royal Bedroom', 'Classic Design', 'Minimal Workspace', 'Wooden Finish',
    'Artistic Wall', 'Urban Style', 'Vintage Touch', 'Elegant Design',
    'Nature Theme', 'Compact Storage', 'LED Lighting', 'Wall Decor',
    'Open Wardrobe', 'Loft Look', 'Green Vibes','TV Setup', 'Ceiling Design',
     'Smart Study', 'Wall Panels', 'Bedside Setup',
    'Curtain Match', 'Decor Ideas', 'Small Space', 'Marble Magic',
    'Mirror Decor', 'Chic Interiors'
  ];

  const project_cards = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    Image: `/project_img/IMG${i + 1}.jpg`,
    name: names[i] || `Project ${i + 1}`
  }));

  return (
    <>
      <div className="projectmain">
        {project_cards.map((p_card) => (
          <div key={p_card.id} className="project_div">
            <a href={p_card.Image} target="_blank" rel="noopener noreferrer">
              <img src={p_card.Image} alt={p_card.name} className="project_image" />
            </a>
            <h4 className="project_haddin">{p_card.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project_card;

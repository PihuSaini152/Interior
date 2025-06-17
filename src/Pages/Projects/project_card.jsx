import React from 'react'
import './project_card.css'
function project_card() {
    const project_cards = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  Image: `/project_img/IMG${i + 1}.jpg`,
  name: `object_name_${i + 1}`
}));

  return (
    <>
    <div className="projectmain">
 {
  project_cards.map((p_card)=>(
    <div key={p_card.id} className="project_div">
        <img src={p_card.Image} alt="" className='project_image' />
        <h4>{p_card.name}</h4>
    </div>
  ))
 }
    </div>
     
    </>
  )
}

export default project_card

import React, { useState } from 'react';
import './wardrobe.css';
import img from './groom.jpg';

function Wardrobe ()  {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
      <div className="page page7">
        <div className=" container">

       <div className="row">

       
      <div className=' d-flex col-md-4'>
    <div
      className={`image-card ${isHovered ? 'hovered' : ''} my-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={img}
        className="card-image "
      /> 
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Wardrobe

import React, { useState } from 'react';
import './imgcard.css';

function ImageCard ({img1,img2,img3})  {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
  <div className='col-md-4'>
    <div
      className={`image-card ${isHovered ? 'hovered' : ''} my-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={img1}
        className="card-image "
      /> 
    <img
        src={img2}
        className="card-image "
        /> 
    <img
        src={img3}
        className="card-image "
        /> 
        </div>

    </div>
    </>
  );
};

export default ImageCard;

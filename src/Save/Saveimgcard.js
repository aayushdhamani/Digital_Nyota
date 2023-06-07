import React, { useState } from 'react';
import './Saveimgcard.css';

function ImageCard ({img1})  {
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
        </div>

    </div>
    </>
  );
};

export default ImageCard;

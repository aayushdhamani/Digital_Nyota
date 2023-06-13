import React, { useRef } from 'react';
import './engagement.css';

import V1 from './video.mp4';


function Engagement  ()  {

  const videoRef1 = useRef(null);

const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };


  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
   
      <div className="page page9">
<div className=" container">

          <div className="row">

         
            <div className=" my-5 d-flex col-md-4">

        <div onMouseEnter={() => handleMouseEnter(videoRef1)} onMouseLeave={() => handleMouseLeave(videoRef1)}  className="col-sm-4 col-md-3 delicacy" >
          <video ref={videoRef1} className='video' width="216" height="384"    >
            <source src={V1} type="video/mp4" />
          </video>
        </div>
            </div>
            </div>
            </div>
      </div>
  )
}

export default Engagement

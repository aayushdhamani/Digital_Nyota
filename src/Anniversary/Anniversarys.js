import React, { useRef } from 'react';
import './anniversary.css';

import V1 from './video.mp4'; 
const Anniversarys = () => {
    const videoRef1 = useRef(null);

    const handleMouseEnter = (videoRef) => {
        videoRef.current.play();
      };
    
    
      const handleMouseLeave = (videoRef) => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      };
  return (
    <div>
       <div className="page page8">
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
    </div>
  )
}

export default Anniversarys

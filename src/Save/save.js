import React, { useRef } from 'react';
import './save.css'
import Imgcard from './Saveimgcard.js';
import V1 from './videos/V1.mp4'
import V2 from './videos/V2.mp4'
import V3 from './videos/V3.mp4'
import V4 from './videos/V4.mp4'
import V5 from './videos/V5.mp4'
import V6 from './videos/V6.mp4'
import V7 from './videos/V7.mp4'
import V8 from './videos/V8.mp4'
import V9 from './videos/V9.mp4'
import V10 from './videos/V10.mp4'
import V11 from './videos/V11.mp4'
import V12 from './videos/V12.mp4'
import V13 from './videos/V13.mp4'
import V14 from './videos/V14.mp4'


const Save = () => {

        let Images=[{
            id:1,
            img1:'IMAGE/SaveImages/img1.jpg'
        },{
            id:2,
            img1:'IMAGE/SaveImages/img2.jpg'
        },{
            id:3,
            img1:'IMAGE/SaveImages/img3.jpg'
        },{
            id:4,
            img1:'IMAGE/SaveImages/img4.jpg'
        },{
            id:5,
            img1:'IMAGE/SaveImages/img5.jpg'
        }];
   
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);
  const videoRef9 = useRef(null);
  const videoRef10 = useRef(null);
  const videoRef11 = useRef(null);
  const videoRef12 = useRef(null);
  const videoRef13 = useRef(null);
  const videoRef14 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };


  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="page page5">
      <div style={{ fontSize: "20px" }}>
          <p
            className="heading text-center fw-bold"
            style={{ color: "white",backgroundColor:"#0f6d53" }}
          >
            Video save the date
          </p>
        </div>
     
<div className="container">


      <div className="row delicacies-row">
        <div onMouseEnter={() => handleMouseEnter(videoRef1)} onMouseLeave={() => handleMouseLeave(videoRef1)}  className="col-sm-4 col-md-3 delicacy" >
          <video ref={videoRef1} className='video' width="216" height="384"    >
            <source src={V1} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef2)} onMouseLeave={() => handleMouseLeave(videoRef2)}  className="col-sm-4 col-md-3 delicacy" >
          <video ref={videoRef2} className='video' width="216" height="384"    >
            <source src={V2} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef3)} onMouseLeave={() => handleMouseLeave(videoRef3)}  className="col-sm-4 col-md-3 delicacy" >
          <video ref={videoRef3} className='video' width="216" height="384"    >
            <source src={V3} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef14)} onMouseLeave={() => handleMouseLeave(videoRef14)}  className="col-sm-4 col-md-3 delicacy" >
          <video ref={videoRef14} className='video' width="216" height="384"    >
            <source src={V14} type="video/mp4" />
          </video>
        </div>

     
        <div onMouseEnter={() => handleMouseEnter(videoRef5)} onMouseLeave={() => handleMouseLeave(videoRef5)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef5} className='video' width="216" height="384"    >
            <source src={V5} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef6)} onMouseLeave={() => handleMouseLeave(videoRef6)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef6} className='video' width="216" height="384"    >
            <source src={V6} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef7)} onMouseLeave={() => handleMouseLeave(videoRef7)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef7} className='video' width="216" height="384"    >
            <source src={V7} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef8)} onMouseLeave={() => handleMouseLeave(videoRef8)}  className="col-sm-4 col-md-4 delicacy" >
            <video ref={videoRef8} className='video' width="216" height="384"    >
            <source src={V8} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef9)} onMouseLeave={() => handleMouseLeave(videoRef9)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef9} className='video' width="216" height="384"    >
            <source src={V9} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef10)} onMouseLeave={() => handleMouseLeave(videoRef10)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef10} className='video' width="216" height="384"    >
            <source src={V10} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef11)} onMouseLeave={() => handleMouseLeave(videoRef11)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef11} className='video' width="216" height="384"    >
            <source src={V11} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef12)} onMouseLeave={() => handleMouseLeave(videoRef12)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef12} className='video' width="216" height="384"    >
            <source src={V12} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef13)} onMouseLeave={() => handleMouseLeave(videoRef13)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef13} className='video' width="216" height="384"    >
            <source src={V13} type="video/mp4" />
          </video>
        </div>
        <div onMouseEnter={() => handleMouseEnter(videoRef4)} onMouseLeave={() => handleMouseLeave(videoRef4)}  className="col-sm-4 col-md-4 delicacy" >
          <video ref={videoRef4} className='video' width="216" height="384"    >
              <source src={V4} type="video/mp4" />
          </video>
        </div>
      </div>
      </div>
      <div style={{ fontSize: "20px" }}>
          <p
            className="heading text-center fw-bold"
            style={{ color: "white",backgroundColor:"#0f6d53" }}
          >
            Static save the date
          </p>
        </div>
        <div className="container">
          <div className="row my-3 d-flex ">
            {Images.map((Images) => (
              <Imgcard img1={Images.img1}></Imgcard>
            ))}
          </div>
        </div>
              </div>
 
     
  )

}
export default Save
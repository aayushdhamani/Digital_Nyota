// import React, { useRef } from 'react';
// import './save.css'
// import Imgcard from './Saveimgcard.js';
// import V1 from './videos/V1.mp4'
// import V2 from './videos/V2.mp4'
// import V3 from './videos/V3.mp4'
// import V4 from './videos/V4.mp4'
// import V5 from './videos/V5.mp4'
// import V6 from './videos/V6.mp4'
// import V7 from './videos/V7.mp4'
// import V8 from './videos/V8.mp4'
// import V9 from './videos/V9.mp4'
// import V10 from './videos/V10.mp4'
// import V11 from './videos/V11.mp4'
// import V12 from './videos/V12.mp4'
// import V13 from './videos/V13.mp4'
// import V14 from './videos/V14.mp4'


// const Save = () => {
//   const videoRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//   ];

//   const handleMouseEnter = (index) => {
//     videoRefs[index].current.play();
//   };

//   const handleMouseLeave = (index) => {
//     const videoRef = videoRefs[index].current;
//     videoRef.pause();
//     videoRef.currentTime = 0;
//   };

//   let Images = [
//     {
//       id: 1,
//       img1: 'IMAGE/SaveImages/img1.jpg',
//     },
//     {
//       id: 2,
//       img1: 'IMAGE/SaveImages/img2.jpg',
//     },
//     {
//       id: 3,
//       img1: 'IMAGE/SaveImages/img3.jpg',
//     },
//     {
//       id: 4,
//       img1: 'IMAGE/SaveImages/img4.jpg',
//     },
//     {
//       id: 5,
//       img1: 'IMAGE/SaveImages/img5.jpg',
//     },
//   ];

//   const videos = [V1, V2, V3, V14, V5, V6, V7, V8, V9, V10, V11, V12, V13, V4];


//   return (
    // <div className="page page5">
    //   <div style={{ fontSize: "20px" }}>
    //       <p
    //         className="heading text-center fw-bold"
    //         style={{ color: "white",backgroundColor:"#0f6d53" }}
    //       >
    //         Video save the date
    //       </p>
    //     </div>
     
    //     <div className="container">
    //     <div className="row delicacies-row">
    //       {videos.map((video, index) => (
    //         <div
    //           key={index}
    //           onMouseEnter={() => handleMouseEnter(index)}
    //           onMouseLeave={() => handleMouseLeave(index)}
    //           className="col-sm-4 col-md-3 delicacy"
    //         >
    //           <video ref={videoRefs[index]} className="video" width="216" height="384">
    //             <source src={video} type="video/mp4" />
    //           </video>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div style={{ fontSize: "20px" }}>
    //       <p
    //         className="heading text-center fw-bold"
    //         style={{ color: "white",backgroundColor:"#0f6d53" }}
    //       >
    //         Static save the date
    //       </p>
    //     </div>
    //     <div className="container">
    //       <div className="row my-3 d-flex ">
    //         {Images.map((Images) => (
    //           <Imgcard img1={Images.img1}></Imgcard>
    //         ))}
    //       </div>
    //     </div>
    //           </div>
 
     
//   )

// }
// export default Save
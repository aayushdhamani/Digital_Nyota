import React, { useState, useEffect, useRef } from "react";
import "./save.css";
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

const Savedate = () => {
  // const videoRefs = [
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

  // let Images = [
  //   {
  //     id: 1,
  //     img1: 'IMAGE/SaveImages/img1.jpg',
  //   },
  //   {
  //     id: 2,
  //     img1: 'IMAGE/SaveImages/img2.jpg',
  //   },
  //   {
  //     id: 3,
  //     img1: 'IMAGE/SaveImages/img3.jpg',
  //   },
  //   {
  //     id: 4,
  //     img1: 'IMAGE/SaveImages/img4.jpg',
  //   },
  //   {
  //     id: 5,
  //     img1: 'IMAGE/SaveImages/img5.jpg',
  //   },
  // ];

  // const videos = [V1, V2, V3, V14, V5, V6, V7, V8, V9, V10, V11, V12, V13, V4];

  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const videoRefs = useRef([]);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    fetch(
      "https://backend-production-e1c2.up.railway.app/api/video/getallvideo2",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWJjYzJmNzQ1ZTk3YjkxYjAxYjE1In0sImlhdCI6MTY4Njg2MDkwOX0.aWg9W1VlyWtbZQhWUJIHtmXMGkSu7t5Z1LLA-X7H_Xs",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response?.videos);
        console.log(response.videos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://backend-production-e1c2.up.railway.app/api/Image/getallimagesdata`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWJjYzJmNzQ1ZTk3YjkxYjAxYjE1In0sImlhdCI6MTY4Njg2MDkwOX0.aWg9W1VlyWtbZQhWUJIHtmXMGkSu7t5Z1LLA-X7H_Xs",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // dispatch(datasImage2(response))
        setDatas(response?.images);
        // console.log(response.videos);
        // setSettingsData(response);/
      })
      .catch((error) => {
        // console.log(error, "joih");
      });
  }, []);

  const handleMouseEnter = (index) => {
    const videoRef = videoRefs.current[index];
    clearTimeout(debounceTimeout.current);
    videoRef.currentTime = 0;
    debounceTimeout.current = setTimeout(() => {
      videoRef.play().catch((error) => {
        console.log(error);
      });
    }, 300);
  };

  const handleMouseLeave = (index) => {
    const videoRef = videoRefs.current[index];
    clearTimeout(debounceTimeout.current);
    videoRef.pause();
    videoRef.currentTime = 0;
  };

  return (
    <div className="page page5">
      <div style={{ fontSize: "20px" }}>
        <p
          className="heading text-center fw-bold"
          style={{ color: "white", backgroundColor: "#0f6d53" }}
        >
          Video save the date
        </p>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center p-4">
          {data?.map((harsh, index) => (
            <div
              className=" save d-flex flex-column my-5"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(ref) => (videoRefs.current[index] = ref)}
                width="250px"
                height="450px"
              >
                <source
                  src={`https://backend-production-e1c2.up.railway.app/${harsh?.video}`}
                  type="video/mp4"
                />
              </video>
            </div>
          ))}
        </div>
      </div>
      <div style={{ fontSize: "20px" }}>
        <p
          className="heading text-center fw-bold"
          style={{ color: "white", backgroundColor: "#0f6d53" }}
        >
          Static save the date
        </p>
      </div>


       <div className="d-flex flex-wrap justify-content-between align-items-center">

{datas?.map((harsh, index) => {
  console.log(harsh?.image);
  return (
    <div className=" save2 d-flex column m-4">
      <img
        alt="not found"
        width={"250px"}
        height={"auto"}
        className="border border-dark responsive-image"
        src={`https://backend-production-e1c2.up.railway.app/${harsh?.image}`}
      />
    </div>
  );
})}

</div>
      </div>
  
  );
};

export default Savedate;

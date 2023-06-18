import React, { useState, useEffect, useRef } from "react";
import "./save.css";


const Savedate = () => {

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
      <div style={{ fontSize: "20px" ,marginTop:'22px'}}>
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
              className=" save d-flex flex-column my-3 col-md-4"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(ref) => (videoRefs.current[index] = ref)}
                width="280px"
                // height="450px"
              className="save-video"
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


       <div className="save2 d-flex flex-wrap justify-content-between align-items-center">

{datas?.map((harsh, index) => {
  console.log(harsh?.image);
  return (
    <div className="  d-flex flex-column my-3 col-md-4 ">
      <img
        alt="not found"
        width={"250px"}
        height={"auto"}
        className="image-card responsive-image"
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

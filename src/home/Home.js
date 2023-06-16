import React, { useState, useEffect, useRef } from 'react';
import './home.css';

const Home = () => {
  const [data, setData] = useState([]);
  const debounceTimeout = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    fetch('https://backend-production-e1c2.up.railway.app/api/video/getallvideo', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWJjYzJmNzQ1ZTk3YjkxYjAxYjE1In0sImlhdCI6MTY4Njg2MDkwOX0.aWg9W1VlyWtbZQhWUJIHtmXMGkSu7t5Z1LLA-X7H_Xs",
      },
    })
      .then(response => response.json())
      .then(response => {
        setData(response?.videos);
        console.log(response.videos);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleMouseEnter = index => {
    const videoRef = videoRefs.current[index];
    clearTimeout(debounceTimeout.current);
    videoRef.currentTime = 0;
    debounceTimeout.current = setTimeout(() => {
      videoRef.play().catch(error => {
        console.log(error);
      });
    }, 300);
  };

  const handleMouseLeave = index => {
    const videoRef = videoRefs.current[index];
    clearTimeout(debounceTimeout.current);
    videoRef.pause();
    videoRef.currentTime = 0;
  };

  return (
    <div className="home-container">
      <div className="scrollable-container">
        <div className="d-flex flex-nowrap p-5 m-2">
          {data?.map((harsh, index) => (
            <div
              className="d-flex flex-column m-1"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={ref => (videoRefs.current[index] = ref)}
                width="350px"
                height="450px"
                style={{ borderRadius: '25px' }}
              >
                <source
                  src={`https://backend-production-e1c2.up.railway.app/${harsh?.video}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

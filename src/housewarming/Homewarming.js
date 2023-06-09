import React, { useState, useEffect, useRef } from 'react';
import './homewarming.css';

const Homewarming = () => {
  const [data, setData] = useState([]);
    const videoRefs = useRef([]);
    const debounceTimeout = useRef(null);

  useEffect(() => {
    fetch('https://backend-production-e1c2.up.railway.app/api/video/getallvideo8', {
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


<div>
       <div className="page page15">
       <div className="container d-flex flex-wrap justify-content-between align-items-center">
    {data?.map((harsh, index) => (
 <div
 

 className="row d-flex flex-column my-5 col-md-4"
 key={index}
 onMouseEnter={() => handleMouseEnter(index)}
 onMouseLeave={() => handleMouseLeave(index)}
 
>
 <video
   ref={ref => (videoRefs.current[index] = ref)}
   width="300px"
   height="450px"
   className="save-video"
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
  )
}


export default Homewarming

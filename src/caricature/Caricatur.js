import React, { useState, useEffect, useRef } from 'react';
import './caricature.css';

const Caricatur = () => {
    const [data,SetData]=useState([])
    const videoRefs = useRef([]);
    const debounceTimeout = useRef(null);
    useEffect(()=>{
      fetch(`
      https://backend-production-e1c2.up.railway.app/api/video/getallvideo5`, {
    
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWJjYzJmNzQ1ZTk3YjkxYjAxYjE1In0sImlhdCI6MTY4NjgxMzkxNX0.dCi23BNy9lQfrZH4i9d8AbubYEBv45SxAMDspoRtC0M"
    
      },
    })
      .then(response => response.json())
      .then(response => {
        // dispatch(datasImage(response))
          SetData(response?.videos);
          console.log(response);
      })
      .catch(error => {
      });
    },[])
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
    <div className="scrollable-container bg-image">
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

export default Caricatur

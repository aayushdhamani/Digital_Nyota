import React, { useState ,useEffect} from 'react';
import './wardrobe.css';


const Wardrobes = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimagesdata2`, {
  
    method: "GET",
    headers: {
        "content-type": "application/json",
        'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWJjYzJmNzQ1ZTk3YjkxYjAxYjE1In0sImlhdCI6MTY4NjgxMzkxNX0.dCi23BNy9lQfrZH4i9d8AbubYEBv45SxAMDspoRtC0M"
    },
  })
    .then(response => response.json())
    .then(response => {
      // dispatch(datasImage(response))
        setData(response?.images);
        console.log(response);
    })
    .catch(error => {
    });
  },[])
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
        <div className="page page7">
        <div className=" container">     
      <div className=" d-flex flex-wrap justify-content-between align-items-center">

{data?.map((harsh, index) => {
  console.log(harsh?.image);
  return (
    <div className=" ward d-flex flex-column column m-4">
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
      </div>


  )
}

export default Wardrobes

import React, { useState ,useEffect } from "react"
import "./days.css";
// import Imgcard from "./imgcard";
// import './imgcard.css';
const Dayss = () => {
    
  const [data,SetData]= useState([]);
  const [datas,SetDatas]= useState([]);

  useEffect(()=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimages`, {
  
    method: "GET",
    headers: {
        "content-type": "application/json",
        'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWJjYzJmNzQ1ZTk3YjkxYjAxYjE1In0sImlhdCI6MTY4NjgxMzkxNX0.dCi23BNy9lQfrZH4i9d8AbubYEBv45SxAMDspoRtC0M"
    },
  })
    .then(response => response.json())
    .then(response => {
      // dispatch(datasImage(response))
        SetData(response?.images);
        console.log(response);
    })
    .catch(error => {
    });
  },[])

  useEffect(()=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimagesdata3`, {
  
    method: "GET",
    headers: {
        "content-type": "application/json",
        'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YWJjYzJmNzQ1ZTk3YjkxYjAxYjE1In0sImlhdCI6MTY4NjgxMzkxNX0.dCi23BNy9lQfrZH4i9d8AbubYEBv45SxAMDspoRtC0M"
    },
  })
    .then(response => response.json())
    .then(response => {
      // dispatch(datasImage(response))
        SetDatas(response?.images);
        // debugger;
        console.log(response);
    })
    .catch(error => {
    });
  },[])
  
   
  
  
  return (
    <>
    <div className="page page4">
    <div style={{ fontSize: "20px" ,marginTop:'22px'}}>
          <p
            className="heading text-center fw-bold"
            style={{ color: "white",backgroundColor:"#0f6d53" }}
          >
            Creative days to go
          </p>
        </div>
        <div className="container d-flex flex-wrap justify-content-between align-items-center">

{data?.map((harsh, index) => {
  console.log(harsh?.image);
  return (
    <div className="day d-flex flex-column my-3 col-md-3">
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


<div style={{ fontSize: "20px" }}>
          <p
            className="heading text-center fw-bold my-2"
            style={{ color: "white",backgroundColor:"#0f6d53"}}
          >
            Pictures days to go
          </p>
          <div className="container d-flex flex-wrap justify-content-between align-items-center   ">
          {datas?.map((harsh, index) => {
          // debugger;
    console.log(harsh?.image,"harsh");
    return (

      
        <div  className="day d-flex flex-column my-3 col-md-3">

            <img alt="not found" width={"250px"}
        height={"auto"}
        className="image-card responsive-image" src={`https://backend-production-e1c2.up.railway.app/${harsh?.image}`}   />
           
             </div>
    )
  }
  )}
  </div>

        </div>
       
</div>
  


    </>
  );
}

export default Dayss

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
  
   
  // let countdown1 = [
  //   {
  //     id: 1,
  //     img1: "IMAGE/images/Creday1.jpg",
  //   },
  //   {
  //     id: 2,
  //     img1: "IMAGE/images/Creday2.jpg",
  //   },
  //   {
  //     id: 3,
  //     img1: "IMAGE/images/Creday3.jpg",
  //   },
  //   {
  //     id: 4,
  //     img1: "IMAGE/images/Creday4.jpg",
  //   },
  //   {
  //     id: 5,
  //     img1: "IMAGE/images/Creday5.jpg",
  //   }
  // ];
  // let countdown2 = [
  //   {
  //     id: 1,
  //     img2: "IMAGE/images/P1day1.jpg",
  //   },
  //   {
  //     id: 2,
  //     img2: "IMAGE/images/P1day2.jpg",
  //   },
  //   {
  //     id: 3,
  //     img2: "IMAGE/images/P1day3.jpg",
  //   },
  //   {
  //     id: 4,
  //     img2: "IMAGE/images/P1day4.jpg",
  //   },
  //   {
  //     id: 5,
  //     img2: "IMAGE/images/P1day5.jpg",
  //   },
  //   {
  //     id: 6,
  //     img2: "IMAGE/images/P1day6.jpg",
  //   },
  //   {
  //     id: 7,
  //     img2: "IMAGE/images/P1day7.jpg",
  //   }
  // ];
  // let countdown3 = [
  //   {
  //     id: 1,
  //     img3: "IMAGE/images/P2day1.jpg",
  //   },
  //   {
  //     id: 2,
  //     img3: "IMAGE/images/P2day2.jpg",
  //   },
  //   {
  //     id: 3,
  //     img3: "IMAGE/images/P2day3.jpg",
  //   },
  //   {
  //     id: 4,
  //     img3: "IMAGE/images/P2day4.jpg",
  //   },
  //   {
  //     id: 5,
  //     img3: "IMAGE/images/P2day5.jpg",
  //   },
  //   {
  //     id: 6,
  //     img3: "IMAGE/images/P2day6.jpg",
  //   },
  //   {
  //     id: 7,
  //     img3: "IMAGE/images/P2day7.jpg",
  //   }
  // ];
  
  return (
    <>
    <div className="page page4">
    <div style={{ fontSize: "20px" }}>
          <p
            className="heading text-center fw-bold"
            style={{ color: "white",backgroundColor:"#0f6d53" }}
          >
            Creative days to go
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center">

{data?.map((harsh, index) => {
  console.log(harsh?.image);
  return (
    <div className="d-flex column m-4">
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


<div style={{ fontSize: "20px" }}>
          <p
            className="heading text-center fw-bold"
            style={{ color: "white",backgroundColor:"#0f6d53" }}
          >
            Pictures days to go
          </p>
          <div className="d-flex flex-wrap justify-content-between align-items-center   ">
          {datas?.map((harsh, index) => {
          // debugger;
    console.log(harsh?.image,"harsh");
    return (

      
        <div  className="  d-flex column m-4">

            <img alt="not found" width={"250px"}
        height={"auto"}
        className="border border-dark responsive-image" src={`https://backend-production-e1c2.up.railway.app/${harsh?.image}`}   />
           
             </div>
    )
  }
  )}
  </div>

        </div>
       
</div>
  
{/* <div class="page page4">
       <div style={{ fontSize: "20px" }}>
          <p
            className="heading text-center fw-bold"
            style={{ color: "white",backgroundColor:"#0f6d53" }}
          >
            Creative days to go
          </p>
        </div>
        <div className="container">
          <div className="row my-3 d-flex">
            {countdown1.map((countdown1) => (
              <Imgcard img1={countdown1.img1}></Imgcard>
            ))}
          </div>
        </div>
        <div style={{ fontSize: "20px" }}>
          <p
            className="heading text-center fw-bold"
            style={{ color: "white",backgroundColor:"#0f6d53" }}
          >
            Pictures days to go
          </p>
        </div>
        <div className="container">
        <div className="row my-3 d-flex">
          {countdown2.map((countdown2) => (
            <Imgcard img2={countdown2.img2}></Imgcard>
          ))}
        </div>
        </div>
        <div style={{ fontSize: "20px" }}>
          <p
            className="heading text-center fw-bold"
            style={{ color: "white",backgroundColor:"#0f6d53"  }}
          >
            Pictures days to go
          </p>
        </div>
        <div className="container">
        <div className="row my-3 d-flex">
          {countdown3.map((countdown3) => (
            <Imgcard img3={countdown3.img3}></Imgcard>
          ))}
        </div>
        </div> */}

      {/* </div>  */}

    </>
  );
}

export default Dayss

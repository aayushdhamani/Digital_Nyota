import React, { useState ,useEffect} from 'react';
import './imgcard.css';

function ImageCard ({img1,img2,img3})  {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [data,SetData]=useState([])
useEffect(()=>{
  fetch(`https://web-production-2864.up.railway.app/api/Image/getallimages`, {

  method: "GET",
  headers: {
      "content-type": "application/json",
      'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NzZjN2U2OWNjODMyOWYzODhiY2JjIn0sImlhdCI6MTY4NjU5Njc1Nn0.RZNb_9MguU2LMmP4xPpK4g6d7CK1hHUdUc6uHKOsA9Q"
  },
})
  .then(response => response.json())
  .then(response => {
    // dispatch(datasImage(response))
      SetData(response?.images);
      console.log(response);
  })
  .catch(error => {
      // console.log(error, "joih");
  });
},[])
  return (
    <>
    <div className="d-flex flex-wrap justify-content-between align-items-center p-5  ">

{/* <br />  */}
{data?.map((harsh, index) => {
    console.log(harsh.image);
    // debugger
    return (
        <div  className="d-flex flex-column m-3">

            <img alt="not fount" width={"300px"} height={"250px"} className="border border-dark" src={`https://backend-production-e1c2.up.railway.app/${harsh?.image}`}  data-bs-toggle="modal" data-bs-target="#exampleModal" />
            {/* <span>{selectedImage?.lastModifiedDate}</span> */}
            
                                   </div>
    )
}
)}
</div>
  <div className='col-md-4'>
    <div
      className={`image-card ${isHovered ? 'hovered' : ''} my-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={img1}
        className="card-image "
      /> 
    <img
        src={img2}
        className="card-image "
        /> 
    <img
        src={img3}
        className="card-image "
        /> 
        </div>

    </div>
    </>
  );
};

export default ImageCard;

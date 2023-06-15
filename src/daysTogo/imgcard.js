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

//   const [data,SetData]=useState([])
// useEffect(()=>{
//   fetch(`https://web-production-2864.up.railway.app/api/Image/getallimages`, {

//   method: "GET",
//   headers: {
//       "content-type": "application/json",
//       'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4NzkzYmFlMzFjYzI2MWRlMDUyMzllIn0sImlhdCI6MTY4NjYwNjgwMn0._BWrPeScchSDs3UzolaK0N6c8wHBv8oHo0KlMRygtPw"
//   },
// })
//   .then(response => response.json())
//   .then(response => {
//     // dispatch(datasImage(response))
//       SetData(response?.images);
//       console.log(response);
//   })
//   .catch(error => {
//   });
// },[])
//   return (
//     <>
//     <div className="d-flex flex-wrap justify-content-between align-items-center p-5  ">
// {data?.map((harsh, index) => {
//     console.log(harsh?.image);
//     return (
//         <div  className=" row d-flex  m-3">

//             <img alt="not found"  className="border border-dark" src={`https://web-production-2864.up.railway.app/${harsh?.image}`}   />
           
//              </div>
//     )
// }
// )}
// </div>
  return (
    <>
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

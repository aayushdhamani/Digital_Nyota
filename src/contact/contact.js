import "./contact.css";
import React, {useState} from "react";
import { FaWhatsapp } from "react-icons/fa";



const Contact = () => {
 
  const [user,setUser]=useState({
    name:"",password:"",email:"",invitation_type:"",comments:""
  });
  console.log(user);
  let name,value;
  const handleInputs=(e)=>{
  console.log(e);
  // name=e.target.name;
  // value=e.target.value;
  const {name, value}=e.target
  
  setUser({...user,[name]:value});
  }
  const hittingData=(e)=>{
    e.preventDefault();
    // debugger;
    const{name,password, email, invitation_type,comments}=user;
        fetch(`https://therailicious.com/api/notes/addnote`, {
         method: "POST",
         headers: {
           "content-type": "application/json"
         },
   
         body: JSON.stringify(
           {
            name,email,password
           })
       })
   
         .then(response => response.json())
         .then(response => {
   
           if (!response?.success) {
             throw Error(response.error)
   
           }
          //  console.log(response);
          //  console.log(response);
          //  toast.success(response?.message)
           // setMessage(response);
          //  navigate("/sign-in")
   
         })
         .catch((error) => {
          //  console.log(error);
          //  toast.error(error?.message);
   
         });

    
  }
  return (
    <>
   
      <div className="page page2">
        <div className=" container  fw-bold" style={{ fontSize: "20px" }}>
          <p className="contact text-center" style={{ color: "black" }}>
            Contact Us
          </p>
        </div>
        <div className="row container mb-5">
          <div className="col-md-6" style={{ fontSize: "20px" }}>
            <p
              className="contact-text text-start "
              style={{ color: "#0f6d53" }}
            >
              Thank you for considering Digital Nyota
            </p>
          </div>
          <div
            className="container-form col-md-6"
            style={{
              backgroundColor: "#0f6d53",
              color: "white",
              marginTop: "75px",
              marginLeft: "px",
            }}
          >
            <form  onSubmit={hittingData}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="number" className="form-label">
                  Mobile no.
                </label>
                <input
                  type="integer"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  aria-describedby="emailHelp"
                />
                <div
                  id="emailHelp"
                  className="form-text"
                  style={{ color: "white" }}
                >
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-4">
                <label for="Invitation" className="form-label">
                  Invitation type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="invitation_type"
                  name="invitation_type"
                  value={user.invitation_type}
                  onChange={handleInputs}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className=" form-floating mb-4">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="comments"
                  name="comments"
                  value={user.comments}
                  onChange={handleInputs}
                ></textarea>
                <label for="floatingTextarea" style={{ color: "grey" }}>
                  How we can help you?
                </label>
              </div>
              <button type="submit" className="formbtn btn btn-success mb-2">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className=" wtsbtn container " style={{ fontsize: "20px" }}>
          <a
            href="https://wa.me/8387801336?text=Hello%20from%20my%20website!"
            target="_blank"
          >
            <button className="btn2 btn btn-success">
              <FaWhatsapp /> Whatsapp us for more info
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

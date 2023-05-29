import React from 'react'
import './contact.css'
import { FaWhatsapp } from 'react-icons/fa'

const contact = () => {
  return (
    <>
   
  <div class="page page2">
     <div className=" container  fw-bold" style={{fontSize:'20px'}} >
       <p class="contact text-center"style={{color:'black'}}>Contact Us</p> 

     </div>
     <div className="row container mb-5" >
        <div className="col-md-6" style={{fontSize:'20px'}}>
<p class="contact-text text-center "style={{color:'#0f6d53'}}>Thank you for considering Digital Nyota</p>
        </div>
        <div className="container-form col-md-6" style={{backgroundColor:'#0f6d53',color:'white',marginTop:'75px',marginLeft:'px'}}>
        <form action="http://localhost:3000/DIGINVI/invitation/src/php/form.php" method="post">
  <div class="mb-3">
    <label for="name" class="form-label" >Name</label>
    <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="number" class="form-label" >Mobile no.</label>
    <input type="integer" class="form-control" id="number" name="number" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text" style={{color:'white'}}>We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-4">
    <label for="Invitation" class="form-label">Invitation type</label>
    <input type="text" class="form-control" id="Invitation" name="Invitation" aria-describedby="emailHelp"/>
  </div>
  <div class=" form-floating mb-4">
  <textarea class="form-control" placeholder="Leave a comment here" id="comments" name="comments"></textarea>
  <label for="floatingTextarea" style={{color:'grey'}}>How we can help you?</label>
  </div>
  <button type="submit" class="formbtn btn btn-success mb-2" >Submit</button>
</form>
        </div>
     </div>
     <div className=" wtsbtn container "style={{fontsize:'20px'}}>
      <a href="https://wa.me/8387801336?text=Hello%20from%20my%20website!" target="_blank"><button className="btn2 btn btn-success" ><FaWhatsapp/> Whatsapp us for more info</button></a>
     </div>
     </div>
    </>
  )
}

export default contact

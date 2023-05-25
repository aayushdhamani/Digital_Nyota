import React from 'react'
import './header.css'
import logo from './diglogo.jpg';

const header = () => {
  return (
    <>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#ffffff',fontSize:'10px'}} >
  <div class="container-fluid">
   <img src={logo} style={{width:'110px',height:'70px', marginLeft:'30px'}} alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style={{marginRight:'100px'}} aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{marginRight:'100px'}} aria-current="page" href="/about">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{marginRight:'100px'}} aria-current="page" href="/contact">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/whatweprovide">What we provide</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
    
    </>

    
    
  )
}

export default header

import React from 'react'
import './header.css'
import logo from './diglogo.jpg';

const header = () => {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#ffffff',fontSize:'10px'}} >
  <div className="container-fluid">
   <img src={logo} style={{width:'110px',height:'70px', marginLeft:'30px'}} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{marginRight:'100px'}} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{marginRight:'100px'}} aria-current="page" href="/about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{marginRight:'100px'}} aria-current="page" href="/contact">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/whatweprovide">What we provide</a>
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

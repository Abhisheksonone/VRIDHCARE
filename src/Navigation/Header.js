
// import './App.css';
import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Header(){
    const st={
        color:"red"
    }

   const html= {
        scrollBehavior: "smooth"
      }
    return (
        <>
        <html>
  <div  >
        <nav  class ="navbar navbar-expand-lg text-danger bg-light fixed-top" style={{height:"100px"}} >
  <div class="container-fluid" >
      <div class="font-italic font-weight-bold" >
    <a class="navbar-brand  text-danger" href="/" ><span style={{fontSize:"50px"}}>VRIDHCARE</span></a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="text-end">
    <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{fontSize:30}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/">Home |</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About Us |</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contact">Contact Us |</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#ayur">Treat By Ayur |</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/health">Health shorts |</a>
        </li>
        <li class="nav-item " >
          <a class="nav-link active" aria-current="page" href="#ngo">Connect NGOs |</a>
        </li>

        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register Here
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/userregister">User Register</a></li>
            <li><a class="dropdown-item" href="/ngoregister">NGO Register</a></li>
            <li><a class="dropdown-item" href="/ssiregister">SSI Register</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LogIn Here
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/userlogin">User LogIn</a></li>
            <li><a class="dropdown-item" href="/ngologin">NGO LogIn</a></li>
            <li><a class="dropdown-item" href="/ssilogin">SSI LogIn</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
    </div>
  </div>
</nav>
</div>
</html>
</>
    )
}
export default Header;
import React from "react";
import burger from '../assets/burgerpic.png'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()
  const toHome = () => {
    navigate('/')
  }
    return(
      <>
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <img src={burger} alt='Burger Pic' className="animated-image" style={{height:'70px', width:'70px', top:'20vh', cursor:'pointer'}} onClick={toHome} />
        <h3 style={{position:'absolute', bottom:'30vh', left:'7vw', color:'rgb(147, 147, 147)'}}>Sorry, that page was not found!</h3>
        <h4 style={{position:'absolute', bottom:'23.5vh', left:'7vw', color:'rgb(147, 147, 147)'}}>Click <span className='click-here' onClick={toHome}>here</span> (or the burger) to go back home.</h4>
      </>
    )
  }
  
  export default NotFound
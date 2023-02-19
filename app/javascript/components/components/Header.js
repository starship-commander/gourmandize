import React from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const Header = (props) => {

  const navigate = useNavigate()
  const toHome = () => {
    navigate('/')
  }

    return(
      <main className='header'>
        <div className="to-home">
            <p onClick={toHome} className='to-home'>Gourmandize</p>
        </div>
        <div className='to-home' 
        style={{
          color:'#33ffd0',
          position:'fixed',
          left:'47%',
          top:'1.5vh',
          cursor:'pointer'
        }} onClick={toHome}>
          Logo
        </div>
        <div style={{
          position:'fixed', 
          right:'0',
          top:'1vh',
        }}>
          <Navigation {...props} />
        </div>
      </main>
    )
  }
  
  export default Header
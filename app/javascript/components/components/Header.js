import React from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/images/glogo2.png'

const Header = (props) => {

  const navigate = useNavigate()
  const toHome = () => {
    navigate('/')
  }

    return(
      <main className='header'>
        <div className="to-home" style={{fontSize:'1rem'}}>
            <p onClick={toHome} className='to-home'>Gourmandize</p>
        </div>
        <div onClick={toHome} className='logo' style={{
          position:'fixed', 
          left:'50%', 
          transform:'translateX(-50%)', 
          backgroundImage:`url(${logo})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          height:'6vh',
          width:'100px',
          backgroundRepeat:'no-repeat',
          backgroundPositionY:'20%'
        }}>
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
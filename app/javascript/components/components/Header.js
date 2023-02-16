import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
    return(
      <main className='header'>
        <div style={{
          display:'flex', 
          justifyContent:'flex-start',
          alignItems:'center',
          height:'100%'
        }}>
          <div style={{fontSize:'2vmin', color:'#33ffd0'}}>
            Gourmandize
          </div>
        </div>
        <div style={{
          color:'#33ffd0',
          height:'100%',
          width:'70%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
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
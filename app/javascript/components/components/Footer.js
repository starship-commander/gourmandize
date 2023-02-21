import React from "react";

const Footer = () => {
    return(
      <>
        <div style={{
          position:'fixed', 
          bottom:'0', 
          fontSize:'2vmin',
          textAlign:'right',
          width:'100%',
          display:'flex',
          justifyContent:'flex-end',
          alignItems:'center',
          height:'3vh',
          backgroundColor:'#2e2e2e'
        }}>
          <div style={{color:'rgb(12, 243, 255)', position:'fixed', right:'2vw'}}>
            &copy; Starship Commander | Ney | Octavio | Sammy | Chris
          </div>
        </div>
      </>
    )
  }
  
  export default Footer
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
          <div style={{color:'#bfbfbf', position:'fixed', right:'2vw'}}>
            &copy; Starship Commander | <a className="footer-text" href="https://github.com/nvencer98" target="_blank">Ney</a> | <a className="footer-text" href="https://github.com/priceymineral" target="_blank">Octavio</a> | <a className="footer-text" href="https://github.com/SammyT13" target="_blank">Sammy</a> | <a href='https://github.com/chrisyhlee' className="footer-text" target="_blank">Chris</a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer
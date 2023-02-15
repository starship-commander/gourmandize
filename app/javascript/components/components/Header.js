import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
    return(
      <main style={{height:'5vh'}}>
        <div style={{position:'absolute', right:'0.3vw'}}>
          <Navigation {...props} />
        </div>
      </main>
    )
  }
  
  export default Header
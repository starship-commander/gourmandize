import React from "react";

const Home = ({ loggedIn, currentUser }) => {
    return(
      <>
        <div style={{textAlign:'center'}}>
          {!loggedIn && <h1>Welcome to Gourmandize</h1>}
          {!loggedIn && <h1>Sign up today for free!</h1>}
          {loggedIn && <h1>Welcome back, {currentUser.username}</h1>}
          {loggedIn && <h1>What are we eating today?</h1>}
        </div>

        <div style={{
          display:'flex', 
          justifyContent:'center', 
          marginTop:'4vh'
        }}>
          <div className="homePic">
          </div>
        </div>
        <div style={{
          display:'flex', 
          justifyContent:'center', 
          flexDirection:'column', 
          alignItems:'center'
        }}>
          <p style={{marginTop:'2vh'}}>Browse the top rated</p>
          <button style={{width:'80px'}}>Browse</button>
          <p style={{marginTop:'2vh'}}>Or we can pick for you</p>
          <button style={{width:'80px'}}>Random</button>
        </div>
      </>
    )
  }
  
  export default Home
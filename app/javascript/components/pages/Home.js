import React from "react";
import { useNavigate } from "react-router-dom";
import FallingStars from "./FallingStars";

const Home = ({ loggedIn, currentUser, restaurants }) => {

  const navigate = useNavigate()
  const toIndex = () => {
    navigate('/restaurantindex')
  }

  const randomNum = Math.floor(Math.random() * restaurants.length) + 1

  const toRandom = () => {
    navigate(`/restaurantshow/${randomNum}`)
  }

  return(
    <>
      <div className="home-body" style={{position:'relative', marginTop:'6vh', color:'whitesmoke', height:'100vh', zIndex:'100'}}>
        <div style={{textAlign:'center'}}>
          {!loggedIn && <h1 style={{fontSize:'3vmax'}}>Welcome to Gourmandize</h1>}
          {!loggedIn && <h1 style={{fontSize:'3vmax'}}>Sign up today for free!</h1>}
          {loggedIn && <h1 style={{fontSize:'3vmax'}}>Welcome back, {currentUser.username}</h1>}
          {loggedIn && <h1 style={{fontSize:'3vmax'}}>What are we eating today?</h1>}
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
          <p style={{marginTop:'2vh', fontSize:'2vmin'}}>Browse Restaurants</p>
          <button onClick={toIndex} className="button" style={{width:'80px'}}>Browse</button>
          <p style={{marginTop:'2vh', fontSize:'2vmin'}}>Or we can pick for you</p>
          <button className="button" style={{width:'80px'}} onClick={toRandom}>Random</button>
        </div>
      </div>
      <FallingStars />
    </>
  )
  }
  
  export default Home
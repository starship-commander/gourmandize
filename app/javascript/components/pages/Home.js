import React from "react";
import { useNavigate } from "react-router-dom";
import FallingStars from "./FallingStars";
import Carousel from "react-bootstrap/Carousel";

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
      <div className="home-body" style={{position:'relative',color:'whitesmoke', height:'100vh', zIndex:'100', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{textAlign:'center'}}>
          {!loggedIn && <h3 style={{fontSize:'2.5vmax'}}>Welcome to Gourmandize</h3>}
          {!loggedIn && <h3 style={{fontSize:'2.5vmax'}}>Sign up today for free!</h3>}
          {loggedIn && <h3 style={{fontSize:'2.5vmax'}}>Welcome back, {currentUser.username}</h3>}
          {loggedIn && <h3 style={{fontSize:'2.5vmax'}}>What are we eating today?</h3>}
        </div>

        <div className="box">
          <div style={{
            display:'flex', 
            justifyContent:'center',
          }}>
            <Carousel style={{
              height: '50vh',
              width: '50vw',
            }}>
              <Carousel.Item className="carousel-item">
                <img style={{height: '100%',
                width: '100%',}}
                  className="d-block w-100 carousel-image"
                  src="https://steamuserimages-a.akamaihd.net/ugc/1257016381340765156/C7789019461DEFCFE6C8002F3A329F9977615A42/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Burger</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100 carousel-image "
                  src="https://simplot-media.azureedge.net/-/media/foundation/recipes/tf-fall_wint-21_breakfast-hash-brown-smashed-burger_438.jpg?rev=b4bce4fd607945398680248ce23a7657"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Big burger</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100 carousel-image"
                  src="https://www.8newsnow.com/wp-content/uploads/sites/59/2020/01/McDonalds20yroldBurger.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Best burger</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div style={{
          display:'flex', 
          justifyContent:'center', 
          flexDirection:'column', 
          alignItems:'center'
        }}>
        </div>
          <p style={{marginTop:'2vh', fontSize:'2vmin'}}>Browse Restaurants</p>
          <button onClick={toIndex} className="button" style={{width:'80px'}}>Browse</button>
          <p style={{marginTop:'2vh', fontSize:'2vmin'}}>Or we can pick for you</p>
          <button className="button" style={{width:'80px'}} onClick={toRandom}>Random</button>
      </div>
      <FallingStars />
    </>
  )
  }
  
  export default Home
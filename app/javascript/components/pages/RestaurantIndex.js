import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem, Button} from "reactstrap";
import { NavLink } from "react-router-dom";


const RestaurantIndex = ({ restaurants }) => {

  const startIndex = 0
  const [endIndex, setEndIndex] = useState(4)
  const visibleRestaurants = restaurants.slice(startIndex, endIndex)
  const [todaysPick, setTodaysPick] = useState(null)


  const handleLoadMore = () => {
    setEndIndex(prevEndIndex => prevEndIndex + 4)
  }

  const randomRestaurant = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length)
    setTodaysPick(restaurants[randomIndex])
    localStorage.setItem('lastRandomRestaurantDate', new Date().toLocaleTimeString())
  }

  const navigate = useNavigate()
  const toRestaurant = () => {
    navigate(`/restaurantshow/${todaysPick?.id}`)
  }

  const [todaysDay, setTodaysDay] = useState(localStorage.getItem('lastRandomRestaurantDate'))
console.log(todaysDay)

  useEffect(() => {
    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    const seed = `${month}/${day}/${year}`
    // console.log(seed,"use effect time")
    console.log(today.toLocaleTimeString(),"use effect time")
    // const randomIndex = Math.floor(Math.random() * restaurants.length);
    if(todaysDay !== today.toLocaleTimeString()) {
      randomRestaurant()
    // } else {
    //   setTodaysPick(restaurants[randomIndex]);
    }
    console.log(day);
  }, [restaurants]);

    return(
      <>
        <main className="page-body">
          <Card className="my-2" style={{margin:'1rem', height:'500px'}}>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/900/180"
              style={{
                height:'350px'
              }}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Today's pick:{' '}
                {todaysPick && (
                  <span onClick={toRestaurant} className="restaurant-name">
                    {todaysPick.name}
                  </span>
                )}
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>

          {visibleRestaurants?.map((restaurant, index) => {
            return(
              <Card
                style={{
                  display:'inline-flex',
                  margin:'15px', 
                  width:'16rem',
                  height:'520px'
                }}
                key = {index}
              >
                <div style={{
                  height:'40%', 
                  width:'100%'
                }}>
                  <img
                    alt="Card"
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    style={{height:'100%', width:'100%'}}
                  />
                </div>
                <CardBody style={{height:'5%'}}>
                  <CardTitle tag="h5">
                    {restaurant.name}
                  </CardTitle>
                  <CardText style={{height:'3rem'}}>
                    Hello
                  </CardText>
                </CardBody>
                <ListGroup flush>
                  <ListGroupItem>
                    Average Rating: 
                    {(restaurant.avg_rating >= 1 && restaurant.avg_rating < 2) && '★☆☆☆☆'}
                    {(restaurant.avg_rating >= 2 && restaurant.avg_rating < 3) && '★★☆☆☆'}
                    {(restaurant.avg_rating >= 3 && restaurant.avg_rating < 4) && '★★★☆☆'}
                    {(restaurant.avg_rating >= 4 && restaurant.avg_rating < 5) && '★★★★☆'}
                    {restaurant.avg_rating === 5 && '★★★★★'}
                    <br />
                    Total Reviews: {restaurant.number_of_reviews}
                  </ListGroupItem>
                  <ListGroupItem>
                    {restaurant.cuisine}
                  </ListGroupItem>
                  <ListGroupItem>
                    Price Range: 
                    {restaurant.price_range === 1 && ' $'}
                    {restaurant.price_range === 2 && ' $$'}
                    {restaurant.price_range === 3 && ' $$$'}
                    {restaurant.price_range === 4 && ' $$$$'}
                  </ListGroupItem>
                </ListGroup>
                <CardBody style={{
                  display:'flex', 
                  justifyContent:'center'
                }}>
                  <button className="button">
                    <NavLink to={`/restaurantshow/${restaurant.id}`} style={{textDecoration:'none'}} className='menuLink'>
                      See More
                    </NavLink>
                  </button>
                </CardBody>
              </Card>
            )
          })}
        </main>
        <div style={{marginBottom:'5vh', display:'flex', justifyContent:'flex-end', marginRight:'5vw'}}>
          {(endIndex < restaurants.length) && (<button className="button" onClick={handleLoadMore}>Load More</button>)}
        </div>
      </>
    )
  }
  
  export default RestaurantIndex
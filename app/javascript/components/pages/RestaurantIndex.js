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
    localStorage.setItem('lastRandomRestaurantDate', new Date().toLocaleDateString())
  }

  const navigate = useNavigate()
  const toRestaurant = () => {
    navigate(`/restaurantshow/${todaysPick?.id}`)
  }

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const seed = day + month + year;
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    if(today !== seed) {
      randomRestaurant()
    } else {
      setTodaysPick(restaurants[randomIndex]);
    }
    console.log(today);
  }, [restaurants]);

    return(
      <>
        <main className="page-body">
          <h3 style={{marginLeft:'10vw'}}>Our Restaurants</h3>
          <div style={{display:'flex', justifyContent:'center'}}>
            <Card className="my-2 res-index-card gradient-border" style={{margin:'1rem', height:'fit-content'}}>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/900/180"
                style={{
                  height:'200px'
                }}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  <span className="card-text">Today's pick:{' '}</span>
                  {todaysPick && (
                    <span onClick={toRestaurant} className="restaurant-name">
                      {todaysPick.name}
                    </span>
                  )}
                </CardTitle>
                <CardText>
                  Cuisine:
                  {` ${todaysPick?.cuisine}`}
                </CardText>
                <CardText>
                  Average Rating: 
                  {(todaysPick?.avg_rating >= 1 && todaysPick?.avg_rating < 2) && ' ★☆☆☆☆'}
                  {(todaysPick?.avg_rating >= 2 && todaysPick?.avg_rating < 3) && ' ★★☆☆☆'}
                  {(todaysPick?.avg_rating >= 3 && todaysPick?.avg_rating < 4) && ' ★★★☆☆'}
                  {(todaysPick?.avg_rating >= 4 && todaysPick?.avg_rating < 5) && ' ★★★★☆'}
                  {todaysPick?.avg_rating === 5 && ' ★★★★★'}
                </CardText>
                <CardText>
                  Price: 
                  {todaysPick?.price_range === 1 && ' $'}
                  {todaysPick?.price_range === 2 && ' $$'}
                  {todaysPick?.price_range === 3 && ' $$$'}
                  {todaysPick?.price_range === 4 && ' $$$$'}
                </CardText>
                <CardText>
                  <small className="text-muted">
                    Last updated 3 mins ago
                  </small>
                </CardText>
              </CardBody>
            </Card>
          </div>

          <h3 style={{marginLeft:'10vw'}}>See the rest:</h3>
          <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
          {visibleRestaurants?.map((restaurant, index) => {
            return(
              <Card
              className="gradient-border"
                style={{
                  display:'inline-flex',
                  margin:'15px', 
                  width:'16rem',
                  height:'fit-content',
                  justifyContent:'space-around'
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
                  <CardTitle tag="h5" className="card-text">
                    {restaurant.name}
                  </CardTitle>
                  {/* <CardText style={{height:'3rem'}}>
                    Hello
                  </CardText> */}
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
        </div>
        </main>
        <br />
        <br />
        <div style={{display:'flex', justifyContent:'flex-end', marginRight:'5vw', position:'relative', bottom:'4vh'}}>
          {(endIndex < restaurants.length) && (<button className="button" onClick={handleLoadMore}>Load More</button>)}
        </div>
      </>
    )
  }
  
  export default RestaurantIndex
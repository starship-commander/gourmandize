import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem, Button} from "reactstrap";
import { NavLink } from "react-router-dom";


const RestaurantIndex = ({ restaurants }) => {

    return(
      <main className="page-body">
        {restaurants?.map((restaurant, index) => {
          return(
            <Card
              style={{
                width: '18rem',
                display: 'inline-flex',
                flexWrap: 'wrap',
                margin:'15px'
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
              <CardBody style={{height:'10%'}}>
                <CardTitle tag="h5">
                  {restaurant.name}
                </CardTitle>
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
                  <NavLink to={`/restaurantshow/${restaurant.id}`} style={{textDecoration:'none', color:'black'}}>
                    See More
                  </NavLink>
                </button>
              </CardBody>
            </Card>
          )
        })}
      </main>
    )
  }
  
  export default RestaurantIndex
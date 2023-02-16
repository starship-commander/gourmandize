import React from "react";
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem, CardLink} from "reactstrap";


const RestaurantIndex = ({ restaurants }) => {
    return(
      <main style={{zIndex:300}}>
        <div>
          <Card 
            className="my-2"
            style={{margin:'15px'}}
          >
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/900/180"
              style={{
                height:'35vh'
              }}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Todays top pick
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
        </div>
        
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
              height:'100%', 
              width:'100%'
            }}>
              <img
                alt="Card"
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                style={{height:'100%', width:'100%'}}
              />
            </div>
            <CardBody>
              <CardTitle tag="h5">
                {restaurant.name}
              </CardTitle>
              <CardText>
                This is some text within a card body.
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
                See More
              </button>
            </CardBody>
          </Card>
         ) })}
      </main>
    )
  }
  
  export default RestaurantIndex
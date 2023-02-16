import React from "react";
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem, CardLink} from "reactstrap";


const RestaurantIndex = ({ restaurants }) => {
    return(
      <main>
        <h1>Restaurants</h1>
        <div>
          <Card className="my-2">
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/900/180"
              style={{
                height: 180
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
              width: '18rem'
            }}
            key = {index}
          >
            <img
              alt="Card"
              src="https://picsum.photos/300/200"
            />
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
                An item
              </ListGroupItem>
              <ListGroupItem>
                A second item
              </ListGroupItem>
              <ListGroupItem>
                And a third item
              </ListGroupItem>
            </ListGroup>
            <CardBody>
              <CardLink href="#">
                Card Link
              </CardLink>
              <CardLink href="#">
                Another Card Link
              </CardLink>
            </CardBody>
          </Card>
         ) })}
      </main>
    )
  }
  
  export default RestaurantIndex
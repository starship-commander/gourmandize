import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem, CardLink, Button} from "reactstrap"
import { NavLink } from "react-router-dom"
import { findAllByAltText } from "@testing-library/react"

const ReviewIndex = ({ reviews, currentUser, users, restaurants }) => {
  const { id } = useParams()

  let timeUnit = "days"
  let displayedTime = 0
  const postTime = (currentReview) => {
    const startDate = Date.now()
    const datePosted = new Date(currentReview.updated_at)
    const msElapsed = startDate - datePosted
    let daysElapsed = (msElapsed / 8.64e7).toFixed(2)
    displayedTime = daysElapsed
    
    if (daysElapsed >= 1 && daysElapsed < 1.5) {
      timeUnit = "day"
      displayedTime = daysElapsed
    } else if (daysElapsed < 1) {
      const hoursElapsed = msElapsed / 3.6e6
      displayedTime = hoursElapsed
      if (hoursElapsed >= 1 && hoursElapsed < 1.5) {
        timeUnit = "hour"
      } else if (hoursElapsed > 1.5) {
        timeUnit = "hours"
      } else if (hoursElapsed < 1) {
        const minElapsed = msElapsed / 60000
        displayedTime = minElapsed
        if (minElapsed >= .5 && minElapsed < 1.5) {
          timeUnit = "minute"
        } else {
          timeUnit = "minutes"
        }
      }
    }
  }
  const navigate = useNavigate()

  const toRestaurant = (review) => {
    const restaurant = restaurants?.find(value => value.id === review.restaurant_id)
    navigate(`/restaurantshow/${restaurant?.id}`)
  }

  const getRestaurant = (restaurantID) => {
    for (const restaurant of restaurants) {
      if (restaurant?.id === restaurantID) return restaurant.name
    }
  }

  const CardContainer = ({children}) => {
    return(
      <div style={{
        display:'inline-flex', 
        flexDirection:'row', 
        flexWrap:'wrap', 
        justifyContent:'space-evenly', 
        width:'100%',
      }}>
        {children}
      </div>
    )
  }

  const getUsername = (userId) => {
    for (const user of users) {
      if (user.id === userId) return user.username
    }
  }

  return(
    <>
      {reviews && (
      <CardContainer>
        <main style={{
          height:'100%', 
          width:'100%', 
          display:'inline-flex', 
          flexWrap:'wrap',
          justifyContent:'space-around'
        }}>
        {reviews?.map((review, index) => { 
          postTime(review)
            return(
            <Card
            className="gradient-border"
              key = {index}
              style={{
                width: '16rem',
                margin: '2%',
                height: '550px'
              }}
            >
              <CardImg 
                alt='review card image'
                src={review.image}
                style={{height:'40%'}}
              />
              <CardBody>
                <CardTitle tag="h5" style={{height:'2.5rem'}} className="card-text" >
                  {review.meal}
                </CardTitle>
                <CardText>
                  From: <span className="restaurant-name" onClick={() => toRestaurant(review)}>
                  {getRestaurant(review.restaurant_id)}</span>
                </CardText>
                <CardText style={{height:'1rem'}}>
                  Rating: 
                  {(review.rating >= 1 && review.rating < 2) && '★☆☆☆☆'}
                  {(review.rating >= 2 && review.rating < 3) && '★★☆☆☆'}
                  {(review.rating >= 3 && review.rating < 4) && '★★★☆☆'}
                  {(review.rating >= 4 && review.rating < 5) && '★★★★☆'}
                  {review.rating === 5 && '★★★★★'}
                  <br />
                </CardText>
                <CardText style={{height:'3.5rem'}}>
                  {review.content.length > 50 ? review.content.slice(0, 50) + "..." : review.content}
                </CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  By: {getUsername(review.user_id)}
                </ListGroupItem>
                <ListGroupItem>
                  Posted {Number(displayedTime).toFixed()} {timeUnit} ago
                </ListGroupItem>
              </ListGroup>
              <CardBody style={{
                display:'flex', 
                justifyContent:'center'
              }}>
                <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                  <button className="button">
                    <NavLink className='menuLink' to={`/reviewshow/${review.id}`} style={{textDecoration:'none'}}>
                      See More
                    </NavLink>
                  </button>
                  {(review.user_id === currentUser?.id) && 
                    <button className="button">
                      <NavLink className='menuLink' to={`/reviewedit/${review.id}`} style={{textDecoration:'none'}}>
                        Edit
                      </NavLink>
                    </button>
                  }
                </div>
              </CardBody>
            </Card>
          )
        // Also need to pull username
      })}
      </main>
      </CardContainer>
      )}
      </>
    )
  }
  
  export default ReviewIndex
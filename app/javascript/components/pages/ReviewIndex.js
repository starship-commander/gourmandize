import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem, CardLink} from "reactstrap"
import { NavLink } from "react-router-dom"

const ReviewIndex = ({ reviews }) => {

  const {id} = useParams()

  let timeUnit = "days"
  let displayedTime = 0

  const postTime = (currentReview) => {
    const startDate = Date.now()
    const datePosted = new Date(currentReview.updated_at)
    const msElapsed = startDate - datePosted
    let daysElapsed = (msElapsed / 8.64e7).toFixed(2)
    if (daysElapsed < 1) {
      const hoursElapsed = msElapsed / 3.6e6
      displayedTime = hoursElapsed
      timeUnit = "hours"
      if (hoursElapsed < 1) {
        const minElapsed = msElapsed / 60000
        displayedTime = minElapsed
        timeUnit = "minutes"
      }
    }
  }

  const CardContainer = ({children}) => {
    return(
      <div style={{
        display:'flex', 
        flexDirection:'row', 
        flexWrap:'wrap', 
        justifyContent:'space-evenly', 
        width:'300px', 
        margin:'10px'
      }}>
        {children}
      </div>
    )
  }

  return(
    <>
      <CardContainer>
        <main>
        {reviews?.map((review, index) => { 
          postTime(review)
            return(
            <Card style={{
              // display:'flex'
            }}
              key = {index}
            >
              <div style={{
                height:'100%', 
                width:'100%'
              }}>
                <img
                  alt="Card"
                  src="/assets/homeburgertemp.jpg"
                  style={{height:'100%', width:'100%'}}
                />
              </div>
              <CardBody>
                <CardTitle tag="h5">
                  {review.meal}
                </CardTitle>
                <CardText>
                  Rating: 
                  {(review.rating >= 1 && review.rating < 2) && '★☆☆☆☆'}
                  {(review.rating >= 2 && review.rating < 3) && '★★☆☆☆'}
                  {(review.rating >= 3 && review.rating < 4) && '★★★☆☆'}
                  {(review.rating >= 4 && review.rating < 5) && '★★★★☆'}
                  {review.rating === 5 && '★★★★★'}
                  <br />
                </CardText>
                <CardText>
                  {review.content.length > 80 ? review.content.slice(0, 80) + "..." : review.content}
                </CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  user_id: {review.user_id}
                </ListGroupItem>
                <ListGroupItem>
                  Posted {Number(displayedTime).toFixed()} {timeUnit} ago
                </ListGroupItem>
              </ListGroup>
              <CardBody style={{
                display:'flex', 
                justifyContent:'center'
              }}>
                <button className="button">
                  <NavLink to={`/reviewshow/${review.id}`} style={{textDecoration:'none', color:'black'}}>
                    See More
                  </NavLink>
                </button>
              </CardBody>
            </Card>
          )
        // Also need to pull username
      })}
      </main>
      </CardContainer>
      </>
    )
  }
  
  export default ReviewIndex
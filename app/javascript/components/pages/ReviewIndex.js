import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem, CardLink, Button} from "reactstrap"
import { NavLink } from "react-router-dom"

const ReviewIndex = ({ reviews, currentUser, users }) => {
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
              key = {index}
              style={{
                width: '16rem',
                minWidth: '20vw',
                margin: '2%',
                height: '520px'
              }}
            >
              <CardImg 
                alt='review card image'
                src={review.image}
                style={{height:'40%'}}
              />
              <CardBody>
                <CardTitle tag="h5" style={{height:'2.5rem'}}>
                  {review.meal}
                </CardTitle>
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
import React from "react"
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem, CardLink} from "reactstrap"

const ReviewIndex = ({ reviews }) => {
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

  return(
    <>
        <h1 className="page-body">ReviewIndex</h1>
        <main>
          {reviews?.map((review, index) => { 
            postTime(review)
            // When working on RestaurantShow card: need to add functionality to only map over current restaurant reviews. Change h1 tag to display restaurant name (note: might need to use conditional rendering to access restaurant attributes. Also need to pull username)
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
                  {review.content}
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
                  See More
                </button>
              </CardBody>
            </Card>
          )})}
        </main>
      </>
    )
  }
  
  export default ReviewIndex
import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardText, CardImg, CardTitle } from "reactstrap";

const ReviewShow = ({ reviews }) => {
  const { id } = useParams()
  const currentReview = reviews?.find(review => review.id === +id)
  let timeUnit = "days"
  let displayedTime = 0

  const postTime = (review) => {
    const startDate = Date.now()
    const datePosted = new Date(review.updated_at)
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
    <main>
      {currentReview && (
        <>
          {postTime(currentReview)}
          <h3 className="page-body">Gourmandizer says:</h3>
          <br />
          <Card className="my-2" style={{height:'75vh', margin:'3vh'}}>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/900/180"
              style={{
                height:'45%'
              }}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                {currentReview.meal}
              </CardTitle>
              <br />
              <CardText>
                {currentReview.content}
              </CardText>
              <br />
              <CardText>
                My Rating:
                <br />
                {(currentReview.rating >= 1 && currentReview.rating < 2) && '★☆☆☆☆'}
                {(currentReview.rating >= 2 && currentReview.rating < 3) && '★★☆☆☆'}
                {(currentReview.rating >= 3 && currentReview.rating < 4) && '★★★☆☆'}
                {(currentReview.rating >= 4 && currentReview.rating < 5) && '★★★★☆'}
                {currentReview.rating === 5 && '★★★★★'}
              </CardText>
              <br />
              <CardText>
                <small className="text-muted">
                  Posted {Number(displayedTime).toFixed()} {timeUnit} ago
                </small>
              </CardText>
            </CardBody>
            <button className="button" style={{width:'90px', marginLeft:'5px', marginBottom:'5px'}}>
              <a className="menuLink" href={`/restaurantshow/${currentReview.restaurant_id}`}>Back</a>
            </button>
          </Card>
        </>
      )}
      </main>
    )
  }
  
  export default ReviewShow
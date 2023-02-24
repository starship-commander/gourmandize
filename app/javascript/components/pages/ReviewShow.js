import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardBody, CardText, CardImg, CardTitle } from "reactstrap";
import { NavLink } from "reactstrap";

const ReviewShow = ({ reviews, restaurants, deleteReview, currentUser, users}) => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [currentReview, setCurrentReview] = useState(null)
  const [whichRestaurant, setWhichRestaurant] = useState(null)

  
  
  useEffect(() => {
    const review = reviews?.find(review => review.id === +id)
    setCurrentReview(review)
    setIsLoading(false)
  }, [id, reviews])
  
  useEffect(() => {
    const restaurant = restaurants?.find(restaurant => restaurant.id === currentReview?.restaurant_id)
    setWhichRestaurant(restaurant)
  }, [currentReview, restaurants])
  
  const navigate = useNavigate()
  const toRestaurant = () => {
    navigate(`/restaurantshow/${whichRestaurant.id}`)
  }

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
      if (displayedTime < 1.5 && displayedTime >= 1) {
        timeUnit = "hour"
      } else {
        timeUnit = "hours"
      }
      if (displayedTime < 1) {
        const minElapsed = msElapsed / 60000
        displayedTime = minElapsed
        if (displayedTime >= .5 && displayedTime < 1.5) {
          timeUnit = "minute"
        } else {
          timeUnit = "minutes"
        }
      }
    }
  }

  const getUsername = (userId) => {
    for (const user of users) {
      if (user.id === userId) return user.username
    }
    console.log(currentReview)
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const deleteByID = () => {
    deleteReview(id)
    navigate(-1)
  }

  if(isLoading) {
    return <div>Loading...</div>
  }

  return(
    <main>
      {(currentReview && whichRestaurant) && (
        <>
          {postTime(currentReview)}
          <h3 className="page-body">Gourmandizer says:</h3>
          <br />
          <Card className="my-2" style={{height:'75vh', margin:'3vh'}}>
            <CardImg
              alt="Card image cap"
              src={currentReview.image}
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
                <CardText>
                  From: <span  className='restaurant-name' onClick={toRestaurant}>{whichRestaurant.name}</span>
                </CardText>
              <br />
              <CardText>
                {currentReview.content}
              </CardText>
              <CardText>
                Rating:
                {(currentReview.rating >= 1 && currentReview.rating < 2) && ' ★☆☆☆☆'}
                {(currentReview.rating >= 2 && currentReview.rating < 3) && ' ★★☆☆☆'}
                {(currentReview.rating >= 3 && currentReview.rating < 4) && ' ★★★☆☆'}
                {(currentReview.rating >= 4 && currentReview.rating < 5) && ' ★★★★☆'}
                {currentReview.rating === 5 && ' ★★★★★'}
              </CardText>
              <CardText>
                By: <span>{getUsername(currentReview.user_id)}</span>
              </CardText>
              <br />
              <CardText>
                <small className="text-muted">
                  Posted {Number(displayedTime).toFixed()} {timeUnit} ago
                </small>
              </CardText>
            </CardBody>
            <div>
              <button className="button" style={{width:'90px', marginLeft:'5px', marginBottom:'5px'}} onClick={handleGoBack}>
                Back
              </button>
              {(currentUser?.id === currentReview.user_id) && (
              <button className="button" style={{width:'90px', marginLeft:'5px', marginBottom:'5px', }} onClick={deleteByID}>                  
                Delete
              </button>)}
            </div>
          </Card>
        </>
      )}
    </main>
  )
}
  
export default ReviewShow
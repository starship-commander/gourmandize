import React from "react"
import ReviewIndex from "./ReviewIndex"
import FallingStars from "./FallingStars"

const MyPost = ({ reviews, currentUser, users }) => {
  const filteredReviews = reviews?.filter ((review) => {return review.user_id === currentUser.id})
  
  return(
    <>
      <h1 className="page-body">My Reviews</h1>
      < ReviewIndex reviews={filteredReviews} currentUser={currentUser} users={users} />
      <FallingStars />
    </>
  )
}
  
export default MyPost
import React from "react"
import ReviewIndex from "./ReviewIndex"

const MyPost = ({ reviews, currentUser, users }) => {
  const filteredReviews = reviews?.filter ((review) => {return review.user_id === currentUser.id})
  
  return(
    <>
      <h1 className="page-body">MY POSTS PAGE</h1>
      < ReviewIndex reviews={filteredReviews} currentUser={currentUser} users={users} />
    </>
  )
}
  
export default MyPost
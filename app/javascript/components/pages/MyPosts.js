import React from "react"
import ReviewIndex from "./ReviewIndex"
import FallingStars from "./FallingStars"

const MyPost = ({ reviews, currentUser, users, restaurants }) => {
  const filteredReviews = reviews?.filter ((review) => {return review.user_id === currentUser.id})
  
  return(
    <>
      <div className="page-body" style={{textAlign:'center'}}>
        <h1 >My Posts</h1>
      </div>
        < ReviewIndex reviews={filteredReviews} currentUser={currentUser} users={users} restaurants={restaurants}/>
      <FallingStars />
    </>
  )
}
  
export default MyPost
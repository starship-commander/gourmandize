import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import RestaurantEdit from "./pages/RestaurantEdit"
import RestaurantIndex from "./pages/RestaurantIndex"
import RestaurantNew from "./pages/RestaurantNew"
import RestaurantShow from "./pages/RestaurantShow"
import ReviewEdit from "./pages/ReviewEdit"
import ReviewIndex from "./pages/ReviewIndex"
import ReviewNew from "./pages/ReviewNew"
import ReviewShow from "./pages/ReviewShow"
import MyPosts from "./pages/MyPosts"




const App = (props) => {
  const [restaurants, setRestaurants] = useState([])
  const [reviews, setReviews] = useState([])
  
  useEffect(() => {
    readRestaurants()
    readReviews()
  }, [])

  const readRestaurants = () => {
    fetch("/restaurants")
      .then((response) => response.json())
      .then((payload) => {
        setRestaurants(payload)
      })
      .catch((error) => console.log(error))
  }

  const readReviews = () => {
    fetch("/reviews")
      .then((response) => response.json())
      .then((payload) => {
        setReviews(payload)
      })
      .catch((error) => console.log(error))
  }

  const createReview = (reviewObj) => {
    console.log(reviewObj)
    fetch("/reviews", {
      body: JSON.stringify(reviewObj),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => readReviews())
      .catch(errors => console.log("createReview errors:", errors))
  }

  const updateReview = (reviewObj, id) => {
    fetch(`/reviews/${id}`, {
      body: JSON.stringify(reviewObj),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => readReviews())
      .catch(errors => console.log("updateReview errors: ", errors))
  }
  const deleteReview = (id) => {
    fetch(`/reviews/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => {
        readReviews(payload)
      })
      .catch((error) => console.log(error))
  }
  

  return(
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route path='/' element={<Home loggedIn={props.logged_in} currentUser={props.current_user} restaurants={restaurants} />} />
        <Route path='/restaurantindex' element={<RestaurantIndex restaurants={restaurants} />} />
        <Route path='/restaurantshow/:id' element={<RestaurantShow restaurants={restaurants} reviews={reviews} loggedIn={props.logged_in} currentUser={props.current_user} />} />
        <Route path='/restaurantnew' element={<RestaurantNew />} />
        <Route path='/restaurantedit' element={<RestaurantEdit />} />
        <Route path='/reviewindex' element={<ReviewIndex reviews={reviews} currentUser={props.current_user} />} />
        <Route path='/reviewshow/:id' element={<ReviewShow reviews={reviews} restaurants={restaurants} deleteReview={deleteReview} currentUser={props.current_user}/>} />
        <Route path='/reviewnew/:id' element={<ReviewNew currentUser={props.current_user} restaurants={restaurants} createReview={createReview} />} />
        <Route path='/reviewedit/:id' element={reviews.length > 0 && <ReviewEdit updateReview={updateReview} restaurants={restaurants} reviews={reviews} currentUser={props.current_user} />} />
        {props.logged_in && <Route path='/myposts' element={<MyPosts reviews={reviews} currentUser={props.current_user} />} />}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

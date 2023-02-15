import React from "react"
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
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import MyPosts from "./pages/MyPosts"



const App = (props) => {
  return(
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route path='/' element={<Home loggedIn={props.logged_in} currentUser={props.current_user}/>} />
        <Route path='/restaurantindex' element={<RestaurantIndex />} />
        <Route path='/restaurantshow' element={<RestaurantShow />} />
        <Route path='/restaurantnew' element={<RestaurantNew />} />
        <Route path='/restaurantedit' element={<RestaurantEdit />} />
        <Route path='/reviewindex' element={<ReviewIndex />} />
        <Route path='/reviewshow' element={<ReviewShow />} />
        <Route path='/reviewnew' element={<ReviewNew />} />
        <Route path='/reviewedit' element={<ReviewEdit />} />
        <Route path='/myposts' element={<MyPosts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

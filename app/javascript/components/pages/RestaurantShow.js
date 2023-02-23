import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReviewIndex from './ReviewIndex';
import ReviewNew from './ReviewNew';

const RestaurantShow = ({ restaurants, loggedIn, reviews, currentUser, users }) => {
  const { id } = useParams()
  let currentRestaurant = restaurants?.find(restaurant => restaurant.id === +id)

  const navigate = useNavigate()
  const handleClickReview = () => {
    navigate(`/reviewnew/${id}`)
  }
  
  const filtered = reviews?.filter(review => review.restaurant_id === +id)

  return(
    <main>
      {currentRestaurant && (
        <>
          <h1 className='page-body' style={{marginLeft:'2.7vw'}}>{currentRestaurant.name}</h1>
          <div style={{
            display:'flex',
            gap:'30px'
          }}>
            <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" style={{height: '50vh', minWidth:'25rem', marginLeft:'2.7vw'}}/>
            <div style={{
              height:'fit-content',
              width:'30vw',
              marginTop:'10%'
            }}>
              Cuisine: {currentRestaurant.cuisine} <br />
              Address: {currentRestaurant.street}, {currentRestaurant.state} {currentRestaurant.zip_code} <br />
              Average: 
              {(currentRestaurant.avg_rating >= 1 && currentRestaurant.avg_rating < 2) && ' ★☆☆☆☆'}
              {(currentRestaurant.avg_rating >= 2 && currentRestaurant.avg_rating < 3) && ' ★★☆☆☆'}
              {(currentRestaurant.avg_rating >= 3 && currentRestaurant.avg_rating < 4) && ' ★★★☆☆'}
              {(currentRestaurant.avg_rating >= 4 && currentRestaurant.avg_rating < 5) && ' ★★★★☆'}
              {currentRestaurant.avg_rating === 5 && ' ★★★★★'} <br />
              Price Range:
              {currentRestaurant.price_range === 1 && ' $'}
              {currentRestaurant.price_range === 2 && ' $$'}
              {currentRestaurant.price_range === 3 && ' $$$'}
              {currentRestaurant.price_range === 4 && ' $$$$'}
              <br />
              <br />
              <button className='button' style={{marginRight:'10px'}}>
                <a className='menuLink' href={`${currentRestaurant.menu_link}`}>See Menu</a>
              </button>
              {loggedIn && <button className='button' onClick={handleClickReview} style={{width:'130px'}} >Write a Review</button>}
            </div>
          </div>
          <br />
          <h3 style={{overflow:'hidden', marginLeft:'2.7vw'}}>See what other <span style={{fontWeight:'bold'}}>Gourmandizers</span> are saying:</h3>
          {<ReviewIndex reviews={filtered} restaurants={restaurants} currentUser={currentUser} users={users} />}
        </>
      )}
    </main>
  )
}

export default RestaurantShow;
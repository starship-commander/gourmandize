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
          <h1 className='page-body' style={{marginLeft:'2.7vw', marginTop:'7vh', marginBottom:'-1rem'}}>{currentRestaurant.name}</h1>
          <div style={{
            display:'flex',
            flexWrap:'wrap',
            marginLeft:'5vw'
          }}>
            <div className='res-show'>
              <img src={currentRestaurant.images} style={{height: '100%', width:'100%', objectFit:'cover'}}/>
            </div>
            <div style={{
              height:'fit-content',
              marginTop:'5%',
              marginLeft:'5%'
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
                <a className='menuLink' href={`${currentRestaurant.menu_link}`} target='blank'>See Menu</a>
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
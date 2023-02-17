import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RestaurantShow = ({ restaurants, loggedIn }) => {
  const { id } = useParams()
  let currentRestaurant = restaurants?.find(restaurant => restaurant.id === +id)

  // const [rest, setRest] = useState(null)

  // useEffect(() => {
  //   fetch(`/restaurants/${id}`)
  //     .then(response => response.json())
  //     .then(payload => setRest(payload))
  // }, [id])

  const navigate = useNavigate()
  const handleClickReview = () => {
    navigate('/reviewnew')
  }
  
  return(
    <main>
      {currentRestaurant && (
        <>
          <h1 className='page-body'>{currentRestaurant.name}</h1>
          <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" style={{height: '50vh'}}/>
          <div>
            {loggedIn && <button className='button' onClick={handleClickReview}>Write a Review</button>}
          </div> 
        </>
      )}
    </main>
  )
}

export default RestaurantShow;
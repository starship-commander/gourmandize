import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, FormText  } from "reactstrap"

const ReviewNew = ({ currentUser, restaurants, createReview }) => {

  console.log(currentUser);
  const { id } = useParams()
  let currentRestaurant = restaurants?.find(restaurant => restaurant.id === +id)

  const [newReview, setNewReview] = useState({
    meal: "",
    rating: "",
    content: "",
    image: "",
    user_id: currentUser.id,
    restaurant_id: +id
  })

  const navigate = useNavigate()
  const handleChange = (e) => {
    setNewReview({...newReview, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createReview(newReview)
    navigate('/myposts')
  }

  return(
    <main>
      {restaurants && (
      <>
        <Form style={{margin:'20px', marginTop:'6vh'}}>
          <FormGroup>
            <Label for="exampleEmail">
              Review for
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">
              Food Item
            </Label>
            <Input
              id="meal"
              name="meal"
              placeholder="what food item is this review for?"
              type="text"
              onChange={handleChange}
              value={newReview.meal}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">
              Rating
            </Label>
              <Input
                id="rating"
                name="rating"
                type="select"
                onChange={handleChange}
                value={newReview.rating}
              >
                <option value="" disabled>
                  Select a rating
                </option>
                <option value="1">
                  1
                </option>
                <option value="2">
                  2
                </option>
                <option value="3">
                  3
                </option>
                <option value="4">
                  4
                </option>
                <option value="5">
                  5
                </option>
              </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">
              Image
            </Label>
            <Input
              id="image"
              name="image"
              placeholder="image URL here"
              type="text"
              onChange={handleChange}
              value={newReview.image}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">
              Your Review
            </Label>
            <Input
              id="content"
              name="content"
              type="textarea"
              onChange={handleChange}
              value={newReview.content}
            />
          </FormGroup>
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </Form>
      </>
    )}
    </main>
  )
}
  
export default ReviewNew
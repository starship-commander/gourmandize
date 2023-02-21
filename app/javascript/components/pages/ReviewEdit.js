import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ReviewEdit = ({ updateReview, reviews, currentUser }) => {

  const {id} = useParams()
  let currentReview = reviews?.find(review => review.id === +id)

  const [newReview, setNewReview] = useState({
    meal: currentReview.meal,
    rating: currentReview.rating,
    content: currentReview.content,
    image: currentReview.image,
    username: currentUser.username,
    user_id: currentUser.id,
    restaurant_id: currentReview.restaurant_id
  })

  console.log(newReview)

  const handleChange = (e) => {
    setNewReview({...newReview, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    updateReview(newReview, id)
    navigate('/myposts')
  }

    return(
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
    )
  }
  
  export default ReviewEdit
import React from "react"
import { render, screen } from "@testing-library/react"
import ReviewNew from "./ReviewNew"
import { BrowserRouter } from "react-router-dom"

describe("<ReviewNew />", () => {

  const currentUser = {
    id:1,
    email: 'gangmember@gmail.com',
    username: 'GangGang'
  }

  const restaurants = [{
    name: 'Best Cheeseburger',
      cuisine: 'Cheeseburger',
      street: '123 ABC Rd',
      city: 'Cheeseburgertown',
      state: 'Cheeseburgerfornia',
      zip_code: '90210',
      avg_rating: 4.9,
      number_of_reviews: 1000,
      price_range: 1,
      menu_link: 'best_cheeseburger@cheeseburger.com',
      images: 'picture_of_cheeseburger.png',
      user_id: 1
  }]

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

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ReviewNew currentUser={currentUser} restaurants={restaurants} createReview={createReview}/>
      </BrowserRouter>
    )
  })
  it("has a heading for food item", () => {
    render(
      <BrowserRouter>
        <ReviewNew currentUser={currentUser} restaurants={restaurants} createReview={createReview}/>
      </BrowserRouter>
    )
    expect(screen.getByText(/food item/i)).toBeInTheDocument()
  })
  it("has a heading for image", () => {
    render(
      <BrowserRouter>
        <ReviewNew currentUser={currentUser} restaurants={restaurants} createReview={createReview}/>
      </BrowserRouter>
    )
    expect(screen.getByText(/image/i)).toBeInTheDocument()
  })
  it("has a heading for your review", () => {
    render(
      <BrowserRouter>
        <ReviewNew currentUser={currentUser} restaurants={restaurants} createReview={createReview}/>
      </BrowserRouter>
    )
    expect(screen.getByText(/your review/i)).toBeInTheDocument()
  })
  it("has a submit button", () => {
    render(
      <BrowserRouter>
        <ReviewNew currentUser={currentUser} restaurants={restaurants} createReview={createReview}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('button', {
      name: /submit/i
    })).toBeInTheDocument()
  })
})
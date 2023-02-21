import React from "react"
import { render } from "@testing-library/react"
import { screen } from "@testing-library/react"
import ReviewIndex from "./ReviewIndex"
import { BrowserRouter } from "react-router-dom"

describe("<ReviewIndex />", () => {

  const currentUser = {
    id:1,
    email: 'gangmember@gmail.com',
    username: 'GangGang'
  }

  const review = [{
    meal: "Cheeseburger",
    content: "Cheeseburger was delicious, and biggg!",
    rating: 5,
    user_id: 1,
    restaurant_id: 1

  }]
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ReviewIndex reviews={review} currentUser={currentUser} />
      </BrowserRouter>
    )
  })
  it("has a card title", () => {
    render(
      <BrowserRouter>
        <ReviewIndex reviews={review} currentUser={currentUser} />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /cheeseburger/i })).toBeInTheDocument()
  })
  it("has a rating title", () => {
    render(
      <BrowserRouter>
        <ReviewIndex reviews={review} currentUser={currentUser} />
      </BrowserRouter>
    )
    expect(screen.getByText(/rating:★★★★★/i)).toBeInTheDocument()
  })
  it("has a rating title", () => {
    render(
      <BrowserRouter>
        <ReviewIndex reviews={review} currentUser={currentUser} />
      </BrowserRouter>
    )
    expect(screen.getByText(/cheeseburger was delicious, and biggg!/i)).toBeInTheDocument()
  })
})
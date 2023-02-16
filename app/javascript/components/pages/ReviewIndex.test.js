import React from "react"
import { render } from "@testing-library/react"
import { screen } from "@testing-library/react"
import ReviewIndex from "./ReviewIndex"
import { BrowserRouter } from "react-router-dom"

describe("<ReviewIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ReviewIndex />, div)
  })
  const review = [{
    meal: "Cheeseburger",
    content: "Cheeseburger was delicious, and biggg!",
    rating: 5,
    user_id: 1,
    restaurant_id: 1

  }]
  it("has a card title", () => {
    const div = document.createElement("div")
    render(<ReviewIndex reviews={review} />,div)
    expect(screen.getByRole('heading', { name: /cheeseburger/i })).toBeInTheDocument()
  })
  it("has a rating title", () => {
    const div = document.createElement("div")
    render(<ReviewIndex reviews={review} />,div)
    expect(screen.getByText(/rating:★★★★★/i)).toBeInTheDocument()
  })
  it("has a rating title", () => {
    const div = document.createElement("div")
    render(<ReviewIndex reviews={review} />,div)
    expect(screen.getByText(/cheeseburger was delicious, and biggg!/i)).toBeInTheDocument()
  })
})
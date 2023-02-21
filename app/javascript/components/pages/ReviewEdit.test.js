import React from "react"
import { render, screen } from "@testing-library/react"
import ReviewEdit from "./ReviewEdit"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"

describe("<ReviewEdit />", () => {

  const currentUser = {
    id:1,
    email: 'gangmember@gmail.com',
    username: 'GangGang'
  }

  const review = [{
    id:1,
    meal: "Cheeseburger",
    content: "Cheeseburger was delicious, and biggg!",
    rating: 5,
    user_id: 1,
    restaurant_id: 1

  }]

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

  const renderShow = () => {
    render(
      <MemoryRouter initialEntries={["/reviewedit/1"]}>
        <Routes>
          <Route path="/reviewedit/:id" element={<ReviewEdit currentUser={currentUser} reviews={review} updateReview={updateReview} />} />
        </Routes>
      </MemoryRouter>
    )
  }

  it("renders without crashing", () => {
    renderShow()
  })
  it("has title for each input field", () => {
    renderShow()
    expect(screen.getByText(/food item/i)).toBeInTheDocument()
    expect(screen.getByText(/image/i)).toBeInTheDocument()
    expect(screen.getByText(/your review/i)).toBeInTheDocument()
  })
  it("has a combobox for selecting rating", () => {
    renderShow()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })
  it("has a submit button", () => {
    renderShow()
    expect(screen.getByRole('button', {
      name: /submit/i
    })).toBeInTheDocument()
  })
})
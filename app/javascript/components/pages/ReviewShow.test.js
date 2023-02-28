import React from "react"
import { render, screen } from "@testing-library/react"
import ReviewShow from "./ReviewShow"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"

const review = [{
  id: 1,
  meal: "Cheeseburger",
  content: "Cheeseburger was delicious, and biggg!",
  rating: 5,
  user_id: 1,
  restaurant_id: 1

}]

const restaurants = [{
  id: 1,
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
const deleteReview = () => {
  fetch('/reviews/1',{
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
    .then((response) => response.json())
    .then((payload) => {
      readReviews(payload)
    })
    .catch((error) => console.log(error))
}
const user =  {
  email: 'cheesy_boy@email.com',
  password: 'cheese',
  username: 'CheesyBoy',
  id: 1
}
const users =  [{
  email: 'cheesy_boy@email.com',
  password: 'cheese',
  username: 'CheesyBoy',
  id: 1
}]

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/reviewshow/1"]}>
      <Routes>
        <Route path='reviewshow/:id' element={<ReviewShow reviews={review} restaurants={restaurants} deleteReview={deleteReview} currentUser={user} users={users}  />}/>
      </Routes>
    </MemoryRouter>
  )

}


describe("<ReviewShow />", () => {
  it("renders without crashing", () => {
    renderShow()
  })
  screen.logTestingPlaygroundURL()
  it("includes meal", () => {
    render(renderShow())
    expect(screen.getByRole('heading', {
      name: /cheeseburger/i
    })).toBeInTheDocument()
  })
  it("includes content", () => {
    render(renderShow())
    expect(screen.getByText(/cheeseburger was delicious, and biggg!/i)).toBeInTheDocument()
  })
  it("includes rating", () => {
    render(renderShow())
    expect(screen.getByText(/rating: ★★★★★/i)).toBeInTheDocument()
  })
  it("includes date posted", () => {
    render(renderShow())
    expect(screen.getByText(/posted 0 days ago/i)).toBeInTheDocument()
  })
  it("includes back button", () => {
    render(renderShow())
    expect(screen.getByRole('button', {
      name: /back/i
    })).toBeInTheDocument()
  })
})
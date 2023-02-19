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

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/reviewshow/1"]}>
      <Routes>
        <Route path='reviewshow/:id' element={<ReviewShow reviews={review}/>}/>
      </Routes>
    </MemoryRouter>
  )
}

describe("<ReviewShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ReviewShow />,div)
  })
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
    expect(screen.getByText(/my rating:★★★★★/i)).toBeInTheDocument()
  })
  it("includes date posted", () => {
    render(renderShow())
    expect(screen.getByText(/posted 0 days ago/i)).toBeInTheDocument()
  })
  it("includes back button", () => {
    render(renderShow())
    expect(screen.getByRole('link', {
      name: /back/i
    })).toBeInTheDocument()
  })
})
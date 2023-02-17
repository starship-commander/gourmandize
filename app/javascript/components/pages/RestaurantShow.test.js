import React from "react"
import { render, screen } from "@testing-library/react"
import RestaurantShow from "./RestaurantShow"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"

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

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/restaurantshow/1"]}>
      <Routes>
        <Route path='restaurantshow/:id' element={<RestaurantShow restaurants={restaurants}/>}/>
      </Routes>
    </MemoryRouter>
  )
}

describe("<RestaurantShow />", () => {
  it("displays name of restaurant", () => {
    render(renderShow())
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('heading', {
      name: /best cheeseburger/i
    })).toBeInTheDocument()
  })
  it("displays all info", () => {
    render(renderShow())
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(
      /cuisine: cheeseburger address: 123 abc rd, cheeseburgerfornia 90210 average: ★★★★☆ price range: \$/i
      )).toBeInTheDocument()
  })
  it("has button to see menu", () => {
    render(renderShow())
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('link', {
      name: /see menu/i
    })).toBeInTheDocument()
  })
  it("has an image", () => {
    render(renderShow())
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it("has heading for reviews", () => {
    render(renderShow())
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('heading', {
      name: /see what other gourmandizers are saying:/i
    })).toBeInTheDocument()
  })
})
import React from "react"
import { render } from "@testing-library/react"
import RestaurantIndex from "./RestaurantIndex"
import { BrowserRouter } from "react-router-dom"
import { screen } from "@testing-library/react"

describe("<RestaurantIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
  })
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
  it("todays top pick", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('heading', {name: /todays top pick/i})).toBeInTheDocument()
  })

  it("has a card title", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {name: /best cheeseburger/i})).toBeInTheDocument()
  })
  
})
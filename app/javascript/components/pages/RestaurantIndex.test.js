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
  
  it("renders todays pick", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {
      name: /today's pick:/i
    })).toBeInTheDocument()
  })

  it("has a list of information about the restaurant", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
  it("checks for images alt ", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('img', { name: /card image cap/i })).toBeInTheDocument()
  })
  it("checks for main", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
  it('has a button for Load More', () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants} />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', {
      name: /Load More/i
    })).toBeInTheDocument()
})})
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
  it("todays pick", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading', {
      name: /feeling adventurous\? try this random pick: best cheeseburger/i
    });
    
    expect(heading).toBeInTheDocument()
  })
  

  it("has a list of information about the restaurant", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
  it("has average rating", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByText(/average rating: ★★★★☆/i)).toBeInTheDocument()
  })
  it("has a see more link", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('link', {
      name: /see more/i
    })).toBeInTheDocument()
  })
  it("has a see more link", () => {
    render(
      <BrowserRouter>
        <RestaurantIndex restaurants={restaurants}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('button', {
      name: /see more/i
    })).toBeInTheDocument()
  })

  
})
import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {

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

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home restaurants={restaurants}/>
      </BrowserRouter>
    )
  })
  it('has a greeting', () => {
    render(
      <BrowserRouter>
        <Home restaurants={restaurants} />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {name: /welcome to gourmandize/i})).toBeInTheDocument()
  })
  it('tells you to sign up', () => {
    render(
      <BrowserRouter>
        <Home restaurants={restaurants} />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {
      name: /sign up today for free!/i
    })).toBeInTheDocument()
  })
  it('has a button for browse', () => {
    render(
      <BrowserRouter>
        <Home restaurants={restaurants} />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', {
      name: /browse/i
    })).toBeInTheDocument()
  })
  it('has a button for random', () => {
    render(
      <BrowserRouter>
        <Home restaurants={restaurants} />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', {
      name: /random/i
    })).toBeInTheDocument()
  })
  it('has a browse restaurants section', () => {
    render(
      <BrowserRouter>
        <Home restaurants={restaurants} />
      </BrowserRouter>
    )
    expect(screen.getByText(/browse restaurants/i)).toBeInTheDocument()
  })
  it('calls a function on click event', () => {
    render(
      <BrowserRouter>
        <Home restaurants={restaurants} />
      </BrowserRouter>
    )
    const handleClick = jest.fn()
    let button = screen.getByRole('button', {
      name: /browse/i,
      onClick: handleClick()
    })
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
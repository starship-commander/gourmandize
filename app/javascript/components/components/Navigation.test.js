import React from "react"
import { render, screen } from "@testing-library/react"
import Navigation from "./Navigation"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"


describe("<Navigation />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Menu"))
    expect(screen.getByText("Menu")).toBeInTheDocument()
  })
  
  it("has a sign in link", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>        
    )
    userEvent.click(screen.getByText('Sign In'))
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })

  it("has a sign up link", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>        
    )
    userEvent.click(screen.getByText('Sign Up'))
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })

  it("has a restaurants link", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>        
    )
    userEvent.click(screen.getByText('Restaurants'))
    expect(screen.getByText('Restaurants')).toBeInTheDocument()
  })

  
})
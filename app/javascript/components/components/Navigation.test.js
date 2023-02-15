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
    userEvent.click(screen.getByText("Home"))
    expect(screen.getByText("Home")).toBeInTheDocument()
  })
  
  it("has a signout link", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>        
    )
    screen.logTestingPlaygroundURL()
    userEvent.click(screen.getByText('Sign Out'))
    expect(screen.getByRole('link', {name: /sign out/i}).toBeInTheDocument())
  })

  
})
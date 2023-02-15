import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })
  it('has a greeting', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {name: /welcome to gourmandize/i})).toBeInTheDocument()
  })
  it('tells you to sign up', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {
      name: /sign up today for free!/i
    })).toBeInTheDocument()
  })
  it('has a button for browse', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', {
      name: /browse/i
    })).toBeInTheDocument()
  })
  it('has a button for random', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', {
      name: /random/i
    })).toBeInTheDocument()
  })
})
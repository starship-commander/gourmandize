import React from "react"
import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  })
  it("has an image", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    expect(screen.getByRole('img', {
      name: /burger pic/i
    })).toBeInTheDocument()
  })
  it("has a message for not found", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {
      name: /sorry, that page was not found!/i
    })).toBeInTheDocument()
  })
  it("has a redirect to home message", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {
      name: /click here \(or the burger\) to go back home\./i
    })).toBeInTheDocument()
  })
})
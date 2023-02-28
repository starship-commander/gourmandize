import React from "react";
import { render, screen } from "@testing-library/react"
import AboutUs from "./AboutUs"
import { BrowserRouter } from "react-router-dom"

describe("<AboutUs />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
  })

  it("has a heading", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', {
      name: /meet the team!/i
    })).toBeInTheDocument()
  })
  it("has a heading for each role", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    expect(screen.getByText(/project manager\./i)).toBeInTheDocument()
    expect(screen.getByText(/tech lead\./i)).toBeInTheDocument()
    expect(screen.getByText(/design lead\./i)).toBeInTheDocument()
  })
})
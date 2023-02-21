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
    screen.logTestingPlaygroundURL()
  })
})
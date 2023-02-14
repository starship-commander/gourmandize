import React from "react"
import { render } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />,div)
  })
})
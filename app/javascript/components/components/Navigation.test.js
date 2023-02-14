import React from "react"
import { render } from "@testing-library/react"
import Navigation from "./Navigation"
import { BrowserRouter } from "react-router-dom"

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Navigation />,div)
  })
})
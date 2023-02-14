import React from "react"
import { render } from "@testing-library/react"
import ReviewNew from "./ReviewNew"
import { BrowserRouter } from "react-router-dom"

describe("<ReviewNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ReviewNew />,div)
  })
})
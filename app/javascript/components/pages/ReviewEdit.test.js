import React from "react"
import { render } from "@testing-library/react"
import ReviewEdit from "./ReviewEdit"
import { BrowserRouter } from "react-router-dom"

describe("<ReviewEdit />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ReviewEdit />,div)
  })
})
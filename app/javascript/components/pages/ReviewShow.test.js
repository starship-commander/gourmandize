import React from "react"
import { render } from "@testing-library/react"
import ReviewShow from "./ReviewShow"
import { BrowserRouter } from "react-router-dom"

describe("<ReviewShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ReviewShow />,div)
  })
})
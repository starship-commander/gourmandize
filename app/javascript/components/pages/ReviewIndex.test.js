import React from "react"
import { render } from "@testing-library/react"
import ReviewIndex from "./ReviewIndex"
import { BrowserRouter } from "react-router-dom"

describe("<ReviewIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ReviewIndex />,div)
  })
})
import React from "react"
import { render } from "@testing-library/react"
import RestaurantIndex from "./RestaurantIndex"
import { BrowserRouter } from "react-router-dom"

describe("<RestaurantIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<RestaurantIndex />,div)
  })
})
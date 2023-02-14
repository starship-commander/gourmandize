import React from "react"
import { render } from "@testing-library/react"
import RestaurantNew from "./RestaurantNew"
import { BrowserRouter } from "react-router-dom"

describe("<RestaurantNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<RestaurantNew />,div)
  })
})
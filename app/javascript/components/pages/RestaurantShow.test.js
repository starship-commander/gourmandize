import React from "react"
import { render } from "@testing-library/react"
import RestaurantShow from "./RestaurantShow"
import { BrowserRouter } from "react-router-dom"

describe("<RestaurantShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<RestaurantShow />,div)
  })
})
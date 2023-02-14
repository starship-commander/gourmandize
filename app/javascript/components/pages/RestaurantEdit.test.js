import React from "react"
import { render } from "@testing-library/react"
import RestaurantEdit from "./RestaurantEdit"
import { BrowserRouter } from "react-router-dom"

describe("<RestaurantEdit />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<RestaurantEdit />,div)
  })
})
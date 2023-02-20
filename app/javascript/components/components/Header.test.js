import React from "react"
import { render, screen } from "@testing-library/react"
import Header from "./Header"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"

describe("<Header />", () => {

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </MemoryRouter>
  )
}

  it("renders without crashing", () => {
    renderShow()
    screen.logTestingPlaygroundURL()
  })
})
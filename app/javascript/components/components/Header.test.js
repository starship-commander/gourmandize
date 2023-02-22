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
  })

  it("renders app name text in the header", () => {
    renderShow()
    expect(screen.getByText(/gourmandize/i)).toBeInTheDocument()
  })
  it("renders the menu button", () => {
    renderShow()
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
  })
  it("renders restaurants link", () => {
    renderShow()
    expect(screen.getByRole('menuitem', {
      name: /restaurants/i,
      hidden: true
    })).toBeInTheDocument()
  })
})
import React from "react"
import { HashRouter as Router } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Subscriptions from "./Subscriptions"

describe("<Subscriptions>", () => {
  test("can render Subscriptions", async () => {
    render(
      <Router>
        <Subscriptions />
      </Router>
    )

    screen.getByText("Subscriptions")
    screen.getByText("User 1")
    screen.getByText("User 2")
    screen.getByText("User 3")
  })
})

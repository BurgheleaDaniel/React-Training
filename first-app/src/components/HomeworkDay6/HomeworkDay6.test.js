import React from "react"
import { render } from "@testing-library/react"
import HomeworkDay6 from "./HomeworkDay6"

describe("Create Account Form", () => {
  const mockChangeValue = jest.fn()

  const mockState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    terms: false,
  }

  it("shows input fields with empty values", () => {
    const { getByTestId } = render(<HomeworkDay6 />)

    expect(getByTestId("firstName").value).toBe("")
    expect(getByTestId("lastName").value).toBe("")
    expect(getByTestId("email").value).toBe("")
  })
})

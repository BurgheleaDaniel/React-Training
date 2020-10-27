import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import userEvent from "@testing-library/user-event"
import HomeworkDay6 from "./HomeworkDay6"

describe("Create Account Form", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<HomeworkDay6 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("can type inyto input fields", () => {
    const { getByTestId, getAllByRole, getByText, debug } = render(
      <HomeworkDay6 />
    )

    userEvent.type(getByTestId("firstName"), "Daniel")
    userEvent.type(getByTestId("lastName"), "Burghelea")
    userEvent.type(getByTestId("email"), "daniel.burghelea@webbeds.com")
    userEvent.type(getByTestId("password"), "111111")

    expect(getByTestId("firstName").value).toBe("Daniel")
    expect(getByTestId("lastName").value).toBe("Burghelea")
    expect(getByTestId("email").value).toBe("daniel.burghelea@webbeds.com")
    expect(getByTestId("password").value).toBe("111111")
  })
})

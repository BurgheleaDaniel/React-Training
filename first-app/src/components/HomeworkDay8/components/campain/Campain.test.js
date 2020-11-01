import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import userEvent from "@testing-library/user-event"
import Campain from "./Campain"

const mockCampain = {
  avatar: "DB",
  name: "Promovare Bucovina",
  type: "Google ADS",
  status: "Ongoing",
  startDate: "19/10/2020",
  endDate: "19/10/2020",
  visitorsNo: "345",
  entrantsNo: "198",
  conversionRate: "45.55",
}

describe("<Campain />", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <Campain
          avatar={mockCampain.avatar}
          name={mockCampain.name}
          type={mockCampain.type}
          status={mockCampain.status}
          startDate={mockCampain.startDate}
          endDate={mockCampain.endDate}
          visitorsNo={mockCampain.visitorsNo}
          entrantsNo={mockCampain.entrantsNo}
          conversionRate={mockCampain.conversionRate}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders one campain correctly from mocked state", () => {
    const { getByText } = render(
      <Campain
        avatar={mockCampain.avatar}
        name={mockCampain.name}
        type={mockCampain.type}
        status={mockCampain.status}
        startDate={mockCampain.startDate}
        endDate={mockCampain.endDate}
        visitorsNo={mockCampain.visitorsNo}
        entrantsNo={mockCampain.entrantsNo}
        conversionRate={mockCampain.conversionRate}
      />
    )
    expect(getByText("Promovare Bucovina")).toBeInTheDocument()
    expect(getByText("Google ADS")).toBeInTheDocument()
    expect(getByText("Ongoing")).toBeInTheDocument()
    expect(getByText("19/10/2020")).toBeInTheDocument()
    expect(getByText("345")).toBeInTheDocument()
    expect(getByText("198")).toBeInTheDocument()
    expect(getByText("45.55%")).toBeInTheDocument()
  })
})

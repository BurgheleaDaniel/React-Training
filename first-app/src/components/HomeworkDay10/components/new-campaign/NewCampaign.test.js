import React from "react"
import { HashRouter as Router } from "react-router-dom"
import { render, screen, act } from "@testing-library/react"
import NewCampaign from "./NewCampaign"
import MutationObserver from "mutation-observer"
import userEvent from "@testing-library/user-event"
import { mockedSave, mockedValidationSchema } from "./NewCampaign.mocks"
import { getValidationSchema, saveCampaign } from "./sideEffects"
import { CampaignProvider } from "../../context"

global.MutationObserver = MutationObserver

jest.mock("./sideEffects", () => ({
  getValidationSchema: jest.fn(),
  saveCampaign: jest.fn(),
}))

describe("<NewCampaign>", () => {
  beforeAll(() => {
    getValidationSchema.mockReturnValue(mockedValidationSchema)
    saveCampaign.mockImplementation(mockedSave)
  })

  test("can render NewCampaign", async () => {
    render(
      <Router>
        <CampaignProvider>
          <NewCampaign />
        </CampaignProvider>
      </Router>
    )

    // arrange
    const campaignName = screen.getByTestId("campaignName-input")
    const campaignType = screen.getByTestId("campaignType-input")
    const campaignDate = screen.getByTestId("campaignDate-input")
    const campaignStatus = screen.getByTestId("campaignStatus-input")
    const campaignEndDate = screen.getByTestId("campaignEndDate-input")
    const visitors = screen.getByTestId("visitors-input")
    const entrants = screen.getByTestId("entrants-input")
    const conversionRate = screen.getByTestId("conversionRate-input")

    // act
    userEvent.type(campaignName, "Test campaignName")
    userEvent.type(campaignType, "Test campaignType")
    userEvent.type(campaignDate, "Test campaignDate")
    userEvent.type(campaignStatus, "Test campaignStatus")
    userEvent.type(campaignEndDate, "Test campaignEndDate")
    userEvent.type(visitors, "1000")
    userEvent.type(entrants, "520")
    userEvent.type(conversionRate, "52")

    // assert
    screen.getAllByText("New Campaign")
    expect(campaignName.value).toBe("Test campaignName")
    expect(campaignType.value).toBe("Test campaignType")
    expect(campaignDate.value).toBe("Test campaignDate")
    expect(campaignStatus.value).toBe("Test campaignStatus")
    expect(campaignEndDate.value).toBe("Test campaignEndDate")
    expect(visitors.value).toBe("1000")
    expect(entrants.value).toBe("520")
    expect(conversionRate.value).toBe("52")

    await act(async () => {
      const submitButton = screen.getByText("Save").closest("button")
      userEvent.click(submitButton)
    })
    expect(mockedSave).toBeCalled()
  })
})

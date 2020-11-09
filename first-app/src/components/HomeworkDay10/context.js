import * as React from "react"

const CampaignStateContext = React.createContext()
const CampaignDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      let draftState = { ...state }
      draftState.campaigns = [...draftState.campaigns, action.payload]
      return draftState
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const initialState = {
  campaigns: [
    {
      avatar: "DB",
      name: "Promovare Bucovina",
      type: "Google ADS",
      status: "Ongoing",
      startDate: "19/10/2020",
      endDate: "19/10/2020",
      visitorsNo: "345",
      entrantsNo: "198",
      conversionRate: "45.55",
    },
    {
      avatar: "CF",
      name: "Upsell Tricouri",
      type: "Facebook",
      status: "Ended",
      startDate: "11/10/2019",
      endDate: "11/12/2019",
      visitorsNo: "5000",
      entrantsNo: "1200",
      conversionRate: "23.55",
    },
    {
      avatar: "SD",
      name: "Vanzare Bilete Online",
      type: "Ecommerce",
      status: "Ended",
      startDate: "01/10/2020",
      endDate: "01/11/2020",
      visitorsNo: "500",
      entrantsNo: "320",
      conversionRate: "73",
    },
  ],
}

function CampaignProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <CampaignStateContext.Provider value={state}>
      <CampaignDispatchContext.Provider value={dispatch}>
        {children}
      </CampaignDispatchContext.Provider>
    </CampaignStateContext.Provider>
  )
}

function useCampaignState() {
  const context = React.useContext(CampaignStateContext)
  if (context === undefined) {
    throw new Error("useCampaignState must be used within a CampaignProvider")
  }
  return context
}

function useCampaignDispatch() {
  const context = React.useContext(CampaignDispatchContext)
  if (context === undefined) {
    throw new Error(
      "useCampaignDispatch must be used within a CampaignProvider"
    )
  }
  return context
}

export { CampaignProvider, useCampaignState, useCampaignDispatch }

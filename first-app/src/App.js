import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import HomeworkDay3 from "./components/HomeworkDay3/HomeworkDay3"
import HomeworkDay4 from "./components/HomeworkDay4/HomeworkDay4"
import HomeworkDay5 from "./components/HomeworkDay5/HomeworkDay5"
import Day6 from "./components/Day6/Day6"
import HomeworkDay6 from "./components/HomeworkDay6/HomeworkDay6"
import DashBoard from "./components/HomeworkDay8/DashBoard"
import NewCampaign from "./components/HomeworkDay8/components/new-campaign/NewCampaign"
import Integration from "./components/HomeworkDay8/components/integration/Integration"
import Subscriptions from "./components/HomeworkDay8/components/subscriptions/Subscriptions"
import Settings from "./components/HomeworkDay8/components/settings/Settings"

import DashBoardHomework10 from "./components/HomeworkDay10/DashBoard"
import NewCampaignHomework10 from "./components/HomeworkDay10/components/new-campaign/NewCampaign"
import IntegrationHomework10 from "./components/HomeworkDay10/components/integration/Integration"
import SubscriptionsHomework10 from "./components/HomeworkDay10/components/subscriptions/Subscriptions"
import SettingsHomework10 from "./components/HomeworkDay10/components/settings/Settings"
import { CampaignProvider } from "./components/HomeworkDay10/context"

function App() {
  const [campaigns, setCampaigns] = useState([
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
  ])
  return (
    <Router>
      <Switch>
        <Route path="/homeworkDay3" component={HomeworkDay3} />
        <Route path="/homeworkDay4" component={HomeworkDay4} />
        <Route path="/HomeworkDay5" component={HomeworkDay5} />
        <Route path="/HomeworkDay6" component={HomeworkDay6} />
        <Route path="/HomeworkDay8/newCampaign">
          <NewCampaign campaigns={campaigns} setCampaigns={setCampaigns} />
        </Route>
        <Route path="/HomeworkDay8/integration" component={Integration} />
        <Route path="/HomeworkDay8/subscriptions" component={Subscriptions} />
        <Route path="/HomeworkDay8/settings" component={Settings} />
        <Route path="/HomeworkDay8" exact>
          <DashBoard campaigns={campaigns} />
        </Route>

        <Route path="/Day6" component={Day6} />
        <Route path="/" exact component={Homepage} />

        <Switch>
          <CampaignProvider>
            <Route
              path="/HomeworkDay10/newCampaign"
              component={NewCampaignHomework10}
            />
            <Route
              path="/HomeworkDay10/integration"
              component={IntegrationHomework10}
            />
            <Route
              path="/HomeworkDay10/subscriptions"
              component={SubscriptionsHomework10}
            />
            <Route
              path="/HomeworkDay10/settings"
              component={SettingsHomework10}
            />
            <Route
              path="/HomeworkDay10"
              exact
              component={DashBoardHomework10}
            />
          </CampaignProvider>
        </Switch>
      </Switch>
    </Router>
  )
}

export default App

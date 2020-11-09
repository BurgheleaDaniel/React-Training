import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import TopBar from "./components/TopBar"
import LeftMenu from "./components/LeftMenu"
import Campain from "./components/campain/Campain"
import { useCampaignState } from "./context"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

export default function DashBoard() {
  const classes = useStyles()
  const { campaigns } = useCampaignState()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <LeftMenu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {campaigns &&
          campaigns.map((item, key) => (
            <Campain
              key={key}
              avatar={item.avatar}
              name={item.name}
              type={item.type}
              status={item.status}
              startDate={item.startDate}
              endDate={item.endDate}
              visitorsNo={item.visitorsNo}
              entrantsNo={item.entrantsNo}
              conversionRate={item.conversionRate}
            />
          ))}
      </main>
    </div>
  )
}

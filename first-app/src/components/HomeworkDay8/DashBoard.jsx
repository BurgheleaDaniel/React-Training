import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import TopBar from "./components/TopBar"
import LeftMenu from "./components/LeftMenu"
import Campain from "./components/campain/Campain"

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
  const [campains] = useState([
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
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <LeftMenu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {campains.map(item => (
          <Campain
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

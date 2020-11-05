import React from "react"
import DashboardListItem from "./DashboardListItem"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import SpeedIcon from "@material-ui/icons/Speed"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"
import TrackChangesIcon from "@material-ui/icons/TrackChanges"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import SettingsIcon from "@material-ui/icons/Settings"
import { colors, drawerWidth } from "../theme"

const useStyles = makeStyles(theme => ({
  drawer: {
    backgroundColor: colors.blue,
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  sideDrawerMenu: {
    height: "100%",
    backgroundColor: colors.blue,
  },
}))

export default function LeftMenu() {
  const classes = useStyles()

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <DashboardListItem label="Leads Builder" />

        <Divider />
        <List className={classes.sideDrawerMenu}>
          <DashboardListItem
            icon={<SpeedIcon />}
            label="Dashboard"
            link="/HomeworkDay8"
          />
          <DashboardListItem
            icon={<VolumeUpIcon />}
            label="New Campaign"
            link="/HomeworkDay8/newCampaign"
          />
          <DashboardListItem
            icon={<TrackChangesIcon />}
            label="Integration"
            link="/HomeworkDay8/integration"
          />
          <DashboardListItem
            icon={<SubscriptionsIcon />}
            label="Subscribe"
            link="/HomeworkDay8/subscriptions"
          />
          <DashboardListItem
            icon={<SettingsIcon />}
            label="Settings"
            link="/HomeworkDay8/settings"
          />
        </List>
      </Drawer>
    </>
  )
}

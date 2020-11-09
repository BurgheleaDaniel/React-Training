import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import TopBar from "../TopBar"
import LeftMenu from "../LeftMenu"
import { Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: "100px",
  },
  form: {
    width: "100%",
  },
}))

export default function Settings() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <LeftMenu />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Paper variant="outlined">
            <p>Settings</p>
            <img src="https://lh3.googleusercontent.com/lWNRppWHVw18TreV4fs1TjPMI6CQYSiiN_46cIOuK5UJe7VRFnLE5mtuQ9CGWai32AzY" />
          </Paper>
        </div>
      </main>
    </div>
  )
}

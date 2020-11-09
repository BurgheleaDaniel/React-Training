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

export default function Integration() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <LeftMenu />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Paper variant="outlined">
            <p>Integration</p>
            <img src="https://www.greenvulcano.com/wp-content/uploads/2019/07/System-Integration-1.png" />
          </Paper>
        </div>
      </main>
    </div>
  )
}

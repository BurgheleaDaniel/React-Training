import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import TopBar from "../TopBar"
import LeftMenu from "../LeftMenu"
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core"

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

export default function Subscriptions() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <LeftMenu />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Paper variant="outlined">
            <p>Subscriptions</p>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <Avatar>U 1</Avatar>
                </ListItemIcon>
                <ListItemText primary="User 1" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <Avatar>U 2</Avatar>
                </ListItemIcon>
                <ListItemText primary="User 2" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <Avatar>U 3</Avatar>
                </ListItemIcon>
                <ListItemText primary="User 3" />
              </ListItem>
            </List>
          </Paper>
        </div>
      </main>
    </div>
  )
}

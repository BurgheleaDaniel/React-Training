import React from "react"
import logo from "../logo.svg"
import User from "../components/User"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

function Homepage() {
  return (
    <div className="App">
      <List>
        <ListItem>
          <a className="App-link" href="/homeworkDay3">
            Homework Day 3
          </a>
        </ListItem>
        <ListItem>
          <a className="App-link" href="/homeworkDay4">
            Homework Day 4
          </a>
        </ListItem>
        <ListItem>
          <a className="App-link" href="/homeworkDay5">
            Homework Day 5
          </a>
        </ListItem>
        <ListItem>
          <a className="App-link" href="/homeworkDay6">
            Homework Day 6
          </a>
        </ListItem>
        <User developerName="Daniel" color="red" image={logo} />
      </List>
    </div>
  )
}

export default Homepage

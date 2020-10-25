import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import HomeworkDay3 from "./components/HomeworkDay3/HomeworkDay3"
import HomeworkDay4 from "./components/HomeworkDay4/HomeworkDay4"
import HomeworkDay5 from "./components/HomeworkDay5/HomeworkDay5"
import Day6 from "./components/Day6/Day6"
import HomeworkDay6 from "./components/HomeworkDay6/HomeworkDay6"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/homeworkDay3" component={HomeworkDay3} />
        <Route path="/homeworkDay4" component={HomeworkDay4} />
        <Route path="/HomeworkDay5" component={HomeworkDay5} />
        <Route path="/HomeworkDay6" component={HomeworkDay6} />
        <Route path="/Day6" component={Day6} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  )
}

export default App

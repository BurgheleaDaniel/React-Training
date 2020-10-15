import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HomeworkDay3 from "./components/HomeworkDay3/HomeworkDay3";
import HomeworkDay4 from "./components/HomeworkDay4/HomeworkDay4";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/homeworkDay3" component={HomeworkDay3} />
        <Route path="/homeworkDay4" component={HomeworkDay4} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DropDown from "./components/DropDown";
import Homepage from "./pages/Homepage";
import HomeworkDay3 from "./components/HomeworkDay3/HomeworkDay3";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/homeworkDay3" component={HomeworkDay3} />
        <Route path="/homeworkDay4">
          <DropDown
            options={["Option 1", "Option 2", "Option 3", "Option 4"]}
          />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

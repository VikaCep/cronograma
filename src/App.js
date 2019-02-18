import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./img/hair.svg";
import "./App.css";
import PorositySelector from "./PorositySelector";
import DaysSelector from "./DaysSelector";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route exact path="/" component={PorositySelector} />
        <Route path="/days" component={DaysSelector} />
      </header>
    </div>
  </Router>
);

export default App;

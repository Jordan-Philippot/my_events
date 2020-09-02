import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import OneEvent from "./components/OneEvent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/App.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events/:id">
            <OneEvent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

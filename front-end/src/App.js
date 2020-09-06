import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import OneEvent from "./components/OneEvent";
import Profil from "./components/Profil";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/App.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Menu /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events/:id">
            <OneEvent />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

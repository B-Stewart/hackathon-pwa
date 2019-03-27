/** @jsx jsx */
import React, { Component } from "react";
import logo from "./logo.svg";
import { css, jsx } from "@emotion/core";
import { Header } from "./header";
import { Home } from "./components/home";
import { DailyDeals } from "./components/daily-deals/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SWNotifier } from "./sw-notifier";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/daily-deals" component={DailyDeals} />
          </Switch>
        </Router>
        <footer />

        <SWNotifier />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Hero as DailyDealHero } from "./daily-deals/hero.js";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <DailyDealHero />
      </React.Fragment>
    );
  }
}

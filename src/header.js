/** @jsx jsx */
import React, { Component } from "react";
import logo from "./logo.svg";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { HeaderLogo } from "./header-logo";
import { rRouter as Router, Route, Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background-color: #f76e09;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;

  svg {
    fill: white;
  }
`;

const Links = styled(Link)`
  color: white;
  margin-left: auto;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;

  svg {
    fill: white;
  }
`;

export class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Link exact to="/">
          <HeaderLogo />
        </Link>
        <Links to="/daily-deals">Daily Deals</Links>
      </HeaderWrapper>
    );
  }
}

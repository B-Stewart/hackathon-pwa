import React, { Component, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Product } from "./product";

const Container = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const Logo = styled.img`
  margin: 15px 0;
  width: 250px !important;
`;

export const Hero = () => {
  const [dailyDeals, setDailyDeals] = useState(null);
  useEffect(() => {
    fetch("./apis/daily-deals.json")
      .then(res => res.json())
      .then(data => {
        setDailyDeals(data);
        console.log(data);
      });
  }, []);

  return (
    dailyDeals && (
      <Container>
        <Logo src="https://img-gainesvillecoins.netdna-ssl.com/images/logo/daily-deal.svg" />
        <img src={dailyDeals.img} />
        {dailyDeals.products.map(product => (
          <Product {...product} />
        ))}
      </Container>
    )
  );
};

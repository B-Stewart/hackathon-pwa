import React, { Component } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 15px;
  border-bottom: 1px solid orange;
`;

const Title = styled.h1`
  font-size: 18px;
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
`;

const Price = styled.p`
  font-size: 24px;
  color: green;
  font-weight: bold;
`;

export const Product = ({ title, image, price }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image src={image} />
      <Price>{price}</Price>
    </Container>
  );
};

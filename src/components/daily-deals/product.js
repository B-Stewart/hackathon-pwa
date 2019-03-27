import React, { Component } from "react";

export const Product = ({ title, image, price }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
      <p>{price}</p>
    </div>
  );
};

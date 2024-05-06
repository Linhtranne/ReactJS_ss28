import React from 'react';

const Ex5Child = ({product}) => {
  const { id, name, price, quantity } = product;

  return (
    <div>
      <p>Product ID: {id}</p>
      <p>Product Name: {name}</p>
      <p>Product Price: {price}</p>
      <p>Product Quantity: {quantity}</p>
    </div>
  );
};

export default Ex5Child;

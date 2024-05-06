import React from 'react';
import ChildComponent from './Ex5Child';

const product = {
  id: 1,
  name: 'Hehehe',
  price: 1200000000000000000,
  quantity: 5,
};

const Ex5Parent = () => {
  return (
    <div>
      <ChildComponent product={product} />
    </div>
  );
};

export default Ex5Parent;

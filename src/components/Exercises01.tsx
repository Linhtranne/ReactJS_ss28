import React, { useState } from 'react';

const Exercises01 = () => {
  const [fullName] = useState('Trần Quang Linh');

  return (
    <div>
      <h1>Họ và tên: {fullName}</h1>
    </div>
  );
};

export default Exercises01;


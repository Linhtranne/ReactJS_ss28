import React, { useState } from 'react';

const Exercises02 = () => {
  const [fullName] = useState('Trần Quang Linh');
    const [id] = useState('1');
  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>id:{id}</p>
      <p>Họ và tên:{fullName}</p>

    </div>
  );
};

export default Exercises02;

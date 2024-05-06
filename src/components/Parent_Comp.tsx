import React, { useState } from 'react';
import ChildrenComp from './Children_Comp';

const ParentComp = () => {
  const [fullName] = useState('Linh');

  return (
    <div>
      <h1>Họ tên của component cha: {fullName}</h1>
      <ChildrenComp fullName={fullName} />
    </div>
  );
};

export default ParentComp;

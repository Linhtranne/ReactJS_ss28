import React from 'react'
import ChildComponent from './Ex6Child'
const user = {
  id: 1,
  name: 'Hehehe',
  address: "Hehehe",
  email:'Hehehe',
}
const Ex6Parent = () => {
  return (
    <div>
      <ChildComponent user={user} />
    </div>
  );
};

export default Ex6Parent;
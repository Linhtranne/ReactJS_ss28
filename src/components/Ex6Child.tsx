import React from 'react';

const Ex6Child = ({user}) => {
  const { id, name,address, email} = user;

  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Adress: {address}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Ex6Child;

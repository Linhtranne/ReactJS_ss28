import React, { useState } from 'react';

const Exercise03 = () => {
  const [users,] = useState([
    { id: 1, name: 'Trần Quang Linh', address: 'Hà Nội' },
    { id: 2, name: 'Bình Óc Cức', address: 'Hà Nội' },
    { id: 3, name: 'He he he', address: 'Hà Nội' },
  ]);

  return (
    <div>
      <h2>Danh sách Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>ID: {user.id}</span> -
            <span>Tên: {user.name}</span> -
            <span>Địa chỉ: {user.address}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise03;

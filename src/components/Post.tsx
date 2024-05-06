import React from 'react';

const Post = ({ id, title, content, author }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p><em>By {author}</em></p>
    </div>
  );
};

export default Post;

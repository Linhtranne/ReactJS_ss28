import React, { useState } from 'react';

const Post = ({ id, title, content, author }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p><em>By {author}</em></p>
    </div>
  );
};

const ListPost = () => {

  const [posts] = useState([
    { id: 1, title: "He", content: "!", author: "?" },
    { id: 2, title: "hehe", content: "!!!", author: "????" },
    { id: 3, title: "hehehe", content: "!!!!!!", author: "???????" }
  ]);

  return (
    <div className="list-post">
      <h1>List of Posts</h1>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default ListPost;

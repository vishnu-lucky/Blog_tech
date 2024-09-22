import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Posts.css"

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="posts-container">
      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post._id}>
            <h2>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </h2>
            <p>{post.content.substring(0, 100)}...</p>
            <p className="author">Author: {post.author}</p>
            <p className="date">Date: {new Date(post.date).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;

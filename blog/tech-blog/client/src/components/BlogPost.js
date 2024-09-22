import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Blogpost.css';

const BlogPost = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-author">Author: {post.author}</p>
      <p className="post-date">Date: {new Date(post.date).toLocaleString()}</p>

     
      <div className="post-image">
        <img src={post.imageUrl || "https://via.placeholder.com/800x400"} alt={post.title} />
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>

     
      <div className="post-navigation">
        <Link to={`/posts/previous-post-id`}>Previous Post</Link>
        <Link to={`/posts/next-post-id`}>Next Post</Link>
      </div>
    </div>
  );
};

export default BlogPost;

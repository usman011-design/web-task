import React from 'react';
import './Blog.css'; // Import the CSS file
import data from '../../data.json' // Import the JSON data

function Blog() {
  const { blogs, comments } = data;

  return (
    <div className="blog-container">
      {blogs.map(blog => (
        <div className="card" key={blog.id}>
          <div className="card-header">
            <h2>{blog.title}</h2>
          </div>
          <div className="card-content">
            <p>{blog.content}</p>
          </div>
          <div className="card-comments">
            <h3>Comments:</h3>
            <ul>
              {comments
                .filter(comment => comment.blogId === blog.id)
                .map((comment, index) => (
                  <li key={index}>{comment.text}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;

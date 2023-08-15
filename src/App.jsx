import React, {useState, useEffect} from 'react';
import './App.css';
import data from './data.json';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blogs/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
   
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState({});

  useEffect(() => {
    setBlogs(data.blogs); // Set blogs from your JSON data
  }, []);

  // Function to fetch comments for a given blog post ID
  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`https://example.com/api/comments/${postId}`);
      const data = await response.json();
      return data.comments;
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  };

  // Fetch comments for each blog post
  useEffect(() => {
    const fetchAllComments = async () => {
      const commentsData = {};

      for (const blog of blogs) {
        const blogComments = await fetchComments(blog.id);
        commentsData[blog.id] = blogComments;
      }

      setComments(commentsData);
    };

    fetchAllComments();
  }, [blogs]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Blog blogs={blogs} comments={comments} /> {/* Pass blogs and comments as props */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

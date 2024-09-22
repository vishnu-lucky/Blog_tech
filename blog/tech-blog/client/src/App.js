import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import BlogPost from './components/BlogPost';
import './index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;

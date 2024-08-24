import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Blog from './components/Blog.js';
import Signups from "./components/Signups";
import Login from "./components/Login";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login
setIsAuthenticated={setIsAuthenticated} />} />
<Route path="/signup" element={<Signups
setIsAuthenticated={setIsAuthenticated} />} />
<Route path="/blog" element={isAuthenticated ? <Blog /> : <Navigate
to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
 





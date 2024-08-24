import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home.jsx';
import Ingredients from './components/Ingredients.jsx';
import JournalSection from './components/JournalSection.jsx';
import JournalPage from './components/JournalPage.jsx'; 
import Blog from './components/Blog.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/journal/*" element={<JournalSection />} />
        <Route path="/journal/:category" element={<JournalPage />} />

        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/blog" element={isAuthenticated ? <Blog /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

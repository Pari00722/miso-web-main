import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Importing components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Home from "./components/Home.jsx";
import Ingredients from "./components/Ingredients.jsx";
import JournalSection from "./components/JournalSection.jsx";
import JournalPage from "./components/JournalPage.jsx";
import Blog from "./components/Blog.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Footer from "./components/Footer.jsx";
import OurTeam from "./components/OurTeam.jsx";

// Importing global styles
import "./index.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Header />
      <Banner /> {/* Add the Banner component below the Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/journal/*" element={<JournalSection />} />
        <Route path="/journal/:category" element={<JournalPage />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/blog"
          element={isAuthenticated ? <Blog /> : <Navigate to="/login" />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
    </Router>
  );
};

export default App;

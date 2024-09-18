import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Ingredients from "./components/Ingredients.jsx";
import JournalSection from "./components/JournalSection.jsx";
import JournalPage from "./components/JournalPage.jsx";
import Blog from "./components/Blog.jsx";
import Login from "./components/Login.jsx";
import "./index.css";
import Signup from "./components/Signup.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Footer from "./components/Footer.jsx"; // Imported Footer component
import OurTeam from "./components/OurTeam.jsx";
// import "./styles/auth.scss";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Router>
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
        </Routes>
        {/* Added Footer component outside of Routes */}
        <Footer />
      </Router>

      {/* <Ingredients /> */}
      {/* <JournalSection /> */}
      {/* <AboutUs /> */}
      {/* <Footer /> */}
      {/* <OurTeam /> */}
    </>
  );
};

export default App;

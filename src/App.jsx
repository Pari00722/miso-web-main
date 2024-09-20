// App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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

// Create a component to handle conditional Banner rendering
const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();

  // Determine if the current route is the Home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {isHomePage && <Banner />} {/* Render Banner only on Home page */}
      <main className="flex-grow">
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
          {/* Add a fallback route for undefined paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer /> {/* Footer appears at the bottom */}
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
};

export default App;

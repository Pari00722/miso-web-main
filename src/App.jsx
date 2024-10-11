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
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Home from "./components/Home.jsx";
import Ingredients from "./components/Ingredients.jsx";
import JournalSection from "./components/JournalSection.jsx";
import JournalPage from "./components/JournalPage.jsx";
import Blog from "./components/Blog.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AboutUs from "./components/AboutUs.jsx";
import OurTeam from "./components/OurTeam.jsx";
import TermsOfUse from "./components/TermsOfUse.jsx";
import Privacy from "./components/Privacy.jsx";
import Internships from "./components/Internships.jsx";
import Contact from "./components/Contact.jsx";
import Cookie from "./components/Cookie.jsx";
import CustomLaserEtching from "./components/CustomLaserEtching.jsx";
import TailoredGreetingCardDesign from "./components/TailoredGreetingCardDesign.jsx";
import EngravedWoodenProducts from "./components/EngravedWoodenProducts.jsx";
import CustomizedMugs from "./components/CustomizedMugs.jsx";
import Cart from "./components/Cart.jsx";
import LoginError from "./components/LoginError.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import BestSellers from "./components/BestSellers";

// Importing new components
import Wedding from "./components/Wedding.jsx";
import BirthDay from "./components/BirthDay.jsx";
import ThankYou from "./components/ThankYou.jsx";
import Anniversary from "./components/Anniversary.jsx";
import StarMaps from "./components/StarMaps.jsx";
import Templates from "./components/Templates.jsx";
import Plagues from "./components/Plagues.jsx";
import PersonalizedFrames from "./components/PersonalizedFrames.jsx";
import Nameplates from "./components/Nameplates.jsx";
import Keychains from "./components/Keychains.jsx";
import Festive from "./components/Festive.jsx";
import Boxes from "./components/Boxes.jsx";
import CustomMugs from "./components/CustomMugs.jsx";
import Coasters from "./components/Coasters.jsx";

// Importing global styles
import "./index.css";

// Create a component to handle conditional Banner rendering and authentication
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
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Additional Routes */}
          <Route path="/ingredients" element={<Ingredients />} />

          {/* Journal Routes */}
          <Route path="/journal/*" element={<JournalSection />} />
          <Route path="/journal/:category" element={<JournalPage />} />

          {/* Authentication Routes */}
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<Signup setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/login-error" element={<LoginError />} />

          {/* Protected Route */}
          <Route
            path="/blog"
            element={isAuthenticated ? <Blog /> : <Navigate to="/login" />}
          />

          {/* About Us Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />

          {/* Services Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/custom-laser" element={<CustomLaserEtching />} />
          <Route
            path="/tailor-greeting"
            element={<TailoredGreetingCardDesign />}
          />
          <Route path="/engraved" element={<EngravedWoodenProducts />} />
          <Route path="/mugs" element={<CustomMugs />} />
          <Route path="/internships" element={<Internships />} />

          {/* Legal Routes */}
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<Privacy />} />

          {/* New Routes for Additional Components */}
          {/* Greeting Cards */}
          <Route path="/birthday" element={<BirthDay />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/festive" element={<Festive />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Wooden Engraved Items */}
          <Route path="/templates" element={<Templates />} />
          <Route path="/plaques" element={<Plagues />} />
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/coasters" element={<Coasters />} />

          {/* Personalized Gifts */}
          <Route path="/personalized-frames" element={<PersonalizedFrames />} />
          <Route path="/nameplates" element={<Nameplates />} />
          <Route path="/keychains" element={<Keychains />} />
          <Route path="/starmaps" element={<StarMaps />} />

          {/* Product and Cart Routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Fallback Route */}
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

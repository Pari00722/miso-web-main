import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import logo from "../photos/Logo.png";
// import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // 'gifts', 'wooden', 'cards'
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdownMobile, setActiveDropdownMobile] = useState(null);

  let s_width = screen.width;

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manages login state
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState("");

  // const handleLoginLogout = () => {
  //   if (isLoggedIn) {
  //     // Handle logout logic here
  //     setIsLoggedIn(false);
  //     navigate('/'); // Redirect to home or another page after logout
  //   } else {
  //     // Redirect to login page if not logged in
  //     navigate('/login');
  //   }
  // };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/login-success"); // Always navigate to the success page after logging in
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // Clear the user authentication token, email, phone number, and any related session info
      localStorage.removeItem("authToken"); // Token storage (if using)
      localStorage.removeItem("userEmail"); // Clear stored email
      localStorage.removeItem("userPhone"); // Clear stored phone number
      sessionStorage.removeItem("userSession"); // Session storage (if using)

      // Set logged-in status to false
      setIsLoggedIn(false);

      // Navigate to the 'Logged out successfully' page
      navigate("/logout-success");
    }
  };

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout); // Clear the timeout if mouse enters again
      setDropdownTimeout(null);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeaveWithDelay = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 2000); // 2 seconds delay
    setDropdownTimeout(timeout);
  };
  const handleMouseLeave = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // Reduced the delay time
    setDropdownTimeout(timeout);
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout); // Clear the timeout if mouse enters dropdown area
      setDropdownTimeout(null);
    }
  };

  const handleMouseLeaveDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileDropdown = (dropdown) => {
    setActiveDropdownMobile(
      activeDropdownMobile === dropdown ? null : dropdown
    );
  };

  useEffect(() => {
    return () => {
      // Cleanup any leftover timeout when the component unmounts
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  if (s_width > 540) {
    return (
      <div className="relative z-50">
        {/* Updated header with gradient background */}
        <div
          className="w-full mx-auto bg-white border-b-2 border-b-purple-500 text-purple-400 px-4 py-3 flex items-center gap-20"
          style={{
            background: "linear-gradient(to bottom, white 40%, #D6BCFA)",
          }}
        >
          {/* Logo Section */}
          <div className="l-shape-border px-2 h-full flex items-center border border-transparent cursor-pointer duration-100">
            <Link to="/">
              <img className="w-24 mt-2" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Personalized Gifts Dropdown */}
          <div
            className="relative l-shape-border border border-transparent hover:border-b-purple-500 cursor-pointer duration-100"
            onMouseEnter={() => handleMouseEnter("gifts")}
            onMouseLeave={handleMouseLeaveWithDelay}
          >
            <h1
              className="text-2xl font-bold transform transition-transform duration-300 ease-in-out"
              style={{ fontFamily: "Protest Guerrilla" }}
            >
              PERSONALIZED GIFTS
            </h1>
            {openDropdown === "gifts" && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white duration-700 ease-in-out text-black rounded-lg shadow-lg z-20"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <ul className="p-4">
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/mugs">Custom Mugs</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/personalized-frames">Personalized Frames</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/nameplates">Nameplates</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/starmaps">Star Maps</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Wooden Engraved Items Dropdown */}
          <div
            className="relative l-shape-border border border-transparent hover:border-b-purple-500 cursor-pointer duration-100"
            onMouseEnter={() => handleMouseEnter("wooden")}
            onMouseLeave={handleMouseLeaveWithDelay}
          >
            <h1
              className="text-2xl font-bold transform transition-transform duration-300 ease-in-out"
              style={{ fontFamily: "Protest Guerrilla" }}
            >
              WOODEN ENGRAVED ITEMS
            </h1>
            {openDropdown === "wooden" && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white duration-700 ease-in-out text-black rounded-lg shadow-lg z-20"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <ul className="p-4">
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/templates">Templates</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/keychains">Customizable Keychains</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/plaques">Engraved Wooden Plaques</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/coasters">Engraved Wooden Coasters</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/boxes">Engraved Wooden Boxes</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Personalized Greeting Cards Dropdown */}
          <div
            className="relative l-shape-border border border-transparent hover:border-b-purple-500 cursor-pointer duration-100"
            onMouseEnter={() => handleMouseEnter("cards")}
            onMouseLeave={handleMouseLeaveWithDelay}
          >
            <h1
              className="text-2xl font-bold transform transition-transform duration-300 ease-in-out"
              style={{ fontFamily: "Protest Guerrilla" }}
            >
              PERSONALIZED GREETING CARDS
            </h1>
            {openDropdown === "cards" && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white text-black duration-700 ease-in-out rounded-lg shadow-lg z-20"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <ul className="p-4">
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/birthday">Birthday Cards</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/anniversary">Anniversary Cards</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/wedding">Wedding Cards</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/festive">Festive Cards</Link>
                  </li>
                  <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                    <Link to="/thank-you">Thank You Cards</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Shopping Bag Icon */}
          <div className="flex items-center">
            {/* Wrap the icon in a Link if it navigates to the cart page */}
            <div className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Link to="/cart">
                {" "}
                <FaShoppingCart />
              </Link>
            </div>
          </div>

          {/* Navigation Buttons */}
          {/* Navigation Buttons */}
          <div className="flex items-center">
            <Link to="/blog">
              <button className="text-white bg-gradient-to-b from-purple-500 to-purple-700 hover:to-purple-900 px-4 py-2 mx-2 rounded-lg">
                BLOG
              </button>
            </Link>

            <button
              onClick={() => {
                if (isLoggedIn) {
                  handleLogout(); // Show confirmation dialog
                } else {
                  handleLogin(); // Log in and navigate to the login success page
                }
              }}
              className="text-white bg-gradient-to-b from-purple-500 to-purple-700 hover:to-purple-900 px-4 py-2 mx-2 rounded-lg"
            >
              {isLoggedIn ? "LOGOUT" : "LOGIN"}
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (s_width < 540) {
    return (
      <div className="relative z-50">
        <div className="  w-full mx-auto bg-white border-b-2 border-b-purple-500 text-purple-400 px-4 py-3 flex items-center justify-between">
          {/* Hamburger Icon for Mobile */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Logo Section */}
          <div className=" flex items-center justify-center flex-1 md:justify-start hover:scale-110 transform transition duration-300">
            <Link to="/">
              <img className="w-20 md:w-24 mt-2" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="hidden md:flex flex-row items-center justify-center gap-10 ml-10">
            {/* Personalized Gifts Dropdown */}
            <div
              className="relative l-shape-border border border-transparent hover:border-b-purple-500 cursor-pointer duration-100"
              onMouseEnter={() => handleMouseEnter("gifts")}
              onMouseLeave={handleMouseLeave}
            >
              <h1
                className="text-2xl font-bold"
                style={{ fontFamily: "Protest Guerrilla" }}
              >
                PERSONALIZED GIFTS
              </h1>
              {openDropdown === "gifts" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white text-black rounded-lg shadow-lg z-20">
                  <ul className="p-4">
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/mugs">Custom Mugs</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/personalized-frames">Personalized Frames</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/nameplates">Nameplates</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/starmaps">Star Maps</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Wooden Engraved Items Dropdown */}
            <div
              className="relative l-shape-border border border-transparent hover:border-b-purple-500 cursor-pointer duration-100"
              onMouseEnter={() => handleMouseEnter("wooden")}
              onMouseLeave={handleMouseLeave}
            >
              <h1
                className="text-2xl font-bold"
                style={{ fontFamily: "Protest Guerrilla" }}
              >
                WOODEN ENGRAVED ITEMS
              </h1>
              {openDropdown === "wooden" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white text-black rounded-lg shadow-lg z-20">
                  <ul className="p-4">
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/templates">Templates</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/keychains">Customizable Keychains</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/plaques">Engraved Wooden Plaques</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/coasters">Engraved Wooden Coasters</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Personalized Greeting Cards Dropdown */}
            <div
              className="relative l-shape-border border border-transparent hover:border-b-purple-500 cursor-pointer duration-100"
              onMouseEnter={() => handleMouseEnter("cards")}
              onMouseLeave={handleMouseLeave}
            >
              <h1
                className="text-2xl font-bold"
                style={{ fontFamily: "Protest Guerrilla" }}
              >
                PERSONALIZED GREETING CARDS
              </h1>
              {openDropdown === "cards" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white text-black rounded-lg shadow-lg z-20">
                  <ul className="p-4">
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/birthday">Birthday Cards</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/anniversary">Anniversary Cards</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/wedding">Wedding Cards</Link>
                    </li>
                    <li className="py-2 hover:text-purple-500">
                      <Link to="/festive">Festive Cards</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="mx-10 hidden md:block"></div>

          {/* Shopping Bag Icon */}
          <div className="text-2xl hover:scale-110 transform transition duration-300">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-3/4 h-screen bg-gradient-to-b from-purple-200 via-white to-white shadow-lg z-50">
            <div className="flex flex-col items-start p-4 space-y-4">
              {/* Close Button */}
              <div
                className="self-end cursor-pointer text-2xl mb-4"
                onClick={closeMobileMenu}
              >
                <FaTimes />
              </div>

              {/* Menu Section - Personalized Gifts */}
              <div className="w-full border-b border-gray-300">
                <button
                  className="text-left py-2 text-xl w-full flex items-center justify-between"
                  onClick={() => handleMobileDropdown("gifts")}
                >
                  <span>Personalized Gifts</span>
                  {activeDropdownMobile === "gifts" ? (
                    <FaChevronUp size={16} />
                  ) : (
                    <FaChevronDown size={16} />
                  )}
                </button>
                {activeDropdownMobile === "gifts" && (
                  <ul className="pl-4 transition-all duration-300 ease-in-out">
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/mugs" onClick={closeMobileMenu}>
                        Custom Mugs
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/personalized-frames" onClick={closeMobileMenu}>
                        Personalized Frames
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/nameplates" onClick={closeMobileMenu}>
                        Nameplates
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 transition-all duration-200">
                      <Link to="/starmaps" onClick={closeMobileMenu}>
                        Star Maps
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Menu Section - Wooden Engraved Items */}
              <div className="w-full border-b border-gray-300">
                <button
                  className="text-left py-2 text-xl w-full flex items-center justify-between"
                  onClick={() => handleMobileDropdown("wooden")}
                >
                  <span>Wooden Engraved Items</span>
                  {activeDropdownMobile === "wooden" ? (
                    <FaChevronUp size={16} />
                  ) : (
                    <FaChevronDown size={16} />
                  )}
                </button>
                {activeDropdownMobile === "wooden" && (
                  <ul className="pl-4 transition-all duration-300 ease-in-out">
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/templates" onClick={closeMobileMenu}>
                        Templates
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/keychains" onClick={closeMobileMenu}>
                        Customizable Keychains
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/plaques" onClick={closeMobileMenu}>
                        Engraved Wooden Plaques
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 transition-all duration-200">
                      <Link to="/coasters" onClick={closeMobileMenu}>
                        Engraved Wooden Coasters
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Menu Section - Personalized Greeting Cards */}
              <div className="w-full border-b border-gray-300">
                <button
                  className="text-left py-2 text-xl w-full flex items-center justify-between"
                  onClick={() => handleMobileDropdown("cards")}
                >
                  <span>Personalized Greeting Cards</span>
                  {activeDropdownMobile === "cards" ? (
                    <FaChevronUp size={16} />
                  ) : (
                    <FaChevronDown size={16} />
                  )}
                </button>
                {activeDropdownMobile === "cards" && (
                  <ul className="pl-4 transition-all duration-300 ease-in-out">
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/birthday" onClick={closeMobileMenu}>
                        Birthday Cards
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/anniversary" onClick={closeMobileMenu}>
                        Anniversary Cards
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 border-b border-gray-300 transition-all duration-200">
                      <Link to="/wedding" onClick={closeMobileMenu}>
                        Wedding Cards
                      </Link>
                    </li>
                    <li className="py-2 hover:bg-purple-100 hover:pl-2 transition-all duration-200">
                      <Link to="/festive" onClick={closeMobileMenu}>
                        Festive Cards
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Static Links */}
              <div className="py-2 text-xl w-full hover:bg-purple-100 hover:pl-2 transition-all duration-200 border-b border-gray-300">
                <Link to="/Blogs" onClick={closeMobileMenu}>
                  Blogs
                </Link>
              </div>

              <div className="py-2 text-xl w-full hover:bg-purple-100 hover:pl-2 transition-all duration-200 border-b border-gray-300">
                <Link to="/contact" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </div>

              <div className="py-2 text-xl w-full hover:bg-purple-100 hover:pl-2 transition-all duration-200">
                <Link to="/login" onClick={closeMobileMenu}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Header;

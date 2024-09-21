import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../photos/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // 'gifts', 'wooden', 'cards'
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

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

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout); // Clear the timeout if mouse enters dropdown area
      setDropdownTimeout(null);
    }
  };

  const handleMouseLeaveDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    return () => {
      // Cleanup any leftover timeout when the component unmounts
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
    <div className="relative z-50">
      <div className="w-full mx-auto bg-white border-b-2 border-b-purple-500 text-purple-400 px-4 py-3 flex items-center gap-20">
        {/* Logo Section */}
        <div className="l-shape-border px-2 h-full flex items-center border border-transparent cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="logo" />
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
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white  duration-700 ease-in-out text-black rounded-lg shadow-lg z-20"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <ul className="p-4">
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Custom Mugs
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Personalized Frames
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Nameplates
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Star Maps
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
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xs bg-white  duration-700 ease-in-out text-black rounded-lg shadow-lg z-20"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <ul className="p-4">
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Templates
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Customizable Keychains
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Engraved Wooden Plaques
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Engraved Wooden Coasters
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Engraved Wooden Boxes
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
                  Birthday Cards
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Anniversary Cards
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Wedding Cards
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Festive Cards
                </li>
                <li className="py-2 px-2 rounded hover:text-purple-500 hover:font-bold ease-in-out transition-all duration-200 hover:decoration-purple-500">
                  Thank You Cards
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Shopping Bag Icon */}
        <div className="flex items-center">
          {/* Wrap the icon in a Link if it navigates to the cart page */}
          <div className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110">
            <FaShoppingCart />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center">
          <Link to="/blogs">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Blogs
            </button>
          </Link>
          <Link to="/login">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "./index.css"; // Import your global styles
import App from "./App"; // Import the main App component

// Create the root element and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

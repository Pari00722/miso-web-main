import React from "react";
import { Link } from "react-router-dom";

const LogoutSuccess = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Logged out successfully</h1>

        {/* Continue to Home Button */}
        <Link
          to="/"
          className="mt-4 inline-block bg-purple-500 text-white py-1.5 px-3 rounded-lg text-sm transition duration-300 hover:bg-purple-700 mx-2"
        >
          Continue to Home
        </Link>

        {/* Login Again Button */}
        <Link
          to="/login"
          className="mt-4 inline-block bg-purple-500 text-white py-1.5 px-3 rounded-lg text-sm transition duration-300 hover:bg-purple-700 mx-2"
        >
          Login Again
        </Link>
      </div>
    </div>
  );
};

export default LogoutSuccess;

import React from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported

const LoginSuccess = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">You have logged in successfully!</h1>
        <Link
          to="/"
          className="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded-lg"
        >
          Continue to Home
        </Link>
      </div>
    </div>
  );
};

export default LoginSuccess;

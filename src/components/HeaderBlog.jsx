import React from "react";

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between p-4 shadow-md">
      <div className="text-2xl font-semibold">Medium</div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25L20.25 12.75m0 0l-4.5-4.5m4.5 4.5H3.75"
            />
          </svg>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405 1.405c-.378.378-.88.595-1.415.595H11c-.535 0-1.037-.217-1.415-.595L8 17m7-12h-2a4 4 0 00-8 0h2a2 2 0 114 0h2m2 0a2 2 0 114 0m-1.295 6.705a1.025 1.025 0 011.41 1.41L13 15.415l1.705-1.705z"
            />
          </svg>
        </button>
        <img
          src="https://via.placeholder.com/32"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;


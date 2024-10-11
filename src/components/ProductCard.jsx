import React, { useState } from "react";

const ProductCard = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`p-4 border border-gray-200 bg-white rounded-lg shadow-md transition-transform duration-300 ${
        isActive ? "scale-110" : "scale-100"
      } hover:shadow-xl cursor-pointer`}
      onClick={toggleActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-68 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-75"
        />
        <span className="absolute top-2 left-2  font-crimson bg-pink-400 text-white text-xs font-bold py-1 px-2 rounded">
          Best Seller
        </span>
      </div>
      <h2
        className="text-xl font-bold mt-2"
        style={{ fontFamily: "Crimson Text" }}
      >
        {item.name}
      </h2>
      <p className="text-gray-600" style={{ fontFamily: "Crimson Text" }}>
        {item.description}
      </p>
      <p
        className="text-black-500 font-semibold"
        style={{ fontFamily: "Crimson Text" }}
      >
        ${item.price}
      </p>
    </div>
  );
};

export default ProductCard;

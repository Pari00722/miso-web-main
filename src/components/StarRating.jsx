import React, { useState } from "react";

const StarRating = ({ onRating }) => {
  const [rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (value) => {
    setRating(value);
    onRating(value); // Pass the selected rating to the parent component
  };

  return (
    <div className="flex items-center mb-4">
      {stars.map((star) => (
        <svg
          key={star}
          onClick={() => handleClick(star)}
          className={`h-6 w-6 cursor-pointer ${
            star <= rating ? "text-yellow-500" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.215 1.194-5.936 5.784 1.4 8.173L12 18.897l-7.347 3.855 1.4-8.173-5.936-5.784 8.215-1.194z" />
        </svg>
      ))}
      <span className="ml-2">{rating} / 5</span>
    </div>
  );
};

export default StarRating;

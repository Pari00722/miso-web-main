import React, { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    if (username.trim() && review.trim()) {
      onSubmit({ username, review }); // Pass the username and review to the parent component
      setUsername(""); // Clear the username input
      setReview(""); // Clear the review input
    }
  };

  return (
    <div className="mt-4">
      {/* Input for the username */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-4"
        placeholder="Your name"
      />
      {/* Input for the review */}
      <input
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Write your review here..."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit(); // Submit on Enter key press
          }
        }}
      />
      {/* Submit Review link on a new line */}
      <div className="mt-2">
        <span
          onClick={handleSubmit}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Submit Review
        </span>
      </div>
    </div>
  );
};

export default ReviewForm;

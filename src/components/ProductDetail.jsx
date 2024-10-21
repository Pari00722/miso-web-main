import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // Firebase auth import
import { auth } from "../Firebase"; // Import your Firebase auth setup
import StarRating from "./StarRating";

const productsData = [
  {
    id: 1,
    name: "Customized Mug",
    description:
      "A beautifully customized mug, perfect for gifts or personal use.",
    price: 15.99,
    image: "/assets/custommugs.bs.png",
  },
  {
    id: 2,
    name: "Personalized Keychain",
    description: "A unique personalized keychain to keep your keys stylish.",
    price: 7.99,
    image: "/assets/keychain.bs.png",
  },
  {
    id: 3,
    name: "Engraved Wooden Plaque",
    description:
      "A stunning engraved wooden plaque, ideal for awards or decor.",
    price: 25.99,
    image: "/assets/plaques.bs.png",
  },
  {
    id: 4,
    name: "Customized Dog Tags",
    description:
      "A custom tag for your dog, ensuring they are always identified.",
    price: 5.99,
    image: "/assets/dogtag.bs.jpeg",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false); // For dropdown form visibility
  const [user, setUser] = useState(null); // User state to track authentication
  const [reviewContent, setReviewContent] = useState({
    name: "",
    review: "",
  }); // Review input fields
  const navigate = useNavigate();

  // Track authentication state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // If the user is logged in
      } else {
        setUser(null); // If the user is not logged in
      }
    });
  }, []);

  // Dummy handleRating function to avoid the error
  const handleRating = (rating) => {
    console.log(`User rated: ${rating}`);
  };

  const handleBuyNow = () => {
    if (user) {
      // User is logged in, redirect to the respective page
      navigate(`/purchase/${product.id}`);
    } else {
      // User is not logged in, show login box
      navigate("/login");
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: reviewContent.name,
      review: reviewContent.review,
    };
    setReviews([...reviews, newReview]); // Add new review to the reviews array
    setReviewContent({ name: "", review: "" }); // Reset the form fields
    setShowReviewForm(false); // Close the review form after submission
  };

  return (
    <div className="container mx-auto py-12">
      {product ? (
        <div className="flex flex-col md:flex-row items-start md:justify-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-1/4 h-auto rounded-lg shadow-lg mb-6"
          />
          <div className="md:ml-8 text-left">
            <h1 className="text-4xl font-bold mb-4 font-crimson">
              {product.name}
            </h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Star Rating Component */}
            <StarRating onRating={handleRating} />

            {/* Add to Cart and Buy Now buttons */}
            <div className="flex space-x-4">
              <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-transform duration-300 transform hover:scale-110 active:scale-110 cursor-pointer">
                Add to Cart
              </button>
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-transform duration-300 transform hover:scale-110 active:scale-110 cursor-pointer"
                onClick={handleBuyNow} // Handle the Buy Now click
              >
                Buy Now
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              {/* Conditionally render reviews or "no reviews" message */}
              {reviews.length === 0 ? (
                <p
                  className="text-black underline cursor-pointer hover:text-blue-700 transition-colors"
                  onClick={() => setShowReviewForm(!showReviewForm)}
                >
                  No reviews yet, be the first one to write a review.
                </p>
              ) : (
                reviews.map((review, index) => (
                  <div key={index} className="mt-2">
                    <p className="font-bold">{review.name}:</p>
                    <p>{review.review}</p>
                  </div>
                ))
              )}

              {/* Review Form Dropdown */}
              {showReviewForm && (
                <form
                  className="mt-4 border p-4 rounded shadow-lg"
                  onSubmit={handleReviewSubmit}
                >
                  <div className="mb-4">
                    <label className="block mb-2 font-bold">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={reviewContent.name}
                      onChange={(e) =>
                        setReviewContent({
                          ...reviewContent,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-bold">Review</label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded"
                      value={reviewContent.review}
                      onChange={(e) =>
                        setReviewContent({
                          ...reviewContent,
                          review: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;

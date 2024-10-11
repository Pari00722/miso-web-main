import React from "react";
import { useParams } from "react-router-dom";

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
            <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300">
              Add to Cart
            </button>
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <p className="mt-2 text-gray-600">
                No reviews yet. Be the first to write a review!
              </p>
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

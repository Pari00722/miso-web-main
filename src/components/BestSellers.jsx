import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function BestSellers() {
  const bestSellers = [
    {
      id: 1,
      name: "Customized Mug",
      description: "A beautifully customized mug",
      price: 15.99,
      image: "/assets/custommugs.bs.png",
    },
    {
      id: 2,
      name: "Personalized Keychain",
      description: "A unique personalized keychain",
      price: 7.99,
      image: "/assets/keychain.bs.png",
    },
    {
      id: 3,
      name: "Engraved Wooden Plaque",
      description: "A stunning engraved wooden plaque",
      price: 25.99,
      image: "/assets/plaques.bs.png",
    },
    {
      id: 4,
      name: "Customized Dog Tags",
      description: "A custom tag for your dog",
      price: 5.99,
      image: "/assets/dogtag.bs.jpeg",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center font-crimson mb-8">
        Best Sellers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bestSellers.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard item={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;

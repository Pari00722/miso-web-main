import React from "react";
const Cart = () => {
  // Assuming the cart is empty for now
  const isCartEmpty = true;
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-80 py10">
      {" "}
      {/* Adjust height and add bg color */}
      {isCartEmpty ? (
        <div className="text-center">
          <video
            src="/assets/empty.mp4"
            alt="Empty Cart"
            className="w-full h-auto max-w-screen-md mx-auto"
            autoPlay
            loop
            muted
          />
          <p className="text-3xl font-semibold mt-4 text-gray-600">
            Your Cart is Empty!
          </p>
        </div>
      ) : (
        <p>Your cart has items!</p>
      )}
    </div>
  );
};
export default Cart;

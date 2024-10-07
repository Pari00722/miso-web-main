import React from "react";
import Ingredients from "./Ingredients.jsx";
import JournalSection from "./JournalSection.jsx";

const Home = () => {
  return (
    <div className="bg-[#efebe7] text-center pb-8 pt-64 px-4">
      <p className="text-3xl font-bold mt-8 font-handlee">
        WELCOME TO OUR STORE
      </p>
      <p className="font-handlee text-2xl mt-4 max-w-4xl mx-auto">
        From heartfelt gifts to timeless decor, Miso brings your vision to life.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-16 mt-8">
        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/one.png"
            className="w-20 h-20 object-cover transform transition duration-300 hover:scale-110"
            alt="Thoughtful Gifts"
          />
          <div className="text-center font-handlee mt-4">
            <p className="text-3xl font-semibold">Thoughtful Gifts</p>
            <p className="text-2xl text-gray-600 mt-2">
              Handpicked treasures for every special occasion.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/two.png"
            className="w-20 h-20 object-cover transform transition duration-300 hover:scale-110"
            alt="Crafted with Care"
          />
          <div className="text-center font-handlee mt-4">
            <p className="text-3xl font-semibold">Crafted with Care</p>
            <p className="text-2xl text-gray-600 mt-2">
              Expertly made with attention to every detail.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <img
            src="/assets/three.png"
            className="w-20 h-20 object-cover transform transition duration-300 hover:scale-110"
            alt="Elegance in Every Piece"
          />
          <div className="text-center font-handlee mt-4">
            <p className="text-3xl font-semibold">Elegance in Every Piece</p>
            <p className="text-2xl text-gray-600 mt-2">
              Sophisticated designs that elevate any gift-giving moment.
            </p>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <Ingredients />
      <JournalSection />
    </div>
  );
};

export default Home;

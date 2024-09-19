import React from "react";
import Slider from "react-slick";
import logo1 from "../photos/Logo1.jpg";
import logo2 from "../photos/Logo2.jpg";
import logo3 from "../photos/Logo3.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-52 flex justify-center">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-700 hover:text-white transition-transform duration-300 ease-in-out">
        <b className={`text-2xl ${i === 0 ? "text-white" : ""}`}>_</b>
      </div>
    ),
  };

  return (
    <div className="w-full h-64 relative z-5">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-full object-cover"
            src={logo1}
            alt="Logo 1"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={logo2}
            alt="Logo 2"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={logo3}
            alt="Logo 3"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={logo3}
            alt="Logo 4"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

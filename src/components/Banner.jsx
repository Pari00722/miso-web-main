import React, { useState } from 'react';
import Slider from "react-slick";

const Banner = () => {
    const [dotActive, setDotActive] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "210px",
                }}
            >
                <ul style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center", // Centered pagination dots
                }}>
                    {dots}
                </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: i === dotActive ? 'white' : '#232F3E', // Change text color based on active state
                    background: "transparent", // Transparent background
                    border: "none", // No border
                    cursor: "pointer",
                    fontSize: "40px", // Base text size
                    transition: "font-size 0.3s ease", // Smooth transition for hover effect
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.fontSize = "60px"; // Increase font size on hover
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.fontSize = "40px"; // Reset font size when not hovering
                }}
            >
                <b>_</b>
            </div>
        ),
    };

    return (
        <div className='w-full'>
            <div className='w-full h-64 relative z-5'>
                <Slider {...settings}>
                    <div>
                        <img src='./images/Logo1.jpg' alt='Logo 1' />
                    </div>
                    <div>
                        <img src='./images/Logo2.jpg' alt='Logo 2' />
                    </div>
                    <div>
                        <img src='./images/Logo3.jpg' alt='Logo 3' />
                    </div>
                    <div>
                        <img src='./images/Logo4.jpeg' alt='Logo 4' />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Banner;

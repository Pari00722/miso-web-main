import React, { useState } from 'react'
import Slider from "react-slick";

const Banner = () => {
    const [dotActive, setDotActive] =useState(0);
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows:false,
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
                left: "45%",
                transform: "translate(-50% -50%)",
                width: "210px",

              }}
            >
              <ul style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

              }}
              >
              {" "}
              {dots} {" "}
              </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i === dotActive
                ?{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                border: "1px solid #f3a847",
                padding: "8px 0",
                cursor: "pointer",
            
              }
            :{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#232F3E",
                border: "1px solid white",
                padding: "8px 0",
                cursor: "pointer",

            }
        }
            
            
            
            >
              {i + 1}
            </div>
          )
        
      };
  return (
    
<div className='w-full' >
  <div className='w-full h-16 relative z-5'>
<Slider {...settings}>
        <div >
            <img src = './images/Logo1.jpg' alt=''/>

        </div>
        <div>
            <img src = './images/Logo2.jpg'  alt=''/>
            
        </div>
        <div>
            <img src = './images/Logo3.jpg'  alt=''/>
            
        </div>
        <div>
            <img src = './images/Logo4.jpeg'  alt=''/>
            
        </div>
   
  </Slider>
</div>
</div>
 
  
  
  )
}

export default Banner
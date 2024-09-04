import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Import images
import image1 from "../../assets/poster/1.png";
import image2 from "../../assets/poster/2.png";
import image3 from "../../assets/poster/3.png";
import image4 from "../../assets/poster/4.png";
import image5 from "../../assets/poster/5.png";
import image6 from "../../assets/poster/5.png";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
   
      <Slider {...settings}  className="self-center  rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]">
         
            <img
              src={image1}
              alt="Slide 1"
              className="h-full w-full object-cover rounded-xl inner-slide slide-container flex justify-center items-center p-1"
            />
            <img
              src={image1}
              alt="Slide 1"
              className="h-full w-full object-cover rounded-xl inner-slide slide-container flex justify-center items-center p-1"
            />
            <img
              src={image2}
              alt="Slide 1"
              className="h-full w-full object-cover rounded-xl inner-slide slide-container flex justify-center items-center p-1"
            />
            <img
              src={image3}
              alt="Slide 1"
              className="h-full w-full object-cover rounded-xl inner-slide slide-container flex justify-center items-center p-1"
            />
            <img
              src={image4}
              alt="Slide 1"
              className="h-full w-full object-cover rounded-xl inner-slide slide-container flex justify-center items-center p-1"
            />
            <img
              src={image5}
              alt="Slide 1"
              className="h-full w-full object-cover rounded-xl inner-slide slide-container flex justify-center items-center p-1"
            />
  
      </Slider>

  );
};

export default Banner;

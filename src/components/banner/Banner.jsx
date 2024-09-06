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
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full h-full">
        <Slider
          {...settings}
          className=""
        >
          <div>
            <img
              src={image1}
              alt="Slide 1"
              className="w-full h-full object-cover "
            />
          </div>
          <div>
            <img
              src={image2}
              alt="Slide 2"
              className="w-full h-full object-cover "
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Slide 3"
              className="w-full h-full object-cover "
            />
          </div>
          <div>
            <img
              src={image4}
              alt="Slide 4"
              className="w-full h-full object-cover "
            />
          </div>
          <div>
            <img
              src={image5}
              alt="Slide 5"
              className="w-full h-full object-cover "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

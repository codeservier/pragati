import React from "react";

const Card = ({ title, description, coverPic, logo, onClick, button }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg group cursor-pointer hover:scale-95 hover:bg-white transition-all duration-300 overflow-hidden"
      onClick={onClick}
    >
      {/* Cover Photo */}
      <div className="relative h-52">
        <img
          src={coverPic}
          alt={title}
          className="w-full  object-cover rounded-t-lg"
        />
      </div>

      {/* Card Content */}
      <div className="flex ">
        {/* Logo Image */}
        <img
          src={logo}
          alt={`${title} logo`}
          className="w-20 h-20 rounded-full border-2 border-white bg-white mr-4"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-extrabold ">{title}</h3>
          <p className="text-gray-600 p-2 mb-4">{description}</p>
          {button}
        </div>
      </div>
    </div>
  );
};

export default Card;

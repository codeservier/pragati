// src/components/card/TopInstructorCard.jsx
import React from "react";

const OurInstructorCard = ({ title, description, image }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center"> {/* Added Flexbox utility classes */}
    <div className="flex-shrink-0"> {/* Center the image container */}
      <img
        src={image}
        alt={title}
        className="h-64 w-64 object-cover rounded-full" // Adjust width and height here
      />
    </div>
    <h2 className="text-xl font-bold text-primary mb-2 text-center">{title}</h2>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
  );
};

export default OurInstructorCard;

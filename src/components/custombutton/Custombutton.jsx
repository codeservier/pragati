import React from "react";

const CustomButton = ({ title }) => {
  return (
    <div>
      <button
        className=" w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide tcapitalize  m  hover:bg-primary bg-secondary 
    hover:no-underline rounded-full p-2 text-white transition-all duration-200"
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;

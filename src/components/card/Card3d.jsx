import React from "react";
import neeticon from "../../assets/poster/neeticon.webp";
import arrow from "../../assets/svg/arrow.svg";

const CreditCard = ({ courseName, courseImg, title }) => {
  const tags = courseName.split(",").map((tag) => tag.trim());

  return (
    <div
      className=" border border-secondary bg-secondary/5 rounded-md overflow-hidden transition-all duration-200 max-w-[400px] sm:w-full w-[328px] lg:p-6 md:p-5 p-4 relative flex flex-row cursor-pointer"
      onClick={() => console.log("Hola")}
    >
      <div className="flex flex-col md:w-[232px] w-[226px]">
        <div className="flex flex-row whitespace-nowrap lg:text-[24px] md:text-[20px] text-[18px] font-bold md:leading-[30px] lg:leading-[32px] leading-[20px]">
          <div className="w-[220px] overflow-hidden">{title}</div>
        </div>
        <div className="flex flex-row items-start lg:pt-4 pt-3 flex-wrap md:w-[232px] w-[220px] overflow-y-auto">
          {tags.map((tag, index) => (
            <a
              key={index}
              className="md:text-[14px] text-[12px] md:mr-2 mr-1 leading-[20px] my-1 lg:px-5 px-3 md:py-2 py-1 bg-primary text-white text-center rounded-full cursor-pointer"
            >
              {tag}
            </a>
          ))}
        </div>
        <a className="lg:mt-5 md:mt-4 mt-3 flex flex-row items-center text-[#1B2124] hover:text-[#5A4BDA] duration-200">
          {/* <div className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] cursor-pointer pr-3">
            Explore Category
          </div> */}
          {/* <div className="bg-[#F8F8F8] flex items-center rounded-full duration-200 md:px-3 px-2 md:py-1 py-1">
            <img src={arrow} alt="Arrow" />
          </div> */}
        </a>
      </div>
      <div className="relative flex items-center justify-center w-full md:w-[106px] h-[100%] border rounded-xl  border-secondary">
        <div className="flex items-center justify-center rounded-xl  p-2 md:p-3">
          {courseImg}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

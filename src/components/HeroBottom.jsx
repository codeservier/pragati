import React from 'react';
import studentimg from '../assets/svg/logo.svg'

const HeroBottom = () => {
  return (
    <div className="max-w-6xl flex items-center sm:py-[60px] py-[30px] justify-between flex-col xl:flex-row m-auto relative">
      <div className="text-center xl:text-left xl:w-[36%] w-full">
        <h1 className="font-bold text-2xl px-[50px] md:px-0 text-[#1B2124] xl:text-[40px] md:text-[32px] md:leading-[48px] xl:leading-[50px] mb-[6px]">
          Bharat’s <span className="text-secondary">Biggest &amp; Most Trusted</span> Educational Platform
        </h1>
        <div className="text-sm md:text-[16px] px-4 md:px-0 text-center xl:text-start text-[#3D3D3D] mb-3.5 xl:mb-10">
          Unlock your potential by signing up with Physics Wallah-The most affordable learning solution
        </div>
      <CustomButton title={"Get Started"} />
      </div>
      <div className="sm:py-4 py-6">
        <div className="relative justify-items-center sm:text-[14px] sm:leading-[20px] text-[12px] leading-[18px] font-[500]">
  
          <img
            alt="hero-student"
            fetchpriority="high"
            loading="eager"
            className="sm:block hidden h-[318px] w-[600px] bg-center bg-no-repeat bg-contain"
            src={studentimg}
          />
            
        </div>
      </div>


      
    </div>
  );
};

export default HeroBottom;

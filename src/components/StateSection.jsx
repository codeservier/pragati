import React from "react";
import { FaRegClock, FaBook, FaQuestionCircle, FaBuilding } from 'react-icons/fa';

const StatsSection = () => {
  return (
  
        <div className="max-w-screen-2xl items-center sm:py-[60px] py-[30px] flex-col xl:flex-row m-auto relative rounded-md md:rounded-md bg-white md:flex md:flex-wrap lg:flex-nowrap justify-between grid xl:grid-cols-4 grid-cols-2 gap-y-3 mt-[-1%] shadow-[0px_1px_8px_0px_rgba(0,_0,_0,_0.08)] ">
          
          {/* Daily Live */}
          <div className="lg:block hidden">
            <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
              <div className="self-center mb-2.5 md:mb-3.5">
                <div className="text-3xl text-secondary">
                  <FaRegClock className="h-14" />
                </div>
              </div>
              <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
                Daily Live
              </div>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">
                Interactive classes
              </div>
            </div>
          </div>
    
          <div className="lg:hidden block">
            <div className="flex justify-center">
              <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
                <div className="self-center mb-2.5 md:mb-3.5">
                  <div className="text-3xl text-secondary">
                    <FaRegClock className="h-14" />
                  </div>
                </div>
                <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
                  Daily Live
                </div>
                <div className="md:text-base text-xs font-medium text-[#1B2124]">
                  Interactive classes
                </div>
              </div>
            </div>
          </div>
    
          <div className="after:block after:bg-[#D9DCE1] after:w-[1px] after:h-16 my-6 hidden lg:block"></div>
    
          {/* 10 Million + */}
          <div className="lg:block hidden">
            <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
              <div className="self-center mb-2.5 md:mb-3.5">
                <div className="text-3xl text-secondary">
                  <FaBook  className="h-14"/>
                </div>
              </div>
              <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
                10 Million +
              </div>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">
                Tests, sample papers &amp; notes
              </div>
            </div>
          </div>
    
          <div className="lg:hidden block">
            <div className="flex justify-center">
              <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
                <div className="self-center mb-2.5 md:mb-3.5">
                  <div className="text-3xl text-secondary">
                    <FaBook className="h-14" />
                  </div>
                </div>
                <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
                  10 Million +
                </div>
                <div className="md:text-base text-xs font-medium text-[#1B2124]">
                  Tests, sample papers &amp; notes
                </div>
              </div>
            </div>
          </div>
    
          <div className="after:block after:bg-[#D9DCE1] after:w-[1px] after:h-16 my-6 hidden lg:block"></div>
    
          {/* 24 x 7 */}
          <div className="lg:block hidden">
            <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
              <div className="self-center mb-2.5 md:mb-3.5">
                <div className="text-3xl text-secondary">
                  <FaQuestionCircle className="h-14" />
                </div>
              </div>
              <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
                24 x 7
              </div>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">
                Doubt solving sessions
              </div>
            </div>
          </div>
    
          <div className="lg:hidden block">
            <div className="flex justify-center">
              <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
                <div className="self-center mb-2.5 md:mb-3.5">
                  <div className="text-3xl text-secondary">
                    <FaQuestionCircle  className="h-14"/>
                  </div>
                </div>
                <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
                  24 x 7
                </div>
                <div className="md:text-base text-xs font-medium text-[#1B2124]">
                  Doubt solving sessions
                </div>
              </div>
            </div>
          </div>
    
          <div className="after:block after:bg-[#D9DCE1] after:w-[1px] after:h-16 my-6 hidden lg:block"></div>
    
          {/* 100 + */}
          <div className="lg:block hidden">
            <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
              <div className="self-center mb-2.5 md:mb-3.5">
                <div className="text-3xl text-secondary">
                  <FaBuilding />
                </div>
              </div>
              <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
                100 +
              </div>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">
                Offline centres
              </div>
            </div>
          </div>
    
          <div className="lg:hidden block">
            <div className="flex justify-center">
              <div className="md:columns-3 columns-6 w-[154px] sm:w-[330px] lg:w-[240px] flex flex-col text-center">
                <div className="self-center mb-2.5 md:mb-3.5">
                  <div className="text-3xl text-secondary">
                    <FaBuilding className="h-14" />
                  </div>
                </div>
                <div className="text-sm md:text-lg font-semibold text-[#1B2124]">
                  100 +
                </div>
                <div className="md:text-base text-xs font-medium text-[#1B2124]">
                  Offline centres
                </div>
              </div>
            </div>
          </div>
        </div>
  
    
  );
};

export default StatsSection;

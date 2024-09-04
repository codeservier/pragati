import React, { useEffect, useState } from "react";
import SingleBanner from "../components/banner/SingleBanner";
// import { BannerSlider } from "../components/banner/BannerSlider";
import ContunueWatching from "./ContunueWatching";
import { Upcoming } from "../components/banner/Upcoming";
import TopInstructor from "../components/TopInstructor";
import Banner from "../components/banner/Banner";
import Loader from "../components/loader/Loader";
import Testimonials from "../components/Testimonials";
import MetricsPage from "../components/Metrics";
import CourseProvideByCoaching from "../components/CourseProvideByCoaching";
export const HomePage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {false ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="max-w-screen mx-auto px-1  " >
            <Banner />
          </div>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <ContunueWatching />
          </div>
          <div className="max-w-screen-xl mx-auto px-6">
            <SingleBanner  />
          </div>
          <div className="max-w-screen-xl mx-auto px-6 ">
            <Upcoming />
          </div>
          <div className="max-w-screen-xl  flex items-center justify-center mx-auto px-2 ">
            <CourseProvideByCoaching />
          </div>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <TopInstructor />
          </div>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <MetricsPage />
          </div>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <Testimonials />
          </div>
        </>
      )}
    </>
  );
};

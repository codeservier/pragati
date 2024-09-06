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
import HeroSection from "../components/HeroBottom";
import HeroBottom from "../components/HeroBottom";
import StatsSection from "../components/StateSection";
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
            <Banner />
            <HeroBottom/>
            <StatsSection/>
            <ContunueWatching />
            <SingleBanner  />
            <Upcoming />
            <CourseProvideByCoaching />
            <TopInstructor />
            <MetricsPage />
            <Testimonials />
        
        </>
      )}
    </>
  );
};

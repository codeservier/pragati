// src/MetricsPage.js
import React from 'react';

const MetricsPage = () => {
  return (
    <div className=" bg-gray-100 p-6 rounded-lg ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center ">A Platform Trusted by Students Worldwide</h1>
        <p className="text-center text-gray-600 mb-12">Don't Just Take Our Word for It. Delve into the Numbers and Witness the Excellence for Yourself!</p>

        <div className="flex flex-wrap justify-around">
          <MetricCard title="Happy Students" value="10 Million+" />
          <MetricCard title="Mock Tests" value="5000+" />
          <MetricCard title="Video Lectures" value="1000+" />
          <MetricCard title="Practice Papers" value="2000+" />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value }) => {
  return (
    <div className="bg-white  hover:bg-secondary/100 group hover:scale-105 transition-all duration-300 shadow-lg rounded-lg p-6 m-4 w-80 text-center">
      <h2 className="text-2xl font-semibold mb-2 group-hover:text-white">{value}</h2>
      <p className="text-gray-600 group-hover:text-white">{title}</p>
    </div>
  );
};

export default MetricsPage;

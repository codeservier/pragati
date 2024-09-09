import React from "react";
import CreditCard from "./card/Card3d";
import img from "../assets/poster/1.png";
import caicon from "../assets/poster/caicon.webp";
import defenceicon from "../assets/poster/defenceicon.webp";
import govexamicon from "../assets/poster/govexamicon.webp";
import iitjee from "../assets/poster/iitjee.webp";
import neeticon from "../assets/poster/neeticon.webp";
import schollbag from "../assets/poster/schollbag.webp";
import { FaFlask, FaGraduationCap, FaSchool, FaShieldAlt, FaCalculator, FaBriefcase } from 'react-icons/fa';


const CourseProvideByCoaching = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-border-l  text-primary my-12">
        Courses Provided By Coaching's
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((course) => (
            <CreditCard
              key={course.id}
              courseName={course.courseName}
              courseImg={course.courseImg}
              title={course.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProvideByCoaching;

const courseData = [
  {
    id: 1,
    title: "NEET",
    courseName: "CGL, CHSL, MTS",
    courseImg: <FaFlask size={80} color="#ff6f61"  />,
  },
  {
    id: 2,
    title: "IIT JEE",
    courseName: "PHYSICS, CHEMISTRY, MATHEMATICS",
    courseImg: <FaGraduationCap size={80} color="#ff6f61" />,
  },
  {
    id: 3,
    title: "School Prep",
    courseName: "CBSE, ICSE, STATE BOARD",
    courseImg: <FaSchool size={80} color="#ff6f61"  />,
  },
  {
    id: 4,
    title: "Defence",
    courseName: "NDA, CDS, SSB, AFCAT",
    courseImg: <FaShieldAlt size={80} color="#ff6f61"  />,
  },
  {
    id: 5,
    title: "CA",
    courseName: "FOUNDATION, INTERMEDIATE, FINAL",
    courseImg: <FaCalculator size={80} color="#ff6f61"  />,
  },
  {
    id: 6,
    title: "Govt Job Exams",
    courseName: "RAS, RRB, SSC, BANK",
    courseImg: <FaBriefcase size={80} color="#ff6f61"  />,
  },
];

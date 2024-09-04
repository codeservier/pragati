import React from "react";
import CreditCard from "./card/Card3d";
import img from "../assets/poster/1.png";

const CourseProvideByCoaching = () => {
  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-border-l border-l-8 text-primary my-12">
        Courses Provided By Coaching
      </h1>
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyCourses.map((item) => (
            <CreditCard
              key={item.id}
              courseName={item.courseName}
              courseDescription={item.courseDescription}
              courseImg={item.courseImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProvideByCoaching;
const dummyCourses = [
  {
    id: 1,
    courseName: "IIT JEE",
    courseDescription: "Intensive preparation course for the Indian Institutes of Technology Joint Entrance Examination (IIT JEE), focusing on advanced topics in Physics, Chemistry, and Mathematics.",
    courseImg: img,
  },
  {
    id: 2,
    courseName: "UPSC",
    courseDescription: "Comprehensive preparation for the Union Public Service Commission (UPSC) exams, covering the Civil Services Examination with a focus on General Studies, Current Affairs, and Optional Subjects.",
    courseImg: img,
  },
  {
    id: 3,
    courseName: "GOV. JOB EXAM",
    courseDescription: "Targeted training for various government job exams, including competitive exams for administrative, clerical, and other government positions.",
    courseImg: img,
  },
  {
    id: 4,
    courseName: "PHYSICS, CHEMISTRY, MATHEMATICS",
    courseDescription: "In-depth study of core topics in Physics, Chemistry, and Mathematics, designed to enhance understanding and problem-solving skills for academic and competitive exams.",
    courseImg: img,
  },
  {
    id: 5,
    courseName: "SSC EXAMS",
    courseDescription: "Focused preparation for Staff Selection Commission (SSC) exams, including SSC CGL, SSC CHSL, and other SSC recruitment tests, with practice on quantitative aptitude, reasoning, and English language skills.",
    courseImg: img,
  },
  {
    id: 6,
    courseName: "SSB, CDS, AFCAT",
    courseDescription: "Preparation for the Services Selection Board (SSB) interviews and written exams for the Combined Defence Services (CDS) and Air Force Common Admission Test (AFCAT), covering defense services recruitment and assessment techniques.",
    courseImg: img,
  }
];

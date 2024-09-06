// src/components/TopInstructor.jsx
import React from "react";
import image1 from "../assets/instructor/ouristructor/sk1.png";
import image2 from "../assets/instructor/ouristructor/ak1.png";
import image3 from "../assets/instructor/ouristructor/vk1.png";
import image4 from "../assets/instructor/ouristructor/image1.png";
import image5 from "../assets/instructor/ouristructor/d1.png";
import image6 from "../assets/instructor/ouristructor/v1.png";

// import Card from "../components/card/Card";
// import OurInstructorCard from "../components/card/OurInstructorCard";

const OurInstructor = () => {
    const cardsData = [
        {
          title: "Sunil Kumar Singh",
          description: "B.SC, B.Ed Polytechnic Diploma (Electronics Engg.) | 8+ Years Exp. | PC Science, Hindi",
          image: image1,
          about: "A highly experienced educator in Electronics Engineering and Computer Science. Specializes in teaching PC Science and Hindi, leveraging both theoretical and practical knowledge to help students excel.",
          qualification: "B.SC, B.Ed Polytechnic Diploma (Electronics Engg.)",
          experience: "8+ Years in PC Science and Hindi.",
        },
        {
          title: "Amit Singh",
          description: "M.SC (Math) MDCISM (Computer Diploma) | 10+ Years Exp. | Math reasoning, English",
          image: image2,
          about: "An accomplished mathematician and computer expert with a deep understanding of mathematical reasoning and English language. Known for innovative teaching methods that simplify complex concepts.",
          qualification: "M.SC (Math), MDCISM (Computer Diploma)",
          experience: "10+ Years in Math reasoning and English.",
        },
        {
          title: "Vivek Kumar Singh",
          description: "B.SC (Math) Polytechnic Diploma (Electronics Engg.) | 9+ Years Exp. | Mathematics, Physics",
          image: image3,
          about: "An expert in Mathematics and Physics, combining strong analytical skills with a practical approach to teaching. Dedicated to helping students understand foundational and advanced concepts in these subjects.",
          qualification: "B.SC (Math), Polytechnic Diploma (Electronics Engg.)",
          experience: "9+ Years in Mathematics and Physics.",
        },
        {
          title: "Abhishek Kumar",
          description: "B.Tech (CSE) | 6+ Years Exp. | DSA, Backend",
          image: image4,
          about: "A seasoned software engineer specializing in Data Structures and Algorithms (DSA) and backend development. Focused on building robust and scalable systems while mentoring students in these critical areas.",
          qualification: "B.Tech (CSE)",
          experience: "6+ Years in DSA and Backend.",
        },
        {
          title: "Dinesh Kumar",
          description: "B.Tech (CSE) | 3+ Years Exp. | Mobile App. Development",
          image: image5,
          about: "An enthusiastic mobile app developer with expertise in creating dynamic and user-friendly applications. Strong focus on Android and iOS platforms, utilizing the latest technologies and frameworks.",
          qualification: "B.Tech (CSE)",
          experience: "3+ Years in Mobile App Development.",
        },
        {
          title: "Vimal Raj",
          description: "B.Tech (CSE) | 3+ Years Exp. | Web Development",
          image: image6,
          about: "A web development specialist with a solid foundation in both front-end and back-end technologies. Passionate about crafting responsive and accessible websites that offer excellent user experiences.",
          qualification: "B.Tech (CSE)",
          experience: "3+ Years in Web Development.",
        },
      ];
      
  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-border-l  text-primary my-12">
        Our Instructors
      </h1>

      <div className="flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
         <div
         key={index}
         className="border border-gray-200 rounded-lg  p-4 flex items-center"
       > 
        <div className="flex-1 ">
              <h2 className="text-3xl font-extrabold text-primary mb-2 ">{card.title}</h2>
              {/* <p className="text-gray-700 mb-2">{card.description}</p> */}
              <p className="text-primary mb-1 max-w-2xl flex flex-col"><strong>About:-</strong> <span className="pl-4 pt-2"> {card.about } </span></p>
              <p className="text-primary mb-1 max-w-md flex flex-col"><strong>Qualification:-</strong> <span className="pl-4 pt-2"> {card.qualification} </span></p>
              <p className="text-primary max-w-md flex flex-col"><strong>Experience:-</strong> <span className="pl-4 pt-2"> {card.experience} </span></p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <img
                src={card.image}
                alt={card.title}
                className="h-40 w-40 object-cover rounded-full bg-transparent"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurInstructor;

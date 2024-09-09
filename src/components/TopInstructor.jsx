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

const TopInstructor = () => {
  const cardsData = [
    {
      title: "Sunil Kumar Singh",
      description:
        "B.SC, B.Ed Polytechnic Diploma (Electronics Engg.) | 8+ Years Exp. | PC Science, Hindi",
      image: image1,
      about:
        "A highly experienced educator in Electronics Engineering and Computer Science. Specializes in teaching PC Science and Hindi, leveraging both theoretical and practical knowledge to help students excel.",
      qualification: "B.SC, B.Ed Polytechnic Diploma (Electronics Engg.)",
      experience: "8+ Years in PC Science and Hindi.",
    },
    {
      title: "Amit Singh",
      description:
        "M.SC (Math) MDCISM (Computer Diploma) | 10+ Years Exp. | Math reasoning, English",
      image: image2,
      about:
        "An accomplished mathematician and computer expert with a deep understanding of mathematical reasoning and English language. Known for innovative teaching methods that simplify complex concepts.",
      qualification: "M.SC (Math), MDCISM (Computer Diploma)",
      experience: "10+ Years in Math reasoning and English.",
    },
    {
      title: "Vivek Kumar Singh",
      description:
        "B.SC (Math) Polytechnic Diploma (Electronics Engg.) | 9+ Years Exp. | Mathematics, Physics",
      image: image3,
      about:
        "An expert in Mathematics and Physics, combining strong analytical skills with a practical approach to teaching. Dedicated to helping students understand foundational and advanced concepts in these subjects.",
      qualification: "B.SC (Math), Polytechnic Diploma (Electronics Engg.)",
      experience: "9+ Years in Mathematics and Physics.",
    },
    {
      title: "Abhishek Kumar",
      description: "B.Tech (CSE) | 6+ Years Exp. | DSA, Backend",
      image: image4,
      about:
        "A seasoned software engineer specializing in Data Structures and Algorithms (DSA) and backend development. Focused on building robust and scalable systems while mentoring students in these critical areas.",
      qualification: "B.Tech (CSE)",
      experience: "6+ Years in DSA and Backend.",
    },
    
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-border-l  text-primary my-12">
        Our Top Instructors From Different Coaching's
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 flex items-center  bg-primary"
          >
            <div className="flex-auto">
              <h2 className="text-3xl font-extrabold text-mywhite mb-2">
                {card.title}
              </h2>
              {/* <p className="text-gray-700 mb-2">{card.description}</p> */}
              <p className="text-primary mb-1 max-w-2xl flex flex-col">
                <strong className="text-secondary">About:-</strong>
                <span className="pl-4 pt-2 text-white">{card.about}</span>
              </p>
              <p className="text-primary mb-1 max-w-md flex flex-col">
                <strong className="text-secondary">Qualification:-</strong>
                <span className="pl-4 pt-2 text-white">{card.qualification}</span>
              </p>
              <p className="text-primary max-w-md flex flex-col">
                <strong className="text-secondary">Experience:-</strong>
                <span className="pl-4 pt-2 text-white">{card.experience}</span>
              </p>
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

export default TopInstructor;

// // src/components/TopInstructor.jsx
// import React from "react";
// import image1 from "../assets/instructor/sk.png";
// import image2 from "../assets/instructor/ak.png";
// import image3 from "../assets/instructor/vk.png";
// import image4 from "../assets/instructor/image.png";
// import image5 from "../assets/instructor/d.png";
// import image6 from "../assets/instructor/v.png";

// import Card from "../components/card/Card";
// import TopInstructorCard from "./card/TopInstructorCard";

// const TopInstructor = () => {
//   const cardsData = [
//     {
//       title: "S.K. Singh",
//       description: "B.SC,B.Ed Polytechnic Diploma (Electronics Engg.) | 8+ Years Exp. |PC Science, Hindi",
//       image: image1,
//     },
//     {
//       title: "Amit Singh",
//       description: "M.SC (Math) MDCISM (Computer Diploma) | 10+ Years Exp. | Math reasoning, English",
//       image: image2,
//     },
//     {
//       title: "V.K. Singh",
//       description: "B.SC (Math) Polytechnic Diploma (Electronics Engg.) | 9+ Years Exp.| Mathmetics, Physics",
//       image: image3,
//     },
//     {
//       title: "Abhishek Kumar",
//       description: " B.Tech (CSE) | 6+ Years Exp.| DSA, Backend",
//       image: image4,
//     },
//     {
//       title: "Dinesh Kumar",
//       description: "B.Tech (CSE) | 3+ Years Exp. | Mobile App. Development",
//       image: image5,
//     },
//     {
//       title: "Vimal Raj",
//       description: "B.Tech (CSE) | 3+ Years Exp. | Web Development",
//       image: image6,
//     },
//   ];

//   return (
//     <div className="container max-w-screen-xl mx-auto p-4 my-4">
//       <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-border-l  text-primary my-12">
//         Our Instructors
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cardsData.map((card, index) => (
//           <TopInstructorCard
//             key={index}
//             title={card.title}
//             description={card.description}
//             image={card.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopInstructor;

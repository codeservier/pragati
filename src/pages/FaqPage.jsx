import React, { useState } from "react"; 
import Faq from "../components/FAQ/Faq.jsx";

import faqImage from "../assets/svg/faq.svg"; 

export default function FaqPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "What courses does Pragati Coaching Classes offer?",
      answer:
        "Pragati Coaching Classes offers a variety of courses including Mathematics, Science, English, and preparation for competitive exams such as JEE and NEET.",
      open: false,
    },
    {
      question: "What is the duration of each course?",
      answer:
        "Our courses typically range from 3 to 6 months. The exact duration depends on the subject and level of the course.",
      open: false,
    },
    {
      question: "Are the classes conducted online or offline?",
      answer:
        "We offer both online and offline classes to cater to different learning preferences and requirements.",
      open: false,
    },
    {
      question: "What are the qualifications of the instructors?",
      answer:
        "Our instructors are highly qualified with extensive experience in their respective fields, ensuring quality education.",
      open: false,
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "To enroll in a course, visit our website and complete the registration form, or contact our office directly for assistance.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <div className="text-center p-4 md:p-8">
        {/* Centering the image */}
        <div className="flex justify-center mb-4 md:mb-8">
          <img 
            src={faqImage}
            alt="FAQ"
            className="w-full max-w-md h-auto object-cover"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="faqs px-4 md:px-8">
        {faqs.map((faq, index) => (
          <Faq 
            faq={faq} 
            index={index} 
            key={index} 
            toggleFAQ={toggleFAQ} 
          />
        ))}
      </div>
    </>
  );
}

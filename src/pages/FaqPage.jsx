import React, { useState } from "react";
import { FaQuestionCircle } from 'react-icons/fa';
import faqImage from "../assets/svg/faq.svg"; 

export default function FaqPage() {
  // Initialize FAQs state with correct structure
  const [faqs, setFaqs] = useState({
    general: [
      {
        question: "What is Pragati?",
        answer: "Pragati is a comprehensive coaching platform that provides a wide range of educational services, including preparation for various competitive exams, academic subjects, and personal development courses. We aim to offer a holistic learning experience under one roof."
      },
      {
        question: "Why is Pragati highly regarded?",
        answer: "Pragati is known for its expert faculty, diverse course offerings, and affordable pricing. We strive to make quality education accessible to everyone by providing well-structured courses, expert mentorship, and additional resources to enhance the learning journey."
      }
      // Add more FAQs as needed
    ],
    subscription: [
      {
        question: "Where can I download the Pragati App?",
        answer: "The Pragati app is available on the Google Play Store and the Apple App Store. Simply search for 'Pragati Coaching' to download it."
      },
      {
        question: "Is the Pragati App free to use?",
        answer: "Yes, the Pragati app can be downloaded for free. While the app itself is free, some advanced features or courses may require a subscription or one-time payment."
      }
      // Add more Subscription FAQs as needed
    ],
    technicalSupport: [
      {
        question: "Does Pragati provide customer support?",
        answer: "Yes, Pragati offers customer support to assist with any issues or queries. You can reach out to our support team via the contact option available within the app or on our website."
      },
      {
        question: "How can students resolve technical issues?",
        answer: "Students can report technical issues or seek assistance through the 'Contact Us' feature in the app. Our support team will address the issue as quickly as possible."
      }
      // Add more Technical Support FAQs as needed
    ]
  });
  

  return (
    <>
      <div className="text-center p-4 md:p-8 ">
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
      <div className="container mx-auto px-4 md:px-8 mb-20">
        {/* Render FAQs for each section */}
        {Object.keys(faqs).map((category, index) => (
          <div className="faqcontainer bg-white border rounded-lg p-4 mb-6" key={index}>
            <h3 className="text-xl font-bold mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
            <hr className="my-2"/>
            <div>
              {faqs[category].map((faq, idx) => (
                <div className="mb-4" key={idx}>
                  <h5 className="font-semibold text-lg flex items-center">
                    <FaQuestionCircle className="mr-2 text-secondary" /> {faq.question}
                  </h5>
                  <p className="mt-2">{faq.answer}</p>
                  <hr className="my-2"/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCommentDots,
} from "react-icons/fa";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "emailjs-com";
import CustomButton from "../components/custombutton/Custombutton";
import { FaBuilding } from 'react-icons/fa';

const NewContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value ? "" : `${id} is required`,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      handleInputChange(e);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const { fullName, email, phoneNumber, message } = formData;

    const newErrors = {};
    if (!fullName) newErrors.fullName = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        newErrors.email = "Please enter a valid Email";
      }
    }
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      await addDoc(collection(db, "contactUs"), {
        name: fullName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      });
      alert("Message sent successfully!");
      sendMail(fullName, phoneNumber, email, message);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const sendMail = (name, phoneNumber, email, message) => {
    const templateParams = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_ygalqv5",
        "template_05yibf4",
        templateParams,
        "Dk2TOoxhuANj8nFcB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="bg-primary  ">
        <div className="container p-6 mx-auto">
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-1">
              <div>
                <p className="font-medium text-secondary ">Contact us</p>
                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                  Get in Touch with Us
                </h1>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Whether you have a question, feedback, or just want to chat,
                  we’re here for you. Fill out the form or drop us an email to
                  start the conversation.
                </p>
              </div>

              <div className=" flex justify-between ">
                <div>
                  <div className="mb-4">
                    <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-secondary ">
                      <FaEnvelope className="w-5 h-5" />
                    </span>
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                      Email
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Our friendly team is here to help.
                    </p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                      hello@merakiui.com
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-secondary">
                      <FaCommentDots className="w-5 h-5" />
                    </span>
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                      Live chat
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Our friendly team is here to help.
                    </p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                      Start new chat
                    </p>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="mb-8">
                    <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-secondary">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </span>
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                      Office
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Come say hello at our office HQ.
                    </p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                      100 Smith Street Collingwood VIC 3066 AU
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-secondary">
                      <FaPhone className="w-5 h-5" />
                    </span>
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                      Phone
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Mon-Fri from 8am to 5pm.
                    </p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 py-6 rounded-lg bg-primary border border-secondary md:p-8">
              <form onSubmit={handleOnSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs">{errors.fullName}</p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
                  )}
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message here"
                    value={formData.message}
                    onChange={handleInputChange}
                    className=" w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-40  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                <div className="flex justify-center mt-6">
                  <CustomButton type="submit" title="Send Message" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
            We have multiple branches ready to assist you. Whether you need support, information, or wish to visit us in person, our team at each location is here to help. Find the branch closest to you for personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-secondary">
                  <FaBuilding className="w-5 h-5" />
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Main Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our central office where we handle main operations and
                  strategic planning.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  123 Main Street, Downtown City, 12345
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Open Mon-Fri from 9am to 6pm.
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-secondary">
                  <FaBuilding className="w-5 h-5" />
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Regional Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Serving the regional area with local support and services.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  456 Regional Road, Smalltown, 67890
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Open Mon-Fri from 8am to 5pm.
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-primary rounded-full bg-blue-100/80 dark:bg-secondary">
                  <FaBuilding className="w-5 h-5" />
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Satellite Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Providing additional support and services in the satellite
                  region.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  789 Satellite Lane, Metropolis, 54321
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Open Mon-Fri from 9am to 5pm.
                </p>
              </div>
            </div>

            <div className="overflow-hidden lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Lucknow%2C%20India&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewContact;

import React from "react";
import logo from "../../assets/svg/logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary/10 text-center border border-secondary rounded-t-3xl  lg:text-left">
      <div className="container mx-auto px-4 py-6 lg:px-8 lg:py-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
          {/* Logo and Description */}
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <div className="flex items-center mb-4">
              <a aria-label="pw-logo" href=" # ">
                <div className="h-14 w-14 mr-3 bg-center bg-no-repeat bg-contain">
                  <img src={logo} />
                </div>
              </a>
              <div className="font-bold text-primary text-lg leading-7">
                Pragati
              </div>
            </div>
            <p className="text-primary text-xs lg:text-sm lg:leading-5">
              We understand that every student has different needs and
              capabilities, which is why we create such a wonderful and unique
              curriculum that is the best fit for every student.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="flex gap-10">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} className="text-secondary hover:text-primary transition-all duration-300"  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} className="text-secondary hover:text-primary transition-all duration-300"  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} className="text-secondary hover:text-primary transition-all duration-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} className="text-secondary hover:text-primary transition-all duration-300"  />
                </a>
                <a
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="text-secondary hover:text-primary transition-all duration-300" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={30} className="text-secondary hover:text-primary transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}

          {/* Footer Links */}
          <div className="lg:w-1/2 flex flex-col lg:flex-row lg:justify-evenly">
            <div className="mb-6 lg:mb-0">
              <div className="font-semibold text-secondary text-lg leading-6 mb-2">
                Company
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a className=" text-primary hover:underline hover:text-black">About Us</a>
                </li>
                <li>
                  <a className=" text-primary hover:underline hover:text-black">Contact Us</a>
                </li>
                <li>
                  <a className=" text-primary hover:underline hover:text-black">Careers</a>
                </li>
                <li>
                  <a className=" text-primary hover:underline hover:text-black">Updates</a>
                </li>
                <li>
                  <a className=" text-primary hover:underline hover:text-black">Blogs</a>
                </li>
                <li>
                  <a className=" text-primary hover:underline hover:text-black">
                    Account Deletion
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="font-semibold text-secondary text-lg leading-6 mb-2">
                Our Centres
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a className="text-primary hover:underline hover:text-black">New Delhi</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">Patna</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">Kota</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">Noida</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">Dhanbad</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">Varanasi</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">View All</a>
                </li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="font-semibold text-secondary   text-lg leading-6 mb-2">
                Popular Exams
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a className="text-primary hover:underline hover:text-black">IIT JEE</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">NEET</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">GATE</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">NDA</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">UPSC</a>
                </li>
                <li>
                  <a className="text-primary hover:underline hover:text-black">
                    School Prep
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Connect With Us & Quick Links */}
      </div>
    </footer>
  );
};

export default Footer;

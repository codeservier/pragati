


import { FaUsers, FaChalkboardTeacher ,FaHandshake, FaTachometerAlt, FaBrain ,FaCog, FaLightbulb, FaCheckCircle,FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'; // Importing React icons


import img from '../assets/svg/aboutus.svg'

export default function AboutUs() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });

  return (
    <div>
      <main className="max-w-screen-xl mx-auto p-4 mb-10">
        <div id="front" className="text-center">
          <img
            src={img}
            alt="Welcome"
            className="mx-auto mb-4"
          />
          <p className="text-lg">
            At Pragati Company, we are dedicated to empowering individuals
            through comprehensive coaching services. Our expert-led programs are
            designed to unlock your potential and foster personal and
            professional growth. With a focus on practical skills and tailored
            guidance, we ensure every learner achieves their goals. Choose
            Pragati for a transformative coaching experience that drives
            success.
          </p>
        </div>

    
        <div
      id="coaching"
      className="reveal mt-8 p-4 bg-primary text-white rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-4">Our Coaching Metrics</h2>
      <h1 className="text-3xl font-bold mb-4">
        Real-Time Monitoring of Your Coaching Operations
      </h1>
      <div
        id="coaching_cards"
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div className="text-center">
          <FaUsers size={64} className="mx-auto mb-2 text-secondary" />
          <p className="text-lg">NUMBER OF STUDENTS</p>
          <p className="text-xl font-bold">1,500</p>
        </div>
        <div className="text-center">
          <FaChalkboardTeacher size={64} className="mx-auto mb-2 text-secondary" />
          <p className="text-lg">NUMBER OF TEACHERS</p>
          <p className="text-xl font-bold">75</p>
        </div>
        <div className="text-center">
          <FaUsers size={64} className="mx-auto mb-2 text-secondary" />
          <p className="text-lg">NUMBER OF BRANCHES</p>
          <p className="text-xl font-bold">12</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>

    <div id="services" className="reveal mt-8 p-4 bg-white">
      <div className="container border p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">OUR SERVICES</h1>
          <h2 className="text-xl font-semibold mb-2">Personalized Coaching</h2>
          <p className="text-lg">
            We offer tailored coaching sessions designed to meet individual needs. Our experienced coaches provide one-on-one sessions, group workshops, and specialized training programs to help you reach your personal and professional goals.
          </p>
        </div>
        <FaBrain size={64} className="md:w-1/2 text-secondary" />
      </div>
      <div className="container border p-8 flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">PARTNERSHIPS</h1>
          <h2 className="text-xl font-semibold mb-2">Strategic Alliances</h2>
          <p className="text-lg">
            We have forged strategic alliances with leading organizations to expand our reach and enhance our offerings. Our partnerships enable us to provide comprehensive solutions and innovative resources to our clients.
          </p>
        </div>
        <FaHandshake size={64} className="md:w-1/2 mt-8 md:mt-0 text-secondary" />
      </div>
      <div className="container  border p-8 flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">OUR OBJECTIVE</h1>
          <h2 className="text-xl font-semibold mb-2">Exceptional Quality, Affordable Pricing</h2>
          <p className="text-lg">
            Our goal is to deliver exceptional quality coaching and support at competitive prices. We strive to offer high-value services without compromising on quality, ensuring accessibility for all clients.
          </p>
        </div>
        <FaTachometerAlt size={64} className="md:w-1/2 mt-8 md:mt-0 text-secondary" />
      </div>
      <div className="container border p-8  flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">OUR STRENGTHS</h1>
          <h2 className="text-xl font-semibold mb-2">Expert Coaches and Advanced Tools</h2>
          <p className="text-lg">
            We leverage advanced tools and a team of expert coaches to deliver impactful training and support. Our commitment to utilizing cutting-edge technology and personalized approaches sets us apart in the coaching industry.
          </p>
        </div>
        <FaUsers size={64} className="md:w-1/2 mt-8 md:mt-0 text-secondary" />
      </div>
    </div>

    <div
      id="process"
      className="reveal mt-8 p-8 bg-white rounded-lg"
    >
      <h3 className="text-center text-2xl font-semibold mb-4 ">
        OUR PROCESS
      </h3>
      <h1 className="text-center text-3xl font-bold mb-4">
        Driving Client Results Through Innovative Solutions
      </h1>
      <div id="process_cards" className="space-y-4">
        <div className="flex items-start space-x-4">
          <FaCog size={32} className="text-secondary" />
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Comprehensive End-to-End Solutions
            </h2>
            <p>
              We provide complete solutions tailored to your needs, from initial consultation to final implementation. Our goal is to ensure every aspect of your project is covered with precision and care.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaLightbulb size={32} className="text-secondary" />
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Innovative and Future-Ready
            </h2>
            <p>
              We stay ahead of industry trends to offer forward-thinking solutions. Our approach ensures your IT infrastructure is not only current but also resilient against future challenges.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaCheckCircle size={32} className="text-secondary" />
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Proven Success and Reliability
            </h2>
            <p>
              Our track record of successful project executions speaks for itself. We are committed to delivering results that meet your expectations and provide long-term value.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      id="contact"
      className="reveal mt-8 p-4 bg-primary text-white rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4">Pragati coaching classes</h1>
      <div className="flex flex-col space-y-4">
        <a
          href="#"
          className="flex items-center space-x-2 text-white hover:text-gray-300"
        >
          <FaMapMarkerAlt size={32} className="text-secondary" />
          <span>
            <h3 className="text-lg font-semibold">Address</h3>
            <p>4813 Woodland Ave Royal Oak, Michigan - 48073, USA</p>
          </span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-white hover:text-gray-300"
        >
          <FaPhoneAlt size={32} className=" text-secondary"  />
          <span>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>+1 248 672 1972</p>
          </span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-white hover:text-gray-300"
        >
          <FaEnvelope size={32} className="text-secondary" />
          <span>
            <h3 className="text-lg font-semibold">E-mail</h3>
            <p>Sales@Ecerasystem.com</p>
          </span>
        </a>
      </div>
    </div>


      </main>
    </div>
  );
}

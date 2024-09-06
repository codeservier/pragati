export default function App() {
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
      <main className="max-w-screen-xl mx-auto p-2">
        <div id="front" className="text-center">
          <h1 className="text-3xl font-bold mb-4">WELCOME TO PRAGATI</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
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
          id="fourth"
          className="reveal mt-8 p-4 bg-gray-800 text-white rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">TECHNOLOGY INDEX</h2>
          <h1 className="text-3xl font-bold mb-4">
            Real Time Monitoring Your Infrastructure Branded Digital Solutions
          </h1>
          <div
            id="fourth_cards"
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <div className="text-center">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt="Data Analytics"
                className="mx-auto mb-2"
              />
              <p>DATA ANALYTICS</p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt="UI/UX Design"
                className="mx-auto mb-2"
              />
              <p>UI/UX DESIGN</p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt="Web Development"
                className="mx-auto mb-2"
              />
              <p>WEB DEVELOPMENT</p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt="Q&A Testing"
                className="mx-auto mb-2"
              />
              <p>Q&A TESTING</p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt="Dedicated Team"
                className="mx-auto mb-2"
              />
              <p>DEDICATED TEAM</p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal mt-8 p-4 bg-white ">
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-2xl font-bold mb-2">WE PROVIDE</h1>
              <h2 className="text-xl font-semibold mb-2">Remote Employee</h2>
              <p className="text-lg">
                A huge pool of talent from every domain available for your
                office. Solve your freelancing problems by letting us help you
                find the most suitable employee or a whole team that won't let
                you down. Everything is managed by Indirect Employee staff!
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt="Remote Employee"
              className="md:w-1/2"
            />
          </div>
          <div className="container flex flex-col md:flex-row items-center justify-between mt-8">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-2xl font-bold mb-2">WE HAVE</h1>
              <h2 className="text-xl font-semibold mb-2">Global Partnership</h2>
              <p className="text-lg">
                At Pragati Company, we are dedicated to empowering individuals
                through comprehensive coaching services. Our expert-led programs
                are designed to unlock your potential and foster personal and
                professional growth. With a focus on practical skills and
                tailored guidance, we ensure every learner achieves their goals.
                Choose Pragati for a transformative coaching experience that
                drives success.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              alt="Global Partnership"
              className="md:w-1/2 mt-8 md:mt-0"
            />
          </div>
          <div className="container flex flex-col md:flex-row items-center justify-between mt-8">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-2xl font-bold mb-2">OUR GOAL</h1>
              <h2 className="text-xl font-semibold mb-2">
                Same Quality at Low Cost
              </h2>
              <p className="text-lg">
                We have unique and revolutionary business principles, ‘Same
                quality but significantly lower cost’. We aim to fulfill the
                long-standing outsourcing vacuum felt by Small Medium
                Enterprises across the country who, till now, were dependent
                mostly on offshore freelancers. The hired professionals match
                their western counterparts in skills, qualifications, and
                experience along with the added advantage of attractive low
                costs.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              alt="Our Goal"
              className="md:w-1/2 mt-8 md:mt-0"
            />
          </div>
          <div className="container flex flex-col md:flex-row items-center justify-between mt-8">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-2xl font-bold mb-2">OUR STRENGTHS</h1>
              <h2 className="text-xl font-semibold mb-2">
                Intelligent Use of Technology and Human Resource
              </h2>
              <p className="text-lg">
                We provide every client with a dedicated, full-time work from
                home employee from their comfortable place. To successfully
                achieve this objective, we rely on management, infrastructure,
                hardware, and the latest technology to bridge physical distance
                and time zone differences. We provide the experience of making
                employees work from home for the company as real as if they were
                working in the company.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt="Our Strengths"
              className="md:w-1/2 mt-8 md:mt-0"
            />
          </div>
        </div>

        <div
          id="third"
          className="reveal mt-8 p-4 bg-white border border-gray-300 rounded-lg"
        >
          <h3 className="text-center text-2xl font-semibold mb-4">
            OUR PROCESS
          </h3>
          <h1 className="text-center text-3xl font-bold mb-4">
            Driving Client Results Utilizing New Innovation Points of View
          </h1>
          <div id="third_cards" className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                End to End Solutions and Services Guaranteed
              </h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Ahead of The Curve We Future-proof Your IT
              </h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Experience Certainty Every Project Executed Successfully
              </h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>

        <div
          id="fifth"
          className="reveal mt-8 p-4 bg-gray-800 text-white rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-4">ECERA SYSTEM</h1>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="flex items-center space-x-2 text-white hover:text-gray-300"
            >
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt="Address"
                className="w-8 h-8"
              />
              <span>
                <h3 className="text-lg font-semibold">Address</h3>
                <p>4813 Woodland Ave Royal Oak, Michigan - 48073, USA</p>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-white hover:text-gray-300"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt="Phone"
                className="w-8 h-8"
              />
              <span>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>+1 248 672 1972</p>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-white hover:text-gray-300"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt="E-mail"
                className="w-8 h-8"
              />
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

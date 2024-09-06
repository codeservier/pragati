import React, { useEffect, useState, useRef } from "react";
import Card from "../components/card/Card";
import defaultCoverImage from "../assets/placeholder.jpg"; // Adjust the path as needed

import Loader from "../components/loader/Loader";
import { useNavigate, useLocation } from "react-router-dom";
import { db, collection, getDocs } from "../../firebase";

const AllCoachings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const coursesRef = useRef(null);
  const techCoursesRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [allDocuments, setAllDocuments] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setLoading(true);
        const collectionRef = collection(db, "registration");
        const querySnapshot = await getDocs(collectionRef);
        const allDocuments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllDocuments(allDocuments);
        console.log(allDocuments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchCardData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (location.state?.courseType === "ourCourses" && coursesRef.current) {
        const top =
          coursesRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: top - 150, behavior: "smooth" });
      } else if (
        location.state?.courseType === "techCourses" &&
        techCoursesRef.current
      ) {
        const top =
          techCoursesRef.current.getBoundingClientRect().top +
          window.pageYOffset;
        window.scrollTo({ top: top - 150, behavior: "smooth" });
      }
    };

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const timer = setTimeout(() => {
      handleScroll();
      scrollToTop();
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  const handleCardClick = (id) => {
    navigate(`/coursedetail`, { state: { id } });
  };

  return (
    <>
      {loading ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto p-2">
          <div className="container mx-auto p-4 my-4">
            <h1
              ref={coursesRef}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-border-l border-l-8 text-primary my-12"
            >
              Our Coachings
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allDocuments.map((card) => (
                <Card
                  key={card.id}
                  title={card.coachingname}
                  description={card.shortdescription}
                  logo={card.coachingLogoUrl}
                  coverPic={card.coachingCoverPicUrl || defaultCoverImage}
                  onClick={() => handleCardClick(card.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllCoachings;

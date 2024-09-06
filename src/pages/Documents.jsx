import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, auth, storage } from "../../firebase.js";
import logo from "../assets/svg/logo.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import CustomInput from "../components/customInput/CustomInput.jsx";

const Documents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    shortdescription: "",
    longdescription: "",
    agreedToTerms: false,
    coachingLogo: "",
    coachingCoverPic:"",
    domain: "",
    domainurl: "",
    coverPic: "",
  });
  const [errors, setErrors] = useState({});
  const [logoFile, setLogoFile] = useState(null); // Logo file state
  const [coverFile, setCoverFile] = useState(null); // Cover picture file state
  const [logoPreviewUrl, setLogoPreviewUrl] = useState(""); // Logo preview state
  const [coverPreviewUrl, setCoverPreviewUrl] = useState(""); // Cover picture preview state

  useEffect(() => {
    window.scrollTo(0, 0);
    // Parse URL params and set initial state
    const initialData = {};
    const queryParams = new URLSearchParams(location.search);
    queryParams.forEach((value, key) => {
      initialData[key] = value;
    });
    setFormData((prevData) => ({ ...prevData, ...initialData }));
  }, [location.search]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value ? "" : `${id} is required`,
    }));
  };

  const handleOptionChange = (section, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: value,
    }));
  };

  const handleLogoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width === 512 && img.height === 512) {
          setLogoFile(file);
          setLogoPreviewUrl(URL.createObjectURL(file)); // Create a URL for the image
          setErrors((prevErrors) => ({
            ...prevErrors,
            coachingLogo: "", // Clear any previous errors
          }));
        } else {
          setLogoFile(null);
          setLogoPreviewUrl("");
          setErrors((prevErrors) => ({
            ...prevErrors,
            coachingLogo: "Logo image must be 512x512 pixels.",
          }));
        }
      };
    } else {
      setLogoFile(null);
      setLogoPreviewUrl("");
      setErrors((prevErrors) => ({
        ...prevErrors,
        coachingLogo: "Please upload a logo image",
      }));
    }
  };

  const handleCoverFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverFile(file);
      setCoverPreviewUrl(URL.createObjectURL(file)); // Create a URL for the image
      setErrors((prevErrors) => ({
        ...prevErrors,
        coachingCoverPic: "", // Clear any previous errors
      }));
    } else {
      setCoverFile(null);
      setCoverPreviewUrl("");
      setErrors((prevErrors) => ({
        ...prevErrors,
        coachingCoverPic: "Please upload a cover picture",
      }));
    }
  };

  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString().slice(-2); // Get the last two digits of the year
  };

  const generateSequentialId = (lastId) => {
    const year = getCurrentYear();
    const prefix = `PRA${year}`;
    const sequencePart = lastId.slice(prefix.length);
    const sequence = parseInt(sequencePart) + 1; // Increment by 1
    const newSequence = sequence.toString().padStart(5, "0");
    return `${prefix}${newSequence}`;
  };

  const handleRegister = async () => {
    const {
      email,
      longdescription,
      password,
      shortdescription,
      confirmPassword,
      coachingLogo,
      coverPic,
      domain,
      domainurl
    } = formData;
  
    const newErrors = {};
    if (!password) newErrors.password = "Password is required";
    if (!longdescription) newErrors.longdescription = "You must enter a long description.";
    if (!shortdescription) newErrors.shortdescription = "You must enter a short description.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreedToTerms)
      newErrors.terms = "You must agree to the terms and conditions";
  
    if (!coachingLogo) {
      newErrors.coachingLogo = "Please select if you have a coaching logo";
    } else if (coachingLogo === "yes" && !logoFile) {
      newErrors.coachingLogo = "Please upload a logo image";
    }
  
    if (!domain) {
      newErrors.domain = "Please select if you have a domain";
    } else if (domain === "yes" && !domainurl) {
      newErrors.domain = "Please write your domain";
    }
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) {
      const errorMessages = Object.values(newErrors).join("\n");
      alert(errorMessages);
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Get the latest user ID from Firestore
      const usersCollectionRef = collection(db, "registration");
      const q = query(usersCollectionRef, orderBy("userId", "desc"), limit(1));
      const querySnapshot = await getDocs(q);
  
      let newUserId;
      if (!querySnapshot.empty) {
        const lastUserDoc = querySnapshot.docs[0];
        const lastUserId = lastUserDoc.data().userId;
        newUserId = generateSequentialId(lastUserId);
      } else {
        newUserId = `PRA${getCurrentYear()}00001`;
      }
  
      let logoUrl = "";
      if (coachingLogo === "yes" && logoFile) {
        const logoStorageRef = ref(storage, `logos/${user.uid}/${logoFile.name}`);
        await uploadBytes(logoStorageRef, logoFile);
        logoUrl = await getDownloadURL(logoStorageRef);
      }
  
      let coverUrl = "";
      if (coverPic === "yes" && coverFile) {  // Corrected from formData.coverPic to coverPic
        const coverStorageRef = ref(storage, `covers/${user.uid}/${coverFile.name}`);
        await uploadBytes(coverStorageRef, coverFile);
        coverUrl = await getDownloadURL(coverStorageRef);
      }
  
      // Save the new user data to Firestore
      await setDoc(doc(db, "registration", user.uid), {
        userId: newUserId,
        ...formData,
        coachingLogoUrl: logoUrl,
        coachingCoverPicUrl: coverUrl
      });
  
      alert("Congratulations!");
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Error signing up:", error);
      const errorMessage = `Error signing up: ${error.message}`;
      if (window.confirm(errorMessage)) {
        navigate("/register");
      }
    }
  };
  
  

  return (
    <div className="flex max-w-screen-xl mx-auto justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg w-full flex flex-col">
        <div className="flex justify-center mb-4">
          <img src={logo} width="50" height="50" fill="#FF5733" />
        </div>

        <h1 className="text-2xl font-bold text-center">Register Your Coaching</h1>
        {/* logo start */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Uploads</h2>
          <h3 className="text-xl font-semibold mb-3">Logo :-</h3>
          <div className="flex items-center space-x-4 mb-4">
            <p className="mr-4 text-gray-400">Do you have Coaching logo?</p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="coachingLogo"
                value="yes"
                checked={formData.coachingLogo === "yes"}
                onChange={() => handleOptionChange("coachingLogo", "yes")}
                className="mr-2"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="coachingLogo"
                value="no"
                checked={formData.coachingLogo === "no"}
                onChange={() => handleOptionChange("coachingLogo", "no")}
                className="mr-2"
              />
              No
            </label>
          </div>
          {formData.coachingLogo === "yes" && (
            <div className="flex flex-col items-start space-y-4">
              <div className="w-full border rounded flex">
                <label className="flex items-center p-4 w-1/3">
                  <input
                    id="logoFileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    className="bg-primary text-white px-4 py-2 rounded"
                    onClick={() => document.getElementById('logoFileInput').click()} // Trigger file input click
                  >
                    Choose Logo Image
                  </button>
                </label>
                <div className="w-px bg-gray-300 h-auto mx-4"></div> {/* Vertical divider */}
                {logoPreviewUrl && (
                  <div className="relative flex-1 p-4 items-center">
                    <img
                      src={logoPreviewUrl}
                      alt="Logo Preview"
                      className="w-40 h-40 object-cover border rounded"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          <span className="text-red-600 block mt-1">{errors.coachingLogo}</span>
        </section>
        {/* logo ended */}

        {/* cover pic start */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Cover Pic:-</h3>
          <div className="flex items-center space-x-4 mb-4">
            <p className="mr-4 text-gray-400">Do you have Cover pic?</p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="coverPic"
                value="yes"
                checked={formData.coverPic === "yes"}
                onChange={() => handleOptionChange("coverPic", "yes")}
                className="mr-2"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="coverPic"
                value="no"
                checked={formData.coverPic === "no"}
                onChange={() => handleOptionChange("coverPic", "no")}
                className="mr-2"
              />
              No
            </label>
          </div>
          {formData.coverPic === "yes" && (
            <div className="flex flex-col items-start space-y-4">
              <div className="w-full border rounded flex">
                <label className="flex items-center p-4 w-1/3">
                  <input
                    id="coverFileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleCoverFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    className="bg-primary text-white px-4 py-2 rounded"
                    onClick={() => document.getElementById('coverFileInput').click()} // Trigger file input click
                  >
                    Choose Cover Image
                  </button>
                </label>
                <div className="w-px bg-gray-300 h-auto mx-4"></div> {/* Vertical divider */}
                {coverPreviewUrl && (
                  <div className="relative flex-1 p-4 items-center">
                    <img
                      src={coverPreviewUrl}
                      alt="Cover Preview"
                      className="w-40 h-40 object-cover border rounded"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          <span className="text-red-600 block mt-1">{errors.coverPic}</span>
        </section>
        {/* cover pic end */}

        {/* domain section start */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Domain :-</h2>
          <div className="flex items-center space-x-4 mb-4">
            <p className="mr-4 text-gray-400">Do you have Domain?</p>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="domain"
                value="yes"
                checked={formData.domain === "yes"}
                onChange={() => handleOptionChange("domain", "yes")}
                className="mr-2"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="domain"
                value="no"
                checked={formData.domain === "no"}
                onChange={() => handleOptionChange("domain", "no")}
                className="mr-2"
              />
              No
            </label>
          </div>
          {formData.domain === "yes" && (
            <div className="space-y-4">
              <CustomInput
                id="domainurl"
                type="text"
                placeholder="domainurl"
                value={formData.domainurl}
                onChange={handleInputChange}
                error={errors.domainurl}
                label="domainurl"
              />
            </div>
          )}
          <span className="text-red-600 block mt-1">{errors.domain}</span>
        </section>
        {/* domain section end */}

        {/* description started */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Description :-</h2>
          <div className="space-y-4">
            <div className="md:flex md:gap-4">
              <CustomInput
                id="shortdescription"
                type="text"
                placeholder="Short Description"
                value={formData.shortdescription}
                onChange={handleInputChange}
                error={errors.shortdescription}
                label="Short Description"
              />
              <CustomInput
                id="longdescription"
                type="text"
                placeholder="Long Description"
                value={formData.longdescription}
                onChange={handleInputChange}
                error={errors.longdescription}
                label="Long Description"
              />
            </div>
          </div>
        </section>
        {/* description ended */}

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Password</h2>
          <div className="space-y-4">
            <div className="md:flex md:gap-4">
              <CustomInput
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
                label="Password"
              />
              <CustomInput
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
                label="Confirm Password"
              />
            </div>
            <div className="flex items-center">
              <input
                id="agreedToTerms"
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="agreedToTerms" className="text-gray-600">
                I agree to the{" "}
                <a href="/terms-and-conditions">terms and conditions</a>
              </label>
              <br />
              <span className="text-red-600 block mt-1">{errors.terms}</span>
            </div>
          </div>
        </section>

        <br />
        <button
          type="button"
          onClick={handleRegister}
          className="w-full py-3 text-white bg-primary rounded-full hover:bg-secondary"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Documents;

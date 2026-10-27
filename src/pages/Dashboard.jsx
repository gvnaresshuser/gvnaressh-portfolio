//import naresshphoto from "/narresh-photo.jpg";
import "./Dashboard.css";
import {
  ShoppingCart,
  Smartphone,
  Printer,
  Database,
  Camera,
  ShieldCheck,
  KeyRound,
  Fingerprint,
  CreditCard,
  Mail,
  BrainCircuit,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Download, X, User, Rocket } from "lucide-react";
import reactJsImage from "../assets/ReactJS.jpeg";
import nestJsImage from "../assets/NestJS.jpeg";
import databasesImage from "../assets/Databases.png";
import cloudToolsImage from "../assets/CloudTools.png";
import javaSpringBootImage from "../assets/JavaSpringboot.png";
import aboutMeImage from "../assets/About-GV-Naressh.png";
import angular22Image from "../assets/Angular22.png";
import pythonImage from "../assets/Python.png";

import { useNavigate } from "react-router-dom";

import photo1 from "/naressh1.jpg";
import photo2 from "/naressh2.jpeg";
import photo3 from "/naressh3.png";
import photo4 from "/naressh4.jpeg";
import photo5 from "/naressh5.jpeg";
import photo6 from "/naressh6.jpeg";
import photo7 from "/naressh7.jpeg";
import { PROFILE } from "./config";

export default function Dashboard() {
  //const [experience, setExperience] = useState(0);
  const [industryExp, setIndustryExp] = useState(0);
  const [trainingExp, setTrainingExp] = useState(0);
  const [technologiesExp, setTechnologiesExp] = useState(0);
  const [studentstrainedExp, setStudentstrainedExp] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState("");
  const navigate = useNavigate();
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [flip, setFlip] = useState(false);
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];
  //ABOUT ME
  //https://drive.google.com/file/d/19AJqeDX1yP2DuKmxH0SV_7APHbAOG29f/view?usp=sharing
  const projects = [
    {
      title: "About Me",
      icon: User, // Import User from lucide-react
      link: "https://drive.google.com/file/d/19AJqeDX1yP2DuKmxH0SV_7APHbAOG29f/view?usp=sharing",
      tech: "Professional Profile",
      isNew: false,
    },
    {
      title: "React + Express AI Integration – Multi-Provider AI Platform",
      icon: BrainCircuit,
      link: "https://drive.google.com/file/d/1x2Qb-dC18ryqSCQJXVCIVj8GYs79eR5B/view?usp=sharing",
      tech: "React.js • TypeScript • Vite • Tailwind CSS • Node.js • Express.js • REST API • Google Gemini API • OpenAI API • NVIDIA API • @google/genai SDK • OpenAI SDK • AI Service Layer • Multi-Provider Integration • Environment Variables • API Key Management • Error Handling • AI Chat Interface",
      isNew: true,
    },
    {
      title: "Paystack E-Commerce Application – Full-Stack E-Commerce Platform",
      icon: ShoppingCart,
      link: "https://drive.google.com/file/d/1L_LwbvTYenCD2bv2d1Btkj1suOz9WMtO/view?usp=sharing",
      tech: "React.js • TypeScript • Vite • Tailwind CSS • Node.js • Express.js • PostgreSQL • TypeORM • JWT Authentication • HttpOnly Cookies • Paystack Payment Gateway • Cash on Delivery • Axios • React Router • Role-Based Access Control",
      isNew: true,
    },
    {
      title: "2FA-Twilio Project – Multi-Factor Authentication System",
      icon: Fingerprint,
      link: "https://drive.google.com/file/d/1KG0UdBqZKhEPw_U_cM6radf39ZTHChJd/view?usp=sharing",
      tech: "React.js • TypeScript • Node.js • Express.js • PostgreSQL • TypeORM • JWT Authentication • HttpOnly Cookies • Twilio SMS OTP • Email OTP • Google Authenticator (TOTP) • QR Code Authentication • bcrypt • Axios • React Router • Zustand • Tailwind CSS",
      isNew: true,
    },
    {
      title: "Stripe E-Commerce Application – Full-Stack Online Shopping",
      icon: CreditCard,
      link: "https://drive.google.com/file/d/1a46kZdc0ZC8vnH3ri0Y1PkxZjPX28y-7/view?usp=sharing",
      tech: "React 19 • TypeScript • Vite • Node.js • Express.js • PostgreSQL • TypeORM • JWT + HttpOnly Cookies • Product CRUD • Shopping Cart • Stripe Checkout • Stripe Webhooks • Axios • React Router • Tailwind CSS • Vercel • Render • Neon",
      isNew: true,
    },
    {
      title: "ReactShield Lab – Interactive React Security Training",
      icon: ShieldCheck,
      link: "https://drive.google.com/file/d/1qSmbkGXdx0XbzTbQjZhxQIMLkVj6v-Cl/view?usp=sharing",
      tech: "React.js • Node.js • Express.js • PostgreSQL • JWT Authentication • XSS • Safe URL Validation • CSRF • SQL Injection Prevention • Content Security Policy (CSP) • Helmet • File Upload Security • Rate Limiting & Brute Force Protection • Logging & Monitoring (Sentry & Winston)",
      isNew: false,
    },
    {
      title: "JWT Authentication with Access & Refresh Tokens",
      icon: KeyRound,
      link: "https://drive.google.com/file/d/1Mfnfp7xVoBUV49W3i4zwuj4PIs-kOvuK/view?usp=sharing",
      tech: "React.js • Node.js • Express.js • JWT • Access Token • Refresh Token • HTTP-Only Cookies • Axios Interceptors",
      isNew: false,
    },
    {
      title: "FindFace AI - Face Recognition System",
      icon: Camera,
      link: "https://drive.google.com/file/d/1aJ7iXszVyV8Oh2zvpDvQ0qqnToZx_rqh/view?usp=sharing",
      tech: "React.js • Node.js • Python • InsightFace ( buffalo_l model ) • pgvector • RAG • PostgreSQL",
      isNew: false,
    },
    {
      title: "Bluetooth Thermal Receipt Printing",
      icon: Printer,
      link: "https://drive.google.com/file/d/1zIQ6--1dnIxwe0BTwohUM9v-i9DdaUg4/view",
      tech: "React Native",
      isNew: false,
    },
    {
      title: "PERN E-Commerce Application",
      icon: ShoppingCart,
      //link: "https://drive.google.com/file/d/1leZv9hsNjmmwLiWBcQyk2JjxwxVHPCDV/view",
      //link: "https://canva.link/2lykxe1qop4lkmo",
      link: "https://drive.google.com/file/d/1pbEE2bYKY_1F6zrKuH97e_3UBPstvIOt/view?usp=sharing",
      tech: "ReactJS • PostgreSQL • NodeJS",
      isNew: false,
    },
    {
      title: "Mukha App - Razorpay Integration",
      icon: Smartphone,
      link: "https://drive.google.com/file/d/1UYi6ET6BnWzqx20W3TxnhdqCp_QJglzY/view",
      tech: "React Native • Razorpay",
      isNew: false,
    },
    {
      title: "Django MongoDB E-Commerce",
      icon: Database,
      link: "https://drive.google.com/file/d/1aKpQUTX7buh0xG4VeB7YbDqwhO60essJ/view",
      tech: "Django • Python • MongoDB",
      isNew: false,
    },
    {
      title: "xxxx",
      icon: Database,
      link: "https://drive.google.com/file/d/1aKpQUTX7buh0xG4VeB7YbDqwhO60essJ/view",
      tech: "Django • Python • MongoDB",
      isNew: false,
    },
  ];
  const EXPERIENCE = PROFILE.experience;
  const TRAINING = PROFILE.training;
  const TECHNOLOGIES = PROFILE.technologies;
  const STUDENTS_TRAINED = PROFILE.students;

  /*   
  console.log("EXPERIENCE:", EXPERIENCE);
  console.log("TRAINING:", TRAINING);
  console.log("TECHNOLOGIES:", TECHNOLOGIES);
  console.log("STUDENTS_TRAINED:", STUDENTS_TRAINED); 
  */
  console.count("Dashboard Render");

  useEffect(() => {
    console.log("Dashboard Mounted");
    const interval = setInterval(() => {
      // Start flip
      setFlip(true);

      // Change image at the middle of flip
      setTimeout(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }, 300);

      // Complete flip
      setTimeout(() => {
        setFlip(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let industry = 0;
    let training = 0;
    let technologies = 0;
    let students = 0;

    const timer = setInterval(() => {
      if (industry < EXPERIENCE) {
        industry++;
        setIndustryExp(industry);
      }

      if (training < TRAINING) {
        training++;
        setTrainingExp(training);
      }

      if (technologies < TECHNOLOGIES) {
        technologies++;
        setTechnologiesExp(technologies);
      }

      if (students < STUDENTS_TRAINED) {
        //students += Math.ceil(STUDENTS_TRAINED / 100); // Smooth animation
        const STEP = Math.max(1, Math.ceil(STUDENTS_TRAINED / 20));
        students += STEP;
        if (students > STUDENTS_TRAINED) {
          students = STUDENTS_TRAINED;
        }
        setStudentstrainedExp(students);
      }

      if (
        industry >= EXPERIENCE &&
        training >= TRAINING &&
        technologies >= TECHNOLOGIES &&
        students >= STUDENTS_TRAINED
      ) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = selectedImage;
    link.download = selectedImageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Profile Image */}
              {/*   <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  //src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                  src={naresshphoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div
                className={`w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-700 ${
                  flip ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flip ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <img
                  src={photos[currentPhoto]}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Intro */}
              <div className="text-center md:text-left flex-1">
                {/*   <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                    GV Naressh
                  </h1>                 
                  <a href="tel:9949570732">
                    <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient cursor-pointer">
                      📞 9949570732
                    </h1>
                  </a>
                </div> */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-3">
                  {/* Name */}
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                    GV Naressh
                  </h1>

                  {/* Contact Details */}
                  <div className="flex flex-col items-center md:items-end">
                    {/* Mobile Number */}
                    <a href="tel:9949570732">
                      <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient cursor-pointer">
                        📞 9949570732
                      </h1>
                    </a>

                    {/* Email */}
                    <a href="mailto:gvnaressh@gmail.com">
                      {/* <h2 className="text-base md:text-1xl font-bold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient cursor-pointer">
                        [ gvnaressh@gmail.com ]
                      </h2> */}
                      <h2 className="text-base md:text-[18px] font-bold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient cursor-pointer">
                        [ gvnaressh@gmail.com ]
                      </h2>
                    </a>
                    {/*    <a
                      href="mailto:gvnaressh@gmail.com"
                      className="flex items-center gap-2"
                    >
                      <Mail size={24} strokeWidth={2.5} />

                      <h2 className="text-base md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient cursor-pointer">
                        gvnaressh@gmail.com
                      </h2>
                    </a> */}
                  </div>
                </div>

                {/*  <p className="text-xl text-cyan-300 font-semibold">
                  Software Trainer | Full Stack Developer
                </p>

                <p className="text-gray-200 mt-5 leading-8 max-w-3xl">
                  Passionate software professional with {EXPERIENCE}+ years of
                  industry experience and {TRAINING}+ years of training
                  experience. Specializing in ReactJS, NodeJS, PostgreSQL,
                  NestJS, Java Spring Boot, Tailwind CSS, and modern full-stack
                  application development.
                </p> */}

                <p className="text-xl text-cyan-300 font-semibold">
                  Corporate Software Trainer | Full-Stack Developer | AI/LLM
                  Trainer
                </p>

                <p className="text-gray-200 mt-5 leading-8 max-w-3xl">
                  <strong>
                    {EXPERIENCE}+ years in the software industry and {TRAINING}+
                    years of training experience.
                  </strong>{" "}
                  I deliver practical, project-based training for corporate
                  teams, working professionals, and students.
                </p>
                <p className="text-gray-200 mt-3 leading-8 max-w-3xl">
                  Training in{" "}
                  <strong>
                    React.js, Node.js, NestJS, PostgreSQL, Next.js, Java Spring
                    Boot, and AI/LLM integration
                  </strong>
                  —with a focus on real-world applications and hands-on
                  learning.
                </p>

                {/* Corporate clients first; student registration remains available. */}
                <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="mailto:gvnaressh@gmail.com?subject=Corporate%20Training%20Enquiry&body=Hello%20Naressh%2C%0A%0AWe%20would%20like%20to%20discuss%20a%20training%20requirement.%0A%0ATechnology%2FCourse%3A%0ANumber%20of%20Participants%3A%0APreferred%20Duration%3A%0AExpected%20Start%20Date%3A%0ATraining%20Mode%20(Online%2FClassroom)%3A%0ACompany%3A%0AContact%20Person%3A%0A%0AThank%20you."
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-bold text-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  >
                    <Mail size={19} />
                    Discuss Corporate Training
                  </a>
                  <a
                    href="https://wa.me/919949570732?text=Hello%20Naressh%2C%20I%20would%20like%20to%20discuss%20a%20training%20requirement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-5 w-5 shrink-0"
                      fill="currentColor"
                    >
                      <path d="M16.04 3.2A12.65 12.65 0 0 0 5.18 22.34L3.5 28.5l6.32-1.66A12.65 12.65 0 1 0 16.04 3.2Zm0 23.05c-1.95 0-3.86-.52-5.53-1.5l-.4-.23-3.75.98 1-3.65-.26-.42a10.1 10.1 0 1 1 8.94 4.82Zm5.55-7.56c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                    </svg>
                    WhatsApp Me
                  </a>
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <Rocket size={18} />
                    Explore Courses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-gray-500">Experience</h3>
            <p className="text-4xl font-bold text-indigo-600 mt-2">
              {industryExp}+
            </p>
            <p className="text-sm text-gray-500">Years Industry</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-gray-500">Training</h3>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {trainingExp}+
            </p>
            <p className="text-sm text-gray-500">Years Teaching</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-gray-500">Technologies</h3>
            <p className="text-4xl font-bold text-pink-600 mt-2">
              {technologiesExp}+
            </p>
            <p className="text-sm text-gray-500">Skills</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-gray-500">Students Trained</h3>
            <p className="text-4xl font-bold text-orange-600 mt-2">
              {studentstrainedExp}+
            </p>
            <p className="text-sm text-gray-500">
              Corporate / Academic Audiences
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* About Me Card */}
            <div
              onClick={() => {
                setSelectedImage(aboutMeImage); // Your About Me image
                setSelectedImageName("About-GV-Naressh.jpg");
                setShowPopup(true);
              }}
              className="relative bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-700 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
            >
              <span className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                Click for Details
              </span>

              <h3 className="text-xl font-bold mb-3">About Me</h3>

              <p>👨‍🏫 {EXPERIENCE}+ Years in Software Industry</p>
              <p>🎓 {TRAINING}+ Years of Training Experience</p>
              <p>⚛️ ReactJS & PERN Stack Trainer</p>
              <p>☕ Node.js • PostgreSQL</p>

              <div className="mt-4 text-sm font-medium text-pink-100">
                Passionate Trainer & Full Stack Developer 🌟
              </div>
            </div>

            {/* Card */}
            <div
              onClick={() => {
                setSelectedImage(reactJsImage);
                setSelectedImageName("ReactJS-Roadmap.jpg");
                setShowPopup(true);
              }}
              className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <span className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                Click for Details
              </span>

              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <p>ReactJS</p>
              <p>Tailwind CSS</p>
              <p>Redux Toolkit</p>
              <p>JavaScript ES6+</p>
              <div className="mt-4 text-sm font-medium text-cyan-100">
                Modern UI Development 🚀
              </div>
            </div>

            {/* Popup */}
            {showPopup && selectedImage && (
              <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
                <div className="relative bg-white p-4 rounded-xl max-w-4xl">
                  {/* Close Button */}
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full"
                  >
                    <X size={20} />
                  </button>

                  {/* Download Button */}
                  <button
                    onClick={downloadImage}
                    className="absolute top-3 left-3 bg-green-500 text-white p-2 rounded-full"
                  >
                    <Download size={20} />
                  </button>

                  {/* Image */}
                  <img
                    src={selectedImage}
                    alt="Roadmap"
                    className="max-h-[80vh] rounded-lg"
                  />
                </div>
              </div>
            )}

            <div
              onClick={() => {
                setSelectedImage(nestJsImage);
                setSelectedImageName("NestJS-Roadmap.jpg");
                setShowPopup(true);
              }}
              className="relative bg-gradient-to-r from-yellow-500 to-amber-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <span className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                Click for Details
              </span>

              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <p>NestJS</p>
              <p>NodeJS</p>
              <p>ExpressJS</p>
              <p>REST APIs</p>
              <div className="mt-4 text-sm font-medium text-green-100">
                Scalable API Development ⚡
              </div>
            </div>

            <div
              onClick={() => {
                setSelectedImage(databasesImage);
                setSelectedImageName("Databases-Roadmap.png");
                setShowPopup(true);
              }}
              className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <span className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                Click for Details
              </span>

              <h3 className="text-xl font-bold mb-3">Database</h3>
              <p>PostgreSQL</p>
              <p>MongoDB</p>
              <p>MySQL</p>
              <p>Neon DB</p>
              <div className="mt-4 text-sm font-medium text-orange-100">
                Data Modeling & Management 🗄️
              </div>
            </div>

            <div
              onClick={() => {
                setSelectedImage(cloudToolsImage);
                setSelectedImageName("Cloud-Tools-Roadmap.png");
                setShowPopup(true);
              }}
              className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <span className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                Click for Details
              </span>

              <h3 className="text-xl font-bold mb-3">Cloud & Tools</h3>
              <p>GitHub</p>
              <p>Vercel</p>
              <p>Render</p>
              <p>Docker</p>
              <div className="mt-4 text-sm font-medium text-pink-100">
                Deployment & DevOps Essentials ☁️
              </div>
            </div>

            <div
              onClick={() => {
                setSelectedImage(javaSpringBootImage);
                setSelectedImageName("Java-SpringBoot-Roadmap.png");
                setShowPopup(true);
              }}
              className="relative bg-gradient-to-r from-green-600 to-lime-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <span className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                Click for Details
              </span>

              <h3 className="text-xl font-bold mb-3">Java Spring Boot</h3>

              <p>Spring Boot</p>
              <p>Spring Security</p>
              <p>Spring Data JPA</p>
              <p>REST APIs</p>

              <div className="mt-4 text-sm font-medium text-green-100">
                Enterprise Application Development 🚀
              </div>
            </div>

            {/* ANGULAR VERSION 22 */}
            <div
              onClick={() => {
                setSelectedImage(angular22Image);
                setSelectedImageName("Angular-22-Roadmap.png");
                setShowPopup(true);
              }}
              className="relative bg-gradient-to-r from-red-600 to-pink-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <span className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                Click for Details
              </span>

              <h3 className="text-xl font-bold mb-3">Angular 22</h3>

              <p>Signals & Effects</p>
              <p>Standalone Architecture</p>
              <p>Reactive Forms & RxJS</p>
              <p>REST APIs & Deployment</p>

              <div className="mt-4 text-sm font-medium text-red-100">
                Build Enterprise Angular Applications 🚀
              </div>
            </div>

            {/* PYTHON */}
            <div
              onClick={() => {
                setSelectedImage(pythonImage);
                setSelectedImageName("Python-Django-Roadmap.png");
                setShowPopup(true);
              }}
              className="relative bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                Click for Details
              </span>

              <h3 className="text-xl font-bold mb-3">Python + Django</h3>

              <p>Python Programming</p>
              <p>Django REST APIs</p>
              <p>MongoDB + JWT</p>
              <p>React + Razorpay</p>

              <div className="mt-4 text-sm font-medium text-cyan-100">
                Build Production-Ready E-Commerce Applications 🚀
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-10 text-3xl font-bold text-white mb-6">
          Innovative Solutions Delivered
        </h2>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            // Show Register Card for xxxx
            if (project.title === "xxxx") {
              return null;
            }

            const Icon = project.icon;

            return (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 hover:border-cyan-400 transition-all duration-300 shadow-xl">
                  {/*    <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Icon size={30} className="text-white" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm mt-1">
                        {project.tech}
                      </p>
                    </div>
                  </div> */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Icon size={30} className="text-white" />
                    </div>

                    <div className="relative flex-1">
                      {project.isNew && (
                        <span className="absolute -top-4 right-0 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                          NEW
                        </span>
                      )}

                      <h3 className="mt-0 text-xl font-bold text-white group-hover:text-cyan-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm mt-1">
                        {project.tech}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 text-cyan-300 text-sm font-semibold">
                    ▶ Watch Demo Video
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <p className="text-center text-gray-200 text-lg">
            🚀 Empowering Students and Professionals through Practical
            Industry-Oriented Training
          </p>
        </div>
      </div>
    </div>
  );
}

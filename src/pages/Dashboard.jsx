//import naresshphoto from "/narresh-photo.jpg";
import "./Dashboard.css";
import { ShoppingCart, Smartphone, Printer, Database } from "lucide-react";
import { useEffect, useState } from "react";
import { Download, X, User, Rocket } from "lucide-react";
import reactJsImage from "../assets/ReactJS.jpeg";
import nestJsImage from "../assets/NestJS.jpeg";
import databasesImage from "../assets/Databases.png";
import cloudToolsImage from "../assets/CloudTools.png";
import javaSpringBootImage from "../assets/JavaSpringboot.png";
import aboutMeImage from "../assets/About-GV-Naressh.png";
import { useNavigate } from "react-router-dom";

import photo1 from "/naressh1.jpg";
import photo2 from "/naressh2.jpeg";
import photo3 from "/naressh3.png";
import photo4 from "/naressh4.jpeg";
import photo5 from "/naressh5.jpeg";
import photo6 from "/naressh6.jpeg";
import photo7 from "/naressh7.jpeg";

export default function Dashboard() {
  const [experience, setExperience] = useState(0);
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
    },
    {
      title: "Bluetooth Thermal Receipt Printing",
      icon: Printer,
      link: "https://drive.google.com/file/d/1zIQ6--1dnIxwe0BTwohUM9v-i9DdaUg4/view",
      tech: "React Native",
    },
    {
      title: "PERN E-Commerce Application",
      icon: ShoppingCart,
      //link: "https://drive.google.com/file/d/1leZv9hsNjmmwLiWBcQyk2JjxwxVHPCDV/view",
      //link: "https://canva.link/2lykxe1qop4lkmo",
      link: "https://drive.google.com/file/d/1pbEE2bYKY_1F6zrKuH97e_3UBPstvIOt/view?usp=sharing",
      tech: "ReactJS • PostgreSQL • NodeJS",
    },
    {
      title: "Mukha App - Razorpay Integration",
      icon: Smartphone,
      link: "https://drive.google.com/file/d/1UYi6ET6BnWzqx20W3TxnhdqCp_QJglzY/view",
      tech: "React Native • Razorpay",
    },
    {
      title: "Django MongoDB E-Commerce",
      icon: Database,
      link: "https://drive.google.com/file/d/1aKpQUTX7buh0xG4VeB7YbDqwhO60essJ/view",
      tech: "Django • Python • MongoDB",
    },
    {
      title: "xxxx",
      icon: Database,
      link: "https://drive.google.com/file/d/1aKpQUTX7buh0xG4VeB7YbDqwhO60essJ/view",
      tech: "Django • Python • MongoDB",
    },
  ];
  useEffect(() => {
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
      if (industry < 25) {
        industry++;
        setIndustryExp(industry);
      }

      if (training < 15) {
        training++;
        setTrainingExp(training);
      }

      if (technologies < 20) {
        technologies++;
        setTechnologiesExp(technologies);
      }

      if (students < 1000) {
        students += 50; // increase by 50
        if (students > 1000) students = 1000;
        setStudentstrainedExp(students);
      }

      if (
        industry >= 25 &&
        training >= 15 &&
        technologies >= 20 &&
        students >= 1000
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
                {/*  <h1 className="text-5xl font-extrabold text-white mb-3">
                  GV Naressh
                </h1> */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                    GV Naressh
                  </h1>

                  {/* <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    📞 9949570732
                  </h1> */}
                  <a href="tel:9949570732">
                    <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient cursor-pointer">
                      📞 9949570732
                    </h1>
                  </a>
                </div>

                <p className="text-xl text-cyan-300 font-semibold">
                  Software Trainer | Full Stack Developer
                </p>

                <p className="text-gray-200 mt-5 leading-8 max-w-3xl">
                  Passionate software professional with 25+ years of industry
                  experience and 15+ years of training experience. Specializing
                  in ReactJS, NodeJS, PostgreSQL, NestJS, Java Springboot,
                  Tailwind CSS and modern full-stack application development.
                </p>
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
            <p className="text-sm text-gray-500">Learners</p>
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

              <p>👨‍🏫 25+ Years in Software Industry</p>
              <p>🎓 10+ Years of Training Exp.</p>
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
          </div>
        </div>

        <h2 className="mt-10 text-3xl font-bold text-white mb-6">
          Innovative Solutions Delivered
        </h2>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            // Show Register Card for xxxx
            if (project.title === "xxxx") {
              return (
                <div
                  key={index}
                  onClick={() => navigate("/register")}
                  className="group cursor-pointer flex items-center justify-center"
                >
                  <div className="flex items-center gap-3 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce">
                    <Rocket
                      size={32}
                      className="group-hover:rotate-45 transition duration-300"
                    />

                    <div>
                      <h3 className="font-bold text-lg">Register Now</h3>
                      <p className="text-xs">🎉 Free Demo Class</p>
                    </div>
                  </div>
                </div>
              );
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
                  <div className="flex items-center gap-4">
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

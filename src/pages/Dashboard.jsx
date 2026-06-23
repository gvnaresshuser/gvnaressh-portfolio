import naresshphoto from "/narresh-photo.jpg";
import "./Dashboard.css";
import { ShoppingCart, Smartphone, Printer, Database } from "lucide-react";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [experience, setExperience] = useState(0);
  const [industryExp, setIndustryExp] = useState(0);
  const [trainingExp, setTrainingExp] = useState(0);
  const [technologiesExp, setTechnologiesExp] = useState(0);
  const [studentstrainedExp, setStudentstrainedExp] = useState(0);
  const projects = [
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
  ];
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Profile Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  //src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                  src={naresshphoto}
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

                  <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    📞 9949570732
                  </h1>
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
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <p>ReactJS</p>
              <p>Tailwind CSS</p>
              <p>Redux Toolkit</p>
              <p>JavaScript ES6+</p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <p>NodeJS</p>
              <p>ExpressJS</p>
              <p>NestJS</p>
              <p>REST APIs</p>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">Database</h3>
              <p>PostgreSQL</p>
              <p>MongoDB</p>
              <p>MySQL</p>
              <p>Neon DB</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-3">Cloud & Tools</h3>
              <p>GitHub</p>
              <p>Vercel</p>
              <p>Render</p>
              <p>Docker</p>
            </div>
          </div>
        </div>

        <h2 className="mt-10 text-3xl font-bold text-white mb-6">
          Innovative Solutions Delivered
        </h2>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
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

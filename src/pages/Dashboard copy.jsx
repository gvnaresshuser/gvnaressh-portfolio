import naresshphoto from "/narresh-photo.jpg";

export default function Dashboard() {
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
                <h1 className="text-5xl font-extrabold text-white mb-3">
                  GV Naressh
                </h1>               

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
            <p className="text-4xl font-bold text-indigo-600 mt-2">25+</p>
            <p className="text-sm text-gray-500">Years Industry</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-gray-500">Training</h3>
            <p className="text-4xl font-bold text-green-600 mt-2">15+</p>
            <p className="text-sm text-gray-500">Years Teaching</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-gray-500">Technologies</h3>
            <p className="text-4xl font-bold text-pink-600 mt-2">20+</p>
            <p className="text-sm text-gray-500">Skills</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-gray-500">Students Trained</h3>
            <p className="text-4xl font-bold text-orange-600 mt-2">1000+</p>
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

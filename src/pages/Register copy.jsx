import { useState } from "react";
import API from "../services/userApi";
import Swal from "sweetalert2";
import "./Register.css";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  UserPlus,
} from "lucide-react";
import "animate.css";

export default function Register() {
  const [showCourses, setShowCourses] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    collegeOrCompany: "",
    profession: "",
    interestedCourses: [],
  });

  const courses = [
    "ReactJS",
    "NestJS",
    "Java Spring Boot",
    "NodeJS",
    "PostgreSQL",
    "MongoDB",
    "Python",
    "Django",
    "Angular",
    "AWS",
  ];

  const handleCourseChange = (course) => {
    setFormData((prev) => ({
      ...prev,
      interestedCourses: prev.interestedCourses.includes(course)
        ? prev.interestedCourses.filter((c) => c !== course)
        : [...prev.interestedCourses, course],
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.interestedCourses.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Course Required",
        text: "Please select at least one course.",
      });
      return;
    }
    try {
      await API.post("/users", formData);
      Swal.fire({
        icon: "success",
        title: "🎉 Registration Successful!",
        text: "User has been registered successfully.",
        background: "#0f172a",
        color: "#ffffff",
        iconColor: "#22c55e",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
        showClass: {
          popup: "animate__animated animate__zoomIn",
        },
        hideClass: {
          popup: "animate__animated animate__zoomOut",
        },
      });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        collegeOrCompany: "",
        profession: "",
        interestedCourses: [],
      });
      setShowCourses(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "❌ Registration Failed",
        text: error.response?.data?.message || "Something went wrong.",
        background: "#0f172a",
        color: "#ffffff",
        iconColor: "#ef4444",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">
            <div className="flex items-center gap-3">
              <UserPlus size={40} />
              <div>
                <h2 className="text-3xl font-bold">Register User</h2>

                <p className="text-cyan-100">
                  Add a new student or professional
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-white mb-2">Name</label>

                <div className="relative">
                  <User
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 p-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white mb-2">Email</label>

                <div className="relative">
                  <Mail
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 p-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-white mb-2">Mobile</label>

                <div className="relative">
                  <Phone
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full pl-12 p-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-white mb-2">
                  College / Company
                </label>

                <div className="relative">
                  <Building2
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    name="collegeOrCompany"
                    placeholder="Enter College / Company"
                    value={formData.collegeOrCompany}
                    onChange={handleChange}
                    className="w-full pl-12 p-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Profession */}
              <div className="md:col-span-2">
                <label className="block text-white mb-2">Profession</label>

                <div className="relative">
                  <Briefcase
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    name="profession"
                    placeholder="Enter Profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full pl-12 p-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-white mb-2">
                  Interested Courses
                </label>

                {/*    <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCourses(!showCourses)}
                    className="w-full bg-white p-3 rounded-xl text-left border border-gray-200"
                  >
                    {formData.interestedCourses.length > 0
                      ? formData.interestedCourses.join(", ")
                      : "Select one or more courses"}
                  </button>

                  {showCourses && (
                    <div className="absolute z-50 mt-2  w-full bg-white rounded-xl shadow-lg border max-h-60 overflow-y-auto scrollbar-thin">
                      {courses.map((course) => (
                        <label
                          key={course}
                          className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interestedCourses.includes(
                              course,
                            )}
                            onChange={() => handleCourseChange(course)}
                          />
                          {course}
                        </label>
                      ))}
                    </div>
                  )}
                </div> */}
                <div className="md:col-span-2 relative">
                  <button
                    type="button"
                    onClick={() => setShowCourses(!showCourses)}
                    className="w-full bg-white px-4 py-3 rounded-xl text-left border border-gray-300 shadow-sm hover:border-blue-400 focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    {formData.interestedCourses.length > 0
                      ? formData.interestedCourses.join(", ")
                      : "Select one or more courses"}
                  </button>

                  {showCourses && (
                    <div
                      className="
        absolute z-50 mt-2 w-full
        bg-white rounded-xl border border-gray-200
        shadow-xl
        max-h-64 overflow-y-auto
        scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100
      "
                    >
                      {courses.map((course) => (
                        <label
                          key={course}
                          className="
            flex items-center gap-3 px-4 py-3
            hover:bg-blue-50
            cursor-pointer
            transition-colors
            border-b border-gray-100 last:border-b-0
          "
                        >
                          <input
                            type="checkbox"
                            checked={formData.interestedCourses.includes(
                              course,
                            )}
                            onChange={() => handleCourseChange(course)}
                            className="
              h-4 w-4
              text-blue-600
              rounded
              border-gray-300
              focus:ring-blue-500
            "
                          />
                          <span className="text-gray-700">{course}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-cyan-500/40 transition duration-300"
              >
                Register User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

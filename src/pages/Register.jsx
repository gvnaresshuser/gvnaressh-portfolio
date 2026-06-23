import { useState } from "react";
import API from "../services/userApi";
import Swal from "sweetalert2";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    collegeOrCompany: "",
    profession: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      });
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
/*     Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: "❌ Registration Failed",
      text: error.response?.data?.message || "Please try again.",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: "#dc2626",
      color: "#ffffff",
    }); */
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

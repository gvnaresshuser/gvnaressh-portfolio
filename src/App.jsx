import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Usersx from "./pages/Usersx";

import { LayoutDashboard, UserPlus, Users, Menu, X } from "lucide-react";
import { Navigate } from "react-router-dom";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? "bg-white text-blue-700 shadow-md"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <BrowserRouter>
      <nav className="bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-white">
                GV Naressh
              </h1>

              <p className="hidden sm:block text-xs text-cyan-200">
                React Full Stack Trainer
              </p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-3">
              <NavLink to="/" className={navLinkClasses}>
                <LayoutDashboard size={18} />
                Dashboard
              </NavLink>

              <NavLink to="/register" className={navLinkClasses}>
                <UserPlus size={18} />
                Register
              </NavLink>

              {/* <NavLink to="/users" className={navLinkClasses}>
                <Users size={18} />
                Users
              </NavLink> */}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-80 pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2 pt-2">
              <NavLink
                to="/"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </NavLink>

              <NavLink
                to="/register"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                <UserPlus size={18} />
                Register
              </NavLink>

              <NavLink
                to="/users"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                <Users size={18} />
                Users
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Usersx />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Usersx from "./pages/Usersx";

import { LayoutDashboard, UserPlus, Users, Menu, X } from "lucide-react";
import { Navigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [error, setError] = useState("");

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? "bg-white text-blue-700 shadow-md"
        : "text-white hover:bg-white/20"
    }`;

    const verifyPassword = () => {
      if (password === "36953695") {
        setShowUsers(true);
        setShowPasswordModal(false);
        setPassword("");
      } else {
        setError("Incorrect Password");
      }
    };

  return (
    <BrowserRouter>
      <nav className="bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              onClick={() => {
                setShowPasswordModal(true);
                setPassword("");
                setError("");
              }}
              className="cursor-pointer"
            >
              <h1 className="text-xl md:text-2xl font-extrabold text-white">
                GV Naressh
              </h1>

              <p className="sm:block text-xs text-cyan-200">
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
              {showUsers && (
                <NavLink to="/users" className={navLinkClasses}>
                  <Users size={18} />
                  Users
                </NavLink>
              )}
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

              {/* <NavLink
                to="/users"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                <Users size={18} />
                Users
              </NavLink> */}
              {showUsers && (
                <NavLink
                  to="/users"
                  className={navLinkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  <Users size={18} />
                  Users
                </NavLink>
              )}
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
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-[360px] overflow-hidden rounded-3xl bg-white shadow-2xl animate__animated animate__zoomIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 p-6 text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                <LockKeyhole size={34} className="text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white">Admin Access</h2>

              <p className="mt-1 text-sm text-cyan-100">
                Enter your password to continue
              </p>
            </div>

            {/* Body */}
            <div className="p-6">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="••••••••"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-700 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
                onKeyDown={(e) => {
                  if (e.key === "Enter") verifyPassword();
                }}
              />

              {error && (
                <p className="mt-3 rounded-lg bg-red-50 py-2 text-center text-sm font-medium text-red-600">
                  ❌ Incorrect Password
                </p>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 rounded-xl border border-gray-300 bg-gray-100 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-200"
                >
                  Cancel
                </button>

                <button
                  onClick={verifyPassword}
                  className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

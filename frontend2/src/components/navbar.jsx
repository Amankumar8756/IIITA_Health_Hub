import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ALL DOCTORS", path: "/doctors/:speciality" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="relative w-full bg-white shadow-md">
      {/* Navbar Container */}
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 px-4 md:px-12 lg:px-16">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          className="w-16 cursor-pointer transition-transform duration-200 hover:scale-105"
          src={assets.aman}
          alt="Logo"
        />

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img className="w-7" src={assets.menu_icon} alt="menu icon" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Profile / Auth Button - Desktop */}
        <div className="hidden md:flex items-center">
          {token ? (
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full border-2 border-gray-200 shadow-sm"
                  src={assets.profile_pic}
                  alt="Profile"
                />
                <img
                  className="w-2.5"
                  src={assets.dropdown_icon}
                  alt="Dropdown"
                />
              </div>
              {/* Dropdown */}
              <div className="absolute top-12 right-0 p-3 bg-white shadow-xl rounded-md text-sm font-medium text-gray-700 z-20 opacity-0 scale-95 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <p
                  onClick={() => navigate("/myprofile")}
                  className="hover:text-black cursor-pointer mb-1"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer mb-1"
                >
                  MyAppointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-colors duration-200"
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="md:hidden px-4 pb-4 space-y-3 font-medium text-gray-700 bg-gray-50 shadow-inner rounded-b-lg animate-slideDown">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
              onClick={() => {
                navigate(item.path);
                setShowMenu(false);
              }}
            >
              {item.name}
            </div>
          ))}

          {token ? (
            <>
              <div
                onClick={() => {
                  navigate("/myprofile");
                  setShowMenu(false);
                }}
                className="hover:text-black cursor-pointer"
              >
                My Profile
              </div>
              <div
                onClick={() => {
                  navigate("/my-appointments");
                  setShowMenu(false);
                }}
                className="hover:text-black cursor-pointer"
              >
                My Appointments
              </div>
              <div
                onClick={() => {
                  setToken(false);
                  setShowMenu(false);
                }}
                className="hover:text-black cursor-pointer"
              >
                Logout
              </div>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setShowMenu(false);
              }}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full shadow-md transition-colors duration-200"
            >
              Create Account
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

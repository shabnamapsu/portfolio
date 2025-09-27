import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbaar() {
  const [showManu, setShowManu]=useState(false);
  return (
    <>
      <div className="w-full bg-blue-600 top-0 z-50 shadow-2xl text-white hover:bg-gray-100 sticky transition hover:text-black">
  <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-12 md:px-24 lg:px-32">
    {/* Logo + Title */}
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 bg-blue-800 rounded-sm"></div>
      <h1 className="text-lg sm:text-xl">
        <span className="font-bold">shabnam</span>
        <span className="text-gray-800"> / </span>
        <span className="italic">project manager</span>
      </h1>
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex gap-6 text-sm sm:text-base">
      <NavLink to="/" end>About Me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>

    {/* Hamburger Icon */}
    <div className="md:hidden">
      {showManu ? (
        <FaXmark onClick={() => setShowManu(!showManu)} className="text-xl cursor-pointer" />
      ) : (
        <FaBars onClick={() => setShowManu(!showManu)} className="text-xl cursor-pointer" />
      )}
    </div>
  </div>

  {/* Mobile Menu */}
  {showManu && (
    <div className="flex flex-col items-center space-y-6 h-screen py-20 bg-white shadow-lg md:hidden">
      <NavLink onClick={() => setShowManu(!showManu)} to="/" end>About Me</NavLink>
      <NavLink onClick={() => setShowManu(!showManu)} to="/projects">Projects</NavLink>
      <NavLink onClick={() => setShowManu(!showManu)} to="/contact">Contact</NavLink>
    </div>
  )}
</div>


    </>
  );
}

export default Navbaar;

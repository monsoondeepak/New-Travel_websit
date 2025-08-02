"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-between px-6 sm:px-10 md:px-20 bg-transparent text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-red-600 rounded-full" />
        <a href="#" className="text-2xl font-bold tracking-wider">
          TRAVEL
        </a>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-1 justify-center items-center">
        <ul className="flex items-center gap-20 text-sm font-medium tracking-wide">
          <li className="hover:text-amber-400 cursor-pointer transition-colors duration-200">wide sea</li>
          <li className="hover:text-amber-400 cursor-pointer transition-colors duration-200">mountains</li>
          <li className="hover:text-amber-400 cursor-pointer transition-colors duration-200">island</li>
        </ul>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? (
            <HiX className="w-8 h-8 text-white" />
          ) : (
            <HiOutlineMenuAlt3 className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/90 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <ul className="flex flex-col mt-24 px-6 gap-8 text-lg font-medium tracking-wide">
          <li
            className="hover:text-amber-400 cursor-pointer transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            wide sea
          </li>
          <li
            className="hover:text-amber-400 cursor-pointer transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            mountains
          </li>
          <li
            className="hover:text-amber-400 cursor-pointer transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            island
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

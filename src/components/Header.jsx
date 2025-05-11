import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinkClass = `relative inline-block px-2 py-1 text-gray-200 transition-colors duration-300
                      hover:text-blue-400
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
                      after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                      hover:after:scale-x-100`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className="h-20 bg-[#101828] flex justify-between items-center px-6 md:px-20 shadow-sm shadow-blue-900">
        <NavLink to="/" className={navLinkClass}>
          <h1 className="md:text-3xl text-2xl text-gray-200 font-semibold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Aman
            </span>
            Sharma
          </h1>
        </NavLink>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#home" className={navLinkClass}>
            Home
          </a>
          <a href="#about" className={navLinkClass}>
            About
          </a>
          <a href="#experience" className={navLinkClass}>
            Experience
          </a>
          <a href="#projects" className={navLinkClass}>
            Projects
          </a>
          <a href="#education" className={navLinkClass}>
            Education
          </a>
          <a href="#contact" className={navLinkClass}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-20 right-0 w-full bg-[#101828] flex flex-col items-center gap-6 py-6 md:hidden z-50 shadow-lg">
            <a href="#home" className={navLinkClass} onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className={navLinkClass} onClick={toggleMenu}>
              About
            </a>
            <a href="#experience" className={navLinkClass} onClick={toggleMenu}>
              Experience
            </a>
            <a href="#projects" className={navLinkClass} onClick={toggleMenu}>
              Projects
            </a>
            <a href="#education" className={navLinkClass} onClick={toggleMenu}>
              Education
            </a>
            <a href="#contact" className={navLinkClass} onClick={toggleMenu}>
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;

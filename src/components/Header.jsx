import React from "react";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `relative inline-block px-2 py-1 transition-colors duration-300 ${
    isActive ? "text-blue-400" : "text-gray-200"
  }
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
  after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
  hover:after:scale-x-100`;

const Header = () => {
  return (
    <div>
      <nav className="h-20 bg-[#101828] flex justify-between items-center p-10">
        <div>
          <NavLink to="/" className={navLinkClass}>
            <h1 className="text-3xl text-gray-200 font-semibold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Aman
              </span>
              Sharma
            </h1>
          </NavLink>
        </div>
        <div className="flex gap-8 text-lg mr-3">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/experience" className={navLinkClass}>
            Experience
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/education" className={navLinkClass}>
            Education
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;

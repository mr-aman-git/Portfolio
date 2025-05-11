import React from "react";
import HoverCard from "../cards/HoverCard";
import AmanImage from "../assets/aman-image.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const HomePage = () => {
  return (
    <>
      <section className="mt-18">
        <div className="flex px-6 md:px-20 justify-center flex-wrap md:flex-nowrap">
          <HoverCard
            hoverable={false}
            className="py-8 bg-gradient-to-r from-blue/70 via-pink-500/5 to-transparent cursor-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-200">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Aman Sharma
                </span>
              </h1>
              <h2 className="text-2xl pt-1.5 text-gray-200">
                Frontend Developer
              </h2>
              <p className="pt-4 text-[18px] text-gray-200 text-justify md:w-[580px]">
                A passionate software developer with a strong foundation in
                designing and developing dynamic web applications. Skilled in
                creating responsive, efficient, and user-centric digital
                solutions. Dedicated to delivering high-quality projects by
                combining technical knowledge with problem-solving abilities to
                meet business requirements and enhance user experiences.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="py-3 px-4 cursor-pointer rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:translate-y-1 duration-300">
                  Contact Me
                </button>
                <button className="py-3 px-4 cursor-pointer hover:text-white rounded-md border border-blue-500 text-blue-500 hover:bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:translate-y-1 duration-300">
                  View Project
                </button>
              </div>
              <div className="flex gap-4 pt-10">
                <a
                  href="https://github.com/mr-aman-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-sharma-07684730a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </HoverCard>
          <HoverCard
            hoverable={false}
            className="flex justify-center py-8 bg-gradient-to-r from-blue/70 via-pink-500/5 to-transparent"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-500">
                <div className="w-60 h-60 md:w-76 md:h-76 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 overflow-hidden">
                  <img
                    src={AmanImage}
                    alt="Pic"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </HoverCard>
        </div>
      </section>
    </>
  );
};

export default HomePage;

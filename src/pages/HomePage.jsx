import React from "react";
import HoverCard from "../cards/HoverCard";
import AmanImage from "../assets/aman-image.png";

const HomePage = () => {
  return (
    <>
      <section className="mt-14">
        <div className="flex px-6 md:px-20 justify-center flex-wrap md:flex-nowrap">
            <HoverCard hoverable={false} className="bg-gradient-to-r from-blue/70 via-gray-800/50 to-transparent">
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Aman Sharma
                </span>
              </h1>
              <h2 className="text-2xl pt-1.5">Frontend Developer</h2>
              <p className="pt-4">
                A passionate software developer with a strong foundation in designing and developing dynamic web applications. Skilled in creating responsive, efficient, and user-centric digital solutions. Dedicated to delivering high-quality projects by combining technical knowledge with problem-solving abilities to meet business requirements and enhance user experiences.
              </p>
            </div>
          </HoverCard>
          <HoverCard hoverable={false} className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-500">
              <div className="w-60 h-60 md:w-76 md:h-76 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 overflow-hidden">
                <img src="https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.jpg?s=612x612&w=0&k=20&c=yGHZLPu6UWwoj2wazbbepxmjl29MS1Hr2jV3N0FzjyI=" alt="Pic" className="w-full h-full object-cover" />
              </div>
            </div>
          </HoverCard>
        </div>
      </section>
    </>
  );
};

export default HomePage;

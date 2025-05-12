import React from "react";
import HoverCard from "../cards/HoverCard";
import { UserIcon } from "@heroicons/react/24/outline";

function AboutPage() {
  return (
    <>
      <div className=" md:p-20 ">
        <HoverCard
          hoverable={false}
          className="py-8 bg-gradient-to-r from-blue/70 via-blue-500/5 to-transparent"
        >
          <div className="flex justify-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 ">
              About Me
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full mb-10"></div>
          <main className="flex flex-wrap md:flex-nowrap px-5 gap-10">
            <HoverCard
              hoverable={true}
              className=" p-5 shadow shadow-[#303b4c]"
            >
              <div className="text-gray-200">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 mr-3">
                    <UserIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-[20px] font-semibold text-gray-200">
                    Who am i
                  </h2>
                </div>
                <div className="pt-5 pb-10">
                  <p>
                    I'm a passionate Frontend Developer from New Delhi, Delhi,
                    with experience in building responsive web applications
                    using modern web technologies.
                  </p>
                  <p className="pt-3">
                    With a background in BCA, I’m building a strong foundation
                    in software development, using my analytical skills and
                    attention to detail to create intuitive and user-friendly
                    interfaces.{" "}
                  </p>
                  <p className="pt-3">
                    I enjoy solving complex problems and continuously learning
                    new technologies to stay at the forefront of web
                    development.
                  </p>
                </div>
              </div>
            </HoverCard>

            <HoverCard hoverable={true} className="border ">
              <div className="">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Hi, I'm{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Aman Sharma
                  </span>
                </h1>
              </div>
            </HoverCard>
          </main>
        </HoverCard>
      </div>
    </>
  );
}

export default AboutPage;

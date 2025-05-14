import React from "react";
import HoverCard from "../cards/HoverCard";
import { UserIcon } from "@heroicons/react/24/outline";
import { FaReact } from 'react-icons/fa';

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
          <main className="flex flex-wrap md:flex-nowrap px-5 gap-10 justify-around">
            <HoverCard
              hoverable={true}
              className=" p-5 shadow shadow-[#303b4c] md:w-[560px]"
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

            <HoverCard
              hoverable={true}
              className=" p-5 shadow shadow-[#303b4c] md:w-[560px]"
            >
              <div className="text-gray-200">
                <div className="flex items-center">
                  <div class="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star text-white"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </div>

                  <h2 className="text-[20px] font-semibold text-gray-200">
                    My Skills
                  </h2>
                </div>
                <div className="pt-5 pb-10 flex gap-3 flex-wrap">
                  <div className="flex items-center w-[160px] pl-3 py-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transform hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-l-4 hover:border-purple-500 translate-y-0 opacity-100">
                    <div className="p-2 mr-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600">
                      <FaReact className="text-[20px] animate-spin-slow" />
                    </div>
                    <span class="text-gray-200 text-sm">React Js</span>
                  </div>

                  <div className="flex items-center w-[160px] pl-3 py-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transform hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-l-4 hover:border-purple-500 translate-y-0 opacity-100">
                    <div className="p-2 mr-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-monitor text-white"
                      >
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                    </div>
                    <span class="text-gray-200 text-sm">React Js</span>
                  </div>
                  <div className="flex items-center w-[160px] pl-3 py-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transform hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-l-4 hover:border-purple-500 translate-y-0 opacity-100">
                    <div className="p-2 mr-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-monitor text-white"
                      >
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                    </div>
                    <span class="text-gray-200 text-sm">React Js</span>
                  </div>

                  <div className="flex items-center w-[160px] pl-3 py-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transform hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-l-4 hover:border-purple-500 translate-y-0 opacity-100">
                    <div className="p-2 mr-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-monitor text-white"
                      >
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                    </div>
                    <span class="text-gray-200 text-sm">React Js</span>
                  </div>

                  <div className="flex items-center w-[160px] pl-3 py-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transform hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-l-4 hover:border-purple-500 translate-y-0 opacity-100">
                    <div className="p-2 mr-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-monitor text-white"
                      >
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                    </div>
                    <span class="text-gray-200 text-sm">React Js</span>
                  </div>

                  <div className="flex items-center w-[160px] pl-3 py-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transform hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-l-4 hover:border-purple-500 translate-y-0 opacity-100">
                    <div className="p-2 mr-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-monitor text-white"
                      >
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                    </div>
                    <span class="text-gray-200 text-sm">React Js</span>
                  </div>
                </div>
              </div>
            </HoverCard>
          </main>
        </HoverCard>
      </div>
    </>
  );
}

export default AboutPage;

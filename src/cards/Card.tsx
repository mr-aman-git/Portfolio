import React, { useEffect, useRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  const meteorRef = useRef<HTMLSpanElement>(null);

  const restartAnimation = () => {
    const meteor = meteorRef.current;
    if (meteor) {
      meteor.style.animation = "none";
      void meteor.offsetWidth;
      meteor.style.animation = "";
    }
  };

  useEffect(() => {
    const meteor = meteorRef.current;
    if (!meteor) return;

    const handleEnd = () => {
      meteor.style.visibility = "hidden";

      const delay = Math.floor(Math.random() * 3); // 0 to 2s
      const duration = Math.floor(Math.random() * 3) + 2; // 2 to 4s
      const width = Math.floor(Math.random() * 80) + 20; // 20 to 100px

      meteor.style.setProperty("--meteor-delay", `${delay}s`);
      meteor.style.setProperty("--meteor-duration", `${duration}s`);
      meteor.style.setProperty("--meteor-width", `${width}px`);

      restartAnimation();
    };

    const handleStart = () => {
      meteor.style.visibility = "visible";
    };

    meteor.addEventListener("animationend", handleEnd);
    meteor.addEventListener("animationstart", handleStart);

    return () => {
      meteor.removeEventListener("animationend", handleEnd);
      meteor.removeEventListener("animationstart", handleStart);
    };
  }, []);

  return (
    <div className={twMerge("relative p-6 bg-gray-500/8 shadow-sm rounded-xl overflow-hidden", className)}>
      <style>
        {`
          @keyframes meteor {
            0% {
              left: 0%;
              opacity: 0;
            }
            70% {
              opacity: 1;
            }
            100% {
              left: 100%;
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Meteor animation beam */}
      <span
        ref={meteorRef}
        className={twMerge(
          "absolute z-40 top-0 -translate-y-1/2 rotate-180",
          "h-[1px] bg-gradient-to-r from-indigo-500 via-sky-300 to-transparent",
          "animate-[meteor_var(--meteor-duration,2s)_linear_var(--meteor-delay,0s)]"
        )}
        style={{ width: "var(--meteor-width, 50px)" }}
      />

      {/* Card Content */}
      {children}
    </div>
  );
};

export default Card;

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const HoverCard = ({ children, hoverable = true, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative block p-2 h-full w-full cursor-pointer rounded-3xl ${className}`}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
    >
      <AnimatePresence>
        {hoverable && isHovered && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-slate-800/[0.8] rounded-3xl z-0"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 rounded-2xl ">
        {children}
      </div>
    </div>
  );
};

export default HoverCard;

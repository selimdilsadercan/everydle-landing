"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface WebPlayButtonProps {
  dark?: boolean;
  className?: string;
}

const WebPlayButton = ({ dark, className }: WebPlayButtonProps) => {
  return (
    <motion.a
      href="https://app.playeverydle.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-2xl w-full sm:w-fit transition-all duration-300 shadow-lg",
        {
          "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-indigo-500/25":
            dark,
          "bg-gradient-to-r from-indigo-500 to-purple-600 text-white": !dark,
        },
        className
      )}
    >
      <div className="mr-3">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>
      <div className="text-left">
        <div className="text-xs text-white/70">Hemen</div>
        <div className="-mt-1 font-sans text-lg font-semibold">
          Web&apos;de Oyna
        </div>
      </div>
    </motion.a>
  );
};

export default WebPlayButton;

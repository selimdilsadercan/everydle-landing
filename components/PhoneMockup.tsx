"use client";

import React from "react";
import { motion } from "framer-motion";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] ring-1 ring-slate-700 shadow-2xl shadow-slate-900/50">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
          <div className="w-36 h-7 bg-slate-900 rounded-b-3xl" />
        </div>

        {/* Screen */}
        <div className="absolute inset-3 top-8 rounded-[2.5rem] overflow-hidden bg-slate-950">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1 bg-slate-600 rounded-full" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-[3rem] blur-3xl opacity-50 -z-10" />
    </div>
  );
};

export default PhoneMockup;

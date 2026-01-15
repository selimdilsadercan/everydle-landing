"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import { siteDetails } from "@/data/siteDetails";

const menuItems = [
  { text: "Oyunlar", url: "#games" },
  { text: "Özellikler", url: "#features" },
  { text: "Nasıl Oynanır", url: "#how-it-works" },
  { text: "SSS", url: "#faq" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(51, 65, 85, 0.5)"
          : "1px solid transparent",
      }}
    >
      <div className="container-custom">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-indigo-500/20"
            >
              🎮
            </motion.div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-gradient transition-all duration-300">
              {siteDetails.siteName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-sm font-medium text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-indigo-500/20 transition-all duration-200"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://app.playeverydle.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold py-2 px-5 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/20"
            >
              Oyna
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="w-10 h-10 bg-slate-800/80 hover:bg-slate-700 rounded-xl flex items-center justify-center text-white transition-colors"
            >
              {isOpen ? (
                <HiOutlineXMark className="h-5 w-5" />
              ) : (
                <HiBars3 className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl"
            style={{
              borderTop: "1px solid rgba(51, 65, 85, 0.5)",
            }}
          >
            <div className="container-custom py-4">
              <ul className="flex flex-col gap-1">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.url}
                      className="block text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg px-4 py-3 transition-all"
                      onClick={toggleMenu}
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.05 }}
                  className="pt-3 mt-2 border-t border-slate-800/50"
                >
                  <motion.a
                    href="https://app.playeverydle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="block text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl"
                    onClick={toggleMenu}
                  >
                    Hemen Oyna
                  </motion.a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

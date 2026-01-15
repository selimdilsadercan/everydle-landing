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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/20"
            >
              🎮
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
              {siteDetails.siteName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-slate-300 hover:text-white transition-colors relative group"
                >
                  {item.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Şimdi İndir
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-white transition-colors"
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" />
              ) : (
                <HiBars3 className="h-6 w-6" />
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
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50"
          >
            <div className="container-custom py-6">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.url}
                      className="block text-lg text-slate-300 hover:text-white transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="pt-4 border-t border-slate-800"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full"
                    onClick={toggleMenu}
                  >
                    Şimdi İndir
                  </motion.button>
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

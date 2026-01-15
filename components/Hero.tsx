"use client";

import React from "react";
import { motion } from "framer-motion";
import { games } from "@/data/games";
import { stats } from "@/data/features";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import WebPlayButton from "./WebPlayButton";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-gradient absolute inset-0" />
        <div className="hero-grid absolute inset-0" />

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Her gün yeni bulmacalar
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-white">Türkiye&apos;nin</span>
          <br />
          <span className="text-gradient">Bulmaca Koleksiyonu</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8"
        >
          8 farklı oyun türü, arkadaşlarınla yarış, günlük ödüller kazan.
          <br className="hidden sm:block" />
          Wordle, Contexto, Moviedle ve daha fazlası tek uygulamada!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <WebPlayButton dark className="order-first sm:order-none" />
          <AppStoreButton
            dark
            className="transform hover:scale-105 transition-all duration-300"
          />
          <PlayStoreButton
            dark
            className="transform hover:scale-105 transition-all duration-300"
          />
        </motion.div>

        {/* Floating Game Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="flex justify-center items-end gap-2 sm:gap-4 flex-wrap">
            {games.slice(0, 5).map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`
                  relative bg-glass rounded-2xl p-4 sm:p-5 cursor-pointer game-card
                  ${index === 2 ? "scale-110 z-10" : "scale-100"}
                `}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${game.gradient} opacity-10`}
                />
                <div className="relative">
                  <span className="text-3xl sm:text-4xl">{game.icon}</span>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                    {game.turkishName}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* +3 More indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-slate-500 text-sm"
          >
            +3 oyun daha keşfet
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="stat-number">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-slate-500 text-sm mb-2">Keşfet</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-slate-500"
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

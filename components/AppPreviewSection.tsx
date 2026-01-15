"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { games } from "@/data/games";

const AppPreviewSection: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState(games[0]);

  // Simulated game UI based on selected game
  const GamePreview = () => {
    return (
      <div className="h-full w-full flex flex-col bg-slate-900">
        {/* App Header */}
        <div className="px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">{selectedGame.icon}</span>
            <span className="text-white font-semibold text-sm">
              {selectedGame.turkishName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full">
              Gün 127
            </span>
          </div>
        </div>

        {/* Game Content */}
        <div className="flex-1 p-4 flex flex-col items-center justify-center">
          {/* Grid simulation */}
          <div className="grid grid-cols-5 gap-1 mb-4">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.02 }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                  i < 5
                    ? "bg-emerald-500"
                    : i < 10
                    ? "bg-amber-500"
                    : i < 15
                    ? "bg-slate-700"
                    : "bg-slate-800 border border-slate-700"
                }`}
              >
                {i < 15 ? String.fromCharCode(65 + (i % 5)) : ""}
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>🎯 3/6 Tahmin</span>
            <span>⏱️ 1:23</span>
          </div>
        </div>

        {/* Keyboard simulation */}
        <div className="p-3 bg-slate-800">
          <div className="grid grid-cols-10 gap-1 mb-1">
            {"QWERTYUİOP".split("").map((key) => (
              <div
                key={key}
                className="h-8 bg-slate-700 rounded flex items-center justify-center text-white text-xs font-semibold"
              >
                {key}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-9 gap-1 mb-1 px-3">
            {"ASDFGHJKL".split("").map((key) => (
              <div
                key={key}
                className="h-8 bg-slate-700 rounded flex items-center justify-center text-white text-xs font-semibold"
              >
                {key}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-9 gap-1 px-1">
            <div className="h-8 col-span-2 bg-slate-600 rounded flex items-center justify-center text-white text-xs">
              ↵
            </div>
            {"ZXCVBNİ".split("").map((key) => (
              <div
                key={key}
                className="h-8 bg-slate-700 rounded flex items-center justify-center text-white text-xs font-semibold"
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm font-medium mb-4">
              📱 Uygulama İçi Görünüm
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modern ve <span className="text-gradient">Akıcı Tasarım</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Premium koyu tema, akıcı animasyonlar ve kullanıcı dostu arayüz
              ile bulmaca çözmenin keyfini yaşayın.
            </p>

            {/* Game Selector */}
            <div className="mb-8">
              <p className="text-sm text-slate-500 mb-3">
                Bir oyun seç ve önizlemeyi gör:
              </p>
              <div className="flex flex-wrap gap-2">
                {games.slice(0, 4).map((game) => (
                  <motion.button
                    key={game.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedGame(game)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      selectedGame.id === game.id
                        ? `bg-gradient-to-r ${game.gradient} text-white shadow-lg`
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    <span>{game.icon}</span>
                    <span className="text-sm font-medium">
                      {game.turkishName}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                "Gece modunda rahat oyun deneyimi",
                "Pürüzsüz animasyonlarla keyifli geçişler",
                "Tüm cihazlarda senkronize ilerleme",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <PhoneMockup className="animate-float">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGame.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <GamePreview />
                </motion.div>
              </AnimatePresence>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;

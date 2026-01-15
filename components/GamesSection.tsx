"use client";

import React from "react";
import { motion } from "framer-motion";
import { gamesArray, Game } from "@/data/games";

const GameCard: React.FC<{ game: Game; index: number }> = ({ game, index }) => {
  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case "Kolay":
        return "difficulty-easy";
      case "Orta":
        return "difficulty-medium";
      case "Zor":
        return "difficulty-hard";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative bg-glass rounded-3xl p-6 cursor-pointer game-card overflow-hidden border-2 border-transparent hover:${game.borderColor}`}
    >
      {/* New / Popular Badge */}
      {game.isNew && (
        <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          YENİ
        </div>
      )}
      {game.isPopular && !game.isNew && (
        <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          🔥 Popüler
        </div>
      )}

      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Glow Effect */}
      <div
        className={`absolute -inset-px bg-gradient-to-br ${game.color} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-2xl shadow-lg ${game.shadowColor}`}
            >
              {game.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300">
                {game.name}
              </h3>
              <p className="text-xs text-slate-500">{game.description}</p>
            </div>
          </div>
        </div>

        {/* Difficulty Badge */}
        <div className="mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyClass(
              game.difficulty
            )}`}
          >
            {game.difficulty}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{game.players} oyuncu</span>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-1 text-indigo-400 text-sm font-medium"
          >
            <span>Oyna</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const GamesSection: React.FC = () => {
  return (
    <section id="games" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4"
          >
            🎮 8 Farklı Oyun
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Her Gün Yeni <span className="text-gradient">Bulmacalar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Kelime oyunlarından film tahminlerine, matematik bulmacalarından
            poker ellerine kadar her zevke uygun oyunlar
          </motion.p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gamesArray.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Hepsini tek uygulamada keşfet ve arkadaşlarınla yarış!
          </p>
          <motion.a
            href="https://app.playeverydle.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
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
            <span>Hemen Oyna</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GamesSection;

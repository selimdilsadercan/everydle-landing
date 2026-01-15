"use client";

import React from "react";
import { motion } from "framer-motion";
import { gamesArray, Game } from "@/data/games";

// Game Icon Component
const GameIcon: React.FC<{ game: Game; size?: "sm" | "md" | "lg" }> = ({
  game,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-lg",
    md: "w-12 h-12 text-xl",
    lg: "w-14 h-14 text-2xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center shadow-lg ${game.shadowColor}`}
    >
      {game.icon}
    </div>
  );
};

interface PhoneScreenProps {
  selectedGame?: Game | null;
}

// Phone App Screen showing games list
const PhoneScreen: React.FC<PhoneScreenProps> = ({ selectedGame }) => {
  return (
    <div className="h-full w-full bg-slate-900 flex flex-col">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-white text-xs">
        <span>12:55</span>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.5C6.75 21.5 2.5 17.25 2.5 12S6.75 2.5 12 2.5 21.5 6.75 21.5 12 17.25 21.5 12 21.5z" />
          </svg>
          <span>100%</span>
        </div>
      </div>

      {/* App Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-sm">
            🎮
          </div>
          <span className="text-white font-semibold text-sm">Everydle</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
            <span className="text-xs">👤</span>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="flex-1 p-3 overflow-auto">
        <div className="grid grid-cols-2 gap-2">
          {gamesArray.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`relative bg-slate-800/80 rounded-xl p-3 border-2 transition-all duration-300 ${
                selectedGame?.id === game.id
                  ? `${game.borderColor} ${game.shadowColor} shadow-lg`
                  : "border-transparent hover:border-slate-700"
              }`}
            >
              {/* New / Popular Badge */}
              {game.isNew && (
                <div className="absolute -top-1 -right-1 bg-pink-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                  YENİ
                </div>
              )}
              {game.isPopular && !game.isNew && (
                <div className="absolute -top-1 -right-1 bg-amber-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                  🔥
                </div>
              )}

              <div className="flex flex-col items-center text-center">
                <GameIcon game={game} size="sm" />
                <h4 className="text-white font-semibold text-xs mt-2">
                  {game.name}
                </h4>
                <p className="text-slate-400 text-[10px] mt-0.5 line-clamp-1">
                  {game.description}
                </p>

                {/* Player count */}
                <div className="mt-2 flex items-center gap-1 text-[9px] text-slate-500">
                  <span>👥</span>
                  <span>{game.players} oyuncu</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-around py-3 border-t border-slate-800 bg-slate-900">
        <div className="flex flex-col items-center text-indigo-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="text-[9px] mt-0.5">Ana Sayfa</span>
        </div>
        <div className="flex flex-col items-center text-slate-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          <span className="text-[9px] mt-0.5">Arkadaşlar</span>
        </div>
        <div className="flex flex-col items-center text-slate-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
          </svg>
          <span className="text-[9px] mt-0.5">Sıralama</span>
        </div>
        <div className="flex flex-col items-center text-slate-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-[9px] mt-0.5">Profil</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;
export { GameIcon };

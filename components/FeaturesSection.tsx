"use client";

import React from "react";
import { motion } from "framer-motion";
import { features } from "@/data/features";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4"
          >
            ✨ Özellikler
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Sadece Bulmaca Değil,{" "}
            <span className="text-gradient">Tam Bir Deneyim</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Everydle&apos;ı özel yapan tüm özellikler
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-glass rounded-3xl p-8 overflow-hidden"
            >
              {/* Icon Background Blur */}
              <div
                className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 overflow-hidden border border-indigo-500/20">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-4">
                  <span className="text-lg">💎</span>
                  <span>Premium</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  EverydiePlus ile{" "}
                  <span className="text-gradient-gold">Sınırsız Eğlence</span>
                </h3>
                <p className="text-slate-400 text-lg mb-6 max-w-xl">
                  Tüm geçmiş günlere sınırsız erişim, reklamsız deneyim ve özel
                  rozetlerle oyun keyfinizi bir üst seviyeye taşıyın.
                </p>
                <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-slate-300">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Geçmiş günlere erişim</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Reklamları kaldır</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Özel rozetler</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Price */}
              <div className="text-center">
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                  <div className="text-sm text-slate-400 mb-2">Başlangıç</div>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">
                      ₺29.99
                    </span>
                    <span className="text-slate-400">/ay</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full"
                  >
                    Premium'a Geç
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

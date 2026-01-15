"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Uygulamayı İndir",
    description:
      "App Store veya Google Play Store'dan Everydle'ı ücretsiz indir ve hesabını oluştur.",
    icon: "📲",
    color: "from-indigo-500 to-blue-600",
  },
  {
    number: "02",
    title: "Günün Oyunlarını Seç",
    description:
      "8 farklı oyun türünden istediğini seç. Her gün gece yarısı yeni bulmacalar açılır.",
    icon: "🎯",
    color: "from-purple-500 to-pink-600",
  },
  {
    number: "03",
    title: "Bulmacayı Çöz",
    description:
      "Tahminlerini yap, ipuçlarını kullan ve günün bulmacasını en az hamlede çözmeye çalış.",
    icon: "🧩",
    color: "from-amber-500 to-orange-600",
  },
  {
    number: "04",
    title: "Arkadaşlarınla Yarış",
    description:
      "Sonuçlarını paylaş, liderlik tablosunda yerinizi al ve ödüller kazanın.",
    icon: "🏆",
    color: "from-emerald-500 to-teal-600",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-4"
          >
            🎓 Başlangıç Rehberi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Nasıl <span className="text-gradient">Oynanır</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            4 kolay adımda Everydle dünyasına katıl
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full opacity-20" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="group bg-glass rounded-3xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl shadow-lg relative`}
                  >
                    {step.icon}
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-slate-700">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-6 h-6 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Hemen Başla</span>
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

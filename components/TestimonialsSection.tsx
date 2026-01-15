"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmet Y.",
    role: "Günlük Oyuncu",
    avatar: "🧑‍💻",
    content:
      "Her sabah kahvemle birlikte Everydle oynamak artık rutinim oldu. Özellikle Contexto çok bağımlılık yapıyor!",
    rating: 5,
    game: "Word Proximity",
  },
  {
    name: "Zeynep K.",
    role: "Premium Üye",
    avatar: "👩‍🎨",
    content:
      "Arkadaşlarımla liderlik tablosunda yarışmak çok eğlenceli. Her gün kim daha az tahminde bulacak diye heyecanlanıyoruz.",
    rating: 5,
    game: "Five Letters",
  },
  {
    name: "Mert B.",
    role: "Bulmaca Tutkunu",
    avatar: "🧑‍🔬",
    content:
      "Nerdle matematik bulmacası harika! Hem eğleniyorum hem de beynimi çalıştırıyorum. 8 farklı oyun tek uygulamada, muhteşem.",
    rating: 5,
    game: "Equation",
  },
  {
    name: "Elif S.",
    role: "Film Sever",
    avatar: "👩‍💼",
    content:
      "CineGuess ile film bilgimi test etmek çok keyifli. İpuçlarıyla filmi bulmak o kadar tatmin edici ki!",
    rating: 5,
    game: "CineGuess",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-4"
          >
            💬 Kullanıcı Yorumları
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Oyuncularımız <span className="text-gradient">Ne Diyor</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            32.000+ oyuncudan gelen gerçek yorumlar
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-glass rounded-3xl p-6 md:p-8"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="text-xs bg-slate-800 text-slate-400 px-3 py-1.5 rounded-full">
                  {testimonial.game}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Store Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-glass rounded-2xl px-8 py-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div>
              <span className="text-2xl font-bold text-white">4.8</span>
              <span className="text-slate-400 text-sm ml-1">/ 5</span>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="text-slate-400 text-sm">2.500+ yorum</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

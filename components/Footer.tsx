"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteDetails } from "@/data/siteDetails";
import { ctaDetails } from "@/data/cta";

const footerLinks = {
  product: [
    { text: "Oyunlar", url: "#games" },
    { text: "Özellikler", url: "#features" },
    { text: "Premium", url: "#features" },
    { text: "Nasıl Oynanır", url: "#how-it-works" },
  ],
  company: [
    { text: "Hakkımızda", url: "#" },
    { text: "Blog", url: "#" },
    { text: "Kariyer", url: "#" },
    { text: "İletişim", url: "#" },
  ],
  legal: [
    { text: "Gizlilik Politikası", url: "#" },
    { text: "Kullanım Şartları", url: "#" },
    { text: "Çerez Politikası", url: "#" },
  ],
};

const socialLinks = [
  {
    name: "Twitter",
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900/50 border-t border-slate-800/50">
      {/* CTA Section */}
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bugün <span className="text-gradient">Oynamaya</span> Başla
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              32.000+ oyuncu gibi sen de günlük bulmacalarla beyninizi zorlayın
              ve arkadaşlarınızla eğlenin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Web Play Button - Primary */}
              <motion.a
                href={ctaDetails.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg
                  className="w-6 h-6"
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
                <span>Web&apos;de Oyna</span>
              </motion.a>

              {/* App Store Button */}
              <motion.a
                href={ctaDetails.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.36c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.03ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.55 4.41-3.74 4.25Z" />
                </svg>
                <span>App Store</span>
              </motion.a>

              {/* Play Store Button */}
              <motion.a
                href={ctaDetails.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <span>Play Store</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/20">
                🎮
              </div>
              <span className="text-xl font-bold text-white">
                {siteDetails.siteName}
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Türkiye&apos;nin en popüler günlük bulmaca oyunları koleksiyonu.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ürün</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.url}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Şirket</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.url}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Yasal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.url}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Everydle. Tüm hakları saklıdır.
          </p>
          <p className="text-slate-500 text-sm">
            Türkiye&apos;de ❤️ ile yapıldı
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

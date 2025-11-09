import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#F5F5F7]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/75 via-white/30 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[42px] leading-[1.05] text-[#1D1D1F] md:text-[64px] lg:text-[80px] font-semibold tracking-[-0.02em]"
        >
          Aman K M
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="mt-4 text-lg text-[#1D1D1F]/80 md:text-2xl"
        >
          Designing clean, modern websites with purpose.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1D1D1F]/70 md:text-base"
        >
          I craft premium, performance-first websites that feel effortless — precise layout, seamless motion, and thoughtful details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          className="mt-8 flex items-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-[#0071E3] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,113,227,0.6)] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/70 px-6 py-3 text-sm font-medium text-[#1D1D1F] backdrop-blur-md shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}

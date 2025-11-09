import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-8 md:py-28">
        <motion.img
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1544726796-73d4d6eaff05?q=80&w=1200&auto=format&fit=crop"
          alt="Portrait of Aman K M"
          className="mx-auto h-28 w-28 rounded-full object-cover shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
        />
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mt-8 text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] md:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1D1D1F]/75 md:text-base"
        >
          I’m Aman K M — a designer–developer focused on building intentional, modern websites. I value clarity, rhythm, and performance. My work blends precise layout with subtle motion so brands feel effortless, calm, and premium.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1D1D1F] md:text-base"
        >
          Philosophy: fewer elements, stronger intention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[#1D1D1F]">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'WordPress', 'Tailwind', 'Figma'].map((s) => (
              <span key={s} className="rounded-full bg-[#F5F5F7] px-4 py-2">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

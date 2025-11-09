import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Minimal Commerce',
    desc: 'A clean product experience with smooth micro-interactions and lightning-fast performance.',
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Studio Landing',
    desc: 'A storytelling landing page with subtle gradients, crisp typography, and premium feel.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'An elegant, accessible dashboard designed for clarity — no noise, just signal.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Brand Website',
    desc: 'A brand-forward site with balanced whitespace, confident type, and intentional motion.',
    image: 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] md:text-4xl">Selected Work</h2>
          <p className="text-sm text-[#1D1D1F]/60">Designed & Developed by Aman K M</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:gap-14">
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group relative block overflow-hidden rounded-2xl bg-[#F5F5F7] shadow-sm ring-1 ring-black/5"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full transform object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-medium text-[#1D1D1F] md:text-2xl">{p.title}</h3>
                  <span className="text-xs text-[#1D1D1F]/50">Designed & Developed by Aman K M</span>
                </div>
                <p className="mt-2 text-sm text-[#1D1D1F]/70 md:text-base">{p.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

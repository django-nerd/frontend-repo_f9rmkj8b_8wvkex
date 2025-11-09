import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Layers, Rocket, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Web Design',
    desc: 'Premium, conversion-focused designs with thoughtful typography and layout.',
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Web Development',
    desc: 'Clean, accessible, high-performance builds with modern frameworks.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Landing Pages',
    desc: 'Focused pages that tell a story, optimized for clarity and impact.',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Brand Websites',
    desc: 'Timeless websites with a premium feel and balanced whitespace.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'AI-assisted Websites',
    desc: 'Future-ready experiences that blend design craft with AI capabilities.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <h2 className="mb-10 text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] md:mb-12 md:text-4xl">Services</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F7] text-[#1D1D1F]">
                {s.icon}
              </div>
              <h3 className="text-lg font-medium text-[#1D1D1F]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#1D1D1F]/70">{s.desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.20)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

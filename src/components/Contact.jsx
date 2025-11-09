import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-28">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-[-0.02em] text-[#1D1D1F] md:text-3xl">
          Let’s build something meaningful.
        </h2>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-[#1D1D1F]">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-xl border-0 bg-[#F5F5F7] px-4 py-3 text-sm text-[#1D1D1F] placeholder:text-[#1D1D1F]/40 focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-[#1D1D1F]">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border-0 bg-[#F5F5F7] px-4 py-3 text-sm text-[#1D1D1F] placeholder:text-[#1D1D1F]/40 focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm text-[#1D1D1F]">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-xl border-0 bg-[#F5F5F7] px-4 py-3 text-sm text-[#1D1D1F] placeholder:text-[#1D1D1F]/40 focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
              placeholder="Tell me a little about your project..."
            />
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 md:flex-row">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#0071E3] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,113,227,0.6)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F7] px-6 py-3 text-sm font-medium text-[#1D1D1F] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

import React from 'react';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
        <a href="#home" className="text-sm font-medium tracking-tight text-[#1D1D1F]">
          Aman K M
        </a>
        <nav className="hidden gap-6 text-sm text-[#1D1D1F]/80 md:flex">
          <a href="#work" className="transition-colors hover:text-[#1D1D1F]">Work</a>
          <a href="#services" className="transition-colors hover:text-[#1D1D1F]">Services</a>
          <a href="#about" className="transition-colors hover:text-[#1D1D1F]">About</a>
          <a href="#contact" className="transition-colors hover:text-[#1D1D1F]">Contact</a>
        </nav>
        <a href="#contact" className="hidden rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-medium text-white md:inline-block">
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-[#1D1D1F]/60">© {new Date().getFullYear()} Aman K M. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-[#1D1D1F]/70">
            <a href="#work" className="hover:text-[#1D1D1F]">Work</a>
            <a href="#services" className="hover:text-[#1D1D1F]">Services</a>
            <a href="#about" className="hover:text-[#1D1D1F]">About</a>
            <a href="#contact" className="hover:text-[#1D1D1F]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-inter text-[#1D1D1F]">
      <Header />
      <main className="pt-14">
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

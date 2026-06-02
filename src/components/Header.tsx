"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-sans text-2xl font-bold tracking-tight flex items-center gap-1">
            <span className="font-serif italic font-normal text-white/90">charle</span>
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#work" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
              Our Work
            </Link>
            <Link href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium flex items-center gap-1">
              Services <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded-full">12</span>
            </Link>
            <Link href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
              About us
            </Link>
            <Link href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors duration-300"
            >
              Get in touch
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M.89 9.243L9.373.757m0 0H1.596m7.778 0v7.779" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 text-2xl font-medium">
          <Link onClick={() => setMobileMenuOpen(false)} href="#work" className="text-zinc-400 hover:text-white">
            Our Work
          </Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#services" className="text-zinc-400 hover:text-white flex items-center gap-2">
            Services <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">12</span>
          </Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#about" className="text-zinc-400 hover:text-white">
            About us
          </Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="#contact" className="text-zinc-400 hover:text-white">
            Contact
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="#contact"
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-base w-full"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </>
  );
}

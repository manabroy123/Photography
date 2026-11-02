"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Camera, Instagram, Twitter, Mail, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#fef08a]/15 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6 border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo: Light & Lens */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 text-neutral-100 hover:text-white transition-colors"
        >
          {/* Light-yellow pulse beacon */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#fef08a] shadow-[0_0_12px_#fef08a] animate-pulse" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-medium text-base tracking-[0.2em] uppercase text-white group-hover:text-[#fef08a] transition-colors">
              <span>Light</span>
              <span className="text-[#fef08a] font-serif italic font-normal text-lg lowercase">&amp;</span>
              <span>Lens</span>
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 group-hover:text-neutral-300 transition-colors">
              Macro by Manab Roy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.22em] font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-[#fef08a] transition-colors group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#fef08a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Socials & Action */}
        <div className="hidden md:flex items-center gap-4 text-neutral-400">
          <a
            href={PORTFOLIO_DATA.photographer.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 hover:text-[#fef08a] transition-colors hover:scale-110 transform duration-200"
          >
            <Instagram size={17} strokeWidth={1.75} />
          </a>
          <a
            href={PORTFOLIO_DATA.photographer.socials.unsplash}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unsplash Profile"
            className="p-2 hover:text-[#fef08a] transition-colors hover:scale-110 transform duration-200"
          >
            <Camera size={17} strokeWidth={1.75} />
          </a>
          <a
            href={PORTFOLIO_DATA.photographer.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="p-2 hover:text-[#fef08a] transition-colors hover:scale-110 transform duration-200"
          >
            <Twitter size={17} strokeWidth={1.75} />
          </a>
          <div className="h-4 w-[1px] bg-white/10 mx-1" />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium text-[#fef08a] bg-[#fef08a]/[0.08] border border-[#fef08a]/30 hover:bg-[#fef08a] hover:text-black hover:border-[#fef08a] transition-all duration-300 shadow-[0_0_15px_rgba(254,240,138,0.1)] hover:shadow-[0_0_20px_rgba(254,240,138,0.3)]"
          >
            Inquire
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          className="md:hidden p-2 text-neutral-300 hover:text-[#fef08a] transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-xl border-b border-[#fef08a]/15 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-xs tracking-[0.2em] uppercase font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#fef08a] transition-colors border-b border-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-4 text-neutral-400">
              <a
                href={PORTFOLIO_DATA.photographer.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1 hover:text-[#fef08a]"
              >
                <Instagram size={18} />
              </a>
              <a
                href={PORTFOLIO_DATA.photographer.socials.unsplash}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unsplash"
                className="p-1 hover:text-[#fef08a]"
              >
                <Camera size={18} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.photographer.socials.email}`}
                aria-label="Email"
                className="p-1 hover:text-[#fef08a]"
              >
                <Mail size={18} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium text-black bg-[#fef08a]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

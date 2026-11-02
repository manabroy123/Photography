"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { brand, photographer } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
        {/* Left: Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-neutral-300">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#fef08a] font-medium">{brand.logoName}</span>{" "}
            by {photographer.name}.
          </span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="text-[11px] text-neutral-400 tracking-wider">
            Extreme Macro Photographic Archive
          </span>
        </div>

        {/* Center: Dual Identity Tag */}
        <div className="text-[11px] font-mono text-neutral-400 tracking-widest uppercase">
          Macro Passion <span className="text-[#fef08a]">&amp;</span> Technical Precision
        </div>

        {/* Right: Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-[#fef08a] border border-[#fef08a]/20 text-neutral-300 hover:text-black transition-all text-xs font-mono uppercase tracking-wider"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp
            size={13}
            className="group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </button>
      </div>
    </footer>
  );
}

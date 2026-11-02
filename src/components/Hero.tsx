import React from "react";
import { ArrowDown, Focus, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { brand, photographer } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex flex-col justify-center items-center text-center px-6 sm:px-8 lg:px-12 pt-28 pb-16 overflow-hidden"
    >
      {/* Light-yellow ambient glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fef08a]/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-400/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern with light yellow mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#fef08a]/25 bg-[#fef08a]/[0.05] backdrop-blur-md mb-8 text-[11px] font-medium tracking-[0.22em] uppercase text-[#fef08a]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fef08a] shadow-[0_0_8px_#fef08a] animate-ping" />
          <span>{photographer.role}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-100 max-w-4xl leading-[1.08] mb-6">
          Revealing the{" "}
          <span className="font-serif italic text-[#fef08a] font-normal drop-shadow-[0_0_25px_rgba(254,240,138,0.2)]">
            unseen universe
          </span>{" "}
          in millimetric light.
        </h1>

        {/* Bio Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-10">
          <span className="text-neutral-200 font-normal">Macro photographer by passion, a Software Project Manager by profession.</span>{" "}
          Exploring the delicate architecture of living insects, surface-tension dewdrops, and organic geometry.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#work"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#fef08a] text-[#080808] font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#fef9c3] hover:scale-[1.02] shadow-[0_0_30px_rgba(254,240,138,0.3)]"
          >
            <span>Explore Macro Works</span>
            <ArrowDown
              size={14}
              className="group-hover:translate-y-0.5 transition-transform duration-300"
            />
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.03] text-neutral-300 hover:text-[#fef08a] border border-white/10 hover:border-[#fef08a]/30 hover:bg-[#fef08a]/[0.05] font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300"
          >
            <Focus size={13} className="text-[#fef08a]" />
            <span>Meet the Photographer</span>
          </a>
        </div>

        {/* Technical Macro Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] w-full max-w-2xl flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-mono">
          <span className="text-neutral-300">1:1 – 5:1 Magnification</span>
          <span className="text-[#fef08a]">·</span>
          <span className="text-neutral-300">In-Field Focus Stacks</span>
          <span className="text-[#fef08a]">·</span>
          <span className="text-neutral-300">100% Ethical Wildlife</span>
        </div>
      </div>
    </section>
  );
}

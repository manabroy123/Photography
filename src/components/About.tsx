import React from "react";
import Image from "next/image";
import { Aperture, Briefcase, Camera, Compass, Focus, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { photographer } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 bg-[#0d0d0d]/80 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column: Manab Roy Field Expedition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-neutral-950 border border-[#fef08a]/20 shadow-[0_15px_40px_rgba(0,0,0,0.8)] group">
              <Image
                src={photographer.expeditionPhoto}
                alt="Manab Roy on field expedition"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#fef08a] text-black text-[10px] font-mono uppercase tracking-[0.2em] font-semibold mb-2">
                  <Camera size={11} />
                  <span>Field Expedition</span>
                </div>
                <h4 className="text-base font-medium text-white">
                  {photographer.name}
                </h4>
                <p className="text-xs font-light text-neutral-300">
                  On location with custom macro diffuser rig &amp; 2X optical setup
                </p>
              </div>
            </div>

            {/* Dual Identity Badge */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded bg-white/[0.02] border border-[#fef08a]/15 flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#fef08a]">Passion</span>
                <span className="text-neutral-200 mt-1 font-sans font-light">Extreme Macro Photographer</span>
              </div>
              <div className="p-3.5 rounded bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">Profession</span>
                <span className="text-neutral-200 mt-1 font-sans font-light">Software Project Manager</span>
              </div>
            </div>
          </div>

          {/* Statement & Gear Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header Tag */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#fef08a] font-mono mb-3">
              <span>The Photographer</span>
              <span>//</span>
              <span>Dual Pursuit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
              Engineering precision meets the{" "}
              <span className="font-serif italic text-[#fef08a]">microscopic wild</span>.
            </h2>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-neutral-300 font-light text-base leading-relaxed mb-10">
              {photographer.bioLong.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Core Philosophy Triad */}
            <div className="mb-10 space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#fef08a] font-mono mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-[#fef08a]" />
                <span>Ethos &amp; Approach</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {photographer.philosophyPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded bg-[#121212] border border-white/[0.06] hover:border-[#fef08a]/30 transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#fef08a] mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#fef08a] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 font-light leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gear Specifications Box */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#fef08a] font-mono mb-4 flex items-center gap-2">
                <Aperture size={14} className="text-[#fef08a]" />
                <span>Specialized Field Equipment</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {photographer.gear.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded bg-white/[0.02] border border-white/[0.06] hover:border-[#fef08a]/20 transition-colors"
                  >
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#fef08a] mb-1">
                      {item.category}
                    </div>
                    <div className="text-xs text-neutral-300 font-light">
                      {item.items}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Eye, Focus, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, PhotoItem } from "@/data/portfolioData";
import LightboxModal from "./LightboxModal";

export default function Gallery() {
  const { showcasePhotos, archivePhotos } = PORTFOLIO_DATA;
  const allPhotos = [...showcasePhotos, ...archivePhotos];

  const [activeFilter, setActiveFilter] = useState<string>("Showcase");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filterTabs = [
    { label: "Showcase (6)", value: "Showcase" },
    { label: "Arthropods", value: "Arthropods" },
    { label: "Dew & Optics", value: "Dew & Surface Tension" },
    { label: "Botanical Geometry", value: "Botanical Geometry" },
    { label: "Gastropods & Reptiles", value: "Gastropods & Reptiles" },
    { label: "Full Archive (11)", value: "All" },
  ];

  let displayPhotos: PhotoItem[] = [];
  if (activeFilter === "Showcase") {
    displayPhotos = showcasePhotos;
  } else if (activeFilter === "All") {
    displayPhotos = allPhotos;
  } else {
    displayPhotos = allPhotos.filter((p) => p.category === activeFilter);
  }

  const handleOpenLightbox = (photoId: string) => {
    const index = displayPhotos.findIndex((p) => p.id === photoId);
    if (index !== -1) {
      setSelectedPhotoIndex(index);
    }
  };

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % displayPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + displayPhotos.length) % displayPhotos.length);
    }
  };

  return (
    <section id="work" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#fef08a] font-mono mb-2">
            <span>Extreme Macro Archive</span>
            <span>//</span>
            <span>1:1 – 5:1 Optics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Curated Plates &amp; Specimen Studies
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-200 whitespace-nowrap ${
                activeFilter === tab.value
                  ? "bg-[#fef08a] text-[#080808] font-medium shadow-[0_0_15px_rgba(254,240,138,0.25)]"
                  : "bg-white/[0.03] text-neutral-400 hover:text-[#fef08a] hover:bg-[#fef08a]/[0.08] border border-white/[0.06]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => handleOpenLightbox(photo.id)}
            className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#111111] border border-white/[0.06] hover:border-[#fef08a]/40 transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(254,240,138,0.08)]"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Magnification Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#080808]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#fef08a]/20 text-[#fef08a]">
                  {photo.magnification}
                </span>
                <span className="flex items-center gap-1.5 bg-[#080808]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-neutral-300 group-hover:text-white group-hover:border-[#fef08a]/30">
                  <Eye size={12} className="text-[#fef08a]" />
                  <span>Inspect</span>
                </span>
              </div>

              {/* Bottom Caption Card */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end transform transition-transform duration-300">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#fef08a] font-mono mb-1.5">
                  <Focus size={11} className="text-[#fef08a]" />
                  <span>{photo.subject}</span>
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-light tracking-tight text-white group-hover:text-[#fef9c3] transition-colors">
                    {photo.title}
                  </h3>
                  <div className="p-2 rounded-full bg-[#fef08a]/10 border border-[#fef08a]/20 text-[#fef08a] opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300 shrink-0">
                    <Maximize2 size={13} />
                  </div>
                </div>

                <div className="mt-2 text-xs text-neutral-400 font-light flex items-center justify-between">
                  <span className="text-neutral-300">{photo.category}</span>
                  <span className="font-mono text-[11px] text-neutral-400">{photo.settings.split("·")[0]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid Footnote */}
      <div className="mt-12 text-center text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
        All specimens photographed live in-situ · Focus bracketing done in wild natural light
      </div>

      {/* Lightbox Component */}
      <LightboxModal
        photo={selectedPhotoIndex !== null ? displayPhotos[selectedPhotoIndex] : null}
        currentIndex={selectedPhotoIndex !== null ? selectedPhotoIndex : 0}
        totalPhotos={displayPhotos.length}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}

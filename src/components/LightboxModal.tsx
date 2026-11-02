"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Sliders, MapPin, Camera, Sparkles, Focus } from "lucide-react";
import { PhotoItem } from "@/data/portfolioData";

interface LightboxModalProps {
  photo: PhotoItem | null;
  currentIndex: number;
  totalPhotos: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function LightboxModal({
  photo,
  currentIndex,
  totalPhotos,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Top Bar with Image Counter & Close Button */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.2em] text-[#fef08a]">
            {String(currentIndex + 1).padStart(2, "0")} / {String(totalPhotos).padStart(2, "0")}
          </span>
          <span className="text-neutral-700">·</span>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-medium">
            {photo.category}
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#fef08a]/10 text-[#fef08a] border border-[#fef08a]/20">
            {photo.magnification}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#fef08a] hover:text-black text-neutral-300 transition-all duration-200"
        >
          <X size={20} />
        </button>
      </div>

      {/* Prev Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-[#fef08a]/20 hover:bg-[#fef08a] text-neutral-300 hover:text-black transition-all duration-200 hover:scale-110 shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Next image"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-[#fef08a]/20 hover:bg-[#fef08a] text-neutral-300 hover:text-black transition-all duration-200 hover:scale-110 shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content Container */}
      <div
        className="relative max-w-6xl w-full h-[85vh] mx-auto px-4 sm:px-12 flex flex-col lg:flex-row items-center justify-center gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Macro Image Display */}
        <div className="relative w-full h-[58vh] lg:h-full lg:flex-1 rounded-sm overflow-hidden bg-neutral-950 border border-[#fef08a]/20 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            sizes="(max-width: 1024px) 100vw, 75vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Sidebar Metadata & Exif Information */}
        <div className="w-full lg:w-84 flex flex-col justify-between text-left bg-[#101010]/95 border border-[#fef08a]/20 rounded-lg p-6 lg:h-auto max-h-[80vh] overflow-y-auto shadow-2xl">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#fef08a] font-mono mb-2">
              <Focus size={13} className="text-[#fef08a]" />
              <span>{photo.subject}</span>
              <span>·</span>
              <span>{photo.year}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white mb-3">
              {photo.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
              {photo.description}
            </p>
          </div>

          {/* Technical Exif Specifications */}
          <div className="pt-4 border-t border-white/10 space-y-2.5 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#fef08a] font-sans font-semibold">
              Macro Optical Specs
            </div>

            <div className="flex items-start gap-2 text-neutral-200">
              <Camera size={14} className="mt-0.5 text-[#fef08a] shrink-0" />
              <span>{photo.camera}</span>
            </div>

            <div className="text-neutral-400 pl-5 text-[11px]">
              Lens: <span className="text-neutral-200">{photo.lens}</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-300 pl-5 text-[11px] bg-[#fef08a]/[0.06] p-2 rounded border border-[#fef08a]/20">
              <Sliders size={12} className="text-[#fef08a] shrink-0" />
              <span>{photo.settings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

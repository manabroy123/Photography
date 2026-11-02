"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, Instagram, Twitter, Camera, ArrowRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { photographer } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Print Acquisition / Archival Licensing",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [confirmedInquiryId, setConfirmedInquiryId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setConfirmedInquiryId(data.inquiryId || `INQ-${Date.now().toString().slice(-6)}`);
      setStatus("success");
    } catch (err: any) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or email directly.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Print Acquisition / Archival Licensing",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
    setConfirmedInquiryId("");
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Contact Info Side */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#fef08a] font-mono mb-2">
              <span>Correspondence</span>
              <span>//</span>
              <span>Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
              Connect with{" "}
              <span className="font-serif italic text-[#fef08a]">Manab Roy</span>.
            </h2>

            <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-8">
              Open for fine-art macro print licensing, publication assignments, speaking engagements on macro field technique, and naturalist collaborations.
            </p>

            {/* Badges / Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-4 rounded bg-[#111111] border border-[#fef08a]/15 hover:border-[#fef08a]/30 transition-colors">
                <Mail size={18} className="text-[#fef08a] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#fef08a] block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${photographer.socials.email}`}
                    className="text-sm text-neutral-200 hover:text-[#fef08a] transition-colors"
                  >
                    {photographer.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded bg-[#111111] border border-white/[0.08] hover:border-white/20 transition-colors">
                <MapPin size={18} className="text-[#fef08a] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Base &amp; Field Range
                  </span>
                  <span className="text-sm text-neutral-200">
                    {photographer.location}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded bg-[#111111] border border-white/[0.08]">
                <Clock size={18} className="text-[#fef08a] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Response Timeline
                  </span>
                  <span className="text-sm text-neutral-300">
                    Typically within 24 to 48 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Badges */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#fef08a] block mb-3">
              Social Portfolios
            </span>
            <div className="flex items-center gap-3">
              <a
                href={photographer.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded bg-white/[0.03] border border-white/[0.08] hover:border-[#fef08a]/40 text-xs text-neutral-300 hover:text-[#fef08a] transition-all"
              >
                <Instagram size={14} />
                <span>Instagram</span>
              </a>
              <a
                href={photographer.socials.unsplash}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded bg-white/[0.03] border border-white/[0.08] hover:border-[#fef08a]/40 text-xs text-neutral-300 hover:text-[#fef08a] transition-all"
              >
                <Camera size={14} />
                <span>Unsplash</span>
              </a>
              <a
                href={photographer.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded bg-white/[0.03] border border-white/[0.08] hover:border-[#fef08a]/40 text-xs text-neutral-300 hover:text-[#fef08a] transition-all"
              >
                <Twitter size={14} />
                <span>X / Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Operational Contact Form Side */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-lg bg-[#111111]/95 border border-[#fef08a]/20 backdrop-blur-md relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Top decorative light-yellow line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fef08a]/60 to-transparent" />

            {status === "success" ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#fef08a]/10 border border-[#fef08a]/40 flex items-center justify-center text-[#fef08a] mb-6 shadow-[0_0_20px_rgba(254,240,138,0.2)]">
                  <CheckCircle2 size={34} />
                </div>
                <div className="inline-block px-3 py-1 rounded bg-[#fef08a]/10 text-[#fef08a] font-mono text-xs uppercase tracking-wider mb-3">
                  Reference: {confirmedInquiryId}
                </div>
                <h3 className="text-2xl font-light tracking-tight text-white mb-2">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-neutral-300 max-w-md font-light leading-relaxed mb-8">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message regarding &ldquo;{formData.subject}&rdquo; has been received by Manab Roy.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#fef08a] text-black text-xs uppercase tracking-wider font-medium hover:bg-[#fef9c3] transition-colors shadow-md"
                >
                  <span>Transmit Another Inquiry</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-light text-white mb-1">
                    Operational Inquiry Dispatch
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Direct communication pipeline to Manab Roy. Inquiries are processed and acknowledged via email.
                  </p>
                </div>

                {status === "error" && errorMessage && (
                  <div className="p-3.5 rounded bg-red-950/40 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-200">
                    <AlertCircle size={16} className="text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#fef08a] block"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. David Attenborough"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#0a0a0a] border border-white/[0.08] focus:border-[#fef08a] focus:outline-none focus:ring-1 focus:ring-[#fef08a] text-sm text-white placeholder-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#fef08a] block"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="david@bbc.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#0a0a0a] border border-white/[0.08] focus:border-[#fef08a] focus:outline-none focus:ring-1 focus:ring-[#fef08a] text-sm text-white placeholder-neutral-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#fef08a] block"
                  >
                    Nature of Inquiry
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#0a0a0a] border border-white/[0.08] focus:border-[#fef08a] focus:outline-none focus:ring-1 focus:ring-[#fef08a] text-sm text-white transition-colors"
                  >
                    <option value="Print Acquisition / Archival Licensing">Fine Art Print Acquisition / Licensing</option>
                    <option value="Natural History Publishing">Natural History Publication / Editorial</option>
                    <option value="Macro Workshop & Speaking">Macro Workshop or Keynote Speaking</option>
                    <option value="Field Expedition Collaboration">Field Expedition Collaboration</option>
                    <option value="General Correspondence">General Correspondence</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#fef08a] block"
                  >
                    Inquiry Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Specify target specimen plates, dimensions, licensing scope, or collaboration timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#0a0a0a] border border-white/[0.08] focus:border-[#fef08a] focus:outline-none focus:ring-1 focus:ring-[#fef08a] text-sm text-white placeholder-neutral-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#fef08a] text-black font-medium text-xs uppercase tracking-[0.18em] transition-all hover:bg-[#fef9c3] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(254,240,138,0.25)] hover:shadow-[0_0_30px_rgba(254,240,138,0.4)]"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Dispatching Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { StarCanvas } from './StarCanvas';
import { HeroCenterVisual } from './HeroCenterVisual';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between items-center hero-gradient text-white overflow-hidden select-none"
    >
      {/* Dynamic Star Field Canvas */}
      <StarCanvas density={160} interactive={true} />

      {/* Top spacer for navigation */}
      <div className="w-full h-16 sm:h-20" />

      {/* Center content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto py-8">
        {/* Original Bespoke Center Visual: AI Constellation Orb */}
        <div className="mb-4 sm:mb-6">
          <HeroCenterVisual />
        </div>

        {/* Highlighted Name Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/40 shadow-[0_0_25px_rgba(254,208,73,0.25)] mb-3 sm:mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-amber-200 uppercase font-semibold">
            PORTFOLIO OF
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Prominently Highlighted Name */}
        <div className="relative mb-3 sm:mb-4">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white drop-shadow-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-100 to-amber-300 font-semibold drop-shadow-[0_0_40px_rgba(254,208,73,0.35)]">
              Sai Yaswitha
            </span>
          </h1>
        </div>

        {/* Craft Statement Heading */}
        <p className="font-serif text-lg sm:text-2xl md:text-3xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6">
          Building intelligent systems with <span className="italic text-amber-200 font-normal">AI</span>,{' '}
          <span className="italic text-rose-200 font-normal">algorithms</span> &{' '}
          <span className="italic text-indigo-200 font-normal">full-stack rigor</span>
        </p>

        {/* Roles Subtitle */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm tracking-widest text-white/80 font-mono uppercase mb-8 sm:mb-10">
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">AI/ML ENGINEER</span>
          <span className="text-amber-300">•</span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">FULL-STACK DEVELOPER</span>
        </div>

        {/* Yellow CTA Button - matching reference screenshot */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-amber-400/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300" />
          <button
            onClick={onExplore}
            className="relative px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-sans font-semibold text-slate-900 text-sm sm:text-base bg-[#FED049] hover:bg-[#ffe066] active:scale-95 transition-all duration-300 shadow-[0_10px_25px_rgba(254,208,73,0.35)] hover:shadow-[0_15px_35px_rgba(254,208,73,0.5)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-300/60"
          >
            <span>Explore Work</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 pb-6 sm:pb-8 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={onExplore}
          className="flex flex-col items-center gap-1.5 text-[11px] font-mono tracking-widest text-white/80 uppercase cursor-pointer hover:text-white"
          aria-label="Scroll to explore projects"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-200" />
        </button>
      </div>
    </section>
  );
};

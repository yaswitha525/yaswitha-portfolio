import React from 'react';
import { GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-300 uppercase mb-2">
          <span>02</span>
          <span>•</span>
          <span>Background & Education</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Driven by the intersection of <span className="italic text-amber-200">machine intelligence</span> and{' '}
          <span className="italic text-rose-200">software engineering</span>
        </h2>
      </div>

      {/* Education Card */}
      <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 sm:p-8 space-y-6 hover:border-white/30 transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Higher Education</span>
          </span>
          <span className="text-xs font-mono text-amber-300 font-semibold px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/20">
            CGPA : 9.0 / 10.0
          </span>
        </div>

        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
            Shri Vishnu Engineering College for Women
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-mono">
            Affiliated with JNTUK • 2023 — 2027
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <div className="text-xs font-mono text-amber-200/90 uppercase tracking-wider">
            Degree & Specialization
          </div>
          <div className="text-base sm:text-lg font-medium text-white">
            B.Tech in Artificial Intelligence and Machine Learning (AI & ML)
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
            Rigorous foundational training across Data Structures & Algorithms, Object-Oriented Programming,
            Operating Systems, Deep Learning, Computer Vision, and Distributed Web Engineering.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-mono text-slate-300">
          <span className="px-3 py-1.5 rounded-md bg-white/10 border border-white/10">SAEINDIA Member</span>
          <span className="px-3 py-1.5 rounded-md bg-white/10 border border-white/10">Makethon Finalist</span>
          <span className="px-3 py-1.5 rounded-md bg-white/10 border border-white/10">Bhimavaram, AP</span>
        </div>
      </div>
    </section>
  );
};

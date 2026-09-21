import React, { useState } from 'react';
import { Mail, Copy, Check, Sparkles, ArrowUpRight, ArrowUp, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './BrandIcons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'yaswithadandamudi@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 55,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#FED049', '#818cf8', '#f472b6', '#ffffff'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="space-y-16 pt-6">
      {/* Contact Banner Card */}
      <div className="relative rounded-3xl border border-white/20 bg-gradient-to-b from-[#3a2769]/90 via-[#2f1f58]/90 to-[#1f163d]/95 backdrop-blur-2xl p-8 sm:p-12 md:p-16 text-center space-y-8 shadow-2xl overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Opportunities & Collaborations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
            Let's build something <span className="italic text-amber-300">intelligent</span>.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
            Whether you're interested in full-stack architecture, machine learning models, or software engineering solutions, my inbox is always open.
          </p>

          {/* Interested Job Roles Callout Box */}
          <div className="max-w-2xl mx-auto mt-6 p-5 sm:p-6 rounded-2xl bg-white/[0.08] border border-amber-300/30 backdrop-blur-md text-center space-y-3 shadow-lg">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-300 font-semibold flex items-center justify-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Roles I Am Actively Open & Seeking</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-200 font-medium text-xs sm:text-sm shadow-sm">
                Full Stack Developer
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 font-medium text-xs sm:text-sm shadow-sm">
                AI/ML Engineer
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-medium text-xs sm:text-sm shadow-sm">
                Software Developer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed pt-1">
              I am actively open for these job roles and ready to create high impact. You can reach out directly or contact me anytime!
            </p>
          </div>
        </div>

        {/* Action Buttons: Direct Email & Copy */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${email}`}
            className="px-8 py-3.5 rounded-full font-sans font-semibold text-slate-900 bg-[#FED049] hover:bg-[#ffe066] transition-all duration-300 shadow-[0_10px_25px_rgba(254,208,73,0.35)] hover:shadow-[0_15px_35px_rgba(254,208,73,0.5)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-900" />
            <span>Send An Email</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-300" />
                <span>Copy: {email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Row */}
        <div className="relative z-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-300">
          <a
            href="https://github.com/yaswitha525"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white hover:underline transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-amber-300" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://www.linkedin.com/in/sai-yaswitha-dandamudi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white hover:underline transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-amber-300" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://leetcode.com/u/yaswitha525"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white hover:underline transition-colors"
          >
            <LeetcodeIcon className="w-4 h-4 text-amber-300" />
            <span>LeetCode</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Minimal Editorial Footer */}
      <footer className="pt-8 pb-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-left">
          <span className="font-serif text-sm font-medium text-white">SAI YASWITHA</span>
          <span className="hidden sm:inline">•</span>
          <span>AI/ML ENGINEER & FULL-STACK DEVELOPER</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/yaswitha525" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sai-yaswitha-dandamudi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/yaswitha525" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LeetCode
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ml-2"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </section>
  );
};

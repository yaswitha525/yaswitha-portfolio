import React from 'react';
import { Trophy, Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  rank: string;
  organizer: string;
  level: string;
  description: string;
}

interface Certification {
  title: string;
  issuer: string;
  skills: string;
  badgeText: string;
}

const achievements: Achievement[] = [
  {
    title: 'ABAJA 2025',
    rank: 'All India Rank 6',
    organizer: 'SAEINDIA',
    level: 'National Level',
    description:
      'Competed in the prestigious national-level engineering design and technology competition against top teams nationwide.',
  },
  {
    title: 'Makethon Hackathon',
    rank: 'Top 10 Finalist',
    organizer: 'Shri Vishnu Engineering College',
    level: 'College-Level',
    description:
      'Engineered rapid prototypes addressing real-world problem statements within intense hackathon constraints.',
  },
];

const certifications: Certification[] = [
  {
    title: 'Oracle Agentic AI Certified Foundations Associate',
    issuer: 'Oracle',
    skills: 'Agentic AI architectures, multi-agent frameworks, tool calling, and automated workflows',
    badgeText: 'Oracle Certified',
  },
  {
    title: 'AI/ML Internship Certification',
    issuer: 'Infosys Springboard',
    skills: 'Developed deep-learning AI music generation system using Transformers and MusicGen',
    badgeText: 'Infosys Springboard',
  },
  {
    title: 'Artificial Intelligence Primer Certification',
    issuer: 'Industry Recognized',
    skills: 'Core AI fundamentals, deep learning neural models, generative AI architectures',
    badgeText: 'Foundational AI',
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-300 uppercase mb-2">
          <span>05</span>
          <span>•</span>
          <span>Honors & Certifications</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Recognized for <span className="italic text-amber-200">excellence</span> &{' '}
          <span className="italic text-rose-200">continuous learning</span>
        </h2>
      </div>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="group rounded-3xl border border-amber-400/20 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent backdrop-blur-xl p-6 sm:p-8 space-y-4 hover:border-amber-400/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-400/10 text-amber-200 border border-amber-400/20 uppercase tracking-wider">
                {ach.level}
              </span>
            </div>

            <div>
              <div className="text-xs font-mono text-amber-300 uppercase tracking-widest">{ach.organizer}</div>
              <h3 className="font-serif text-2xl text-white font-medium mt-1">{ach.title}</h3>
              <div className="text-sm font-sans font-semibold text-amber-200 mt-1">{ach.rank}</div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 font-sans">
              {ach.description}
            </p>
          </div>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="space-y-4 pt-2">
        <h3 className="font-serif text-xl sm:text-2xl text-white font-normal flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-400" />
          <span>Professional Credentials</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 space-y-3 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {cert.badgeText}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                </div>
                <h4 className="font-serif text-base text-white font-medium leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  {cert.skills}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-white/50">
                Verified Credential
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

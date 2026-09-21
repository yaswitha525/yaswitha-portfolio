import React from 'react';
import { StarCanvas } from './StarCanvas';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface SideNavCardProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'projects', label: 'Projects', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'experience', label: 'Experience', number: '03' },
  { id: 'skills', label: 'Skills', number: '04' },
  { id: 'achievements', label: 'Honors', number: '05' },
  { id: 'beyond-code', label: 'Hobbies', number: '06' },
  { id: 'contact', label: 'Contact', number: '07' },
];

export const SideNavCard: React.FC<SideNavCardProps> = ({ activeSection, onNavigate }) => {
  return (
    <aside className="relative w-full rounded-3xl sidebar-gradient p-6 sm:p-7 text-white shadow-xl overflow-hidden border border-white/20 select-none">
      {/* Inner twinkling star canvas */}
      <StarCanvas density={40} interactive={false} className="opacity-70" />

      <div className="relative z-10 flex flex-col justify-between h-full min-h-[480px]">
        {/* Header matching screenshot 2 */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
                Sai Yaswitha
              </h2>
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-200/90 mt-1">
                B.Tech AIML • SVECW
              </div>
            </div>

            {/* Status dot / quote icon */}
            <div className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            </div>
          </div>

          <p className="text-xs text-white/80 leading-relaxed font-sans mb-6">
            Building intelligent AI agents, computer vision pipelines, and full-stack systems.
          </p>

          {/* Navigation items matching screenshot 2 pill buttons */}
          <nav className="flex flex-col gap-2.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 font-semibold shadow-md translate-x-1'
                      : 'bg-white/15 text-white/90 hover:bg-white/25 border border-white/10'
                  }`}
                >
                  <span className="capitalize text-sm font-sans font-medium">{item.label}</span>
                  <span className={`text-[11px] ${isActive ? 'text-indigo-600' : 'text-white/60'}`}>
                    {item.number}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom indicator */}
        <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/70">
          <span>CGPA: 9.0 / 10.0</span>
          <span className="flex items-center gap-1 text-amber-200">
            Open to Work <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </span>
        </div>
      </div>
    </aside>
  );
};

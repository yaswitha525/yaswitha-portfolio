import React, { useState } from 'react';
import { Sparkles, Terminal, Code2, Database, BrainCircuit, Wrench, Layers } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  items: { name: string; tag?: string }[];
}

const categories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    items: [
      { name: 'PyTorch', tag: 'Deep Learning' },
      { name: 'YOLOv8', tag: 'Computer Vision' },
      { name: 'OpenCV', tag: 'Vision Pipeline' },
      { name: 'Transformers', tag: 'NLP & Audio' },
      { name: 'Large Language Models (LLMs)', tag: 'GenAI' },
      { name: 'AI Agents', tag: 'Autonomous' },
      { name: 'Google ADK', tag: 'Agent Kit' },
      { name: 'MCP Architecture', tag: 'Protocol' },
      { name: 'RapidFuzz Heuristics', tag: 'NLP/Matching' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    items: [
      { name: 'Python', tag: 'Core' },
      { name: 'Java', tag: 'Core' },
      { name: 'SQL', tag: 'Queries' },
      { name: 'JavaScript (ES6+)', tag: 'Web' },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Code2,
    items: [
      { name: 'React.js', tag: 'Frontend' },
      { name: 'Vite', tag: 'Build' },
      { name: 'Node.js (v22)', tag: 'Runtime' },
      { name: 'REST APIs', tag: 'Endpoints' },
      { name: 'JWT Authentication', tag: 'Security' },
    ],
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    items: [
      { name: 'PostgreSQL 16', tag: 'Relational' },
      { name: 'MySQL', tag: 'Relational' },
      { name: 'MongoDB', tag: 'Document' },
    ],
  },
  {
    title: 'Core Computer Science',
    icon: Layers,
    items: [
      { name: 'Data Structures & Algorithms', tag: 'Foundations' },
      { name: 'Object-Oriented Programming (OOP)', tag: 'Paradigm' },
      { name: 'Operating Systems', tag: 'Systems' },
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    icon: Wrench,
    items: [
      { name: 'Docker & Docker Compose', tag: 'Containers' },
      { name: 'BullMQ', tag: 'Async Jobs' },
      { name: 'GitHub', tag: 'Version Control' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'Streamlit', tag: 'ML Apps' },
      { name: 'Vitest & Supertest', tag: 'Testing' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-300 uppercase mb-2">
          <span>04</span>
          <span>•</span>
          <span>Technical Stack</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          A balanced foundation in <span className="italic text-amber-200">algorithms</span>,{' '}
          <span className="italic text-rose-200">models</span> & <span className="italic text-indigo-200">web</span>
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mt-2 font-sans">
          Curated directly from verified course work, technical competitions, and production repos.
        </p>
      </div>

      {/* Interactive Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 sm:p-7 space-y-4 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="p-2 rounded-xl bg-white/10 text-amber-300">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium">{category.title}</h3>
              </div>

              {/* Skills typography cloud */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    onMouseEnter={() => setHoveredSkill(item.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`group px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-200 flex items-center gap-1.5 cursor-default ${
                      hoveredSkill === item.name
                        ? 'bg-amber-300 text-slate-900 border-amber-300 shadow-md scale-105'
                        : 'bg-white/5 text-white/90 border-white/15 hover:bg-white/15 hover:border-white/30'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.tag && (
                      <span
                        className={`text-[9px] uppercase px-1 rounded ${
                          hoveredSkill === item.name
                            ? 'bg-slate-900/20 text-slate-900 font-semibold'
                            : 'bg-white/10 text-white/60'
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

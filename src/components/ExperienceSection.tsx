import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface Experience {
  number: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  points: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    number: '01',
    company: 'Infosys Springboard',
    role: 'AI/ML Intern — Generative Music Systems',
    location: 'Virtual',
    duration: 'Nov 2025 — Jan 2026',
    description:
      'Engineered an end-to-end deep learning system generating stylized instrumental music from natural language prompts.',
    points: [
      'Developed an AI music generation application using Python, MusicGen, and Transformers.',
      'Integrated LLM-based prompt processing to transform freeform natural-language descriptions into rich acoustic embeddings.',
      'Built an interactive Streamlit web interface with real-time waveform visualization and playback.',
    ],
    skills: ['Python', 'MusicGen', 'Transformers', 'Streamlit', 'Audio Generation', 'Deep Learning'],
  },
  {
    number: '02',
    company: 'SmartBridge Educational Services Pvt. Ltd.',
    role: 'Full-Stack Developer Intern',
    location: 'Virtual',
    duration: 'Jun 2025 — Aug 2025',
    description:
      'Built production-ready web applications using the MERN ecosystem with secure token-based user management.',
    points: [
      'Developed a full-stack application utilizing the MERN stack (MongoDB, Express, React.js, Node.js).',
      'Implemented robust REST APIs, JWT authentication, and validated CRUD operations for secure multi-tenant data storage.',
      'Built responsive React.js client interfaces with high-performance state management and seamless backend integration.',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MERN', 'REST APIs', 'JWT', 'CRUD Architecture'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-300 uppercase mb-2">
          <span>03</span>
          <span>•</span>
          <span>Professional Experience</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Internships & real-world <span className="italic text-amber-200">execution</span>
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.number}
            className="group rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 sm:p-8 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 space-y-6"
          >
            {/* Top metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-bold text-amber-300">{exp.number}</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">{exp.company}</h3>
                  <div className="text-xs font-mono text-amber-200/90">{exp.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>{exp.duration}</span>
                <span className="text-white/40">•</span>
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Bullet points */}
            <div className="space-y-2.5">
              {exp.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Skills used */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/15"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

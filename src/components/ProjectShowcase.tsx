import React from 'react';
import { Calendar } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 'ai-finance',
    title: 'AI Finance Controller',
    date: 'Oct 2025 - Jan 2026',
    description:
      'Autonomous 3-way reconciliation engine pairing bank statements, gateway settlements, and invoices with sub-cent precision. Uses fuzzy heuristics and grounded LLMs to diagnose fee shortfalls, timing delays, and eliminate financial discrepancy leakage.',
    image: '/assets/projects/ai_finance.jpg',
    imageAlt: 'Financial Accounting & Data Reconciliation System',
    technologies: ['FastAPI', 'Python', 'RapidFuzz', 'Pandas', 'React', 'LLMs'],
    githubUrl: 'https://github.com/yaswitha525/Ai-finance-controller',
  },
  {
    id: 'smart-stock',
    title: 'Smart Stock Watchlist API',
    date: 'Sep 2026',
    description:
      'Event-driven backend that highlights meaningful financial changes in watched equity assets since the user’s last snapshot. Features Redis caching, BullMQ async workers, stale snapshot detection, and live market data stream integration.',
    image: '/assets/projects/smart_stock.jpg',
    imageAlt: 'Stock Market Trading & Candlestick Intelligence Dashboard',
    technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
    githubUrl: 'https://github.com/yaswitha525/Smart-Stock-Watchlist',
  },
  {
    id: 'travelmate',
    title: 'TravelMate',
    date: '2025',
    description:
      'Autonomous multi-agent travel planner built with Google ADK and MCP. Coordinates specialized sub-agents for live flight monitoring, accommodation comparison, and curated itineraries with PII redaction and a human-in-the-loop approval gate.',
    image: '/assets/projects/travelmate.jpg',
    imageAlt: 'AI Travel Planning & Global Exploration Workspace',
    technologies: ['Google ADK', 'Python', 'AI Agents', 'MCP', 'LLMs', 'Streamlit'],
    githubUrl: 'https://github.com/yaswitha525/travel-mate',
  },
  {
    id: 'quickhire',
    title: 'QuickHire',
    date: '2025',
    description:
      'Full-stack on-demand service platform connecting customers with verified local service professionals. Features automated geo-dispatch under 10 seconds, dual customer/worker role portals, and a high-performance Prisma backend with JWT auth.',
    image: '/assets/projects/quickhire.jpg',
    imageAlt: 'Professional Home Services & Technician Dispatch',
    technologies: ['React', 'Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com/yaswitha525/quick_hire',
  },
  {
    id: 'traffic-violation',
    title: 'Traffic Violation Detection',
    date: '2024 - 2025',
    description:
      'Computer vision pipeline detecting helmetless riding, triple riding, and vehicle license plates in real time from surveillance feeds. Combines fine-tuned YOLOv8 (75% mAP@50) with OpenCV thresholding and an automated PDF citation generator.',
    image: '/assets/projects/traffic_violation.jpg',
    imageAlt: 'City Traffic Surveillance & Vehicle Computer Vision',
    technologies: ['YOLOv8', 'OpenCV', 'Python', 'Computer Vision', 'Streamlit'],
    githubUrl: 'https://github.com/yaswitha525/Traffic_Violation_Detection_System_prototype',
  },
  {
    id: 'ai-music',
    title: 'AI Music Generation',
    date: 'Nov 2025 - Jan 2026',
    description:
      'Deep-learning text-to-audio composition system developed at Infosys Springboard. Uses MusicGen and Transformers to synthesize stylized instrumental music from natural-language prompts, featuring an interactive Streamlit waveform interface.',
    image: '/assets/projects/ai_music.jpg',
    imageAlt: 'Digital Music Production Studio & Sound Synthesis',
    technologies: ['Python', 'MusicGen', 'Transformers', 'Deep Learning', 'Streamlit'],
    githubUrl: 'https://github.com/yaswitha525/ai_music_composition',
  },
];

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="space-y-12">
      {/* Section Header */}
      <div className="text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono tracking-widest text-amber-300 uppercase mb-2">
          <span>01</span>
          <span>•</span>
          <span>Featured Projects</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
          Featured <span className="italic text-amber-200">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 font-sans">
          Production-grade engineering systems, machine learning architectures, and full-stack platforms.
        </p>
      </div>

      {/* 2-Column Responsive Card Grid matching reference format */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-xl hover:border-white/30 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-950/40"
          >
            {/* Edge-to-edge top banner image */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-950/60">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer"
                title={`View ${project.title} on GitHub`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
              {/* Header: Title on Left, Date with Calendar Icon on Right */}
              <div className="flex items-center justify-between gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-tight hover:text-amber-200 transition-colors">
                    {project.title}
                  </h3>
                </a>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-400 shrink-0">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{project.date}</span>
                </div>
              </div>

              {/* Concise, impactful description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-white/85 hover:text-white border border-white/10 text-xs font-mono transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button matching reference */}
              <div className="pt-3 mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm w-fit"
                  title={`View ${project.title} on GitHub`}
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

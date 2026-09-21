import React from 'react';
import { X, Download, ExternalLink, Printer, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#1a142e] border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-white font-medium">Sai Yaswitha — Resume Overview</span>
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 transition-colors"
              title="Print"
              aria-label="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 transition-colors"
              title="Close"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm font-sans">
          {/* Header info */}
          <div className="text-center pb-4 border-b border-white/10 space-y-1.5">
            <h1 className="font-serif text-2xl sm:text-3xl text-white font-semibold">DANDAMUDI SAI YASWITHA</h1>
            <p className="text-xs font-mono text-amber-300">
              yaswithadandamudi@gmail.com
            </p>
            <div className="flex justify-center gap-4 text-xs font-mono text-slate-300 pt-1">
              <a href="https://www.linkedin.com/in/sai-yaswitha-dandamudi" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href="https://leetcode.com/u/yaswitha525" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                LeetCode
              </a>
              <span>•</span>
              <a href="https://github.com/yaswitha525" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-300 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-start">
              <div>
                <div className="font-medium text-white">Shri Vishnu Engineering College for Women under JNTUK</div>
                <div className="text-xs text-slate-300">B.Tech in Artificial Intelligence and Machine Learning</div>
              </div>
              <div className="text-right font-mono text-xs text-amber-300">
                <div>2023 — 2027</div>
                <div className="font-semibold">CGPA: 9.0</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-300 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </h2>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-medium text-white">Infosys Springboard (Virtual)</span>
                <span className="font-mono text-xs text-slate-400">Nov 2025 — Jan 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Developed an AI music generation application using Python, MusicGen, and Transformers.</li>
                <li>Integrated LLM-based prompt processing to generate music from natural-language inputs.</li>
                <li>Built a Streamlit interface for interactive music generation and audio playback.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-medium text-white">SmartBridge Educational Services Pvt. Ltd. (Virtual)</span>
                <span className="font-mono text-xs text-slate-400">Jun 2025 — Aug 2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                <li>Developed a full-stack application using the MERN stack with React.js and Node.js.</li>
                <li>Implemented REST APIs, JWT authentication, and CRUD operations for secure data management.</li>
                <li>Built responsive React.js interfaces and integrated them with backend services for seamless user interaction.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-300">Projects</h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="font-semibold text-white">AI Finance Controller — 3-Way Reconciliation & Root-Cause Explainer</div>
              <p>Razorpay Buildathon Track 04. FastAPI, RapidFuzz, Pandas, Decimal math, React 18. 100% ground-truth accuracy, 2,500+ recs/sec throughput, zero financial leakage.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="font-semibold text-white">Smart Stock Watchlist API — Event-Driven Delta Engine</div>
              <p>CODE 2026 Challenge. Node.js (v22), Express, TypeScript, PostgreSQL 16, Prisma, Redis 7, BullMQ, Docker Compose. Relative snapshot delta tracking & live market provider integration.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="font-semibold text-white">TravelMate — Multi-Agent AI Travel Planning System</div>
              <p>Google ADK, MCP tools, Secure Tool Calling, Human-in-the-loop, PII redaction, prompt injection detection.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="font-semibold text-white">QuickHire — On-Demand Service Booking Platform</div>
              <p>React (Vite), Node.js (Express, TypeScript), Prisma, JWT. Instant matching in &lt;10s, 30% booking latency reduction.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="font-semibold text-white">AI-Based Traffic Violation Detection System</div>
              <p>YOLOv8 (75% mAP@50 on 4 classes), OpenCV, EasyOCR license plate recognition, Streamlit PDF report generation.</p>
            </div>
          </div>

          {/* Achievements & Certs */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-300 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Achievements & Certifications</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
              <div>• <strong>ABAJA 2025:</strong> All India Rank 6 by SAEINDIA (National Level).</div>
              <div>• <strong>Makethon:</strong> Secured Top 10 position in college-level competition.</div>
              <div>• <strong>Oracle Agentic AI Certified Foundations Associate</strong></div>
              <div>• <strong>Artificial Intelligence Primer Certification</strong></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-white/10 bg-white/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

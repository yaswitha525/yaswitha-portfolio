import React, { useState, useEffect } from 'react';
import { Code2, FileText, Sparkles, ExternalLink, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './BrandIcons';

interface TopNavProps {
  onOpenResumeModal?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#382b6b]/60 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Minimal Monogram / Identity Badge */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-full"
          aria-label="Sai Yaswitha - Home"
        >
          {/* Rounded minimal badge inspired by reference screenshot 1 */}
          <div className="w-9 h-9 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/90 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-105 shadow-sm">
            <span className="font-serif font-semibold text-sm tracking-wider">SY</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-white/95 text-base sm:text-lg font-medium tracking-tight group-hover:text-amber-200 transition-colors">
              Sai Yaswitha
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-mono hidden sm:inline-block">
              AI/ML • Full-Stack
            </span>
          </div>
        </a>

        {/* Center navigation links for medium/large screens */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-white/80">
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-white transition-colors hover:scale-105 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-white transition-colors hover:scale-105 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="hover:text-white transition-colors hover:scale-105 cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="hover:text-white transition-colors hover:scale-105 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('beyond-code')}
            className="hover:text-white transition-colors hover:scale-105 cursor-pointer"
          >
            Hobbies
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors hover:scale-105 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Links & Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/yaswitha525"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/15 border border-transparent hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/sai-yaswitha-dandamudi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/15 border border-transparent hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://leetcode.com/u/yaswitha525"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/15 border border-transparent hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            title="LeetCode Profile"
            aria-label="LeetCode Profile"
          >
            <Code2 className="w-4 h-4" />
          </a>

          {/* Clean minimal pill inspired by "All Bookmarks" in reference screenshot */}
          <button
            onClick={onOpenResumeModal}
            className="ml-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/90 bg-white/12 border border-white/25 hover:bg-white/25 hover:border-white/40 transition-all duration-200 flex items-center gap-1.5 backdrop-blur-sm cursor-pointer shadow-sm hover:scale-102"
          >
            <FileText className="w-3.5 h-3.5 text-amber-300" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 rounded-lg text-white/90 hover:bg-white/15 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#2b2158]/95 backdrop-blur-xl border border-white/20 shadow-2xl text-white flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2.5 text-sm font-medium">
            <button
              onClick={() => scrollTo('projects')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              01 • Projects
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              02 • About Me
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              03 • Experience
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              04 • Technical Skills
            </button>
            <button
              onClick={() => scrollTo('beyond-code')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              05 • Hobbies
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              06 • Contact
            </button>
          </div>

          <div className="pt-3 border-t border-white/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/yaswitha525"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-yaswitha-dandamudi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/yaswitha525"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal?.();
              }}
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-300 text-slate-900"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

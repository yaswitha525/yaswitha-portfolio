import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { SideNavCard } from './components/SideNavCard';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { BeyondCodeSection } from './components/BeyondCodeSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('projects');
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Smooth scroll handler from Hero explore button
  const handleExplore = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Section Observer for active nav highlighting
  useEffect(() => {
    const sections = ['projects', 'about', 'experience', 'skills', 'achievements', 'beyond-code', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1b1236] text-slate-100 font-sans selection:bg-[#FED049] selection:text-[#1a1a1a]">
      {/* Top Floating Navigation */}
      <TopNav onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* 100vh Full-Screen Landing matching Reference Screenshot 1 */}
      <HeroSection onExplore={handleExplore} />

      {/* Main Content Area matching Reference Screenshot 2 & 3 */}
      <main id="main-content" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky SideNav Card inspired by Screenshot 2 */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <SideNavCard activeSection={activeSection} onNavigate={handleNavigate} />
          </div>

          {/* Right Column: Editorial Hero Banner & Content Sections */}
          <div className="lg:col-span-8 space-y-20">
            {/* Editorial Statement matching Screenshot 2 composition */}
            <div className="border-b border-white/10 pb-12 space-y-4">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] text-white font-normal leading-[1.18] tracking-tight">
                I bring ideas to life through{' '}
                <span className="inline-block px-3.5 py-0.5 my-1 rounded-xl bg-indigo-400/20 text-indigo-200 border border-indigo-300/30 italic">
                  intelligent systems
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                I use machine learning, agentic workflows, and modern web architecture to build and
                refine experiences from the ground up.
              </p>
            </div>

            {/* 01 Projects */}
            <ProjectShowcase />

            {/* 02 About */}
            <AboutSection />

            {/* 03 Experience */}
            <ExperienceSection />

            {/* 04 Skills */}
            <SkillsSection />

            {/* 05 Honors & Certifications */}
            <AchievementsSection />

            {/* 06 Fun / Beyond Code */}
            <BeyondCodeSection />

            {/* 07 Contact & Minimal Footer */}
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Verified Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </div>
  );
};

export default App;

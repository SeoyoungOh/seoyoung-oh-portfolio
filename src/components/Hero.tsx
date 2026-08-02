import React from 'react';
import { Mail, Linkedin, GraduationCap, ArrowDown, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { HeroProcessVisual } from './HeroProcessVisual';

export const Hero: React.FC = () => {
  const { hero, profile } = portfolioData;

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 border-b border-[#9091DF]/20"
      style={{
        minHeight: 'calc(100vh - 4rem)',
        background: `linear-gradient(90deg, rgba(251, 251, 255, 0.66) 0%, rgba(251, 251, 255, 0.46) 48%, rgba(251, 251, 255, 0.28) 100%), url("/images/hero-silk-background.jpg") center center / cover no-repeat`,
      }}
    >
      {/* Foreground Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start">
          
          {/* 1. Upper Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9091DF]/15 text-[#20243C] border border-[#9091DF]/40 mb-3 sm:mb-4 text-[10px] font-bold uppercase tracking-widest backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
            <span className="text-[#20243C] font-bold text-[10px]">{hero.eyebrow}</span>
          </div>

          {/* 2. Name Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-black text-[#20243C] leading-[0.92] tracking-[-0.04em] max-w-full lg:whitespace-nowrap mt-3 sm:mt-4 lg:mt-5 mb-7 sm:mb-9 lg:mb-11">
            {profile.name}
          </h1>

          {/* 3. Main Headline */}
          <div className="mb-5 sm:mb-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-[-0.035em] whitespace-pre-line"
              style={{ textShadow: '0 2px 14px rgba(32, 36, 60, 0.28)' }}
            >
              {hero.headline}
            </h2>
          </div>

          {/* 4. Core Supporting Statement (Quote) */}
          <div className="pl-4 border-l-3 sm:border-l-4 border-[#9091DF] py-0.5 mb-5 sm:mb-6 max-w-2xl">
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#20243C] italic leading-relaxed">
              {hero.supportingStatement}
            </p>
          </div>

          {/* 5. Short Professional Context (Explanatory paragraph) */}
          <p className="text-sm sm:text-base lg:text-lg font-normal text-[#626A7C] max-w-2xl mb-6 sm:mb-7 leading-relaxed">
            {hero.shortContext}
          </p>

          {/* 6. Main Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-7 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('work')}
              className="bg-[#20243C] hover:bg-[#9091DF] text-[#FBFBFF] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF]"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 text-[#A0A1F8]" />
            </button>

            <button
              onClick={() => scrollToSection('publications')}
              className="bg-[#B9E0FC]/40 hover:bg-[#B9E0FC] text-[#20243C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-[#A6C9E2] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF]"
            >
              <span>View Publications</span>
            </button>

            <a
              href={profile.cvUrl}
              download="Seoyoung_Oh_CV_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DFF8E1] hover:bg-[#C8DFCA] text-[#20243C] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-[#C8DFCA] transition-all flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#9091DF]"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* 7. CONNECT Row & Social Icons */}
          <div className="flex items-center gap-4 pt-5 sm:pt-6 border-t border-[#D9DDEE]/60 w-full max-w-xl">
            <span className="text-xs font-bold text-[#626A7C] uppercase tracking-wider">Connect:</span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg bg-[#FBFBFF] hover:bg-[#A0A1F8]/20 border border-[#D9DDEE] text-[#20243C] transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF]"
                aria-label="Send Email"
                title={`Email ${profile.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FBFBFF] hover:bg-[#A0A1F8]/20 border border-[#D9DDEE] text-[#20243C] transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF]"
                aria-label="Visit Seoyoung Oh’s LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.social.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FBFBFF] hover:bg-[#A0A1F8]/20 border border-[#D9DDEE] text-[#20243C] transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF]"
                aria-label="Google Scholar Profile"
              >
                <GraduationCap className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 8. Core Working Process Component */}
          <div id="core-working-process" className="mt-7 sm:mt-9 lg:mt-11 w-full max-w-none scroll-mt-24">
            <HeroProcessVisual />
          </div>

          {/* 9. Availability Statement */}
          <div className="mt-5 sm:mt-6 flex items-start gap-2 text-xs font-medium text-[#626A7C]">
            <span className="w-2 h-2 rounded-full bg-[#9091DF] mt-1 shrink-0" />
            <span>{profile.availability}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

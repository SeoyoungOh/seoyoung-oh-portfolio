import React from 'react';
import { Mail, Linkedin, Github, GraduationCap, ArrowDown, FileText } from 'lucide-react';
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
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#D9DDEE]/60 bg-[#FBFBFF] relative overflow-hidden">
      {/* Decorative Rotated Silk Background Layer (90° left rotation, uncropped full composition) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Soft Periwinkle / Lavender Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAE6FC]/60 via-[#F3EFFF]/40 to-[#FBFBFF]" />

        {/* 90° Rotated Counterclockwise Silk Image Container */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-multiply transition-opacity">
          {/* Main Full-Composition Rotated Silk Image using contain to prevent cropping */}
          <div className="relative w-full h-full flex items-center justify-center scale-110 sm:scale-100">
            <img
              src="/images/hero-silk-bg.svg"
              alt=""
              className="w-full h-full object-contain transform -rotate-90 origin-center filter brightness-95 contrast-105"
            />
          </div>
        </div>

        {/* Soft Vignette Overlay for Crisp Content Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFF] via-transparent to-[#FBFBFF]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBFBFF]/70 via-transparent to-[#FBFBFF]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Statement */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Upper Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6BAFA]/15 text-[#20243C] border border-[#9091DF]/50 mb-6 text-[10px] font-normal uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]" />
              <span className="text-[#20243C] font-normal text-[10px]">{hero.eyebrow}</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#20243C] tracking-tight mb-12 sm:mb-16 lg:mb-20">
              {profile.name}
            </h1>

            {/* Headline */}
            <div className="mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#626A7C] tracking-tight leading-tight whitespace-pre-line">
                {hero.headline}
              </p>
            </div>

            {/* Core Supporting Statement */}
            <div className="p-4 rounded-xl bg-[#B6BAFA]/15 border-l-4 border-[#9091DF] mb-6 max-w-2xl">
              <p className="text-base sm:text-lg font-semibold text-[#20243C] italic leading-relaxed">
                {hero.supportingStatement}
              </p>
            </div>

            {/* Short Professional Context */}
            <p className="text-base text-[#626A7C] max-w-xl mb-8 leading-relaxed font-normal">
              {hero.shortContext}
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
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
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#DFF8E1] hover:bg-[#C8DFCA] text-[#20243C] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-[#C8DFCA] transition-all flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#9091DF]"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Secondary Social & Email Icon Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#D9DDEE]/60 w-full max-w-xl">
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
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#FBFBFF] hover:bg-[#A0A1F8]/20 border border-[#D9DDEE] text-[#20243C] transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
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

            {/* Availability Statement */}
            <div className="mt-6 flex items-start gap-2 text-xs font-medium text-[#626A7C]">
              <span className="w-2 h-2 rounded-full bg-[#9091DF] mt-1 shrink-0" />
              <span>{profile.availability}</span>
            </div>

          </div>

          {/* Right Column: Interactive Process Visual */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <HeroProcessVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowUp, Mail, Linkedin, Github, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181A2D] text-[#FBFBFF] py-12 border-t border-[#D9DDEE]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Signature Line */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-lg font-bold text-[#FBFBFF] tracking-tight mb-1">
            {profile.name}
          </span>
          <span className="text-xs text-[#A6C9E2] font-medium mb-2">
            Medical AI · Reliable Evidence · Scientific Communication
          </span>
          <p className="text-xs font-serif italic text-[#DFF8E1]">
            “From problems to evidence. From evidence to meaning.”
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href={`mailto:${profile.email}`}
            className="p-2 rounded-lg bg-[#20243C] hover:bg-[#A0A1F8]/20 text-[#A0A1F8] transition-colors focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            aria-label="Email"
            title={profile.email}
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#20243C] hover:bg-[#A0A1F8]/20 text-[#A0A1F8] transition-colors focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#20243C] hover:bg-[#A0A1F8]/20 text-[#A0A1F8] transition-colors focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.social.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#20243C] hover:bg-[#A0A1F8]/20 text-[#A0A1F8] transition-colors focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            aria-label="Google Scholar"
          >
            <GraduationCap className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back To Top */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-[#626A7C]">
          <span>© {currentYear} {profile.name}. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#20243C] hover:bg-[#9091DF] text-[#FBFBFF] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            aria-label="Back to top"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

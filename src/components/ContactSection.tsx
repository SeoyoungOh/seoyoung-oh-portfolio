import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Linkedin, Github, GraduationCap, FileText, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { contact, profile } = portfolioData;

  return (
    <section id="contact" className="py-20 border-b border-[#D9DDEE]/60 bg-[#20243C] text-[#FBFBFF] relative overflow-hidden">
      {/* Background Subtle Contour */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 400" fill="none">
          <circle cx="800" cy="200" r="300" stroke="#A0A1F8" strokeWidth="2" strokeDasharray="6 6"/>
          <circle cx="800" cy="200" r="180" stroke="#B9E0FC" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center">
          
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8] block mb-3">
            GET IN TOUCH
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FBFBFF] tracking-tight mb-6 leading-tight">
            {contact.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#B9E0FC] leading-relaxed mb-10 max-w-2xl mx-auto">
            {contact.supportingText}
          </p>

          {/* Primary Email CTA Button */}
          <div className="mb-10">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 bg-[#A0A1F8] hover:bg-[#B6BAFA] text-[#20243C] font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#DFF8E1]"
            >
              <Mail className="w-5 h-5" />
              <span>{contact.email}</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Secondary Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-[#D9DDEE]/15">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FBFBFF]/10 hover:bg-[#FBFBFF]/20 text-[#FBFBFF] text-xs font-bold uppercase tracking-wider border border-[#D9DDEE]/20 transition-colors focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            >
              <Linkedin className="w-4 h-4 text-[#A0A1F8]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FBFBFF]/10 hover:bg-[#FBFBFF]/20 text-[#FBFBFF] text-xs font-bold uppercase tracking-wider border border-[#D9DDEE]/20 transition-colors focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            >
              <Github className="w-4 h-4 text-[#A0A1F8]" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.social.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FBFBFF]/10 hover:bg-[#FBFBFF]/20 text-[#FBFBFF] text-xs font-bold uppercase tracking-wider border border-[#D9DDEE]/20 transition-colors focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            >
              <GraduationCap className="w-4 h-4 text-[#A0A1F8]" />
              <span>Google Scholar</span>
            </a>

            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#DFF8E1] hover:bg-[#C8DFCA] text-[#20243C] text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-[#A0A1F8]"
            >
              <FileText className="w-4 h-4 text-[#20243C]" />
              <span>Download CV</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

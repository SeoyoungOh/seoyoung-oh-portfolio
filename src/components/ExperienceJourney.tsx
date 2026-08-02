import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Briefcase, Calendar, Building2, UserCheck } from 'lucide-react';

export const ExperienceJourney: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="journey" className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
            RESEARCH & INDUSTRY EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20243C] tracking-tight mb-3">
            Experience & Research Journey
          </h2>
          <p className="text-base text-[#626A7C]">
            A continuous trajectory connecting foundational trust, embedded computer vision, responsible AI evaluation, and trustworthy medical image analysis.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-[#D9DDEE] ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {experience.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FBFBFF] stroke-2 border-2 border-[#9091DF] group-hover:border-[#A0A1F8] group-hover:scale-125 transition-all" />

              {/* Main Card */}
              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#D9DDEE] hover:border-[#9091DF] transition-all">
                
                {/* Header: Role & Theme */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#A0A1F8]/15 text-[#20243C] border border-[#A0A1F8]/30">
                    {exp.theme}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#626A7C]">
                    <Calendar className="w-3.5 h-3.5 text-[#9091DF]" />
                    <span>{exp.dates}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-extrabold text-[#20243C] mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#9091DF]" />
                  <span>{exp.role}</span>
                </h3>

                {/* Institutions */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#626A7C] mb-4">
                  <Building2 className="w-3.5 h-3.5 text-[#9091DF] shrink-0" />
                  {exp.institutions.map((inst, idx) => (
                    <span key={idx} className="bg-[#B9E0FC]/20 px-2 py-0.5 rounded text-[#20243C]">
                      {inst}
                    </span>
                  ))}
                </div>

                {/* Supervisor if present */}
                {exp.supervisor && (
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#20243C] mb-4 bg-[#FBFBFF] p-2 rounded-lg border border-[#D9DDEE]/60 inline-flex">
                    <UserCheck className="w-3.5 h-3.5 text-[#9091DF]" />
                    <span>Supervisor: {exp.supervisor}</span>
                  </div>
                )}

                {/* Focus List */}
                <ul className="space-y-2 pt-2 border-t border-[#D9DDEE]/40">
                  {exp.focus.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-medium text-[#20243C]">
                      <span className="text-[#9091DF]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

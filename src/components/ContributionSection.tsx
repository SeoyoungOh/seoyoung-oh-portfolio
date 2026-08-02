import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Cpu, Stethoscope, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ContributionSection: React.FC = () => {
  const { contributions } = portfolioData;

  const getIcon = (title: string) => {
    if (title.includes('RESEARCH')) return <Cpu className="w-5 h-5 text-[#9091DF]" />;
    if (title.includes('APPLIED')) return <Stethoscope className="w-5 h-5 text-[#9091DF]" />;
    return <MessageSquare className="w-5 h-5 text-[#9091DF]" />;
  };

  return (
    <section id="contribution" className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
            CONTRIBUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20243C] tracking-tight mb-3">
            One way of thinking. Three environments where it creates value.
          </h2>
          <p className="text-base text-[#626A7C]">
            Bridging technical depth, clinical utility, and multi-stakeholder scientific translation.
          </p>
        </div>

        {/* 3 Contribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributions.map((area) => (
            <div
              key={area.id}
              className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#D9DDEE] flex flex-col justify-between hover:border-[#9091DF] transition-all"
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#A0A1F8]/15 text-[#20243C]">
                    {getIcon(area.title)}
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#20243C]">
                    {area.title}
                  </h3>
                </div>

                {/* Related Roles Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {area.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#B9E0FC]/30 text-[#20243C] border border-[#A6C9E2]/40"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Contribution Items */}
                <ul className="space-y-3 mb-6">
                  {area.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-[#20243C] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#D9DDEE]/60 text-[11px] font-mono text-[#626A7C]">
                Value created through problem-first evidence evaluation
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

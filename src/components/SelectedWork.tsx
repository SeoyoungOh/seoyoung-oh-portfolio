import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { ArrowUpRight, HelpCircle, CheckCircle2 } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const { caseStudies } = portfolioData;
  const visibleStudies = caseStudies.filter((cs) => cs.visible !== false);

  return (
    <section id="work" className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20243C] tracking-tight mb-3">
            Not just what I built—but how I arrived there.
          </h2>
          <p className="text-base text-[#626A7C]">
            Detailed case studies demonstrating problem reframing, constraint-driven engineering, and rigorous evaluation.
          </p>
        </div>

        {/* 4 Featured Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleStudies.map((cs) => {
            const firstResult = cs.representativeResults[0] || '';
            return (
              <Link
                key={cs.id}
                to={`/work/${cs.slug}`}
                className="group flex flex-col justify-between bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#D9DDEE] hover:border-[#9091DF] hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-[#9091DF]"
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#D9DDEE]/50">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9091DF]">
                      {cs.category}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
                      {cs.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#20243C] group-hover:text-[#9091DF] transition-colors mb-3 leading-snug">
                    {cs.title}
                  </h3>

                  {/* Opening Question */}
                  <div className="flex items-start gap-2 text-sm font-semibold text-[#20243C] bg-[#B9E0FC]/20 p-3 rounded-xl border border-[#A6C9E2]/40 mb-4">
                    <HelpCircle className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
                    <span>“{cs.openingQuestion}”</span>
                  </div>

                  {/* Reframing / Key Decision */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#626A7C] block mb-1">
                      Key Problem Reframing
                    </span>
                    <p className="text-sm text-[#20243C] font-medium leading-relaxed">
                      {cs.reframing}
                    </p>
                  </div>

                  {/* One Representative Result */}
                  {firstResult && (
                    <div className="mb-4 p-3 rounded-lg bg-[#FBFBFF] border border-[#D9DDEE]">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A0A1F8] block mb-1">
                        Representative Result
                      </span>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#20243C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9091DF] shrink-0" />
                        <span>{firstResult}</span>
                      </div>
                    </div>
                  )}

                  {/* Why it matters */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#626A7C] block mb-1">
                      Why It Matters
                    </span>
                    <p className="text-xs text-[#626A7C] leading-relaxed italic">
                      “{cs.whyItMatters}”
                    </p>
                  </div>
                </div>

                {/* Semantic Link CTA */}
                <div className="pt-4 border-t border-[#D9DDEE]/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#20243C] group-hover:text-[#9091DF]">
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#9091DF]" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

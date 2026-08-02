import React from 'react';
import { portfolioData } from '../data/portfolio';
import { CheckCircle2 } from 'lucide-react';

export const HowIWork: React.FC = () => {
  const { approach } = portfolioData;

  return (
    <section id="approach" className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
            {approach.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20243C] tracking-tight mb-4">
            {approach.title}
          </h2>
          <p className="text-lg font-medium text-[#626A7C] leading-relaxed italic border-l-2 border-[#A0A1F8] pl-4">
            {approach.intro}
          </p>
        </div>

        {/* 4 Connected Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {approach.steps.map((step, idx) => {
            const colors = [
              'border-[#A0A1F8] bg-[#A0A1F8]/10 text-[#20243C]',
              'border-[#B9E0FC] bg-[#B9E0FC]/15 text-[#20243C]',
              'border-[#B6BAFA] bg-[#B6BAFA]/15 text-[#20243C]',
              'border-[#DFF8E1] bg-[#DFF8E1]/20 text-[#20243C]',
            ];
            return (
              <div
                key={step.key}
                className={`p-6 rounded-2xl border ${colors[idx]} transition-all hover:shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C]">
                      STAGE 0{idx + 1}
                    </span>
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-[#20243C] text-[#FBFBFF]">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#20243C] mb-2">
                    {step.label}
                  </h3>
                  <p className="text-sm font-medium text-[#626A7C] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Three Core Principles */}
        <div className="bg-[#20243C] text-[#FBFBFF] rounded-2xl p-6 sm:p-8 border border-[#D9DDEE]/20">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#A0A1F8] mb-6">
            Guiding Working Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.principles.map((principle, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#DFF8E1] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold leading-snug text-[#FBFBFF]">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

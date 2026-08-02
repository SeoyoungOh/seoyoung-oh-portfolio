import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Check, Globe } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills, languages } = portfolioData;

  const getCategoryStyles = (theme: string) => {
    switch (theme) {
      case 'periwinkle':
        return 'bg-[#20243C] text-[#FBFBFF] border-[#9091DF] ring-2 ring-[#A0A1F8]/50';
      case 'babyBlue':
        return 'bg-[#FBFBFF] text-[#20243C] border-[#B9E0FC]';
      case 'lavender':
        return 'bg-[#FBFBFF] text-[#20243C] border-[#B6BAFA]';
      case 'powderBlue':
        return 'bg-[#FBFBFF] text-[#20243C] border-[#A6C9E2]';
      case 'mint':
        return 'bg-[#FBFBFF] text-[#20243C] border-[#C8DFCA]';
      default:
        return 'bg-[#FBFBFF] text-[#20243C] border-[#D9DDEE]';
    }
  };

  const getPillStyles = (theme: string) => {
    switch (theme) {
      case 'periwinkle':
        return 'bg-[#A0A1F8] text-[#20243C] font-extrabold';
      case 'babyBlue':
        return 'bg-[#B9E0FC]/40 text-[#20243C] border border-[#B9E0FC]';
      case 'lavender':
        return 'bg-[#B6BAFA]/30 text-[#20243C] border border-[#B6BAFA]';
      case 'powderBlue':
        return 'bg-[#A6C9E2]/30 text-[#20243C] border border-[#A6C9E2]';
      case 'mint':
        return 'bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]';
      default:
        return 'bg-[#D9DDEE]/40 text-[#20243C]';
    }
  };

  return (
    <section id="expertise" className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
            EXPERTISE & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20243C] tracking-tight mb-3">
            Layered Expertise Map
          </h2>
          <p className="text-base text-[#626A7C]">
            A coherent structure where core technical domains are evaluated through reliability lenses and executed with engineering rigor.
          </p>
        </div>

        {/* 5 Layered Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((cat, idx) => {
            const isCore = cat.category === 'CORE EXPERTISE';
            return (
              <div
                key={cat.category}
                className={`rounded-2xl p-6 border transition-all ${getCategoryStyles(cat.colorTheme)} ${
                  isCore ? 'lg:col-span-2 shadow-md' : ''
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-xs font-mono font-bold uppercase tracking-widest ${isCore ? 'text-[#A0A1F8]' : 'text-[#9091DF]'}`}>
                    0{idx + 1}. {cat.category}
                  </span>
                  {isCore && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#A0A1F8] text-[#20243C] uppercase tracking-wider">
                      Central Domain
                    </span>
                  )}
                </div>

                <p className={`text-xs mb-4 font-medium ${isCore ? 'text-[#B9E0FC]' : 'text-[#626A7C]'}`}>
                  {cat.description}
                </p>

                {/* 5 Items Max */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className={`text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 ${getPillStyles(cat.colorTheme)}`}
                    >
                      <Check className="w-3.5 h-3.5 opacity-80" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Strip */}
        <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#D9DDEE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#DFF8E1] text-[#20243C]">
              <Globe className="w-5 h-5 text-[#9091DF]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#20243C]">Languages</h3>
              <p className="text-xs text-[#626A7C]">Multilingual scientific dissemination capabilities</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <div
                key={lang.language}
                className="flex items-center gap-2 bg-[#FBFBFF] px-4 py-2 rounded-xl border border-[#D9DDEE] text-xs font-bold text-[#20243C]"
              >
                <span>{lang.language}</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#B9E0FC]/30 text-[#9091DF]">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

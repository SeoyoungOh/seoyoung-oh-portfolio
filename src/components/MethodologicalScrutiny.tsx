import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, CheckCircle, ChevronDown, Award } from 'lucide-react';

export const MethodologicalScrutiny: React.FC = () => {
  const { methodologicalTabs } = portfolioData;
  const [activeTabId, setActiveTabId] = useState<string>(methodologicalTabs[0].id);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const navigate = useNavigate();

  const activeTab = methodologicalTabs.find((t) => t.id === activeTabId) || methodologicalTabs[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % methodologicalTabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + methodologicalTabs.length) % methodologicalTabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = methodologicalTabs.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    const nextTab = methodologicalTabs[nextIndex];
    setActiveTabId(nextTab.id);
    tabRefs.current[nextTab.id]?.focus();
  };

  const handleCtaClick = (destination: string) => {
    if (destination.startsWith('#')) {
      const elem = document.getElementById(destination.replace('#', ''));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(destination);
    }
  };

  return (
    <section id="scrutiny" className="py-20 border-b border-[#D9DDEE]/60 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9091DF] block mb-2">
            METHODOLOGICAL SCRUTINY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20243C] tracking-tight mb-3">
            Evidence of how I work
          </h2>
          <p className="text-base text-[#626A7C]">
            Select an evidence domain to examine how problem framing, reliability testing, and translation are operationalized across projects.
          </p>
        </div>

        {/* Desktop Horizontal Tabs */}
        <div className="hidden md:flex border-b border-[#D9DDEE] mb-8 gap-2" role="tablist" aria-label="Methodological Scrutiny Domains">
          {methodologicalTabs.map((tab, idx) => {
            const isSelected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[tab.id] = el)}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTabId(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`py-3.5 px-5 font-bold text-xs uppercase tracking-wider transition-all border-b-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] ${
                  isSelected
                    ? 'border-[#9091DF] text-[#20243C] bg-[#A0A1F8]/10 rounded-t-lg'
                    : 'border-transparent text-[#626A7C] hover:text-[#20243C] hover:bg-[#D9DDEE]/20 rounded-t-lg'
                }`}
              >
                0{idx + 1}. {tab.title}
              </button>
            );
          })}
        </div>

        {/* Desktop Single Shared Content Panel */}
        <div
          className="hidden md:block bg-[#20243C] text-[#FBFBFF] rounded-2xl p-8 border border-[#D9DDEE]/20 transition-all shadow-sm"
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Project Context & Summary */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A0A1F8]" />
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#A0A1F8]">
                    {activeTab.title}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#FBFBFF] mb-4">
                  {activeTab.projectTitle}
                </h3>
                <p className="text-base text-[#B9E0FC] font-medium leading-relaxed mb-6 bg-[#181A2D] p-5 rounded-xl border border-[#A0A1F8]/20">
                  “{activeTab.summary}”
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#D9DDEE]/15">
                <button
                  onClick={() => handleCtaClick(activeTab.ctaDestination)}
                  className="inline-flex items-center gap-2 bg-[#A0A1F8] hover:bg-[#B6BAFA] text-[#20243C] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#DFF8E1]"
                >
                  <span>{activeTab.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Dynamic Achievements & Panel Heading */}
            <div className="lg:col-span-5 bg-[#181A2D] rounded-xl p-6 border border-[#D9DDEE]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#D9DDEE]/15">
                  <Award className="w-4 h-4 text-[#DFF8E1]" />
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#DFF8E1]">
                    {activeTab.dynamicPanelHeading}
                  </h4>
                </div>

                <ul className="space-y-3 mb-6">
                  {activeTab.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#FBFBFF]">
                      <CheckCircle className="w-4 h-4 text-[#A0A1F8] shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-[11px] font-mono text-[#A6C9E2] bg-[#20243C] p-3 rounded-lg border border-[#D9DDEE]/10">
                Verified outcome from research dispatches & publications
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Accordion View */}
        <div className="md:hidden space-y-3">
          {methodologicalTabs.map((tab, idx) => {
            const isOpen = tab.id === activeTabId;
            return (
              <div
                key={tab.id}
                className="rounded-xl border border-[#D9DDEE] bg-[#FBFBFF] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveTabId(tab.id)}
                  className="w-full text-left p-4 flex items-center justify-between bg-[#FBFBFF] font-bold text-sm text-[#20243C]"
                  aria-expanded={isOpen}
                >
                  <span>0{idx + 1}. {tab.title}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-[#9091DF]' : 'text-[#626A7C]'}`} />
                </button>

                {isOpen && (
                  <div className="p-4 bg-[#20243C] text-[#FBFBFF] border-t border-[#D9DDEE]">
                    <h4 className="text-lg font-bold text-[#A0A1F8] mb-2">{tab.projectTitle}</h4>
                    <p className="text-xs text-[#B9E0FC] mb-4 italic leading-relaxed">"{tab.summary}"</p>
                    
                    <div className="mb-4">
                      <span className="text-[10px] font-mono font-bold text-[#DFF8E1] uppercase tracking-wider block mb-2">
                        {tab.dynamicPanelHeading}
                      </span>
                      <ul className="space-y-2">
                        {tab.achievements.map((item, i) => (
                          <li key={i} className="text-xs text-[#FBFBFF] flex items-start gap-2">
                            <span className="text-[#A0A1F8]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleCtaClick(tab.ctaDestination)}
                      className="w-full text-center bg-[#A0A1F8] text-[#20243C] font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center gap-2"
                    >
                      <span>{tab.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

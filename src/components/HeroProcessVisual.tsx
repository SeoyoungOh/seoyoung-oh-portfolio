import React, { useState } from 'react';

interface ProcessStep {
  key: 'FRAME' | 'SOLVE' | 'TEST' | 'TRANSLATE';
  title: string;
  shortExplanation: string;
}

const steps: ProcessStep[] = [
  { key: 'FRAME', title: 'FRAME', shortExplanation: 'Identify the real constraint.' },
  { key: 'SOLVE', title: 'SOLVE', shortExplanation: 'Develop what the problem requires.' },
  { key: 'TEST', title: 'TEST', shortExplanation: 'Challenge the evidence.' },
  { key: 'TRANSLATE', title: 'TRANSLATE', shortExplanation: 'Make the meaning clear.' },
];

export const HeroProcessVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<'FRAME' | 'SOLVE' | 'TEST' | 'TRANSLATE'>('FRAME');

  return (
    <div className="w-full bg-[#20243C] text-[#FBFBFF] rounded-2xl p-6 sm:p-8 border border-[#D9DDEE]/20 relative overflow-hidden shadow-sm">
      {/* Background Anatomical & Evidence Map Contours */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none">
          <path d="M50 150 Q150 50, 250 150 T450 150" stroke="#A0A1F8" strokeWidth="1.5" strokeDasharray="4 6"/>
          <path d="M100 220 Q250 80, 400 220" stroke="#B9E0FC" strokeWidth="1" strokeDasharray="3 3"/>
          <circle cx="250" cy="150" r="90" stroke="#DFF8E1" strokeWidth="1" strokeDasharray="2 4"/>
          <circle cx="250" cy="150" r="40" stroke="#A0A1F8" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#D9DDEE]/15">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#A0A1F8]">
            Core Working Process
          </span>
          <span className="text-xs font-mono text-[#A6C9E2]">
            Select stage to inspect
          </span>
        </div>

        {/* Desktop / Mobile Node Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 relative">
          {steps.map((step, idx) => {
            const isActive = activeStep === step.key;
            return (
              <button
                key={step.key}
                onClick={() => setActiveStep(step.key)}
                onMouseEnter={() => setActiveStep(step.key)}
                onFocus={() => setActiveStep(step.key)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all cursor-pointer text-center relative focus-visible:outline-2 focus-visible:outline-[#A0A1F8] ${
                  isActive
                    ? 'bg-[#A0A1F8] text-[#20243C] shadow-md scale-102 ring-2 ring-[#B6BAFA]'
                    : 'bg-[#FBFBFF]/5 text-[#FBFBFF] hover:bg-[#FBFBFF]/10 border border-[#D9DDEE]/10'
                }`}
                aria-selected={isActive}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#20243C] text-[#DFF8E1]' : 'bg-[#DFF8E1]/20 text-[#DFF8E1]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-xs font-extrabold tracking-wider">
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Panel */}
        <div className="bg-[#181A2D] rounded-xl p-4 border border-[#A0A1F8]/30 min-h-[80px] flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#DFF8E1]" />
            <span className="text-xs font-bold text-[#A0A1F8] tracking-widest uppercase">
              {activeStep} STAGE
            </span>
          </div>
          <p className="text-sm font-medium text-[#FBFBFF] pl-4 border-l-2 border-[#DFF8E1]">
            {steps.find((s) => s.key === activeStep)?.shortExplanation}
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

interface ProcessStep {
  key: 'FRAME' | 'SOLVE' | 'TEST' | 'TRANSLATE';
  title: string;
  stageLabel: string;
  mainPrinciple: string;
  coreQuestion: string;
  howIWork: string;
  evidenceFromWork: string;
}

const steps: ProcessStep[] = [
  {
    key: 'FRAME',
    title: 'FRAME',
    stageLabel: 'FRAME STAGE',
    mainPrinciple: 'Identify the real constraint.',
    coreQuestion:
      'What is the actual problem—and what evidence, supervision, or resources are realistically available?',
    howIWork:
      'I separate the scientific objective from assumptions about a preferred model, ideal dataset, or perfect annotation.',
    evidenceFromWork:
      'I reframed disease localization around subject-level diagnostic labels when voxel-wise annotations were unavailable.',
  },
  {
    key: 'SOLVE',
    title: 'SOLVE',
    stageLabel: 'SOLVE STAGE',
    mainPrinciple: 'Develop what the problem requires.',
    coreQuestion:
      'What combination of methods best addresses the identified constraint?',
    howIWork:
      'I design fit-for-purpose solutions by combining learning, localization, calibration, and engineering choices rather than forcing one method onto every problem.',
    evidenceFromWork:
      'My projects span multi-map weak supervision, healthy-only normal projection, and efficient computer vision under hardware constraints.',
  },
  {
    key: 'TEST',
    title: 'TEST',
    stageLabel: 'TEST STAGE',
    mainPrinciple: 'Challenge the evidence.',
    coreQuestion:
      'Does the result remain meaningful beyond a strong performance number or convincing visualization?',
    howIWork:
      'I examine uncertainty, false positives, robustness, alternative explanations, and whether the evidence supports the intended interpretation.',
    evidenceFromWork:
      'I used healthy-reference calibration and unrelated ROI controls to distinguish task-oriented evidence concentration from arbitrary spatial effects.',
  },
  {
    key: 'TRANSLATE',
    title: 'TRANSLATE',
    stageLabel: 'TRANSLATE STAGE',
    mainPrinciple: 'Make the meaning clear.',
    coreQuestion:
      'What does the evidence support, what does it not prove, and what matters to this audience?',
    howIWork:
      'I adapt technical findings for research, biomedical, interdisciplinary, and non-specialist audiences without overstating their clinical meaning.',
    evidenceFromWork:
      'I communicate research through peer-reviewed publications, oral presentations, posters, visual explanations, and multilingual collaboration.',
  },
];

export const HeroProcessVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<'FRAME' | 'SOLVE' | 'TEST' | 'TRANSLATE'>('FRAME');

  return (
    <div
      className="w-full text-[#20243C] rounded-3xl p-6 sm:p-8 relative overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.68)',
        boxShadow: '0 18px 45px rgba(32, 36, 60, 0.10)',
      }}
    >
      {/* Background Anatomical & Evidence Map Contours */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none">
          <path d="M50 150 Q150 50, 250 150 T450 150" stroke="#9091DF" strokeWidth="1.5" strokeDasharray="4 6"/>
          <path d="M100 220 Q250 80, 400 220" stroke="#626A7C" strokeWidth="1" strokeDasharray="3 3"/>
          <circle cx="250" cy="150" r="90" stroke="#9091DF" strokeWidth="1" strokeDasharray="2 4"/>
          <circle cx="250" cy="150" r="40" stroke="#9091DF" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#9091DF]/20">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#20243C]">
            Core Working Process
          </span>
          <span className="text-xs font-mono text-[#626A7C]">
            Select stage to inspect
          </span>
        </div>

        {/* Desktop / Mobile Node Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 relative">
          {steps.map((step, idx) => {
            const isActive = activeStep === step.key;
            return (
              <button
                key={step.key}
                onClick={() => setActiveStep(step.key)}
                onMouseEnter={() => setActiveStep(step.key)}
                onFocus={() => setActiveStep(step.key)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all cursor-pointer text-center relative focus-visible:outline-2 focus-visible:outline-[#9091DF] ${
                  isActive
                    ? 'bg-[#9091DF] text-[#20243C] shadow-md scale-[1.02] border border-[#9091DF] ring-2 ring-[#9091DF]/30'
                    : 'bg-white/60 text-[#20243C] hover:bg-white/90 border border-[#9091DF]/30'
                }`}
                aria-selected={isActive}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#20243C] text-[#FBFBFF]' : 'bg-[#9091DF]/20 text-[#20243C]'
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
        {(() => {
          const current = steps.find((s) => s.key === activeStep) || steps[0];
          return (
            <div className="bg-white/80 rounded-2xl p-5 sm:p-6 border border-[#9091DF]/30 backdrop-blur-xs shadow-xs">
              {/* Top Header: Stage Label & Main Principle */}
              <div className="mb-4 pb-4 border-b border-[#9091DF]/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] shadow-xs shrink-0" />
                  <span className="text-xs font-bold text-[#20243C] tracking-widest uppercase">
                    {current.stageLabel}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#20243C] tracking-tight">
                  {current.mainPrinciple}
                </h3>
              </div>

              {/* 3 Content Areas: Desktop 3-column layout, Mobile/Tablet stacked */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-[#9091DF]/25">
                {/* Core Question */}
                <div className="flex flex-col md:pr-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#626A7C] mb-1">
                    Core Question
                  </span>
                  <p className="text-xs sm:text-sm font-normal text-[#20243C] leading-relaxed">
                    {current.coreQuestion}
                  </p>
                </div>

                {/* How I Work */}
                <div className="flex flex-col md:px-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#626A7C] mb-1">
                    How I Work
                  </span>
                  <p className="text-xs sm:text-sm font-normal text-[#20243C] leading-relaxed">
                    {current.howIWork}
                  </p>
                </div>

                {/* Evidence From My Work */}
                <div className="flex flex-col md:pl-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#626A7C] mb-1">
                    Evidence From My Work
                  </span>
                  <p className="text-xs sm:text-sm font-normal text-[#20243C] leading-relaxed">
                    {current.evidenceFromWork}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

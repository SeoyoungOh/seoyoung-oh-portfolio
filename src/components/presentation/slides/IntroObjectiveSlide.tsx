import React from 'react';

interface IntroObjectiveSlideProps {
  isActive: boolean;
}

export const IntroObjectiveSlide: React.FC<IntroObjectiveSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          INTRODUCTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Research Objective
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Formulating the central computational problem addressed throughout this dissertation.
        </p>
      </div>

      {/* Main Focus: The core thesis research question */}
      <div className="my-auto py-3 max-w-3xl mx-auto w-full">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FBFBFF] border-2 border-[#9091DF]/40 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#A0A1F8]/10 blur-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#DFF8E1]/30 blur-lg pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#A0A1F8]/15 text-[#9091DF] mb-4">
              CENTRAL RESEARCH QUESTION
            </span>

            <blockquote className="text-base sm:text-xl md:text-2xl font-black text-[#20243C] leading-snug tracking-tight mb-4">
              “How can we extract clinically meaningful spatial evidence from brain MRI when precise annotations are scarce or unavailable?”
            </blockquote>

            <p className="text-xs sm:text-sm text-[#626A7C] leading-relaxed max-w-2xl">
              Investigating methodological paradigms spanning transfer learning under scarce segmentations, weakly supervised localization under global clinical labels, and normative projections using healthy cohorts.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Dissertation Scope</span>
        <span className="font-semibold text-[#9091DF]">Methodological Framework</span>
      </div>
    </div>
  );
};

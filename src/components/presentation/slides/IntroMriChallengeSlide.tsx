import React from 'react';

interface IntroMriChallengeSlideProps {
  isActive: boolean;
}

export const IntroMriChallengeSlide: React.FC<IntroMriChallengeSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          INTRODUCTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Why Is the Brainstem Difficult to Study on Routine MRI?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          A fundamental discrepancy exists between submillimeter neuroanatomical architecture and what can be reliably captured during routine clinical in-vivo MRI exams.
        </p>
      </div>

      {/* Center: Reserve space for future visual comparison */}
      <div className="my-auto py-2 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
        {/* Left comparison slot: Fine Neuroanatomical Reality */}
        <div className="rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col justify-between p-5">
          <div>
            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#A0A1F8]/15 text-[#9091DF] mb-2.5">
              TARGET ANATOMY
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
              Fine Neuroanatomical Detail
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed mb-4">
              Microscopic nuclei (hypoglossal, vagal), compact tracts, and intricate sub-boundaries with subtle histological transitions.
            </p>
          </div>

          <div className="h-28 rounded-lg border border-[#D9DDEE] bg-[#FFFFFF] flex flex-col items-center justify-center text-center p-3">
            <span className="text-xs font-bold text-[#20243C] mb-1">
              Reserved: High-Resolution / Ex-Vivo Reference
            </span>
            <span className="text-[10px] text-[#626A7C]">
              Space reserved for ultra-high-resolution histological or 7T anatomical atlas
            </span>
          </div>
        </div>

        {/* Right comparison slot: Routine Clinical In-Vivo MRI */}
        <div className="rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col justify-between p-5">
          <div>
            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] mb-2.5">
              CLINICAL REALITY
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
              Routine Clinical In-Vivo MRI (1.5T / 3T)
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed mb-4">
              Thick slices (~1mm isotropic or anisotropic), partial volume effects, low tissue contrast between adjacent nuclei, and CSF pulsation artifacts.
            </p>
          </div>

          <div className="h-28 rounded-lg border border-[#D9DDEE] bg-[#FFFFFF] flex flex-col items-center justify-center text-center p-3">
            <span className="text-xs font-bold text-[#20243C] mb-1">
              Reserved: Routine In-Vivo T1/T2 MRI
            </span>
            <span className="text-[10px] text-[#626A7C]">
              Space reserved for clinical scan demonstrating contrast and resolution limitations
            </span>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Imaging Constraints</span>
        <span className="font-semibold text-[#9091DF]">Resolution & Contrast Gap</span>
      </div>
    </div>
  );
};

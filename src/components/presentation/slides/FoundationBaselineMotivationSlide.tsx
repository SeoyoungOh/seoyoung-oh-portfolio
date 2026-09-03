import React from 'react';

interface FoundationBaselineMotivationSlideProps {
  isActive: boolean;
}

export const FoundationBaselineMotivationSlide: React.FC<FoundationBaselineMotivationSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          FOUNDATIONS
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Where Do We Start Without a Fine-Grained Baseline?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Initial motivation for an established supervised brainstem segmentation benchmark.
        </p>
      </div>

      {/* Main Narrative & Visual Placeholder */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left: Narrative Cards */}
        <div className="lg:col-span-6 flex flex-col justify-center gap-3">
          <div className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]">
            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#A0A1F8]/15 text-[#9091DF] mb-2">
              LITERATURE GAP
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1.5">
              Coarse Anatomical Focus
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Most previous brainstem segmentation work focused on coarse anatomical divisions (e.g., whole brainstem or 3 broad subregions) rather than the fine neuroanatomical structures relevant to this thesis.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]">
            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] mb-2">
              METHODOLOGICAL STEP
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1.5">
              Establishing a Methodological Baseline
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Therefore, an initial segmentation study was needed to establish a rigorous methodological baseline and benchmark state-of-the-art architectures on brainstem MRI.
            </p>
          </div>
        </div>

        {/* Right: Visual Placeholder */}
        <div className="lg:col-span-6 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-10 h-10 rounded-xl bg-[#A0A1F8]/15 text-[#9091DF] flex items-center justify-center mb-3 font-mono text-xs font-bold">
            CONTEXT
          </div>
          <p className="text-xs font-bold text-[#20243C] mb-1">
            BASELINE LANDSCAPE / SEGMENTATION CONTEXT
          </p>
          <p className="text-[11px] text-[#626A7C] max-w-xs leading-relaxed">
            Reserved area for visual summary contrasting existing coarse brainstem segmentations with fine-grained clinical targets.
          </p>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Preliminary Groundwork</span>
        <span className="font-semibold text-[#9091DF]">Supervised Baseline Motivation</span>
      </div>
    </div>
  );
};

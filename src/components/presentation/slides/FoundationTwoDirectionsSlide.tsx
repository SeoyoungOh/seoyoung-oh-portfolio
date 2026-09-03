import React from 'react';
import { ArrowDownLeft, ArrowDownRight, GitBranch } from 'lucide-react';

interface FoundationTwoDirectionsSlideProps {
  isActive: boolean;
}

export const FoundationTwoDirectionsSlide: React.FC<FoundationTwoDirectionsSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          FOUNDATIONS
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Two Directions Emerged
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Pivoting beyond standard supervision to address the absence of voxel-wise disease labels.
        </p>
      </div>

      {/* Narrative Pivot / Branching Structure */}
      <div className="my-auto py-2 flex flex-col items-center">
        {/* Top Starting Point */}
        <div className="px-5 py-2.5 rounded-2xl bg-[#20243C] text-[#FFFFFF] border border-[#D9DDEE] shadow-sm flex items-center gap-2 mb-2">
          <GitBranch className="w-4 h-4 text-[#A0A1F8]" />
          <span className="text-xs sm:text-sm font-bold tracking-tight">
            The Core Dilemma: Annotation Scarcity
          </span>
        </div>

        {/* Branching Indicators */}
        <div className="w-full max-w-lg flex justify-between px-16 text-[#9091DF] my-1">
          <ArrowDownLeft className="w-5 h-5" />
          <ArrowDownRight className="w-5 h-5" />
        </div>

        {/* Two Major Direction Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
          {/* Left Direction */}
          <div className="p-5 rounded-2xl bg-[#FBFBFF] border-2 border-[#9091DF]/50 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#A0A1F8]/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#A0A1F8]/15 text-[#9091DF] mb-3">
                DIRECTION 1 · WEAK LABELS
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#20243C] mb-2 leading-tight">
                Weakly Supervised Disease Localization
              </h3>
              <p className="text-xs sm:text-sm text-[#626A7C] leading-relaxed">
                Use diagnostic labels to identify disease-discriminative spatial evidence.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D9DDEE]/80 text-[11px] font-semibold text-[#9091DF]">
              Part II: Global Label Attribution & Gating
            </div>
          </div>

          {/* Right Direction */}
          <div className="p-5 rounded-2xl bg-[#FBFBFF] border-2 border-[#9091DF]/50 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#DFF8E1]/40 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] mb-3">
                DIRECTION 2 · HEALTHY NORM
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#20243C] mb-2 leading-tight">
                Healthy-Only Normal Projection
              </h3>
              <p className="text-xs sm:text-sm text-[#626A7C] leading-relaxed">
                Learn healthy anatomy and identify reliable deviation-from-normal evidence.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D9DDEE]/80 text-[11px] font-semibold text-[#20243C]">
              Part III: Unsupervised Normative Restoration
            </div>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Methodological Pivot</span>
        <span className="font-semibold text-[#9091DF]">Complementary Paradigms</span>
      </div>
    </div>
  );
};

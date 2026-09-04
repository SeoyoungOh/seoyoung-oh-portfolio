import React from 'react';
import { ArrowRight, Bookmark, ShieldCheck, Compass, GitCommit } from 'lucide-react';

interface ConclusionSlideProps {
  isActive: boolean;
}

export const ConclusionSlide: React.FC<ConclusionSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~10% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1.5">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              CONCLUSION · DISSERTATION SUMMARY
            </span>
            <h2 className="text-2xl lg:text-[26px] font-black text-[#24242A] tracking-tight leading-snug">
              Contributions of This Thesis
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Reliable ALS brainstem MRI interpretation under annotation scarcity.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Core Contributions</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN LAYOUT: Three Large Contribution Blocks (~48% height)
          CONTRIBUTION 01: Brainstem anatomical reference
          CONTRIBUTION 02: Reliable weak supervision
          CONTRIBUTION 03: Healthy-only normal projection
      ========================================================================= */}
      <div className="grid grid-cols-3 gap-3.5 flex-1 min-h-0 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            CONTRIBUTION 01: Brainstem anatomical reference
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase flex items-center gap-1">
                <Compass className="w-3 h-3 text-[#6F69C9]" />
                CONTRIBUTION 01
              </span>
              <span className="text-[9px] font-mono text-[#74747D]">Anatomical Prior</span>
            </div>

            <h3 className="text-sm font-bold text-[#24242A] leading-snug mb-2">
              Brainstem anatomical reference
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Converted fine neuroanatomical knowledge into a task-oriented reference for model evaluation and ALS interpretation.
            </p>
          </div>

          <div className="pt-2.5 border-t border-[#D9DDEE]/80">
            <div className="px-2 py-1 rounded-md bg-[#FAFAFC] border border-[#D9DDEE] text-[10px] font-mono text-[#24242A] flex items-center justify-between">
              <span className="text-[#74747D]">Foundation:</span>
              <span className="font-bold text-[#6F69C9]">Task-Oriented ROIs</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            CONTRIBUTION 02: Reliable weak supervision
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/70 text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#6F69C9]" />
                CONTRIBUTION 02
              </span>
              <span className="text-[9px] font-mono text-[#74747D]">Diagnostic Labels</span>
            </div>

            <h3 className="text-sm font-bold text-[#24242A] leading-snug mb-2">
              Reliable weak supervision
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Showed that diagnostic labels can produce spatial disease evidence when cue reliability is explicitly estimated.
            </p>
          </div>

          <div className="pt-2.5 border-t border-[#D9DDEE]/80">
            <div className="px-2 py-1 rounded-md bg-[#FAFAFC] border border-[#D9DDEE] text-[10px] font-mono text-[#24242A] flex items-center justify-between">
              <span className="text-[#74747D]">Mechanism:</span>
              <span className="font-bold text-[#6F69C9]">Reliability-Aware Fusion</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            CONTRIBUTION 03: Healthy-only normal projection
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[9.5px] font-mono font-bold text-[#24242A] uppercase flex items-center gap-1">
                <Bookmark className="w-3 h-3 text-[#24242A]" />
                CONTRIBUTION 03
              </span>
              <span className="text-[9px] font-mono text-[#74747D]">Healthy Reference</span>
            </div>

            <h3 className="text-sm font-bold text-[#24242A] leading-snug mb-2">
              Healthy-only normal projection
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Developed a patient-label-free framework that detects reliable deviation from healthy anatomy with false-positive control.
            </p>
          </div>

          <div className="pt-2.5 border-t border-[#D9DDEE]/80">
            <div className="px-2 py-1 rounded-md bg-[#FAFAFC] border border-[#D9DDEE] text-[10px] font-mono text-[#24242A] flex items-center justify-between">
              <span className="text-[#74747D]">Property:</span>
              <span className="font-bold text-[#6F69C9]">FPR-Controlled Deviation</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          THESIS-LEVEL SYNTHESIS PROGRESSION (~12% height)
          From segmentation → to disease-evidence localization → to healthy-reference deviation modeling
      ========================================================================= */}
      <div className="shrink-0 my-1 px-4 py-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-center">
        <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#24242A]">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-[#D9DDEE]">
            <GitCommit className="w-3 h-3 text-[#74747D]" />
            From segmentation
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#6F69C9]" />
          <span className="px-2 py-0.5 rounded bg-white border border-[#D9DDEE]">
            to disease-evidence localization
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#6F69C9]" />
          <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE] text-[#6F69C9]">
            to healthy-reference deviation modeling
          </span>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Final Transition (~28% height)
      ========================================================================= */}
      <div className="shrink-0 p-3 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs space-y-1.5">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          This thesis does not claim voxel-wise ALS pathology segmentation.
        </p>

        <p className="text-xs font-medium text-[#24242A] text-center leading-snug">
          It provides <span className="text-[#6F69C9] font-black">reliability-aware</span> and{' '}
          <span className="text-[#6F69C9] font-black">anatomically grounded</span> evidence frameworks for{' '}
          <span className="text-[#6F69C9] font-black">ALS brainstem MRI</span>.
        </p>

        <div className="pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            The remaining question is how these tools can be validated longitudinally and clinically.
          </span>

          <div className="flex items-center gap-1 text-[#6F69C9] font-mono font-bold text-[9.5px] shrink-0 ml-3">
            <span>Next: Closing &amp; Horizons (Slide 32)</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

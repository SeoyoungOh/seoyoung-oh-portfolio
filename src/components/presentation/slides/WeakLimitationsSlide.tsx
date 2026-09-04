import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WeakLimitationsSlideProps {
  isActive: boolean;
}

export const WeakLimitationsSlide: React.FC<WeakLimitationsSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~12% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              WEAK SUPERVISION · CRITICAL BOUNDARIES
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              What Still Remained?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Reliable weak supervision reduced annotation requirements, but important limitations remained.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Methodological Boundaries</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN 2 × 2 GRID: Four Concise Limitation Blocks (~68% height)
      ========================================================================= */}
      <div className="grid grid-cols-2 gap-3.5 flex-1 min-h-0 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            LIMITATION 01: Classifier Dependence
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[10px] font-mono font-bold text-[#74747D] tracking-wider uppercase">
                LIMITATION 01
              </span>
              <span className="text-[9.5px] font-mono text-[#74747D]">
                Model-Bound
              </span>
            </div>

            <h3 className="text-sm lg:text-base font-bold text-[#24242A] mb-1.5 leading-snug">
              Classifier dependence
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Localization is derived from the classifier, so errors or biases in the diagnostic decision can propagate into the evidence map.
            </p>
          </div>

          <div className="pt-2 mt-2.5 border-t border-[#D9DDEE]/70">
            <span className="text-[11px] font-mono text-[#74747D] leading-tight block">
              Good localization still depends on a meaningful classifier.
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            LIMITATION 02: Indirect Spatial Supervision
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[10px] font-mono font-bold text-[#74747D] tracking-wider uppercase">
                LIMITATION 02
              </span>
              <span className="text-[9.5px] font-mono text-[#74747D]">
                Spatial Resolution
              </span>
            </div>

            <h3 className="text-sm lg:text-base font-bold text-[#24242A] mb-1.5 leading-snug">
              Indirect spatial supervision
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Image-level labels provide no direct information about the exact location or extent of disease-related change.
            </p>
          </div>

          <div className="pt-2 mt-2.5 border-t border-[#D9DDEE]/70">
            <span className="text-[11px] font-mono text-[#74747D] leading-tight block">
              Localization remains inferred rather than directly supervised.
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            LIMITATION 03: Evidence Is Not Pathology
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[10px] font-mono font-bold text-[#74747D] tracking-wider uppercase">
                LIMITATION 03
              </span>
              <span className="text-[9.5px] font-mono text-[#74747D]">
                Biological Meaning
              </span>
            </div>

            <h3 className="text-sm lg:text-base font-bold text-[#24242A] mb-1.5 leading-snug">
              Evidence is not pathology
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Disease-discriminative evidence may support a diagnostic decision without corresponding directly to voxel-wise pathological change.
            </p>
          </div>

          <div className="pt-2 mt-2.5 border-t border-[#D9DDEE]/70">
            <span className="text-[11px] font-mono text-[#74747D] leading-tight block">
              Interpretation must remain anatomically and clinically cautious.
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            LIMITATION 04: Patient Labels Are Still Required (Slightly more prominent)
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border-2 border-[#6F69C9]/50 p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D9D8F4]">
              <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/60 text-[10px] font-mono font-bold text-[#6F69C9] tracking-wider uppercase">
                LIMITATION 04 · CORE MOTIVATION
              </span>
              <span className="text-[9.5px] font-mono text-[#6F69C9] font-bold">
                Supervision Target
              </span>
            </div>

            <h3 className="text-sm lg:text-base font-bold text-[#24242A] mb-1.5 leading-snug">
              Patient labels are still required
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              The method removes voxel-wise annotations, but it still depends on labeled patient and control data for classifier training.
            </p>
          </div>

          <div className="pt-2 mt-2.5 border-t border-[#D9D8F4]">
            <span className="text-[11px] font-mono text-[#6F69C9] font-bold leading-tight block">
              Can we go one step further and remove patient supervision entirely?
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition to Direction 2 (Slide 22) (~16% height)
      ========================================================================= */}
      <div className="shrink-0 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          Weak supervision reduced the annotation burden — but it{' '}
          <span className="text-[#6F69C9] font-black">
            did not remove dependence on patient labels
          </span>.
        </p>

        <div className="mt-1.5 pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D]">
            This motivated the second direction:{' '}
            <strong className="text-[#24242A] font-semibold">
              Can disease-related deviation be detected using{' '}
              <span className="text-[#6F69C9] font-black">healthy MRI only</span>?
            </strong>
          </span>

          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px] shrink-0">
            <span>Next: Direction 2 · Normative Modeling (Slide 22)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

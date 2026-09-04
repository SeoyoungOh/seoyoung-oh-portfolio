import React from 'react';
import { ArrowDown, ArrowRight, HelpCircle } from 'lucide-react';

interface WeakMotivationSlideProps {
  isActive: boolean;
}

export const WeakMotivationSlide: React.FC<WeakMotivationSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~10% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              WEAK SUPERVISION
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Weak Supervision: Can Diagnostic Labels Reveal Where?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Image-level diagnostic labels are available even when voxel-wise disease annotations are not.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Direction 1 · Annotation Efficiency</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CENTRAL HOOK & RESEARCH QUESTION STRIP (~8% height)
      ========================================================================= */}
      <div className="shrink-0 mb-2 px-3 py-2 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm lg:text-[15px] font-black tracking-tight text-[#24242A]">
            The diagnosis tells us who —{' '}
            <span className="text-[#6F69C9]">not where.</span>
          </span>
        </div>

        <div className="h-5 w-[1px] bg-[#D9DDEE] hidden md:block" />

        <div className="flex-1 text-right md:text-left">
          <span className="text-xs font-bold text-[#24242A] block leading-tight">
            Can a classifier reveal the image regions that support its diagnostic decision?
          </span>
          <span className="text-[10px] text-[#74747D] leading-tight block mt-0.5">
            This would allow spatial evidence to be extracted without voxel-wise disease annotations.
          </span>
        </div>
      </div>

      {/* =========================================================================
          MAIN 3-COLUMN CONCEPTUAL FLOW (~66% height)
          Col 1: Supervision Gap (What we don't have vs. what we have)
          Col 2: Conceptual Weak-Supervision Pipeline (What we can learn)
          Col 3: The Reliability Problem (Can we trust it?)
      ========================================================================= */}
      <div className="grid grid-cols-12 gap-3 flex-1 min-h-0 my-0.5 items-stretch">
        {/* ---------------------------------------------------------------------
            COLUMN 1: SUPERVISION GAP (Cols 1-4)
        --------------------------------------------------------------------- */}
        <div className="col-span-4 bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
              <span className="text-[10px] font-mono font-bold text-[#74747D] uppercase">
                SUPERVISION GAP
              </span>
              <span className="text-[9px] font-mono text-[#74747D]">
                WHAT WE HAVE VS. LACK
              </span>
            </div>

            {/* Muted Card: Dense Voxel-wise Disease Mask */}
            <div className="p-2.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10.5px] font-bold text-[#74747D] uppercase tracking-tight">
                  Dense Voxel-wise Disease Mask
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#F4F5FB] border border-[#D9DDEE] text-[9px] font-mono font-bold text-[#74747D]">
                  UNAVAILABLE
                </span>
              </div>
              <p className="text-[10.5px] text-[#74747D] leading-snug">
                No subject-specific voxel-wise ALS disease annotations.
              </p>
            </div>

            {/* Downward comparison cue */}
            <div className="flex items-center justify-center my-1 text-[#74747D]">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#74747D]">
                Clinical Reality
              </span>
            </div>

            {/* Emphasized Card: Image-level Diagnostic Label */}
            <div className="p-2.5 rounded-lg bg-[#D9D8F4]/25 border border-[#6F69C9]/50 shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10.5px] font-bold text-[#24242A] uppercase tracking-tight">
                  Image-level Diagnostic Label
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#6F69C9] text-white text-[9px] font-mono font-bold">
                  AVAILABLE
                </span>
              </div>

              {/* Example Labels */}
              <div className="flex items-center gap-1.5 my-1.5">
                <span className="px-2 py-0.5 rounded bg-white border border-[#D9DDEE] font-mono font-bold text-[10px] text-[#24242A]">
                  ALS
                </span>
                <span className="text-[9.5px] font-mono text-[#74747D]">vs.</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#D9DDEE] font-mono font-bold text-[10px] text-[#626A7C]">
                  CONTROL
                </span>
              </div>

              <p className="text-[10.5px] text-[#24242A] leading-snug">
                The diagnosis tells us which group the subject belongs to, but not where disease-related evidence is located.
              </p>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[10px] text-[#626A7C] leading-snug">
            <span className="font-semibold text-[#24242A]">Weak supervision premise:</span> Train on global diagnostic labels to unlock localized sensitivity signals.
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            COLUMN 2: WEAK-SUPERVISION PIPELINE (Cols 5-8)
        --------------------------------------------------------------------- */}
        <div className="col-span-4 bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
              <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                WEAK-SUPERVISION PIPELINE
              </span>
              <span className="text-[9px] font-mono text-[#74747D]">
                WHAT WE CAN LEARN
              </span>
            </div>

            {/* Pipeline Step 1: Input Pairing */}
            <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-center font-mono font-bold text-[9px] text-[#24242A]">
                  MRI
                </span>
                <span className="text-[10.5px] font-bold text-[#24242A]">Brain MRI</span>
              </div>
              <span className="text-[10px] font-mono text-[#6F69C9] font-bold">+</span>
              <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE] font-mono font-bold text-[9.5px] text-[#6F69C9]">
                ALS / Control Label
              </span>
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-1 text-[#6F69C9]">
              <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
            </div>

            {/* Pipeline Step 2: Diagnostic Classifier */}
            <div className="p-2 rounded-lg bg-[#24242A] text-white flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#6F69C9] font-mono font-bold text-[9px]">
                  f(x)
                </span>
                <span className="text-[10.5px] font-bold">Diagnostic Classifier</span>
              </div>
              <span className="text-[9px] font-mono text-[#D9DDEE]">
                Learns patient-level distinction
              </span>
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-1 text-[#6F69C9]">
              <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
            </div>

            {/* Pipeline Step 3: Spatial Explanation Field (Abstract CSS Heatmap) */}
            <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9D8F4]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase">
                  Spatial Explanation Extraction
                </span>
                <span className="text-[8.5px] font-mono text-[#74747D]">
                  Attribution field
                </span>
              </div>

              {/* Abstract CSS Heatmap Field (NO real MRI, NO raster image) */}
              <div className="relative w-full h-16 rounded-md bg-[#F4F5FB] border border-[#D9DDEE] overflow-hidden flex items-center justify-center">
                {/* Abstract anatomical silhouette outline */}
                <div className="absolute w-28 h-12 rounded-full border border-dashed border-[#D9DDEE] opacity-70" />
                <div className="absolute w-20 h-10 rounded-2xl border border-[#D9DDEE] opacity-50" />

                {/* Soft lavender activation hotspots (CSS radial gradients) */}
                <div
                  className="absolute w-12 h-12 rounded-full blur-sm"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(111,105,201,0.65) 0%, rgba(167,163,222,0.35) 45%, transparent 75%)',
                    top: '15%',
                    left: '32%',
                  }}
                />
                <div
                  className="absolute w-10 h-10 rounded-full blur-sm"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(111,105,201,0.7) 0%, rgba(217,216,244,0.4) 50%, transparent 80%)',
                    bottom: '15%',
                    right: '32%',
                  }}
                />
                <div
                  className="absolute w-7 h-7 rounded-full blur-xs"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(167,163,222,0.5) 0%, transparent 70%)',
                    top: '30%',
                    right: '45%',
                  }}
                />

                {/* Overlay Label */}
                <span className="relative z-10 px-2 py-0.5 rounded bg-white/95 border border-[#D9DDEE] text-[9px] font-mono text-[#24242A] font-bold shadow-2xs">
                  Disease-discriminative spatial evidence
                </span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[10px] text-[#626A7C] leading-snug">
            <span className="font-semibold text-[#24242A]">Careful terminology:</span> Yields disease-discriminative spatial evidence, not an explicit lesion mask or pathology segmentation.
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            COLUMN 3: THE RELIABILITY PROBLEM (Cols 9-12)
        --------------------------------------------------------------------- */}
        <div className="col-span-4 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
              <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                THE REMAINING QUESTION
              </span>
              <span className="text-[9.5px] font-bold text-[#24242A] flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#6F69C9]" />
                CAN WE TRUST IT?
              </span>
            </div>

            {/* Critical Contrast Banner */}
            <div className="p-2 rounded-lg bg-white border border-[#D9D8F4] text-center mb-2 shadow-2xs">
              <div className="flex items-center justify-center gap-1.5 font-mono font-black text-[11px]">
                <span className="text-[#24242A]">CLASSIFICATION ACCURACY</span>
                <span className="text-[#6F69C9] text-sm">≠</span>
                <span className="text-[#24242A]">LOCALIZATION RELIABILITY</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1 mt-1 border-t border-[#D9DDEE]/80 text-[8.5px] text-[#626A7C] text-left">
                <div className="p-1 rounded bg-[#FAFAFC]">
                  <strong className="text-[#24242A] block">Classification:</strong> Was diagnostic label predicted correctly?
                </div>
                <div className="p-1 rounded bg-[#FAFAFC]">
                  <strong className="text-[#6F69C9] block">Localization:</strong> Is supporting evidence meaningful &amp; stable?
                </div>
              </div>
            </div>

            {/* Three Concise Concerns */}
            <div className="space-y-1.5">
              {/* Concern 1: Cue Disagreement */}
              <div className="p-2 rounded-lg bg-white border border-[#D9DDEE] shadow-2xs">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-bold text-[#24242A]">
                    1. Different cues may disagree
                  </span>
                  <span className="text-[8.5px] font-mono text-[#74747D]">Disagreement</span>
                </div>
                <p className="text-[9.5px] text-[#626A7C] leading-snug">
                  Different explanation signals can highlight different spatial regions.
                </p>
              </div>

              {/* Concern 2: Instability */}
              <div className="p-2 rounded-lg bg-white border border-[#D9DDEE] shadow-2xs">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-bold text-[#24242A]">
                    2. Explanations may be unstable
                  </span>
                  <span className="text-[8.5px] font-mono text-[#74747D]">Instability</span>
                </div>
                <p className="text-[9.5px] text-[#626A7C] leading-snug">
                  Small perturbations can change the resulting spatial evidence.
                </p>
              </div>

              {/* Concern 3: Decision Faithfulness */}
              <div className="p-2 rounded-lg bg-white border border-[#D9DDEE] shadow-2xs">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-bold text-[#24242A]">
                    3. Plausible does not mean faithful
                  </span>
                  <span className="text-[8.5px] font-mono text-[#74747D]">Faithfulness</span>
                </div>
                <p className="text-[9.5px] text-[#626A7C] leading-snug">
                  A visually plausible map may not truly reflect the classifier decision.
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#D9D8F4]/30 border border-[#A7A3DE]/50 text-[10px] text-[#24242A] leading-snug">
            <span className="font-bold text-[#6F69C9]">Key transition:</span> An explanation map alone is insufficient without explicit verification of its consistency.
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: TAKEAWAY & TRANSITION TO SLIDE 16 (~12% height)
      ========================================================================= */}
      <div className="shrink-0 mt-1.5 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          Weak supervision removes the need for voxel-wise disease masks — but introduces a new challenge:{' '}
          <span className="text-[#6F69C9] font-black">which spatial evidence can be trusted.</span>
        </p>

        <div className="mt-1 pt-1 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            So the goal was not simply to generate an explanation map — but to estimate its reliability.
          </span>
          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px]">
            <span>Next: Reliability-Consistent Localization (Slide 16)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};


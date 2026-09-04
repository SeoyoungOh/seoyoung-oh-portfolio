import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WeakMeaningSlideProps {
  isActive: boolean;
}

export const WeakMeaningSlide: React.FC<WeakMeaningSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~12% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              WEAK SUPERVISION · METHODOLOGICAL SYNTHESIS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              What Did Weak Supervision Tell Us?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Diagnostic labels can provide meaningful spatial evidence — but the interpretation must remain cautious.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Direction 1 Synthesis</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MIDDLE: Three Balanced Conceptual Pillars (~56% height)
          01: Diagnostic labels can localize
          02: Reliability changes what we trust
          03: Evidence is not pathology
      ========================================================================= */}
      <div className="grid grid-cols-3 gap-3 flex-1 min-h-0 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            01 — DIAGNOSTIC LABELS CAN LOCALIZE
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9DDEE]/80">
              <span className="font-mono text-xs font-black text-[#6F69C9] px-2 py-0.5 rounded bg-[#D9D8F4]/40 border border-[#A7A3DE]/50">
                01
              </span>
              <span className="text-[9.5px] font-mono font-bold text-[#74747D] uppercase tracking-wider">
                SPATIAL EVIDENCE
              </span>
            </div>

            <h3 className="text-sm lg:text-[15px] font-bold text-[#24242A] leading-snug mb-2">
              Diagnostic labels can provide spatial evidence
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Even <span className="text-[#6F69C9] font-bold">without voxel-wise disease masks</span>, image-level diagnostic supervision can reveal disease-discriminative spatial patterns.
            </p>
          </div>

          <div className="pt-2.5 mt-3 border-t border-[#D9DDEE]/70">
            <span className="text-[10.5px] font-mono text-[#74747D] block leading-tight">
              Weak supervision can move beyond classification toward localization.
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            02 — RELIABILITY CHANGES WHAT WE TRUST
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border-2 border-[#6F69C9]/50 p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9D8F4]">
              <span className="font-mono text-xs font-black text-[#6F69C9] px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/60">
                02
              </span>
              <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider">
                CALIBRATED TRUST
              </span>
            </div>

            <h3 className="text-sm lg:text-[15px] font-bold text-[#24242A] leading-snug mb-2">
              Reliability makes the evidence more useful
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Agreement, perturbation stability, and decision faithfulness identify spatial evidence that is more stable and anatomically concentrated.
            </p>
          </div>

          <div className="pt-2.5 mt-3 border-t border-[#D9D8F4]">
            <span className="text-[10.5px] font-mono text-[#24242A] block leading-tight">
              Reliability is not only an uncertainty display — it changes{' '}
              <span className="text-[#6F69C9] font-bold">which evidence contributes</span> to the final map.
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            03 — EVIDENCE IS NOT PATHOLOGY
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9DDEE]/80">
              <span className="font-mono text-xs font-black text-[#74747D] px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE]">
                03
              </span>
              <span className="text-[9.5px] font-mono font-bold text-[#74747D] uppercase tracking-wider">
                INTERPRETATION LIMIT
              </span>
            </div>

            <h3 className="text-sm lg:text-[15px] font-bold text-[#24242A] leading-snug mb-2">
              Disease-discriminative evidence is not pathology
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              A region can support the classifier decision without being a direct voxel-wise marker of ALS pathology.
            </p>
          </div>

          <div className="pt-2.5 mt-3 border-t border-[#D9DDEE]/70">
            <span className="text-[10.5px] font-mono text-[#74747D] block leading-tight">
              The maps support <span className="text-[#6F69C9] font-bold">anatomical interpretation</span>, not lesion segmentation or pathological ground truth.
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CENTRAL VISUAL CONTRAST STRIP (~10% height)
          Concise conceptual progression vs what it is NOT
      ========================================================================= */}
      <div className="shrink-0 my-1 p-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] flex flex-col items-center justify-center text-center shadow-2xs">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#24242A]">
          <span className="px-2 py-0.5 rounded bg-white border border-[#D9DDEE]">CLASSIFICATION</span>
          <span className="text-[#6F69C9]">→</span>
          <span className="px-2 py-0.5 rounded bg-white border border-[#D9DDEE]">DISEASE-DISCRIMINATIVE EVIDENCE</span>
          <span className="text-[#6F69C9]">→</span>
          <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/40 border border-[#A7A3DE] text-[#6F69C9]">ANATOMICAL INTERPRETATION</span>
        </div>

        <div className="mt-1 flex items-center gap-1.5 text-[9.5px] font-mono text-[#74747D]">
          <span className="italic">not</span>
          <span className="text-[#74747D] line-through">
            CLASSIFICATION → PATHOLOGY SEGMENTATION
          </span>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Main Takeaway & Transition to Slide 21 (~14% height)
      ========================================================================= */}
      <div className="shrink-0 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          Weak supervision is valuable because it extracts{' '}
          <span className="text-[#6F69C9] font-black">spatial evidence</span> from labels that are easy to obtain —
          while reliability helps{' '}
          <span className="text-[#6F69C9] font-black">prevent us from over-interpreting</span> that evidence.
        </p>

        <div className="mt-1.5 pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            But the approach still depends on patient diagnostic labels and on the classifier itself.
          </span>
          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px]">
            <span>Next: Limitations of Weak Supervision (Slide 21)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

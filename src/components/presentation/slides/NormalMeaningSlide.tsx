import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface NormalMeaningSlideProps {
  isActive: boolean;
}

export const NormalMeaningSlide: React.FC<NormalMeaningSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~10% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              HEALTHY-ONLY MODELING · CONCEPTUAL SYNTHESIS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              What Did Healthy-Only Modeling Tell Us?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Learning normality from healthy MRI can produce useful spatial evidence without patient supervision.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Direction 2 Synthesis · Beyond Patient Labels</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN LAYOUT: Three Balanced Conceptual Statements (~48% height)
          01: Patient Labels Are Not Required
          02: Calibration Makes Evidence Usable
          03: Deviation Is Not Pathology
      ========================================================================= */}
      <div className="grid grid-cols-3 gap-3.5 flex-1 min-h-0 my-1.5 items-stretch">
        {/* ---------------------------------------------------------------------
            01 — PATIENT LABELS ARE NOT REQUIRED
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#E3F0E6] border border-[#C3E0C9] text-[9.5px] font-mono font-bold text-[#24242A] uppercase flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#24242A]" />
                01 · NO PATIENT LABELS
              </span>
              <span className="text-[9px] font-mono text-[#74747D]">Healthy Reference</span>
            </div>

            <h3 className="text-sm font-bold text-[#24242A] leading-snug mb-2">
              Normality can be learned from{' '}
              <span className="text-[#6F69C9] font-black">healthy MRI alone</span>
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed mb-3">
              The framework does not require patient labels or voxel-wise disease annotations to generate spatial deviation evidence.
            </p>
          </div>

          <div className="pt-2.5 border-t border-[#D9DDEE]/80">
            <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-[10.5px] text-[#24242A] font-medium leading-tight">
              Healthy subjects provide the reference for what should be considered normal.
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            02 — CALIBRATION MAKES EVIDENCE USABLE
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/70 text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#6F69C9]" />
                02 · RELIABILITY &amp; FPR CONTROL
              </span>
              <span className="text-[9px] font-mono text-[#74747D]">Calibration</span>
            </div>

            <h3 className="text-sm font-bold text-[#24242A] leading-snug mb-2">
              Reliability and FPR control are essential
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed mb-3">
              Projection uncertainty suppresses unstable deviations, while healthy-reference calibration controls false-positive evidence.
            </p>
          </div>

          <div className="pt-2.5 border-t border-[#D9DDEE]/80">
            <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-[10.5px] text-[#24242A] leading-tight">
              The goal is not to maximize anomaly signal — it is to retain evidence that is both{' '}
              <strong className="text-[#6F69C9]">stable</strong> and{' '}
              <strong className="text-[#6F69C9]">unusual relative to healthy subjects</strong>.
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            03 — DEVIATION IS NOT PATHOLOGY
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#D9DDEE]/80">
              <span className="px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[9.5px] font-mono font-bold text-[#74747D] uppercase flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-[#74747D]" />
                03 · CAREFUL INTERPRETATION
              </span>
              <span className="text-[9px] font-mono text-[#74747D]">Anatomical</span>
            </div>

            <h3 className="text-sm font-bold text-[#24242A] leading-snug mb-2">
              Deviation from normal is not direct pathology
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed mb-3">
              A region may differ from the learned healthy reference without representing a specific disease mechanism.
            </p>
          </div>

          <div className="pt-2.5 border-t border-[#D9DDEE]/80">
            <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-[10.5px] text-[#24242A] leading-tight">
              The output supports <strong className="text-[#6F69C9]">anatomical interpretation</strong> of abnormal evidence, not voxel-wise pathological segmentation.
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SIMPLE CENTRAL FLOW (~12% height)
          HEALTHY REFERENCE → RELIABLE DEVIATION → ANATOMICAL INTERPRETATION
      ========================================================================= */}
      <div className="shrink-0 my-1 p-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#24242A]">
          <span className="px-2 py-0.5 rounded bg-white border border-[#D9DDEE] text-[#24242A]">
            HEALTHY REFERENCE
          </span>
          <span className="text-[#6F69C9]">→</span>
          <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE] text-[#6F69C9]">
            RELIABLE DEVIATION
          </span>
          <span className="text-[#6F69C9]">→</span>
          <span className="px-2 py-0.5 rounded bg-white border border-[#D9DDEE] text-[#24242A]">
            ANATOMICAL INTERPRETATION
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#74747D] mt-1">
          <span className="italic">not:</span>
          <span className="line-through text-[#74747D]/70">
            HEALTHY REFERENCE → PATHOLOGY GROUND TRUTH
          </span>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Connection to the Thesis & Transition (~22% height)
      ========================================================================= */}
      <div className="shrink-0 p-3 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs space-y-1.5">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          Healthy-only modeling goes one step beyond weak supervision: it{' '}
          <span className="text-[#6F69C9] font-black">removes patient supervision</span> while preserving a{' '}
          <span className="text-[#6F69C9] font-black">controlled, interpretable spatial evidence</span> signal.
        </p>

        <p className="text-[10.5px] text-[#626A7C] text-center leading-relaxed max-w-4xl mx-auto">
          For ALS, this is particularly valuable because dense disease labels are unavailable and clinically meaningful evidence must be interpreted through anatomy rather than lesion masks.
        </p>

        <div className="pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            But healthy-only modeling introduces its own assumptions and limitations.
          </span>

          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px] shrink-0">
            <span>Next: Limitations of Healthy-Only Modeling (Slide 28)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

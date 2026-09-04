import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Layers, Sparkles } from 'lucide-react';

interface SynthesisComparisonSlideProps {
  isActive: boolean;
}

export const SynthesisComparisonSlide: React.FC<SynthesisComparisonSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~9% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              SYNTHESIS · METHODOLOGICAL COMPARISON
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Two Complementary Ways to Extract Disease Evidence
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              The two approaches solve different parts of the same annotation-scarcity problem.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Complementary Paradigms</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CENTRAL DIFFERENCE STRIP (~5% height)
          Quick side-by-side core question contrast
      ========================================================================= */}
      <div className="shrink-0 mb-1 px-3 py-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase">
            WEAK SUPERVISION:
          </span>
          <span className="text-[#626A7C]">Disease-informed</span>
          <span className="text-[#74747D]">→</span>
          <span className="font-bold text-[#6F69C9]">“What supports the diagnosis?”</span>
        </div>

        <span className="text-[10px] font-mono font-bold text-[#74747D] uppercase px-2 py-0.5 rounded bg-white border border-[#D9DDEE]">
          VERSUS
        </span>

        <div className="flex items-center gap-1.5">
          <span className="text-[9.5px] font-mono font-bold text-[#24242A] uppercase">
            HEALTHY-ONLY:
          </span>
          <span className="text-[#626A7C]">Normality-informed</span>
          <span className="text-[#74747D]">→</span>
          <span className="font-bold text-[#6F69C9]">“What deviates from healthy anatomy?”</span>
        </div>
      </div>

      {/* =========================================================================
          MAIN ALIGNED TWO-COLUMN COMPARISON (~54% height)
          Rows: Supervision, Question, Output, Strength, Limitation
      ========================================================================= */}
      <div className="flex-1 min-h-0 grid grid-cols-2 gap-3.5 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            LEFT COLUMN: Weak Supervision (Lavender Accent)
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          {/* Column Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block">
                PARADIGM 1
              </span>
              <h3 className="text-xs font-black text-[#24242A] tracking-tight">
                WEAK SUPERVISION
              </h3>
            </div>
            <span className="text-[9.5px] font-mono text-[#626A7C] px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE]">
              Disease-discriminative localization
            </span>
          </div>

          {/* Aligned Rows */}
          <div className="space-y-1.5 my-1 flex-1 flex flex-col justify-between">
            {/* Row 1: Supervision */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10.5px]">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                SUPERVISION
              </span>
              <p className="font-bold text-[#24242A] leading-tight">
                Diagnostic labels (ALS / Control)
              </p>
              <p className="text-[9.5px] text-[#74747D] italic">No voxel-wise disease masks</p>
            </div>

            {/* Row 2: Question */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10.5px]">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                QUESTION
              </span>
              <p className="font-bold text-[#6F69C9] leading-tight">
                What supports the diagnostic decision?
              </p>
            </div>

            {/* Row 3: Output */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10.5px]">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                OUTPUT
              </span>
              <p className="font-bold text-[#24242A] leading-tight">
                Disease-discriminative spatial evidence
              </p>
            </div>

            {/* Row 4: Strength */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10px]">
              <span className="text-[8.5px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" /> MAIN STRENGTH
              </span>
              <p className="text-[#24242A] leading-snug">
                Uses patient-level diagnostic information directly to exploit disease-discriminative signals; reliability calibration improves spatial trustworthiness.
              </p>
            </div>

            {/* Row 5: Limitation */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10px]">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5 flex items-center gap-1">
                <AlertCircle className="w-2.5 h-2.5" /> MAIN LIMITATION
              </span>
              <p className="text-[#626A7C] leading-snug">
                Still depends on labeled patient data and classifier behavior; evidence reflects discriminative decision support, not direct pathology.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            RIGHT COLUMN: Healthy-Only Normal Projection (Mint/Lavender Accent)
        --------------------------------------------------------------------- */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          {/* Column Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#24242A] uppercase block">
                PARADIGM 2
              </span>
              <h3 className="text-xs font-black text-[#24242A] tracking-tight">
                HEALTHY-ONLY NORMAL PROJECTION
              </h3>
            </div>
            <span className="text-[9.5px] font-mono text-[#24242A] px-2 py-0.5 rounded bg-[#E3F0E6] border border-[#C3E0C9]">
              Deviation-from-normal localization
            </span>
          </div>

          {/* Aligned Rows */}
          <div className="space-y-1.5 my-1 flex-1 flex flex-col justify-between">
            {/* Row 1: Supervision */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10.5px]">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                SUPERVISION
              </span>
              <p className="font-bold text-[#24242A] leading-tight">
                Healthy MRI only
              </p>
              <p className="text-[9.5px] text-[#74747D] italic">No patient labels · No voxel masks</p>
            </div>

            {/* Row 2: Question */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10.5px]">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                QUESTION
              </span>
              <p className="font-bold text-[#6F69C9] leading-tight">
                What deviates from learned healthy anatomy?
              </p>
            </div>

            {/* Row 3: Output */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10.5px]">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                OUTPUT
              </span>
              <p className="font-bold text-[#24242A] leading-tight">
                Healthy-reference deviation evidence
              </p>
            </div>

            {/* Row 4: Strength */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10px]">
              <span className="text-[8.5px] font-mono font-bold text-[#24242A] uppercase block mb-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-[#24242A]" /> MAIN STRENGTH
              </span>
              <p className="text-[#24242A] leading-snug">
                Removes dependence on patient diagnostic labels; healthy calibration provides explicit false-positive control when disease labels are scarce.
              </p>
            </div>

            {/* Row 5: Limitation */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]/80 text-[10px]">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5 flex items-center gap-1">
                <AlertCircle className="w-2.5 h-2.5" /> MAIN LIMITATION
              </span>
              <p className="text-[#626A7C] leading-snug">
                Depends on healthy cohort representativeness and projection fidelity; deviation from normal is not disease-specific pathology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Complementarity Synthesis Block & Main Takeaway (~30% height)
      ========================================================================= */}
      <div className="shrink-0 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs space-y-1.5">
        {/* Complementary synthesis headline */}
        <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE]/80">
          <span className="text-[10px] font-mono font-black text-[#6F69C9] tracking-wider uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#6F69C9]" />
            COMPLEMENTARY, NOT INTERCHANGEABLE
          </span>

          {/* Thesis summary line */}
          <div className="text-[10px] font-mono font-bold text-[#24242A] flex items-center gap-1">
            <span>Different supervision</span>
            <span className="text-[#6F69C9]">→</span>
            <span>different evidence</span>
            <span className="text-[#6F69C9]">→</span>
            <span className="text-[#6F69C9] font-black">shared anatomical interpretation</span>
          </div>
        </div>

        {/* Flow equation */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[#626A7C]">
            <span className="font-bold text-[#24242A] block text-[10.5px]">Weak Supervision</span>
            Captures evidence discriminative for disease labels
          </div>
          <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[#626A7C]">
            <span className="font-bold text-[#24242A] block text-[10.5px]">Healthy Projection</span>
            Captures evidence deviating from healthy reference
          </div>
          <div className="p-1 rounded bg-[#D9D8F4]/40 border border-[#A7A3DE] text-[#24242A] flex items-center justify-center font-bold text-[10.5px]">
            Together: two complementary views of ALS spatial evidence
          </div>
        </div>

        {/* Shared principles */}
        <div className="px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[9.5px] text-[#626A7C] flex items-center justify-between">
          <span className="font-bold text-[#24242A]">Both approaches share:</span>
          <span>1. Avoid dense voxel-wise disease annotations</span>
          <span>·</span>
          <span>2. Require reliability-aware calibration</span>
          <span>·</span>
          <span>3. Rely on anatomical references for ALS interpretation</span>
        </div>

        {/* Main Takeaway & Transition to Slide 31 */}
        <div className="pt-1 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <p className="text-[#24242A] font-medium leading-tight">
            There is no single “best” approach — the value lies in using different supervision assumptions to extract{' '}
            <strong className="text-[#6F69C9]">complementary evidence</strong> under{' '}
            <strong className="text-[#6F69C9]">annotation scarcity</strong>.
          </p>

          <div className="flex items-center gap-1 text-[#6F69C9] font-mono font-bold text-[9.5px] shrink-0 ml-3">
            <span>Next: Thesis Contributions (Slide 31)</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

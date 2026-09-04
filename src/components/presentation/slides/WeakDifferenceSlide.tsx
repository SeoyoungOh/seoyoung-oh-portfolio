import React, { useState } from 'react';
import { ArrowDown, ArrowRight, CheckCircle2, AlertCircle, Layers } from 'lucide-react';

interface WeakDifferenceSlideProps {
  isActive: boolean;
}

export const WeakDifferenceSlide: React.FC<WeakDifferenceSlideProps> = () => {
  // Optional light hover state on the three reliability terms
  const [hoveredTerm, setHoveredTerm] = useState<'disagreement' | 'stability' | 'faithfulness' | null>(null);

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~10% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              WEAK SUPERVISION · METHODOLOGICAL NOVELTY
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              What Makes This Different?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Instead of trusting one explanation map, the method estimates which cue should be trusted at each spatial location.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Spatially Adaptive Fusion</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          THREE-STEP SUMMARY STRIP (~5% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1 px-3 py-1 rounded-lg bg-white border border-[#D9DDEE] shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10.5px] font-mono">
          <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[#24242A] font-bold">
            1. COMPARE CUES
          </span>
          <span className="text-[#6F69C9] font-bold">→</span>
          <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[#24242A] font-bold">
            2. ESTIMATE RELIABILITY
          </span>
          <span className="text-[#6F69C9] font-bold">→</span>
          <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/40 border border-[#A7A3DE] text-[#6F69C9] font-black">
            3. ADAPTIVELY WEIGHT EVIDENCE
          </span>
        </div>

        <div className="text-[9.5px] font-mono text-[#74747D] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
          <span>The fusion is spatially adaptive, not a fixed global average across cues</span>
        </div>
      </div>

      {/* =========================================================================
          MAIN COMPARISON: Two Columns (~71% height)
          Left (4 cols / ~33%): Conventional Explanation (Muted, Cool Gray / Charcoal)
          Right (8 cols / ~67%): Our Reliability-Calibrated Localization (Deep Lavender)
      ========================================================================= */}
      <div className="grid grid-cols-12 gap-2.5 flex-1 min-h-0 my-0.5 items-stretch">
        {/* ---------------------------------------------------------------------
            LEFT: Conventional Explanation (4 cols, visually muted)
        --------------------------------------------------------------------- */}
        <div className="col-span-4 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#D9DDEE]">
              <span className="px-1.5 py-0.2 rounded bg-white border border-[#D9DDEE] text-[9px] font-mono font-bold text-[#74747D] uppercase">
                CONVENTIONAL EXPLANATION
              </span>
              <span className="text-[8.5px] font-mono text-[#74747D]">Single map</span>
            </div>

            {/* Linear Flow */}
            <div className="space-y-1 my-1 text-[10px]">
              <div className="p-1.5 rounded-md bg-white border border-[#D9DDEE] text-center font-bold text-[#24242A]">
                Classifier
              </div>
              <div className="flex justify-center text-[#74747D]">
                <ArrowDown className="w-3 h-3 stroke-[2]" />
              </div>
              <div className="p-1.5 rounded-md bg-white border border-[#D9DDEE] text-center font-bold text-[#24242A]">
                Single attribution / explanation map
              </div>
              <div className="flex justify-center text-[#74747D]">
                <ArrowDown className="w-3 h-3 stroke-[2]" />
              </div>
              <div className="p-1.5 rounded-md bg-white border border-[#D9DDEE] text-center font-bold text-[#24242A]">
                Localization
              </div>
            </div>

            {/* Simple conceptual expression */}
            <div className="mt-2 p-1.5 rounded-lg bg-white border border-[#D9DDEE] text-center">
              <span className="text-[8.5px] font-mono text-[#74747D] uppercase block mb-0.5">
                Implicit Assumption
              </span>
              <div className="font-mono text-xs font-bold text-[#24242A]">
                M(v) = one explanation map
              </div>
              <p className="text-[9px] text-[#626A7C] mt-1 leading-snug">
                Every highlighted location is implicitly treated as equally trustworthy.
              </p>
            </div>

            {/* Limitation Box */}
            <div className="mt-2 p-2 rounded-lg bg-white border border-[#D9DDEE] text-[9.5px]">
              <div className="flex items-center gap-1 text-[#74747D] font-bold mb-1">
                <AlertCircle className="w-3 h-3 text-[#74747D]" />
                <span>Fundamental limitation:</span>
              </div>
              <p className="text-[#626A7C] leading-snug mb-1">
                No explicit mechanism tells us whether the evidence is:
              </p>
              <ul className="space-y-0.5 pl-2 text-[#74747D] font-mono text-[8.5px]">
                <li>• Consistent with other cues</li>
                <li>• Stable under perturbation</li>
                <li>• Faithful to the classifier decision</li>
              </ul>
            </div>
          </div>

          {/* Bottom Contrast Question for Conventional */}
          <div className="pt-1.5 border-t border-[#D9DDEE] text-center">
            <span className="text-[8.5px] font-mono text-[#74747D] uppercase block">
              Conventional Question
            </span>
            <span className="text-[10px] font-bold text-[#74747D] italic">
              "Where is the classifier looking?"
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            RIGHT: Our Approach (8 cols, Lavender emphasis & mathematical core)
        --------------------------------------------------------------------- */}
        <div className="col-span-8 bg-white rounded-xl border-2 border-[#6F69C9]/50 p-3 flex flex-col justify-between shadow-2xs">
          <div>
            {/* Header tag */}
            <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#D9D8F4]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/60 text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase">
                  RELIABILITY-CALIBRATED LOCALIZATION
                </span>
                <span className="text-[10px] font-mono font-bold text-[#24242A]">
                  Multiple complementary cues: M₁(v), M₂(v), …, Mₖ(v)
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#6F69C9] font-bold">
                Thesis Ch. 6
              </span>
            </div>

            {/* Top Grid: Three Reliability Inputs */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              {/* Term 1: Disagreement */}
              <div
                onMouseEnter={() => setHoveredTerm('disagreement')}
                onMouseLeave={() => setHoveredTerm(null)}
                className={`p-2 rounded-lg transition-all border ${
                  hoveredTerm === 'disagreement'
                    ? 'bg-[#D9D8F4]/30 border-[#6F69C9] shadow-2xs'
                    : 'bg-[#FAFAFC] border-[#D9DDEE]'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-mono text-xs font-black text-[#6F69C9]">Dₖ(v)</span>
                  <span className="text-[8.5px] font-mono text-[#74747D]">Cue Disagreement</span>
                </div>
                <h4 className="text-[10px] font-bold text-[#24242A] leading-tight">
                  Agreement with other cues
                </h4>
                <p className="text-[9px] text-[#626A7C] leading-snug mt-1">
                  A cue is less trusted where it strongly disagrees with the others.
                </p>
              </div>

              {/* Term 2: Stability */}
              <div
                onMouseEnter={() => setHoveredTerm('stability')}
                onMouseLeave={() => setHoveredTerm(null)}
                className={`p-2 rounded-lg transition-all border ${
                  hoveredTerm === 'stability'
                    ? 'bg-[#D9D8F4]/30 border-[#6F69C9] shadow-2xs'
                    : 'bg-[#FAFAFC] border-[#D9DDEE]'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-mono text-xs font-black text-[#6F69C9]">Pₖ(v)</span>
                  <span className="text-[8.5px] font-mono text-[#74747D]">Perturbation</span>
                </div>
                <h4 className="text-[10px] font-bold text-[#24242A] leading-tight">
                  Stability under perturbation
                </h4>
                <p className="text-[9px] text-[#626A7C] leading-snug mt-1">
                  A cue is less trusted where small input changes make its localization unstable.
                </p>
              </div>

              {/* Term 3: Faithfulness */}
              <div
                onMouseEnter={() => setHoveredTerm('faithfulness')}
                onMouseLeave={() => setHoveredTerm(null)}
                className={`p-2 rounded-lg transition-all border ${
                  hoveredTerm === 'faithfulness'
                    ? 'bg-[#D9D8F4]/30 border-[#6F69C9] shadow-2xs'
                    : 'bg-[#FAFAFC] border-[#D9DDEE]'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-mono text-xs font-black text-[#6F69C9]">Fₖ</span>
                  <span className="text-[8.5px] font-mono text-[#74747D]">Decision Support</span>
                </div>
                <h4 className="text-[10px] font-bold text-[#24242A] leading-tight">
                  Decision faithfulness
                </h4>
                <p className="text-[9px] text-[#626A7C] leading-snug mt-1">
                  A cue is favored when it genuinely supports the diagnostic decision.
                </p>
              </div>
            </div>

            {/* Middle Section: Two-Column Layout (Equations on Left, Conceptual Schematic on Right) */}
            <div className="grid grid-cols-12 gap-2.5 items-stretch mb-1.5">
              {/* Left 7 cols: Three Compact Equations */}
              <div className="col-span-7 space-y-1.5">
                {/* 1. Reliability Energy Equation */}
                <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase">
                      1. Reliability Energy Equation
                    </span>
                    <span className="text-[8.5px] font-mono text-[#6F69C9] font-bold">
                      Lower Eₖ(v) = <strong className="text-[#6F69C9]">more trustworthy cue</strong>
                    </span>
                  </div>
                  <div className="font-mono text-xs font-black text-[#24242A] py-0.5 tracking-wide">
                    Eₖ(v) = α Dₖ(v) + β Pₖ(v) − γ Fₖ
                  </div>
                  <span className="text-[8.5px] text-[#74747D] block">
                    Reliability energy for cue k at location v
                  </span>
                </div>

                {/* 2. Automatic Spatial Weighting */}
                <div className="p-2 rounded-lg bg-[#D9D8F4]/30 border border-[#A7A3DE]/70">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[8.5px] font-mono font-bold text-[#6F69C9] uppercase">
                      2. Spatially Adaptive Cue Weight
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-white text-[8px] font-mono text-[#6F69C9] font-bold border border-[#A7A3DE]/50">
                      Voxel-specific
                    </span>
                  </div>
                  <div className="font-mono text-xs font-black text-[#6F69C9] py-0.5 tracking-wide">
                    ρₖ(v) = softmaxₖ [ −Eₖ(v) / τ ]
                  </div>
                  <p className="text-[9.5px] text-[#24242A] leading-tight font-medium mt-0.5">
                    The cue weights are determined <span className="text-[#6F69C9] font-bold">automatically</span>{' '}
                    and <span className="text-[#6F69C9] font-bold">at each spatial location</span>.
                  </p>
                </div>

                {/* 3. Final Fusion */}
                <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase">
                      3. Reliability-Weighted Fusion
                    </span>
                    <span className="text-[8.5px] font-mono text-[#74747D]">
                      Non-uniform combination
                    </span>
                  </div>
                  <div className="font-mono text-xs font-black text-[#24242A] py-0.5 tracking-wide">
                    M_cal(v) = Σₖ ρₖ(v) Mₖ(v)
                  </div>
                  <p className="text-[9px] text-[#626A7C] leading-snug">
                    Different cues can dominate in different regions of the same image.
                  </p>
                </div>
              </div>

              {/* Right 5 cols: Visual Example (Schematic) */}
              <div className="col-span-5 bg-[#FAFAFC] rounded-lg border border-[#D9DDEE] p-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#D9DDEE]">
                    <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                      CONCEPTUAL SCHEMATIC
                    </span>
                    <span className="px-1 py-0.2 rounded bg-white text-[8px] font-mono text-[#74747D] border border-[#D9DDEE]">
                      Illustrative only
                    </span>
                  </div>
                  <p className="text-[9px] text-[#626A7C] leading-tight mb-1.5">
                    Different locations → different cue weights:
                  </p>

                  {/* Location A */}
                  <div className="p-1.5 rounded bg-white border border-[#D9DDEE] mb-1.5 text-[9px]">
                    <span className="font-mono font-bold text-[#24242A] block mb-1">LOCATION A (Cortex)</span>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D] font-mono">Cue 1</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-16 h-2 rounded bg-[#6F69C9]" />
                          <span className="font-mono font-bold text-[#6F69C9]">0.65</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D] font-mono">Cue 2</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-2 rounded bg-[#D9D8F4]" />
                          <span className="font-mono text-[#74747D]">0.20</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D] font-mono">Cue 3</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-2 rounded bg-[#D9D8F4]" />
                          <span className="font-mono text-[#74747D]">0.15</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location B */}
                  <div className="p-1.5 rounded bg-white border border-[#D9DDEE] text-[9px]">
                    <span className="font-mono font-bold text-[#24242A] block mb-1">LOCATION B (Brainstem)</span>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D] font-mono">Cue 1</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-2 rounded bg-[#D9D8F4]" />
                          <span className="font-mono text-[#74747D]">0.10</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D] font-mono">Cue 2</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-2 rounded bg-[#D9D8F4]" />
                          <span className="font-mono text-[#74747D]">0.25</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D] font-mono">Cue 3</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-16 h-2 rounded bg-[#6F69C9]" />
                          <span className="font-mono font-bold text-[#6F69C9]">0.65</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hyperparameter Caution footnote */}
                <div className="pt-1 mt-1 border-t border-[#D9DDEE]/80 text-[8px] text-[#74747D] leading-tight font-mono">
                  α, β, γ and τ control formulation; resulting weights ρₖ(v) vary automatically across locations.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Contrast Question for Ours */}
          <div className="pt-1.5 border-t border-[#D9D8F4] text-center">
            <span className="text-[8.5px] font-mono text-[#6F69C9] font-bold uppercase block">
              Our Reliability Question
            </span>
            <span className="text-xs font-black text-[#6F69C9]">
              "Which spatial evidence should be trusted — and how much?"
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition to Slide 18 (~12% height)
      ========================================================================= */}
      <div className="shrink-0 mt-1 p-2 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          The novelty is not just using multiple explanations — it is converting reliability into{' '}
          <span className="text-[#6F69C9] font-black">spatially adaptive weights</span> before fusion.
        </p>

        <div className="mt-1 pt-1 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            Does this adaptive reliability weighting actually improve localization?
          </span>
          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px]">
            <span>Next: Benchmark Results (Slide 18)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};



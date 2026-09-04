import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NormalDifferenceSlideProps {
  isActive: boolean;
}

export const NormalDifferenceSlide: React.FC<NormalDifferenceSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~11% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              HEALTHY-ONLY MODELING · RELIABILITY PRINCIPLE
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              What Makes Normal Projection Reliable?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              A large deviation is not enough — reliable evidence must also be stable and rare in healthy subjects.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Core Principle: Large Residual ≠ Pathology</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN HORIZONTAL PROGRESSION (5 Columns, ~62% height)
          01: Healthy Projections → 02: Deviation → 03: Uncertainty → 04: Conservative Evidence → 05: Healthy Calibration
      ========================================================================= */}
      <div className="grid grid-cols-5 gap-2.5 flex-1 min-h-0 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            STEP 1: Stochastic Healthy Projections
        --------------------------------------------------------------------- */}
        <div
          tabIndex={0}
          className="bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs transition-all duration-150 cursor-default outline-hidden hover:border-[#6F69C9] focus:border-[#6F69C9] active:border-[#6F69C9] hover:bg-[#F8F7FD] focus:bg-[#F8F7FD] active:bg-[#F8F7FD] hover:-translate-y-0.5 hover:shadow-xs focus:-translate-y-0.5 focus:shadow-xs"
        >
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D9DDEE]/80">
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[9px] font-mono font-bold text-[#74747D] uppercase">
                01 · PROJECTIONS
              </span>
              <span className="text-[8.5px] font-mono text-[#74747D]">Stochastic</span>
            </div>

            <h3 className="text-xs font-bold text-[#24242A] leading-snug mb-1.5">
              Multiple plausible healthy projections
            </h3>

            <p className="text-[10px] text-[#626A7C] leading-relaxed mb-2">
              The same unseen subject is projected multiple times toward plausible healthy anatomy.
            </p>

            {/* Abstract Projection Schematic (HTML/CSS only, no raster) */}
            <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex flex-col items-center">
              <div className="px-2 py-0.5 rounded bg-white border border-[#D9DDEE] text-[9.5px] font-mono font-bold text-[#24242A]">
                Observed x
              </div>
              <div className="text-[#74747D] text-[9px] my-0.5">↓ Projection P(x; ξ)</div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-6 rounded bg-[#E3F0E6] border border-[#C3E0C9] flex items-center justify-center text-[8.5px] font-mono font-bold text-[#24242A]">
                  x̂¹
                </div>
                <div className="w-5 h-6 rounded bg-[#E3F0E6] border border-[#C3E0C9] flex items-center justify-center text-[8.5px] font-mono font-bold text-[#24242A]">
                  x̂²
                </div>
                <div className="w-5 h-6 rounded bg-[#E3F0E6] border border-[#C3E0C9] flex items-center justify-center text-[8.5px] font-mono font-bold text-[#24242A]">
                  x̂³
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-[#D9DDEE]/80">
            <div className="px-1.5 py-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center font-mono text-[10.5px] font-bold text-[#24242A]">
              x̂⁽ᵐ⁾ = P(x; ξₘ)
            </div>
            <span className="text-[8.5px] font-mono text-[#74747D] block text-center mt-1">
              m = projection sample index
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            STEP 2: Deviation Evidence
        --------------------------------------------------------------------- */}
        <div
          tabIndex={0}
          className="bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs transition-all duration-150 cursor-default outline-hidden hover:border-[#6F69C9] focus:border-[#6F69C9] active:border-[#6F69C9] hover:bg-[#F8F7FD] focus:bg-[#F8F7FD] active:bg-[#F8F7FD] hover:-translate-y-0.5 hover:shadow-xs focus:-translate-y-0.5 focus:shadow-xs"
        >
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D9DDEE]/80">
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[9px] font-mono font-bold text-[#74747D] uppercase">
                02 · DEVIATION
              </span>
              <span className="text-[8.5px] font-mono text-[#74747D]">Residual</span>
            </div>

            <h3 className="text-xs font-bold text-[#24242A] leading-snug mb-1.5">
              What cannot be explained by normality?
            </h3>

            <p className="text-[10px] text-[#626A7C] leading-relaxed mb-2">
              Measures difference between observed scan and healthy projection at location v.
            </p>

            {/* Subtraction Schematic */}
            <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-center font-mono text-[9px] text-[#626A7C]">
              <span className="text-[#24242A] font-bold">Observed</span>
              <span className="mx-1 text-[#6F69C9] font-black">−</span>
              <span className="text-[#24242A] font-bold">Projection</span>
              <span className="mx-1 text-[#6F69C9] font-black">=</span>
              <span className="text-[#6F69C9] font-bold">Deviation</span>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-[#D9DDEE]/80">
            <div className="px-1.5 py-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center font-mono text-[10.5px] font-bold text-[#24242A]">
              R⁽ᵐ⁾(v) = | x(v) − x̂⁽ᵐ⁾(v) |
            </div>
            <div className="mt-1.5 text-[8.5px] font-mono text-[#74747D] text-center leading-tight">
              Large R = differs from normal
              <span className="block font-bold text-[#74747D] mt-0.5">≠ direct pathology</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            STEP 3: Projection Uncertainty
        --------------------------------------------------------------------- */}
        <div
          tabIndex={0}
          className="bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs transition-all duration-150 cursor-default outline-hidden hover:border-[#6F69C9] focus:border-[#6F69C9] active:border-[#6F69C9] hover:bg-[#F8F7FD] focus:bg-[#F8F7FD] active:bg-[#F8F7FD] hover:-translate-y-0.5 hover:shadow-xs focus:-translate-y-0.5 focus:shadow-xs"
        >
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D9DDEE]/80">
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[9px] font-mono font-bold text-[#74747D] uppercase">
                03 · UNCERTAINTY
              </span>
              <span className="text-[8.5px] font-mono text-[#74747D]">Disagreement</span>
            </div>

            <h3 className="text-xs font-bold text-[#24242A] leading-snug mb-1.5">
              Is that deviation stable?
            </h3>

            <p className="text-[10px] text-[#626A7C] leading-relaxed mb-2">
              Quantifies whether multiple healthy projections agree on the unexplained deviation.
            </p>

            {/* Paired Formulas */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] space-y-1 font-mono text-[9.5px]">
              <div className="flex justify-between items-center text-[#24242A]">
                <span className="text-[#74747D]">Mean:</span>
                <span className="font-bold">μ_R(v) = meanₘ R⁽ᵐ⁾(v)</span>
              </div>
              <div className="flex justify-between items-center text-[#24242A]">
                <span className="text-[#74747D]">Uncertainty:</span>
                <span className="font-bold text-[#6F69C9]">U_proj(v) = stdₘ R⁽ᵐ⁾(v)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-[#D9DDEE]/80 space-y-1 text-[9px] font-mono">
            <div className="p-1 rounded bg-[#D9D8F4]/40 border border-[#A7A3DE]/60 text-[#6F69C9] font-bold flex items-center justify-between">
              <span>LOW U_proj:</span>
              <span>More trustworthy</span>
            </div>
            <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[#74747D] font-medium flex items-center justify-between">
              <span>HIGH U_proj:</span>
              <span>Less trustworthy</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            STEP 4: Conservative Evidence (Featured with #6F69C9 Accent)
        --------------------------------------------------------------------- */}
        <div
          tabIndex={0}
          className="bg-white rounded-xl border-2 border-[#6F69C9]/60 p-3 flex flex-col justify-between shadow-2xs relative transition-all duration-150 cursor-default outline-hidden hover:border-[#6F69C9] focus:border-[#6F69C9] active:border-[#6F69C9] hover:bg-[#F8F7FD] focus:bg-[#F8F7FD] active:bg-[#F8F7FD] hover:-translate-y-0.5 hover:shadow-xs focus:-translate-y-0.5 focus:shadow-xs"
        >
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D9D8F4]">
              <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/70 text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                04 · CORE FORMULA
              </span>
              <span className="text-[8.5px] font-mono font-bold text-[#6F69C9]">Penalty</span>
            </div>

            <h3 className="text-xs font-black text-[#24242A] leading-snug mb-1">
              Reliability-adjusted evidence
            </h3>

            {/* Central Main Equation */}
            <div className="my-1.5 p-2 rounded-lg bg-[#D9D8F4]/30 border border-[#A7A3DE] text-center">
              <div className="text-[11.5px] font-mono font-black text-[#6F69C9]">
                E_rel(v) = [ μ_R(v) − λ U_proj(v) ]₊
              </div>
              <div className="text-[8px] font-mono text-[#24242A] mt-0.5">
                mean deviation − uncertainty penalty
              </div>
            </div>

            {/* Minimal Visual Bar Comparison */}
            <div className="space-y-1.5 mt-2">
              <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between text-[9px] font-mono">
                <div>
                  <span className="font-bold text-[#24242A]">High R + Low U</span>
                  <span className="text-[#74747D] block text-[8px]">Stable deviation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-2.5 rounded bg-[#6F69C9]" />
                  <span className="font-bold text-[#6F69C9]">RETAIN</span>
                </div>
              </div>

              <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between text-[9px] font-mono">
                <div>
                  <span className="font-bold text-[#74747D]">High R + High U</span>
                  <span className="text-[#74747D] block text-[8px]">Projection variance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-2.5 rounded bg-[#74747D]/50" />
                  <span className="text-[#74747D] font-bold">SUPPRESS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-1.5 mt-1 border-t border-[#D9D8F4] text-[8.5px] font-mono text-[#6F69C9] text-center font-bold">
            Penalizes ambiguous projections
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            STEP 5: Healthy-Reference Calibration
        --------------------------------------------------------------------- */}
        <div
          tabIndex={0}
          className="bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs transition-all duration-150 cursor-default outline-hidden hover:border-[#6F69C9] focus:border-[#6F69C9] active:border-[#6F69C9] hover:bg-[#F8F7FD] focus:bg-[#F8F7FD] active:bg-[#F8F7FD] hover:-translate-y-0.5 hover:shadow-xs focus:-translate-y-0.5 focus:shadow-xs"
        >
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D9DDEE]/80">
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[9px] font-mono font-bold text-[#74747D] uppercase">
                05 · CALIBRATION
              </span>
              <span className="text-[8.5px] font-mono text-[#74747D]">Healthy Ref</span>
            </div>

            <h3 className="text-xs font-bold text-[#24242A] leading-snug mb-1.5">
              How much is unusual for healthy subjects?
            </h3>

            <p className="text-[10px] text-[#626A7C] leading-relaxed mb-2">
              Operating threshold is calibrated on an independent healthy control set.
            </p>

            {/* Distribution Schematic */}
            <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex flex-col items-center">
              <span className="text-[8px] font-mono text-[#74747D] block mb-1">
                Healthy Evidence Distribution
              </span>
              <div className="w-full flex items-center relative py-2">
                <div className="h-1 w-full bg-[#D9DDEE] rounded-full" />
                <div className="absolute left-[70%] top-0 h-5 w-0.5 bg-[#6F69C9]" />
                <span className="absolute left-[70%] -top-1 -translate-x-1/2 text-[8px] font-mono font-bold text-[#6F69C9]">
                  t_α
                </span>
              </div>
              <span className="text-[8px] font-mono text-[#6F69C9] font-bold mt-0.5">
                P_healthy(E_rel &gt; t_α) ≤ α
              </span>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-[#D9DDEE]/80">
            <span className="text-[9.5px] text-[#626A7C] block leading-tight">
              Defines what is unusual <span className="text-[#6F69C9] font-bold">relative to healthy subjects</span>, not by arbitrary score scale.
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM STRIP: Core Contrast & Main Takeaway (~24% height)
      ========================================================================= */}
      <div className="shrink-0 space-y-1.5">
        {/* Compact Core Contrast */}
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between">
            <span className="font-mono text-[9.5px] font-bold text-[#74747D] uppercase">
              STANDARD ANOMALY SCORE
            </span>
            <div className="text-[11px] font-mono text-[#74747D]">
              Large residual → <span className="line-through">abnormal</span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#D9D8F4]/30 border border-[#A7A3DE]/70 flex items-center justify-between">
            <span className="font-mono text-[9.5px] font-bold text-[#6F69C9] uppercase">
              RELIABILITY-AWARE EVIDENCE
            </span>
            <div className="text-[11px] font-mono font-bold text-[#24242A]">
              Large residual + low uncertainty + exceeds healthy ref →{' '}
              <span className="text-[#6F69C9]">reliable evidence</span>
            </div>
          </div>
        </div>

        {/* Main Takeaway & Transition Banner */}
        <div className="p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
          <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
            The method does not trust deviation by magnitude alone — it keeps deviation that is{' '}
            <span className="text-[#6F69C9] font-black">stable across healthy projections</span> and{' '}
            <span className="text-[#6F69C9] font-black">unusual relative to healthy controls</span>.
          </p>

          <div className="mt-1.5 pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
            <span className="text-[#74747D] italic">
              Does this conservative definition of evidence improve localization across disease benchmarks?
            </span>

            <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px] shrink-0">
              <span>Next: Direction 2 Benchmark Validation (Slide 25)</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

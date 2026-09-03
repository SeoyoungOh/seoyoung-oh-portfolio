import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface NormalMotivationSlideProps {
  isActive: boolean;
}

export const NormalMotivationSlide: React.FC<NormalMotivationSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 2 · NORMAL PROJECTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          What If We Learn What “Normal” Looks Like Instead?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Pivoting from classifier attribution to normative modeling and healthy-reference deviation.
        </p>
      </div>

      {/* Main Narrative & Visual Layout */}
      <div className="my-auto py-2 flex flex-col gap-3">
        {/* Guiding Question Shift Card */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#626A7C]">
            <span className="font-semibold text-[#20243C]">Core Clinical Intuition:</span> Clinicians recognize abnormality partly because they understand what normal anatomy should look like.
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 rounded-lg bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] font-bold text-[11px] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#20243C]" />
              Healthy-Reference Paradigm
            </span>
          </div>
        </div>

        {/* 3-Stage Diagram: Healthy -> Normal Manifold -> Patient & Projection */}
        <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
          {/* Left: Healthy Examples */}
          <div className="sm:col-span-3 p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] flex items-center justify-center mb-2 font-mono text-xs font-bold">
              HEALTHY
            </div>
            <h3 className="text-xs font-bold text-[#20243C] mb-1">
              Healthy MRI Cohort
            </h3>
            <p className="text-[11px] text-[#626A7C] leading-snug">
              Unimpaired neurotypical brain anatomy without pathological lesions
            </p>
          </div>

          <div className="sm:col-span-1 flex justify-center text-[#9091DF]">
            <ArrowRight className="w-4 h-4 hidden sm:block" />
          </div>

          {/* Center: Learn Normal Anatomy */}
          <div className="sm:col-span-3 p-4 rounded-xl bg-[#20243C] text-[#FFFFFF] flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-[#FFFFFF]/10 text-[#DFF8E1] flex items-center justify-center mb-2 font-mono text-xs font-bold">
              P_norm
            </div>
            <h3 className="text-xs font-bold text-[#FFFFFF] mb-1">
              Learn Normal Manifold
            </h3>
            <p className="text-[11px] text-[#D9DDEE] leading-snug">
              Generative modeling of physiological anatomical variability
            </p>
          </div>

          <div className="sm:col-span-1 flex justify-center text-[#9091DF]">
            <ArrowRight className="w-4 h-4 hidden sm:block" />
          </div>

          {/* Right: Patient -> Projected Healthy -> Difference */}
          <div className="sm:col-span-3 p-4 rounded-xl bg-[#FBFBFF] border-2 border-[#9091DF]/50 shadow-2xs flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-[#A0A1F8]/20 text-[#9091DF] flex items-center justify-center mb-2 font-mono text-xs font-bold">
              Δ(x, x̂)
            </div>
            <h3 className="text-xs font-bold text-[#20243C] mb-1">
              Projection & Difference
            </h3>
            <p className="text-[11px] text-[#626A7C] leading-snug">
              Patient MRI → Projected healthy-like reference → Difference
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway */}
      <div className="p-3 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] text-center">
        <p className="text-xs font-bold text-[#20243C]">
          Instead of learning disease appearance, <span className="text-[#20243C] font-black underline decoration-[#DFF8E1] decoration-2">learn normal anatomy first</span> and search for <span className="text-[#9091DF]">reliable deviations from it</span>.
        </p>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Normative Paradigm</span>
        <span className="font-semibold text-[#9091DF]">Healthy-Reference Modeling</span>
      </div>
    </div>
  );
};

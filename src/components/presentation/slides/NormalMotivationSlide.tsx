import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NormalMotivationSlideProps {
  isActive: boolean;
}

export const NormalMotivationSlide: React.FC<NormalMotivationSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~10% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              HEALTHY-ONLY MODELING · PARADIGM SHIFT
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Can We Remove Patient Supervision Entirely?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Instead of learning disease labels, learn what healthy anatomy should look like.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Direction 2 · Normative Paradigm</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TOP SEQUENCE: Left-to-Right Conceptual Flow (~36% height)
          PATIENT SUPERVISION → HEALTHY MRI ONLY → COMPARE UNSEEN SUBJECT → DEVIATION
      ========================================================================= */}
      <div className="grid grid-cols-11 gap-2.5 my-1 items-stretch">
        {/* 1. LEFT — WHAT WE WANT TO REMOVE (3 cols, Muted Cool Gray) */}
        <div className="col-span-3 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#D9DDEE]">
              <span className="px-1.5 py-0.2 rounded bg-white border border-[#D9DDEE] text-[9px] font-mono font-bold text-[#74747D] uppercase">
                STILL REQUIRED IN WEAK SUPERVISION
              </span>
            </div>

            <h3 className="text-xs lg:text-[13px] font-bold text-[#74747D] leading-snug mb-1">
              Patient supervision
            </h3>

            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              Weak supervision removes voxel-wise disease masks, but still requires labeled patient and control data for classifier training.
            </p>
          </div>

          <div className="pt-1.5 mt-2 border-t border-[#D9DDEE] text-[9.5px] font-mono text-[#74747D] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#74747D]" />
            <span>Labels still required for learning</span>
          </div>
        </div>

        {/* Arrow Connector */}
        <div className="col-span-1 flex items-center justify-center text-[#74747D]">
          <ArrowRight className="w-4 h-4 stroke-[2]" />
        </div>

        {/* 2. CENTER — NEW SOURCE OF SUPERVISION (4 cols, Pale Mint & Lavender) */}
        <div className="col-span-4 bg-white rounded-xl border-2 border-[#6F69C9]/60 p-3 flex flex-col justify-between shadow-2xs relative">
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#D9D8F4]">
              <span className="px-2 py-0.5 rounded bg-[#E3F0E6] border border-[#C3E0C9] text-[9.5px] font-mono font-bold text-[#24242A] uppercase">
                NEW SUPERVISION · HEALTHY ONLY
              </span>
              <span className="text-[9px] font-mono font-bold text-[#6F69C9]">
                No patient labels
              </span>
            </div>

            <h3 className="text-sm lg:text-[15px] font-black text-[#24242A] leading-snug mb-1">
              Healthy MRI only
            </h3>

            <p className="text-xs text-[#626A7C] leading-relaxed">
              Use healthy subjects to learn the expected appearance and physiological variability of <span className="font-bold text-[#24242A]">normal anatomy</span>.
            </p>
          </div>

          <div className="pt-1.5 mt-2 border-t border-[#D9D8F4] flex items-center justify-between text-[10px] font-mono">
            <span className="text-[#6F69C9] font-bold">Goal:</span>
            <span className="text-[#24242A] font-semibold">Model the normal anatomical manifold</span>
          </div>
        </div>

        {/* Arrow Connector */}
        <div className="col-span-1 flex items-center justify-center text-[#6F69C9]">
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </div>

        {/* 3. RIGHT — NEW QUESTION & DEVIATION (2 cols -> 2 cols in 11 cols = 3+1+4+1+2 = 11) */}
        <div className="col-span-2 bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#D9DDEE]">
              <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                UNSEEN SUBJECT
              </span>
            </div>

            <div className="text-[10.5px] font-mono text-[#626A7C] leading-snug mb-2">
              <span className="block text-[#24242A] font-bold">Healthy reference</span>
              <span className="text-xs text-[#6F69C9] font-bold">+</span>
              <span className="block text-[#24242A] font-bold">Unseen brain</span>
              <span className="text-[9px] text-[#74747D] block mt-0.5">↓ What cannot be explained?</span>
            </div>
          </div>

          <div className="p-1.5 rounded-lg bg-[#D9D8F4]/40 border border-[#A7A3DE] text-center">
            <span className="text-[10px] font-mono font-black text-[#6F69C9] uppercase block">
              DEVIATION EVIDENCE
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MIDDLE: Main Research Question & Contrast Strip (~32% height)
      ========================================================================= */}
      <div className="my-1 p-3 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs flex flex-col justify-between">
        {/* Main Research Question */}
        <div className="text-center py-1">
          <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider block mb-0.5">
            CORE RESEARCH QUESTION · DIRECTION 2
          </span>
          <h3 className="text-lg lg:text-xl font-black text-[#24242A] tracking-tight">
            “What deviates from healthy anatomy?”
          </h3>
          <p className="text-xs text-[#626A7C] max-w-2xl mx-auto mt-1 leading-relaxed">
            The method no longer asks: <span className="italic text-[#74747D]">“What supports the disease label?”</span>{' '}
            Instead it asks: <span className="font-bold text-[#24242A]">“What cannot be explained by the learned healthy reference?”</span>
          </p>
        </div>

        {/* Compact Contrast Strip */}
        <div className="mt-2 pt-2 border-t border-[#D9DDEE]/80 grid grid-cols-2 gap-3 text-xs">
          <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold text-[#74747D] uppercase">WEAK SUPERVISION</span>
            <span className="font-medium text-[#626A7C] text-[11px]">What supports the diagnostic decision?</span>
          </div>

          <div className="p-2 rounded-lg bg-[#D9D8F4]/30 border border-[#A7A3DE]/70 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold text-[#6F69C9] uppercase">HEALTHY-ONLY MODELING</span>
            <span className="font-bold text-[#24242A] text-[11px]">What deviates from learned normal anatomy?</span>
          </div>
        </div>

        {/* Scientific Caution Note */}
        <div className="mt-2 p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between text-[10px] text-[#626A7C]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#74747D]" />
            <strong className="text-[#24242A]">Scientific Caution:</strong>
            <span>Deviation from normal does not automatically mean pathology.</span>
          </div>
          <span className="text-[#74747D] font-mono text-[9px]">
            May reflect disease, normal variability, or acquisition effects
          </span>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition to Slide 23 (~16% height)
      ========================================================================= */}
      <div className="shrink-0 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          Healthy-only modeling removes the need for patient labels — but now the challenge is to distinguish{' '}
          <span className="text-[#6F69C9] font-black">meaningful deviation</span> from{' '}
          <span className="text-[#6F69C9] font-black">benign variability</span>.
        </p>

        <div className="mt-1.5 pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D]">
            So how can we project an unseen brain toward a healthy reference and quantify what remains unexplained?
          </span>

          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px] shrink-0">
            <span>Next: Normal Projection Method (Slide 23)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

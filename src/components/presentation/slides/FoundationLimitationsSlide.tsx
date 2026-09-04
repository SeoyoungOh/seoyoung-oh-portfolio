import React from 'react';

interface FoundationLimitationsSlideProps {
  isActive: boolean;
}

export const FoundationLimitationsSlide: React.FC<FoundationLimitationsSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          HEADER: Section, Title, Subtitle, & Reference Badge (~14% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              FOUNDATIONS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Why Segmentation Alone Was Not Enough
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Fundamental limitations encountered when relying strictly on standard supervised anatomical segmentation.
            </p>
          </div>

          {/* Academic Publication Reference Badge (Subtle, top right) */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Oh et al., IEEE ISBI 2024</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN BODY: Four Limitation Cards in a Balanced 2 x 2 Grid (~66% height)
      ========================================================================= */}
      <div className="grid grid-cols-2 gap-3.5 flex-1 min-h-0 my-1.5 items-stretch">
        {/* CARD 1 */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/60 text-[9.5px] font-mono font-bold text-[#6F69C9] tracking-wider uppercase">
                LIMITATION 01
              </span>
            </div>

            <h3 className="text-base font-bold text-[#24242A] mb-1.5 leading-snug">
              Missing target anatomy
            </h3>

            <p className="text-xs text-[#24242A] leading-relaxed font-medium">
              Many ALS-relevant neuroanatomical structures were not represented in the available atlases.
            </p>
          </div>

          <div className="pt-2 mt-2 border-t border-[#D9DDEE]/60">
            <p className="text-[11px] text-[#74747D] leading-snug">
              The atlas resources were useful, but incomplete for the structures most relevant to this thesis.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/60 text-[9.5px] font-mono font-bold text-[#6F69C9] tracking-wider uppercase">
                LIMITATION 02
              </span>
            </div>

            <h3 className="text-base font-bold text-[#24242A] mb-1.5 leading-snug">
              Atlas labels are not direct MRI annotations
            </h3>

            <p className="text-xs text-[#24242A] leading-relaxed font-medium">
              Atlas-based labels do not guarantee that the segmented region corresponds precisely to subject-specific anatomy in routine MRI.
            </p>
          </div>

          <div className="pt-2 mt-2 border-t border-[#D9DDEE]/60">
            <p className="text-[11px] text-[#74747D] leading-snug">
              Registration and low MRI visibility limit anatomical certainty.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/60 text-[9.5px] font-mono font-bold text-[#6F69C9] tracking-wider uppercase">
                LIMITATION 03
              </span>
            </div>

            <h3 className="text-base font-bold text-[#24242A] mb-1.5 leading-snug">
              Segmentation does not explain disease relevance
            </h3>

            <p className="text-xs text-[#24242A] leading-relaxed font-medium">
              Identifying an anatomical region does not directly indicate whether that region contains disease-related change.
            </p>
          </div>

          <div className="pt-2 mt-2 border-t border-[#D9DDEE]/60">
            <p className="text-[11px] text-[#74747D] leading-snug">
              Anatomical localization alone is not equivalent to disease evidence.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/60 text-[9.5px] font-mono font-bold text-[#6F69C9] tracking-wider uppercase">
                LIMITATION 04
              </span>
            </div>

            <h3 className="text-base font-bold text-[#24242A] mb-1.5 leading-snug">
              Limited clinical diversity
            </h3>

            <p className="text-xs text-[#24242A] leading-relaxed font-medium">
              The initial cohort mainly contained first scans, with limited symptom diversity and subtle imaging differences.
            </p>
          </div>

          <div className="pt-2 mt-2 border-t border-[#D9DDEE]/60">
            <p className="text-[11px] text-[#74747D] leading-snug">
              This constrained both clinical interpretation and downstream validation.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway Bar & Transition Bridge (~14% height)
      ========================================================================= */}
      <div className="shrink-0 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          The limiting factor was no longer only the model — it was the{' '}
          <span className="font-extrabold text-[#6F69C9]">validity of the supervision</span> and the{' '}
          <span className="font-extrabold text-[#6F69C9]">clinical interpretability</span> of the output.
        </p>

        <div className="mt-1.5 pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[11px]">
          <span className="text-[#74747D] italic">
            These limitations motivated two annotation-efficient research directions.
          </span>
          <span className="font-mono font-bold text-[10px] text-[#6F69C9]">
            Bridge to Slide 11
          </span>
        </div>
      </div>
    </div>
  );
};


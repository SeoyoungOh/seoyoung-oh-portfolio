import React, { useState } from 'react';
import { ArrowRight, Compass, Target } from 'lucide-react';

interface FoundationAtlasMotivationSlideProps {
  isActive: boolean;
}

export const FoundationAtlasMotivationSlide: React.FC<FoundationAtlasMotivationSlideProps> = () => {
  const [hoveredBranch, setHoveredBranch] = useState<'eval' | 'interp' | null>(null);

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          ZONE 1: Header & Subtitle (~15% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              FOUNDATIONS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              We Still Needed an Anatomical Reference
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Spatial evidence alone is difficult to evaluate or interpret without anatomical context.
            </p>
          </div>

          {/* Context Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Conceptual Bridge</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ZONE 2: Top Node — Spatial Evidence Maps (~18% height)
      ========================================================================= */}
      <div className="shrink-0 max-w-xl mx-auto w-full text-center">
        <div className="px-4 py-2 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs flex items-center justify-between gap-3 text-left">
          {/* Abstract schematic evidence-map glyph */}
          <div className="w-14 h-9 rounded-lg bg-[#F4F5FB] border border-[#D9D8F4] relative flex items-center justify-center overflow-hidden shrink-0">
            {/* Subtle schematic activation spots */}
            <div className="absolute w-6 h-6 rounded-full bg-[#A7A3DE]/30 blur-[4px] -top-1 -left-1" />
            <div className="absolute w-5 h-5 rounded-full bg-[#6F69C9]/35 blur-[3px] top-2 right-1.5" />
            <div className="absolute w-3.5 h-3.5 rounded-full bg-[#6F69C9]/50 blur-[2px] bottom-1 left-3" />
            {/* Abstract coordinate crosshair */}
            <div className="w-7 h-[1px] bg-[#6F69C9]/30" />
            <div className="h-5 w-[1px] bg-[#6F69C9]/30 absolute" />
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider block">
              STARTING POINT
            </span>
            <h3 className="text-sm lg:text-[14.5px] font-black text-[#24242A] tracking-tight leading-snug">
              Spatial evidence maps
            </h3>
            <p className="text-[10.5px] text-[#74747D] mt-0.5 leading-tight">
              Both methodological directions produce spatially distributed model evidence.
            </p>
          </div>
        </div>

        {/* Fork Connectors down to two branches */}
        <div className="relative h-4 w-full flex items-center justify-center pointer-events-none">
          <svg className="w-full h-4" preserveAspectRatio="none" viewBox="0 0 400 16" fill="none">
            <path
              d="M 200 0 L 200 6 Q 200 12, 100 12 L 100 16"
              stroke="#A7A3DE"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 200 0 L 200 6 Q 200 12, 300 12 L 300 16"
              stroke="#A7A3DE"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="2" r="2" fill="#6F69C9" />
            <circle cx="100" cy="14" r="2" fill="#6F69C9" />
            <circle cx="300" cy="14" r="2" fill="#6F69C9" />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          ZONE 3: Two Balanced Branches (~34% height)
      ========================================================================= */}
      <div className="grid grid-cols-2 gap-4 items-stretch flex-1 min-h-0 my-0.5">
        {/* LEFT BRANCH: Model Evaluation */}
        <div
          tabIndex={0}
          onMouseEnter={() => setHoveredBranch('eval')}
          onMouseLeave={() => setHoveredBranch(null)}
          onFocus={() => setHoveredBranch('eval')}
          onBlur={() => setHoveredBranch(null)}
          className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
            hoveredBranch === 'eval'
              ? 'bg-white border-[#6F69C9] shadow-sm ring-1 ring-[#6F69C9]/20'
              : hoveredBranch === 'interp'
              ? 'bg-white/70 border-[#D9DDEE] opacity-90'
              : 'bg-white border-[#D9DDEE] shadow-2xs hover:border-[#A7A3DE]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2.5">
              <div className="flex items-center gap-1.5">
                <div className="p-1 rounded-md bg-[#D9D8F4]/50 text-[#6F69C9]">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#6F69C9] tracking-wider uppercase">
                  PURPOSE 1
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#74747D]">Model Validation</span>
            </div>

            <h3 className="text-sm lg:text-[15px] font-black text-[#24242A] tracking-tight mb-2 leading-tight">
              Model evaluation
            </h3>

            <div className="p-2.5 rounded-lg bg-[#F4F5FB] border border-[#D9D8F4] mb-2.5">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                CENTRAL QUESTION
              </span>
              <p className="text-xs lg:text-[13px] font-bold text-[#24242A] leading-snug">
                Is the detected evidence spatially meaningful?
              </p>
            </div>

            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              An anatomical reference provides a structured way to assess whether model evidence concentrates in anatomically relevant regions.
            </p>
          </div>

          <div className="pt-2 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10px] font-mono text-[#74747D]">
            <span>Evaluation target</span>
            <span className="text-[#6F69C9] font-bold">Spatial concentration</span>
          </div>
        </div>

        {/* RIGHT BRANCH: ALS Interpretation */}
        <div
          tabIndex={0}
          onMouseEnter={() => setHoveredBranch('interp')}
          onMouseLeave={() => setHoveredBranch(null)}
          onFocus={() => setHoveredBranch('interp')}
          onBlur={() => setHoveredBranch(null)}
          className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
            hoveredBranch === 'interp'
              ? 'bg-white border-[#6F69C9] shadow-sm ring-1 ring-[#6F69C9]/20'
              : hoveredBranch === 'eval'
              ? 'bg-white/70 border-[#D9DDEE] opacity-90'
              : 'bg-white border-[#D9DDEE] shadow-2xs hover:border-[#A7A3DE]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2.5">
              <div className="flex items-center gap-1.5">
                <div className="p-1 rounded-md bg-[#D9D8F4]/50 text-[#6F69C9]">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#6F69C9] tracking-wider uppercase">
                  PURPOSE 2
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#74747D]">Clinical Understanding</span>
            </div>

            <h3 className="text-sm lg:text-[15px] font-black text-[#24242A] tracking-tight mb-2 leading-tight">
              ALS interpretation
            </h3>

            <div className="p-2.5 rounded-lg bg-[#F4F5FB] border border-[#D9D8F4] mb-2.5">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                CENTRAL QUESTION
              </span>
              <p className="text-xs lg:text-[13px] font-bold text-[#24242A] leading-snug">
                Where does ALS-related spatial evidence concentrate anatomically?
              </p>
            </div>

            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              An anatomical reference allows detected evidence to be interpreted in relation to clinically relevant brainstem anatomy.
            </p>
          </div>

          <div className="pt-2 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10px] font-mono text-[#74747D]">
            <span>Clinical target</span>
            <span className="text-[#6F69C9] font-bold">Anatomical mapping</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ZONE 4: Convergence, Bottom Node & Transition (~28% height)
      ========================================================================= */}
      <div className="shrink-0 space-y-1 mt-0.5">
        {/* Converging Connectors to Bottom Node */}
        <div className="relative h-3 w-full flex items-center justify-center pointer-events-none">
          <svg className="w-full h-3" preserveAspectRatio="none" viewBox="0 0 400 12" fill="none">
            <path
              d="M 100 0 L 100 4 Q 100 8, 200 8 L 200 12"
              stroke="#A7A3DE"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 300 0 L 300 4 Q 300 8, 200 8 L 200 12"
              stroke="#A7A3DE"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="11" r="2" fill="#6F69C9" />
          </svg>
        </div>

        {/* Bottom Node: ANATOMICAL REFERENCE */}
        <div className="max-w-xl mx-auto w-full text-center py-2 px-4 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
          <span className="text-[12px] lg:text-[13px] font-black tracking-wider text-[#6F69C9] uppercase font-mono block">
            ANATOMICAL REFERENCE
          </span>
          <p className="text-[10.5px] text-[#74747D] mt-0.5">
            A common anatomical scaffold for evaluating and interpreting spatial evidence.
          </p>
        </div>

        {/* Central Takeaway */}
        <div className="py-1.5 px-3 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] text-center shadow-2xs max-w-2xl mx-auto w-full">
          <p className="text-xs font-semibold text-[#24242A]">
            We therefore needed a common anatomical reference to{' '}
            <span className="text-[#6F69C9] font-bold">evaluate</span> and{' '}
            <span className="text-[#6F69C9] font-bold">interpret</span> the model outputs.
          </p>
        </div>

        {/* Transition to Slide 13 */}
        <div className="p-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between text-xs text-[#24242A] shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
            <span className="text-[#74747D] text-[11px]">
              But no directly usable reference existed for the fine structures we needed.
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10.5px] font-mono font-bold text-[#6F69C9]">
            <span>From Neuroanatomy Diagrams to a Programmable Atlas (Slide 13)</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};


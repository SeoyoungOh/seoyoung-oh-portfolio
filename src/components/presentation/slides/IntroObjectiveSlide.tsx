import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroObjectiveSlideProps {
  isActive: boolean;
}

export const IntroObjectiveSlide: React.FC<IntroObjectiveSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area
      ========================================================================= */}
      <div>
        <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-1">
          INTRODUCTION
        </span>
        <h2 className="text-2xl lg:text-[26px] font-black text-[#24242A] tracking-tight leading-snug">
          Research Objective
        </h2>
      </div>

      {/* =========================================================================
          UPPER-MIDDLE: Central Research Question
          The dominant textual element after the slide title
      ========================================================================= */}
      <div className="my-auto py-1">
        <div className="rounded-2xl border border-[#D9DDEE] bg-[#FAFAFC] p-6 shadow-2xs relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase font-mono">
              CENTRAL RESEARCH QUESTION
            </span>
          </div>

          <h3 className="text-xl lg:text-[23px] font-bold text-[#24242A] leading-relaxed tracking-tight">
            How can we extract{' '}
            <span className="text-[#6F69C9] underline decoration-[#A7A3DE] decoration-2 underline-offset-4">
              reliable
            </span>{' '}
            and{' '}
            <span className="text-[#6F69C9] underline decoration-[#A7A3DE] decoration-2 underline-offset-4">
              anatomically meaningful
            </span>{' '}
            disease evidence from brainstem MRI when{' '}
            <span className="text-[#6F69C9] font-extrabold">
              dense voxel-wise annotations are unavailable
            </span>
            ?
          </h3>
        </div>

        {/* =======================================================================
            MIDDLE: Three Connected Research Principles
            One coherent horizontal visual framework connected from left to right
        ======================================================================= */}
        <div className="mt-4 rounded-2xl border border-[#D9DDEE] bg-white p-5 shadow-2xs">
          <div className="grid grid-cols-3 gap-5 relative">
            {/* -------------------------------------------------------------------
                PRINCIPLE 1: Less Supervision
            ------------------------------------------------------------------- */}
            <div className="flex flex-col justify-between pr-2">
              <div>
                {/* Step indicator & Eyebrow */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#6F69C9] uppercase">
                    PRINCIPLE 01
                  </span>
                  <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-[#D9D8F4]/35 text-[#6F69C9] border border-[#D9D8F4]">
                    WEAK SUPERVISION
                  </span>
                </div>

                {/* Minimal Schematic: Annotation burden decreasing */}
                <div className="h-12 w-full bg-[#FAFAFC] rounded-lg border border-[#D9DDEE] flex items-center justify-center mb-3">
                  <svg width="150" height="38" viewBox="0 0 150 38" fill="none" className="overflow-visible">
                    {/* Dense voxel matrix (high annotation burden) */}
                    <g opacity="0.6">
                      <rect x="6" y="7" width="6" height="6" rx="1" fill="#6F69C9" />
                      <rect x="15" y="7" width="6" height="6" rx="1" fill="#6F69C9" />
                      <rect x="24" y="7" width="6" height="6" rx="1" fill="#6F69C9" />
                      <rect x="6" y="16" width="6" height="6" rx="1" fill="#6F69C9" />
                      <rect x="15" y="16" width="6" height="6" rx="1" fill="#6F69C9" />
                      <rect x="24" y="16" width="6" height="6" rx="1" fill="#6F69C9" />
                      <rect x="6" y="25" width="6" height="6" rx="1" fill="#6F69C9" />
                      <rect x="15" y="25" width="6" height="6" rx="1" fill="#6F69C9" />
                      <rect x="24" y="25" width="6" height="6" rx="1" fill="#6F69C9" />
                    </g>
                    {/* Transition arrow */}
                    <path
                      d="M44 19H84M84 19L77 14M84 19L77 24"
                      stroke="#6F69C9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Reduced annotation burden indicator */}
                    <rect
                      x="100"
                      y="9"
                      width="38"
                      height="20"
                      rx="3"
                      stroke="#6F69C9"
                      strokeWidth="1.25"
                      strokeDasharray="2.5 1.5"
                      fill="#D9D8F4"
                      fillOpacity="0.3"
                    />
                    <circle cx="119" cy="19" r="4" fill="#6F69C9" />
                  </svg>
                </div>

                {/* Text Content */}
                <h4 className="text-sm font-bold text-[#24242A] mb-1">
                  Less supervision
                </h4>
                <p className="text-xs font-semibold text-[#6F69C9] mb-1 leading-snug">
                  Reduce dependence on dense voxel-wise annotations.
                </p>
                <p className="text-[11px] text-[#74747D] leading-relaxed">
                  Move toward learning from weaker or more readily available forms of supervision.
                </p>
              </div>
            </div>

            {/* Subtle Horizontal Connector 1 -> 2 */}
            <div className="absolute top-1/2 left-[33.33%] -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10 hidden sm:flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white border border-[#D9D8F4] flex items-center justify-center shadow-2xs text-[#6F69C9]">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* -------------------------------------------------------------------
                PRINCIPLE 2: Anatomical Relevance
            ------------------------------------------------------------------- */}
            <div className="flex flex-col justify-between px-2">
              <div>
                {/* Step indicator & Eyebrow */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#6F69C9] uppercase">
                    PRINCIPLE 02
                  </span>
                  <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-[#C3E0C9]/40 text-[#24242A] border border-[#C3E0C9]">
                    CLINICAL REGIONS
                  </span>
                </div>

                {/* Minimal Schematic: Brainstem ROI & Anatomical target */}
                <div className="h-12 w-full bg-[#FAFAFC] rounded-lg border border-[#D9DDEE] flex items-center justify-center mb-3">
                  <svg width="150" height="38" viewBox="0 0 150 38" fill="none" className="overflow-visible">
                    {/* Simplified sagittal brainstem silhouette */}
                    <path
                      d="M38 6C46 6 52 10 54 14C60 15 68 19 68 25C68 30 58 33 56 36H32C34 31 32 23 32 16C32 9 34 6 38 6Z"
                      fill="#D9D8F4"
                      fillOpacity="0.35"
                      stroke="#A7A3DE"
                      strokeWidth="1.2"
                    />
                    {/* Anatomical ROI target circle */}
                    <circle cx="56" cy="22" r="7.5" stroke="#6F69C9" strokeWidth="1.25" strokeDasharray="2 1.5" />
                    <circle cx="56" cy="22" r="3" fill="#C3E0C9" stroke="#6F69C9" strokeWidth="0.8" />
                    {/* Connector line to target marker */}
                    <path d="M70 22H102" stroke="#6F69C9" strokeWidth="1.2" strokeDasharray="2 1.5" />
                    <rect x="105" y="12" width="34" height="20" rx="3" fill="#FFFFFF" stroke="#6F69C9" strokeWidth="1" />
                    <text x="122" y="25" textAnchor="middle" fontSize="9" fill="#6F69C9" fontWeight="bold" fontFamily="monospace">
                      ROI
                    </text>
                  </svg>
                </div>

                {/* Text Content */}
                <h4 className="text-sm font-bold text-[#24242A] mb-1">
                  Anatomical relevance
                </h4>
                <p className="text-xs font-semibold text-[#6F69C9] mb-1 leading-snug">
                  Interpret model evidence within clinically meaningful brainstem regions.
                </p>
                <p className="text-[11px] text-[#74747D] leading-relaxed">
                  Use neuroanatomical references to support task-oriented interpretation.
                </p>
              </div>
            </div>

            {/* Subtle Horizontal Connector 2 -> 3 */}
            <div className="absolute top-1/2 left-[66.66%] -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10 hidden sm:flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white border border-[#D9D8F4] flex items-center justify-center shadow-2xs text-[#6F69C9]">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* -------------------------------------------------------------------
                PRINCIPLE 3: Reliability
            ------------------------------------------------------------------- */}
            <div className="flex flex-col justify-between pl-2">
              <div>
                {/* Step indicator & Eyebrow */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#6F69C9] uppercase">
                    PRINCIPLE 03
                  </span>
                  <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-[#D9D8F4]/35 text-[#6F69C9] border border-[#D9D8F4]">
                    UNCERTAINTY-AWARE
                  </span>
                </div>

                {/* Minimal Schematic: Evidence distribution & stability bounds */}
                <div className="h-12 w-full bg-[#FAFAFC] rounded-lg border border-[#D9DDEE] flex items-center justify-center mb-3">
                  <svg width="150" height="38" viewBox="0 0 150 38" fill="none" className="overflow-visible">
                    {/* Baseline / axis */}
                    <line x1="12" y1="32" x2="138" y2="32" stroke="#D9DDEE" strokeWidth="1" />
                    {/* Uncertainty envelope (dashed) */}
                    <path
                      d="M16 32C36 32 46 8 72 8C98 8 108 32 128 32"
                      stroke="#A7A3DE"
                      strokeWidth="1.2"
                      strokeDasharray="2.5 1.5"
                    />
                    {/* Robust core response (solid) */}
                    <path
                      d="M32 32C48 32 56 16 72 16C88 16 96 32 112 32"
                      fill="#6F69C9"
                      fillOpacity="0.2"
                      stroke="#6F69C9"
                      strokeWidth="1.5"
                    />
                    {/* Peak threshold point */}
                    <circle cx="72" cy="16" r="3" fill="#6F69C9" />
                    {/* Verified confidence badge */}
                    <g transform="translate(116, 7)">
                      <circle cx="10" cy="10" r="8" fill="#E3F0E6" stroke="#C3E0C9" strokeWidth="1" />
                      <path
                        d="M6.5 10L9 12.5L13.5 7.5"
                        stroke="#24242A"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>

                {/* Text Content */}
                <h4 className="text-sm font-bold text-[#24242A] mb-1">
                  Reliability
                </h4>
                <p className="text-xs font-semibold text-[#6F69C9] mb-1 leading-snug">
                  Prioritize evidence that is stable, interpretable, and uncertainty-aware.
                </p>
                <p className="text-[11px] text-[#74747D] leading-relaxed">
                  Separate robust evidence from unstable or uncertain model responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Application Statement & Subtle Lead-in to Slide 7
      ========================================================================= */}
      <div className="space-y-1.5 pt-2">
        {/* Application Statement */}
        <div className="p-2.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#74747D] uppercase font-bold tracking-wider">
              Application:
            </span>
            <span className="font-bold text-[#24242A]">
              Brainstem disease-evidence extraction in ALS
            </span>
            <span className="text-[#74747D] font-normal">
              under severe annotation scarcity
            </span>
          </div>

          {/* Optional small transition line leading to Slide 7 */}
          <span className="text-[11px] text-[#74747D] italic">
            The question then becomes: how far can conventional supervised segmentation take us?
          </span>
        </div>

        {/* Slide Bottom Bar */}
        <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
          <span>Dissertation Scope</span>
          <span className="font-semibold text-[#6F69C9]">Methodological Framework</span>
        </div>
      </div>
    </div>
  );
};

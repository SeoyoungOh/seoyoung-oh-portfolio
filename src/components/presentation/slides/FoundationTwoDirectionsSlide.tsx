import React, { useState } from 'react';
import { ArrowDown, Check, Layers, ArrowRight } from 'lucide-react';

interface FoundationTwoDirectionsSlideProps {
  isActive: boolean;
}

export const FoundationTwoDirectionsSlide: React.FC<FoundationTwoDirectionsSlideProps> = () => {
  const [selectedDirection, setSelectedDirection] = useState<'dir1' | 'dir2' | null>(null);
  const [hoveredDirection, setHoveredDirection] = useState<'dir1' | 'dir2' | null>(null);

  const activeDirection = hoveredDirection || selectedDirection;

  const handleSelectDirection = (dir: 'dir1' | 'dir2') => {
    setSelectedDirection((prev) => (prev === dir ? null : dir));
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          ZONE 1: Header & Roadmap Section (~14-16% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              FOUNDATIONS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Two Directions Emerged
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Moving from dense segmentation toward disease-evidence localization under annotation scarcity
            </p>
          </div>

          {/* Section Indicator */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Thesis Conceptual Fork</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ZONE 2: Central Problem Node (~12-14% height)
      ========================================================================= */}
      <div className="shrink-0 max-w-2xl mx-auto w-full text-center">
        <div className="px-3.5 py-1.5 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs">
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/60 text-[#6F69C9] font-mono font-bold text-[9px] uppercase tracking-wider">
              THE PROBLEM
            </span>
          </div>
          <p className="text-sm lg:text-[14.5px] font-bold text-[#24242A] leading-snug tracking-tight">
            How can we obtain <span className="text-[#6F69C9] font-extrabold">spatial disease evidence</span> without reliable voxel-wise annotations?
          </p>
          <p className="text-[10.5px] text-[#74747D] mt-0.5">
            Dense patient-level voxel labels are unavailable or unreliable.
          </p>
        </div>

        {/* Elegant Fork Connectors */}
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
            <circle cx="200" cy="2" r="2.5" fill="#6F69C9" />
            <circle cx="100" cy="14" r="2" fill="#6F69C9" />
            <circle cx="300" cy="14" r="2" fill="#6F69C9" />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          ZONE 3: Two Balanced Branches (~46-50% height)
      ========================================================================= */}
      <div className="relative flex-1 min-h-0 flex flex-col justify-between">
        {/* The Two Branch Cards */}
        <div className="grid grid-cols-2 gap-3.5 items-stretch flex-1 min-h-0">
          {/* -------------------------------------------------------------------
              LEFT BRANCH: DIRECTION 1 (Weakly Supervised Disease Localization)
          ------------------------------------------------------------------- */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Direction 1: Weakly Supervised Disease Localization"
            aria-pressed={selectedDirection === 'dir1'}
            onClick={() => handleSelectDirection('dir1')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelectDirection('dir1');
              }
            }}
            onMouseEnter={() => setHoveredDirection('dir1')}
            onMouseLeave={() => setHoveredDirection(null)}
            className={`rounded-xl border p-3 flex flex-col justify-between transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
              activeDirection === 'dir1'
                ? 'bg-white border-[#6F69C9] shadow-sm ring-1 ring-[#6F69C9]/30 opacity-100'
                : activeDirection === 'dir2'
                ? 'bg-[#FAFAFC] border-[#D9DDEE] opacity-75'
                : 'bg-white border-[#D9DDEE] shadow-2xs hover:border-[#A7A3DE] opacity-100'
            }`}
          >
            <div>
              {/* Top Header & Chip */}
              <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
                <div>
                  <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] tracking-wider uppercase block">
                    DIRECTION 1
                  </span>
                  <h3 className="text-[13.5px] font-black text-[#24242A] tracking-tight leading-tight">
                    Weakly Supervised Disease Localization
                  </h3>
                </div>

                {/* Supervision Chip */}
                <div className="px-2 py-0.5 rounded-md bg-[#F4F5FB] border border-[#D9D8F4] text-right shrink-0">
                  <span className="text-[8px] font-mono text-[#74747D] uppercase block">AVAILABLE SUPERVISION</span>
                  <span className="text-[9.5px] font-bold text-[#6F69C9] font-mono">MRI + diagnostic labels</span>
                </div>
              </div>

              {/* Main Research Question (Strongest text in branch) */}
              <div className="p-2 rounded-lg bg-[#F4F5FB] border border-[#D9D8F4] mb-2.5">
                <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-0.5">
                  MAIN RESEARCH QUESTION
                </span>
                <p className="text-sm lg:text-[15px] font-black text-[#24242A] leading-snug">
                  What supports the disease label?
                </p>
              </div>

              {/* Three Concise Points */}
              <ul className="space-y-1.5 text-[11px] text-[#24242A] pl-0.5">
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0 mt-1.5" />
                  <span>No voxel-wise disease masks</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0 mt-1.5" />
                  <span>Patient / control labels are available</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0 mt-1.5" />
                  <span>Spatial evidence is derived from the classifier decision</span>
                </li>
              </ul>
            </div>

            {/* Output Strip */}
            <div className="mt-2.5 pt-2 border-t border-[#D9DDEE]/80 flex items-center justify-between">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase">OUTPUT:</span>
              <span className="px-2 py-0.5 rounded-md bg-[#D9D8F4]/50 border border-[#6F69C9]/30 text-[#6F69C9] text-[10px] font-bold font-mono">
                Disease-discriminative spatial evidence
              </span>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT BRANCH: DIRECTION 2 (Healthy-Only Normal Projection)
          ------------------------------------------------------------------- */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Direction 2: Healthy-Only Normal Projection"
            aria-pressed={selectedDirection === 'dir2'}
            onClick={() => handleSelectDirection('dir2')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelectDirection('dir2');
              }
            }}
            onMouseEnter={() => setHoveredDirection('dir2')}
            onMouseLeave={() => setHoveredDirection(null)}
            className={`rounded-xl border p-3 flex flex-col justify-between transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
              activeDirection === 'dir2'
                ? 'bg-white border-[#6F69C9] shadow-sm ring-1 ring-[#6F69C9]/30 opacity-100'
                : activeDirection === 'dir1'
                ? 'bg-[#FAFAFC] border-[#D9DDEE] opacity-75'
                : 'bg-white border-[#D9DDEE] shadow-2xs hover:border-[#A7A3DE] opacity-100'
            }`}
          >
            <div>
              {/* Top Header & Chip */}
              <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9.5px] font-mono font-bold text-[#24242A] tracking-wider uppercase block">
                      DIRECTION 2
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                  </div>
                  <h3 className="text-[13.5px] font-black text-[#24242A] tracking-tight leading-tight">
                    Healthy-Only Normal Projection
                  </h3>
                </div>

                {/* Supervision Chip */}
                <div className="px-2 py-0.5 rounded-md bg-[#E3F0E6] border border-[#C3E0C9] text-right shrink-0">
                  <span className="text-[8px] font-mono text-[#2E7D32] uppercase block">AVAILABLE SUPERVISION</span>
                  <span className="text-[9.5px] font-bold text-[#24242A] font-mono">Healthy MRI only</span>
                </div>
              </div>

              {/* Main Research Question (Strongest text in branch) */}
              <div className="p-2 rounded-lg bg-[#E3F0E6]/50 border border-[#C3E0C9] mb-2.5">
                <span className="text-[8.5px] font-mono font-bold text-[#2E7D32] uppercase block mb-0.5">
                  MAIN RESEARCH QUESTION
                </span>
                <p className="text-sm lg:text-[15px] font-black text-[#24242A] leading-snug">
                  What deviates from healthy anatomy?
                </p>
              </div>

              {/* Three Concise Points */}
              <ul className="space-y-1.5 text-[11px] text-[#24242A] pl-0.5">
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] shrink-0 mt-1.5" />
                  <span>No patient labels required</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] shrink-0 mt-1.5" />
                  <span>No lesion or disease masks required</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] shrink-0 mt-1.5" />
                  <span>Healthy-reference modeling defines expected anatomy</span>
                </li>
              </ul>
            </div>

            {/* Output Strip */}
            <div className="mt-2.5 pt-2 border-t border-[#D9DDEE]/80 flex items-center justify-between">
              <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase">OUTPUT:</span>
              <span className="px-2 py-0.5 rounded-md bg-[#E3F0E6] border border-[#C3E0C9] text-[#24242A] text-[10px] font-bold font-mono">
                Deviation-from-normal spatial evidence
              </span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            IMPORTANT SCIENTIFIC DISTINCTION
        --------------------------------------------------------------------- */}
        <div className="mt-1.5 py-1 px-3 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-between text-xs text-[#24242A] shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-[11px] text-[#24242A]">
            <span className="text-[#6F69C9] font-mono font-extrabold">≠</span>
            <span>Complementary questions — not interchangeable methods</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-[#626A7C] font-mono">
            <span><strong className="text-[#6F69C9]">Weak supervision:</strong> What supports the diagnostic decision?</span>
            <span className="text-[#D9DDEE]">|</span>
            <span><strong className="text-[#24242A]">Healthy-only modeling:</strong> What deviates from learned healthy anatomy?</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ZONE 4: Convergence & Transition to Slide 12 (~22-24% height)
      ========================================================================= */}
      <div className="shrink-0 mt-1 space-y-1">
        {/* Converging Connectors */}
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
            <circle cx="200" cy="11" r="2.5" fill="#6F69C9" />
          </svg>
        </div>

        {/* Shared Convergence Node */}
        <div className="py-1.5 px-3 rounded-xl bg-white border border-[#D9D8F4] flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-[#D9D8F4]/50 text-[#6F69C9]">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-wider text-[#24242A] uppercase font-mono block leading-none">
                ANATOMICALLY GROUNDED DISEASE-EVIDENCE INTERPRETATION
              </span>
              <p className="text-[9.5px] text-[#626A7C] mt-0.5">
                Different supervision → different evidence → shared anatomical interpretation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[9.5px] font-mono text-[#6F69C9] font-bold bg-[#F4F5FB] px-2 py-0.5 rounded border border-[#D9DDEE]">
            <span>Shared Goal</span>
          </div>
        </div>

        {/* Transition Statement to Slide 12 */}
        <div className="p-2 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-between gap-3 text-xs text-[#24242A] shadow-2xs">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-1.5 h-4 rounded-full bg-[#6F69C9] shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#24242A] leading-tight">
                <span>But both directions still required </span>
                <span className="font-extrabold text-[#6F69C9]">an anatomical reference</span>
                <span> for interpretation.</span>
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-[#74747D] mt-0.5 font-mono">
                <span>Disease evidence</span>
                <span>+</span>
                <span>Anatomical context</span>
                <ArrowRight className="w-2.5 h-2.5 text-[#6F69C9]" />
                <span className="text-[#24242A] font-semibold">Meaningful brainstem interpretation</span>
              </div>
            </div>
          </div>

          <span className="text-[10px] font-mono text-[#6F69C9] font-bold shrink-0">
            We Still Needed an Anatomical Reference (Slide 12) →
          </span>
        </div>
      </div>
    </div>
  );
};


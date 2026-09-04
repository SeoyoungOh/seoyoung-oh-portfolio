import React, { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface FoundationBaselineMotivationSlideProps {
  isActive: boolean;
}

type VisualState = 'subregions' | 'zoom' | 'targets';

export const FoundationBaselineMotivationSlide: React.FC<FoundationBaselineMotivationSlideProps> = () => {
  // State switching: hover/focus preview, click/tap lock
  const [lockedState, setLockedState] = useState<VisualState | null>(null);
  const [hoveredState, setHoveredState] = useState<VisualState | null>(null);
  const [focusedState, setFocusedState] = useState<VisualState | null>(null);

  const activeState: VisualState = hoveredState ?? focusedState ?? lockedState ?? 'subregions';

  const handleSelectState = (state: VisualState) => {
    setLockedState((prev) => (prev === state ? null : state));
  };

  // Lightbox modal state
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const imageTriggerRef = useRef<HTMLDivElement>(null);

  const handleOpenLightbox = () => {
    if (activeState === 'subregions') {
      setLightboxData({
        src: '/images/phd-defense/foundations/foundation-prior-subregions.png',
        alt: 'Prior brainstem segmentation at coarse subregion scale',
        title: 'Prior Subregions',
        subtitle: 'Coarse anatomical scale',
      });
    } else if (activeState === 'zoom') {
      setLightboxData({
        src: '/images/phd-defense/foundations/foundation-prior-green-zoom.png',
        alt: 'Zoom into a single segmented subregion revealing internal heterogeneity',
        title: 'Zoom into Subregion',
        subtitle: 'One coarse region ≠ one fine anatomical target',
      });
    } else {
      setLightboxData({
        src: '/images/phd-defense/foundations/foundation-our-fine-targets-within-subregion.png',
        alt: 'Fine-grained target structures situated within the coarse subregion',
        title: 'Fine-Grained Targets',
        subtitle: 'Fine nuclei / pathways reference targets',
      });
    }
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area
      ========================================================================= */}
      <div className="mb-1">
        <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
          FOUNDATIONS
        </span>
        <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
          Where Do We Start Without a Fine-Grained Baseline?
        </h2>
        <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
          Existing segmentation approaches provided a useful starting point — but mostly at a much coarser anatomical scale.
        </p>
      </div>

      {/* =========================================================================
          MIDDLE: Two-Column Composition (Left: ~41% Explanatory, Right: ~59% Visual)
      ========================================================================= */}
      <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
        {/* -----------------------------------------------------------------------
            LEFT COLUMN (5 / 12 cols ≈ 41.7%): Fixed Explanatory Content
        ----------------------------------------------------------------------- */}
        <div className="col-span-5 flex flex-col justify-between space-y-2.5">
          {/* Block 1: WHAT WAS AVAILABLE */}
          <div className="bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
              <h3 className="text-xs font-bold text-[#24242A] tracking-tight">
                Existing baseline
              </h3>
            </div>
            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              Many previous brainstem segmentation approaches focused on major anatomical subregions rather than fine internal nuclei.
            </p>
          </div>

          {/* Block 2: THE SCALE MISMATCH */}
          <div className="bg-white rounded-xl border border-[#A7A3DE] p-3.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
              <h3 className="text-xs font-bold text-[#24242A] tracking-tight">
                Our target scale
              </h3>
            </div>
            <p className="text-[11px] text-[#24242A] font-medium leading-relaxed">
              The structures of interest in this thesis are much smaller and lie within these larger segmented regions.
            </p>
          </div>

          {/* Block 3: FIRST RESEARCH STEP */}
          <div className="bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
              <h3 className="text-xs font-bold text-[#24242A] tracking-tight">
                First step
              </h3>
            </div>
            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              We therefore first asked whether conventional supervised segmentation could provide a practical baseline using the anatomical references available to us.
            </p>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            RIGHT COLUMN (7 / 12 cols ≈ 58.3%): Dominant Interactive Visual Viewport
        ----------------------------------------------------------------------- */}
        <div className="col-span-7 bg-[#FAFAFC] rounded-2xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          {/* State Controls: Restrained 3-Step Pill Progression */}
          <div className="flex items-center justify-between pb-2 border-b border-[#D9DDEE]/80 mb-2">
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#6F69C9] uppercase">
              ANATOMICAL SCALE
            </span>

            {/* 3 State Controls with subtle chevron connectors */}
            <div
              className="flex items-center gap-1"
              role="group"
              aria-label="Brainstem segmentation scale progression"
              onMouseLeave={() => setHoveredState(null)}
            >
              {/* Step 1: Prior subregions */}
              <button
                type="button"
                role="button"
                aria-pressed={activeState === 'subregions'}
                onMouseEnter={() => setHoveredState('subregions')}
                onFocus={() => setFocusedState('subregions')}
                onBlur={() => setFocusedState(null)}
                onClick={() => handleSelectState('subregions')}
                className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                  activeState === 'subregions'
                    ? 'bg-[#A7A3DE]/25 border-[#6F69C9] text-[#24242A] ring-1 ring-[#6F69C9]/30'
                    : 'bg-white/90 border-[#D9D8F4] text-[#74747D] hover:text-[#24242A] hover:border-[#A7A3DE]'
                }`}
              >
                1. Prior subregions
              </button>

              <ChevronRight className="w-3 h-3 text-[#A7A3DE] shrink-0" />

              {/* Step 2: Zoom into subregion */}
              <button
                type="button"
                role="button"
                aria-pressed={activeState === 'zoom'}
                onMouseEnter={() => setHoveredState('zoom')}
                onFocus={() => setFocusedState('zoom')}
                onBlur={() => setFocusedState(null)}
                onClick={() => handleSelectState('zoom')}
                className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                  activeState === 'zoom'
                    ? 'bg-[#A7A3DE]/25 border-[#6F69C9] text-[#24242A] ring-1 ring-[#6F69C9]/30'
                    : 'bg-white/90 border-[#D9D8F4] text-[#74747D] hover:text-[#24242A] hover:border-[#A7A3DE]'
                }`}
              >
                2. Zoom into subregion
              </button>

              <ChevronRight className="w-3 h-3 text-[#A7A3DE] shrink-0" />

              {/* Step 3: Fine-grained targets */}
              <button
                type="button"
                role="button"
                aria-pressed={activeState === 'targets'}
                onMouseEnter={() => setHoveredState('targets')}
                onFocus={() => setFocusedState('targets')}
                onBlur={() => setFocusedState(null)}
                onClick={() => handleSelectState('targets')}
                className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                  activeState === 'targets'
                    ? 'bg-[#A7A3DE]/25 border-[#6F69C9] text-[#24242A] ring-1 ring-[#6F69C9]/30'
                    : 'bg-white/90 border-[#D9D8F4] text-[#74747D] hover:text-[#24242A] hover:border-[#A7A3DE]'
                }`}
              >
                3. Fine-grained targets
              </button>
            </div>
          </div>

          {/* Fixed Single Image Viewport (Same fixed height & width, smooth crossfade, enlargeable) */}
          <div
            ref={imageTriggerRef}
            role="button"
            tabIndex={0}
            aria-label={`Click to enlarge ${
              activeState === 'subregions'
                ? 'Prior subregions'
                : activeState === 'zoom'
                ? 'Subregion zoom'
                : 'Fine-grained targets'
            } image`}
            onClick={handleOpenLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenLightbox();
              }
            }}
            className="relative w-full h-[225px] bg-[#0A0B10] rounded-xl border border-[#232534] overflow-hidden flex items-center justify-center shadow-inner group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            {/* Image 1: Prior Subregions (Default) */}
            <img
              src="/images/phd-defense/foundations/foundation-prior-subregions.png"
              alt="Prior brainstem segmentation at coarse subregion scale"
              className={`absolute inset-0 w-full h-full object-contain p-1.5 transition-opacity duration-200 ease-in-out pointer-events-none ${
                activeState === 'subregions' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Image 2: Zoom into Subregion */}
            <img
              src="/images/phd-defense/foundations/foundation-prior-green-zoom.png"
              alt="Zoom into a single segmented subregion revealing internal heterogeneity"
              className={`absolute inset-0 w-full h-full object-contain p-1.5 transition-opacity duration-200 ease-in-out pointer-events-none ${
                activeState === 'zoom' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Image 3: Fine-grained targets */}
            <img
              src="/images/phd-defense/foundations/foundation-our-fine-targets-within-subregion.png"
              alt="Fine-grained target structures situated within the coarse subregion"
              className={`absolute inset-0 w-full h-full object-contain p-1.5 transition-opacity duration-200 ease-in-out pointer-events-none ${
                activeState === 'targets' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Subdued state label badge in viewport corner */}
            <div className="absolute bottom-2 left-2 pointer-events-none">
              <span className="px-2 py-0.5 rounded bg-black/65 backdrop-blur-xs border border-white/10 text-[9px] font-mono text-[#A7A3DE]">
                {activeState === 'subregions'
                  ? 'COARSE SUBREGION MESH'
                  : activeState === 'zoom'
                  ? 'SUBREGION INTERIOR'
                  : 'NEUROANATOMICAL TARGET ATLAS'}
              </span>
            </div>

            {/* Hover / Focus Zoom Cue */}
            <ZoomIndicatorBadge />
          </div>

          {/* Dynamic Caption Area (Smoothly changes text with state) */}
          <div className="mt-2 text-center min-h-[36px] flex flex-col justify-center">
            {activeState === 'subregions' && (
              <>
                <p className="text-xs text-[#24242A] font-medium leading-snug">
                  Prior brainstem segmentation focused on relatively large anatomical subregions.
                </p>
                <span className="text-[10.5px] text-[#6F69C9] font-mono font-semibold">
                  Coarse anatomical scale
                </span>
              </>
            )}

            {activeState === 'zoom' && (
              <>
                <p className="text-xs text-[#24242A] font-medium leading-snug">
                  A single segmented subregion still contains much finer internal anatomy.
                </p>
                <span className="text-[10.5px] text-[#6F69C9] font-mono font-semibold">
                  One coarse region ≠ one fine anatomical target
                </span>
              </>
            )}

            {activeState === 'targets' && (
              <>
                <p className="text-xs text-[#24242A] font-medium leading-snug">
                  The structures considered in this thesis lie at a much finer anatomical scale inside these coarse regions.
                </p>
                <span className="text-[10.5px] text-[#6F69C9] font-mono font-semibold">
                  Fine nuclei / pathways
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway Statement & Transition into Slide 8
      ========================================================================= */}
      <div className="space-y-1.5 pt-1">
        {/* Key Takeaway and Transition */}
        <div className="p-2.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-[#24242A]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4.5 rounded-full bg-[#6F69C9] shrink-0" />
            <p className="leading-snug text-xs">
              <span className="font-bold text-[#24242A]">Key Takeaway: </span>
              <span>What we could segment at the subregion level was </span>
              <span className="font-bold text-[#6F69C9]">
                not yet the anatomical scale
              </span>
              <span> we ultimately wanted to study.</span>
            </p>
          </div>

          <span className="text-[11px] text-[#74747D] italic shrink-0 self-end sm:self-center">
            So the first step was to establish a practical supervised segmentation baseline.
          </span>
        </div>

        {/* Slide Bottom Bar */}
        <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
          <span>Foundational Context</span>
          <span className="font-semibold text-[#6F69C9]">Supervised Baseline Motivation</span>
        </div>
      </div>

      {/* In-Presentation Lightbox Modal (Reusing existing ImageLightbox) */}
      <ImageLightbox
        isOpen={lightboxData !== null}
        onClose={handleCloseLightbox}
        data={lightboxData}
        triggerRef={imageTriggerRef}
      />
    </div>
  );
};

import React, { useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface IntroMriChallengeSlideProps {
  isActive: boolean;
}

type InVivoMode = 'whole' | 'brainstem';

export const IntroMriChallengeSlide: React.FC<IntroMriChallengeSlideProps> = () => {
  // In-vivo state switching: defaults to 'whole'
  const [lockedMode, setLockedMode] = useState<InVivoMode | null>(null);
  const [hoveredMode, setHoveredMode] = useState<InVivoMode | null>(null);
  const [focusedMode, setFocusedMode] = useState<InVivoMode | null>(null);

  const activeInVivoMode: InVivoMode = hoveredMode ?? focusedMode ?? lockedMode ?? 'whole';

  const handleToggleLock = (mode: InVivoMode) => {
    setLockedMode((prev) => (prev === mode ? null : mode));
  };

  // Lightbox modal state
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const inVivoTriggerRef = useRef<HTMLDivElement>(null);
  const exVivoTriggerRef = useRef<HTMLDivElement>(null);
  const [activeTriggerRef, setActiveTriggerRef] = useState<React.RefObject<HTMLElement | null> | undefined>(undefined);

  const handleOpenInVivoLightbox = () => {
    if (activeInVivoMode === 'whole') {
      setLightboxData({
        src: '/images/phd-defense/intro/intro-mri-invivo-whole.png',
        alt: 'In-vivo whole brain routine MRI',
        title: 'In-vivo MRI',
        subtitle: 'Whole brain',
      });
    } else {
      setLightboxData({
        src: '/images/phd-defense/intro/intro-mri-invivo-brainstem.png',
        alt: 'In-vivo brainstem routine MRI crop',
        title: 'In-vivo MRI',
        subtitle: 'Brainstem',
      });
    }
    setActiveTriggerRef(inVivoTriggerRef);
  };

  const handleOpenExVivoLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/intro/intro-mri-exvivo-brainstem.png',
      alt: 'High-resolution ex-vivo brainstem reference imaging',
      title: 'Ex-vivo Reference',
      subtitle: 'Agostinelli et al., 2023',
    });
    setActiveTriggerRef(exVivoTriggerRef);
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Slide Title Area (approx 10–12% height)
      ========================================================================= */}
      <div className="mb-2">
        <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-1">
          INTRODUCTION
        </span>
        <h2 className="text-2xl lg:text-[26px] font-black text-[#24242A] tracking-tight leading-snug">
          Why Is the Brainstem Difficult to Study on Routine MRI?
        </h2>
      </div>

      {/* =========================================================================
          MIDDLE: Two Large Side-by-Side Visual Panels (approx 56–60% height)
      ========================================================================= */}
      <div className="grid grid-cols-2 gap-5 my-auto items-stretch">
        {/* -----------------------------------------------------------------------
            LEFT PANEL: In-vivo MRI
        ----------------------------------------------------------------------- */}
        <div className="bg-[#FAFAFC] rounded-2xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#D9DDEE]/80 mb-2.5">
            <div className="flex items-baseline gap-2">
              <h3 className="text-sm font-bold text-[#24242A] tracking-tight">
                In-vivo MRI
              </h3>
              <span className="text-[11px] text-[#74747D] font-medium">
                Study cohort
              </span>
            </div>

            {/* Two Compact Interactive Controls: Whole brain / Brainstem */}
            <div
              className="flex items-center gap-1.5"
              role="group"
              aria-label="In-vivo MRI view selector"
              onMouseLeave={() => setHoveredMode(null)}
            >
              <button
                type="button"
                role="button"
                aria-pressed={activeInVivoMode === 'whole'}
                onMouseEnter={() => setHoveredMode('whole')}
                onFocus={() => setFocusedMode('whole')}
                onBlur={() => setFocusedMode(null)}
                onClick={() => handleToggleLock('whole')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                  activeInVivoMode === 'whole'
                    ? 'bg-[#A7A3DE]/20 border-[#6F69C9] text-[#24242A] ring-1 ring-[#6F69C9]/30'
                    : 'bg-white/80 border-[#D9D8F4] text-[#24242A] hover:bg-[#FAFAFC] hover:border-[#A7A3DE]'
                }`}
              >
                Whole brain
              </button>

              <button
                type="button"
                role="button"
                aria-pressed={activeInVivoMode === 'brainstem'}
                onMouseEnter={() => setHoveredMode('brainstem')}
                onFocus={() => setFocusedMode('brainstem')}
                onBlur={() => setFocusedMode(null)}
                onClick={() => handleToggleLock('brainstem')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                  activeInVivoMode === 'brainstem'
                    ? 'bg-[#A7A3DE]/20 border-[#6F69C9] text-[#24242A] ring-1 ring-[#6F69C9]/30'
                    : 'bg-white/80 border-[#D9D8F4] text-[#24242A] hover:bg-[#FAFAFC] hover:border-[#A7A3DE]'
                }`}
              >
                Brainstem
              </button>
            </div>
          </div>

          {/* Fixed Image Viewport (Enlargeable on Click / Tap / Enter / Space) */}
          <div
            ref={inVivoTriggerRef}
            role="button"
            tabIndex={0}
            aria-label={`Click to enlarge In-vivo MRI ${activeInVivoMode === 'whole' ? 'Whole brain' : 'Brainstem'} image`}
            onClick={handleOpenInVivoLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenInVivoLightbox();
              }
            }}
            className="relative w-full h-[215px] bg-[#0A0B10] rounded-xl border border-[#232534] overflow-hidden flex items-center justify-center shadow-inner group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            {/* View 1: Whole Brain (Default) */}
            <img
              src="/images/phd-defense/intro/intro-mri-invivo-whole.png"
              alt="In-vivo whole brain routine MRI"
              className={`absolute inset-0 w-full h-full object-contain p-1 transition-opacity duration-200 ease-in-out pointer-events-none ${
                activeInVivoMode === 'whole' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* View 2: Brainstem Zoom */}
            <img
              src="/images/phd-defense/intro/intro-mri-invivo-brainstem.png"
              alt="In-vivo brainstem routine MRI crop"
              className={`absolute inset-0 w-full h-full object-contain p-1 transition-opacity duration-200 ease-in-out pointer-events-none ${
                activeInVivoMode === 'brainstem' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Subdued mode indicator tag */}
            <div className="absolute bottom-2 left-2 pointer-events-none">
              <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs border border-white/10 text-[9px] font-mono text-[#A7A3DE]">
                {activeInVivoMode === 'whole' ? 'FIELD OF VIEW: WHOLE BRAIN' : 'FIELD OF VIEW: BRAINSTEM'}
              </span>
            </div>

            {/* Hover/Focus Zoom Cue */}
            <ZoomIndicatorBadge />
          </div>

          {/* Panel Caption */}
          <p className="text-[11.5px] text-[#626A7C] leading-snug mt-2.5 text-center">
            Routine imaging captures the brainstem, but with limited internal anatomical detail.
          </p>
        </div>

        {/* -----------------------------------------------------------------------
            RIGHT PANEL: Ex-vivo Reference (Static, Enlargeable)
        ----------------------------------------------------------------------- */}
        <div className="bg-[#FAFAFC] rounded-2xl border border-[#D9DDEE] p-4 flex flex-col justify-between shadow-2xs">
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#D9DDEE]/80 mb-2.5">
            <div className="flex items-baseline gap-2">
              <h3 className="text-sm font-bold text-[#24242A] tracking-tight">
                Ex-vivo Reference
              </h3>
              <span className="text-[11px] text-[#74747D] font-medium italic">
                Agostinelli et al., 2023
              </span>
            </div>

            {/* Subtle aesthetic tag matching height of left panel controls */}
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] font-semibold bg-[#D9D8F4]/30 text-[#6F69C9] border border-[#D9D8F4]">
                <Sparkles className="w-3 h-3 text-[#6F69C9]" />
                High-Resolution Reference
              </span>
            </div>
          </div>

          {/* Fixed Image Viewport (Enlargeable on Click / Tap / Enter / Space) */}
          <div
            ref={exVivoTriggerRef}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge Ex-vivo Reference imaging"
            onClick={handleOpenExVivoLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenExVivoLightbox();
              }
            }}
            className="relative w-full h-[215px] bg-[#0A0B10] rounded-xl border border-[#232534] overflow-hidden flex items-center justify-center shadow-inner group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            <img
              src="/images/phd-defense/intro/intro-mri-exvivo-brainstem.png"
              alt="High-resolution ex-vivo brainstem reference imaging"
              className="w-full h-full object-contain p-1 pointer-events-none"
            />

            {/* Subdued reference tag */}
            <div className="absolute bottom-2 left-2 pointer-events-none">
              <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs border border-white/10 text-[9px] font-mono text-[#C3E0C9]">
                ANATOMICAL REFERENCE ATLAS
              </span>
            </div>

            {/* Hover/Focus Zoom Cue */}
            <ZoomIndicatorBadge />
          </div>

          {/* Panel Caption */}
          <p className="text-[11.5px] text-[#626A7C] leading-snug mt-2.5 text-center">
            High-resolution ex-vivo reference imaging reveals substantially finer internal anatomy.
          </p>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM INTERPRETATION AREA (approx 28–32% height)
          Three concise interpretation blocks + one final takeaway statement
      ========================================================================= */}
      <div className="mt-2 space-y-2.5">
        {/* Three Aligned Interpretation Columns */}
        <div className="grid grid-cols-3 gap-3.5">
          {/* Block 1: Small structures */}
          <div className="bg-white rounded-xl border border-[#D9D8F4] p-3 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
              <h4 className="text-xs font-bold text-[#24242A] tracking-tight">
                Small structures
              </h4>
            </div>
            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              Many clinically relevant brainstem nuclei occupy only a small fraction of the brainstem.
            </p>
          </div>

          {/* Block 2: Limited resolution & contrast */}
          <div className="bg-white rounded-xl border border-[#D9D8F4] p-3 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
              <h4 className="text-xs font-bold text-[#24242A] tracking-tight">
                Limited resolution & contrast
              </h4>
            </div>
            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              Routine in-vivo MRI cannot clearly separate many neighboring internal structures.
            </p>
          </div>

          {/* Block 3: Partial-volume effects */}
          <div className="bg-white rounded-xl border border-[#D9D8F4] p-3 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
              <h4 className="text-xs font-bold text-[#24242A] tracking-tight">
                Partial-volume effects
              </h4>
            </div>
            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              Multiple anatomical structures may contribute to the same voxel.
            </p>
          </div>
        </div>

        {/* Final Takeaway Statement (Prepares transition to Slide 5) */}
        <div className="p-2.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center gap-2.5 text-xs text-[#24242A]">
          <div className="w-1.5 h-5 rounded-full bg-[#6F69C9] shrink-0" />
          <p className="leading-snug">
            <span className="font-bold text-[#24242A]">Key Challenge: </span>
            <span className="font-semibold text-[#6F69C9]">
              The challenge becomes even greater when we move from the brainstem to individual nuclei.
            </span>
          </p>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Imaging Constraints</span>
        <span className="font-semibold text-[#6F69C9]">Resolution & Contrast Gap</span>
      </div>

      {/* In-Presentation Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxData !== null}
        onClose={handleCloseLightbox}
        data={lightboxData}
        triggerRef={activeTriggerRef}
      />
    </div>
  );
};

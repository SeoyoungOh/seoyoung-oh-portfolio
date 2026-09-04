import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface IntroAnnotationGapSlideProps {
  isActive: boolean;
}

export const IntroAnnotationGapSlide: React.FC<IntroAnnotationGapSlideProps> = () => {
  // Lightbox modal state
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const inVivoTriggerRef = useRef<HTMLDivElement>(null);
  const exVivoTriggerRef = useRef<HTMLDivElement>(null);
  const diagramTriggerRef = useRef<HTMLDivElement>(null);
  const [activeTriggerRef, setActiveTriggerRef] = useState<React.RefObject<HTMLElement | null> | undefined>(undefined);

  const handleOpenInVivo = () => {
    setLightboxData({
      src: '/images/phd-defense/intro/intro-mri-invivo-target-roi.png',
      alt: 'In-vivo MRI magnified target region',
      title: 'In-vivo MRI',
      subtitle: 'Target region',
    });
    setActiveTriggerRef(inVivoTriggerRef);
  };

  const handleOpenExVivo = () => {
    setLightboxData({
      src: '/images/phd-defense/intro/intro-mri-exvivo-target-roi.png',
      alt: 'High-resolution ex-vivo brainstem target region',
      title: 'Ex-vivo Reference',
      subtitle: 'Agostinelli et al., 2023',
    });
    setActiveTriggerRef(exVivoTriggerRef);
  };

  const handleOpenDiagram = () => {
    setLightboxData({
      src: '/images/phd-defense/intro/intro-mri-anatomical-diagram.png',
      alt: 'Anatomical atlas diagram showing nuclei architecture',
      title: 'Anatomical Diagram',
      subtitle: 'Paxinos et al., 2012',
      isLightBg: true,
    });
    setActiveTriggerRef(diagramTriggerRef);
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Slide Title & Subtitle Area (approx 12–14% height)
      ========================================================================= */}
      <div className="mb-1">
        <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
          INTRODUCTION
        </span>
        <h2 className="text-2xl lg:text-[26px] font-black text-[#24242A] tracking-tight leading-snug">
          Clinically Important Structures, but No Reliable Annotations
        </h2>
        <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
          At the nuclei level, the gap between visible image information and known anatomy becomes critical.
        </p>
      </div>

      {/* =========================================================================
          MIDDLE: Three Large Side-by-Side Comparison Panels (approx 55–58% height)
          Left: In-vivo MRI | Center: Ex-vivo Reference | Right: Anatomical Diagram
      ========================================================================= */}
      <div className="grid grid-cols-3 gap-4 my-auto items-stretch">
        {/* -----------------------------------------------------------------------
            PANEL 1: In-vivo MRI (Target region)
        ----------------------------------------------------------------------- */}
        <div className="bg-[#FAFAFC] rounded-2xl border border-[#D9DDEE] p-3.5 flex flex-col justify-between shadow-2xs hover:border-[#A7A3DE] transition-all duration-150">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold tracking-wider text-[#6F69C9] uppercase">
                WHAT WE SEE
              </span>
              <span className="text-[9.5px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#D9D8F4]/40 text-[#6F69C9] border border-[#D9D8F4]/60">
                TARGET ROI
              </span>
            </div>
            <div className="flex items-baseline justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
              <h3 className="text-sm font-bold text-[#24242A] tracking-tight">
                In-vivo MRI
              </h3>
              <span className="text-[11px] text-[#74747D] font-medium">
                Target region
              </span>
            </div>
          </div>

          {/* Image Viewport: Fixed height, contained aspect ratio, dark radiological canvas */}
          <div
            ref={inVivoTriggerRef}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge In-vivo MRI target region"
            onClick={handleOpenInVivo}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenInVivo();
              }
            }}
            className="relative w-full h-[195px] bg-[#0A0B10] rounded-xl border border-[#232534] overflow-hidden flex items-center justify-center shadow-inner group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            <img
              src="/images/phd-defense/intro/intro-mri-invivo-target-roi.png"
              alt="In-vivo MRI magnified target region"
              className="w-full h-full object-contain p-1 pointer-events-none"
            />
            <div className="absolute bottom-1.5 left-1.5 pointer-events-none">
              <span className="px-1.5 py-0.5 rounded bg-black/65 backdrop-blur-xs border border-white/10 text-[9px] font-mono text-[#A7A3DE]">
                ROUTINE IN-VIVO
              </span>
            </div>

            {/* Hover/Focus Zoom Cue */}
            <ZoomIndicatorBadge />
          </div>

          {/* Caption */}
          <p className="text-[11px] text-[#626A7C] leading-snug mt-2 text-center min-h-[30px] flex items-center justify-center">
            Fine nuclei boundaries remain indistinct.
          </p>
        </div>

        {/* -----------------------------------------------------------------------
            PANEL 2: Ex-vivo Reference
        ----------------------------------------------------------------------- */}
        <div className="bg-[#FAFAFC] rounded-2xl border border-[#D9DDEE] p-3.5 flex flex-col justify-between shadow-2xs hover:border-[#A7A3DE] transition-all duration-150">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold tracking-wider text-[#6F69C9] uppercase">
                HIGH-DETAIL REFERENCE
              </span>
              <span className="text-[9.5px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#D9D8F4]/40 text-[#6F69C9] border border-[#D9D8F4]/60">
                TARGET ROI
              </span>
            </div>
            <div className="flex items-baseline justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
              <h3 className="text-sm font-bold text-[#24242A] tracking-tight">
                Ex-vivo Reference
              </h3>
              <span className="text-[11px] text-[#74747D] font-medium italic">
                Agostinelli et al., 2023
              </span>
            </div>
          </div>

          {/* Image Viewport: Identical height, contained aspect ratio, dark radiological canvas */}
          <div
            ref={exVivoTriggerRef}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge Ex-vivo Reference target region"
            onClick={handleOpenExVivo}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenExVivo();
              }
            }}
            className="relative w-full h-[195px] bg-[#0A0B10] rounded-xl border border-[#232534] overflow-hidden flex items-center justify-center shadow-inner group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            <img
              src="/images/phd-defense/intro/intro-mri-exvivo-target-roi.png"
              alt="High-resolution ex-vivo brainstem target region"
              className="w-full h-full object-contain p-1 pointer-events-none"
            />
            <div className="absolute bottom-1.5 left-1.5 pointer-events-none">
              <span className="px-1.5 py-0.5 rounded bg-black/65 backdrop-blur-xs border border-white/10 text-[9px] font-mono text-[#C3E0C9]">
                EX-VIVO 7T REFERENCE
              </span>
            </div>

            {/* Hover/Focus Zoom Cue */}
            <ZoomIndicatorBadge />
          </div>

          {/* Caption */}
          <p className="text-[11px] text-[#626A7C] leading-snug mt-2 text-center min-h-[30px] flex items-center justify-center">
            Much finer anatomical detail becomes visible in the corresponding high-resolution reference.
          </p>
        </div>

        {/* -----------------------------------------------------------------------
            PANEL 3: Anatomical Diagram
        ----------------------------------------------------------------------- */}
        <div className="bg-[#FAFAFC] rounded-2xl border border-[#D9DDEE] p-3.5 flex flex-col justify-between shadow-2xs hover:border-[#A7A3DE] transition-all duration-150">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold tracking-wider text-[#6F69C9] uppercase">
                KNOWN ANATOMY
              </span>
              <span className="text-[9.5px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#D9D8F4]/40 text-[#6F69C9] border border-[#D9D8F4]/60">
                TARGET ROI
              </span>
            </div>
            <div className="flex items-baseline justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
              <h3 className="text-sm font-bold text-[#24242A] tracking-tight">
                Anatomical Diagram
              </h3>
              <span className="text-[11px] text-[#74747D] font-medium italic">
                Paxinos et al., 2012
              </span>
            </div>
          </div>

          {/* Image Viewport: Identical height, contained aspect ratio, light canvas matching atlas background */}
          <div
            ref={diagramTriggerRef}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge Anatomical Diagram"
            onClick={handleOpenDiagram}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenDiagram();
              }
            }}
            className="relative w-full h-[195px] bg-white rounded-xl border border-[#D9DDEE] overflow-hidden flex items-center justify-center shadow-inner group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            <img
              src="/images/phd-defense/intro/intro-mri-anatomical-diagram.png"
              alt="Anatomical atlas diagram showing nuclei architecture"
              className="w-full h-full object-contain p-1 pointer-events-none"
            />
            <div className="absolute bottom-1.5 left-1.5 pointer-events-none">
              <span className="px-1.5 py-0.5 rounded bg-white/80 backdrop-blur-xs border border-[#D9DDEE] text-[9px] font-mono text-[#6F69C9]">
                ATLAS NUCLEI ARCHITECTURE
              </span>
            </div>

            {/* Hover/Focus Zoom Cue */}
            <ZoomIndicatorBadge />
          </div>

          {/* Caption */}
          <p className="text-[11px] text-[#626A7C] leading-snug mt-2 text-center min-h-[30px] flex items-center justify-center">
            Multiple distinct nuclei are expected within this very small region.
          </p>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Annotation Problem Reasoning Flow & Final Takeaway (approx 28–30%)
      ========================================================================= */}
      <div className="mt-1.5 space-y-2">
        {/* Three-Step Reasoning Sequence */}
        <div className="flex items-center gap-2">
          {/* STEP 1: Known anatomy */}
          <div className="flex-1 bg-white rounded-xl border border-[#A7A3DE] p-2.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-4 h-4 rounded-full bg-[#A7A3DE]/20 text-[#6F69C9] font-mono text-[9.5px] font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <h4 className="text-xs font-bold text-[#24242A] tracking-tight">
                Known anatomy
              </h4>
            </div>
            <p className="text-[10.5px] text-[#626A7C] leading-snug">
              Reference atlases tell us which nuclei should be present in this region.
            </p>
          </div>

          {/* Connector 1 -> 2 */}
          <div className="shrink-0 text-[#A7A3DE]">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>

          {/* STEP 2: Invisible boundaries */}
          <div className="flex-1 bg-white rounded-xl border border-[#D9DDEE] p-2.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-4 h-4 rounded-full bg-[#D9DDEE]/50 text-[#74747D] font-mono text-[9.5px] font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <h4 className="text-xs font-bold text-[#24242A] tracking-tight">
                Invisible boundaries
              </h4>
            </div>
            <p className="text-[10.5px] text-[#626A7C] leading-snug">
              Routine in-vivo MRI does not provide sufficiently clear subject-specific boundaries for these fine structures.
            </p>
          </div>

          {/* Connector 2 -> 3 */}
          <div className="shrink-0 text-[#6F69C9]">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>

          {/* STEP 3: Annotation scarcity */}
          <div className="flex-1 bg-[#A7A3DE]/10 rounded-xl border-2 border-[#6F69C9] p-2.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-4 h-4 rounded-full bg-[#6F69C9] text-white font-mono text-[9.5px] font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <h4 className="text-xs font-bold text-[#6F69C9] tracking-tight">
                Annotation scarcity
              </h4>
            </div>
            <p className="text-[10.5px] text-[#24242A] font-medium leading-snug">
              Reliable voxel-wise annotations are therefore extremely difficult to obtain.
            </p>
          </div>
        </div>

        {/* Final Takeaway Statement & Optional Small Note */}
        <div className="p-2.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-[#24242A]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4.5 rounded-full bg-[#6F69C9] shrink-0" />
            <p className="leading-snug text-xs">
              <span className="font-bold text-[#24242A]">Core Dilemma: </span>
              <span>We </span>
              <span className="font-bold text-[#24242A] underline decoration-[#A7A3DE] decoration-2 underline-offset-2">
                know what anatomy should be there
              </span>
              <span> — but we </span>
              <span className="font-bold text-[#6F69C9]">
                cannot reliably delineate
              </span>
              <span> its boundaries in routine MRI.</span>
            </p>
          </div>

          <span className="text-[10px] text-[#74747D] italic shrink-0 self-end sm:self-center">
            Atlas-based correspondence still involves registration and spatial uncertainty.
          </span>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>The Annotation Bottleneck</span>
        <span className="font-semibold text-[#6F69C9]">Supervision Dilemma</span>
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

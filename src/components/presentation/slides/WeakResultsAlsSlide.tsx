import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface WeakResultsAlsSlideProps {
  isActive: boolean;
}

export const WeakResultsAlsSlide: React.FC<WeakResultsAlsSlideProps> = () => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const handleOpenLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/weak/thesis-weak-results-als.png',
      alt: 'PULSE ALS weakly supervised localization results comparing Whole-brain T1w, Brainstem T1w, and Brainstem T1w + FA',
      title: 'ALS Spatial Evidence in the PULSE Cohort',
      subtitle: 'Weakly supervised disease localization across input regimes and reliability calibration (Oh et al., ISBI 2026 · Thesis Ch. 6)',
      isLightBg: true,
    });
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none overflow-hidden">
      {/* =========================================================================
          TOP: Header Area (~9% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              WEAK SUPERVISION · CLINICAL TARGET (PULSE ALS)
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              ALS Interpretation in PULSE
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Brainstem focusing and multimodal input make reliable diagnostic evidence more anatomically concentrated.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Oh et al., ISBI 2026 · Extended PULSE analysis in Thesis Ch. 6</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN CONTENT AREA (58 / 42 Two-Column Layout)
          Left: Complete Scientific Figure (no crop, no split, no duplicated tags)
          Right: ONLY THREE compact result sections
      ========================================================================= */}
      <div className="grid grid-cols-12 gap-3 flex-1 min-h-0 my-0.5 items-stretch overflow-hidden">
        {/* ---------------------------------------------------------------------
            LEFT COLUMN (7 cols / ~58% width): Complete Scientific Figure
        --------------------------------------------------------------------- */}
        <div className="col-span-7 bg-white rounded-xl border border-[#D9DDEE] p-2 flex flex-col justify-between shadow-2xs h-full overflow-hidden">
          {/* Figure Top Bar */}
          <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE]/80 shrink-0">
            <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase">
              PULSE COHORT · SPATIAL ATTRIBUTION OVERLAY
            </span>
            <span className="text-[8px] font-mono text-[#74747D]">
              CLICK IMAGE TO ENLARGE
            </span>
          </div>

          {/* Scientific Image (Complete figure, pure white #FFFFFF, contain) */}
          <div
            onClick={handleOpenLightbox}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge PULSE ALS results figure"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenLightbox();
              }
            }}
            className="flex-1 min-h-0 relative flex items-center justify-center p-1 bg-white overflow-hidden group cursor-zoom-in rounded-lg"
          >
            <img
              src="/images/phd-defense/weak/thesis-weak-results-als.png"
              alt="PULSE ALS weakly supervised localization results comparing Whole-brain T1w, Brainstem T1w, and Brainstem T1w + FA"
              className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            />
            <ZoomIndicatorBadge />
          </div>

          {/* Clean Figure Caption Footer (Duplicated external modality labels removed) */}
          <div className="pt-1 border-t border-[#D9DDEE]/80 flex items-center justify-between shrink-0 text-[8.5px] text-[#74747D]">
            <span>Spatial attribution overlays across input regimes and reliability calibration.</span>
            <span className="font-mono text-[8px]">Thesis Ch. 6</span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            RIGHT COLUMN (5 cols / ~42% width): ONLY THREE Compact Result Sections
        --------------------------------------------------------------------- */}
        <div className="col-span-5 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-2 flex flex-col justify-between shadow-2xs h-full overflow-hidden gap-1.5">
          {/* Section 1: Reliability Calibration */}
          <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE]">
            <span className="text-[9.5px] font-bold text-[#24242A] block mb-1">
              1. Reliability changes WHERE evidence remains
            </span>
            <div className="grid grid-cols-3 gap-1 text-[9px] font-mono mb-1">
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                <span className="text-[7.5px] text-[#74747D] block">Hit@ROI</span>
                <span className="text-[#74747D]">0.61 → </span>
                <span className="font-bold text-[#6F69C9]">0.68</span>
              </div>
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                <span className="text-[7.5px] text-[#74747D] block">FP@Non-ROI</span>
                <span className="text-[#74747D]">0.19 → </span>
                <span className="font-bold text-[#6F69C9]">0.13</span>
              </div>
              <div className="p-1 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/50 text-center">
                <span className="text-[7.5px] text-[#6F69C9] font-bold block">Reliable ROI conc.</span>
                <span className="text-[#74747D]">0.49 → </span>
                <span className="font-black text-[#6F69C9]">0.64</span>
              </div>
            </div>
            <p className="text-[8.5px] text-[#626A7C] leading-snug">
              Reliability calibration retains more low-uncertainty evidence inside the ALS-relevant ROI while suppressing off-target evidence.
            </p>
          </div>

          {/* Section 2: Brainstem Focus + FA */}
          <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE]">
            <span className="text-[9.5px] font-bold text-[#24242A] block mb-1">
              2. Brainstem focus + FA improve specificity
            </span>
            <div className="grid grid-cols-4 gap-1 text-[8.5px] font-mono mb-1">
              <div className="p-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                <span className="text-[7.5px] text-[#74747D] block">Hit@ROI</span>
                <span className="text-[#74747D]">0.54→</span>
                <span className="font-bold text-[#6F69C9]">0.68</span>
              </div>
              <div className="p-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                <span className="text-[7.5px] text-[#74747D] block">ROI conc.</span>
                <span className="text-[#74747D]">0.41→</span>
                <span className="font-bold text-[#6F69C9]">0.59</span>
              </div>
              <div className="p-0.5 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/50 text-center">
                <span className="text-[7.5px] text-[#6F69C9] font-bold block">Reliable conc.</span>
                <span className="text-[#74747D]">0.46→</span>
                <span className="font-black text-[#6F69C9]">0.64</span>
              </div>
              <div className="p-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                <span className="text-[7.5px] text-[#74747D] block">FP@Non-ROI</span>
                <span className="text-[#74747D]">0.26→</span>
                <span className="font-bold text-[#6F69C9]">0.13</span>
              </div>
            </div>
            <p className="text-[8.5px] text-[#626A7C] leading-snug">
              Brainstem focus improves <span className="font-bold text-[#6F69C9]">WHERE</span> the classifier looks; FA improves <span className="font-bold text-[#6F69C9]">WHAT</span> complementary microstructural information is available.
            </p>
            <p className="text-[7.5px] text-[#74747D] leading-tight mt-0.5">
              FA provides complementary tissue-integrity information, not direct pathology.
            </p>
          </div>

          {/* Section 3: Key Interpretation */}
          <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE]">
            <span className="text-[9.5px] font-bold text-[#24242A] block mb-0.5">
              3. Key interpretation
            </span>
            <div className="flex items-center gap-1 my-0.5 flex-wrap">
              <span className="text-[8.5px] text-[#626A7C] font-sans mr-0.5">Evidence becomes:</span>
              <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/50 text-[8px] font-mono font-bold text-[#6F69C9]">
                MORE CONCENTRATED
              </span>
              <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/50 text-[8px] font-mono font-bold text-[#6F69C9]">
                LESS OFF-TARGET
              </span>
              <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/50 text-[8px] font-mono font-bold text-[#6F69C9]">
                MORE RELIABLE
              </span>
            </div>
            <p className="text-[8.5px] text-[#626A7C] leading-tight mt-0.5">
              The gain is spatial specificity — not a claim of voxel-wise ALS pathology localization.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM AREA: Compact Scientific Caution + Takeaway Strip
          Reserved explicit bottom safe space; nothing in main extends behind it.
      ========================================================================= */}
      <div className="shrink-0 mt-1 space-y-1 z-10">
        {/* Horizontal Scientific Caution Strip */}
        <div className="px-2.5 py-1 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center gap-2 text-[8.5px] leading-tight text-[#626A7C]">
          <span className="font-mono font-bold text-[#24242A] uppercase shrink-0 text-[8px] px-1 py-0.5 rounded bg-white border border-[#D9DDEE]">
            SCIENTIFIC CAUTION
          </span>
          <span>
            PULSE has no voxel-wise ALS disease masks. These metrics measure anatomical concentration, off-target evidence, and reliability relative to ALS-relevant ROIs — not pathology segmentation.
          </span>
        </div>

        {/* Bottom Takeaway */}
        <div className="p-1.5 px-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs flex items-center justify-between">
          <p className="text-[11px] font-bold text-[#24242A] leading-snug">
            In PULSE ALS, reliability calibration and brainstem-focused multimodal input produce evidence that is{' '}
            <span className="text-[#6F69C9] font-black">more concentrated</span>,{' '}
            <span className="text-[#6F69C9] font-black">less off-target</span>, and{' '}
            <span className="text-[#6F69C9] font-black">more stable</span>.
          </p>
          <div className="flex items-center gap-1 text-[#6F69C9] font-mono font-bold text-[9.5px] shrink-0 ml-3">
            <span>Next: Weak-Supervision Synthesis</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Reusable ImageLightbox Modal */}
      <ImageLightbox
        isOpen={lightboxData !== null}
        onClose={() => setLightboxData(null)}
        data={lightboxData}
      />
    </div>
  );
};


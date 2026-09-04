import React, { useState } from 'react';
import { ArrowRight, AlertCircle, Info, TrendingUp, ShieldCheck } from 'lucide-react';
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
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~10% height)
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
          MAIN CONTENT AREA (~78% height)
          Left (~60%): Large Complete Scientific Figure on Pure White Surface
          Right (~40%): Three Concise Quantitative & Methodological Highlights
      ========================================================================= */}
      <div className="grid grid-cols-12 gap-3 flex-1 min-h-0 my-0.5 items-stretch">
        {/* ---------------------------------------------------------------------
            LEFT COLUMN (7 cols / ~58% width): Complete Scientific Figure
        --------------------------------------------------------------------- */}
        <div className="col-span-7 bg-white rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs">
          {/* Figure Top Bar */}
          <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE]/80 shrink-0">
            <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
              PULSE COHORT · SPATIAL ATTRIBUTION OVERLAY
            </span>
            <span className="text-[8.5px] font-mono text-[#74747D]">
              CLICK IMAGE TO ENLARGE
            </span>
          </div>

          {/* Scientific Image (Single complete figure, pure white #FFFFFF, contain) */}
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

          {/* Figure Progression Key & Caption Footer */}
          <div className="shrink-0 pt-1.5 border-t border-[#D9DDEE]/80 space-y-1">
            {/* 3-Step Input Regime Progression Key */}
            <div className="grid grid-cols-3 gap-1.5 text-[9px] font-mono">
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] leading-tight">
                <span className="font-bold text-[#24242A] block">1. Whole-brain T1w</span>
                <span className="text-[#74747D]">Broader, more diffuse evidence</span>
              </div>
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] leading-tight">
                <span className="font-bold text-[#24242A] block">2. Brainstem T1w</span>
                <span className="text-[#74747D]">Reduced irrelevant context</span>
              </div>
              <div className="p-1 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/70 leading-tight">
                <span className="font-bold text-[#6F69C9] block">3. Brainstem T1w + FA</span>
                <span className="text-[#24242A] font-medium">Compact & concentrated</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-[#74747D] pt-0.5">
              <span>Attribution overlays with task-oriented ALS brainstem ROI references.</span>
              <span className="font-mono">Thesis Ch. 6</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            RIGHT COLUMN (5 cols / ~42% width): Three Result Highlights
        --------------------------------------------------------------------- */}
        <div className="col-span-5 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs">
          {/* Highlight 1: Reliability changes WHERE evidence remains */}
          <div className="p-2 rounded-lg bg-white border border-[#D9DDEE]">
            <div className="flex items-center justify-between mb-1 pb-0.5 border-b border-[#D9DDEE]/70">
              <span className="text-[10px] font-bold text-[#24242A]">
                1. Reliability changes WHERE the evidence remains
              </span>
              <span className="text-[8.5px] font-mono text-[#74747D]">
                Baseline → RC-Explainer
              </span>
            </div>

            {/* Three key metrics */}
            <div className="grid grid-cols-3 gap-1.5 text-[9.5px] mb-1.5">
              {/* Hit@ROI */}
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE]">
                <div className="flex items-center justify-between text-[8px] font-mono text-[#74747D]">
                  <span>Hit@ROI ↑</span>
                </div>
                <div className="flex items-baseline justify-between font-mono mt-0.5">
                  <span className="text-[#74747D] text-[9px]">0.61 →</span>
                  <span className="text-xs font-black text-[#6F69C9]">0.68</span>
                </div>
                <span className="text-[8px] text-[#74747D] block leading-tight mt-0.5">
                  Evidence reaches target ROI
                </span>
              </div>

              {/* FP@Non-ROI */}
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE]">
                <div className="flex items-center justify-between text-[8px] font-mono text-[#74747D]">
                  <span>FP@Non-ROI ↓</span>
                </div>
                <div className="flex items-baseline justify-between font-mono mt-0.5">
                  <span className="text-[#74747D] text-[9px]">0.19 →</span>
                  <span className="text-xs font-black text-[#6F69C9]">0.13</span>
                </div>
                <span className="text-[8px] text-[#74747D] block leading-tight mt-0.5">
                  Less off-target noise
                </span>
              </div>

              {/* Reliable ROI concentration */}
              <div className="p-1 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/60">
                <div className="flex items-center justify-between text-[8px] font-mono text-[#6F69C9] font-bold">
                  <span>Reliable Conc. ↑</span>
                </div>
                <div className="flex items-baseline justify-between font-mono mt-0.5">
                  <span className="text-[#74747D] text-[9px]">0.49 →</span>
                  <span className="text-xs font-black text-[#6F69C9]">0.64</span>
                </div>
                <span className="text-[8px] text-[#6F69C9] font-bold block leading-tight mt-0.5">
                  Focus of low-uncertainty cue
                </span>
              </div>
            </div>

            <p className="text-[9px] text-[#626A7C] leading-snug">
              Reliability calibration is <span className="font-bold text-[#6F69C9]">not cosmetic</span>: it suppresses unstable off-target evidence while preserving more trustworthy evidence <span className="font-bold text-[#6F69C9]">inside the ALS-relevant ROI</span>.
            </p>
          </div>

          {/* Highlight 2: Brainstem focus + FA further improve specificity */}
          <div className="p-2 rounded-lg bg-white border border-[#D9DDEE] my-1">
            <div className="flex items-center justify-between mb-1 pb-0.5 border-b border-[#D9DDEE]/70">
              <span className="text-[10px] font-bold text-[#24242A]">
                2. Brainstem focus + FA further improve specificity
              </span>
              <span className="text-[8.5px] font-mono text-[#6F69C9] font-bold">
                T1w only → T1w + FA
              </span>
            </div>

            {/* Compact metric strip */}
            <div className="grid grid-cols-4 gap-1 text-[9px] font-mono mb-1.5">
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                <span className="text-[8px] text-[#74747D] block">Hit@ROI ↑</span>
                <span className="text-[#74747D] text-[8.5px]">0.54 → </span>
                <span className="text-[10px] font-black text-[#6F69C9]">0.68</span>
              </div>
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                <span className="text-[8px] text-[#74747D] block">ROI Conc. ↑</span>
                <span className="text-[#74747D] text-[8.5px]">0.41 → </span>
                <span className="text-[10px] font-black text-[#6F69C9]">0.59</span>
              </div>
              <div className="p-1 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/60 text-center">
                <span className="text-[8px] text-[#6F69C9] font-bold block">Reliable Conc. ↑</span>
                <span className="text-[#74747D] text-[8.5px]">0.46 → </span>
                <span className="text-[10px] font-black text-[#6F69C9]">0.64</span>
              </div>
              <div className="p-1 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                <span className="text-[8px] text-[#74747D] block">FP@Non-ROI ↓</span>
                <span className="text-[#74747D] text-[8.5px]">0.26 → </span>
                <span className="text-[10px] font-black text-[#6F69C9]">0.13</span>
              </div>
            </div>

            <div className="text-[9px] text-[#626A7C] leading-snug space-y-0.5">
              <p>
                Brainstem focusing improves <span className="font-bold text-[#6F69C9]">WHERE</span> the classifier looks; FA improves <span className="font-bold text-[#6F69C9]">WHAT</span> microstructural information is available.
              </p>
              <p className="text-[#74747D]">
                T1w provides structural anatomy; FA adds complementary tissue integrity and white-matter organization cues without claiming direct pathology detection.
              </p>
            </div>
          </div>

          {/* Highlight 3: Subject-level Stability & Scientific Caution */}
          <div className="p-2 rounded-lg bg-white border border-[#D9DDEE] space-y-1">
            <div className="flex items-center justify-between pb-0.5 border-b border-[#D9DDEE]/70">
              <span className="text-[10px] font-bold text-[#24242A]">
                3. The evidence becomes more stable across subjects
              </span>
              <div className="flex items-center gap-1 font-mono text-[9px]">
                <span className="text-[#74747D]">Score IQR: 0.31 →</span>
                <span className="font-black text-[#6F69C9]">0.23</span>
                <span className="text-[8px] text-[#6F69C9] font-bold">(-26%)</span>
              </div>
            </div>

            <p className="text-[9px] text-[#626A7C] leading-snug">
              Reduced subject-level dispersion means less unstable fluctuation across heterogeneous ALS cases, supporting more reproducible interpretation.
            </p>

            {/* Critical Scientific Caution Box */}
            <div className="p-1.5 rounded-md bg-[#FAFAFC] border-l-2 border-l-[#74747D] border border-[#D9DDEE] text-[8.5px] leading-tight text-[#626A7C]">
              <span className="font-bold text-[#24242A] block mb-0.5">CRITICAL SCIENTIFIC CAUTION:</span>
              PULSE has no voxel-wise disease masks. These metrics measure anatomical concentration and stability with respect to <span className="font-bold text-[#24242A]">task-oriented ALS brainstem ROIs</span> — not lesion Dice or exact pathology segmentation.
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition to Slide 20 (~12% height)
      ========================================================================= */}
      <div className="shrink-0 mt-1 p-2 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          In PULSE, reliability calibration and brainstem-focused multimodal input produce evidence that is{' '}
          <span className="text-[#6F69C9] font-black">more concentrated</span>,{' '}
          <span className="text-[#6F69C9] font-black">less off-target</span>, and{' '}
          <span className="text-[#6F69C9] font-black">more stable</span>.
        </p>

        <p className="text-[9.5px] text-[#74747D] text-center mt-0.5">
          This supports anatomical plausibility of reliable ALS-related evidence — not exact ALS disease segmentation.
        </p>

        <div className="mt-1 pt-1 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            So what can weak supervision ultimately tell us — and what can it not tell us?
          </span>
          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px]">
            <span>Next: Direction 1 Synthesis (Slide 20)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
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


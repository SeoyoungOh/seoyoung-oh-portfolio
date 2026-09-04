import React, { useState } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface NormalResultsAlsSlideProps {
  isActive: boolean;
}

export const NormalResultsAlsSlide: React.FC<NormalResultsAlsSlideProps> = () => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const handleOpenLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/normal/thesis-normal-results-als.png',
      alt: 'Healthy-calibrated deviation evidence in PULSE ALS cohort',
      title: 'Healthy-Calibrated Evidence in ALS (PULSE)',
      subtitle: 'Anatomical focusing (brainstem) and multimodal diffusion (FA) improve evidence concentration and reduce off-target noise',
      isLightBg: true,
    });
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~9% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              HEALTHY-ONLY MODELING · ALS CLINICAL TRANSLATION
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Does Healthy-Calibrated Evidence Remain Meaningful in ALS?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              In PULSE, anatomical focusing and multimodal information make reliable deviation evidence more concentrated and less off-target.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">PULSE ALS Cohort · Mask-Free</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN 62 / 38 COMPOSITION (~75% height)
          Left (~62%): Large Complete Scientific Figure
          Right (~38%): Three Concise Scientific Findings
      ========================================================================= */}
      <div className="flex gap-3 flex-1 min-h-0 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            LEFT: Main Scientific Figure (62% width)
        --------------------------------------------------------------------- */}
        <div className="flex-[62] min-w-0 bg-white rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs">
          {/* Top Bar with Progression Note */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 shrink-0">
            <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#24242A] truncate">
              <span className="font-bold text-[#6F69C9]">PROGRESSION:</span>
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE]">Whole-Brain T1w</span>
              <span className="text-[#6F69C9]">→</span>
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE]">Brainstem T1w</span>
              <span className="text-[#6F69C9]">→</span>
              <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE] text-[#6F69C9] font-bold">
                Brainstem T1w + FA
              </span>
            </div>

            <span className="text-[9px] font-mono text-[#74747D] shrink-0 ml-2">
              CLICK FIGURE TO ENLARGE
            </span>
          </div>

          {/* Scientific Image Surface (Pure White #FFFFFF, contain) */}
          <div
            onClick={handleOpenLightbox}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge ALS result figure"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenLightbox();
              }
            }}
            className="flex-1 min-h-0 relative flex items-center justify-center p-1 bg-white overflow-hidden group cursor-zoom-in rounded-lg"
          >
            <img
              src="/images/phd-defense/normal/thesis-normal-results-als.png"
              alt="Healthy-calibrated deviation evidence across whole-brain and brainstem-focused models in ALS"
              className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            />
            <ZoomIndicatorBadge />
          </div>

          {/* Bottom Bar on Figure Container */}
          <div className="pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between shrink-0 text-[10px] text-[#626A7C]">
            <div className="flex items-center gap-1.5 font-mono text-[9.5px]">
              <span className="font-bold text-[#24242A]">EVALUATION TARGET:</span>
              <span>Task-oriented brainstem ROIs (Corticospinal tract & motor nuclei)</span>
            </div>
            <span className="text-[9px] font-mono text-[#74747D]">
              Pure white surface (#FFFFFF)
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            RIGHT: Three Concise Scientific Findings (38% width)
        --------------------------------------------------------------------- */}
        <div className="flex-[38] min-w-0 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          {/* Finding 1: Anatomical Focusing */}
          <div className="pb-2 border-b border-[#D9DDEE]/80">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold text-[#24242A] flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-black text-[#6F69C9]">1</span>
                <span>Anatomical focusing matters</span>
              </h3>
              <span className="text-[8.5px] font-mono text-[#74747D]">Whole-brain → Brainstem</span>
            </div>

            {/* Metric Comparison */}
            <div className="grid grid-cols-3 gap-1.5 font-mono text-[9px] mb-1.5">
              <div className="p-1 rounded bg-white border border-[#D9DDEE] text-center">
                <span className="text-[#74747D] block text-[8px]">ROI conc. ↑</span>
                <span className="text-[#74747D]">0.53</span> → <strong className="text-[#6F69C9]">0.62</strong>
              </div>
              <div className="p-1 rounded bg-white border border-[#D9DDEE] text-center">
                <span className="text-[#74747D] block text-[8px]">Rel. ROI ↑</span>
                <span className="text-[#74747D]">0.47</span> → <strong className="text-[#6F69C9]">0.57</strong>
              </div>
              <div className="p-1 rounded bg-white border border-[#D9DDEE] text-center">
                <span className="text-[#74747D] block text-[8px]">FP@Non-ROI ↓</span>
                <span className="text-[#74747D]">0.22</span> → <strong className="text-[#6F69C9]">0.18</strong>
              </div>
            </div>

            <p className="text-[10px] text-[#626A7C] leading-snug">
              Restricting the analysis to the brainstem increases the fraction of evidence falling inside the target ROI while reducing off-target activation.
            </p>
            <p className="text-[9.5px] font-mono text-[#24242A] mt-0.5">
              → Brainstem focusing mainly improves <strong className="text-[#6F69C9]">WHERE</strong> the model searches for abnormal deviation.
            </p>
          </div>

          {/* Finding 2: FA Multimodal Complementarity */}
          <div className="py-2 border-b border-[#D9DDEE]/80">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold text-[#24242A] flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-black text-[#6F69C9]">2</span>
                <span>FA adds complementary information</span>
              </h3>
              <span className="text-[8.5px] font-mono text-[#74747D]">T1w → T1w + FA</span>
            </div>

            {/* Metric Comparison */}
            <div className="grid grid-cols-3 gap-1.5 font-mono text-[9px] mb-1.5">
              <div className="p-1 rounded bg-white border border-[#D9DDEE] text-center">
                <span className="text-[#74747D] block text-[8px]">ROI conc. ↑</span>
                <span className="text-[#74747D]">0.62</span> → <strong className="text-[#6F69C9]">0.65</strong>
              </div>
              <div className="p-1 rounded bg-white border border-[#D9DDEE] text-center">
                <span className="text-[#74747D] block text-[8px]">Rel. ROI ↑</span>
                <span className="text-[#74747D]">0.57</span> → <strong className="text-[#6F69C9]">0.60</strong>
              </div>
              <div className="p-1 rounded bg-white border border-[#D9DDEE] text-center">
                <span className="text-[#74747D] block text-[8px]">FP@Non-ROI ↓</span>
                <span className="text-[#74747D]">0.18</span> → <strong className="text-[#6F69C9]">0.16</strong>
              </div>
            </div>

            <p className="text-[10px] text-[#626A7C] leading-snug">
              FA provides complementary microstructural cues beyond T1w anatomy, further concentrating retained evidence and suppressing off-target signal.
            </p>
            <p className="text-[9.5px] font-mono text-[#24242A] mt-0.5">
              → Brainstem focusing improves <strong className="text-[#6F69C9]">WHERE</strong>; FA enriches <strong className="text-[#6F69C9]">WHAT</strong> is available.
            </p>
          </div>

          {/* Finding 3: Anatomically Selective Reliable Evidence */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold text-[#24242A] flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-black text-[#6F69C9]">3</span>
                <span>The reliable evidence is anatomically selective</span>
              </h3>
              <span className="text-[8.5px] font-mono text-[#6F69C9] font-bold">Best: T1w+FA</span>
            </div>

            <div className="p-1.5 rounded-lg bg-white border border-[#D9D8F4] mb-1.5 text-[10px] space-y-0.5 font-mono">
              <div className="flex justify-between items-center text-[#24242A]">
                <span>ROI conc. vs. FP@Non-ROI:</span>
                <span>
                  <strong className="text-[#6F69C9]">0.65</strong> vs. <strong className="text-[#24242A]">0.16</strong>
                </span>
              </div>
              <div className="flex justify-between items-center text-[#626A7C] text-[9.5px]">
                <span>Reliable ROI concentration:</span>
                <strong className="text-[#6F69C9]">0.60 (low-uncertainty core)</strong>
              </div>
            </div>

            <p className="text-[10px] text-[#24242A] leading-snug">
              The retained evidence becomes <strong className="text-[#6F69C9]">MORE ANATOMICALLY CONCENTRATED</strong>, <strong className="text-[#6F69C9]">LESS OFF-TARGET</strong>, and <strong className="text-[#6F69C9]">MORE RELIABLE</strong>.
            </p>

            <p className="text-[9.5px] text-[#74747D] italic mt-1 leading-tight">
              ALS counterpart to Slide 25: false-positive control preserves evidence that is more anatomically plausible.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Caution & Main Takeaway & Transition (~16% height)
      ========================================================================= */}
      <div className="shrink-0 space-y-1 mt-1">
        {/* Scientific Caution Banner */}
        <div className="px-2.5 py-1 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center justify-between text-[10px] text-[#626A7C]">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3 h-3 text-[#74747D] shrink-0" />
            <span>
              <strong className="text-[#24242A]">Scientific Caution:</strong> PULSE provides no voxel-wise ALS disease masks. These results measure anatomical concentration, off-target suppression, and reliability with respect to task-oriented brainstem ROIs — not lesion ground truth.
            </span>
          </div>
          <span className="font-mono text-[9px] text-[#74747D] shrink-0 ml-2">
            Healthy-reference evidence
          </span>
        </div>

        {/* Main Takeaway & Transition to Slide 27 */}
        <div className="p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
          <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
            In ALS, healthy-calibrated normal projection produces evidence that becomes{' '}
            <span className="text-[#6F69C9] font-black">more anatomically concentrated</span> and{' '}
            <span className="text-[#6F69C9] font-black">less off-target</span> when the analysis is focused on the brainstem and enriched with FA.
          </p>

          <div className="mt-1.5 pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
            <span className="text-[#74747D] italic">
              What does this tell us about the value — and the limits — of healthy-only modeling?
            </span>

            <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px] shrink-0">
              <span>Next: Synthesis & Methodological Limits (Slide 27)</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>

      {/* In-Presentation Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxData !== null}
        onClose={() => setLightboxData(null)}
        data={lightboxData}
      />
    </div>
  );
};

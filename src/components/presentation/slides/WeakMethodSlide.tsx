import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface WeakMethodSlideProps {
  isActive: boolean;
}

interface MethodStage {
  num: string;
  heading: string;
  text: string;
}

const METHOD_STAGES: MethodStage[] = [
  {
    num: '01',
    heading: 'Diagnostic labels only',
    text: 'Train the classifier using image-level labels without voxel-wise disease masks.',
  },
  {
    num: '02',
    heading: 'Multiple spatial cues',
    text: 'Extract complementary evidence from different transformer representations.',
  },
  {
    num: '03',
    heading: 'Reliability calibration',
    text: 'Estimate which cues are trustworthy using agreement, stability, and decision faithfulness.',
  },
  {
    num: '04',
    heading: 'Final evidence + uncertainty',
    text: 'Fuse reliable cues into a disease-discriminative evidence map and an uncertainty map.',
  },
];

export const WeakMethodSlide: React.FC<WeakMethodSlideProps> = () => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const handleOpenLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/weak/thesis-weak-model-main.png',
      alt: 'Method overview from the weakly supervised localization study',
      title: 'Reliable Weakly Supervised Disease Localization',
      subtitle: 'Multi-cue spatial extraction and reliability calibration framework (Oh et al., ISBI 2026)',
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
              WEAK SUPERVISION
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Reliable Weakly Supervised Disease Localization
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              From diagnostic labels to reliability-aware spatial evidence.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Oh et al., ISBI 2026</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN LAYOUT (~78% height)
          Left (~70%): Large Scientific Method Figure on Pure White Surface
          Right (~30%): Four Concise Method Stages (Supporting Structure)
      ========================================================================= */}
      <div className="flex gap-3 flex-1 min-h-0 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            MAIN VISUAL ANCHOR: Scientific Method Figure (70% width)
        --------------------------------------------------------------------- */}
        <div className="flex-[7] min-w-0 bg-white rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs">
          {/* Top image bar */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 shrink-0">
            <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
              METHOD ARCHITECTURE
            </span>
            <span className="text-[9px] font-mono text-[#74747D]">
              CLICK IMAGE TO ENLARGE
            </span>
          </div>

          {/* Scientific Image Container (Pure white surface #FFFFFF, contained, clear) */}
          <div
            onClick={handleOpenLightbox}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge scientific figure"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenLightbox();
              }
            }}
            className="flex-1 min-h-0 relative flex items-center justify-center p-1.5 bg-white overflow-hidden group cursor-zoom-in rounded-lg"
          >
            <img
              src="/images/phd-defense/weak/thesis-weak-model-main.png"
              alt="Method overview from the weakly supervised localization study"
              className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            />
            <ZoomIndicatorBadge />
          </div>

          {/* Figure Caption and Reference in container footer */}
          <div className="pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between shrink-0 text-[10px]">
            <span className="text-[#626A7C] font-medium">
              Multi-cue extraction, reliability calibration, and spatial evidence generation.
            </span>
            <span className="font-mono text-[9.5px] text-[#74747D]">
              Oh et al., ISBI 2026
            </span>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            SUPPORTING WORKFLOW: Four Concise Method Stages (30% width)
        --------------------------------------------------------------------- */}
        <div className="flex-[3] min-w-0 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          <div className="pb-1.5 border-b border-[#D9DDEE] shrink-0">
            <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider block">
              METHOD WORKFLOW
            </span>
            <span className="text-[9.5px] text-[#74747D]">
              Core four-stage progression
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between py-2 space-y-2">
            {METHOD_STAGES.map((stage, idx) => (
              <div key={stage.num} className="flex items-start gap-2.5">
                <span className="text-xs font-mono font-black text-[#6F69C9] mt-0.5 shrink-0">
                  {stage.num}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-[#24242A] leading-snug">
                    {stage.heading}
                  </h3>
                  <p className="text-[10.5px] text-[#626A7C] leading-relaxed mt-0.5">
                    {stage.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#D9DDEE] shrink-0">
            <div className="px-2 py-1 rounded-lg bg-white border border-[#D9DDEE] text-[9.5px] font-mono text-[#626A7C] flex items-center justify-between">
              <span>Supervision:</span>
              <span className="font-bold text-[#6F69C9]">Diagnostic labels only</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition (~12% height)
      ========================================================================= */}
      <div className="shrink-0 mt-1 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          The key contribution is not simply generating a heatmap — it is estimating{' '}
          <span className="text-[#6F69C9] font-black">which spatial evidence should be trusted</span>.
        </p>

        <div className="mt-1 pt-1 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            But does this reliability step actually improve localization?
          </span>
          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px]">
            <span>Next: What Makes This Different? (Slide 17)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
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



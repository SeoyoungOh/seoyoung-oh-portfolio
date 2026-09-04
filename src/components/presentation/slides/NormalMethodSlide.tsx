import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface NormalMethodSlideProps {
  isActive: boolean;
}

interface MethodStage {
  num: string;
  heading: string;
  text: string;
  emphasis: string;
  emphasisTone?: 'mint' | 'lavender' | 'neutral';
}

const METHOD_STAGES: MethodStage[] = [
  {
    num: '01',
    heading: 'Healthy reference learning',
    text: 'Train only on healthy MRI to model the distribution of normal anatomical appearance.',
    emphasis: 'No patient labels',
    emphasisTone: 'mint',
  },
  {
    num: '02',
    heading: 'Project toward healthy anatomy',
    text: 'For an unseen subject, generate a healthy-like projection that preserves normal structure while suppressing abnormal deviation.',
    emphasis: 'Healthy-like projection',
    emphasisTone: 'neutral',
  },
  {
    num: '03',
    heading: 'Measure what remains unexplained',
    text: 'Compare the observed image with its healthy-like projection to obtain multi-scale deviation evidence.',
    emphasis: 'Observed − healthy-like projection',
    emphasisTone: 'lavender',
  },
  {
    num: '04',
    heading: 'Keep only reliable deviation',
    text: 'Projection variability and healthy-reference calibration are used to suppress uncertain or false-positive evidence.',
    emphasis: 'Controlled healthy false-positive risk',
    emphasisTone: 'lavender',
  },
];

export const NormalMethodSlide: React.FC<NormalMethodSlideProps> = () => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const handleOpenLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/normal/thesis-normal-model-main.png',
      alt: 'Reliable normal projection from healthy MRI',
      title: 'Reliable Normal Projection from Healthy MRI',
      subtitle: 'Healthy-reference learning, normal projection student-teacher distillation, and calibrated deviation evidence',
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
              HEALTHY-ONLY MODELING · METHOD ARCHITECTURE
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Reliable Normal Projection from Healthy MRI
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Learn a healthy reference, project unseen brains toward normal anatomy, and quantify what remains unexplained.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Direction 2 Framework</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN LAYOUT (~78% height)
          Left (~69%): Scientific Method Figure prominently displayed on Pure White
          Right (~31%): Four Concise Method Stages
      ========================================================================= */}
      <div className="flex gap-3 flex-1 min-h-0 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            MAIN VISUAL ANCHOR: Scientific Figure (69% width)
        --------------------------------------------------------------------- */}
        <div className="flex-[69] min-w-0 bg-white rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs">
          {/* Top image bar with top-level method flow & zoom hint */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 shrink-0">
            <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#24242A] truncate">
              <span className="font-bold text-[#6F69C9]">FLOW:</span>
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE]">Healthy MRI</span>
              <span className="text-[#6F69C9]">→</span>
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE]">Healthy reference</span>
              <span className="text-[#6F69C9]">→</span>
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE]">Normal projection</span>
              <span className="text-[#6F69C9]">→</span>
              <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE]">Residual evidence</span>
              <span className="text-[#6F69C9]">→</span>
              <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE] text-[#6F69C9] font-bold">Reliable deviation map</span>
            </div>

            <span className="text-[9px] font-mono text-[#74747D] shrink-0 ml-2">
              CLICK FIGURE TO ENLARGE
            </span>
          </div>

          {/* Scientific Image Container (Pure white #FFFFFF, contained, clear) */}
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
            className="flex-1 min-h-0 relative flex items-center justify-center p-1 bg-white overflow-hidden group cursor-zoom-in rounded-lg"
          >
            <img
              src="/images/phd-defense/normal/thesis-normal-model-main.png"
              alt="Reliable normal projection from healthy MRI method overview"
              className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            />
            <ZoomIndicatorBadge />
          </div>

          {/* Footer of Figure Container: Conceptual Question & Scientific Caution */}
          <div className="pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between shrink-0 text-[10px] gap-2">
            <div className="text-[#626A7C] truncate">
              <span>The method asks not “What supports the diagnosis?” but </span>
              <strong className="text-[#6F69C9] font-bold">
                “What cannot be explained by healthy anatomy?”
              </strong>
            </div>

            <div className="shrink-0 text-[9.5px] font-mono text-[#74747D] flex items-center gap-1 bg-[#FAFAFC] px-2 py-0.5 rounded border border-[#D9DDEE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#74747D]" />
              <span>Caution: Deviation from normal is evidence of abnormality, not direct proof of pathology.</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            SUPPORTING WORKFLOW: Four Concise Method Stages (31% width)
        --------------------------------------------------------------------- */}
        <div className="flex-[31] min-w-0 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          <div className="pb-1.5 border-b border-[#D9DDEE] shrink-0 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider block">
              METHOD STAGES
            </span>
            <span className="text-[9px] font-mono text-[#74747D]">
              4-STEP PIPELINE
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between py-1.5 space-y-2">
            {METHOD_STAGES.map((stage) => (
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
                  <div className="mt-1">
                    {stage.emphasisTone === 'mint' ? (
                      <span className="inline-block px-1.5 py-0.2 rounded bg-[#E3F0E6] border border-[#C3E0C9] text-[9.5px] font-mono text-[#24242A] font-bold">
                        {stage.emphasis}
                      </span>
                    ) : stage.emphasisTone === 'lavender' ? (
                      <span className="inline-block px-1.5 py-0.2 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/70 text-[9.5px] font-mono text-[#6F69C9] font-bold">
                        {stage.emphasis}
                      </span>
                    ) : (
                      <span className="inline-block px-1.5 py-0.2 rounded bg-white border border-[#D9DDEE] text-[9.5px] font-mono text-[#74747D]">
                        {stage.emphasis}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#D9DDEE] shrink-0">
            <div className="px-2 py-1 rounded-lg bg-white border border-[#D9DDEE] text-[9.5px] font-mono text-[#626A7C] flex items-center justify-between">
              <span>Supervision model:</span>
              <span className="font-bold text-[#6F69C9]">Healthy reference only</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition to Slide 24 (~12% height)
      ========================================================================= */}
      <div className="shrink-0 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          The key idea is to learn normality from healthy subjects and turn unexplained deviation into{' '}
          <span className="text-[#6F69C9] font-black">reliability-controlled spatial evidence</span>.
        </p>

        <div className="mt-1.5 pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            What makes this different from conventional reconstruction-based anomaly detection?
          </span>

          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px] shrink-0">
            <span>Next: Beyond Reconstruction Error (Slide 24)</span>
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

import React, { useState } from 'react';
import { AlertCircle, EyeOff, Compass, Users, Activity } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface SynthesisAlsSlideProps {
  isActive: boolean;
}

export const SynthesisAlsSlide: React.FC<SynthesisAlsSlideProps> = () => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const handleOpenLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/synthesis/thesis-als-respiratory-frequency.png',
      alt: 'Frequency-based spatial evidence patterns in ALS patients with vs. without respiratory dysfunction',
      title: 'ALS Subgroup Spatial Evidence: Respiratory Dysfunction',
      subtitle: 'Top row: patients with respiratory dysfunction · Bottom row: patients without respiratory dysfunction · Right panel: schematic anatomical correspondence',
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
              ALS INTERPRETATION · SUBGROUP SPATIAL PATTERNS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              What Did We Learn in ALS?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Even when the signal is not directly visible by eye and does not define an exact anatomical boundary, symptom groups showed different spatial evidence patterns.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">ALS subgroup interpretation</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN TWO-COLUMN COMPOSITION (~89% height)
          Left: Short Interpretive Content & Takeaway (~43%)
          Right: Respiratory Dysfunction Frequency Comparison Figure (~57%)
      ========================================================================= */}
      <div className="flex gap-3 flex-1 min-h-0 my-1 items-stretch">
        {/* ---------------------------------------------------------------------
            LEFT COLUMN: Interpretive Points & Takeaway (~43% width)
        --------------------------------------------------------------------- */}
        <div className="flex-[43] min-w-0 flex flex-col justify-between space-y-1.5">
          {/* Lead statement */}
          <div className="px-3 py-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] shrink-0">
            <p className="text-xs font-bold text-[#24242A]">
              ALS-related evidence became more interpretable when examined by symptom subgroup.
            </p>
          </div>

          {/* 4 Concise Interpretation Cards */}
          <div className="flex-1 flex flex-col justify-between space-y-1.5 min-h-0">
            {/* Point 1: Subtle on MRI */}
            <div className="p-2.5 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <EyeOff className="w-3.5 h-3.5 text-[#74747D] shrink-0" />
                <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase">
                  SUBTLE ON MRI
                </span>
              </div>
              <h3 className="text-xs font-bold text-[#24242A] leading-snug">
                Not directly visible by eye
              </h3>
              <p className="text-[10.5px] text-[#626A7C] leading-relaxed mt-0.5">
                On routine in-vivo MRI, these brainstem changes are too subtle to be identified reliably by simple visual inspection.
              </p>
            </div>

            {/* Point 2: Not a Precise Boundary */}
            <div className="p-2.5 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Compass className="w-3.5 h-3.5 text-[#6F69C9] shrink-0" />
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                  NOT A PRECISE BOUNDARY
                </span>
              </div>
              <h3 className="text-xs font-bold text-[#24242A] leading-snug">
                Evidence is spatial, not a manual lesion contour
              </h3>
              <p className="text-[10.5px] text-[#626A7C] leading-relaxed mt-0.5">
                The detected regions should be interpreted as spatial evidence concentration, not as an exact anatomical border or voxel-wise pathology mask.
              </p>
            </div>

            {/* Point 3: Symptom-Specific Patterns */}
            <div className="p-2.5 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Activity className="w-3.5 h-3.5 text-[#6F69C9] shrink-0" />
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                  SYMPTOM-SPECIFIC PATTERNS
                </span>
              </div>
              <h3 className="text-xs font-bold text-[#24242A] leading-snug">
                Different symptom groups showed different distributions
              </h3>
              <p className="text-[10.5px] text-[#626A7C] leading-relaxed mt-0.5">
                Patients with respiratory dysfunction and those without it exhibited distinct evidence patterns, suggesting symptom-relevant spatial organization.
              </p>
            </div>

            {/* Point 4: Frequency Map */}
            <div className="p-2.5 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Users className="w-3.5 h-3.5 text-[#74747D] shrink-0" />
                <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase">
                  FREQUENCY MAP
                </span>
              </div>
              <h3 className="text-xs font-bold text-[#24242A] leading-snug">
                The figure shows recurrence across patients
              </h3>
              <p className="text-[10.5px] text-[#626A7C] leading-relaxed mt-0.5">
                The displayed maps summarize how frequently evidence appeared across subjects, highlighting recurring group-level patterns rather than a single-subject effect.
              </p>
            </div>
          </div>

          {/* Bottom Takeaway */}
          <div className="p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs shrink-0">
            <p className="text-xs text-[#24242A] leading-snug">
              Although the signal is <strong className="text-[#6F69C9]">subtle</strong> and{' '}
              <strong className="text-[#6F69C9]">not anatomically exact</strong>, it was still possible to observe{' '}
              <strong className="text-[#6F69C9]">symptom-dependent pattern differences</strong> in ALS.
            </p>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            RIGHT COLUMN: Main Scientific Figure (~57% width)
        --------------------------------------------------------------------- */}
        <div className="flex-[57] min-w-0 bg-white rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
          {/* Top Bar of Figure Container */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                GROUP-LEVEL RECURRENCE MAP
              </span>
              <span className="text-[9.5px] text-[#626A7C]">
                Respiratory dysfunction vs. non-respiratory
              </span>
            </div>

            <span className="text-[9px] font-mono text-[#74747D] shrink-0">
              CLICK FIGURE TO ENLARGE
            </span>
          </div>

          {/* Scientific Image Display Area (Pure White Surface) */}
          <div
            onClick={handleOpenLightbox}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge respiratory dysfunction frequency comparison figure"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenLightbox();
              }
            }}
            className="flex-1 min-h-0 relative flex items-center justify-center p-1.5 bg-white overflow-hidden group cursor-zoom-in rounded-lg"
          >
            <img
              src="/images/phd-defense/synthesis/thesis-als-respiratory-frequency.png"
              alt="Frequency-based spatial evidence patterns in ALS patients with vs without respiratory dysfunction"
              className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            />
            <ZoomIndicatorBadge />
          </div>

          {/* Captions and Caution Callout */}
          <div className="pt-2 border-t border-[#D9DDEE]/80 shrink-0 space-y-1.5">
            {/* Primary & Secondary Caption */}
            <div className="space-y-0.5">
              <p className="text-[10.5px] font-bold text-[#24242A] leading-snug">
                Frequency-based spatial evidence patterns in ALS patients with vs. without respiratory dysfunction.
              </p>
              <p className="text-[9.5px] text-[#626A7C] leading-snug">
                Top row: patients with respiratory dysfunction. Bottom row: patients without respiratory dysfunction. Right panel: schematic anatomical correspondence.
              </p>
            </div>

            {/* Subtle Caution Callout */}
            <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] flex items-center gap-1.5 text-[9.5px] text-[#74747D]">
              <AlertCircle className="w-3.5 h-3.5 text-[#74747D] shrink-0" />
              <span>
                <strong className="text-[#24242A]">Interpretation should remain cautious:</strong> group-level spatial evidence ≠ direct pathological ground truth.
              </span>
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

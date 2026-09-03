import React from 'react';

interface IntroAnnotationGapSlideProps {
  isActive: boolean;
}

export const IntroAnnotationGapSlide: React.FC<IntroAnnotationGapSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          INTRODUCTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Clinically Important Structures, but No Reliable Annotations
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          While fine neuroanatomical targets hold high diagnostic relevance in ALS, their lack of clear contrast boundaries creates an extreme voxel-level annotation bottleneck.
        </p>
      </div>

      {/* Main Area: Reserve most of the slide for future interactive anatomy + MRI visualization */}
      <div className="my-auto py-2 flex-1 flex flex-col justify-center min-h-[180px]">
        <div className="w-full h-full min-h-[160px] rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#A0A1F8]/15 text-[#9091DF] flex items-center justify-center mb-3 text-xs font-bold font-mono">
            MRI + ATLAS
          </div>
          <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1.5">
            Reserved Space: Interactive Anatomy & MRI Cross-Reference
          </h3>
          <p className="text-xs text-[#626A7C] max-w-md leading-relaxed mb-3">
            Space reserved for a dual-panel interactive module demonstrating the discordance between underlying anatomical nuclei and their indistinct appearance on routine clinical MRI.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-[#626A7C]">
            <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#D9DDEE] font-medium">
              Fine Anatomical Target
            </span>
            <span>vs.</span>
            <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#D9DDEE] font-medium">
              Unsegmented Clinical Image
            </span>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>The Annotation Bottleneck</span>
        <span className="font-semibold text-[#9091DF]">Supervision Dilemma</span>
      </div>
    </div>
  );
};

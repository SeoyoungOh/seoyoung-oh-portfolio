import React from 'react';

interface IntroBrainstemSlideProps {
  isActive: boolean;
}

export const IntroBrainstemSlide: React.FC<IntroBrainstemSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          INTRODUCTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Why Focus on the Brainstem?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          The brainstem serves as the primary conduit and regulatory center for vital vegetative and motor functions affected in ALS.
        </p>
      </div>

      {/* Content: Left explanation, Right reserved anatomical visual */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left column: Key clinical linkages */}
        <div className="lg:col-span-6 flex flex-col justify-center gap-3">
          <div className="p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]">
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
              Bulbar Function & Motor Nuclei
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Contains cranial nerve nuclei governing speech, deglutition, and facial motor control. Degeneration here directly correlates with bulbar symptoms.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]">
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
              Respiratory Pattern Generation
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Houses medullary and pontine respiratory rhythm-generating circuits whose progressive impairment precipitates hypoventilation and ventilatory failure.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]">
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
              Corticospinal & Corticobulbar Tracts
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Dense white matter pathways traverse the cerebral peduncles, pons, and medullary pyramids before descending into the spinal cord.
            </p>
          </div>
        </div>

        {/* Right column: Reserved space for future anatomical visual */}
        <div className="lg:col-span-6 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-10 h-10 rounded-xl bg-[#A0A1F8]/15 text-[#9091DF] flex items-center justify-center mb-3 font-mono text-xs font-bold">
            3D
          </div>
          <p className="text-xs font-bold text-[#20243C] mb-1">
            Reserved Space: Anatomical Visual
          </p>
          <p className="text-[11px] text-[#626A7C] max-w-xs leading-relaxed">
            Placeholder reserved for anatomical illustration of the midbrain, pons, and medulla oblongata detailing cranial nerve nuclei and descending pathways.
          </p>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Neuroanatomy & Clinical Functions</span>
        <span className="font-semibold text-[#9091DF]">Brainstem Relevance in ALS</span>
      </div>
    </div>
  );
};

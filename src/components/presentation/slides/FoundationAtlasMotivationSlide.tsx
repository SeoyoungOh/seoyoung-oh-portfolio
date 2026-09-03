import React from 'react';

interface FoundationAtlasMotivationSlideProps {
  isActive: boolean;
}

export const FoundationAtlasMotivationSlide: React.FC<FoundationAtlasMotivationSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          FOUNDATIONS
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          We Still Needed an Anatomical Reference
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Bridging the gap between unsupervised model outputs and clinical neuroanatomy.
        </p>
      </div>

      {/* Main Focus: Central question and supporting points */}
      <div className="my-auto py-2 max-w-3xl mx-auto w-full">
        {/* Core Question Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFF] border-2 border-[#9091DF]/40 shadow-xs mb-4 text-center">
          <p className="text-[11px] font-bold text-[#626A7C] uppercase tracking-wider mb-2">
            The Model outputs could not be validated as exact disease segmentation, but:
          </p>
          <blockquote className="text-base sm:text-xl md:text-2xl font-black text-[#20243C] leading-snug tracking-tight">
            “Does the detected evidence concentrate in clinically meaningful regions?”
          </blockquote>
        </div>

        {/* 3 Supporting Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]">
            <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
              POINT 01
            </span>
            <h3 className="text-xs font-bold text-[#20243C] mb-1">
              Direct Fine-Grained Annotation Was Not Feasible
            </h3>
            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              Manual delineation of internal brainstem nuclei on clinical in-vivo scans remains intractable.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]">
            <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
              POINT 02
            </span>
            <h3 className="text-xs font-bold text-[#20243C] mb-1">
              Voxel-Wise Disease Masks Were Unavailable
            </h3>
            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              No ground truth existed that precisely isolated pathological changes at voxel resolution.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE]">
            <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
              POINT 03
            </span>
            <h3 className="text-xs font-bold text-[#20243C] mb-1">
              Anatomical Interpretation Was Still Necessary
            </h3>
            <p className="text-[11px] text-[#626A7C] leading-relaxed">
              A spatial reference was essential to quantitatively aggregate and validate model attributions.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Anatomical Grounding</span>
        <span className="font-semibold text-[#9091DF]">The Role of a Reference Atlas</span>
      </div>
    </div>
  );
};

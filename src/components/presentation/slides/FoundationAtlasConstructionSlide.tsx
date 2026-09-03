import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

interface FoundationAtlasConstructionSlideProps {
  isActive: boolean;
}

export const FoundationAtlasConstructionSlide: React.FC<FoundationAtlasConstructionSlideProps> = () => {
  const steps = [
    { label: 'Neuroanatomy Diagrams', sub: 'PDF references' },
    { label: 'Image Extraction', sub: 'Vector slices' },
    { label: 'Region Identification', sub: 'Nuclei labeling' },
    { label: 'Spatial Reconstruction', sub: '3D alignment' },
    { label: 'MNI Atlas', sub: 'Standard space' },
    { label: 'Task-Oriented ROIs', sub: 'Clinical masks' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          FOUNDATIONS
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          From Neuroanatomy Diagrams to a Programmable Atlas
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Reconstructing digitized 2D plates into a calibrated 3D anatomical reference in standard space.
        </p>
      </div>

      {/* Process Flow */}
      <div className="my-1">
        <div className="grid grid-cols-6 gap-1.5 items-center">
          {steps.map((st, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex-1 p-2 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] text-center">
                <span className="text-[9px] font-mono font-bold text-[#9091DF] block">
                  0{idx + 1}
                </span>
                <span className="text-[11px] font-bold text-[#20243C] block leading-tight truncate">
                  {st.label}
                </span>
                <span className="text-[9px] text-[#626A7C] block truncate">
                  {st.sub}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="w-3 h-3 text-[#9091DF] shrink-0 mx-0.5 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Large Central Visual Area for Real Atlas-Construction Figure */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-center min-h-[130px]">
        <div className="w-full h-full min-h-[120px] rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center p-4 text-center">
          <div className="w-9 h-9 rounded-xl bg-[#A0A1F8]/15 text-[#9091DF] flex items-center justify-center mb-1.5 text-xs font-mono font-bold">
            ATLAS
          </div>
          <p className="text-xs font-bold text-[#20243C] mb-0.5">
            ATLAS-CONSTRUCTION PIPELINE FIGURE PLACEHOLDER
          </p>
          <p className="text-[11px] text-[#626A7C] max-w-md leading-relaxed">
            Reserved visual area for the diagram showing digitizing plate contours, landmark registration, interpolation, and validation of 3D brainstem ROIs.
          </p>
        </div>
      </div>

      {/* Visually Emphasized Distinction Note */}
      <div className="p-2.5 rounded-xl bg-[#A0A1F8]/10 border border-[#9091DF]/30 flex items-center gap-2">
        <Info className="w-4 h-4 text-[#9091DF] shrink-0" />
        <p className="text-xs font-bold text-[#20243C]">
          Key Distinction: <span className="font-normal text-[#626A7C]">Used for anatomical interpretation, <strong className="text-[#20243C]">not as voxel-wise disease ground truth</strong>.</span>
        </p>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Anatomical Reference Construction</span>
        <span className="font-semibold text-[#9091DF]">Atlas Workflow</span>
      </div>
    </div>
  );
};

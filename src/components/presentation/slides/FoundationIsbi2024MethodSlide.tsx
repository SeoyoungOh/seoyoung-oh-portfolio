import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FoundationIsbi2024MethodSlideProps {
  isActive: boolean;
}

export const FoundationIsbi2024MethodSlide: React.FC<FoundationIsbi2024MethodSlideProps> = () => {
  const steps = [
    { label: 'Existing Atlases', desc: 'Pre-existing coarse & subregion templates' },
    { label: 'MNI-Space Registration', desc: 'Spatial alignment and normalization' },
    { label: 'Combined Atlas', desc: 'Unified multi-label consensus scaffold' },
    { label: 'Segmentation Models', desc: '3D CNN architectures benchmarked' },
    { label: 'Loss-Function Comparison', desc: 'Evaluation of boundary & overlap losses' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          FOUNDATIONS
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Building an Initial Brainstem Segmentation Framework
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Supervised segmentation pipeline established in the initial ISBI 2024 study.
        </p>
      </div>

      {/* Process Flow Bar */}
      <div className="my-1">
        <div className="grid grid-cols-5 gap-2 items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex-1 p-2.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] text-center">
                <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-0.5">
                  0{idx + 1}
                </span>
                <span className="text-xs font-bold text-[#20243C] block leading-tight">
                  {step.label}
                </span>
                <span className="text-[10px] text-[#626A7C] block leading-tight mt-0.5 hidden md:block">
                  {step.desc}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-[#9091DF] shrink-0 mx-1 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Central Reserved Area for Future Method Figure */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-center min-h-[140px]">
        <div className="w-full h-full min-h-[130px] rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center p-5 text-center">
          <div className="w-9 h-9 rounded-xl bg-[#A0A1F8]/15 text-[#9091DF] flex items-center justify-center mb-2 text-xs font-mono font-bold">
            FIGURE
          </div>
          <p className="text-xs font-bold text-[#20243C] mb-1">
            METHOD FIGURE PLACEHOLDER
          </p>
          <p className="text-[11px] text-[#626A7C] max-w-md leading-relaxed">
            Reserved area for the full ISBI 2024 methodological pipeline diagram illustrating template fusion, network training, and loss evaluation.
          </p>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Preliminary Framework</span>
        <span className="font-semibold text-[#9091DF]">ISBI 2024 Methodology</span>
      </div>
    </div>
  );
};

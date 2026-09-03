import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface WeakMotivationSlideProps {
  isActive: boolean;
}

export const WeakMotivationSlide: React.FC<WeakMotivationSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 1 · WEAK SUPERVISION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Can Diagnostic Labels Reveal Where the Model Sees Disease?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Leveraging reliable global clinical labels when voxel-wise disease annotations are unavailable.
        </p>
      </div>

      {/* Narrative & Visual Layout */}
      <div className="my-auto py-2 flex flex-col gap-3">
        {/* Core Premise Bar */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span className="text-[#626A7C]">
            We do not have voxel-wise disease annotations, but we do have reliable image-level information:
          </span>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 rounded-lg bg-[#20243C] text-[#FFFFFF] font-bold text-[11px]">
              PATIENT
            </span>
            <span className="text-[#626A7C] font-semibold text-xs">vs</span>
            <span className="px-2.5 py-1 rounded-lg bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] font-bold text-[11px]">
              HEALTHY CONTROL
            </span>
          </div>
        </div>

        {/* 3-Step Visual Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
          {/* Left: Input MRI */}
          <div className="sm:col-span-3 p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-[#A0A1F8]/15 text-[#9091DF] flex items-center justify-center mb-2 font-mono text-xs font-bold">
              MRI
            </div>
            <h3 className="text-xs font-bold text-[#20243C] mb-1">
              Brain MRI Scan
            </h3>
            <p className="text-[11px] text-[#626A7C] leading-snug">
              Unannotated volumetric brain / brainstem image
            </p>
          </div>

          <div className="sm:col-span-1 flex justify-center text-[#9091DF]">
            <ArrowRight className="w-4 h-4 hidden sm:block" />
          </div>

          {/* Center: Classifier */}
          <div className="sm:col-span-3 p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-[#20243C] text-[#FFFFFF] flex items-center justify-center mb-2 font-mono text-xs font-bold">
              f(x)
            </div>
            <h3 className="text-xs font-bold text-[#20243C] mb-1">
              Global Classifier
            </h3>
            <p className="text-[11px] text-[#626A7C] leading-snug">
              Learns to distinguish patient vs. healthy control
            </p>
          </div>

          <div className="sm:col-span-1 flex justify-center text-[#9091DF]">
            <ArrowRight className="w-4 h-4 hidden sm:block" />
          </div>

          {/* Right: Spatial Evidence Map with Question Mark */}
          <div className="sm:col-span-3 p-4 rounded-xl bg-[#FBFBFF] border-2 border-[#9091DF]/50 shadow-2xs flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#A0A1F8]/20 text-[#9091DF] flex items-center justify-center mb-2">
              <HelpCircle className="w-6 h-6 text-[#9091DF]" />
            </div>
            <h3 className="text-xs font-bold text-[#20243C] mb-1">
              Spatial Evidence Map
            </h3>
            <p className="text-[11px] text-[#626A7C] leading-snug">
              Which regions contributed to this diagnostic decision?
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway */}
      <div className="p-3 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] text-center">
        <p className="text-xs font-bold text-[#20243C]">
          From <span className="text-[#626A7C]">“Can we classify the patient?”</span> to <span className="text-[#9091DF]">“Where does the evidence for that decision come from?”</span>
        </p>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Weak Supervision Intuition</span>
        <span className="font-semibold text-[#9091DF]">Global Label to Spatial Attribution</span>
      </div>
    </div>
  );
};

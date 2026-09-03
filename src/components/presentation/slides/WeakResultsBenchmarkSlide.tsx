import React, { useState } from 'react';

interface WeakResultsBenchmarkSlideProps {
  isActive: boolean;
}

type TabKey = 'brats' | 'mslesseg' | 'small-lesion';

export const WeakResultsBenchmarkSlide: React.FC<WeakResultsBenchmarkSlideProps> = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('brats');

  const tabs: { key: TabKey; label: string; sub: string }[] = [
    { key: 'brats', label: 'BraTS Benchmark', sub: 'Glioma lesion localization' },
    { key: 'mslesseg', label: 'MSLesSeg Benchmark', sub: 'Multiple sclerosis focal lesions' },
    { key: 'small-lesion', label: 'Small-Lesion Analysis', sub: 'Sub-centimeter lesion sensitivity' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 1 · WEAK SUPERVISION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Does It Localize Disease Evidence Better?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Validation on public benchmarks where ground-truth voxel-wise lesion masks are available.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-2">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#9091DF] text-[#FFFFFF] shadow-2xs'
                    : 'bg-[#F4F5FB] text-[#626A7C] hover:text-[#20243C] border border-[#D9DDEE]'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Comparison Panel for Active Benchmark */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-3 min-h-[140px] items-stretch">
          {/* Left: Input + Reference (Col span 4) */}
          <div className="md:col-span-4 p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col justify-between text-center">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
                INPUT & REFERENCE
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                MRI + Ground Truth Mask
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                {activeTab === 'brats' && 'BraTS T1c/FLAIR scan with expert manual tumor delineation.'}
                {activeTab === 'mslesseg' && 'MSLesSeg 3D FLAIR scan with consensus MS lesion mask.'}
                {activeTab === 'small-lesion' && 'Challenging sub-cohort targeting tiny, subtle lesions (< 50 voxels).'}
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#F4F5FB] text-[10px] text-[#626A7C] italic">
              QUALITATIVE COMPARISON PLACEHOLDER
            </div>
          </div>

          {/* Center: Baseline Methods (Col span 4) */}
          <div className="md:col-span-4 p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col justify-between text-center">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#626A7C] block mb-1">
                BASELINE COMPARISON
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                Grad-CAM & Standard Attribution
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                Conventional Grad-CAM, Score-CAM, and raw attention rollout overlays showing diffuse activations.
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#F4F5FB] text-[10px] text-[#626A7C] italic">
              BASELINE VISUALIZATION PLACEHOLDER
            </div>
          </div>

          {/* Right: Proposed Method (Col span 4) */}
          <div className="md:col-span-4 p-3 rounded-xl border-2 border-[#9091DF]/50 bg-[#FBFBFF] flex flex-col justify-between text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#A0A1F8]/10 rounded-full blur-md pointer-events-none" />
            <div>
              <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
                PROPOSED METHOD
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                Calibrated Multi-Map Evidence
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                Sharp, localized evidence isolating true lesion boundaries with reduced false positives.
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#DFF8E1]/50 border border-[#C8DFCA] text-[10px] font-semibold text-[#20243C]">
              PROPOSED VISUALIZATION PLACEHOLDER
            </div>
          </div>
        </div>

        {/* Small Quantitative Summary Area */}
        <div className="mt-2 p-2.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#20243C] text-[#FFFFFF] font-mono text-[10px] font-bold">
              SUMMARY
            </span>
            <span className="text-xs font-bold text-[#20243C]">
              QUANTITATIVE RESULTS
            </span>
          </div>
          <span className="text-[11px] text-[#626A7C] italic">
            IoU, Dice, Pointing Game, and decision-faithfulness metrics to be inserted
          </span>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Public Benchmark Validation</span>
        <span className="font-semibold text-[#9091DF]">BraTS & MSLesSeg Results</span>
      </div>
    </div>
  );
};

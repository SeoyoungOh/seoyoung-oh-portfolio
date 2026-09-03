import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface NormalResultsBenchmarkSlideProps {
  isActive: boolean;
}

type BenchmarkKey = 'brats' | 'mslesseg' | 'small-lesion';

export const NormalResultsBenchmarkSlide: React.FC<NormalResultsBenchmarkSlideProps> = () => {
  const [activeTab, setActiveTab] = useState<BenchmarkKey>('brats');

  const tabs: { key: BenchmarkKey; label: string }[] = [
    { key: 'brats', label: 'BraTS Benchmark' },
    { key: 'mslesseg', label: 'MSLesSeg Benchmark' },
    { key: 'small-lesion', label: 'Small-Lesion Sensitivity' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 2 · NORMAL PROJECTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Can Healthy-Only Modeling Recover Abnormal Evidence?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Unsupervised evaluation against established ground-truth lesion benchmarks.
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

        {/* 3-Column Panel */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-3 min-h-[140px] items-stretch">
          {/* Left: Input MRI + reference lesion */}
          <div className="md:col-span-4 p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col justify-between text-center">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
                EVALUATION BENCHMARK
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                Input MRI + Ground Truth Lesion
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                {activeTab === 'brats' && 'BraTS high-grade / low-grade glioma scans with multi-compartment ground-truth delineations.'}
                {activeTab === 'mslesseg' && 'MSLesSeg longitudinal multi-scanner cohort with consensus white-matter lesion masks.'}
                {activeTab === 'small-lesion' && 'Evaluation focused on fine, punctate lesions under 100 voxels testing subtle boundary recovery.'}
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#F4F5FB] text-[10px] text-[#626A7C] italic">
              QUALITATIVE COMPARISON PLACEHOLDER
            </div>
          </div>

          {/* Center: Baseline anomaly methods */}
          <div className="md:col-span-4 p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col justify-between text-center">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#626A7C] block mb-1">
                BASELINE ANOMALY METHODS
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                VAE, Diffusion, & Reconstruction Baselines
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                Uncalibrated pixel residuals showing high background noise, cortex false positives, and blurry boundary artifacts.
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#F4F5FB] text-[10px] text-[#626A7C] italic">
              BASELINE ANOMALY PLACEHOLDER
            </div>
          </div>

          {/* Right: Proposed calibrated evidence */}
          <div className="md:col-span-4 p-3 rounded-xl border-2 border-[#DFF8E1] bg-[#FBFBFF] flex flex-col justify-between text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#DFF8E1]/40 rounded-full blur-md pointer-events-none" />
            <div>
              <span className="text-[10px] font-mono font-bold text-[#20243C] block mb-1">
                PROPOSED METHOD
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                Calibrated Selective Anomaly Map
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                Sharp residual isolation with high specificity, suppressing normal ventricular and cortical false detections.
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#DFF8E1]/60 border border-[#C8DFCA] text-[10px] font-bold text-[#20243C]">
              PROPOSED ANOMALY PLACEHOLDER
            </div>
          </div>
        </div>

        {/* Small Quantitative Summary Area & Crucial Label */}
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="p-2 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center gap-2 text-xs flex-1 w-full sm:w-auto">
            <span className="px-2 py-0.5 rounded bg-[#20243C] text-[#FFFFFF] font-mono text-[10px] font-bold">
              METRICS
            </span>
            <span className="text-xs font-bold text-[#20243C]">QUANTITATIVE RESULTS</span>
            <span className="text-[11px] text-[#626A7C] italic">
              AUPRC, Dice, and false-positive rates across normative thresholds to be inserted
            </span>
          </div>

          <div className="p-2 rounded-xl bg-[#DFF8E1]/40 border border-[#C8DFCA] flex items-center gap-1.5 text-[10.5px] text-[#20243C] shrink-0">
            <Info className="w-3.5 h-3.5 text-[#20243C]" />
            <span>Lesion masks are for <strong className="text-[#20243C]">evaluation only</strong>. NOT used for training or calibration.</span>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Unsupervised Validation</span>
        <span className="font-semibold text-[#9091DF]">Healthy-Only Lesion Recovery</span>
      </div>
    </div>
  );
};

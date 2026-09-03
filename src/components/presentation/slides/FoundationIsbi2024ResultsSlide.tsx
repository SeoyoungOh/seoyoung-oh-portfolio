import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface FoundationIsbi2024ResultsSlideProps {
  isActive: boolean;
}

type TabType = 'model' | 'loss' | 'qualitative';

export const FoundationIsbi2024ResultsSlide: React.FC<FoundationIsbi2024ResultsSlideProps> = () => {
  const [activeTab, setActiveTab] = useState<TabType>('model');

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          FOUNDATIONS
        </span>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug">
            What Did the Initial Segmentation Study Show?
          </h2>

          {/* Publication Reference (Visually Secondary) */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] text-[#626A7C] shrink-0 self-start sm:self-auto">
            <BookOpen className="w-3.5 h-3.5 text-[#9091DF]" />
            <span><strong className="text-[#20243C]">ISBI 2024</strong> · Deep Neural Networks Comparison for MRI Segmentation of the Brainstem</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed mt-1">
          Interactive evaluation panels comparing architectures, loss formulations, and qualitative segmentations.
        </p>
      </div>

      {/* Tabs / Switcher */}
      <div className="my-auto py-2 flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-3">
          <button
            type="button"
            onClick={() => setActiveTab('model')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] ${
              activeTab === 'model'
                ? 'bg-[#20243C] text-[#FFFFFF]'
                : 'bg-[#F4F5FB] text-[#626A7C] hover:text-[#20243C] border border-[#D9DDEE]'
            }`}
          >
            Model Comparison
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('loss')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] ${
              activeTab === 'loss'
                ? 'bg-[#20243C] text-[#FFFFFF]'
                : 'bg-[#F4F5FB] text-[#626A7C] hover:text-[#20243C] border border-[#D9DDEE]'
            }`}
          >
            Loss Comparison
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('qualitative')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] ${
              activeTab === 'qualitative'
                ? 'bg-[#20243C] text-[#FFFFFF]'
                : 'bg-[#F4F5FB] text-[#626A7C] hover:text-[#20243C] border border-[#D9DDEE]'
            }`}
          >
            Qualitative Results
          </button>
        </div>

        {/* Tab Panel Content */}
        <div className="flex-1 min-h-[140px] rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center p-6 text-center">
          {activeTab === 'model' && (
            <div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#A0A1F8]/15 text-[#9091DF] mb-2">
                BENCHMARK PANEL
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
                QUANTITATIVE RESULTS TO BE INSERTED
              </p>
              <p className="text-[11px] text-[#626A7C] max-w-md leading-relaxed">
                Comparison of segmentation models (e.g. 3D U-Net, Attention U-Net, nnU-Net baselines) evaluating Dice score and surface distance metrics across brainstem subregions.
              </p>
            </div>
          )}

          {activeTab === 'loss' && (
            <div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#A0A1F8]/15 text-[#9091DF] mb-2">
                LOSS FUNCTION EVALUATION
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
                QUANTITATIVE RESULTS TO BE INSERTED
              </p>
              <p className="text-[11px] text-[#626A7C] max-w-md leading-relaxed">
                Empirical comparison of cross-entropy, Dice loss, generalized focal losses, and boundary-aware loss formulations for resolving ambiguous subregion boundaries.
              </p>
            </div>
          )}

          {activeTab === 'qualitative' && (
            <div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] mb-2">
                VISUAL PREVIEW
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
                QUALITATIVE SEGMENTATION EXAMPLES TO BE INSERTED
              </p>
              <p className="text-[11px] text-[#626A7C] max-w-md leading-relaxed">
                Overlay of automated segmentations against ground-truth consensus masks across axial, coronal, and sagittal planes on routine MRI.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Experimental Findings</span>
        <span className="font-semibold text-[#9091DF]">Supervised Benchmark Results</span>
      </div>
    </div>
  );
};

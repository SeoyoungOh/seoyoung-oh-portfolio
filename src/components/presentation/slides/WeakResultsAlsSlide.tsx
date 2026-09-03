import React, { useState } from 'react';
import { Layers, Info } from 'lucide-react';

interface WeakResultsAlsSlideProps {
  isActive: boolean;
}

type AlsMode = 'whole-brain' | 'brainstem-focused' | 'multimodal';

export const WeakResultsAlsSlide: React.FC<WeakResultsAlsSlideProps> = () => {
  const [activeMode, setActiveMode] = useState<AlsMode>('brainstem-focused');

  const modes: { key: AlsMode; label: string }[] = [
    { key: 'whole-brain', label: 'Whole Brain' },
    { key: 'brainstem-focused', label: 'Brainstem Focused' },
    { key: 'multimodal', label: 'Brainstem + Multimodal' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 1 · WEAK SUPERVISION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          What Happens in ALS Brainstem MRI?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Transitioning from public lesion datasets to unannotated clinical ALS cohorts.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-between">
        {/* Core Shift in Evaluation Question */}
        <div className="p-3 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#626A7C] leading-snug">
            Unlike BraTS or MSLesSeg, ALS provides <strong className="text-[#20243C]">no voxel-wise disease masks</strong>.
          </div>
          <div className="flex items-center gap-2 shrink-0 text-xs">
            <span className="line-through text-[#626A7C] hidden sm:inline">“Does prediction overlap a lesion mask?”</span>
            <span className="text-[#9091DF] font-bold">→ “Does evidence concentrate in ALS-related regions?”</span>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2 my-2">
          {modes.map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setActiveMode(m.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] flex items-center gap-1.5 ${
                activeMode === m.key
                  ? 'bg-[#9091DF] text-[#FFFFFF] shadow-2xs'
                  : 'bg-[#F4F5FB] text-[#626A7C] hover:text-[#20243C] border border-[#D9DDEE]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{m.label}</span>
            </button>
          ))}
        </div>

        {/* Large Reserved Area for MRI + Evidence Map + ROI Overlay */}
        <div className="flex-1 min-h-[130px] rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center p-4 text-center">
          <div className="w-9 h-9 rounded-xl bg-[#A0A1F8]/15 text-[#9091DF] flex items-center justify-center mb-1.5 font-mono text-xs font-bold">
            ALS MRI
          </div>
          <p className="text-xs font-bold text-[#20243C] mb-1">
            {activeMode === 'whole-brain' && 'WHOLE BRAIN EVIDENCE MAP & CORTICOSPINAL TRACT OVERLAY'}
            {activeMode === 'brainstem-focused' && 'BRAINSTEM-FOCUSED EVIDENCE CONCENTRATION OVER ANATOMICAL NUCLEI'}
            {activeMode === 'multimodal' && 'MULTIMODAL (T1w + DTI) BRAINSTEM EVIDENCE INTEGRATION'}
          </p>
          <p className="text-[11px] text-[#626A7C] max-w-md leading-relaxed">
            Reserved area for multi-slice brainstem MRI view with calibrated attribution overlay and task-oriented ROI borders.
          </p>
        </div>

        {/* Small Note on ROI scaffold */}
        <div className="mt-2 p-2 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center gap-2">
          <Info className="w-4 h-4 text-[#9091DF] shrink-0" />
          <p className="text-[11px] text-[#626A7C]">
            <strong className="text-[#20243C]">Note:</strong> ROI references are used for anatomical interpretation, <strong className="text-[#20243C]">not as disease ground truth</strong>.
          </p>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Clinical ALS Evaluation</span>
        <span className="font-semibold text-[#9091DF]">Spatial Evidence in ALS Cohorts</span>
      </div>
    </div>
  );
};

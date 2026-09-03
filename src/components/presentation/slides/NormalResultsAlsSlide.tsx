import React, { useState } from 'react';
import { Layers, Info } from 'lucide-react';

interface NormalResultsAlsSlideProps {
  isActive: boolean;
}

type AlsNormMode = 'whole-brain' | 'brainstem-t1w' | 'brainstem-fa';

export const NormalResultsAlsSlide: React.FC<NormalResultsAlsSlideProps> = () => {
  const [activeMode, setActiveMode] = useState<AlsNormMode>('brainstem-t1w');

  const modes: { key: AlsNormMode; label: string }[] = [
    { key: 'whole-brain', label: 'Whole-Brain T1w' },
    { key: 'brainstem-t1w', label: 'Brainstem T1w' },
    { key: 'brainstem-fa', label: 'Brainstem T1w + FA' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 2 · NORMAL PROJECTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Does the Same Principle Transfer to ALS?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Evaluating whether healthy-only normative deviations map onto ALS-implicated neuroanatomy.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-between">
        {/* Guiding Question / Framing Card */}
        <div className="p-3 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#626A7C]">
            ALS does not provide a voxel-wise disease mask. The goal is <strong className="text-[#20243C]">not</strong> exact lesion segmentation.
          </div>
          <div className="text-[#20243C] font-bold shrink-0">
            “Does calibrated deviation concentrate in <span className="text-[#9091DF]">clinically meaningful brainstem regions</span>?”
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

        {/* 4-Component Reserved Visual Area */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2.5 min-h-[130px] items-stretch">
          <div className="p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-mono font-bold text-[#626A7C] mb-1">PANEL 01</span>
            <p className="text-xs font-bold text-[#20243C] mb-1">Input MRI</p>
            <p className="text-[10px] text-[#626A7C]">
              {activeMode === 'whole-brain' && 'Patient whole-brain scan'}
              {activeMode === 'brainstem-t1w' && 'High-res axial brainstem slice'}
              {activeMode === 'brainstem-fa' && 'Paired T1w + DTI FA map'}
            </p>
          </div>

          <div className="p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-mono font-bold text-[#9091DF] mb-1">PANEL 02</span>
            <p className="text-xs font-bold text-[#20243C] mb-1">Projected Normal</p>
            <p className="text-[10px] text-[#626A7C]">
              Generative counterfactual reference
            </p>
          </div>

          <div className="p-3 rounded-xl border-2 border-[#DFF8E1] bg-[#FBFBFF] flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-mono font-bold text-[#20243C] mb-1">PANEL 03</span>
            <p className="text-xs font-bold text-[#20243C] mb-1">Anomaly Evidence</p>
            <p className="text-[10px] text-[#626A7C]">
              Calibrated multi-view deviation
            </p>
          </div>

          <div className="p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-mono font-bold text-[#9091DF] mb-1">PANEL 04</span>
            <p className="text-xs font-bold text-[#20243C] mb-1">Task ROI Overlay</p>
            <p className="text-[10px] text-[#626A7C]">
              CST, hypoglossal, & cranial nuclei
            </p>
          </div>
        </div>

        {/* Small Note on Task ROIs */}
        <div className="mt-2 p-2 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center gap-2">
          <Info className="w-4 h-4 text-[#9091DF] shrink-0" />
          <p className="text-[11px] text-[#626A7C]">
            <strong className="text-[#20243C]">Methodological Note:</strong> Task-oriented ROIs support anatomical interpretation, <strong className="text-[#20243C]">not voxel-wise disease ground truth</strong>.
          </p>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Normative Translation</span>
        <span className="font-semibold text-[#9091DF]">ALS Brainstem Deviation</span>
      </div>
    </div>
  );
};

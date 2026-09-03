import React, { useState } from 'react';
import { Layers, AlertCircle } from 'lucide-react';

interface SynthesisAlsSlideProps {
  isActive: boolean;
}

type ClinicalMode = 'bulbar' | 'respiratory' | 'motor';

export const SynthesisAlsSlide: React.FC<SynthesisAlsSlideProps> = () => {
  const [activeMode, setActiveMode] = useState<ClinicalMode>('bulbar');

  const modes: { key: ClinicalMode; label: string; desc: string }[] = [
    { key: 'bulbar', label: 'Bulbar-Related Profile', desc: 'Hypoglossal, ambiguous, & facial motor nuclei' },
    { key: 'respiratory', label: 'Respiratory-Related Profile', desc: 'Pre-Bötzinger & medullary respiratory column' },
    { key: 'motor', label: 'Motor-Related Profile', desc: 'Corticospinal tract & cerebral peduncles' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          ALS INTERPRETATION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          What Do These Evidence Maps Mean for ALS?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Evaluating whether model-derived spatial evidence aligns with specific symptom-related clinical profiles.
        </p>
      </div>

      {/* Main Interactive Comparison Area */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-between">
        {/* Core Rationale Bar */}
        <div className="p-2.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="text-[#626A7C]">
            Objective is <strong className="text-[#20243C]">not</strong> to claim exact voxel-wise pathology, but to examine if evidence:
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[#20243C] font-semibold flex-wrap">
            <span className="px-2 py-0.5 rounded bg-[#F4F5FB] border border-[#D9DDEE]">Appears in target ROIs</span>
            <span className="px-2 py-0.5 rounded bg-[#F4F5FB] border border-[#D9DDEE]">Differs by profile</span>
            <span className="px-2 py-0.5 rounded bg-[#F4F5FB] border border-[#D9DDEE]">Supports hypotheses</span>
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

        {/* 3-Column Comparative Visual Panels */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 min-h-[135px] items-stretch">
          {/* Left: Task-oriented neuroanatomical ROI */}
          <div className="p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] flex flex-col justify-between text-center">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#626A7C] block mb-1">
                ANATOMICAL REFERENCE
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                Task-Oriented Neuroanatomical ROI
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                {activeMode === 'bulbar' && 'Atlas delineations of CN IX, X, XII nuclei and bulbar reticular formation.'}
                {activeMode === 'respiratory' && 'Ventrolateral medulla and pontine respiratory rhythm generator coordinates.'}
                {activeMode === 'motor' && 'Corticospinal tracts crossing the pontine base into medullary pyramids.'}
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#F4F5FB] text-[10px] text-[#626A7C] italic">
              ROI MAP TO BE INSERTED
            </div>
          </div>

          {/* Center: Weakly Supervised Evidence */}
          <div className="p-3 rounded-xl border-2 border-[#9091DF]/40 bg-[#FBFBFF] flex flex-col justify-between text-center">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
                METHOD 1 ATTRIBUTION
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                Weakly Supervised Evidence
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                Calibrated multi-cue attribution map derived from global diagnostic classifier.
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#A0A1F8]/10 text-[10px] font-bold text-[#9091DF]">
              WEAK EVIDENCE TO BE INSERTED
            </div>
          </div>

          {/* Right: Normal-Projection Evidence */}
          <div className="p-3 rounded-xl border-2 border-[#DFF8E1] bg-[#FBFBFF] flex flex-col justify-between text-center">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#20243C] block mb-1">
                METHOD 2 DEVIATION
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                Normal-Projection Evidence
              </h3>
              <p className="text-[11px] text-[#626A7C]">
                Calibrated residual deviation from normative generative counterfactual prior.
              </p>
            </div>
            <div className="mt-2 py-2 rounded-lg bg-[#DFF8E1]/60 text-[10px] font-bold text-[#20243C]">
              NORMAL-PROJECTION EVIDENCE TO BE INSERTED
            </div>
          </div>
        </div>

        {/* Takeaway & Caution Bar */}
        <div className="mt-2 p-2 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="font-bold text-[#20243C]">
            Takeaway: <span className="font-normal text-[#626A7C]">Different clinical profiles may correspond to different spatial evidence patterns.</span>
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-[#626A7C] shrink-0">
            <AlertCircle className="w-3.5 h-3.5 text-[#9091DF]" />
            <span>Anatomical plausibility <strong className="text-[#20243C]">≠</strong> clinical validation.</span>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Clinical Synthesis</span>
        <span className="font-semibold text-[#9091DF]">ALS Subgroup Evidence</span>
      </div>
    </div>
  );
};

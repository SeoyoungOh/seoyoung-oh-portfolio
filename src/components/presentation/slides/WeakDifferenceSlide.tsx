import React from 'react';
import { Check, X } from 'lucide-react';

interface WeakDifferenceSlideProps {
  isActive: boolean;
}

export const WeakDifferenceSlide: React.FC<WeakDifferenceSlideProps> = () => {
  const conventionalWeaknesses = [
    'Relies on a single explanation source (e.g., standard Grad-CAM or raw attention weights)',
    'Prone to diffuse and over-smoothed activations covering non-specific tissue',
    'Unstable spatial evidence with high sensitivity to minor input perturbations',
    'Visually plausible heatmaps do not guarantee decision faithfulness or clinical reliability',
  ];

  const proposedStrengths = [
    'Integrates multiple complementary cues (attention, token norm, gradients, spectral dynamics)',
    'Explicit reliability calibration factoring in inter-cue agreement and stability metrics',
    'Uncertainty-aware evidence selection pruning spurious or inconsistent activations',
    'Evaluated against decision faithfulness rather than aesthetic visual plausibility alone',
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 1 · WEAK SUPERVISION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Beyond a Single Heatmap
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Comparing conventional attribution methods with the proposed multi-cue calibrated framework.
        </p>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="my-auto py-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* Left: Conventional */}
        <div className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F4F5FB] text-[#626A7C] border border-[#D9DDEE]">
                CONVENTIONAL APPROACH
              </span>
              <span className="text-xs font-bold text-[#626A7C]">Single CAM / Heatmap</span>
            </div>

            <div className="space-y-2 mb-3">
              {conventionalWeaknesses.map((w, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#626A7C]">
                  <X className="w-3.5 h-3.5 text-[#E06D6D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{w}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] text-[#626A7C] text-center">
            Question asked: <strong className="text-[#20243C]">“Where is the model activation?”</strong>
          </div>
        </div>

        {/* Right: Proposed */}
        <div className="p-4 rounded-xl bg-[#FBFBFF] border-2 border-[#9091DF]/50 shadow-2xs flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-[#A0A1F8]/10 rounded-full blur-lg pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#A0A1F8]/15 text-[#9091DF]">
                PROPOSED APPROACH
              </span>
              <span className="text-xs font-bold text-[#20243C]">Multi-Cue Calibrated Evidence</span>
            </div>

            <div className="space-y-2 mb-3">
              {proposedStrengths.map((s, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#20243C]">
                  <Check className="w-3.5 h-3.5 text-[#9091DF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#DFF8E1]/60 border border-[#C8DFCA] text-[11px] text-[#20243C] text-center">
            Key advance: <strong className="text-[#20243C]">“How reliable and faithful is that activation?”</strong>
          </div>
        </div>
      </div>

      {/* Main Takeaway Banner */}
      <div className="p-2.5 rounded-xl bg-[#20243C] text-[#FFFFFF] text-center">
        <p className="text-xs font-bold">
          Do not ask only <span className="text-[#A0A1F8]">“Where is the activation?”</span> — Also ask <span className="text-[#DFF8E1]">“How reliable is that activation?”</span>
        </p>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Methodological Distinctiveness</span>
        <span className="font-semibold text-[#9091DF]">Beyond Single Heatmaps</span>
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

interface WeakMethodSlideProps {
  isActive: boolean;
}

export const WeakMethodSlide: React.FC<WeakMethodSlideProps> = () => {
  const cues = [
    { name: 'Attention', desc: 'Self-attention weights' },
    { name: 'Token Activation', desc: 'ViT token norms' },
    { name: 'Semantic Gradient', desc: 'Class gradient backprop' },
    { name: 'Structural / Spectral Cue', desc: 'Frequency / texture cues' },
  ];

  const calibrations = [
    { name: 'Disagreement', desc: 'Inter-cue variance' },
    { name: 'Stability', desc: 'Perturbation invariance' },
    { name: 'Decision Faithfulness', desc: 'Masking impact' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 1 · WEAK SUPERVISION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Reliability-Calibrated Weakly Supervised Localization
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          The complete multi-cue aggregation and reliability calibration pipeline.
        </p>
      </div>

      {/* Horizontal Pipeline with 5 Stages */}
      <div className="my-auto py-1">
        <div className="grid grid-cols-5 gap-2 items-stretch">
          {/* Stage 1 */}
          <div className="p-2.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between text-center">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block mb-0.5">STAGE 01</span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">MRI Input</h3>
              <p className="text-[10px] text-[#626A7C] leading-snug">Volumetric or multi-slice brain MRI</p>
            </div>
            <div className="mt-2 py-1 rounded bg-[#F4F5FB] text-[10px] font-mono text-[#626A7C]">x ∈ ℝ³</div>
          </div>

          {/* Stage 2 */}
          <div className="p-2.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between text-center">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block mb-0.5">STAGE 02</span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">Diagnostic Classifier</h3>
              <p className="text-[10px] text-[#626A7C] leading-snug">Transformer backbone trained on global labels</p>
            </div>
            <div className="mt-2 py-1 rounded bg-[#20243C] text-[10px] font-mono text-[#FFFFFF]">ŷ = f(x)</div>
          </div>

          {/* Stage 3: Multiple cues */}
          <div className="p-2.5 rounded-xl bg-[#FBFBFF] border-2 border-[#9091DF]/40 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block text-center mb-0.5">STAGE 03</span>
              <h3 className="text-xs font-bold text-[#20243C] text-center mb-1">Multiple Cues</h3>
              <div className="space-y-1">
                {cues.map((c) => (
                  <div key={c.name} className="px-1.5 py-0.5 rounded bg-[#A0A1F8]/10 text-[9px] text-[#20243C] flex items-center justify-between">
                    <span className="font-semibold truncate">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-1 text-[9px] text-center text-[#9091DF] font-semibold">4 Complementary Cues</div>
          </div>

          {/* Stage 4: Calibration */}
          <div className="p-2.5 rounded-xl bg-[#FBFBFF] border-2 border-[#9091DF]/40 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block text-center mb-0.5">STAGE 04</span>
              <h3 className="text-xs font-bold text-[#20243C] text-center mb-1">Reliability Calibration</h3>
              <div className="space-y-1">
                {calibrations.map((cal) => (
                  <div key={cal.name} className="px-1.5 py-0.5 rounded bg-[#DFF8E1]/60 text-[9px] text-[#20243C] border border-[#C8DFCA]/60 flex items-center justify-between">
                    <span className="font-semibold truncate">{cal.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-1 text-[9px] text-center text-[#20243C] font-semibold">Stability & Faithfulness</div>
          </div>

          {/* Stage 5 */}
          <div className="p-2.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between text-center">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#9091DF] block mb-0.5">STAGE 05</span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">Evidence Map + Atlas</h3>
              <p className="text-[10px] text-[#626A7C] leading-snug">Calibrated disease-evidence map with anatomical ROI overlay</p>
            </div>
            <div className="mt-2 py-1 rounded bg-[#F4F5FB] text-[10px] font-mono text-[#9091DF] font-bold">M* ⊙ ROIs</div>
          </div>
        </div>

        {/* Central Reserved Area for Future Method Figure */}
        <div className="mt-2 p-3 rounded-xl border border-dashed border-[#D9DDEE] bg-[#FBFBFF] text-center">
          <p className="text-xs font-bold text-[#20243C] mb-0.5">
            DETAILED ARCHITECTURE & CALIBRATION FORMULATION
          </p>
          <p className="text-[10px] text-[#626A7C]">
            Reserved area for future inclusion of full mathematical gating equations, attention rollouts, and loss formulation diagrams.
          </p>
        </div>
      </div>

      {/* Important Message at the Bottom */}
      <div className="p-2.5 rounded-xl bg-[#A0A1F8]/10 border border-[#9091DF]/30 flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-[#9091DF] shrink-0" />
        <p className="text-xs font-bold text-[#20243C]">
          Crucial Principle: <span className="font-normal text-[#626A7C]">The output is a <strong className="text-[#20243C]">disease-evidence map</strong>, NOT a voxel-wise disease segmentation.</span>
        </p>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Methodological Architecture</span>
        <span className="font-semibold text-[#9091DF]">Pipeline Architecture</span>
      </div>
    </div>
  );
};

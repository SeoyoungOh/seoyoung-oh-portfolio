import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

interface NormalDifferenceSlideProps {
  isActive: boolean;
}

export const NormalDifferenceSlide: React.FC<NormalDifferenceSlideProps> = () => {
  const conventionalProblems = [
    'Normal anatomical variability mistakenly flagged as anomaly',
    'Registration and spatial normalization mismatches near skull/sulci',
    'Acquisition noise, artifact rings, and partial-volume boundary edges',
    'Imperfect reconstruction: autoencoders blur high frequencies even on healthy tissue',
  ];

  const proposedStrengths = [
    'Multi-view residual evidence (pixel space, latent embeddings, and directional wavelets)',
    'Healthy-risk-aware fusion weighted by normative empirical distributions',
    'Projection-disagreement uncertainty tracking variance across plausible normal paths',
    'Strict false-positive-controlled calibration on held-out healthy validation scans',
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 2 · NORMAL PROJECTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Beyond Reconstruction Error
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Why naive residual maps produce false positives and how calibrated projection addresses them.
        </p>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="my-auto py-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* Left: Conventional */}
        <div className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F4F5FB] text-[#626A7C] border border-[#D9DDEE]">
                CONVENTIONAL RESIDUAL
              </span>
              <span className="text-xs font-mono font-bold text-[#626A7C]">Input − Reconstruct = Residual</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] mb-3 text-xs text-[#626A7C]">
              <div className="flex items-center gap-1.5 font-bold text-[#20243C] mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-[#E06D6D]" />
                Fundamental Pitfall:
              </div>
              A high residual does <strong className="text-[#20243C]">NOT</strong> necessarily mean pathology.
            </div>

            <div className="space-y-1.5 mb-2">
              {conventionalProblems.map((p, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#626A7C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E06D6D] shrink-0 mt-1.5" />
                  <span className="leading-snug">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] text-[#626A7C] text-center mt-2">
            Limited question: <strong className="text-[#20243C]">“Where is the numerical difference?”</strong>
          </div>
        </div>

        {/* Right: Proposed Approach */}
        <div className="p-4 rounded-xl bg-[#FBFBFF] border-2 border-[#DFF8E1] shadow-2xs flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-[#DFF8E1]/30 rounded-full blur-lg pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
                PROPOSED NORMATIVE PROJECTION
              </span>
              <span className="text-xs font-bold text-[#20243C]">Multi-View + Calibration</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#DFF8E1]/40 border border-[#C8DFCA] mb-3 text-xs text-[#20243C]">
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#20243C]" />
                Controlled Risk Principle:
              </div>
              Anomalies must exceed normative physiological thresholds with low projection uncertainty.
            </div>

            <div className="space-y-1.5 mb-2">
              {proposedStrengths.map((s, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#20243C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF] shrink-0 mt-1.5" />
                  <span className="leading-snug">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#20243C] text-[11px] text-[#FFFFFF] text-center mt-2">
            Calibrated question: <strong className="text-[#DFF8E1]">“Is this difference stable and unusual relative to healthy anatomy?”</strong>
          </div>
        </div>
      </div>

      {/* Main Takeaway Banner */}
      <div className="p-2.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] text-center">
        <p className="text-xs font-bold text-[#20243C]">
          Do not ask only <span className="text-[#626A7C]">“Where is the difference?”</span> — Also ask <span className="text-[#9091DF]">“Is this difference stable and unusual relative to healthy anatomy?”</span>
        </p>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Residual Analysis</span>
        <span className="font-semibold text-[#9091DF]">Beyond Naive Residuals</span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Sliders, ShieldCheck, AlertCircle, TrendingUp, CheckCircle2 } from 'lucide-react';

interface OperatingPoint {
  alpha: string;
  label: string;
  targetFPR: number;
  observedFPR: number;
  bratsAUPRC: number;
  mslessegAUPRC: number;
  targetROI: number;
  controlROI: number;
  enrichmentRatio: number;
  description: string;
  isCalibratedDefault?: boolean;
}

const operatingPoints: OperatingPoint[] = [
  {
    alpha: '0.01',
    label: 'Strict Healthy Control (α = 0.01)',
    targetFPR: 0.01,
    observedFPR: 0.009,
    bratsAUPRC: 0.54,
    mslessegAUPRC: 0.41,
    targetROI: 0.49,
    controlROI: 0.11,
    enrichmentRatio: 4.45,
    description: 'Ultra-conservative threshold. Minimizes non-pathological noise almost entirely, but suppresses subtle lesion boundaries.',
  },
  {
    alpha: '0.05',
    label: 'Calibrated Operating Point (α = 0.05)',
    targetFPR: 0.05,
    observedFPR: 0.047,
    bratsAUPRC: 0.61,
    mslessegAUPRC: 0.48,
    targetROI: 0.62,
    controlROI: 0.20,
    enrichmentRatio: 3.10,
    description: 'Optimal thesis operating point. Rigorously controls healthy false-positive rate at 4.7% while maximizing target ROI evidence concentration (3.10× target/control enrichment, p < 0.05).',
    isCalibratedDefault: true,
  },
  {
    alpha: '0.10',
    label: 'Permissive Threshold (α = 0.10)',
    targetFPR: 0.10,
    observedFPR: 0.096,
    bratsAUPRC: 0.63,
    mslessegAUPRC: 0.50,
    targetROI: 0.71,
    controlROI: 0.35,
    enrichmentRatio: 2.03,
    description: 'Higher sensitivity threshold. Captures broader potential residual areas but introduces elevated false positives in healthy reference control scans.',
  },
  {
    alpha: 'raw',
    label: 'Raw Uncalibrated Residual (|X - X_recon|)',
    targetFPR: 0.28,
    observedFPR: 0.274,
    bratsAUPRC: 0.39,
    mslessegAUPRC: 0.29,
    targetROI: 0.68,
    controlROI: 0.52,
    enrichmentRatio: 1.31,
    description: 'Baseline without healthy-reference calibration. Raw intensity residuals suffer from anatomical variance and registration noise, yielding 27.4% false positives in healthy subjects.',
  },
];

export const CalibrationTradeoffChart: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1); // Default α = 0.05
  const current = operatingPoints[selectedIndex];

  // Curve data points for SVG rendering
  const curvePoints = [
    { x: 10, y: 85, fpr: 0.009, ratio: 4.45 },
    { x: 35, y: 55, fpr: 0.047, ratio: 3.10 },
    { x: 65, y: 35, fpr: 0.096, ratio: 2.03 },
    { x: 95, y: 15, fpr: 0.274, ratio: 1.31 },
  ];

  return (
    <div className="my-8 bg-[#FFFFFF] rounded-2xl border border-[#D9DDEE] p-6 sm:p-8 shadow-xs">
      {/* Component Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#D9DDEE]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-1">
            <Sliders className="w-4 h-4 text-[#9091DF]" />
            <span>INTERACTIVE EXPERIMENTAL DATA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
            Healthy-Reference Calibration Tradeoff Analysis
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#20243C]" />
            Target FPR Alpha Control
          </span>
        </div>
      </div>

      <p className="text-sm font-medium text-[#626A7C] mb-6 leading-relaxed">
        Toggle operating points to examine how establishing a strict false-positive bound ($\alpha$) on a held-out healthy control cohort suppresses anatomical noise while maintaining high spatial evidence concentration in target structures.
      </p>

      {/* Operating Point Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
        {operatingPoints.map((op, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={op.alpha}
              onClick={() => setSelectedIndex(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-[#20243C] text-[#FBFBFF] border-[#20243C] shadow-sm'
                  : 'bg-[#FBFBFF] text-[#20243C] border-[#D9DDEE] hover:border-[#A0A1F8] hover:bg-[#FFFFFF]'
              }`}
            >
              {op.isCalibratedDefault && (
                <span className="absolute -top-2.5 right-3 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
                  Primary Operating Point
                </span>
              )}
              <div className="text-xs font-mono font-bold uppercase tracking-wider mb-1 opacity-80">
                {op.alpha === 'raw' ? 'Baseline' : `Alpha Threshold`}
              </div>
              <div className="text-sm font-bold truncate">{op.label.split('(')[0]}</div>
              <div className={`text-xs mt-1 font-medium ${isSelected ? 'text-[#B9E0FC]' : 'text-[#626A7C]'}`}>
                {op.alpha === 'raw' ? 'FPR = 27.4%' : `Target FPR = ${op.targetFPR}`}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Visual & Metric Display Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        
        {/* Metric Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-3">
          
          {/* Card 1: Healthy Control FPR */}
          <div className="bg-[#F8F9FE] p-4 sm:p-5 rounded-xl border border-[#D9DDEE] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C] mb-1">
                Healthy Control FPR
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#20243C]">
                {(current.observedFPR * 100).toFixed(1)}%
              </div>
            </div>
            <div className="mt-3 text-xs font-medium text-[#626A7C] flex items-center gap-1.5">
              {current.observedFPR <= 0.05 ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Controlled (≤ 5.0%)
                </span>
              ) : (
                <span className="text-amber-700 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> High False-Positive Risk
                </span>
              )}
            </div>
          </div>

          {/* Card 2: Target/Control Enrichment */}
          <div className="bg-[#B6BAFA]/15 p-4 sm:p-5 rounded-xl border border-[#B6BAFA]/40 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#9091DF] mb-1">
                Target / Control Ratio
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#20243C]">
                {current.enrichmentRatio.toFixed(2)}×
              </div>
            </div>
            <div className="mt-3 text-xs font-medium text-[#20243C]">
              Target: {(current.targetROI * 100).toFixed(0)}% vs Control: {(current.controlROI * 100).toFixed(0)}%
            </div>
          </div>

          {/* Card 3: BraTS Pixel-AUPRC */}
          <div className="bg-[#F8F9FE] p-4 sm:p-5 rounded-xl border border-[#D9DDEE] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C] mb-1">
                BraTS Pixel-AUPRC
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#20243C]">
                {current.bratsAUPRC.toFixed(2)}
              </div>
            </div>
            <div className="mt-3 text-xs font-medium text-[#626A7C]">
              Synthetic lesion validation
            </div>
          </div>

          {/* Card 4: MSLesSeg Pixel-AUPRC */}
          <div className="bg-[#F8F9FE] p-4 sm:p-5 rounded-xl border border-[#D9DDEE] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#626A7C] mb-1">
                MSLesSeg Pixel-AUPRC
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#20243C]">
                {current.mslessegAUPRC.toFixed(2)}
              </div>
            </div>
            <div className="mt-3 text-xs font-medium text-[#626A7C]">
              Multiple sclerosis benchmark
            </div>
          </div>

        </div>

        {/* SVG Graphic Tradeoff Visualizer (5 cols) */}
        <div className="lg:col-span-5 bg-[#20243C] text-[#FBFBFF] p-5 rounded-xl border border-[#20243C] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A0A1F8]">
                Enrichment vs FPR Curve
              </span>
              <span className="text-[11px] font-mono text-[#DFF8E1]">p &lt; 0.05 (5 runs)</span>
            </div>

            {/* SVG Chart */}
            <div className="relative w-full h-40">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Background grid lines */}
                <line x1="0" y1="20" x2="100" y2="20" stroke="#9091DF" strokeOpacity="0.15" strokeDasharray="2,2" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#9091DF" strokeOpacity="0.15" strokeDasharray="2,2" />
                <line x1="0" y1="80" x2="100" y2="80" stroke="#9091DF" strokeOpacity="0.15" strokeDasharray="2,2" />

                {/* Vertical target FPR boundary at x=35 */}
                <line x1="35" y1="0" x2="35" y2="100" stroke="#DFF8E1" strokeOpacity="0.5" strokeDasharray="3,3" strokeWidth="1" />
                
                {/* Smooth Curve Area */}
                <path
                  d="M 10 85 Q 35 55, 65 35 T 95 15 L 95 100 L 10 100 Z"
                  fill="url(#chartGradient)"
                  opacity="0.3"
                />

                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#A0A1F8" />
                    <stop offset="100%" stopColor="#A0A1F8" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Line Path */}
                <path
                  d="M 10 85 Q 35 55, 65 35 T 95 15"
                  fill="none"
                  stroke="#A0A1F8"
                  strokeWidth="3"
                />

                {/* Points */}
                {curvePoints.map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r={selectedIndex === i ? "5" : "3.5"}
                    fill={selectedIndex === i ? "#DFF8E1" : "#A0A1F8"}
                    stroke="#20243C"
                    strokeWidth="1.5"
                    className="transition-all cursor-pointer"
                    onClick={() => setSelectedIndex(i)}
                  />
                ))}
              </svg>

              <div className="absolute top-1 left-9 text-[10px] font-mono text-[#DFF8E1]">
                Calibrated Target FPR = 5%
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#D9DDEE]/20 text-xs text-[#B9E0FC] flex items-center justify-between">
            <span>← Strict Control (Low Noise)</span>
            <span>Raw Uncalibrated →</span>
          </div>
        </div>

      </div>

      {/* Narrative Explanation Box for Current Point */}
      <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] flex items-start gap-3">
        <TrendingUp className="w-5 h-5 text-[#9091DF] shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#20243C] block mb-1">
            Methodological Interpretation:
          </span>
          <p className="text-xs sm:text-sm font-medium text-[#20243C] leading-relaxed">
            {current.description}
          </p>
        </div>
      </div>

    </div>
  );
};

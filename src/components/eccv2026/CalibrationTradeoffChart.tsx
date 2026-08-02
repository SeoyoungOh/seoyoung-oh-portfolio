import React, { useState } from 'react';
import { Sliders, ShieldCheck, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface OperatingPointData {
  label: string;
  targetFPR: number | null;
  bratsRecall: number;
  bratsRecallCI: number;
  bratsSmallRecall: number;
  bratsSmallRecallCI: number;
  msRecall: number;
  msRecallCI: number;
  msSmallRecall: number;
  msSmallRecallCI: number;
  healthyTestFPR: number;
  healthyTestFPRCI: number;
  isCalibratedDefault?: boolean;
}

const points: OperatingPointData[] = [
  {
    label: "Uncalibrated",
    targetFPR: null,
    bratsRecall: 0.73,
    bratsRecallCI: 0.02,
    bratsSmallRecall: 0.65,
    bratsSmallRecallCI: 0.02,
    msRecall: 0.68,
    msRecallCI: 0.02,
    msSmallRecall: 0.59,
    msSmallRecallCI: 0.02,
    healthyTestFPR: 0.142,
    healthyTestFPRCI: 0.021,
  },
  {
    label: "α = 0.100",
    targetFPR: 0.100,
    bratsRecall: 0.70,
    bratsRecallCI: 0.02,
    bratsSmallRecall: 0.63,
    bratsSmallRecallCI: 0.02,
    msRecall: 0.66,
    msRecallCI: 0.02,
    msSmallRecall: 0.57,
    msSmallRecallCI: 0.02,
    healthyTestFPR: 0.092,
    healthyTestFPRCI: 0.018,
  },
  {
    label: "α = 0.050",
    targetFPR: 0.050,
    bratsRecall: 0.67,
    bratsRecallCI: 0.02,
    bratsSmallRecall: 0.60,
    bratsSmallRecallCI: 0.02,
    msRecall: 0.63,
    msRecallCI: 0.02,
    msSmallRecall: 0.53,
    msSmallRecallCI: 0.02,
    healthyTestFPR: 0.047,
    healthyTestFPRCI: 0.012,
    isCalibratedDefault: true,
  },
  {
    label: "α = 0.010",
    targetFPR: 0.010,
    bratsRecall: 0.61,
    bratsRecallCI: 0.02,
    bratsSmallRecall: 0.54,
    bratsSmallRecallCI: 0.02,
    msRecall: 0.57,
    msRecallCI: 0.02,
    msSmallRecall: 0.47,
    msSmallRecallCI: 0.02,
    healthyTestFPR: 0.012,
    healthyTestFPRCI: 0.006,
  },
  {
    label: "α = 0.005",
    targetFPR: 0.005,
    bratsRecall: 0.56,
    bratsRecallCI: 0.03,
    bratsSmallRecall: 0.48,
    bratsSmallRecallCI: 0.02,
    msRecall: 0.52,
    msRecallCI: 0.02,
    msSmallRecall: 0.41,
    msSmallRecallCI: 0.02,
    healthyTestFPR: 0.006,
    healthyTestFPRCI: 0.004,
  },
];

export const CalibrationTradeoffChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sensitivity' | 'fpr'>('sensitivity');
  const [selectedIdx, setSelectedIdx] = useState<number>(2); // Default α = 0.050
  const [showTable, setShowTable] = useState(false);

  const selectedPt = points[selectedIdx];

  return (
    <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9DDEE] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-1">
            <Sliders className="w-4 h-4 text-[#9091DF]" />
            <span>INTERACTIVE EXPERIMENTAL DATA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#20243C]">
            Healthy-Reference Calibration Trade-Off Analysis
          </h3>
        </div>

        {/* Mode Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F8F9FE] rounded-xl border border-[#D9DDEE]">
          <button
            onClick={() => setActiveTab('sensitivity')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'sensitivity'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            Lesion Sensitivity
          </button>
          <button
            onClick={() => setActiveTab('fpr')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'fpr'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            Healthy-Test FPR
          </button>
        </div>
      </div>

      {/* Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {points.map((pt, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={pt.label}
              onClick={() => setSelectedIdx(idx)}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-[#20243C] text-[#FBFBFF] border-[#20243C] shadow-sm'
                  : 'bg-[#F8F9FE] text-[#20243C] border-[#D9DDEE] hover:border-[#9091DF]'
              }`}
            >
              {pt.isCalibratedDefault && (
                <span className="absolute -top-2 right-2 text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
                  Calibrated
                </span>
              )}
              <div className="text-xs font-mono font-bold">{pt.label}</div>
              <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-[#A0A1F8]' : 'text-[#626A7C]'}`}>
                {pt.targetFPR === null ? 'FPR = 14.2%' : `Target FPR = ${(pt.targetFPR * 100).toFixed(1)}%`}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Operating Point Highlight Box */}
      <div className="bg-[#F8F9FE] p-5 rounded-xl border border-[#D9DDEE] grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <div className="text-[10px] font-mono uppercase font-bold text-[#626A7C]">Held-out Healthy FPR</div>
          <div className="text-xl sm:text-2xl font-black text-[#20243C]">
            {(selectedPt.healthyTestFPR * 100).toFixed(1)}%
          </div>
          <div className="text-[10px] text-[#626A7C]">± {(selectedPt.healthyTestFPRCI * 100).toFixed(1)}%</div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase font-bold text-[#626A7C]">BraTS Recall / Small</div>
          <div className="text-xl sm:text-2xl font-black text-[#20243C]">
            {selectedPt.bratsRecall.toFixed(2)} / {selectedPt.bratsSmallRecall.toFixed(2)}
          </div>
          <div className="text-[10px] text-[#626A7C]">± {selectedPt.bratsRecallCI.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase font-bold text-[#626A7C]">MSLesSeg Recall / Small</div>
          <div className="text-xl sm:text-2xl font-black text-[#20243C]">
            {selectedPt.msRecall.toFixed(2)} / {selectedPt.msSmallRecall.toFixed(2)}
          </div>
          <div className="text-[10px] text-[#626A7C]">± {selectedPt.msRecallCI.toFixed(2)}</div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-[#9091DF]">
            <ShieldCheck className="w-4 h-4 text-[#9091DF]" />
            <span>Target α = {selectedPt.targetFPR === null ? 'None' : selectedPt.targetFPR}</span>
          </div>
        </div>
      </div>

      {/* Explanatory Narrative Box */}
      <div className="p-4 rounded-xl bg-[#A0A1F8]/10 border border-[#9091DF]/30 space-y-2">
        <p className="text-xs sm:text-sm font-semibold text-[#20243C] leading-relaxed">
          <strong>Interpretation:</strong> At α = 0.05, held-out healthy-test FPR falls from 0.142 to 0.047 while retaining most visible- and small-lesion sensitivity.
        </p>
        <p className="text-[11px] text-[#626A7C] leading-relaxed flex items-start gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-[#626A7C] shrink-0 mt-0.5" />
          <span>
            <strong>Limitation:</strong> The reported healthy-test FPR reflects control on held-out OpenBHB scans. It is not a guaranteed false-positive rate across every age group, scanner, site, or acquisition protocol.
          </span>
        </p>
      </div>

      {/* Accessible Table Toggle */}
      <div className="pt-2">
        <button
          onClick={() => setShowTable(!showTable)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9091DF] hover:text-[#20243C] transition-colors cursor-pointer"
          aria-expanded={showTable}
        >
          {showTable ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          <span>{showTable ? 'Hide Data Table' : 'View Data Table'}</span>
        </button>

        {showTable && (
          <div className="mt-4 overflow-x-auto border border-[#D9DDEE] rounded-xl">
            <table className="w-full text-left text-xs text-[#20243C]">
              <thead className="bg-[#F8F9FE] border-b border-[#D9DDEE] font-mono text-[10px] uppercase text-[#626A7C]">
                <tr>
                  <th className="p-2.5">Operating Point</th>
                  <th className="p-2.5">Target FPR</th>
                  <th className="p-2.5">BraTS Recall</th>
                  <th className="p-2.5">BraTS Small Recall</th>
                  <th className="p-2.5">MSLesSeg Recall</th>
                  <th className="p-2.5">MSLesSeg Small Recall</th>
                  <th className="p-2.5">Healthy-Test FPR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-medium">
                {points.map((pt) => (
                  <tr key={pt.label} className={pt.isCalibratedDefault ? 'bg-[#A0A1F8]/10 font-bold' : ''}>
                    <td className="p-2.5">{pt.label}</td>
                    <td className="p-2.5 font-mono">{pt.targetFPR === null ? 'None' : pt.targetFPR}</td>
                    <td className="p-2.5 font-mono">{pt.bratsRecall.toFixed(2)} ± {pt.bratsRecallCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{pt.bratsSmallRecall.toFixed(2)} ± {pt.bratsSmallRecallCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{pt.msRecall.toFixed(2)} ± {pt.msRecallCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{pt.msSmallRecall.toFixed(2)} ± {pt.msSmallRecallCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{(pt.healthyTestFPR * 100).toFixed(1)}% ± {(pt.healthyTestFPRCI * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';

interface AblationRow {
  variant: string;
  bratsMaxIoU: number;
  bratsMaxIoUCI: number;
  msMaxIoU: number;
  msMaxIoUCI: number;
  smallRecall5: number;
  smallRecall5CI: number;
  healthyFPR: number;
  healthyFPRCI: number;
  stressFPR: number;
  stressFPRCI: number;
  isFinalChoice?: boolean;
}

const ablationData: AblationRow[] = [
  {
    variant: "Residual-Only Projection",
    bratsMaxIoU: 0.34,
    bratsMaxIoUCI: 0.02,
    msMaxIoU: 0.24,
    msMaxIoUCI: 0.02,
    smallRecall5: 0.43,
    smallRecall5CI: 0.02,
    healthyFPR: 0.286,
    healthyFPRCI: 0.021,
    stressFPR: 0.361,
    stressFPRCI: 0.028,
  },
  {
    variant: "Equal-Weight Multi-View Fusion",
    bratsMaxIoU: 0.39,
    bratsMaxIoUCI: 0.01,
    msMaxIoU: 0.28,
    msMaxIoUCI: 0.02,
    smallRecall5: 0.50,
    smallRecall5CI: 0.02,
    healthyFPR: 0.318,
    healthyFPRCI: 0.024,
    stressFPR: 0.392,
    stressFPRCI: 0.030,
  },
  {
    variant: "Healthy-Reference Fusion + LCB",
    bratsMaxIoU: 0.48,
    bratsMaxIoUCI: 0.01,
    msMaxIoU: 0.37,
    msMaxIoUCI: 0.01,
    smallRecall5: 0.62,
    smallRecall5CI: 0.01,
    healthyFPR: 0.074,
    healthyFPRCI: 0.008,
    stressFPR: 0.122,
    stressFPRCI: 0.011,
  },
  {
    variant: "FPR-Controlled LCB Selective",
    bratsMaxIoU: 0.46,
    bratsMaxIoUCI: 0.01,
    msMaxIoU: 0.35,
    msMaxIoUCI: 0.01,
    smallRecall5: 0.62,
    smallRecall5CI: 0.01,
    healthyFPR: 0.047,
    healthyFPRCI: 0.012,
    stressFPR: 0.086,
    stressFPRCI: 0.019,
    isFinalChoice: true,
  },
];

export const ReliabilityAblationChart: React.FC = () => {
  const [tab, setTab] = useState<'sensitivity' | 'fpr'>('sensitivity');
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9DDEE] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-1">
            <ShieldAlert className="w-4 h-4 text-[#9091DF]" />
            <span>METHODOLOGICAL ABLATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#20243C]">
            Reliability & Calibration Component Ablation
          </h3>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F8F9FE] rounded-xl border border-[#D9DDEE]">
          <button
            onClick={() => setTab('sensitivity')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              tab === 'sensitivity'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            Localization & Sensitivity
          </button>
          <button
            onClick={() => setTab('fpr')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              tab === 'fpr'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            Healthy & Stress FPR
          </button>
        </div>
      </div>

      {/* Grid of Ablation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ablationData.map((item) => (
          <div
            key={item.variant}
            className={`p-5 rounded-xl border transition-all ${
              item.isFinalChoice
                ? 'bg-[#20243C] text-[#FBFBFF] border-[#20243C] shadow-md'
                : 'bg-[#F8F9FE] text-[#20243C] border-[#D9DDEE]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-bold truncate pr-2">{item.variant}</div>
              {item.isFinalChoice && (
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA]">
                  Final Calibrated
                </span>
              )}
            </div>

            {tab === 'sensitivity' ? (
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="bg-black/5 dark:bg-white/5 p-2 rounded-lg">
                  <div className="text-[10px] font-mono opacity-80">BraTS IoU</div>
                  <div className="text-base font-black">{item.bratsMaxIoU.toFixed(2)}</div>
                </div>
                <div className="bg-black/5 dark:bg-white/5 p-2 rounded-lg">
                  <div className="text-[10px] font-mono opacity-80">MSLesSeg IoU</div>
                  <div className="text-base font-black">{item.msMaxIoU.toFixed(2)}</div>
                </div>
                <div className="bg-black/5 dark:bg-white/5 p-2 rounded-lg">
                  <div className="text-[10px] font-mono opacity-80">Small Recall</div>
                  <div className="text-base font-black">{item.smallRecall5.toFixed(2)}</div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 text-center pt-2">
                <div className="bg-black/5 dark:bg-white/5 p-2 rounded-lg">
                  <div className="text-[10px] font-mono opacity-80">Healthy Test FPR</div>
                  <div className="text-base font-black">{(item.healthyFPR * 100).toFixed(1)}%</div>
                </div>
                <div className="bg-black/5 dark:bg-white/5 p-2 rounded-lg">
                  <div className="text-[10px] font-mono opacity-80">Stress FPR</div>
                  <div className="text-base font-black">{(item.stressFPR * 100).toFixed(1)}%</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-[#F8F9FE] border border-[#D9DDEE] text-xs text-[#20243C] leading-relaxed">
        <strong>Takeaway:</strong> Healthy-reference fusion with LCB produces the strongest continuous maps. The final calibrated operating point accepts a small reduction in threshold-swept overlap in exchange for substantially lower false-positive behavior.
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
                  <th className="p-2.5">Ablation Variant</th>
                  <th className="p-2.5">BraTS Max-IoU</th>
                  <th className="p-2.5">MSLesSeg Max-IoU</th>
                  <th className="p-2.5">Small Recall@5%</th>
                  <th className="p-2.5">Healthy FPR</th>
                  <th className="p-2.5">Stress FPR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-medium">
                {ablationData.map((row) => (
                  <tr key={row.variant} className={row.isFinalChoice ? 'bg-[#A0A1F8]/10 font-bold' : ''}>
                    <td className="p-2.5">{row.variant}</td>
                    <td className="p-2.5 font-mono">{row.bratsMaxIoU.toFixed(2)} ± {row.bratsMaxIoUCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.msMaxIoU.toFixed(2)} ± {row.msMaxIoUCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.smallRecall5.toFixed(2)} ± {row.smallRecall5CI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{(row.healthyFPR * 100).toFixed(1)}% ± {(row.healthyFPRCI * 100).toFixed(1)}%</td>
                    <td className="p-2.5 font-mono">{(row.stressFPR * 100).toFixed(1)}% ± {(row.stressFPRCI * 100).toFixed(1)}%</td>
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

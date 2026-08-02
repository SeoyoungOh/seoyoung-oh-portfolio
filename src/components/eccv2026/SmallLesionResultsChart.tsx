import React, { useState, useEffect, useRef } from 'react';
import { Target, ChevronDown, ChevronUp } from 'lucide-react';

interface MethodData {
  method: string;
  bratsRecall5: number;
  bratsRecall5CI: number;
  bratsTop1Dice: number;
  bratsTop1DiceCI: number;
  bratsCalibratedRecall: number;
  bratsCalibratedRecallCI: number;
  msRecall5: number;
  msRecall5CI: number;
  msTop1Dice: number;
  msTop1DiceCI: number;
  msCalibratedRecall: number;
  msCalibratedRecallCI: number;
}

const data: MethodData[] = [
  {
    method: "AE-UNet",
    bratsRecall5: 0.38,
    bratsRecall5CI: 0.02,
    bratsTop1Dice: 0.12,
    bratsTop1DiceCI: 0.01,
    bratsCalibratedRecall: 0.34,
    bratsCalibratedRecallCI: 0.02,
    msRecall5: 0.29,
    msRecall5CI: 0.02,
    msTop1Dice: 0.08,
    msTop1DiceCI: 0.01,
    msCalibratedRecall: 0.25,
    msCalibratedRecallCI: 0.02
  },
  {
    method: "DDPM",
    bratsRecall5: 0.44,
    bratsRecall5CI: 0.01,
    bratsTop1Dice: 0.17,
    bratsTop1DiceCI: 0.01,
    bratsCalibratedRecall: 0.39,
    bratsCalibratedRecallCI: 0.02,
    msRecall5: 0.38,
    msRecall5CI: 0.02,
    msTop1Dice: 0.12,
    msTop1DiceCI: 0.01,
    msCalibratedRecall: 0.32,
    msCalibratedRecallCI: 0.02
  },
  {
    method: "MDPS",
    bratsRecall5: 0.48,
    bratsRecall5CI: 0.01,
    bratsTop1Dice: 0.19,
    bratsTop1DiceCI: 0.02,
    bratsCalibratedRecall: 0.43,
    bratsCalibratedRecallCI: 0.02,
    msRecall5: 0.40,
    msRecall5CI: 0.02,
    msTop1Dice: 0.14,
    msTop1DiceCI: 0.01,
    msCalibratedRecall: 0.35,
    msCalibratedRecallCI: 0.02
  },
  {
    method: "ANDi",
    bratsRecall5: 0.49,
    bratsRecall5CI: 0.01,
    bratsTop1Dice: 0.19,
    bratsTop1DiceCI: 0.03,
    bratsCalibratedRecall: 0.45,
    bratsCalibratedRecallCI: 0.02,
    msRecall5: 0.41,
    msRecall5CI: 0.01,
    msTop1Dice: 0.15,
    msTop1DiceCI: 0.01,
    msCalibratedRecall: 0.36,
    msCalibratedRecallCI: 0.02
  },
  {
    method: "Ours — Full Model",
    bratsRecall5: 0.62,
    bratsRecall5CI: 0.01,
    bratsTop1Dice: 0.31,
    bratsTop1DiceCI: 0.02,
    bratsCalibratedRecall: 0.60,
    bratsCalibratedRecallCI: 0.02,
    msRecall5: 0.56,
    msRecall5CI: 0.01,
    msTop1Dice: 0.26,
    msTop1DiceCI: 0.01,
    msCalibratedRecall: 0.53,
    msCalibratedRecallCI: 0.02
  }
];

export const SmallLesionResultsChart: React.FC = () => {
  const [dataset, setDataset] = useState<'brats' | 'ms'>('brats');
  const [metric, setMetric] = useState<'recall5' | 'top1Dice' | 'calibratedRecall'>('recall5');
  const [showTable, setShowTable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getValueAndCI = (item: MethodData) => {
    if (dataset === 'brats') {
      if (metric === 'recall5') return { val: item.bratsRecall5, ci: item.bratsRecall5CI };
      if (metric === 'top1Dice') return { val: item.bratsTop1Dice, ci: item.bratsTop1DiceCI };
      return { val: item.bratsCalibratedRecall, ci: item.bratsCalibratedRecallCI };
    } else {
      if (metric === 'recall5') return { val: item.msRecall5, ci: item.msRecall5CI };
      if (metric === 'top1Dice') return { val: item.msTop1Dice, ci: item.msTop1DiceCI };
      return { val: item.msCalibratedRecall, ci: item.msCalibratedRecallCI };
    }
  };

  const maxPossibleVal = 0.7;

  return (
    <div ref={containerRef} className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9DDEE] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-1">
            <Target className="w-4 h-4 text-[#9091DF]" />
            <span>INTERACTIVE COMPARISON</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#20243C]">
            Small-Lesion Sensitivity Analysis
          </h3>
        </div>

        {/* Dataset Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F8F9FE] rounded-xl border border-[#D9DDEE]">
          <button
            onClick={() => setDataset('brats')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              dataset === 'brats'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            BraTS (&lt;5k voxels)
          </button>
          <button
            onClick={() => setDataset('ms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              dataset === 'ms'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            MSLesSeg (&lt;300 voxels)
          </button>
        </div>
      </div>

      {/* Metric Selectors */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono font-bold text-[#626A7C] uppercase mr-2">Metric:</span>
        <button
          onClick={() => setMetric('recall5')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            metric === 'recall5'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          Recall@5%
        </button>
        <button
          onClick={() => setMetric('top1Dice')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            metric === 'top1Dice'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          Top-1% Dice
        </button>
        <button
          onClick={() => setMetric('calibratedRecall')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            metric === 'calibratedRecall'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          Calibrated Recall
        </button>
      </div>

      {/* Bar Chart Area */}
      <div className="space-y-3 pt-2">
        {data.map((item) => {
          const { val, ci } = getValueAndCI(item);
          const pct = Math.min(100, Math.max(0, (val / maxPossibleVal) * 100));
          const isFullModel = item.method === "Ours — Full Model";

          let barColor = "bg-[#CBD5E1]";
          if (isFullModel) barColor = "bg-[#9091DF]";

          return (
            <div key={item.method} className="group relative">
              <div className="flex items-center justify-between text-xs font-semibold text-[#20243C] mb-1">
                <span className={isFullModel ? "font-black text-[#20243C]" : "text-[#626A7C]"}>
                  {item.method}
                </span>
                <span className="font-mono font-bold">
                  {val.toFixed(2)} <span className="text-[10px] font-normal text-[#626A7C]">± {ci.toFixed(2)}</span>
                </span>
              </div>
              
              <div className="h-6 w-full bg-[#F1F5F9] rounded-lg overflow-hidden relative border border-[#E2E8F0] flex items-center">
                <div
                  className={`h-full ${barColor} transition-all duration-900 ease-out rounded-lg flex items-center justify-end pr-2`}
                  style={{ width: isVisible ? `${pct}%` : '0%' }}
                >
                  {pct > 15 && (
                    <span className="text-[10px] font-mono font-bold text-[#FFFFFF] shadow-2xs">
                      {val.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity absolute right-0 -top-8 bg-[#20243C] text-[#FBFBFF] text-[10px] font-mono py-1 px-2.5 rounded-md pointer-events-none z-10 shadow-md">
                {item.method}: {val.toFixed(2)} (95% CI: ±{ci.toFixed(2)})
              </div>
            </div>
          );
        })}
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
                  <th className="p-2.5">Method</th>
                  <th className="p-2.5">BraTS Recall@5%</th>
                  <th className="p-2.5">BraTS Top-1% Dice</th>
                  <th className="p-2.5">BraTS Cal. Recall</th>
                  <th className="p-2.5">MS Recall@5%</th>
                  <th className="p-2.5">MS Top-1% Dice</th>
                  <th className="p-2.5">MS Cal. Recall</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-medium">
                {data.map((row) => (
                  <tr key={row.method} className={row.method.startsWith('Ours') ? 'bg-[#A0A1F8]/10 font-bold' : ''}>
                    <td className="p-2.5">{row.method}</td>
                    <td className="p-2.5 font-mono">{row.bratsRecall5.toFixed(2)} ± {row.bratsRecall5CI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.bratsTop1Dice.toFixed(2)} ± {row.bratsTop1DiceCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.bratsCalibratedRecall.toFixed(2)} ± {row.bratsCalibratedRecallCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.msRecall5.toFixed(2)} ± {row.msRecall5CI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.msTop1Dice.toFixed(2)} ± {row.msTop1DiceCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.msCalibratedRecall.toFixed(2)} ± {row.msCalibratedRecallCI.toFixed(2)}</td>
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

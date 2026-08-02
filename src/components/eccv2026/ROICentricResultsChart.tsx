import React, { useState, useEffect, useRef } from 'react';
import { Layers, ChevronDown, ChevronUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MethodROIRecord {
  method: string;
  roiConc: number;
  roiConcCI: number;
  relRoiConc: number;
  relRoiConcCI: number;
  fpNonROI: number;
  fpNonROICI: number;
  scoreIQR: number;
  scoreIQRCI: number;
}

type RegimeKey = 'adni' | 'pulseWhole' | 'pulseBs' | 'pulseFa';

const regimeData: Record<RegimeKey, MethodROIRecord[]> = {
  adni: [
    { method: "AE-UNet", roiConc: 0.51, roiConcCI: 0.01, relRoiConc: 0.45, relRoiConcCI: 0.02, fpNonROI: 0.25, fpNonROICI: 0.01, scoreIQR: 0.28, scoreIQRCI: 0.01 },
    { method: "DDPM", roiConc: 0.56, roiConcCI: 0.01, relRoiConc: 0.50, relRoiConcCI: 0.02, fpNonROI: 0.18, fpNonROICI: 0.01, scoreIQR: 0.27, scoreIQRCI: 0.01 },
    { method: "ANDi", roiConc: 0.63, roiConcCI: 0.01, relRoiConc: 0.57, relRoiConcCI: 0.02, fpNonROI: 0.14, fpNonROICI: 0.01, scoreIQR: 0.23, scoreIQRCI: 0.01 },
    { method: "Ours — Full Model", roiConc: 0.72, roiConcCI: 0.01, relRoiConc: 0.66, relRoiConcCI: 0.02, fpNonROI: 0.09, fpNonROICI: 0.01, scoreIQR: 0.20, scoreIQRCI: 0.02 }
  ],
  pulseWhole: [
    { method: "AE-UNet", roiConc: 0.34, roiConcCI: 0.02, relRoiConc: 0.28, relRoiConcCI: 0.02, fpNonROI: 0.40, fpNonROICI: 0.01, scoreIQR: 0.51, scoreIQRCI: 0.03 },
    { method: "DDPM", roiConc: 0.38, roiConcCI: 0.02, relRoiConc: 0.32, relRoiConcCI: 0.02, fpNonROI: 0.35, fpNonROICI: 0.01, scoreIQR: 0.48, scoreIQRCI: 0.02 },
    { method: "ANDi", roiConc: 0.42, roiConcCI: 0.03, relRoiConc: 0.36, relRoiConcCI: 0.02, fpNonROI: 0.31, fpNonROICI: 0.02, scoreIQR: 0.44, scoreIQRCI: 0.02 },
    { method: "Ours — Full Model", roiConc: 0.53, roiConcCI: 0.02, relRoiConc: 0.47, relRoiConcCI: 0.02, fpNonROI: 0.22, fpNonROICI: 0.01, scoreIQR: 0.34, scoreIQRCI: 0.01 }
  ],
  pulseBs: [
    { method: "AE-UNet", roiConc: 0.35, roiConcCI: 0.01, relRoiConc: 0.30, relRoiConcCI: 0.02, fpNonROI: 0.39, fpNonROICI: 0.02, scoreIQR: 0.50, scoreIQRCI: 0.01 },
    { method: "DDPM", roiConc: 0.40, roiConcCI: 0.02, relRoiConc: 0.35, relRoiConcCI: 0.02, fpNonROI: 0.34, fpNonROICI: 0.01, scoreIQR: 0.45, scoreIQRCI: 0.02 },
    { method: "ANDi", roiConc: 0.50, roiConcCI: 0.02, relRoiConc: 0.44, relRoiConcCI: 0.02, fpNonROI: 0.27, fpNonROICI: 0.02, scoreIQR: 0.40, scoreIQRCI: 0.02 },
    { method: "Ours — Full Model", roiConc: 0.62, roiConcCI: 0.02, relRoiConc: 0.57, relRoiConcCI: 0.02, fpNonROI: 0.18, fpNonROICI: 0.01, scoreIQR: 0.30, scoreIQRCI: 0.01 }
  ],
  pulseFa: [
    { method: "AE-UNet", roiConc: 0.37, roiConcCI: 0.02, relRoiConc: 0.32, relRoiConcCI: 0.02, fpNonROI: 0.38, fpNonROICI: 0.01, scoreIQR: 0.49, scoreIQRCI: 0.01 },
    { method: "DDPM", roiConc: 0.41, roiConcCI: 0.01, relRoiConc: 0.36, relRoiConcCI: 0.02, fpNonROI: 0.33, fpNonROICI: 0.02, scoreIQR: 0.44, scoreIQRCI: 0.01 },
    { method: "ANDi", roiConc: 0.51, roiConcCI: 0.01, relRoiConc: 0.46, relRoiConcCI: 0.02, fpNonROI: 0.26, fpNonROICI: 0.02, scoreIQR: 0.38, scoreIQRCI: 0.01 },
    { method: "Ours — Full Model", roiConc: 0.65, roiConcCI: 0.01, relRoiConc: 0.60, relRoiConcCI: 0.01, fpNonROI: 0.16, fpNonROICI: 0.01, scoreIQR: 0.29, scoreIQRCI: 0.01 }
  ]
};

export const ROICentricResultsChart: React.FC = () => {
  const [regime, setRegime] = useState<RegimeKey>('adni');
  const [metric, setMetric] = useState<'roiConc' | 'relRoiConc' | 'fpNonROI' | 'scoreIQR'>('roiConc');
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

  const getMetricDetails = (item: MethodROIRecord) => {
    if (metric === 'roiConc') return { val: item.roiConc, ci: item.roiConcCI, higherIsBetter: true };
    if (metric === 'relRoiConc') return { val: item.relRoiConc, ci: item.relRoiConcCI, higherIsBetter: true };
    if (metric === 'fpNonROI') return { val: item.fpNonROI, ci: item.fpNonROICI, higherIsBetter: false };
    return { val: item.scoreIQR, ci: item.scoreIQRCI, higherIsBetter: false };
  };

  const currentList = regimeData[regime];

  return (
    <div ref={containerRef} className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D9DDEE] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-1">
            <Layers className="w-4 h-4 text-[#9091DF]" />
            <span>INTERACTIVE COMPARISON</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#20243C]">
            ROI-Centric Evaluation Regimes
          </h3>
        </div>

        {/* Regime Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F8F9FE] rounded-xl border border-[#D9DDEE]">
          <button
            onClick={() => setRegime('adni')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              regime === 'adni'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            ADNI
          </button>
          <button
            onClick={() => setRegime('pulseWhole')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              regime === 'pulseWhole'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            PULSE Whole-Brain
          </button>
          <button
            onClick={() => setRegime('pulseBs')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              regime === 'pulseBs'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            PULSE Brainstem T1w
          </button>
          <button
            onClick={() => setRegime('pulseFa')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              regime === 'pulseFa'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            PULSE T1w + FA
          </button>
        </div>
      </div>

      {/* Metric Selector Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono font-bold text-[#626A7C] uppercase mr-2">Metric:</span>
        <button
          onClick={() => setMetric('roiConc')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer inline-flex items-center gap-1 ${
            metric === 'roiConc'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          <span>ROI Conc.</span>
          <ArrowUpRight className="w-3 h-3 text-emerald-600" />
        </button>
        <button
          onClick={() => setMetric('relRoiConc')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer inline-flex items-center gap-1 ${
            metric === 'relRoiConc'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          <span>Reliable ROI Conc.</span>
          <ArrowUpRight className="w-3 h-3 text-emerald-600" />
        </button>
        <button
          onClick={() => setMetric('fpNonROI')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer inline-flex items-center gap-1 ${
            metric === 'fpNonROI'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          <span>FP @ Non-ROI</span>
          <ArrowDownRight className="w-3 h-3 text-blue-600" />
        </button>
        <button
          onClick={() => setMetric('scoreIQR')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer inline-flex items-center gap-1 ${
            metric === 'scoreIQR'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          <span>Score IQR</span>
          <ArrowDownRight className="w-3 h-3 text-blue-600" />
        </button>
      </div>

      {/* Bar List */}
      <div className="space-y-3 pt-2">
        {currentList.map((item) => {
          const { val, ci, higherIsBetter } = getMetricDetails(item);
          const pct = Math.min(100, Math.max(0, (val / 0.8) * 100));
          const isOurs = item.method.startsWith("Ours");

          let barColor = isOurs ? "bg-[#9091DF]" : "bg-[#CBD5E1]";

          return (
            <div key={item.method} className="group relative">
              <div className="flex items-center justify-between text-xs font-semibold text-[#20243C] mb-1">
                <span className={isOurs ? "font-black text-[#20243C]" : "text-[#626A7C]"}>
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
                {item.method}: {val.toFixed(2)} (95% CI: ±{ci.toFixed(2)}) [{higherIsBetter ? 'Higher is better' : 'Lower is better'}]
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
                  <th className="p-2.5">ROI Conc. (↑)</th>
                  <th className="p-2.5">Reliable ROI Conc. (↑)</th>
                  <th className="p-2.5">FP @ Non-ROI (↓)</th>
                  <th className="p-2.5">Score IQR (↓)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-medium">
                {currentList.map((row) => (
                  <tr key={row.method} className={row.method.startsWith('Ours') ? 'bg-[#A0A1F8]/10 font-bold' : ''}>
                    <td className="p-2.5">{row.method}</td>
                    <td className="p-2.5 font-mono">{row.roiConc.toFixed(2)} ± {row.roiConcCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.relRoiConc.toFixed(2)} ± {row.relRoiConcCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.fpNonROI.toFixed(2)} ± {row.fpNonROICI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.scoreIQR.toFixed(2)} ± {row.scoreIQRCI.toFixed(2)}</td>
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

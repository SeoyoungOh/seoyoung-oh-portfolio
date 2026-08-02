import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, ChevronDown, ChevronUp } from 'lucide-react';

interface MethodData {
  method: string;
  bratsMaxIoU: number;
  bratsMaxIoUCI: number;
  bratsPixelAUPRC: number;
  bratsPixelAUPRCCI: number;
  bratsRecall10: number;
  bratsRecall10CI: number;
  msMaxIoU: number;
  msMaxIoUCI: number;
  msPixelAUPRC: number;
  msPixelAUPRCCI: number;
  msRecall10: number;
  msRecall10CI: number;
}

const data: MethodData[] = [
  {
    method: "AE-UNet",
    bratsMaxIoU: 0.27,
    bratsMaxIoUCI: 0.01,
    bratsPixelAUPRC: 0.40,
    bratsPixelAUPRCCI: 0.01,
    bratsRecall10: 0.44,
    bratsRecall10CI: 0.02,
    msMaxIoU: 0.15,
    msMaxIoUCI: 0.02,
    msPixelAUPRC: 0.23,
    msPixelAUPRCCI: 0.01,
    msRecall10: 0.40,
    msRecall10CI: 0.02
  },
  {
    method: "PaDiM",
    bratsMaxIoU: 0.29,
    bratsMaxIoUCI: 0.02,
    bratsPixelAUPRC: 0.46,
    bratsPixelAUPRCCI: 0.01,
    bratsRecall10: 0.48,
    bratsRecall10CI: 0.02,
    msMaxIoU: 0.20,
    msMaxIoUCI: 0.01,
    msPixelAUPRC: 0.29,
    msPixelAUPRCCI: 0.02,
    msRecall10: 0.48,
    msRecall10CI: 0.01
  },
  {
    method: "DDPM",
    bratsMaxIoU: 0.28,
    bratsMaxIoUCI: 0.02,
    bratsPixelAUPRC: 0.45,
    bratsPixelAUPRCCI: 0.02,
    bratsRecall10: 0.49,
    bratsRecall10CI: 0.02,
    msMaxIoU: 0.19,
    msMaxIoUCI: 0.02,
    msPixelAUPRC: 0.30,
    msPixelAUPRCCI: 0.02,
    msRecall10: 0.47,
    msRecall10CI: 0.02
  },
  {
    method: "MDPS",
    bratsMaxIoU: 0.37,
    bratsMaxIoUCI: 0.01,
    bratsPixelAUPRC: 0.50,
    bratsPixelAUPRCCI: 0.02,
    bratsRecall10: 0.56,
    bratsRecall10CI: 0.02,
    msMaxIoU: 0.26,
    msMaxIoUCI: 0.02,
    msPixelAUPRC: 0.37,
    msPixelAUPRCCI: 0.01,
    msRecall10: 0.52,
    msRecall10CI: 0.01
  },
  {
    method: "ANDi",
    bratsMaxIoU: 0.39,
    bratsMaxIoUCI: 0.01,
    bratsPixelAUPRC: 0.52,
    bratsPixelAUPRCCI: 0.02,
    bratsRecall10: 0.58,
    bratsRecall10CI: 0.01,
    msMaxIoU: 0.28,
    msMaxIoUCI: 0.02,
    msPixelAUPRC: 0.39,
    msPixelAUPRCCI: 0.03,
    msRecall10: 0.54,
    msRecall10CI: 0.02
  },
  {
    method: "Ours — Multiscale Only",
    bratsMaxIoU: 0.41,
    bratsMaxIoUCI: 0.02,
    bratsPixelAUPRC: 0.55,
    bratsPixelAUPRCCI: 0.01,
    bratsRecall10: 0.62,
    bratsRecall10CI: 0.01,
    msMaxIoU: 0.30,
    msMaxIoUCI: 0.01,
    msPixelAUPRC: 0.42,
    msPixelAUPRCCI: 0.01,
    msRecall10: 0.57,
    msRecall10CI: 0.02
  },
  {
    method: "Ours — Full Model",
    bratsMaxIoU: 0.46,
    bratsMaxIoUCI: 0.01,
    bratsPixelAUPRC: 0.61,
    bratsPixelAUPRCCI: 0.01,
    bratsRecall10: 0.69,
    bratsRecall10CI: 0.02,
    msMaxIoU: 0.35,
    msMaxIoUCI: 0.01,
    msPixelAUPRC: 0.48,
    msPixelAUPRCCI: 0.02,
    msRecall10: 0.65,
    msRecall10CI: 0.02
  }
];

export const VisibleLesionResultsChart: React.FC = () => {
  const [dataset, setDataset] = useState<'brats' | 'ms'>('brats');
  const [metric, setMetric] = useState<'maxIoU' | 'pixelAUPRC' | 'recall10'>('pixelAUPRC');
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
      if (metric === 'maxIoU') return { val: item.bratsMaxIoU, ci: item.bratsMaxIoUCI };
      if (metric === 'pixelAUPRC') return { val: item.bratsPixelAUPRC, ci: item.bratsPixelAUPRCCI };
      return { val: item.bratsRecall10, ci: item.bratsRecall10CI };
    } else {
      if (metric === 'maxIoU') return { val: item.msMaxIoU, ci: item.msMaxIoUCI };
      if (metric === 'pixelAUPRC') return { val: item.msPixelAUPRC, ci: item.msPixelAUPRCCI };
      return { val: item.msRecall10, ci: item.msRecall10CI };
    }
  };

  const maxPossibleVal = 0.8; // Scale max for horizontal bars

  return (
    <div ref={containerRef} className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9DDEE] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-1">
            <BarChart3 className="w-4 h-4 text-[#9091DF]" />
            <span>INTERACTIVE COMPARISON</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#20243C]">
            Visible-Lesion Localization Benchmarks
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
            aria-label="Select BraTS Dataset"
          >
            BraTS
          </button>
          <button
            onClick={() => setDataset('ms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              dataset === 'ms'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
            aria-label="Select MSLesSeg Dataset"
          >
            MSLesSeg
          </button>
        </div>
      </div>

      {/* Metric Selectors */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono font-bold text-[#626A7C] uppercase mr-2">Metric:</span>
        <button
          onClick={() => setMetric('pixelAUPRC')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            metric === 'pixelAUPRC'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          Pixel-AUPRC
        </button>
        <button
          onClick={() => setMetric('maxIoU')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            metric === 'maxIoU'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          Max-IoU
        </button>
        <button
          onClick={() => setMetric('recall10')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            metric === 'recall10'
              ? 'bg-[#A0A1F8]/20 border-[#9091DF] text-[#20243C]'
              : 'bg-[#F8F9FE] border-[#D9DDEE] text-[#626A7C] hover:text-[#20243C]'
          }`}
        >
          Recall@10%
        </button>
      </div>

      {/* Bar Chart Area */}
      <div className="space-y-3 pt-2">
        {data.map((item) => {
          const { val, ci } = getValueAndCI(item);
          const pct = Math.min(100, Math.max(0, (val / maxPossibleVal) * 100));
          const isFullModel = item.method === "Ours — Full Model";
          const isMultiscale = item.method === "Ours — Multiscale Only";

          let barColor = "bg-[#CBD5E1]"; // baseline
          if (isFullModel) barColor = "bg-[#9091DF]";
          else if (isMultiscale) barColor = "bg-[#A0A1F8]";

          return (
            <div key={item.method} className="group relative">
              <div className="flex items-center justify-between text-xs font-semibold text-[#20243C] mb-1">
                <span className={isFullModel ? "font-black text-[#20243C]" : isMultiscale ? "font-bold text-[#20243C]" : "text-[#626A7C]"}>
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

              {/* Tooltip on hover/focus */}
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
                  <th className="p-2.5">BraTS Max-IoU</th>
                  <th className="p-2.5">BraTS Pixel-AUPRC</th>
                  <th className="p-2.5">BraTS Recall@10%</th>
                  <th className="p-2.5">MS Max-IoU</th>
                  <th className="p-2.5">MS Pixel-AUPRC</th>
                  <th className="p-2.5">MS Recall@10%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-medium">
                {data.map((row) => (
                  <tr key={row.method} className={row.method.startsWith('Ours') ? 'bg-[#A0A1F8]/10 font-bold' : ''}>
                    <td className="p-2.5">{row.method}</td>
                    <td className="p-2.5 font-mono">{row.bratsMaxIoU.toFixed(2)} ± {row.bratsMaxIoUCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.bratsPixelAUPRC.toFixed(2)} ± {row.bratsPixelAUPRCCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.bratsRecall10.toFixed(2)} ± {row.bratsRecall10CI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.msMaxIoU.toFixed(2)} ± {row.msMaxIoUCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.msPixelAUPRC.toFixed(2)} ± {row.msPixelAUPRCCI.toFixed(2)}</td>
                    <td className="p-2.5 font-mono">{row.msRecall10.toFixed(2)} ± {row.msRecall10CI.toFixed(2)}</td>
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

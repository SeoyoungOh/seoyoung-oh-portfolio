import React, { useState, useEffect, useRef } from 'react';
import { Table, ChevronDown, ChevronUp, Layers, Cpu } from 'lucide-react';

export interface DecoderDataPoint {
  method: string;
  dice: number;
  diceCI: number;
  paramsM: number;
  isProposed?: boolean;
}

export const decoderEfficiencyData: DecoderDataPoint[] = [
  { method: '3D U-Net', dice: 0.812, diceCI: 0.018, paramsM: 31.0 },
  { method: 'V-Net', dice: 0.825, diceCI: 0.015, paramsM: 45.6 },
  { method: 'Attention U-Net', dice: 0.841, diceCI: 0.014, paramsM: 34.8 },
  { method: '3D TransUNet', dice: 0.858, diceCI: 0.012, paramsM: 105.2 },
  { method: 'N-DecoNet (Proposed)', dice: 0.852, diceCI: 0.011, paramsM: 14.2, isProposed: true },
];

export const DecoderEfficiencyChart: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'dice' | 'params'>('dice');
  const [showTable, setShowTable] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<{
    method: string;
    metric: string;
    valStr: string;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasEntered) {
          setHasEntered(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasEntered]);

  useEffect(() => {
    if (!hasEntered) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAnimProgress(1);
      return;
    }

    let startTime: number | null = null;
    const duration = 850;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimProgress(eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasEntered, activeMetric]);

  const maxVal = activeMetric === 'dice' ? 1.0 : 120.0;

  return (
    <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6" ref={containerRef}>
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2 flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#A0A1F8]" />
          <span>INTERACTIVE DECODER BENCHMARK</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
          Decoder Architectural Efficiency vs. Segmentation Fidelity
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] mt-1 font-medium">
          Benchmarking segmentation accuracy (Dice Similarity Coefficient) against decoder parameter footprint under limited annotations.
        </p>
      </div>

      {/* Mode Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9DDEE] pb-3" role="tablist">
        <div className="flex items-center gap-2">
          <button
            role="tab"
            aria-selected={activeMetric === 'dice'}
            onClick={() => {
              setActiveMetric('dice');
              setHoveredPoint(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] ${
              activeMetric === 'dice'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'bg-[#F4F5FB] text-[#626A7C] hover:bg-[#E8EBF8] hover:text-[#20243C]'
            }`}
          >
            Dice Similarity (mIoU / Accuracy)
          </button>

          <button
            role="tab"
            aria-selected={activeMetric === 'params'}
            onClick={() => {
              setActiveMetric('params');
              setHoveredPoint(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] flex items-center gap-1.5 ${
              activeMetric === 'params'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'bg-[#F4F5FB] text-[#626A7C] hover:bg-[#E8EBF8] hover:text-[#20243C]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Parameter Count (Millions)</span>
          </button>
        </div>

        {/* Legend / Info Badge */}
        {hoveredPoint ? (
          <div className="text-xs font-mono font-bold text-[#20243C] bg-[#A0A1F8]/20 px-3 py-1 rounded-md border border-[#A0A1F8]/40">
            {hoveredPoint.method} • <span className="text-[#626A7C]">{hoveredPoint.metric}:</span>{' '}
            <span className="text-[#20243C]">{hoveredPoint.valStr}</span>
          </div>
        ) : (
          <div className="text-xs text-[#626A7C] italic">
            Hover or focus bars to inspect exact metrics & 95% CIs
          </div>
        )}
      </div>

      {/* Chart Canvas Area */}
      <div className="relative pt-6 pb-2">
        {/* Desktop Vertical Bar Chart */}
        <div className="hidden sm:block">
          <div className="relative h-[300px] w-full border-l border-b border-[#CBD5E1] pl-12 pr-4 pb-8 pt-4">
            {/* Y-Axis Gridlines */}
            {activeMetric === 'dice'
              ? [0.0, 0.2, 0.4, 0.6, 0.8, 1.0].map((val) => {
                  const bottomPct = (val / maxVal) * 100;
                  return (
                    <div key={val} className="absolute left-0 right-0 flex items-center" style={{ bottom: `${bottomPct}%` }}>
                      <span className="absolute -left-10 text-[11px] font-mono text-[#626A7C] w-8 text-right">
                        {val.toFixed(1)}
                      </span>
                      <div className="w-full border-b border-dashed border-[#E2E8F0]" />
                    </div>
                  );
                })
              : [0, 30, 60, 90, 120].map((val) => {
                  const bottomPct = (val / maxVal) * 100;
                  return (
                    <div key={val} className="absolute left-0 right-0 flex items-center" style={{ bottom: `${bottomPct}%` }}>
                      <span className="absolute -left-10 text-[11px] font-mono text-[#626A7C] w-8 text-right">
                        {val}M
                      </span>
                      <div className="w-full border-b border-dashed border-[#E2E8F0]" />
                    </div>
                  );
                })}

            {/* Bars */}
            <div className="relative h-full w-full flex items-end justify-between gap-4 z-10 pt-4">
              {decoderEfficiencyData.map((item) => {
                const isProposed = Boolean(item.isProposed);
                const rawVal = activeMetric === 'dice' ? item.dice : item.paramsM;
                const heightPct = (rawVal / maxVal) * 100 * animProgress;
                const valStr =
                  activeMetric === 'dice'
                    ? `${item.dice.toFixed(3)} ± ${item.diceCI.toFixed(3)}`
                    : `${item.paramsM.toFixed(1)}M parameters`;

                // CI error bar calculation for dice metric
                const ciTop = activeMetric === 'dice' ? ((item.dice + item.diceCI) / maxVal) * 100 * animProgress : 0;
                const ciBot = activeMetric === 'dice' ? ((item.dice - item.diceCI) / maxVal) * 100 * animProgress : 0;

                return (
                  <div key={item.method} className="flex-1 flex flex-col items-center h-full justify-end relative">
                    <div
                      tabIndex={0}
                      role="img"
                      aria-label={`${item.method} ${activeMetric === 'dice' ? 'Dice score' : 'Parameters'}: ${valStr}`}
                      onMouseEnter={() =>
                        setHoveredPoint({
                          method: item.method,
                          metric: activeMetric === 'dice' ? 'Dice Score' : 'Params',
                          valStr,
                        })
                      }
                      onMouseLeave={() => setHoveredPoint(null)}
                      onFocus={() =>
                        setHoveredPoint({
                          method: item.method,
                          metric: activeMetric === 'dice' ? 'Dice Score' : 'Params',
                          valStr,
                        })
                      }
                      onBlur={() => setHoveredPoint(null)}
                      style={{ height: `${heightPct}%` }}
                      className={`w-full max-w-[54px] relative rounded-t-lg transition-all cursor-pointer ${
                        isProposed
                          ? 'bg-[#20243C] hover:bg-[#2C3252] ring-2 ring-[#9091DF] shadow-sm'
                          : 'bg-[#64748B] hover:bg-[#475569]'
                      }`}
                    >
                      {/* Error bar line for Dice */}
                      {activeMetric === 'dice' && (
                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-2 border-t border-b border-[#FBFBFF] flex items-center justify-center pointer-events-none"
                          style={{
                            bottom: `${(ciBot / (heightPct || 1)) * 100}%`,
                            height: `${((ciTop - ciBot) / (heightPct || 1)) * 100}%`,
                          }}
                        >
                          <div className="w-[1px] bg-[#FBFBFF] h-full" />
                        </div>
                      )}

                      {/* Value label on top */}
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-[#20243C] whitespace-nowrap">
                        {activeMetric === 'dice' ? item.dice.toFixed(3) : `${item.paramsM}M`}
                      </span>

                      {isProposed && (
                        <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-wider bg-[#DFF8E1] text-[#20243C] px-1 rounded">
                          N-Deco
                        </span>
                      )}
                    </div>

                    {/* Method Label */}
                    <div className="mt-3 text-center">
                      <span
                        className={`text-[11px] font-bold block leading-tight ${
                          isProposed ? 'text-[#20243C] font-extrabold' : 'text-[#626A7C]'
                        }`}
                      >
                        {item.method}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block sm:hidden space-y-3 pt-2">
          {decoderEfficiencyData.map((item) => {
            const isProposed = Boolean(item.isProposed);
            const rawVal = activeMetric === 'dice' ? item.dice : item.paramsM;
            const widthPct = (rawVal / maxVal) * 100 * animProgress;
            const valStr =
              activeMetric === 'dice'
                ? `${item.dice.toFixed(3)} ± ${item.diceCI.toFixed(3)}`
                : `${item.paramsM.toFixed(1)}M params`;

            return (
              <div
                key={item.method}
                className={`p-3 rounded-xl border ${
                  isProposed ? 'bg-[#9091DF]/15 border-[#9091DF]' : 'bg-[#F8F9FE] border-[#E0E4F4]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold ${isProposed ? 'text-[#20243C]' : 'text-[#475569]'}`}>
                    {item.method}
                  </span>
                  {isProposed && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#20243C] text-[#FBFBFF] px-2 py-0.5 rounded-full">
                      Proposed
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-[#626A7C]">
                    <span>{activeMetric === 'dice' ? 'Dice DSC' : 'Parameters'}</span>
                    <span className="font-mono font-bold text-[#20243C]">{valStr}</span>
                  </div>
                  <div className="w-full bg-[#E2E8F0] h-3 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${widthPct}%` }}
                      className={`h-full rounded-full transition-all ${
                        isProposed ? 'bg-[#20243C]' : 'bg-[#64748B]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption & Takeaway */}
      <div className="space-y-3 pt-2 text-xs border-t border-[#E0E4F4]">
        <p className="text-[#20243C] font-semibold leading-relaxed">
          <strong className="text-[#20243C]">Benchmark Takeaway:</strong> N-DecoNet achieves competitive subcortical brainstem segmentation fidelity (DSC: 0.852 ± 0.011) while operating with only 14.2M decoder parameters — less than half the parameter footprint of standard 3D U-Net or Attention U-Net architectures.
        </p>
      </div>

      {/* Data Table Toggle */}
      <div>
        <button
          onClick={() => setShowTable(!showTable)}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#20243C] bg-[#F4F5FB] hover:bg-[#E8EBF8] px-4 py-2.5 rounded-xl border border-[#D9DDEE] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF]"
        >
          <Table className="w-4 h-4 text-[#9091DF]" />
          <span>{showTable ? 'Hide data table' : 'View data table'}</span>
          {showTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showTable && (
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#D9DDEE] bg-[#FFFFFF] p-4 shadow-2xs">
            <table className="w-full text-left text-xs text-[#20243C]">
              <caption className="sr-only">Decoder efficiency and performance comparison data table</caption>
              <thead>
                <tr className="border-b border-[#D9DDEE] bg-[#F8F9FE]">
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Architecture
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Dice Score (Mean ± 95% CI)
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Decoder Params (M)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {decoderEfficiencyData.map((row) => (
                  <tr
                    key={row.method}
                    className={row.isProposed ? 'bg-[#9091DF]/10 font-bold' : ''}
                  >
                    <td className="p-3 font-semibold flex items-center gap-2">
                      <span>{row.method}</span>
                      {row.isProposed && (
                        <span className="text-[10px] bg-[#20243C] text-[#FBFBFF] px-1.5 py-0.5 rounded font-mono uppercase">
                          Proposed
                        </span>
                      )}
                    </td>
                    <td className="p-3 font-mono">
                      {row.dice.toFixed(3)} ± {row.diceCI.toFixed(3)}
                    </td>
                    <td className="p-3 font-mono">{row.paramsM.toFixed(1)}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

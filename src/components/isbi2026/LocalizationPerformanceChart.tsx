import React, { useState, useEffect, useRef } from 'react';
import { Table, ChevronDown, ChevronUp, Info } from 'lucide-react';

export interface LocalizationDataPoint {
  method: string;
  dice: number;
  diceCI: number;
  lesionRecall: number;
  lesionRecallCI: number;
}

export const bratsLocalizationData: LocalizationDataPoint[] = [
  { method: 'ResNet-50 + Grad-CAM', dice: 0.49, diceCI: 0.02, lesionRecall: 0.54, lesionRecallCI: 0.02 },
  { method: 'ViT Attention Rollout', dice: 0.50, diceCI: 0.03, lesionRecall: 0.61, lesionRecallCI: 0.01 },
  { method: 'ViT + Grad-CAM', dice: 0.62, diceCI: 0.01, lesionRecall: 0.65, lesionRecallCI: 0.04 },
  { method: 'DINOv3 Attention Rollout', dice: 0.59, diceCI: 0.02, lesionRecall: 0.64, lesionRecallCI: 0.01 },
  { method: 'DINOv3 + Grad-CAM', dice: 0.67, diceCI: 0.01, lesionRecall: 0.72, lesionRecallCI: 0.02 },
  { method: 'GALA-Former', dice: 0.71, diceCI: 0.03, lesionRecall: 0.84, lesionRecallCI: 0.03 },
];

export const msLesSegLocalizationData: LocalizationDataPoint[] = [
  { method: 'ResNet-50 + Grad-CAM', dice: 0.46, diceCI: 0.03, lesionRecall: 0.52, lesionRecallCI: 0.01 },
  { method: 'ViT Attention Rollout', dice: 0.52, diceCI: 0.02, lesionRecall: 0.58, lesionRecallCI: 0.02 },
  { method: 'ViT + Grad-CAM', dice: 0.60, diceCI: 0.02, lesionRecall: 0.63, lesionRecallCI: 0.01 },
  { method: 'DINOv3 Attention Rollout', dice: 0.56, diceCI: 0.02, lesionRecall: 0.61, lesionRecallCI: 0.02 },
  { method: 'DINOv3 + Grad-CAM', dice: 0.65, diceCI: 0.01, lesionRecall: 0.68, lesionRecallCI: 0.01 },
  { method: 'GALA-Former', dice: 0.68, diceCI: 0.04, lesionRecall: 0.78, lesionRecallCI: 0.04 },
];

export const LocalizationPerformanceChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brats' | 'mslesseg'>('brats');
  const [showTable, setShowTable] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<{
    method: string;
    metric: string;
    val: number;
    ci: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasEntered) {
          setHasEntered(true);
        }
      },
      { threshold: 0.25 }
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
    const duration = 900;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimProgress(eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasEntered, activeTab]);

  const currentData = activeTab === 'brats' ? bratsLocalizationData : msLesSegLocalizationData;
  const maxY = 0.9;

  return (
    <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6" ref={containerRef}>
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
          INTERACTIVE PERFORMANCE VIEW
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
          Localization performance across BraTS and MSLesSeg
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#D9DDEE] pb-3" role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === 'brats'}
          aria-controls="panel-brats"
          id="tab-brats"
          onClick={() => {
            setActiveTab('brats');
            setHoveredPoint(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] ${
            activeTab === 'brats'
              ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
              : 'bg-[#F4F5FB] text-[#626A7C] hover:bg-[#E8EBF8] hover:text-[#20243C]'
          }`}
        >
          BraTS (Brain Tumors)
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'mslesseg'}
          aria-controls="panel-mslesseg"
          id="tab-mslesseg"
          onClick={() => {
            setActiveTab('mslesseg');
            setHoveredPoint(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] ${
            activeTab === 'mslesseg'
              ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
              : 'bg-[#F4F5FB] text-[#626A7C] hover:bg-[#E8EBF8] hover:text-[#20243C]'
          }`}
        >
          MSLesSeg (Multiple Sclerosis)
        </button>
      </div>

      {/* Legend & Hover Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#F8F9FE] p-3.5 rounded-xl border border-[#E0E4F4]">
        <div className="flex items-center gap-6 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-xs bg-[#20243C] inline-block border border-[#20243C]" />
            <span className="text-[#20243C]">Dice Score</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-xs bg-[#9091DF] inline-block border border-[#9091DF]" />
            <span className="text-[#20243C]">Lesion-wise Recall</span>
          </div>
        </div>

        {hoveredPoint ? (
          <div className="text-xs font-mono font-bold text-[#20243C] bg-[#A0A1F8]/20 px-3 py-1 rounded-md border border-[#A0A1F8]/40">
            {hoveredPoint.method} • <span className="text-[#626A7C]">{hoveredPoint.metric}:</span>{' '}
            <span className="text-[#20243C]">{hoveredPoint.val.toFixed(2)} ± {hoveredPoint.ci.toFixed(2)}</span>
          </div>
        ) : (
          <div className="text-xs text-[#626A7C] italic">
            Hover or focus bars to inspect exact metrics & 95% CIs
          </div>
        )}
      </div>

      {/* Chart Canvas Area */}
      <div className="relative pt-6 pb-2">
        {/* Desktop / Tablet Grouped Vertical Bar Chart */}
        <div className="hidden sm:block">
          <div className="relative h-[320px] w-full border-l border-b border-[#CBD5E1] pl-12 pr-4 pb-8 pt-4">
            {/* Y-Axis Gridlines & Labels */}
            {[0.0, 0.2, 0.4, 0.6, 0.8, 0.9].map((val) => {
              const bottomPct = (val / maxY) * 100;
              return (
                <div key={val} className="absolute left-0 right-0 flex items-center" style={{ bottom: `${bottomPct}%` }}>
                  <span className="absolute -left-10 text-[11px] font-mono text-[#626A7C] w-8 text-right">
                    {val.toFixed(1)}
                  </span>
                  <div className="w-full border-b border-dashed border-[#E2E8F0]" />
                </div>
              );
            })}

            {/* Bars Group Container */}
            <div className="relative h-full w-full flex items-end justify-between gap-2 z-10 pt-4">
              {currentData.map((item, idx) => {
                const isGala = item.method === 'GALA-Former';
                const diceHeight = (item.dice / maxY) * 100 * animProgress;
                const recallHeight = (item.lesionRecall / maxY) * 100 * animProgress;

                // CI error bar calculation
                const diceCiTop = ((item.dice + item.diceCI) / maxY) * 100 * animProgress;
                const diceCiBot = ((item.dice - item.diceCI) / maxY) * 100 * animProgress;
                const recallCiTop = ((item.lesionRecall + item.lesionRecallCI) / maxY) * 100 * animProgress;
                const recallCiBot = ((item.lesionRecall - item.lesionRecallCI) / maxY) * 100 * animProgress;

                return (
                  <div
                    key={item.method}
                    className={`flex-1 flex flex-col items-center h-full justify-end group/bar relative ${
                      isGala ? 'bg-[#9091DF]/10 rounded-t-xl px-1 pt-2 -mx-1' : ''
                    }`}
                  >
                    {/* Bar pair container */}
                    <div className="w-full flex items-end justify-center gap-1.5 h-full relative">
                      {/* Dice Bar */}
                      <div
                        tabIndex={0}
                        role="img"
                        aria-label={`${item.method} Dice score: ${item.dice} ± ${item.diceCI}`}
                        onMouseEnter={() =>
                          setHoveredPoint({ method: item.method, metric: 'Dice Score', val: item.dice, ci: item.diceCI })
                        }
                        onMouseLeave={() => setHoveredPoint(null)}
                        onFocus={() =>
                          setHoveredPoint({ method: item.method, metric: 'Dice Score', val: item.dice, ci: item.diceCI })
                        }
                        onBlur={() => setHoveredPoint(null)}
                        style={{ height: `${diceHeight}%` }}
                        className={`w-1/2 max-w-[28px] relative rounded-t-md transition-all cursor-pointer ${
                          isGala
                            ? 'bg-[#20243C] hover:bg-[#2C3252]'
                            : 'bg-[#64748B] hover:bg-[#475569]'
                        }`}
                      >
                        {/* Error Bar Line */}
                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-2 border-t border-b border-[#1E293B] flex items-center justify-center"
                          style={{
                            bottom: `${(diceCiBot / (diceHeight || 1)) * 100}%`,
                            height: `${((diceCiTop - diceCiBot) / (diceHeight || 1)) * 100}%`,
                          }}
                        >
                          <div className="w-[1px] bg-[#1E293B] h-full" />
                        </div>

                        {/* Value label on top */}
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-[#20243C]">
                          {item.dice.toFixed(2)}
                        </span>
                      </div>

                      {/* Lesion Recall Bar */}
                      <div
                        tabIndex={0}
                        role="img"
                        aria-label={`${item.method} Lesion-wise Recall: ${item.lesionRecall} ± ${item.lesionRecallCI}`}
                        onMouseEnter={() =>
                          setHoveredPoint({
                            method: item.method,
                            metric: 'Lesion-wise Recall',
                            val: item.lesionRecall,
                            ci: item.lesionRecallCI,
                          })
                        }
                        onMouseLeave={() => setHoveredPoint(null)}
                        onFocus={() =>
                          setHoveredPoint({
                            method: item.method,
                            metric: 'Lesion-wise Recall',
                            val: item.lesionRecall,
                            ci: item.lesionRecallCI,
                          })
                        }
                        onBlur={() => setHoveredPoint(null)}
                        style={{ height: `${recallHeight}%` }}
                        className={`w-1/2 max-w-[28px] relative rounded-t-md transition-all cursor-pointer ${
                          isGala
                            ? 'bg-[#9091DF] hover:bg-[#A0A1F8]'
                            : 'bg-[#94A3B8] hover:bg-[#CBD5E1]'
                        }`}
                      >
                        {/* Error Bar Line */}
                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-2 border-t border-b border-[#1E293B] flex items-center justify-center"
                          style={{
                            bottom: `${(recallCiBot / (recallHeight || 1)) * 100}%`,
                            height: `${((recallCiTop - recallCiBot) / (recallHeight || 1)) * 100}%`,
                          }}
                        >
                          <div className="w-[1px] bg-[#1E293B] h-full" />
                        </div>

                        {/* Value label on top */}
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-[#20243C]">
                          {item.lesionRecall.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Method Label */}
                    <div className="mt-3 text-center">
                      <span
                        className={`text-[11px] font-bold block leading-tight ${
                          isGala ? 'text-[#20243C] font-extrabold' : 'text-[#626A7C]'
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

        {/* Mobile Horizontal Stacked Bar Layout */}
        <div className="block sm:hidden space-y-4 pt-2">
          {currentData.map((item) => {
            const isGala = item.method === 'GALA-Former';
            const dicePct = (item.dice / maxY) * 100 * animProgress;
            const recallPct = (item.lesionRecall / maxY) * 100 * animProgress;

            return (
              <div
                key={item.method}
                className={`p-3 rounded-xl border ${
                  isGala
                    ? 'bg-[#9091DF]/15 border-[#9091DF]'
                    : 'bg-[#F8F9FE] border-[#E0E4F4]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${isGala ? 'text-[#20243C]' : 'text-[#475569]'}`}>
                    {item.method}
                  </span>
                  {isGala && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#20243C] text-[#FBFBFF] px-2 py-0.5 rounded-full">
                      Proposed
                    </span>
                  )}
                </div>

                {/* Dice Bar Horizontal */}
                <div className="space-y-1 mb-2">
                  <div className="flex justify-between text-[11px] font-semibold text-[#626A7C]">
                    <span>Dice Score</span>
                    <span className="font-mono font-bold text-[#20243C]">
                      {item.dice.toFixed(2)} ± {item.diceCI.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full bg-[#E2E8F0] h-3 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${dicePct}%` }}
                      className={`h-full rounded-full transition-all ${
                        isGala ? 'bg-[#20243C]' : 'bg-[#64748B]'
                      }`}
                    />
                  </div>
                </div>

                {/* Lesion Recall Bar Horizontal */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-[#626A7C]">
                    <span>Lesion-wise Recall</span>
                    <span className="font-mono font-bold text-[#20243C]">
                      {item.lesionRecall.toFixed(2)} ± {item.lesionRecallCI.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full bg-[#E2E8F0] h-3 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${recallPct}%` }}
                      className={`h-full rounded-full transition-all ${
                        isGala ? 'bg-[#9091DF]' : 'bg-[#94A3B8]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption & Interpretation */}
      <div className="space-y-3 pt-2 text-xs border-t border-[#E0E4F4]">
        <p className="text-[#20243C] font-semibold leading-relaxed">
          <strong className="text-[#20243C]">Caption:</strong> GALA-Former consistently improves Dice and lesion-wise recall across visible tumor and small-lesion settings. Values are mean ± 95% confidence intervals over five repeated experiments.
        </p>
        <p className="text-[#626A7C] font-medium leading-relaxed bg-[#F4F5FB] p-3 rounded-xl border border-[#D9DDEE]">
          <strong className="text-[#20243C]">Interpretation:</strong> The largest gains appear in lesion-wise recall, suggesting that multi-map fusion retrieves disease evidence beyond only the most salient regions.
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
              <caption className="sr-only">
                Localization performance table for {activeTab === 'brats' ? 'BraTS' : 'MSLesSeg'}
              </caption>
              <thead>
                <tr className="border-b border-[#D9DDEE] bg-[#F8F9FE]">
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Method
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Dice Score (Mean ± 95% CI)
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Lesion-wise Recall (Mean ± 95% CI)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {currentData.map((row) => (
                  <tr
                    key={row.method}
                    className={row.method === 'GALA-Former' ? 'bg-[#9091DF]/10 font-bold' : ''}
                  >
                    <td className="p-3 font-semibold">{row.method}</td>
                    <td className="p-3 font-mono">
                      {row.dice.toFixed(2)} ± {row.diceCI.toFixed(2)}
                    </td>
                    <td className="p-3 font-mono">
                      {row.lesionRecall.toFixed(2)} ± {row.lesionRecallCI.toFixed(2)}
                    </td>
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

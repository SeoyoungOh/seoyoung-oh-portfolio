import React, { useState, useEffect, useRef } from 'react';
import { Table, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export interface ADNIDataPoint {
  method: string;
  deletion: number;
  deletionCI: number;
  insertion: number;
  insertionCI: number;
  hippocampalOverlap: number;
  hippocampalOverlapCI: number;
  amygdalarOverlap: number;
  amygdalarOverlapCI: number;
  hippocampalVolumeCorrelation: number;
  hippocampalVolumeCorrelationCI: number;
}

export const adniInterpretabilityData: ADNIDataPoint[] = [
  {
    method: 'ResNet-50 + Grad-CAM',
    deletion: 0.41,
    deletionCI: 0.01,
    insertion: 0.47,
    insertionCI: 0.05,
    hippocampalOverlap: 0.24,
    hippocampalOverlapCI: 0.01,
    amygdalarOverlap: 0.21,
    amygdalarOverlapCI: 0.01,
    hippocampalVolumeCorrelation: 0.28,
    hippocampalVolumeCorrelationCI: 0.02,
  },
  {
    method: 'ViT + Grad-CAM',
    deletion: 0.34,
    deletionCI: 0.05,
    insertion: 0.55,
    insertionCI: 0.02,
    hippocampalOverlap: 0.36,
    hippocampalOverlapCI: 0.01,
    amygdalarOverlap: 0.31,
    amygdalarOverlapCI: 0.01,
    hippocampalVolumeCorrelation: 0.42,
    hippocampalVolumeCorrelationCI: 0.03,
  },
  {
    method: 'DINOv3 + Grad-CAM',
    deletion: 0.32,
    deletionCI: 0.01,
    insertion: 0.57,
    insertionCI: 0.03,
    hippocampalOverlap: 0.42,
    hippocampalOverlapCI: 0.02,
    amygdalarOverlap: 0.38,
    amygdalarOverlapCI: 0.03,
    hippocampalVolumeCorrelation: 0.48,
    hippocampalVolumeCorrelationCI: 0.04,
  },
  {
    method: 'GALA-Former',
    deletion: 0.29,
    deletionCI: 0.05,
    insertion: 0.61,
    insertionCI: 0.01,
    hippocampalOverlap: 0.48,
    hippocampalOverlapCI: 0.05,
    amygdalarOverlap: 0.44,
    amygdalarOverlapCI: 0.02,
    hippocampalVolumeCorrelation: 0.52,
    hippocampalVolumeCorrelationCI: 0.01,
  },
];

export const ADNIInterpretabilityChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faithfulness' | 'anatomical'>('faithfulness');
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimProgress(eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasEntered, activeTab]);

  const maxY = 0.7;

  return (
    <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6" ref={containerRef}>
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2">
          INTERACTIVE ADNI RESULTS
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
          ADNI Faithfulness & Anatomical Plausibility
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#D9DDEE] pb-3" role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === 'faithfulness'}
          aria-controls="panel-faithfulness"
          id="tab-faithfulness"
          onClick={() => {
            setActiveTab('faithfulness');
            setHoveredPoint(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] ${
            activeTab === 'faithfulness'
              ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
              : 'bg-[#F4F5FB] text-[#626A7C] hover:bg-[#E8EBF8] hover:text-[#20243C]'
          }`}
        >
          Faithfulness (Deletion & Insertion)
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'anatomical'}
          aria-controls="panel-anatomical"
          id="tab-anatomical"
          onClick={() => {
            setActiveTab('anatomical');
            setHoveredPoint(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] ${
            activeTab === 'anatomical'
              ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
              : 'bg-[#F4F5FB] text-[#626A7C] hover:bg-[#E8EBF8] hover:text-[#20243C]'
          }`}
        >
          Anatomical Plausibility (ROIs & Correlation)
        </button>
      </div>

      {/* Legend & Direction Guidance */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#F8F9FE] p-3.5 rounded-xl border border-[#E0E4F4]">
        {activeTab === 'faithfulness' ? (
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-xs bg-[#64748B] inline-block border border-[#64748B]" />
              <span className="text-[#20243C]">Deletion Score</span>
              <span className="text-[10px] font-mono text-[#D97706] bg-[#FEF3C7] px-1.5 py-0.5 rounded border border-[#FCD34D]">
                Lower is better
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-xs bg-[#9091DF] inline-block border border-[#9091DF]" />
              <span className="text-[#20243C]">Insertion Score</span>
              <span className="text-[10px] font-mono text-[#059669] bg-[#D1FAE5] px-1.5 py-0.5 rounded border border-[#6EE7B7]">
                Higher is better
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-xs bg-[#20243C] inline-block" />
              <span className="text-[#20243C]">Hippocampal Overlap</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-xs bg-[#9091DF] inline-block" />
              <span className="text-[#20243C]">Amygdalar Overlap</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-xs bg-[#64748B] inline-block" />
              <span className="text-[#20243C]">Hippocampal Vol. Corr.</span>
            </div>
            <span className="text-[10px] font-mono text-[#059669] bg-[#D1FAE5] px-1.5 py-0.5 rounded border border-[#6EE7B7]">
              All metrics: Higher is better
            </span>
          </div>
        )}

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
        {/* Desktop / Tablet Vertical Bar Chart */}
        <div className="hidden sm:block">
          <div className="relative h-[320px] w-full border-l border-b border-[#CBD5E1] pl-12 pr-4 pb-8 pt-4">
            {/* Y-Axis Gridlines & Labels */}
            {[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7].map((val) => {
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
            <div className="relative h-full w-full flex items-end justify-between gap-3 z-10 pt-4">
              {adniInterpretabilityData.map((item) => {
                const isGala = item.method === 'GALA-Former';

                if (activeTab === 'faithfulness') {
                  const delH = (item.deletion / maxY) * 100 * animProgress;
                  const insH = (item.insertion / maxY) * 100 * animProgress;

                  const delCiTop = ((item.deletion + item.deletionCI) / maxY) * 100 * animProgress;
                  const delCiBot = ((item.deletion - item.deletionCI) / maxY) * 100 * animProgress;
                  const insCiTop = ((item.insertion + item.insertionCI) / maxY) * 100 * animProgress;
                  const insCiBot = ((item.insertion - item.insertionCI) / maxY) * 100 * animProgress;

                  return (
                    <div
                      key={item.method}
                      className={`flex-1 flex flex-col items-center h-full justify-end relative group/bar ${
                        isGala ? 'bg-[#9091DF]/10 rounded-t-xl px-1 pt-2 -mx-1' : ''
                      }`}
                    >
                      <div className="w-full flex items-end justify-center gap-2 h-full relative">
                        {/* Deletion Bar */}
                        <div
                          tabIndex={0}
                          role="img"
                          aria-label={`${item.method} Deletion Score: ${item.deletion} ± ${item.deletionCI} (lower is better)`}
                          onMouseEnter={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Deletion Score (lower is better)',
                              val: item.deletion,
                              ci: item.deletionCI,
                            })
                          }
                          onMouseLeave={() => setHoveredPoint(null)}
                          onFocus={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Deletion Score (lower is better)',
                              val: item.deletion,
                              ci: item.deletionCI,
                            })
                          }
                          onBlur={() => setHoveredPoint(null)}
                          style={{ height: `${delH}%` }}
                          className={`w-1/2 max-w-[32px] relative rounded-t-md transition-all cursor-pointer ${
                            isGala ? 'bg-[#475569] hover:bg-[#334155]' : 'bg-[#64748B] hover:bg-[#475569]'
                          }`}
                        >
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-2 border-t border-b border-[#1E293B] flex items-center justify-center"
                            style={{
                              bottom: `${(delCiBot / (delH || 1)) * 100}%`,
                              height: `${((delCiTop - delCiBot) / (delH || 1)) * 100}%`,
                            }}
                          >
                            <div className="w-[1px] bg-[#1E293B] h-full" />
                          </div>
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-[#20243C]">
                            {item.deletion.toFixed(2)}
                          </span>
                        </div>

                        {/* Insertion Bar */}
                        <div
                          tabIndex={0}
                          role="img"
                          aria-label={`${item.method} Insertion Score: ${item.insertion} ± ${item.insertionCI} (higher is better)`}
                          onMouseEnter={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Insertion Score (higher is better)',
                              val: item.insertion,
                              ci: item.insertionCI,
                            })
                          }
                          onMouseLeave={() => setHoveredPoint(null)}
                          onFocus={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Insertion Score (higher is better)',
                              val: item.insertion,
                              ci: item.insertionCI,
                            })
                          }
                          onBlur={() => setHoveredPoint(null)}
                          style={{ height: `${insH}%` }}
                          className={`w-1/2 max-w-[32px] relative rounded-t-md transition-all cursor-pointer ${
                            isGala ? 'bg-[#9091DF] hover:bg-[#A0A1F8]' : 'bg-[#94A3B8] hover:bg-[#CBD5E1]'
                          }`}
                        >
                          <div
                            className="absolute left-1/2 -translate-x-1/2 w-2 border-t border-b border-[#1E293B] flex items-center justify-center"
                            style={{
                              bottom: `${(insCiBot / (insH || 1)) * 100}%`,
                              height: `${((insCiTop - insCiBot) / (insH || 1)) * 100}%`,
                            }}
                          >
                            <div className="w-[1px] bg-[#1E293B] h-full" />
                          </div>
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-[#20243C]">
                            {item.insertion.toFixed(2)}
                          </span>
                        </div>
                      </div>

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
                } else {
                  // Anatomical Plausibility Tab
                  const hippoH = (item.hippocampalOverlap / maxY) * 100 * animProgress;
                  const amygH = (item.amygdalarOverlap / maxY) * 100 * animProgress;
                  const corrH = (item.hippocampalVolumeCorrelation / maxY) * 100 * animProgress;

                  return (
                    <div
                      key={item.method}
                      className={`flex-1 flex flex-col items-center h-full justify-end relative group/bar ${
                        isGala ? 'bg-[#9091DF]/10 rounded-t-xl px-1 pt-2 -mx-1' : ''
                      }`}
                    >
                      <div className="w-full flex items-end justify-center gap-1 h-full relative">
                        {/* Hippocampal Overlap */}
                        <div
                          tabIndex={0}
                          role="img"
                          aria-label={`${item.method} Hippocampal Overlap: ${item.hippocampalOverlap} ± ${item.hippocampalOverlapCI}`}
                          onMouseEnter={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Hippocampal Overlap',
                              val: item.hippocampalOverlap,
                              ci: item.hippocampalOverlapCI,
                            })
                          }
                          onMouseLeave={() => setHoveredPoint(null)}
                          onFocus={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Hippocampal Overlap',
                              val: item.hippocampalOverlap,
                              ci: item.hippocampalOverlapCI,
                            })
                          }
                          onBlur={() => setHoveredPoint(null)}
                          style={{ height: `${hippoH}%` }}
                          className={`w-1/3 max-w-[22px] relative rounded-t-md transition-all cursor-pointer ${
                            isGala ? 'bg-[#20243C]' : 'bg-[#475569]'
                          }`}
                        >
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-[#20243C]">
                            {item.hippocampalOverlap.toFixed(2)}
                          </span>
                        </div>

                        {/* Amygdalar Overlap */}
                        <div
                          tabIndex={0}
                          role="img"
                          aria-label={`${item.method} Amygdalar Overlap: ${item.amygdalarOverlap} ± ${item.amygdalarOverlapCI}`}
                          onMouseEnter={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Amygdalar Overlap',
                              val: item.amygdalarOverlap,
                              ci: item.amygdalarOverlapCI,
                            })
                          }
                          onMouseLeave={() => setHoveredPoint(null)}
                          onFocus={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Amygdalar Overlap',
                              val: item.amygdalarOverlap,
                              ci: item.amygdalarOverlapCI,
                            })
                          }
                          onBlur={() => setHoveredPoint(null)}
                          style={{ height: `${amygH}%` }}
                          className={`w-1/3 max-w-[22px] relative rounded-t-md transition-all cursor-pointer ${
                            isGala ? 'bg-[#9091DF]' : 'bg-[#94A3B8]'
                          }`}
                        >
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-[#20243C]">
                            {item.amygdalarOverlap.toFixed(2)}
                          </span>
                        </div>

                        {/* Hippocampal Volume Correlation */}
                        <div
                          tabIndex={0}
                          role="img"
                          aria-label={`${item.method} Hippocampal Vol Corr: ${item.hippocampalVolumeCorrelation} ± ${item.hippocampalVolumeCorrelationCI}`}
                          onMouseEnter={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Hippocampal Vol Corr',
                              val: item.hippocampalVolumeCorrelation,
                              ci: item.hippocampalVolumeCorrelationCI,
                            })
                          }
                          onMouseLeave={() => setHoveredPoint(null)}
                          onFocus={() =>
                            setHoveredPoint({
                              method: item.method,
                              metric: 'Hippocampal Vol Corr',
                              val: item.hippocampalVolumeCorrelation,
                              ci: item.hippocampalVolumeCorrelationCI,
                            })
                          }
                          onBlur={() => setHoveredPoint(null)}
                          style={{ height: `${corrH}%` }}
                          className={`w-1/3 max-w-[22px] relative rounded-t-md transition-all cursor-pointer ${
                            isGala ? 'bg-[#64748B]' : 'bg-[#CBD5E1]'
                          }`}
                        >
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-[#20243C]">
                            {item.hippocampalVolumeCorrelation.toFixed(2)}
                          </span>
                        </div>
                      </div>

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
                }
              })}
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Stacked Card Layout */}
        <div className="block sm:hidden space-y-4 pt-2">
          {adniInterpretabilityData.map((item) => {
            const isGala = item.method === 'GALA-Former';

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

                {activeTab === 'faithfulness' ? (
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-semibold text-[#626A7C]">
                        <span>Deletion Score (lower is better)</span>
                        <span className="font-mono font-bold text-[#20243C]">
                          {item.deletion.toFixed(2)} ± {item.deletionCI.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${(item.deletion / maxY) * 100 * animProgress}%` }}
                          className="h-full bg-[#64748B] rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-semibold text-[#626A7C]">
                        <span>Insertion Score (higher is better)</span>
                        <span className="font-mono font-bold text-[#20243C]">
                          {item.insertion.toFixed(2)} ± {item.insertionCI.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${(item.insertion / maxY) * 100 * animProgress}%` }}
                          className={`h-full rounded-full ${isGala ? 'bg-[#9091DF]' : 'bg-[#94A3B8]'}`}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-semibold text-[#626A7C]">
                        <span>Hippocampal Overlap</span>
                        <span className="font-mono font-bold text-[#20243C]">
                          {item.hippocampalOverlap.toFixed(2)} ± {item.hippocampalOverlapCI.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${(item.hippocampalOverlap / maxY) * 100 * animProgress}%` }}
                          className={`h-full rounded-full ${isGala ? 'bg-[#20243C]' : 'bg-[#475569]'}`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-semibold text-[#626A7C]">
                        <span>Amygdalar Overlap</span>
                        <span className="font-mono font-bold text-[#20243C]">
                          {item.amygdalarOverlap.toFixed(2)} ± {item.amygdalarOverlapCI.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${(item.amygdalarOverlap / maxY) * 100 * animProgress}%` }}
                          className={`h-full rounded-full ${isGala ? 'bg-[#9091DF]' : 'bg-[#94A3B8]'}`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-semibold text-[#626A7C]">
                        <span>Hippocampal Vol. Corr.</span>
                        <span className="font-mono font-bold text-[#20243C]">
                          {item.hippocampalVolumeCorrelation.toFixed(2)} ± {item.hippocampalVolumeCorrelationCI.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${(item.hippocampalVolumeCorrelation / maxY) * 100 * animProgress}%` }}
                          className="h-full bg-[#64748B] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption & Notes & Interpretation Boundaries */}
      <div className="space-y-3 pt-2 text-xs border-t border-[#E0E4F4]">
        <p className="text-[#20243C] font-semibold leading-relaxed">
          <strong className="text-[#20243C]">Caption:</strong> Representative single-cue baselines and GALA-Former on ADNI. Faithfulness tests whether selected regions influence the diagnostic prediction, while anatomical metrics assess alignment with atlas-defined medial-temporal structures.
        </p>

        <p className="text-[#626A7C] font-medium leading-relaxed italic">
          <strong className="text-[#20243C]">Note:</strong> Representative methods are displayed for readability. The full comparison is available in the paper.
        </p>

        <div className="bg-[#F4F5FB] p-3 rounded-xl border border-[#D9DDEE] flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-[#9091DF] shrink-0 mt-0.5" />
          <p className="text-[#20243C] font-semibold leading-relaxed">
            <strong>Interpretation Boundary:</strong> These measures support classifier faithfulness and anatomical plausibility. They do not represent voxel-wise Alzheimer’s disease segmentation or clinical validation.
          </p>
        </div>
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
                ADNI interpretability metrics table
              </caption>
              <thead>
                <tr className="border-b border-[#D9DDEE] bg-[#F8F9FE]">
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Method
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Deletion (Lower = Better)
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Insertion (Higher = Better)
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Hippocampal Overlap
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Amygdalar Overlap
                  </th>
                  <th scope="col" className="p-3 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Hippocampal Vol. Corr.
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {adniInterpretabilityData.map((row) => (
                  <tr
                    key={row.method}
                    className={row.method === 'GALA-Former' ? 'bg-[#9091DF]/10 font-bold' : ''}
                  >
                    <td className="p-3 font-semibold">{row.method}</td>
                    <td className="p-3 font-mono">
                      {row.deletion.toFixed(2)} ± {row.deletionCI.toFixed(2)}
                    </td>
                    <td className="p-3 font-mono">
                      {row.insertion.toFixed(2)} ± {row.insertionCI.toFixed(2)}
                    </td>
                    <td className="p-3 font-mono">
                      {row.hippocampalOverlap.toFixed(2)} ± {row.hippocampalOverlapCI.toFixed(2)}
                    </td>
                    <td className="p-3 font-mono">
                      {row.amygdalarOverlap.toFixed(2)} ± {row.amygdalarOverlapCI.toFixed(2)}
                    </td>
                    <td className="p-3 font-mono">
                      {row.hippocampalVolumeCorrelation.toFixed(2)} ± {row.hippocampalVolumeCorrelationCI.toFixed(2)}
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

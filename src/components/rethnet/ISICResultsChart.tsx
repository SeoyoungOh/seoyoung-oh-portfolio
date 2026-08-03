import React, { useState, useEffect, useRef } from 'react';
import { Table, ChevronDown, ChevronUp, BarChart2 } from 'lucide-react';

export interface ISICRow {
  method: string;
  rank: string | null;
  jaccard: number;
  dice: number;
  isEnsemble?: boolean;
  isPrimaryRethNet?: boolean;
  isSecondaryRethNet?: boolean;
}

export const isicData: ISICRow[] = [
  { method: 'Top Challenge Entry (Ensemble)', rank: '1', jaccard: 0.483, dice: 0.651, isEnsemble: true },
  { method: 'UNet + ASPP + DenseNet169', rank: '2', jaccard: 0.464, dice: 0.629 },
  { method: 'UNet + ASPP + ResNet-v2', rank: '3', jaccard: 0.455, dice: 0.616 },
  { method: 'UNet + ASPP + ResNet151', rank: '5', jaccard: 0.436, dice: 0.598 },
  { method: 'DeepLabv3+ + Xception', rank: null, jaccard: 0.451, dice: 0.614 },
  { method: 'DeepLabv3+ + Xception + SE', rank: null, jaccard: 0.469, dice: 0.627 },
  { method: 'DeepLabv3+ + Xception + Baseline-c', rank: null, jaccard: 0.456, dice: 0.616 },
  { method: 'RethNet + Baseline-c', rank: null, jaccard: 0.441, dice: 0.592 },
  { method: 'RethNet + REthinker-d', rank: null, jaccard: 0.473, dice: 0.639, isSecondaryRethNet: true },
  { method: 'RethNet + REthinker-e', rank: null, jaccard: 0.475, dice: 0.644, isPrimaryRethNet: true },
];

export const ISICResultsChart: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'jaccard' | 'dice'>('jaccard');
  const [showTable, setShowTable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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

  const isReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const shouldAnimate = isVisible && !isReducedMotion;

  const maxVal = selectedMetric === 'jaccard' ? 0.52 : 0.68;
  const minVal = selectedMetric === 'jaccard' ? 0.38 : 0.55;

  return (
    <div
      ref={containerRef}
      className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] shadow-xs my-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#D9DDEE]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BarChart2 className="w-4 h-4 text-[#9091DF]" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF]">
              ISIC 2018 GENERALIZATION BENCHMARK
            </h3>
          </div>
          <p className="text-lg font-bold text-[#20243C]">
            Attribute Segmentation Evaluation (1,000 Test Images)
          </p>
        </div>

        {/* Metric Selector */}
        <div className="flex items-center gap-2 bg-[#F8F9FE] p-1.5 rounded-xl border border-[#D9DDEE] shrink-0">
          <button
            onClick={() => setSelectedMetric('jaccard')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedMetric === 'jaccard'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            Jaccard Index
          </button>
          <button
            onClick={() => setSelectedMetric('dice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedMetric === 'dice'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            Dice Coefficient
          </button>
        </div>
      </div>

      {/* Bars */}
      <div className="space-y-3.5 mb-6">
        {isicData.map((row) => {
          const rawVal = selectedMetric === 'jaccard' ? row.jaccard : row.dice;
          const pct = Math.max(5, Math.min(100, ((rawVal - minVal) / (maxVal - minVal)) * 100));

          let barColor = 'bg-[#D9DDEE]';
          let textColor = 'text-[#626A7C]';

          if (row.isPrimaryRethNet) {
            barColor = 'bg-[#20243C]';
            textColor = 'text-[#20243C] font-extrabold';
          } else if (row.isSecondaryRethNet) {
            barColor = 'bg-[#9091DF]';
            textColor = 'text-[#20243C] font-extrabold';
          } else if (row.isEnsemble) {
            barColor = 'bg-[#626A7C]';
            textColor = 'text-[#20243C] font-bold';
          }

          return (
            <div key={row.method} className="group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1.5 gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`font-semibold ${row.isPrimaryRethNet || row.isSecondaryRethNet ? 'text-[#20243C] font-bold' : 'text-[#626A7C]'}`}>
                    {row.method}
                  </span>

                  {/* Explicit Challenge Rank Badge */}
                  {row.rank !== null && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#20243C] text-[#FBFBFF]">
                      Rank #{row.rank}
                    </span>
                  )}

                  {row.isEnsemble && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E5E7EB] text-[#20243C] border border-[#D1D5DB]">
                      Ensemble Reference
                    </span>
                  )}

                  {row.isPrimaryRethNet && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#A0A1F8]/20 text-[#20243C] border border-[#A0A1F8]/30">
                      Top Single Model
                    </span>
                  )}
                </div>

                <span className={`font-mono font-bold ${textColor}`}>
                  {rawVal.toFixed(3)}
                </span>
              </div>

              {/* Bar track */}
              <div className="w-full h-3.5 bg-[#F8F9FE] rounded-full overflow-hidden border border-[#D9DDEE]/60 p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-900 ease-out ${barColor}`}
                  style={{
                    width: shouldAnimate ? `${pct}%` : '0%',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Interpretation Note */}
      <div className="p-4 rounded-xl bg-[#B6BAFA]/10 border border-[#B6BAFA]/30 text-xs font-medium text-[#20243C] leading-relaxed mb-6">
        <span className="font-bold text-[#20243C]">Interpretation Note: </span>
        RethNet + REthinker-e achieved the strongest result among the displayed single-model comparisons but remained slightly below the top ensemble.
      </div>

      {/* Data Table Toggle */}
      <div className="pt-4 border-t border-[#D9DDEE]">
        <button
          onClick={() => setShowTable(!showTable)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#626A7C] hover:text-[#20243C] transition-colors cursor-pointer"
        >
          <Table className="w-4 h-4 text-[#9091DF]" />
          <span>{showTable ? 'Hide Data Table' : 'View Data Table'}</span>
          {showTable ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showTable && (
          <div className="mt-4 overflow-x-auto rounded-xl border border-[#D9DDEE]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8F9FE] text-[#20243C] font-bold border-b border-[#D9DDEE]">
                <tr>
                  <th className="p-3">Method</th>
                  <th className="p-3">Rank</th>
                  <th className="p-3 text-right">Jaccard Index</th>
                  <th className="p-3 text-right">Dice Coefficient</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9DDEE]">
                {isicData.map((r) => (
                  <tr
                    key={r.method}
                    className={
                      r.isPrimaryRethNet
                        ? 'bg-[#A0A1F8]/15 font-bold text-[#20243C]'
                        : r.isSecondaryRethNet
                        ? 'bg-[#B6BAFA]/15 font-bold text-[#20243C]'
                        : 'text-[#20243C]'
                    }
                  >
                    <td className="p-3">{r.method}</td>
                    <td className="p-3 font-mono">{r.rank ? `#${r.rank}` : '—'}</td>
                    <td className="p-3 text-right font-mono">{r.jaccard.toFixed(3)}</td>
                    <td className="p-3 text-right font-mono">{r.dice.toFixed(3)}</td>
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

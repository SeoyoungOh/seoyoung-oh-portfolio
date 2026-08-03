import React, { useState, useEffect, useRef } from 'react';
import { Table, ChevronDown, ChevronUp, BarChart2 } from 'lucide-react';

export interface MSLDRow {
  method: string;
  meanIoU: number;
  pixelAccuracy: number;
  isPrimaryRethNet?: boolean;
  isSecondaryRethNet?: boolean;
}

export const msldData: MSLDRow[] = [
  { method: 'DenseASPP', meanIoU: 58.31, pixelAccuracy: 89.31 },
  { method: 'PSPNet + ResNet-101', meanIoU: 63.24, pixelAccuracy: 91.92 },
  { method: 'DeepLabv3+ + ResNet-101', meanIoU: 63.74, pixelAccuracy: 92.51 },
  { method: 'DeepLabv3+ + ResNeXt-101', meanIoU: 64.64, pixelAccuracy: 93.14 },
  { method: 'DeepLabv3+ + Xception', meanIoU: 64.12, pixelAccuracy: 94.08 },
  { method: 'DeepLabv3+ + Xception + SE', meanIoU: 65.49, pixelAccuracy: 94.12 },
  { method: 'DeepLabv3+ + Xception + Baseline-c', meanIoU: 65.52, pixelAccuracy: 94.21 },
  { method: 'RethNet + Baseline-c', meanIoU: 62.11, pixelAccuracy: 92.44 },
  { method: 'RethNet + REthinker-d', meanIoU: 76.56, pixelAccuracy: 96.45, isSecondaryRethNet: true },
  { method: 'RethNet + REthinker-e', meanIoU: 79.46, pixelAccuracy: 96.11, isPrimaryRethNet: true },
];

export const MSLDResultsChart: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'meanIoU' | 'pixelAccuracy'>('meanIoU');
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

  // Max value calculation for proportional bar width
  const maxVal = selectedMetric === 'meanIoU' ? 85 : 100;
  const minVal = selectedMetric === 'meanIoU' ? 50 : 85;

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
              MSLD BENCHMARK COMPARISON
            </h3>
          </div>
          <p className="text-lg font-bold text-[#20243C]">
            Multi-type Skin Lesion Labelled Database (38 Test Images)
          </p>
        </div>

        {/* Metric Selector Buttons */}
        <div className="flex items-center gap-2 bg-[#F8F9FE] p-1.5 rounded-xl border border-[#D9DDEE] shrink-0">
          <button
            onClick={() => setSelectedMetric('meanIoU')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedMetric === 'meanIoU'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            Mean IoU (%)
          </button>
          <button
            onClick={() => setSelectedMetric('pixelAccuracy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedMetric === 'pixelAccuracy'
                ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                : 'text-[#626A7C] hover:text-[#20243C]'
            }`}
          >
            Pixel Accuracy (%)
          </button>
        </div>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="space-y-3.5 mb-6">
        {msldData.map((row) => {
          const rawVal = selectedMetric === 'meanIoU' ? row.meanIoU : row.pixelAccuracy;
          // Scale bar fill between minVal and maxVal for clear visual hierarchy
          const pct = Math.max(5, Math.min(100, ((rawVal - minVal) / (maxVal - minVal)) * 100));

          let barColor = 'bg-[#D9DDEE]';
          let textColor = 'text-[#626A7C]';
          let badgeText: string | null = null;

          if (row.isPrimaryRethNet) {
            barColor = 'bg-[#20243C]';
            textColor = 'text-[#20243C] font-extrabold';
            badgeText = 'Highest Mean IoU';
          } else if (row.isSecondaryRethNet) {
            barColor = 'bg-[#9091DF]';
            textColor = 'text-[#20243C] font-extrabold';
            badgeText = 'Highest Accuracy';
          }

          return (
            <div key={row.method} className="group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1.5 gap-1">
                <div className="flex items-center gap-2">
                  <span className={`font-semibold ${row.isPrimaryRethNet || row.isSecondaryRethNet ? 'text-[#20243C] font-bold' : 'text-[#626A7C]'}`}>
                    {row.method}
                  </span>
                  {badgeText && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#A0A1F8]/20 text-[#20243C] border border-[#A0A1F8]/30">
                      {badgeText}
                    </span>
                  )}
                </div>
                <span className={`font-mono font-bold ${textColor}`}>
                  {rawVal.toFixed(2)}%
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
        RethNet with contextual REthinker modules produced a large improvement in Mean IoU. The ConvLSTM variant achieved the highest overlap, while the Conv3D variant achieved slightly higher pixel accuracy.
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
                  <th className="p-3 text-right">Mean IoU (%)</th>
                  <th className="p-3 text-right">Pixel Accuracy (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9DDEE]">
                {msldData.map((r) => (
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
                    <td className="p-3 text-right font-mono">{r.meanIoU.toFixed(2)}%</td>
                    <td className="p-3 text-right font-mono">{r.pixelAccuracy.toFixed(2)}%</td>
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

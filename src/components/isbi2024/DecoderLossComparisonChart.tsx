import React, { useState, useEffect, useRef } from 'react';
import { Table, ChevronDown, ChevronUp, BarChart2 } from 'lucide-react';

export type LossKey = 'diceCE' | 'dice' | 'jaccard' | 'focal' | 'softCE' | 'diceFocal';

export interface DecoderLossData {
  model: string;
  parametersM: number;
  dice: number;
  diceCI: number;
  jaccard: number;
  jaccardCI: number;
  focal: number;
  focalCI: number;
  softCE: number;
  softCECI: number;
  diceFocal: number;
  diceFocalCI: number;
  diceCE: number;
  diceCECI: number;
}

export const decoderLossData: DecoderLossData[] = [
  {
    model: 'UNet',
    parametersM: 24.4,
    dice: 0.359,
    diceCI: 0.034,
    jaccard: 0.329,
    jaccardCI: 0.020,
    focal: 0.605,
    focalCI: 0.0013,
    softCE: 0.607,
    softCECI: 0.012,
    diceFocal: 0.610,
    diceFocalCI: 0.0017,
    diceCE: 0.684,
    diceCECI: 0.029,
  },
  {
    model: 'UNet++',
    parametersM: 26.1,
    dice: 0.368,
    diceCI: 0.043,
    jaccard: 0.371,
    jaccardCI: 0.021,
    focal: 0.580,
    focalCI: 0.0056,
    softCE: 0.614,
    softCECI: 0.0093,
    diceFocal: 0.587,
    diceFocalCI: 0.0084,
    diceCE: 0.646,
    diceCECI: 0.0069,
  },
  {
    model: 'MAnet',
    parametersM: 31.8,
    dice: 0.283,
    diceCI: 0.036,
    jaccard: 0.220,
    jaccardCI: 0.078,
    focal: 0.605,
    focalCI: 0.0062,
    softCE: 0.604,
    softCECI: 0.00046,
    diceFocal: 0.604,
    diceFocalCI: 0.011,
    diceCE: 0.610,
    diceCECI: 0.042,
  },
  {
    model: 'PSPNet',
    parametersM: 21.6,
    dice: 0.643,
    diceCI: 0.010,
    jaccard: 0.610,
    jaccardCI: 0.0033,
    focal: 0.687,
    focalCI: 0.00039,
    softCE: 0.740,
    softCECI: 0.00065,
    diceFocal: 0.750,
    diceFocalCI: 0.00020,
    diceCE: 0.756,
    diceCECI: 0.0032,
  },
  {
    model: 'FPN',
    parametersM: 23.2,
    dice: 0.674,
    diceCI: 0.015,
    jaccard: 0.641,
    jaccardCI: 0.013,
    focal: 0.628,
    focalCI: 0.00025,
    softCE: 0.759,
    softCECI: 0.00070,
    diceFocal: 0.643,
    diceFocalCI: 0.00068,
    diceCE: 0.777,
    diceCECI: 0.0012,
  },
  {
    model: 'DeepLabV3',
    parametersM: 26.0,
    dice: 0.667,
    diceCI: 0.0051,
    jaccard: 0.643,
    jaccardCI: 0.014,
    focal: 0.662,
    focalCI: 0.0025,
    softCE: 0.758,
    softCECI: 0.0015,
    diceFocal: 0.680,
    diceFocalCI: 0.0028,
    diceCE: 0.789,
    diceCECI: 0.0031,
  },
  {
    model: 'DeepLabV3+',
    parametersM: 22.4,
    dice: 0.616,
    diceCI: 0.041,
    jaccard: 0.553,
    jaccardCI: 0.098,
    focal: 0.644,
    focalCI: 0.0028,
    softCE: 0.719,
    softCECI: 0.0054,
    diceFocal: 0.655,
    diceFocalCI: 0.0024,
    diceCE: 0.761,
    diceCECI: 0.0020,
  },
  {
    model: 'N-DecoNet',
    parametersM: 21.5,
    dice: 0.688,
    diceCI: 0.026,
    jaccard: 0.656,
    jaccardCI: 0.035,
    focal: 0.630,
    focalCI: 0.0027,
    softCE: 0.731,
    softCECI: 0.0044,
    diceFocal: 0.655,
    diceFocalCI: 0.0039,
    diceCE: 0.753,
    diceCECI: 0.013,
  },
  {
    model: 'U-DecoNet',
    parametersM: 21.5,
    dice: 0.530,
    diceCI: 0.021,
    jaccard: 0.549,
    jaccardCI: 0.028,
    focal: 0.615,
    focalCI: 0.0022,
    softCE: 0.703,
    softCECI: 0.0035,
    diceFocal: 0.621,
    diceFocalCI: 0.0031,
    diceCE: 0.714,
    diceCECI: 0.010,
  },
];

const lossMeta: Record<LossKey, { label: string; name: string }> = {
  diceCE: { label: 'DiceCE', name: 'Dice + Cross Entropy' },
  dice: { label: 'Dice', name: 'Dice Loss' },
  jaccard: { label: 'Jaccard', name: 'Jaccard / IoU Loss' },
  focal: { label: 'Focal', name: 'Focal Loss' },
  softCE: { label: 'SoftCE', name: 'Label-Smoothed Cross Entropy' },
  diceFocal: { label: 'DiceFocal', name: 'Dice + Focal Loss' },
};

export const DecoderLossComparisonChart: React.FC = () => {
  const [selectedLoss, setSelectedLoss] = useState<LossKey>('diceCE');
  const [showTable, setShowTable] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);
  const [hoveredModel, setHoveredModel] = useState<DecoderLossData | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setHasEntered(true);
      setAnimProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting && !hasEntered) {
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

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [hasEntered, selectedLoss]);

  const getMetricValue = (item: DecoderLossData, loss: LossKey): { val: number; ci: number } => {
    switch (loss) {
      case 'dice':
        return { val: item.dice, ci: item.diceCI };
      case 'jaccard':
        return { val: item.jaccard, ci: item.jaccardCI };
      case 'focal':
        return { val: item.focal, ci: item.focalCI };
      case 'softCE':
        return { val: item.softCE, ci: item.softCECI };
      case 'diceFocal':
        return { val: item.diceFocal, ci: item.diceFocalCI };
      case 'diceCE':
      default:
        return { val: item.diceCE, ci: item.diceCECI };
    }
  };

  const maxVal = 0.85; // Upper bound for macro mIoU bar scale

  return (
    <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9DDEE] space-y-6" ref={containerRef}>
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#9091DF] mb-2 flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-[#9091DF]" />
          <span>INTERACTIVE TABLE 1 BENCHMARK</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight">
          Decoder Architecture & Loss Function Evaluation (ResNet-34 Backbone)
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] mt-1 font-medium">
          Macro mIoU results across 34 brainstem classes using consistent experimental conditions (5 runs, 95% CIs).
        </p>
      </div>

      {/* Loss Selector Controls */}
      <div className="space-y-2 border-b border-[#D9DDEE] pb-4">
        <label className="text-xs font-bold uppercase tracking-wider text-[#626A7C] block">
          Select Loss Function Objective:
        </label>
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {(Object.keys(lossMeta) as LossKey[]).map((key) => {
            const isSelected = selectedLoss === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedLoss(key);
                  setHoveredModel(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9091DF] ${
                  isSelected
                    ? 'bg-[#20243C] text-[#FBFBFF] shadow-xs'
                    : 'bg-[#F4F5FB] text-[#626A7C] hover:bg-[#E8EBF8] hover:text-[#20243C]'
                }`}
              >
                {lossMeta[key].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hover Information / Dynamic Legend */}
      <div className="min-h-[28px] flex items-center justify-between text-xs">
        {hoveredModel ? (
          <div className="font-mono font-bold text-[#20243C] bg-[#A0A1F8]/20 px-3 py-1 rounded-md border border-[#A0A1F8]/40">
            {hoveredModel.model} • <span className="text-[#626A7C]">Params:</span> {hoveredModel.parametersM}M •{' '}
            <span className="text-[#626A7C]">{lossMeta[selectedLoss].label} Macro mIoU:</span>{' '}
            <span className="text-[#20243C]">
              {getMetricValue(hoveredModel, selectedLoss).val.toFixed(3)} ±{' '}
              {getMetricValue(hoveredModel, selectedLoss).ci.toFixed(4)}
            </span>
          </div>
        ) : (
          <div className="text-[#626A7C] italic">
            Active Metric: <strong className="text-[#20243C]">{lossMeta[selectedLoss].name}</strong>. Hover or focus bars to inspect exact metrics.
          </div>
        )}
      </div>

      {/* Horizontal Bar Chart Container */}
      <div className="space-y-3 pt-2">
        {decoderLossData.map((item) => {
          const { val, ci } = getMetricValue(item, selectedLoss);
          const widthPct = Math.min((val / maxVal) * 100 * animProgress, 100);

          const isNDeco = item.model === 'N-DecoNet';
          const isUDeco = item.model === 'U-DecoNet';
          const isDeepLab = item.model === 'DeepLabV3';

          // Styling logic
          let barBg = 'bg-[#64748B] hover:bg-[#475569]';
          let borderStyle = 'border-transparent';
          let badgeText: string | null = null;
          let badgeBg = '';

          if (isNDeco) {
            barBg = 'bg-[#20243C] hover:bg-[#2C3252]';
            borderStyle = 'ring-2 ring-[#9091DF]';
            badgeText = 'Proposed Efficient (21.5M)';
            badgeBg = 'bg-[#9091DF] text-[#FBFBFF]';
          } else if (isUDeco) {
            barBg = 'bg-[#B6BAFA] hover:bg-[#A0A1F8]';
            badgeText = 'Proposed Variant (21.5M)';
            badgeBg = 'bg-[#20243C] text-[#FBFBFF]';
          } else if (isDeepLab && selectedLoss === 'diceCE') {
            barBg = 'bg-[#334155] hover:bg-[#1E293B]';
            badgeText = 'Highest DiceCE (0.789)';
            badgeBg = 'bg-[#DFF8E1] text-[#20243C]';
          }

          return (
            <div
              key={item.model}
              className={`p-2.5 sm:p-3 rounded-xl border transition-all ${
                isNDeco
                  ? 'bg-[#9091DF]/15 border-[#9091DF]'
                  : isUDeco
                  ? 'bg-[#B6BAFA]/10 border-[#B6BAFA]'
                  : 'bg-[#F8F9FE] border-[#E0E4F4]'
              }`}
              tabIndex={0}
              role="img"
              aria-label={`${item.model}: ${val.toFixed(3)} macro mIoU under ${lossMeta[selectedLoss].label}, ${item.parametersM}M parameters`}
              onMouseEnter={() => setHoveredModel(item)}
              onMouseLeave={() => setHoveredModel(null)}
              onFocus={() => setHoveredModel(item)}
              onBlur={() => setHoveredModel(null)}
            >
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs sm:text-sm font-bold ${
                      isNDeco ? 'text-[#20243C] font-black' : 'text-[#20243C]'
                    }`}
                  >
                    {item.model}
                  </span>
                  <span className="text-[11px] font-mono text-[#626A7C]">({item.parametersM}M params)</span>
                </div>

                {badgeText && (
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${badgeBg}`}>
                    {badgeText}
                  </span>
                )}
              </div>

              {/* Progress Bar Track */}
              <div className="relative flex items-center gap-3">
                <div className="flex-1 bg-[#E2E8F0] h-4 rounded-full overflow-hidden relative">
                  <div
                    style={{ width: `${widthPct}%` }}
                    className={`h-full rounded-full transition-all duration-300 ${barBg} ${borderStyle}`}
                  />
                </div>

                <div className="w-20 text-right shrink-0">
                  <span className="text-xs font-mono font-bold text-[#20243C]">
                    {val.toFixed(3)}
                  </span>
                  <span className="text-[10px] font-mono text-[#626A7C] block leading-none">
                    ±{ci < 0.01 ? ci.toFixed(4) : ci.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interpretation Footer */}
      <div className="space-y-3 pt-3 text-xs border-t border-[#E0E4F4] text-[#20243C] font-medium leading-relaxed">
        <p>
          • <strong>DiceCE Consistency:</strong> DiceCE produced the strongest overall result for every evaluated decoder in the common ResNet-34 comparison.
        </p>
        <p>
          • <strong>Architecture Comparison:</strong> Pyramid-type architectures (FPN, DeepLabV3) and N-DecoNet were generally more effective than the tested UNet-type variants.
        </p>
        <p>
          • <strong>N-DecoNet Positioning:</strong> N-DecoNet should be interpreted as a competitive and parameter-efficient proposed design (21.5M parameters), not as the highest overall-mIoU architecture (DeepLabV3 achieved 0.789 under DiceCE).
        </p>
      </div>

      {/* View Data Table Expandable Section */}
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
              <caption className="sr-only">Comprehensive decoder architecture and loss function benchmark data table</caption>
              <thead>
                <tr className="border-b border-[#D9DDEE] bg-[#F8F9FE]">
                  <th scope="col" className="p-2.5 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Model
                  </th>
                  <th scope="col" className="p-2.5 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Params (M)
                  </th>
                  <th scope="col" className="p-2.5 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Dice
                  </th>
                  <th scope="col" className="p-2.5 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Jaccard
                  </th>
                  <th scope="col" className="p-2.5 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    Focal
                  </th>
                  <th scope="col" className="p-2.5 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    SoftCE
                  </th>
                  <th scope="col" className="p-2.5 font-mono font-bold text-[#626A7C] uppercase tracking-wider">
                    DiceFocal
                  </th>
                  <th scope="col" className="p-2.5 font-mono font-bold text-[#626A7C] uppercase tracking-wider bg-[#9091DF]/15">
                    DiceCE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {decoderLossData.map((row) => (
                  <tr
                    key={row.model}
                    className={
                      row.model === 'N-DecoNet'
                        ? 'bg-[#9091DF]/10 font-bold'
                        : row.model === 'U-DecoNet'
                        ? 'bg-[#B6BAFA]/10'
                        : ''
                    }
                  >
                    <td className="p-2.5 font-semibold flex items-center gap-1.5">
                      <span>{row.model}</span>
                      {row.model === 'N-DecoNet' && (
                        <span className="text-[9px] bg-[#20243C] text-[#FBFBFF] px-1 py-0.5 rounded font-mono uppercase">
                          Proposed
                        </span>
                      )}
                    </td>
                    <td className="p-2.5 font-mono">{row.parametersM}M</td>
                    <td className="p-2.5 font-mono">{row.dice.toFixed(3)}</td>
                    <td className="p-2.5 font-mono">{row.jaccard.toFixed(3)}</td>
                    <td className="p-2.5 font-mono">{row.focal.toFixed(3)}</td>
                    <td className="p-2.5 font-mono">{row.softCE.toFixed(3)}</td>
                    <td className="p-2.5 font-mono">{row.diceFocal.toFixed(3)}</td>
                    <td className="p-2.5 font-mono font-bold bg-[#9091DF]/10">{row.diceCE.toFixed(3)}</td>
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

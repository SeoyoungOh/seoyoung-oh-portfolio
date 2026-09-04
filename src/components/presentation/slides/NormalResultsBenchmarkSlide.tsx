import React, { useState } from 'react';
import { ArrowRight, Info, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface NormalResultsBenchmarkSlideProps {
  isActive: boolean;
}

type TabKey = 'healthy-risk' | 'overall' | 'small-lesion' | 'mask-free';

interface TabMeta {
  key: TabKey;
  num: string;
  label: string;
  sub: string;
}

const TABS: TabMeta[] = [
  {
    key: 'healthy-risk',
    num: '01',
    label: 'Healthy Risk Control',
    sub: 'Held-out healthy test FPR',
  },
  {
    key: 'overall',
    num: '02',
    label: 'Localization After Calibration',
    sub: 'BraTS & MSLesSeg benchmarks',
  },
  {
    key: 'small-lesion',
    num: '03',
    label: 'Small-Lesion Sensitivity',
    sub: 'Subtle & compact lesions',
  },
  {
    key: 'mask-free',
    num: '04',
    label: 'Mask-Free Specificity',
    sub: 'ADNI ROI neurodegeneration',
  },
];

export const NormalResultsBenchmarkSlide: React.FC<NormalResultsBenchmarkSlideProps> = () => {
  const [selectedTab, setSelectedTab] = useState<TabKey>('healthy-risk');
  const [hoveredTab, setHoveredTab] = useState<TabKey | null>(null);
  const activeTabKey: TabKey = hoveredTab ?? selectedTab;

  // Metric drilldown for State 02
  const [state2Metric, setState2Metric] = useState<'maxiou' | 'auprc' | 'recall10'>('maxiou');
  // Metric drilldown for State 03
  const [state3Metric, setState3Metric] = useState<'calibrated' | 'recall5' | 'top1dice'>('calibrated');
  // Metric drilldown for State 04
  const [state4Metric, setState4Metric] = useState<'roi' | 'relRoi' | 'fpNonRoi'>('roi');

  // Lightbox modal state for scientific images
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const handleOpenLightbox = (src: string, alt: string, title: string, subtitle: string) => {
    setLightboxData({
      src,
      alt,
      title,
      subtitle,
      isLightBg: true,
    });
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~9% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              HEALTHY-ONLY MODELING · BENCHMARK VALIDATION
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Can We Control False Positives Without Losing Meaningful Evidence?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Healthy-reference calibration must suppress false alarms while preserving true abnormal signal.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Direction 2 Empirical Validation</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PERSISTENT CALIBRATION BANNER & SCIENTIFIC LOGIC STRIP (~8% height)
          Remains visible across ALL tabs to emphasize parameters locked on healthy data
      ========================================================================= */}
      <div className="shrink-0 mb-1.5 p-1.5 px-3 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs flex items-center justify-between gap-3 text-xs">
        {/* Calibration Banner */}
        <div className="flex items-center gap-2 font-mono text-[10px]">
          <span className="px-1.5 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/70 text-[#6F69C9] font-bold uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#6F69C9]" />
            HEALTHY-RISK CALIBRATION
          </span>
          <span className="text-[#24242A] font-semibold">Healthy calibration set</span>
          <span className="text-[#6F69C9]">→</span>
          <span className="px-1.5 py-0.2 rounded bg-[#FAFAFC] border border-[#D9DDEE] font-bold text-[#6F69C9]">
            Target FPR α = 0.05
          </span>
          <span className="text-[#6F69C9]">→</span>
          <span className="text-[#24242A] font-semibold">Parameters locked</span>
          <span className="text-[#6F69C9]">→</span>
          <span className="px-1.5 py-0.2 rounded bg-[#E3F0E6] border border-[#C3E0C9] text-[#24242A] font-bold">
            No downstream patient tuning
          </span>
        </div>

        {/* Secondary Labels */}
        <div className="flex items-center gap-2 text-[9.5px] font-mono text-[#74747D] shrink-0">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5 text-[#6F69C9]" />
            Healthy data only
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5 text-[#6F69C9]" />
            No lesion masks
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5 text-[#6F69C9]" />
            No patient tuning
          </span>
        </div>
      </div>

      {/* =========================================================================
          PERSISTENT SCIENTIFIC LOGIC LINE
      ========================================================================= */}
      <div className="shrink-0 mb-1.5 flex items-center justify-between px-2 text-[9.5px] font-mono text-[#74747D]">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[#24242A]">SCIENTIFIC STORY:</span>
          <span className="text-[#6F69C9] font-bold">CONTROL HEALTHY FP</span>
          <span>→</span>
          <span className="text-[#24242A] font-medium">PRESERVE ABNORMAL SIGNAL</span>
          <span>→</span>
          <span className="text-[#24242A] font-medium">PRESERVE SMALL SIGNAL</span>
          <span>→</span>
          <span className="text-[#6F69C9] font-bold">REDUCE OFF-TARGET EVIDENCE</span>
        </div>
        <span className="text-[#74747D] italic">
          Parameters fixed before disease evaluation
        </span>
      </div>

      {/* =========================================================================
          INTERACTIVE NAVIGATION TABS (4 Tabs, ~7% height)
      ========================================================================= */}
      <div className="grid grid-cols-4 gap-2 mb-1.5 shrink-0">
        {TABS.map((tab) => {
          const isSelected = selectedTab === tab.key;
          const isHovered = hoveredTab === tab.key;
          const isCurrent = activeTabKey === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedTab(tab.key)}
              onMouseEnter={() => setHoveredTab(tab.key)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`p-2 rounded-xl border text-left transition-all duration-150 relative cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#6F69C9] shadow-xs'
                  : isHovered
                  ? 'bg-[#FAFAFC] border-[#A7A3DE]'
                  : 'bg-white/80 border-[#D9DDEE] hover:border-[#A7A3DE]/70'
              }`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span
                  className={`text-[9.5px] font-mono font-bold ${
                    isCurrent ? 'text-[#6F69C9]' : 'text-[#74747D]'
                  }`}
                >
                  {tab.num}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
                )}
              </div>
              <div
                className={`text-xs font-bold leading-tight truncate ${
                  isCurrent ? 'text-[#24242A]' : 'text-[#626A7C]'
                }`}
              >
                {tab.label}
              </div>
              <div className="text-[9.5px] text-[#74747D] truncate mt-0.5 font-mono">
                {tab.sub}
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          MAIN DETAIL VIEWPORT (Fixed height, no layout jumping, ~58% height)
      ========================================================================= */}
      <div className="flex-1 min-h-0 flex items-stretch">
        {/* ---------------------------------------------------------------------
            STATE 01: HEALTHY RISK CONTROL
        --------------------------------------------------------------------- */}
        {activeTabKey === 'healthy-risk' && (
          <div className="w-full bg-white rounded-xl border border-[#D9DDEE] p-3 flex gap-3 shadow-2xs animate-fadeIn">
            {/* Left: Concept Flow & Target vs Observed Numbers (50%) */}
            <div className="flex-1 flex flex-col justify-between pr-3 border-r border-[#D9DDEE]/80">
              <div>
                <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D9DDEE]">
                  <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                    STATE 01 · GENERALIZATION TEST
                  </span>
                  <span className="text-[9.5px] font-mono text-[#74747D]">
                    Healthy cohort evaluation
                  </span>
                </div>

                <h3 className="text-sm lg:text-[15px] font-bold text-[#24242A] leading-snug mb-2">
                  Does the calibrated operating point behave correctly on unseen healthy data?
                </h3>

                {/* Horizontal Concept Flow */}
                <div className="p-2.5 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] my-2">
                  <div className="grid grid-cols-5 items-center text-center gap-1 font-mono">
                    <div className="p-1.5 rounded bg-white border border-[#D9DDEE]">
                      <span className="text-[9px] text-[#74747D] block">CALIBRATION</span>
                      <span className="text-[10.5px] font-bold text-[#24242A]">Target α</span>
                      <span className="text-xs font-black text-[#24242A] block mt-0.5">0.050</span>
                    </div>

                    <span className="text-[#6F69C9] font-bold text-xs">→</span>

                    <div className="p-1.5 rounded bg-white border border-[#D9DDEE]">
                      <span className="text-[9px] text-[#74747D] block">OPERATING POINT</span>
                      <span className="text-[10px] font-bold text-[#6F69C9]">Lock t_α</span>
                      <span className="text-[9px] text-[#74747D] block mt-0.5">Frozen</span>
                    </div>

                    <span className="text-[#6F69C9] font-bold text-xs">→</span>

                    <div className="p-1.5 rounded bg-[#D9D8F4]/40 border border-[#A7A3DE]">
                      <span className="text-[9px] text-[#6F69C9] font-bold block">HELD-OUT TEST</span>
                      <span className="text-[10.5px] font-bold text-[#24242A]">Observed FPR</span>
                      <span className="text-sm font-black text-[#6F69C9] block mt-0.5">0.047</span>
                    </div>
                  </div>
                </div>

                {/* Prominent Number Comparison */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                    <span className="text-[9.5px] font-mono text-[#74747D] uppercase block">
                      Target FPR (Calibration)
                    </span>
                    <span className="text-2xl font-black text-[#24242A] mt-0.5 block">
                      0.050
                    </span>
                    <span className="text-[9px] font-mono text-[#74747D]">
                      Intended false-positive budget
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-white border-2 border-[#6F69C9]/60 text-center">
                    <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase block">
                      Observed FPR (Held-out Test)
                    </span>
                    <span className="text-2xl font-black text-[#6F69C9] mt-0.5 block">
                      0.047
                    </span>
                    <span className="text-[9px] font-mono text-[#6F69C9] font-bold">
                      Controlled false-alarm rate (close to 0.05)
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#E3F0E6] border border-[#C3E0C9] text-[10px] font-mono text-[#24242A] flex items-center justify-between">
                <span className="font-bold">Generalization Result:</span>
                <span>FPR calibrated on healthy set generalises reliably to unseen healthy brains</span>
              </div>
            </div>

            {/* Right: Metric Meaning & Why This Matters (50%) */}
            <div className="flex-1 flex flex-col justify-between pl-1">
              <div>
                <div className="p-2.5 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] mb-2.5">
                  <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE]">
                    <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                      WHAT DOES THE METRIC MEAN?
                    </span>
                    <span className="text-[9.5px] font-mono text-[#74747D]">
                      False Positive Rate (FPR) ↓
                    </span>
                  </div>
                  <p className="text-xs text-[#24242A] font-semibold mt-1 leading-snug">
                    Fraction of healthy voxels / spatial evidence incorrectly identified as abnormal under the selected operating point.
                  </p>
                  <p className="text-[11px] text-[#626A7C] mt-1 leading-relaxed">
                    <strong className="text-[#24242A]">Question:</strong> “How much abnormal evidence appears in subjects who should be healthy?”
                  </p>
                  <div className="mt-1.5 p-1.5 rounded bg-white border border-[#D9DDEE] text-[10px] font-mono text-[#626A7C]">
                    An observed FPR of <span className="font-bold text-[#6F69C9]">0.047</span> matches the intended 0.05 operating point, proving that false-positive suppression holds on unseen healthy data.
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#D9D8F4]">
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#6F69C9] uppercase pb-1 border-b border-[#D9D8F4]">
                    <Info className="w-3 h-3 text-[#6F69C9]" />
                    <span>WHY DOES THIS MATTER SCIENTIFICALLY?</span>
                  </div>
                  <p className="text-xs text-[#24242A] mt-1.5 leading-relaxed">
                    The threshold was fixed <span className="font-bold text-[#24242A]">BEFORE</span> downstream disease evaluation. The anomaly score was not tuned on BraTS, MSLesSeg, ADNI, or PULSE.
                  </p>
                  <p className="text-xs text-[#6F69C9] font-bold mt-1 leading-relaxed">
                    → No downstream patient tuning.
                  </p>
                  <p className="text-[10.5px] text-[#74747D] mt-1 leading-relaxed">
                    This makes false-positive control an intrinsic property of the healthy-reference system, not a post-hoc optimization on disease datasets.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D9DDEE] text-[10px] font-mono text-[#74747D] flex items-center justify-between">
                <span>Supervision status:</span>
                <span className="text-[#6F69C9] font-bold">100% Healthy data · Zero patient labels</span>
              </div>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------------
            STATE 02: LOCALIZATION AFTER CALIBRATION
        --------------------------------------------------------------------- */}
        {activeTabKey === 'overall' && (
          <div className="w-full bg-white rounded-xl border border-[#D9DDEE] p-2.5 flex gap-3 shadow-2xs animate-fadeIn">
            {/* Left: Scientific Image (48%) */}
            <div className="flex-[48] min-w-0 bg-white rounded-lg border border-[#D9DDEE] p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE] text-[9.5px] font-mono">
                <span className="font-bold text-[#6F69C9]">FIGURE: OVERALL LOCALIZATION</span>
                <span className="text-[#74747D]">CLICK TO ENLARGE</span>
              </div>

              <div
                onClick={() =>
                  handleOpenLightbox(
                    '/images/phd-defense/normal/thesis-normal-results-overall.png',
                    'Overall localization results on BraTS and MSLesSeg',
                    'Localization After Calibration (BraTS & MSLesSeg)',
                    'Comparison of baseline ANDi against the proposed reliable normal projection model'
                  )
                }
                role="button"
                tabIndex={0}
                aria-label="Click to enlarge overall localization results"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(
                      '/images/phd-defense/normal/thesis-normal-results-overall.png',
                      'Overall localization results on BraTS and MSLesSeg',
                      'Localization After Calibration (BraTS & MSLesSeg)',
                      'Comparison of baseline ANDi against the proposed reliable normal projection model'
                    );
                  }
                }}
                className="flex-1 min-h-0 relative flex items-center justify-center p-1 bg-white cursor-zoom-in group rounded overflow-hidden"
              >
                <img
                  src="/images/phd-defense/normal/thesis-normal-results-overall.png"
                  alt="Overall localization results on BraTS and MSLesSeg"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                />
                <ZoomIndicatorBadge />
              </div>

              <div className="pt-1 border-t border-[#D9DDEE] text-[9.5px] font-mono text-[#74747D] flex items-center justify-between">
                <span>Evaluation only: Voxel-wise lesion masks</span>
                <span className="text-[#6F69C9] font-bold">Pure white surface (#FFFFFF)</span>
              </div>
            </div>

            {/* Right: BraTS + MSLesSeg Results & Metric Interpretations (52%) */}
            <div className="flex-[52] min-w-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#D9DDEE]">
                  <h3 className="text-xs font-bold text-[#24242A]">
                    After controlling healthy false positives, do true abnormalities remain detectable?
                  </h3>
                  <span className="text-[9px] font-mono text-[#74747D] shrink-0 ml-1">
                    ANDi → Ours
                  </span>
                </div>

                {/* Quantitative Comparison Grid (BraTS & MSLesSeg Together) */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {/* BraTS Card */}
                  <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#D9DDEE]">
                      <span className="text-[9.5px] font-mono font-bold text-[#24242A]">BraTS Benchmark</span>
                      <span className="text-[8.5px] font-mono text-[#74747D]">Tumors</span>
                    </div>
                    <div className="space-y-1 font-mono text-[10px]">
                      <div className="flex justify-between items-center">
                        <span className="text-[#626A7C]">Max-IoU ↑:</span>
                        <span>
                          <span className="text-[#74747D]">0.39</span> → <strong className="text-[#6F69C9]">0.46</strong>
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#626A7C]">Pixel-AUPRC ↑:</span>
                        <span>
                          <span className="text-[#74747D]">0.52</span> → <strong className="text-[#6F69C9]">0.61</strong>
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#626A7C]">Recall@10% ↑:</span>
                        <span>
                          <span className="text-[#74747D]">0.58</span> → <strong className="text-[#6F69C9]">0.69</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* MSLesSeg Card */}
                  <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#D9DDEE]">
                      <span className="text-[9.5px] font-mono font-bold text-[#24242A]">MSLesSeg Benchmark</span>
                      <span className="text-[8.5px] font-mono text-[#74747D]">WM Lesions</span>
                    </div>
                    <div className="space-y-1 font-mono text-[10px]">
                      <div className="flex justify-between items-center">
                        <span className="text-[#626A7C]">Max-IoU ↑:</span>
                        <span>
                          <span className="text-[#74747D]">0.28</span> → <strong className="text-[#6F69C9]">0.35</strong>
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#626A7C]">Pixel-AUPRC ↑:</span>
                        <span>
                          <span className="text-[#74747D]">0.39</span> → <strong className="text-[#6F69C9]">0.48</strong>
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#626A7C]">Recall@10% ↑:</span>
                        <span>
                          <span className="text-[#74747D]">0.54</span> → <strong className="text-[#6F69C9]">0.65</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lightly Interactive Metric Meaning Chips */}
                <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] mb-2">
                  <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE] mb-1">
                    <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase">
                      SELECT METRIC EXPLANATION:
                    </span>
                    <div className="flex items-center gap-1 font-mono text-[9px]">
                      <button
                        type="button"
                        onClick={() => setState2Metric('maxiou')}
                        className={`px-1.5 py-0.2 rounded ${
                          state2Metric === 'maxiou'
                            ? 'bg-[#6F69C9] text-white font-bold'
                            : 'bg-white text-[#626A7C] border border-[#D9DDEE]'
                        }`}
                      >
                        Max-IoU
                      </button>
                      <button
                        type="button"
                        onClick={() => setState2Metric('auprc')}
                        className={`px-1.5 py-0.2 rounded ${
                          state2Metric === 'auprc'
                            ? 'bg-[#6F69C9] text-white font-bold'
                            : 'bg-white text-[#626A7C] border border-[#D9DDEE]'
                        }`}
                      >
                        Pixel-AUPRC
                      </button>
                      <button
                        type="button"
                        onClick={() => setState2Metric('recall10')}
                        className={`px-1.5 py-0.2 rounded ${
                          state2Metric === 'recall10'
                            ? 'bg-[#6F69C9] text-white font-bold'
                            : 'bg-white text-[#626A7C] border border-[#D9DDEE]'
                        }`}
                      >
                        Recall@10%
                      </button>
                    </div>
                  </div>

                  <div className="text-[10.5px] text-[#24242A] leading-relaxed">
                    {state2Metric === 'maxiou' && (
                      <div>
                        <strong className="text-[#6F69C9]">Max-IoU ↑:</strong> Best spatial overlap between thresholded anomaly evidence and the voxel-wise lesion mask.{' '}
                        <span className="text-[#626A7C]">Question: “Does the evidence occupy the correct abnormal region?”</span>
                      </div>
                    )}
                    {state2Metric === 'auprc' && (
                      <div>
                        <strong className="text-[#6F69C9]">Pixel-AUPRC ↑:</strong> Pixel-level precision–recall quality under strong lesion/background imbalance.{' '}
                        <span className="text-[#626A7C]">Question: “Are true abnormal voxels ranked above normal background?”</span>
                      </div>
                    )}
                    {state2Metric === 'recall10' && (
                      <div>
                        <strong className="text-[#6F69C9]">Recall@10% ↑:</strong> Fraction of lesion voxels recovered within the top 10% highest anomaly-score voxels.{' '}
                        <span className="text-[#626A7C]">Question: “Does the strongest anomaly evidence recover actual abnormal tissue?”</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Why This Matters */}
                <div className="p-2 rounded-lg bg-white border border-[#D9D8F4]">
                  <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                    WHY THIS RESULT MATTERS
                  </span>
                  <p className="text-[11px] text-[#24242A] leading-snug">
                    False-positive control does <strong className="text-[#24242A]">NOT</strong> collapse the anomaly map into an empty conservative solution. Even after healthy calibration, meaningful abnormal evidence remains spatially recoverable.
                  </p>
                  <p className="text-[10.5px] font-mono text-[#6F69C9] font-bold mt-1">
                    Conclusion: Controlled false positives + preserved localization
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------------
            STATE 03: SMALL-LESION SENSITIVITY
        --------------------------------------------------------------------- */}
        {activeTabKey === 'small-lesion' && (
          <div className="w-full bg-white rounded-xl border border-[#D9DDEE] p-2.5 flex gap-3 shadow-2xs animate-fadeIn">
            {/* Left: Scientific Image (48%) */}
            <div className="flex-[48] min-w-0 bg-white rounded-lg border border-[#D9DDEE] p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE] text-[9.5px] font-mono">
                <span className="font-bold text-[#6F69C9]">FIGURE: SMALL-LESION SENSITIVITY</span>
                <span className="text-[#74747D]">CLICK TO ENLARGE</span>
              </div>

              <div
                onClick={() =>
                  handleOpenLightbox(
                    '/images/phd-defense/normal/thesis-normal-results-small-lesions.png',
                    'Small-lesion sensitivity results on BraTS and MSLesSeg',
                    'Small-Lesion Sensitivity Under Calibration',
                    'Evaluation on compact lesions (<5,000 voxels in BraTS, <300 voxels in MSLesSeg)'
                  )
                }
                role="button"
                tabIndex={0}
                aria-label="Click to enlarge small-lesion sensitivity results"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(
                      '/images/phd-defense/normal/thesis-normal-results-small-lesions.png',
                      'Small-lesion sensitivity results on BraTS and MSLesSeg',
                      'Small-Lesion Sensitivity Under Calibration',
                      'Evaluation on compact lesions (<5,000 voxels in BraTS, <300 voxels in MSLesSeg)'
                    );
                  }
                }}
                className="flex-1 min-h-0 relative flex items-center justify-center p-1 bg-white cursor-zoom-in group rounded overflow-hidden"
              >
                <img
                  src="/images/phd-defense/normal/thesis-normal-results-small-lesions.png"
                  alt="Small-lesion sensitivity results on BraTS and MSLesSeg"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                />
                <ZoomIndicatorBadge />
              </div>

              <div className="pt-1 border-t border-[#D9DDEE] text-[9.5px] font-mono text-[#74747D] flex items-center justify-between">
                <span>Proxy for compact neurodegeneration</span>
                <span className="text-[#6F69C9] font-bold">Pure white surface (#FFFFFF)</span>
              </div>
            </div>

            {/* Right: Small-Lesion Results & Calibrated Recall Priority (52%) */}
            <div className="flex-[52] min-w-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#D9DDEE]">
                  <h3 className="text-xs font-bold text-[#24242A]">
                    Does conservative calibration erase subtle abnormalities?
                  </h3>
                  <span className="text-[9px] font-mono text-[#74747D] shrink-0 ml-1">
                    Small-Lesion Stress Test
                  </span>
                </div>

                {/* Primary Metric Highlight: Calibrated Recall */}
                <div className="p-2 rounded-xl bg-[#D9D8F4]/30 border-2 border-[#6F69C9]/60 mb-2 grid grid-cols-2 gap-2 text-center">
                  <div className="p-1.5 rounded-lg bg-white border border-[#A7A3DE]/70">
                    <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase block">
                      BraTS (&lt; 5,000 voxels)
                    </span>
                    <span className="text-xs font-mono text-[#74747D]">Calibrated recall:</span>
                    <div className="flex items-center justify-center gap-1.5 mt-0.5">
                      <span className="text-sm font-mono text-[#74747D]">0.45</span>
                      <span className="text-[#6F69C9] font-bold">→</span>
                      <span className="text-xl font-black text-[#6F69C9]">0.60</span>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-white border border-[#A7A3DE]/70">
                    <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase block">
                      MSLesSeg (&lt; 300 voxels)
                    </span>
                    <span className="text-xs font-mono text-[#74747D]">Calibrated recall:</span>
                    <div className="flex items-center justify-center gap-1.5 mt-0.5">
                      <span className="text-sm font-mono text-[#74747D]">0.36</span>
                      <span className="text-[#6F69C9] font-bold">→</span>
                      <span className="text-xl font-black text-[#6F69C9]">0.53</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Small-Lesion Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-2 font-mono text-[9.5px]">
                  <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] space-y-0.5">
                    <div className="flex justify-between text-[#626A7C]">
                      <span>Recall@5%:</span>
                      <span>0.49 → <strong className="text-[#6F69C9]">0.62</strong></span>
                    </div>
                    <div className="flex justify-between text-[#626A7C]">
                      <span>Top-1% Dice:</span>
                      <span>0.19 → <strong className="text-[#6F69C9]">0.31</strong></span>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] space-y-0.5">
                    <div className="flex justify-between text-[#626A7C]">
                      <span>Recall@5%:</span>
                      <span>0.41 → <strong className="text-[#6F69C9]">0.56</strong></span>
                    </div>
                    <div className="flex justify-between text-[#626A7C]">
                      <span>Top-1% Dice:</span>
                      <span>0.15 → <strong className="text-[#6F69C9]">0.26</strong></span>
                    </div>
                  </div>
                </div>

                {/* Metric Meaning */}
                <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] mb-1.5 text-[10px]">
                  <div className="flex items-center justify-between pb-0.5 border-b border-[#D9DDEE] mb-1 font-mono text-[9px]">
                    <span className="font-bold text-[#6F69C9]">KEY METRIC: CALIBRATED RECALL</span>
                    <span className="text-[#74747D]">True signal post-FPR lock</span>
                  </div>
                  <p className="text-[#24242A] leading-snug">
                    <strong className="text-[#24242A]">Meaning:</strong> How much true lesion evidence remains AFTER enforcing the healthy FPR-controlled operating point.{' '}
                    <span className="text-[#626A7C]">Question: “Does false-positive control preserve sensitivity, or does it simply suppress everything?”</span>
                  </p>
                </div>

                {/* Connection to ALS Brainstem Analysis */}
                <div className="p-2 rounded-lg bg-white border border-[#D9D8F4]">
                  <div className="flex items-center justify-between text-[9.5px] font-mono mb-0.5">
                    <span className="font-bold text-[#6F69C9]">CONNECTION TO ALS BRAINSTEM</span>
                    <span className="text-[#74747D] italic">Methodological Stress Test</span>
                  </div>
                  <p className="text-[10.5px] text-[#24242A] leading-snug">
                    ALS-relevant brainstem structures are small, and expected MRI evidence may be subtle and compact. Small-lesion sensitivity demonstrates that conservative calibration does not erase compact signals.
                  </p>
                  <p className="text-[9px] font-mono text-[#74747D] mt-0.5">
                    Caution: Methodological proxy — not direct validation of ALS nuclei localization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------------
            STATE 04: MASK-FREE SPECIFICITY
        --------------------------------------------------------------------- */}
        {activeTabKey === 'mask-free' && (
          <div className="w-full bg-white rounded-xl border border-[#D9DDEE] p-3 flex gap-3 shadow-2xs animate-fadeIn">
            {/* Left: ADNI Neurodegeneration Setup & Results (50%) */}
            <div className="flex-1 flex flex-col justify-between pr-3 border-r border-[#D9DDEE]/80">
              <div>
                <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D9DDEE]">
                  <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                    ADNI · MASK-FREE NEURODEGENERATION
                  </span>
                  <span className="text-[9.5px] font-mono text-[#74747D]">
                    HTML/CSS schematic (No raster)
                  </span>
                </div>

                <h3 className="text-sm lg:text-[15px] font-bold text-[#24242A] leading-snug mb-1.5">
                  Can calibration improve anatomical specificity when lesion masks do not exist?
                </h3>

                <p className="text-xs text-[#626A7C] leading-relaxed mb-2.5">
                  In diffuse neurodegeneration, there are no focal voxel-wise masks. We evaluate anatomical concentration within the Hippocampus-related anatomical ROI.
                </p>

                {/* ADNI Quantitative Numbers */}
                <div className="space-y-2">
                  <div className="p-2 rounded-xl bg-white border border-[#D9DDEE] flex items-center justify-between font-mono">
                    <div>
                      <span className="text-xs font-bold text-[#24242A] block">ROI concentration ↑</span>
                      <span className="text-[9px] text-[#74747D]">Evidence inside anatomical ROI</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#74747D]">0.63</span>
                      <span className="mx-1 text-[#6F69C9] font-bold">→</span>
                      <span className="text-lg font-black text-[#6F69C9]">0.72</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-[#D9DDEE] flex items-center justify-between font-mono">
                    <div>
                      <span className="text-xs font-bold text-[#24242A] block">Reliable ROI concentration ↑</span>
                      <span className="text-[9px] text-[#74747D]">Low-uncertainty evidence in ROI</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#74747D]">0.57</span>
                      <span className="mx-1 text-[#6F69C9] font-bold">→</span>
                      <span className="text-lg font-black text-[#6F69C9]">0.66</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-[#D9DDEE] flex items-center justify-between font-mono">
                    <div>
                      <span className="text-xs font-bold text-[#24242A] block">FP@Non-ROI ↓ (Lower is better)</span>
                      <span className="text-[9px] text-[#74747D]">Off-target diffuse false detections</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#74747D]">0.14</span>
                      <span className="mx-1 text-[#6F69C9] font-bold">→</span>
                      <span className="text-lg font-black text-[#6F69C9]">0.09</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-[10px] font-mono text-[#626A7C] flex items-center justify-between">
                <span>Target Reference:</span>
                <span className="font-bold text-[#24242A]">Hippocampus-related anatomical ROI</span>
              </div>
            </div>

            {/* Right: Metric Meanings, Why It Matters & Bridge to ALS (50%) */}
            <div className="flex-1 flex flex-col justify-between pl-1">
              <div>
                {/* Metric Meanings */}
                <div className="p-2.5 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase block pb-1 border-b border-[#D9DDEE] mb-1.5">
                    METRIC INTERPRETATIONS
                  </span>
                  <div className="space-y-1.5 text-[10.5px]">
                    <div>
                      <strong className="text-[#24242A]">ROI concentration ↑:</strong> Fraction of selected anomaly evidence located inside target ROI. <span className="text-[#626A7C]">“Is the retained evidence focused rather than diffuse?”</span>
                    </div>
                    <div>
                      <strong className="text-[#24242A]">Reliable ROI concentration ↑:</strong> Fraction of low-uncertainty evidence inside ROI. <span className="text-[#626A7C]">“Where does the most trustworthy evidence concentrate?”</span>
                    </div>
                    <div>
                      <strong className="text-[#24242A]">FP@Non-ROI ↓:</strong> Anomaly evidence outside the anatomical reference. <span className="text-[#626A7C]">“How much non-specific background remains?” (0.14 → 0.09)</span>
                    </div>
                  </div>
                </div>

                {/* Why This Matters */}
                <div className="p-2.5 rounded-xl bg-white border border-[#D9D8F4] mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase block pb-1 border-b border-[#D9D8F4] mb-1">
                    WHY THIS RESULT MATTERS
                  </span>
                  <p className="text-xs text-[#24242A] leading-relaxed">
                    ROI concentration increases while FP@Non-ROI decreases. Calibration is not suppressing all evidence equally:
                  </p>
                  <p className="text-xs text-[#6F69C9] font-bold mt-1 leading-relaxed">
                    It preferentially removes off-target evidence while retaining more anatomically plausible evidence.
                  </p>
                </div>

                {/* Bridge to ALS */}
                <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                  <span className="text-[9.5px] font-mono font-bold text-[#24242A] block mb-0.5">
                    BRIDGE TO ALS IN PULSE
                  </span>
                  <p className="text-[11px] text-[#626A7C] leading-snug">
                    ADNI provides the bridge from lesion-mask evaluation to the mask-free neurodegenerative setting required for ALS.
                  </p>
                  <p className="text-[10.5px] font-mono text-[#6F69C9] font-bold mt-0.5">
                    Next question: Does this healthy-calibrated evidence remain meaningful in PULSE?
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D9DDEE] text-[10px] font-mono text-[#74747D] flex items-center justify-between">
                <span>Evaluation setting:</span>
                <span className="text-[#6F69C9] font-bold">Unsupervised · Mask-free neurodegeneration</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition to Slide 26 (~12% height)
      ========================================================================= */}
      <div className="shrink-0 p-2.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs mt-1">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          Healthy-risk calibration succeeds only if it does both:{' '}
          <span className="text-[#6F69C9] font-black">CONTROL FALSE POSITIVES</span> and{' '}
          <span className="text-[#6F69C9] font-black">PRESERVE MEANINGFUL ABNORMAL EVIDENCE</span>.
        </p>

        <p className="text-[10.5px] text-[#626A7C] text-center mt-0.5">
          The results show that conservative calibration does not simply empty the map — it retains useful signal, including small abnormalities.
        </p>

        <div className="mt-1.5 pt-1.5 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            Does this same calibrated evidence become anatomically meaningful in ALS?
          </span>

          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px] shrink-0">
            <span>Next: ALS Brainstem Validation in PULSE (Slide 26)</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* In-Presentation Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxData !== null}
        onClose={() => setLightboxData(null)}
        data={lightboxData}
      />
    </div>
  );
};

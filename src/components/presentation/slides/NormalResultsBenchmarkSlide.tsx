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
    <div className="flex flex-col justify-between h-full w-full select-none overflow-hidden">
      {/* =========================================================================
          TOP: Header Area
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              HEALTHY-ONLY MODELING · BENCHMARK VALIDATION
            </span>
            <h2 className="text-xl lg:text-[22px] font-black text-[#24242A] tracking-tight leading-tight">
              Can We Control False Positives Without Losing Meaningful Evidence?
            </h2>
            <p className="text-[11px] text-[#626A7C] leading-normal mt-0.5">
              Healthy-reference calibration suppresses false alarms while preserving true abnormal signal across benchmarks.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[10.5px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Direction 2 Empirical Validation</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PERSISTENT CALIBRATION BANNER
      ========================================================================= */}
      <div className="shrink-0 mb-1 p-1.5 px-3 rounded-lg bg-white border border-[#D9D8F4] shadow-2xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-[10px]">
          <span className="px-1.5 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#A7A3DE]/70 text-[#6F69C9] font-bold uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#6F69C9]" />
            HEALTHY-RISK CALIBRATION
          </span>
          <span className="text-[#24242A] font-semibold">Healthy calibration</span>
          <span className="text-[#6F69C9]">→</span>
          <span className="px-1.5 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] font-bold text-[#6F69C9]">
            Target FPR α = 0.05
          </span>
          <span className="text-[#6F69C9]">→</span>
          <span className="text-[#24242A] font-semibold">Parameters locked</span>
          <span className="text-[#6F69C9]">→</span>
          <span className="px-1.5 py-0.5 rounded bg-[#E3F0E6] border border-[#C3E0C9] text-[#24242A] font-bold">
            No downstream patient tuning
          </span>
        </div>

        <div className="flex items-center gap-2 text-[9.5px] font-mono text-[#74747D] shrink-0">
          <span className="flex items-center gap-1 font-bold text-[#6F69C9]">
            <CheckCircle2 className="w-2.5 h-2.5 text-[#6F69C9]" />
            Observed FPR = 0.047
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5 text-[#6F69C9]" />
            Zero patient tuning
          </span>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE NAVIGATION TABS (4 Tabs)
      ========================================================================= */}
      <div className="grid grid-cols-4 gap-1.5 mb-1.5 shrink-0">
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
              className={`p-1.5 px-2.5 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
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
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />}
              </div>
              <div
                className={`text-[11.5px] font-bold leading-tight truncate ${
                  isCurrent ? 'text-[#24242A]' : 'text-[#626A7C]'
                }`}
              >
                {tab.label}
              </div>
              <div className="text-[9px] text-[#74747D] truncate mt-0.5 font-mono">
                {tab.sub}
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          MAIN DETAIL VIEWPORT (Balanced, no scrolling or clipping)
      ========================================================================= */}
      <div className="flex-1 min-h-0 flex items-stretch">
        {/* ---------------------------------------------------------------------
            STATE 01: HEALTHY RISK CONTROL
        --------------------------------------------------------------------- */}
        {activeTabKey === 'healthy-risk' && (
          <div className="w-full bg-white rounded-xl border border-[#D9DDEE] p-2.5 flex gap-3 shadow-2xs">
            {/* Left: Scientific Question & Key Result Values (50%) */}
            <div className="flex-1 flex flex-col justify-between pr-3 border-r border-[#D9DDEE]/80">
              <div>
                <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#D9DDEE]">
                  <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                    STATE 01 · GENERALIZATION TEST
                  </span>
                  <span className="text-[9px] font-mono text-[#74747D]">
                    Held-out Healthy Evaluation
                  </span>
                </div>

                <h3 className="text-xs lg:text-[13px] font-bold text-[#24242A] leading-snug mb-2">
                  Does the calibrated operating point hold on unseen healthy scans?
                </h3>

                {/* Target vs Observed Comparison */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-center">
                    <span className="text-[9px] font-mono text-[#74747D] uppercase block">
                      Target FPR α (Calibration)
                    </span>
                    <span className="text-2xl font-black text-[#24242A] mt-0.5 block font-mono">
                      0.050
                    </span>
                    <span className="text-[9px] font-mono text-[#74747D]">
                      Intended false-alarm budget
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-white border-2 border-[#6F69C9]/70 text-center">
                    <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block">
                      Observed FPR (Held-out Test)
                    </span>
                    <span className="text-2xl font-black text-[#6F69C9] mt-0.5 block font-mono">
                      0.047
                    </span>
                    <span className="text-[9px] font-mono text-[#6F69C9] font-bold">
                      Controlled false-alarm rate (~0.05)
                    </span>
                  </div>
                </div>

                {/* Concept Flow */}
                <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-center font-mono text-[9.5px] flex items-center justify-between px-3">
                  <span className="text-[#74747D]">Target α = 0.050</span>
                  <span className="text-[#6F69C9] font-bold">→</span>
                  <span className="font-bold text-[#24242A]">Freeze threshold t_α</span>
                  <span className="text-[#6F69C9] font-bold">→</span>
                  <span className="font-bold text-[#6F69C9]">Observed FPR = 0.047</span>
                </div>
              </div>

              <div className="p-1.5 rounded-lg bg-[#E3F0E6] border border-[#C3E0C9] text-[10px] font-mono text-[#24242A] flex items-center justify-between">
                <span className="font-bold">Generalization Result:</span>
                <span>FPR calibrated on healthy set generalises reliably to unseen healthy brains</span>
              </div>
            </div>

            {/* Right: Metric Meaning & Why This Matters (50%) */}
            <div className="flex-1 flex flex-col justify-between pl-1">
              <div className="space-y-2">
                {/* Metric Meaning */}
                <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                  <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase block pb-0.5 border-b border-[#D9DDEE] mb-1">
                    WHAT DOES THE METRIC MEAN?
                  </span>
                  <p className="text-[11px] font-semibold text-[#24242A] leading-snug">
                    False Positive Rate (FPR) ↓: Fraction of normal healthy brain voxels incorrectly flagged as abnormal.
                  </p>
                  <p className="text-[10.5px] text-[#626A7C] leading-normal mt-0.5">
                    Question: “How much false evidence appears in subjects who should be healthy?”
                  </p>
                  <p className="text-[10px] font-mono text-[#6F69C9] font-bold mt-1">
                    Observed FPR = 0.047 matches intended α = 0.050 target.
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="p-2 rounded-lg bg-white border border-[#D9D8F4]">
                  <div className="flex items-center gap-1 text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase pb-0.5 border-b border-[#D9D8F4] mb-1">
                    <Info className="w-3 h-3 text-[#6F69C9]" />
                    <span>WHY DOES THIS MATTER SCIENTIFICALLY?</span>
                  </div>
                  <p className="text-[11px] text-[#24242A] leading-relaxed">
                    The threshold was locked on healthy MRI <strong className="text-[#24242A]">before</strong> downstream disease testing.
                  </p>
                  <p className="text-[11px] text-[#6F69C9] font-bold mt-0.5">
                    → No downstream patient tuning on BraTS, MSLesSeg, ADNI, or PULSE.
                  </p>
                  <p className="text-[10px] text-[#74747D] leading-normal mt-0.5">
                    False-positive suppression is an intrinsic property of the healthy reference, not a post-hoc fit.
                  </p>
                </div>
              </div>

              <div className="pt-1 border-t border-[#D9DDEE] text-[9.5px] font-mono text-[#74747D] flex items-center justify-between">
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
          <div className="w-full bg-white rounded-xl border border-[#D9DDEE] p-2 flex gap-3 shadow-2xs">
            {/* Left: Scientific Image (46%) */}
            <div className="flex-[46] min-w-0 bg-white rounded-lg border border-[#D9DDEE] p-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE] text-[9px] font-mono">
                <span className="font-bold text-[#6F69C9]">FIGURE · BENCHMARK LOCALIZATION</span>
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

              <div className="pt-1 border-t border-[#D9DDEE] text-[9px] font-mono text-[#74747D] flex items-center justify-between">
                <span>Evaluation only: Voxel-wise lesion masks</span>
                <span className="text-[#6F69C9] font-bold">Pure white surface</span>
              </div>
            </div>

            {/* Right: Key Benchmark Values & Metric Interpretations (54%) */}
            <div className="flex-[54] min-w-0 flex flex-col justify-between">
              <div>
                <div className="pb-1 mb-1.5 border-b border-[#D9DDEE]">
                  <h3 className="text-xs font-bold text-[#24242A] leading-snug">
                    After controlling healthy false positives, do true abnormalities remain detectable?
                  </h3>
                </div>

                {/* Key Benchmark Values: BraTS & MSLesSeg Cards */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {/* BraTS Card */}
                  <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                    <div className="flex items-center justify-between pb-0.5 mb-1 border-b border-[#D9DDEE]">
                      <span className="text-[9.5px] font-mono font-bold text-[#24242A]">BraTS Benchmark</span>
                      <span className="text-[8.5px] font-mono text-[#74747D]">Tumors</span>
                    </div>
                    <div className="space-y-0.5 font-mono text-[9.5px]">
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
                  <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                    <div className="flex items-center justify-between pb-0.5 mb-1 border-b border-[#D9DDEE]">
                      <span className="text-[9.5px] font-mono font-bold text-[#24242A]">MSLesSeg Benchmark</span>
                      <span className="text-[8.5px] font-mono text-[#74747D]">WM Lesions</span>
                    </div>
                    <div className="space-y-0.5 font-mono text-[9.5px]">
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

                {/* Metric Meanings */}
                <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] mb-1.5">
                  <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase block pb-0.5 border-b border-[#D9DDEE] mb-1">
                    WHAT THE METRICS MEAN
                  </span>
                  <div className="space-y-0.5 text-[10px] leading-snug">
                    <p>
                      <strong className="text-[#6F69C9]">Max-IoU ↑:</strong> Spatial overlap between anomaly evidence and ground-truth lesion mask.
                    </p>
                    <p>
                      <strong className="text-[#6F69C9]">Pixel-AUPRC ↑:</strong> Precision–recall quality under severe lesion-to-background imbalance.
                    </p>
                    <p>
                      <strong className="text-[#6F69C9]">Recall@10% ↑:</strong> Fraction of true lesion voxels recovered in top 10% highest anomaly scores.
                    </p>
                  </div>
                </div>

                {/* Why This Matters */}
                <div className="p-1.5 rounded-lg bg-white border border-[#D9D8F4]">
                  <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                    WHY THIS RESULT MATTERS
                  </span>
                  <p className="text-[10.5px] text-[#24242A] leading-snug">
                    False-positive control does <strong className="text-[#24242A]">not</strong> collapse sensitivity into an empty map. True pathology remains reliably detectable across tumor and MS benchmarks.
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
          <div className="w-full bg-white rounded-xl border border-[#D9DDEE] p-2 flex gap-3 shadow-2xs">
            {/* Left: Scientific Image (46%) */}
            <div className="flex-[46] min-w-0 bg-white rounded-lg border border-[#D9DDEE] p-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE] text-[9px] font-mono">
                <span className="font-bold text-[#6F69C9]">FIGURE · SMALL-LESION SENSITIVITY</span>
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

              <div className="pt-1 border-t border-[#D9DDEE] text-[9px] font-mono text-[#74747D] flex items-center justify-between">
                <span>Proxy for compact neurodegeneration</span>
                <span className="text-[#6F69C9] font-bold">Pure white surface</span>
              </div>
            </div>

            {/* Right: Small-Lesion Results & Calibrated Recall Priority (54%) */}
            <div className="flex-[54] min-w-0 flex flex-col justify-between">
              <div>
                <div className="pb-1 mb-1.5 border-b border-[#D9DDEE]">
                  <h3 className="text-xs font-bold text-[#24242A] leading-snug">
                    Does conservative calibration erase subtle or compact abnormalities?
                  </h3>
                </div>

                {/* Primary Metric Highlight: Calibrated Recall */}
                <div className="p-2 rounded-xl bg-[#D9D8F4]/30 border-2 border-[#6F69C9]/60 mb-2 grid grid-cols-2 gap-2 text-center">
                  <div className="p-1.5 rounded-lg bg-white border border-[#A7A3DE]/70">
                    <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase block">
                      BraTS (&lt; 5,000 voxels)
                    </span>
                    <span className="text-[10.5px] font-mono text-[#74747D]">Calibrated recall:</span>
                    <div className="flex items-center justify-center gap-1.5 mt-0.5">
                      <span className="text-xs font-mono text-[#74747D]">0.45</span>
                      <span className="text-[#6F69C9] font-bold">→</span>
                      <span className="text-lg font-black text-[#6F69C9]">0.60</span>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-white border border-[#A7A3DE]/70">
                    <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase block">
                      MSLesSeg (&lt; 300 voxels)
                    </span>
                    <span className="text-[10.5px] font-mono text-[#74747D]">Calibrated recall:</span>
                    <div className="flex items-center justify-center gap-1.5 mt-0.5">
                      <span className="text-xs font-mono text-[#74747D]">0.36</span>
                      <span className="text-[#6F69C9] font-bold">→</span>
                      <span className="text-lg font-black text-[#6F69C9]">0.53</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-1.5 font-mono text-[9px]">
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

                {/* What the Metric Means */}
                <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] mb-1.5 text-[10px]">
                  <span className="font-mono text-[9px] font-bold text-[#6F69C9] uppercase block mb-0.5">
                    WHAT DOES CALIBRATED RECALL MEAN?
                  </span>
                  <p className="text-[#24242A] leading-snug">
                    Lesion recovery remaining <strong className="text-[#24242A]">after</strong> locking the healthy-risk threshold (α = 0.05). Confirms false-alarm suppression does not erase compact signals.
                  </p>
                </div>

                {/* Why It Matters / Connection to ALS */}
                <div className="p-1.5 rounded-lg bg-white border border-[#D9D8F4]">
                  <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                    WHY THIS MATTERS FOR ALS BRAINSTEM
                  </span>
                  <p className="text-[10px] text-[#24242A] leading-snug">
                    ALS brainstem degeneration is focal and subtle. Small-lesion sensitivity demonstrates that conservative calibration retains compact abnormality without swallowing subtle evidence.
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
          <div className="w-full bg-white rounded-xl border border-[#D9DDEE] p-2.5 flex gap-3 shadow-2xs">
            {/* Left: ADNI Neurodegeneration Setup & Results (50%) */}
            <div className="flex-1 flex flex-col justify-between pr-3 border-r border-[#D9DDEE]/80">
              <div>
                <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#D9DDEE]">
                  <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                    ADNI · MASK-FREE NEURODEGENERATION
                  </span>
                  <span className="text-[9px] font-mono text-[#74747D]">
                    Unsupervised ROI Evaluation
                  </span>
                </div>

                <h3 className="text-xs lg:text-[13px] font-bold text-[#24242A] leading-snug mb-1.5">
                  Can calibration improve anatomical specificity when lesion masks do not exist?
                </h3>

                {/* ADNI Quantitative Numbers */}
                <div className="space-y-1.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE] flex items-center justify-between font-mono">
                    <div>
                      <span className="text-[11px] font-bold text-[#24242A] block">ROI concentration ↑</span>
                      <span className="text-[8.5px] text-[#74747D]">Evidence inside anatomical ROI</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-[#74747D]">0.63</span>
                      <span className="mx-1 text-[#6F69C9] font-bold">→</span>
                      <span className="text-base font-black text-[#6F69C9]">0.72</span>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE] flex items-center justify-between font-mono">
                    <div>
                      <span className="text-[11px] font-bold text-[#24242A] block">Reliable ROI concentration ↑</span>
                      <span className="text-[8.5px] text-[#74747D]">Low-uncertainty evidence in ROI</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-[#74747D]">0.57</span>
                      <span className="mx-1 text-[#6F69C9] font-bold">→</span>
                      <span className="text-base font-black text-[#6F69C9]">0.66</span>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE] flex items-center justify-between font-mono">
                    <div>
                      <span className="text-[11px] font-bold text-[#24242A] block">FP@Non-ROI ↓ (Lower is better)</span>
                      <span className="text-[8.5px] text-[#74747D]">Off-target diffuse false detections</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-[#74747D]">0.14</span>
                      <span className="mx-1 text-[#6F69C9] font-bold">→</span>
                      <span className="text-base font-black text-[#6F69C9]">0.09</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-[9.5px] font-mono text-[#626A7C] flex items-center justify-between">
                <span>Target Reference:</span>
                <span className="font-bold text-[#24242A]">Hippocampus-related anatomical ROI</span>
              </div>
            </div>

            {/* Right: Metric Meanings, Why It Matters & Bridge to ALS (50%) */}
            <div className="flex-1 flex flex-col justify-between pl-1">
              <div className="space-y-1.5">
                {/* Metric Meanings */}
                <div className="p-2 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                  <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase block pb-0.5 border-b border-[#D9DDEE] mb-1">
                    WHAT THE METRICS MEAN
                  </span>
                  <div className="space-y-1 text-[10px] leading-snug">
                    <p>
                      <strong className="text-[#24242A]">ROI concentration ↑:</strong> Fraction of anomaly evidence inside target ROI (0.63 → 0.72).
                    </p>
                    <p>
                      <strong className="text-[#24242A]">Reliable ROI concentration ↑:</strong> Low-uncertainty evidence concentrating in ROI (0.57 → 0.66).
                    </p>
                    <p>
                      <strong className="text-[#24242A]">FP@Non-ROI ↓:</strong> Off-target false evidence in non-relevant brain tissue (0.14 → 0.09).
                    </p>
                  </div>
                </div>

                {/* Why This Matters */}
                <div className="p-2 rounded-lg bg-white border border-[#D9D8F4]">
                  <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] uppercase block pb-0.5 border-b border-[#D9D8F4] mb-0.5">
                    WHY THIS RESULT MATTERS
                  </span>
                  <p className="text-[10.5px] text-[#24242A] leading-snug">
                    Calibration preferentially removes off-target noise while concentrating evidence in affected anatomy. It does not simply suppress all evidence uniformly.
                  </p>
                </div>

                {/* Bridge to ALS */}
                <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                  <span className="text-[9px] font-mono font-bold text-[#24242A] block mb-0.5">
                    BRIDGE TO ALS IN PULSE
                  </span>
                  <p className="text-[10px] text-[#626A7C] leading-snug">
                    Validates that healthy-calibrated modeling transfers to unsegmented neurodegeneration, paving the way for ALS brainstem evaluation.
                  </p>
                </div>
              </div>

              <div className="pt-1 border-t border-[#D9DDEE] text-[9.5px] font-mono text-[#74747D] flex items-center justify-between">
                <span>Evaluation setting:</span>
                <span className="text-[#6F69C9] font-bold">Unsupervised · Mask-free neurodegeneration</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition to Slide 26 (Fixed safe bottom bar)
      ========================================================================= */}
      <div className="shrink-0 p-2 px-3.5 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs mt-1">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#24242A] leading-snug">
              Key Takeaway:{' '}
              <span className="text-[#6F69C9] font-black">
                Controlled False Positives (FPR = 0.047)
              </span>{' '}
              without losing true abnormal evidence, even for compact lesions.
            </p>
            <p className="text-[10px] text-[#626A7C] leading-tight mt-0.5">
              Parameters locked on healthy MRI — no downstream tuning on patient cohorts.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[10.5px] font-mono text-[#6F69C9] font-bold">
            <span>Next: ALS Brainstem Validation (Slide 26)</span>
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

import React, { useState } from 'react';
import { ArrowRight, Info, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface WeakResultsBenchmarkSlideProps {
  isActive: boolean;
}

type TabKey = 'overall' | 'small-lesion' | 'reliability' | 'roi';

interface TabMeta {
  key: TabKey;
  num: string;
  label: string;
  sub: string;
  question: string;
}

const TABS: TabMeta[] = [
  {
    key: 'overall',
    num: '01',
    label: 'Overall Localization',
    sub: 'Visible-lesion benchmarks',
    question: 'Can the method localize known abnormalities?',
  },
  {
    key: 'small-lesion',
    num: '02',
    label: 'Small-Lesion Sensitivity',
    sub: 'Compact target sensitivity',
    question: 'Does the improvement remain when abnormalities are small?',
  },
  {
    key: 'reliability',
    num: '03',
    label: 'Reliability Validity',
    sub: 'Uncertainty vs. evidence quality',
    question: 'Does the uncertainty estimate actually identify trustworthy evidence?',
  },
  {
    key: 'roi',
    num: '04',
    label: 'ROI Plausibility',
    sub: 'Mask-free neurodegeneration',
    question: 'When voxel-wise masks do not exist, does reliable evidence become more anatomically meaningful?',
  },
];

export const WeakResultsBenchmarkSlide: React.FC<WeakResultsBenchmarkSlideProps> = () => {
  // Main Tab State
  const [selectedTab, setSelectedTab] = useState<TabKey>('overall');
  const [hoveredTab, setHoveredTab] = useState<TabKey | null>(null);
  const activeTabKey: TabKey = hoveredTab ?? selectedTab;

  // Lightbox modal state for scientific images
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  // Tab 1 (Overall) metric detail selection
  const [overallMetricKey, setOverallMetricKey] = useState<'recall10' | 'auprc' | 'maxiou'>('recall10');

  // Tab 2 (Small-lesion) size bin selection
  const [sizeBin, setSizeBin] = useState<'small' | 'medium' | 'large'>('small');

  return (
    <div className="flex flex-col justify-between h-full w-full select-none overflow-hidden">
      {/* =========================================================================
          TOP: Header Area (~9% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              WEAK SUPERVISION · BENCHMARK VALIDATION
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              What Did Reliability Calibration Actually Improve?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              From overall localization to small-target sensitivity and anatomically meaningful reliable evidence.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Oh et al., IEEE ISBI 2026 · Thesis Ch. 6</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TOP INTERACTIVE NAVIGATION TABS + PERSISTENT SUMMARY STRIP (~13% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1 space-y-1">
        {/* Four Scientific Question Tabs */}
        <div className="grid grid-cols-4 gap-2">
          {TABS.map((tab) => {
            const isCurrent = activeTabKey === tab.key;
            const isLocked = selectedTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedTab(tab.key)}
                onMouseEnter={() => setHoveredTab(tab.key)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`text-left p-1.5 px-2 rounded-xl transition-all duration-150 border flex items-center justify-between gap-1.5 ${
                  isCurrent
                    ? 'bg-white border-[#6F69C9] shadow-2xs'
                    : 'bg-[#FAFAFC] border-[#D9DDEE] hover:border-[#A7A3DE]'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[9px] font-mono font-bold ${
                        isCurrent ? 'text-[#6F69C9]' : 'text-[#74747D]'
                      }`}
                    >
                      {tab.num}
                    </span>
                    <span
                      className={`text-[11px] font-bold truncate leading-tight ${
                        isCurrent ? 'text-[#24242A]' : 'text-[#626A7C]'
                      }`}
                    >
                      {tab.label}
                    </span>
                  </div>
                  <span className="text-[8.5px] text-[#74747D] block truncate mt-0.5">
                    {tab.question}
                  </span>
                </div>

                {isLocked && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Compact Persistent Summary Strip across all 4 states */}
        <div className="px-2.5 py-0.5 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] grid grid-cols-4 gap-2 text-[9px]">
          <div className="flex items-center gap-1 truncate">
            <span className="font-bold text-[#6F69C9]">OVERALL:</span>
            <span className="text-[#24242A] truncate">Better localization</span>
          </div>
          <div className="flex items-center gap-1 truncate">
            <span className="font-bold text-[#6F69C9]">SMALL TARGETS:</span>
            <span className="text-[#24242A] truncate">Better retrieval in hard cases</span>
          </div>
          <div className="flex items-center gap-1 truncate">
            <span className="font-bold text-[#6F69C9]">RELIABILITY:</span>
            <span className="text-[#24242A] truncate">Uncertainty predicts quality</span>
          </div>
          <div className="flex items-center gap-1 truncate">
            <span className="font-bold text-[#6F69C9]">MASK-FREE:</span>
            <span className="text-[#24242A] truncate">Higher anatomical concentration</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN DETAIL VIEWPORT (~65% height)
          Fixed geometry container with subtle cross-fade transition
          Slightly reduced padding to prevent overflow
      ========================================================================= */}
      <div className="flex-1 min-h-0 bg-white rounded-xl border border-[#D9DDEE] p-2.5 shadow-2xs flex flex-col justify-between overflow-hidden">
        {/* =====================================================================
            STATE 01: OVERALL LOCALIZATION
        ===================================================================== */}
        {activeTabKey === 'overall' && (
          <div className="grid grid-cols-12 gap-3 h-full items-stretch animate-fadeIn">
            {/* Left 6 cols: 3-Level Scientific Interpretation */}
            <div className="col-span-6 flex flex-col justify-between gap-1 h-full">
              <div>
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                  QUESTION 01 · VISIBLE-LESION BENCHMARKS
                </span>
                <h3 className="text-xs sm:text-sm font-black text-[#24242A] leading-tight mb-1">
                  Overall weak localization improves across visible-lesion benchmarks
                </h3>

                {/* Level 1: Quantitative Summary (BraTS & MSLesSeg side by side) */}
                <div className="grid grid-cols-2 gap-1.5 mb-1">
                  {/* BraTS Card */}
                  <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                    <div className="flex items-center justify-between mb-0.5 pb-0.5 border-b border-[#D9DDEE]">
                      <span className="text-[9.5px] font-bold text-[#24242A]">BraTS (Glioma)</span>
                      <span className="text-[8px] font-mono text-[#74747D]">Large lesions</span>
                    </div>
                    <div className="space-y-0.5 text-[9.5px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D]">Max-IoU</span>
                        <span className="font-mono text-[#24242A]">0.35 → <strong className="text-[#6F69C9]">0.39</strong></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D]">Pixel AUPRC</span>
                        <span className="font-mono text-[#24242A]">0.29 → <strong className="text-[#6F69C9]">0.33</strong></span>
                      </div>
                      <div className="flex items-center justify-between p-0.5 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/50">
                        <span className="font-bold text-[#24242A]">Recall@10</span>
                        <div className="flex items-center gap-1 font-mono">
                          <span className="text-[#74747D]">0.70 →</span>
                          <span className="text-[11px] font-black text-[#6F69C9]">0.77</span>
                          <span className="text-[8px] text-[#6F69C9] font-bold">(+0.07)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MSLesSeg Card */}
                  <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE]">
                    <div className="flex items-center justify-between mb-0.5 pb-0.5 border-b border-[#D9DDEE]">
                      <span className="text-[9.5px] font-bold text-[#24242A]">MSLesSeg (MS)</span>
                      <span className="text-[8px] font-mono text-[#74747D]">Multiple lesions</span>
                    </div>
                    <div className="space-y-0.5 text-[9.5px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D]">Max-IoU</span>
                        <span className="font-mono text-[#24242A]">0.24 → <strong className="text-[#6F69C9]">0.28</strong></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#74747D]">Pixel AUPRC</span>
                        <span className="font-mono text-[#24242A]">0.18 → <strong className="text-[#6F69C9]">0.22</strong></span>
                      </div>
                      <div className="flex items-center justify-between p-0.5 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/50">
                        <span className="font-bold text-[#24242A]">Recall@10</span>
                        <div className="flex items-center gap-1 font-mono">
                          <span className="text-[#74747D]">0.56 →</span>
                          <span className="text-[11px] font-black text-[#6F69C9]">0.65</span>
                          <span className="text-[8px] text-[#6F69C9] font-bold">(+0.09)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Level 2: Metric Meaning (Interactive selector) */}
                <div className="p-1.5 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] mb-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[8.5px] font-mono font-bold text-[#626A7C] uppercase">
                      METRIC MEANING · SELECT TO INSPECT
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setOverallMetricKey('recall10')}
                        className={`px-1.5 py-0.2 rounded text-[8px] font-mono font-bold ${
                          overallMetricKey === 'recall10'
                            ? 'bg-[#6F69C9] text-white'
                            : 'bg-white text-[#626A7C] border border-[#D9DDEE]'
                        }`}
                      >
                        Recall@10 (Key)
                      </button>
                      <button
                        type="button"
                        onClick={() => setOverallMetricKey('maxiou')}
                        className={`px-1.5 py-0.2 rounded text-[8px] font-mono ${
                          overallMetricKey === 'maxiou'
                            ? 'bg-[#6F69C9] text-white font-bold'
                            : 'bg-white text-[#626A7C] border border-[#D9DDEE]'
                        }`}
                      >
                        Max-IoU
                      </button>
                      <button
                        type="button"
                        onClick={() => setOverallMetricKey('auprc')}
                        className={`px-1.5 py-0.2 rounded text-[8px] font-mono ${
                          overallMetricKey === 'auprc'
                            ? 'bg-[#6F69C9] text-white font-bold'
                            : 'bg-white text-[#626A7C] border border-[#D9DDEE]'
                        }`}
                      >
                        Pixel AUPRC
                      </button>
                    </div>
                  </div>

                  {overallMetricKey === 'recall10' && (
                    <div className="text-[9px] text-[#24242A] leading-snug">
                      <p className="font-semibold text-[#6F69C9] mb-0.2">
                        Proposal-retrieval metric (NOT top 10% of voxels):
                      </p>
                      <p className="text-[#626A7C]">
                        Fraction of reference lesion components retrieved by at least one of the top-10 candidate regions.
                        Confirms weak evidence reliably retrieves true abnormal targets.
                      </p>
                    </div>
                  )}

                  {overallMetricKey === 'maxiou' && (
                    <div className="text-[9px] text-[#24242A] leading-snug">
                      <p className="font-semibold text-[#24242A] mb-0.2">
                        Best spatial overlap across threshold sweep:
                      </p>
                      <p className="text-[#626A7C]">
                        Can the evidence occupy the correct spatial region? Higher Max-IoU indicates better localization overlap (not supervised segmentation).
                      </p>
                    </div>
                  )}

                  {overallMetricKey === 'auprc' && (
                    <div className="text-[9px] text-[#24242A] leading-snug">
                      <p className="font-semibold text-[#24242A] mb-0.2">
                        Continuous evidence ranking under class imbalance:
                      </p>
                      <p className="text-[#626A7C]">
                        Measures whether true abnormal voxels are consistently ranked above the massive background volume.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Level 3: Why It Matters */}
              <div className="p-1.5 rounded-lg bg-[#FAFAFC] border-l-3 border-l-[#6F69C9] border border-[#D9DDEE]">
                <p className="text-[9.5px] text-[#24242A] leading-tight font-medium">
                  The improvement is consistent across both a large, coherent abnormality setting and a smaller, fragmented lesion setting.
                </p>
                <p className="text-[8.5px] text-[#626A7C] leading-tight mt-0.5">
                  Importantly, lesion masks were used only for test-time evaluation — training relied on{' '}
                  <span className="font-bold text-[#6F69C9]">diagnostic labels only</span>.
                </p>
              </div>
            </div>

            {/* Right 6 cols: Scientific Figure */}
            <div className="col-span-6 bg-white rounded-xl border border-[#D9DDEE] p-1.5 flex flex-col justify-between shadow-2xs h-full">
              <div className="flex items-center justify-between pb-0.5 border-b border-[#D9DDEE]/80 shrink-0">
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                  BENCHMARK VISUALIZATION · BRATS & MSLESSEG
                </span>
                <span className="text-[8px] font-mono text-[#74747D]">
                  CLICK IMAGE TO ENLARGE
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxData({
                    src: '/images/phd-defense/weak/thesis-weak-results-overall.png',
                    alt: 'Overall weak localization benchmark results on BraTS and MSLesSeg',
                    title: 'Overall Weak Localization Benchmark Results',
                    subtitle: 'Visible-lesion evaluation with proposal-level and pixel-level metrics (Oh et al., ISBI 2026)',
                    isLightBg: true,
                  })
                }
                role="button"
                tabIndex={0}
                aria-label="Click to enlarge overall results figure"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxData({
                      src: '/images/phd-defense/weak/thesis-weak-results-overall.png',
                      alt: 'Overall weak localization benchmark results on BraTS and MSLesSeg',
                      title: 'Overall Weak Localization Benchmark Results',
                      subtitle: 'Visible-lesion evaluation with proposal-level and pixel-level metrics (Oh et al., ISBI 2026)',
                      isLightBg: true,
                    });
                  }
                }}
                className="flex-1 min-h-0 relative flex items-center justify-center p-1 bg-white overflow-hidden group cursor-zoom-in rounded-lg max-h-[175px]"
              >
                <img
                  src="/images/phd-defense/weak/thesis-weak-results-overall.png"
                  alt="Overall weak localization benchmark results on BraTS and MSLesSeg"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                />
                <ZoomIndicatorBadge />
              </div>

              <div className="pt-0.5 border-t border-[#D9DDEE]/80 flex items-center justify-between shrink-0 text-[9px] text-[#626A7C]">
                <span>Figure: Overall localization performance on visible-lesion benchmarks.</span>
                <span className="font-mono text-[8px] text-[#74747D]">Thesis Ch. 6</span>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            STATE 02: SMALL-LESION SENSITIVITY
        ===================================================================== */}
        {activeTabKey === 'small-lesion' && (
          <div className="grid grid-cols-12 gap-3 h-full items-stretch animate-fadeIn">
            {/* Left 6 cols: 3-Level Scientific Interpretation */}
            <div className="col-span-6 flex flex-col justify-between gap-1 h-full">
              <div>
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                  QUESTION 02 · LESION SIZE STRATIFICATION
                </span>
                <h3 className="text-xs sm:text-sm font-black text-[#24242A] leading-tight mb-1">
                  The largest challenge is small and sparse evidence
                </h3>

                {/* Level 1: Size Progression Cards with focus on Small */}
                <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] mb-1">
                  <div className="flex items-center justify-between mb-0.5 pb-0.5 border-b border-[#D9DDEE]">
                    <span className="text-[9px] font-mono font-bold text-[#24242A]">
                      RECALL@10 STRATIFIED BY LESION SIZE
                    </span>
                    <div className="flex items-center gap-1">
                      {(['small', 'medium', 'large'] as const).map((bin) => (
                        <button
                          key={bin}
                          type="button"
                          onClick={() => setSizeBin(bin)}
                          className={`px-1.5 py-0.2 rounded text-[8px] font-mono uppercase ${
                            sizeBin === bin
                              ? 'bg-[#6F69C9] text-white font-bold'
                              : 'bg-white text-[#74747D] border border-[#D9DDEE]'
                          }`}
                        >
                          {bin}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Focus: Small lesions */}
                  <div className="grid grid-cols-2 gap-1.5 text-[9.5px]">
                    <div className="p-1 rounded-md bg-[#D9D8F4]/30 border border-[#A7A3DE]/60">
                      <span className="text-[8.5px] font-bold text-[#6F69C9] block">BraTS Small Lesions</span>
                      <div className="flex items-baseline justify-between mt-0.5 font-mono">
                        <span className="text-[#74747D]">0.50 →</span>
                        <span className="text-xs font-black text-[#6F69C9]">0.58</span>
                        <span className="text-[8.5px] font-bold text-[#6F69C9]">+0.08</span>
                      </div>
                      <span className="text-[8px] text-[#74747D] block mt-0.5">Med: 0.78 · Lrg: 0.87</span>
                    </div>

                    <div className="p-1 rounded-md bg-[#D9D8F4]/30 border border-[#A7A3DE]/60">
                      <span className="text-[8.5px] font-bold text-[#6F69C9] block">MSLesSeg Small Lesions</span>
                      <div className="flex items-baseline justify-between mt-0.5 font-mono">
                        <span className="text-[#74747D]">0.45 →</span>
                        <span className="text-xs font-black text-[#6F69C9]">0.54</span>
                        <span className="text-[8.5px] font-bold text-[#6F69C9]">+0.09</span>
                      </div>
                      <span className="text-[8px] text-[#74747D] block mt-0.5">Med: 0.68 · Lrg: 0.78</span>
                    </div>
                  </div>
                </div>

                {/* Level 2: What Does This Mean? */}
                <div className="p-1.5 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] mb-1 text-[9.5px] text-[#24242A] leading-snug">
                  <p className="font-bold text-[#24242A] mb-0.5">
                    Small lesions are the strictest test of weak localization:
                  </p>
                  <p className="text-[#626A7C]">
                    Large abnormalities may still be retrieved by broad maps. Small abnormalities require the highest-ranked evidence to be spatially precise. Better small-lesion Recall@10 confirms calibration retains compact targets.
                  </p>
                </div>
              </div>

              {/* Level 3: Shortened ALS relevance block per exact user request */}
              <div className="p-1.5 rounded-lg bg-[#FAFAFC] border-l-3 border-l-[#6F69C9] border border-[#D9DDEE]">
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                  WHY THIS MATTERS FOR ALS
                </span>
                <p className="text-[9.5px] text-[#24242A] leading-snug font-medium">
                  ALS-relevant brainstem nuclei and pathways are small; small-lesion retrieval is therefore a useful methodological stress test.
                </p>
                <div className="mt-1 flex items-center gap-1 text-[8.5px] text-[#74747D] font-mono">
                  <span className="font-bold text-[#6F69C9]">Caution:</span>
                  <span>Methodological proxy — not direct ALS nuclei validation.</span>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Scientific Figure */}
            <div className="col-span-6 bg-white rounded-xl border border-[#D9DDEE] p-1.5 flex flex-col justify-between shadow-2xs h-full">
              <div className="flex items-center justify-between pb-0.5 border-b border-[#D9DDEE]/80 shrink-0">
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                  SIZE-STRATIFIED RETRIEVAL · RECALL@10
                </span>
                <span className="text-[8px] font-mono text-[#74747D]">
                  CLICK IMAGE TO ENLARGE
                </span>
              </div>

              <div
                onClick={() =>
                  setLightboxData({
                    src: '/images/phd-defense/weak/thesis-weak-results-small-lesions.png',
                    alt: 'Lesion size-stratified weak localization performance on BraTS and MSLesSeg',
                    title: 'Small-Lesion Weak Localization Performance',
                    subtitle: 'Recall@10 stratified across small, medium, and large lesion components (Thesis Ch. 6)',
                    isLightBg: true,
                  })
                }
                role="button"
                tabIndex={0}
                aria-label="Click to enlarge small-lesion results figure"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxData({
                      src: '/images/phd-defense/weak/thesis-weak-results-small-lesions.png',
                      alt: 'Lesion size-stratified weak localization performance on BraTS and MSLesSeg',
                      title: 'Small-Lesion Weak Localization Performance',
                      subtitle: 'Recall@10 stratified across small, medium, and large lesion components (Thesis Ch. 6)',
                      isLightBg: true,
                    });
                  }
                }}
                className="flex-1 min-h-0 relative flex items-center justify-center p-1 bg-white overflow-hidden group cursor-zoom-in rounded-lg max-h-[175px]"
              >
                <img
                  src="/images/phd-defense/weak/thesis-weak-results-small-lesions.png"
                  alt="Lesion size-stratified weak localization performance on BraTS and MSLesSeg"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                />
                <ZoomIndicatorBadge />
              </div>

              <div className="pt-0.5 border-t border-[#D9DDEE]/80 flex items-center justify-between shrink-0 text-[9px] text-[#626A7C]">
                <span>Figure: Recall@10 stratified across lesion size bins.</span>
                <span className="font-mono text-[8px] text-[#74747D]">Thesis Ch. 6</span>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            STATE 03: RELIABILITY VALIDITY (Table 6.6 Quantitative Summary)
        ===================================================================== */}
        {activeTabKey === 'reliability' && (
          <div className="flex flex-col justify-between h-full gap-1 animate-fadeIn">
            <div>
              {/* Header & Sub-label */}
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                  QUESTION 03 · UNCERTAINTY VS. EVIDENCE QUALITY (THESIS TABLE 6.6)
                </span>
                <span className="px-2 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE] text-[8.5px] font-mono text-[#626A7C]">
                  <strong className="text-[#6F69C9]">High rel. (low uncert.)</strong> vs. <span className="text-[#74747D]">Low rel. (high uncert.)</span>
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-black text-[#24242A] leading-tight mb-1.5">
                Does low uncertainty actually identify more trustworthy evidence?
              </h3>

              {/* Three Compact Quantitative Comparison Cards */}
              <div className="grid grid-cols-3 gap-2 mb-1.5">
                {/* 1. BraTS Card */}
                <div className="p-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#D9DDEE]">
                    <span className="text-[10.5px] font-black text-[#24242A]">BraTS</span>
                    <span className="text-[8px] font-mono text-[#74747D]">Glioma Benchmark</span>
                  </div>

                  <div className="space-y-1 font-mono text-[9.5px]">
                    <div className="flex items-center justify-between p-1 rounded bg-white border border-[#D9DDEE]">
                      <span className="text-[#626A7C] font-sans font-medium text-[9px]">Deletion AUC</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#6F69C9]">0.43</span>
                        <span className="text-[#74747D] text-[8px]">vs</span>
                        <span className="text-[#74747D]">0.19</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded bg-white border border-[#D9DDEE]">
                      <span className="text-[#626A7C] font-sans font-medium text-[9px]">Stability</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#6F69C9]">0.88</span>
                        <span className="text-[#74747D] text-[8px]">vs</span>
                        <span className="text-[#74747D]">0.57</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded bg-white border border-[#D9DDEE]">
                      <span className="text-[#626A7C] font-sans font-medium text-[9px]">Spatial alignment</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#6F69C9]">0.55</span>
                        <span className="text-[#74747D] text-[8px]">vs</span>
                        <span className="text-[#74747D]">0.22</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. MSLesSeg Card */}
                <div className="p-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#D9DDEE]">
                    <span className="text-[10.5px] font-black text-[#24242A]">MSLesSeg</span>
                    <span className="text-[8px] font-mono text-[#74747D]">MS Benchmark</span>
                  </div>

                  <div className="space-y-1 font-mono text-[9.5px]">
                    <div className="flex items-center justify-between p-1 rounded bg-white border border-[#D9DDEE]">
                      <span className="text-[#626A7C] font-sans font-medium text-[9px]">Deletion AUC</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#6F69C9]">0.32</span>
                        <span className="text-[#74747D] text-[8px]">vs</span>
                        <span className="text-[#74747D]">0.13</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded bg-white border border-[#D9DDEE]">
                      <span className="text-[#626A7C] font-sans font-medium text-[9px]">Stability</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#6F69C9]">0.84</span>
                        <span className="text-[#74747D] text-[8px]">vs</span>
                        <span className="text-[#74747D]">0.43</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-1 rounded bg-white border border-[#D9DDEE]">
                      <span className="text-[#626A7C] font-sans font-medium text-[9px]">Spatial alignment</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#6F69C9]">0.38</span>
                        <span className="text-[#74747D] text-[8px]">vs</span>
                        <span className="text-[#74747D]">0.14</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Mask-Free Settings Card */}
                <div className="p-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#D9DDEE]">
                    <span className="text-[10.5px] font-black text-[#24242A]">MASK-FREE SETTINGS</span>
                    <span className="text-[8px] font-mono text-[#6F69C9] font-bold">Spatial Alignment Trend</span>
                  </div>

                  <div className="space-y-1 font-mono text-[9.5px]">
                    <div className="p-1 rounded bg-white border border-[#D9DDEE]">
                      <div className="flex items-center justify-between text-[#626A7C] font-sans font-medium text-[9px] mb-0.5">
                        <span>ADNI (Hippocampus)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[8.5px] text-[#74747D] font-sans">Target ROI Alignment</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[#6F69C9]">0.49</span>
                          <span className="text-[#74747D] text-[8px]">vs</span>
                          <span className="text-[#74747D]">0.21</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 rounded bg-white border border-[#D9DDEE]">
                      <div className="flex items-center justify-between text-[#626A7C] font-sans font-medium text-[9px] mb-0.5">
                        <span>PULSE (ALS Brainstem)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[8.5px] text-[#74747D] font-sans">Target ROI Alignment</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[#6F69C9]">0.43</span>
                          <span className="text-[#74747D] text-[8px]">vs</span>
                          <span className="text-[#74747D]">0.16</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/50 text-[8.5px] font-sans text-[#24242A] text-center">
                      Higher concentration in disease-relevant ROIs
                    </div>
                  </div>
                </div>
              </div>

              {/* Brief Metric Meanings */}
              <div className="p-1.5 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] grid grid-cols-3 gap-2 text-[9px] mb-1">
                <div>
                  <span className="font-bold text-[#24242A] block text-[9px]">Deletion AUC:</span>
                  <span className="text-[#626A7C] leading-tight">Does removing the evidence reduce classifier confidence?</span>
                </div>
                <div>
                  <span className="font-bold text-[#24242A] block text-[9px]">Stability:</span>
                  <span className="text-[#626A7C] leading-tight">Does the same evidence remain under small perturbations?</span>
                </div>
                <div>
                  <span className="font-bold text-[#24242A] block text-[9px]">Spatial alignment:</span>
                  <span className="text-[#626A7C] leading-tight">Does the evidence fall in lesion masks or disease-relevant ROIs?</span>
                </div>
              </div>
            </div>

            {/* Bottom Interpretation & Takeaway */}
            <div className="space-y-1">
              <div className="p-1.5 rounded-lg bg-[#FAFAFC] border-l-3 border-l-[#6F69C9] border border-[#D9DDEE] text-[9.5px]">
                <p className="text-[#24242A] leading-tight font-medium">
                  Lower uncertainty consistently corresponds to evidence that is more decision-faithful, more stable, and better spatially aligned.
                </p>
              </div>

              <div className="p-1.5 rounded-lg bg-white border border-[#D9D8F4] text-[9.5px] text-center">
                <span className="font-bold text-[#24242A]">The uncertainty estimate is informative: </span>
                <span className="text-[#626A7C]">it predicts evidence quality rather than merely visualizing confidence.</span>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            STATE 04: ROI PLAUSIBILITY (ADNI Mask-Free Bridge)
        ===================================================================== */}
        {activeTabKey === 'roi' && (
          <div className="grid grid-cols-12 gap-3 h-full items-stretch animate-fadeIn">
            {/* Left 7 cols: ADNI Mask-free bridge quantitative results */}
            <div className="col-span-7 flex flex-col justify-between gap-1 h-full">
              <div>
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                  QUESTION 04 · MASK-FREE NEURODEGENERATION (ADNI BRIDGE)
                </span>
                <h3 className="text-xs sm:text-sm font-black text-[#24242A] leading-tight mb-1">
                  Can reliability help when voxel-wise disease masks do not exist?
                </h3>

                <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] mb-1">
                  <div className="flex items-center justify-between mb-0.5 pb-0.5 border-b border-[#D9DDEE]">
                    <div>
                      <span className="text-[9.5px] font-bold text-[#24242A]">ADNI Validation</span>
                      <span className="text-[8.5px] text-[#74747D] ml-1.5 font-mono">Target: Medial Temporal / Hippocampal ROI</span>
                    </div>
                    <span className="px-1.5 py-0.2 rounded bg-[#D9D8F4]/50 text-[8px] font-mono text-[#6F69C9] font-bold">
                      Mask-free setting
                    </span>
                  </div>

                  {/* Quantitative Comparison */}
                  <div className="grid grid-cols-2 gap-1.5 text-[9.5px] mb-1">
                    <div className="p-1 rounded bg-white border border-[#D9DDEE]">
                      <div className="flex items-center justify-between text-[#74747D] text-[8.5px] font-mono mb-0.5">
                        <span>HIT@ROI ↑</span>
                        <span className="text-[#6F69C9] font-bold">+0.07</span>
                      </div>
                      <div className="flex items-baseline justify-between font-mono">
                        <span className="text-[#74747D]">0.65 →</span>
                        <span className="text-[11px] font-black text-[#6F69C9]">0.72</span>
                      </div>
                      <span className="text-[8px] text-[#74747D] block mt-0.5">Overlaps target anatomy</span>
                    </div>

                    <div className="p-1 rounded bg-white border border-[#D9DDEE]">
                      <div className="flex items-center justify-between text-[#74747D] text-[8.5px] font-mono mb-0.5">
                        <span>FP@NON-ROI ↓</span>
                        <span className="text-[#6F69C9] font-bold">-0.06 (Better)</span>
                      </div>
                      <div className="flex items-baseline justify-between font-mono">
                        <span className="text-[#74747D]">0.20 →</span>
                        <span className="text-[11px] font-black text-[#6F69C9]">0.14</span>
                      </div>
                      <span className="text-[8px] text-[#74747D] block mt-0.5">Reduced non-specific noise</span>
                    </div>
                  </div>

                  {/* Key Concentration Contrast */}
                  <div className="p-1 rounded bg-[#D9D8F4]/30 border border-[#A7A3DE]/60 flex items-center justify-between text-[9.5px]">
                    <div>
                      <span className="font-bold text-[#24242A] block text-[9px]">Evidence Concentration Comparison</span>
                      <span className="text-[8px] text-[#626A7C]">Raw overall evidence vs. Low-uncertainty reliable evidence</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono">
                      <div className="text-right">
                        <span className="text-[8px] text-[#74747D] block">Overall</span>
                        <span className="text-[11px] font-bold text-[#24242A]">0.61</span>
                      </div>
                      <span className="text-[#6F69C9] font-bold text-xs">→</span>
                      <div className="text-right">
                        <span className="text-[8px] text-[#6F69C9] font-bold block">Reliable Only</span>
                        <span className="text-xs font-black text-[#6F69C9]">0.66</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Interpretation */}
                <div className="p-1.5 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[9.5px] text-[#24242A] leading-snug">
                  <p className="font-bold text-[#24242A] mb-0.5">
                    The reliable portion of the map is even more concentrated in the target ROI:
                  </p>
                  <p className="text-[#626A7C]">
                    Reliability gating does not simply suppress activation everywhere. It preferentially preserves evidence that is more anatomically plausible.
                  </p>
                </div>
              </div>

              {/* Bridge to ALS */}
              <div className="p-1.5 rounded-lg bg-[#FAFAFC] border-l-3 border-l-[#6F69C9] border border-[#D9DDEE]">
                <p className="text-[9.5px] text-[#24242A] font-bold leading-tight">
                  ADNI provides the bridge from lesion-mask validation to the mask-free setting needed for ALS.
                </p>
                <p className="text-[8.5px] text-[#626A7C] leading-tight mt-0.5">
                  The next question is whether the same ROI-centric reliability principle remains meaningful in the PULSE ALS cohort.
                </p>
              </div>
            </div>

            {/* Right 5 cols: HTML/CSS ROI Schematic */}
            <div className="col-span-5 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs h-full">
              <div>
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                  ANATOMICAL PLAUSIBILITY SCHEMATIC
                </span>
                <h4 className="text-[11px] font-bold text-[#24242A] mb-1.5">
                  Selective Preservation of Disease-Relevant ROIs
                </h4>

                <div className="space-y-1.5 text-[9.5px]">
                  {/* Step 1 */}
                  <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE]">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold text-[#24242A]">Raw Attribution Map</span>
                      <span className="text-[8px] font-mono text-[#74747D]">Broad & diffuse</span>
                    </div>
                    <p className="text-[8.5px] text-[#74747D]">
                      Activations appear both in relevant temporal lobes and non-specific white matter/cortex (FP: 0.20).
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-1.5 rounded-lg bg-[#D9D8F4]/30 border border-[#A7A3DE]/70">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold text-[#6F69C9]">After Reliability Calibration</span>
                      <span className="text-[8px] font-mono text-[#6F69C9] font-bold">Concentration: 0.66</span>
                    </div>
                    <p className="text-[8.5px] text-[#24242A]">
                      High-uncertainty non-specific activations are pruned; reliable evidence concentrates in target pathology regions.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE]">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold text-[#24242A]">PULSE ALS Extrapolation</span>
                      <span className="text-[8px] font-mono text-[#6F69C9] font-bold">Slide 19</span>
                    </div>
                    <p className="text-[8.5px] text-[#74747D]">
                      Enables testing whether weakly supervised evidence concentrates specifically in ALS-relevant brainstem nuclei.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1 border-t border-[#D9DDEE] flex items-center justify-between text-[8.5px] text-[#74747D] font-mono">
                <span>Validation without voxel masks</span>
                <span className="text-[#6F69C9] font-bold">Thesis Ch. 6</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          BOTTOM: Takeaway & Transition to Slide 19 (~11% height)
          Fixed bottom-safe area with guaranteed clearance (shrink-0 z-10)
      ========================================================================= */}
      <div className="shrink-0 z-10 mt-1 p-2 rounded-xl bg-white border border-[#D9D8F4] shadow-2xs">
        <p className="text-xs font-bold text-[#24242A] leading-snug text-center">
          Reliability calibration matters most when the evidence is{' '}
          <span className="text-[#6F69C9] font-black">difficult to localize</span>,{' '}
          <span className="text-[#6F69C9] font-black">small</span>, or{' '}
          <span className="text-[#6F69C9] font-black">impossible to validate voxel by voxel</span>.
        </p>

        <div className="mt-1 pt-1 border-t border-[#D9DDEE]/80 flex items-center justify-between text-[10.5px]">
          <span className="text-[#74747D] italic">
            So what happens in the actual clinical target of this thesis — ALS?
          </span>
          <div className="flex items-center gap-1.5 text-[#6F69C9] font-mono font-bold text-[10px]">
            <span>Next: ALS Clinical Target (Slide 19)</span>
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

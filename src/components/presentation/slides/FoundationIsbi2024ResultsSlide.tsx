import React, { useRef, useState } from 'react';
import { BookOpen, Award, CheckCircle2, Sliders, Cpu, GitBranch, Info } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface FoundationIsbi2024ResultsSlideProps {
  isActive: boolean;
}

type TabType = 'qualitative' | 'decoder-loss' | 'encoder-transfer';

interface DecoderModel {
  name: string;
  mIoU: number;
  params: string;
  isCustom?: boolean;
  interpretation: string;
}

const DECODER_MODELS: DecoderModel[] = [
  {
    name: 'DeepLabV3',
    mIoU: 0.789,
    params: '39.6M',
    interpretation: 'Highest overall macro mIoU; ASPP multi-scale pooling provides strong contextual capture.',
  },
  {
    name: 'FPN',
    mIoU: 0.777,
    params: '28.5M',
    interpretation: 'Strong feature pyramid aggregation across scales with competitive efficiency.',
  },
  {
    name: 'DeepLabV3+',
    mIoU: 0.761,
    params: '41.2M',
    interpretation: 'ASPP with decoder module; higher parameter count without additional accuracy gains here.',
  },
  {
    name: 'PSPNet',
    mIoU: 0.756,
    params: '46.7M',
    interpretation: 'Pyramid pooling module capturing global context priors at the cost of high parameter load.',
  },
  {
    name: 'N-DecoNet',
    mIoU: 0.753,
    params: '21.5M',
    isCustom: true,
    interpretation: 'Competitive segmentation performance with a simple and parameter-efficient decoder.',
  },
  {
    name: 'U-DecoNet',
    mIoU: 0.714,
    params: '24.1M',
    interpretation: 'Hierarchical multi-scale decoder with direct skip links across stages.',
  },
  {
    name: 'U-Net',
    mIoU: 0.684,
    params: '24.4M',
    interpretation: 'Standard symmetric encoder-decoder baseline; lower boundary precision on small nuclei.',
  },
  {
    name: 'U-Net++',
    mIoU: 0.646,
    params: '26.1M',
    interpretation: 'Nested dense skip pathways; increased complexity did not translate to higher overlap.',
  },
  {
    name: 'MAnet',
    mIoU: 0.610,
    params: '31.8M',
    interpretation: 'Multi-scale attention mechanism; lower macro mIoU across 34 fine-grained classes.',
  },
];

interface LossInfo {
  name: string;
  shortDesc: string;
  fullDesc: string;
}

const LOSS_OPTIONS: LossInfo[] = [
  {
    name: 'DiceCE',
    shortDesc: 'Best-performing formulation',
    fullDesc: 'Best-performing loss across the compared models, balancing spatial overlap with stable gradient descent.',
  },
  {
    name: 'DiceFocal',
    shortDesc: 'Overlap + hard mining',
    fullDesc: 'Combines volumetric Dice with Focal penalty; competitive but sensitive to class imbalance weighting.',
  },
  {
    name: 'SoftCE',
    shortDesc: 'Pixel cross-entropy',
    fullDesc: 'Increasing the SoftCE contribution reduced performance, particularly for the small nuclei classes.',
  },
  {
    name: 'Focal',
    shortDesc: 'Hard-example focus',
    fullDesc: 'Addresses class imbalance on boundaries but lacks direct multi-label volumetric overlap optimization.',
  },
  {
    name: 'Dice',
    shortDesc: 'Volumetric overlap',
    fullDesc: 'Standard segmentation loss; strong on larger brainstem structures but less stable on tiny nuclei alone.',
  },
  {
    name: 'Jaccard',
    shortDesc: 'IoU surrogate',
    fullDesc: 'Direct surrogate for intersection-over-union; achieved slightly lower mIoU than DiceCE combination.',
  },
];

export const FoundationIsbi2024ResultsSlide: React.FC<FoundationIsbi2024ResultsSlideProps> = () => {
  // Tab switching: default is 'qualitative'
  const [activeTab, setActiveTab] = useState<TabType>('qualitative');
  const [hoveredTab, setHoveredTab] = useState<TabType | null>(null);
  const displayTab = hoveredTab ?? activeTab;

  // Interactive Model Selection in Tab 2 (Default: N-DecoNet)
  const [selectedModelName, setSelectedModelName] = useState<string>('N-DecoNet');
  const [hoveredModelName, setHoveredModelName] = useState<string | null>(null);
  const activeModelName = hoveredModelName ?? selectedModelName;
  const activeModel = DECODER_MODELS.find((m) => m.name === activeModelName) ?? DECODER_MODELS[4];

  // Interactive Loss Selection in Tab 2 (Default: DiceCE)
  const [selectedLossName, setSelectedLossName] = useState<string>('DiceCE');
  const [hoveredLossName, setHoveredLossName] = useState<string | null>(null);
  const activeLossName = hoveredLossName ?? selectedLossName;
  const activeLoss = LOSS_OPTIONS.find((l) => l.name === activeLossName) ?? LOSS_OPTIONS[0];

  // Interactive Findings Hover in Tab 3
  const [hoveredFinding, setHoveredFinding] = useState<'encoder' | 'transfer' | null>(null);

  // Lightbox modal state
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const qualTriggerRef = useRef<HTMLDivElement>(null);
  const lossTriggerRef = useRef<HTMLDivElement>(null);
  const encTriggerRef = useRef<HTMLDivElement>(null);

  const handleOpenQualLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/foundations/foundation-isbi2024-qualitative-results.png',
      alt: 'Qualitative multi-class brainstem segmentation comparison across models and reference',
      title: 'Qualitative Results',
      subtitle: 'Comparison: Input, Atlas-Derived Reference, FPN, DeepLabV3, N-DecoNet, U-DecoNet',
      isLightBg: true,
    });
  };

  const handleOpenLossLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/foundations/foundation-isbi2024-loss-analysis.png',
      alt: 'Loss function sensitivity analysis across Dice, Focal, and Cross-Entropy combinations',
      title: 'Loss Function Analysis',
      subtitle: 'Evaluation of DiceCE, DiceFocal, Focal, SoftCE, Dice, and Jaccard formulations',
      isLightBg: true,
    });
  };

  const handleOpenEncLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/foundations/foundation-isbi2024-encoder-transfer.png',
      alt: 'Encoder complexity and ImageNet transfer learning performance analysis',
      title: 'Encoder & Transfer Learning Analysis',
      subtitle: 'Pretrained ImageNet vs. Random Initialization across encoder backbones',
      isLightBg: true,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header & Result Tabs (Compact ~18-20% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              FOUNDATIONS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              What Did the Initial Segmentation Study Show?
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Decoder and loss design mattered more than encoder complexity or transfer learning.
            </p>
          </div>

          {/* Academic Publication Citation */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] text-[#626A7C] shrink-0">
            <BookOpen className="w-3.5 h-3.5 text-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Oh et al., IEEE ISBI 2024</span>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div
          className="flex items-center gap-1.5 pt-1 border-b border-[#D9DDEE]/80"
          role="tablist"
          aria-label="ISBI 2024 study findings tabs"
          onMouseLeave={() => setHoveredTab(null)}
        >
          <button
            type="button"
            role="tab"
            id="tab-btn-qualitative"
            aria-selected={displayTab === 'qualitative'}
            onMouseEnter={() => setHoveredTab('qualitative')}
            onFocus={() => setHoveredTab('qualitative')}
            onBlur={() => setHoveredTab(null)}
            onClick={() => {
              setActiveTab('qualitative');
              setHoveredTab(null);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
              displayTab === 'qualitative'
                ? 'bg-[#6F69C9] text-white border-[#6F69C9] shadow-xs'
                : 'bg-white text-[#74747D] border-[#D9DDEE] hover:text-[#24242A] hover:border-[#A7A3DE]'
            }`}
          >
            1. Qualitative Results
          </button>

          <button
            type="button"
            role="tab"
            id="tab-btn-decoder-loss"
            aria-selected={displayTab === 'decoder-loss'}
            onMouseEnter={() => setHoveredTab('decoder-loss')}
            onFocus={() => setHoveredTab('decoder-loss')}
            onBlur={() => setHoveredTab(null)}
            onClick={() => {
              setActiveTab('decoder-loss');
              setHoveredTab(null);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
              displayTab === 'decoder-loss'
                ? 'bg-[#6F69C9] text-white border-[#6F69C9] shadow-xs'
                : 'bg-white text-[#74747D] border-[#D9DDEE] hover:text-[#24242A] hover:border-[#A7A3DE]'
            }`}
          >
            2. Decoder &amp; Loss
          </button>

          <button
            type="button"
            role="tab"
            id="tab-btn-encoder-transfer"
            aria-selected={displayTab === 'encoder-transfer'}
            onMouseEnter={() => setHoveredTab('encoder-transfer')}
            onFocus={() => setHoveredTab('encoder-transfer')}
            onBlur={() => setHoveredTab(null)}
            onClick={() => {
              setActiveTab('encoder-transfer');
              setHoveredTab(null);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
              displayTab === 'encoder-transfer'
                ? 'bg-[#6F69C9] text-white border-[#6F69C9] shadow-xs'
                : 'bg-white text-[#74747D] border-[#D9DDEE] hover:text-[#24242A] hover:border-[#A7A3DE]'
            }`}
          >
            3. Encoder &amp; Transfer Learning
          </button>
        </div>
      </div>

      {/* =========================================================================
          MAIN SELECTED-RESULT AREA (~62-66% height — DOMINANT VISUAL CONTENT)
      ========================================================================= */}
      <div className="relative flex-1 min-h-0 my-1">
        {/* -----------------------------------------------------------------------
            TAB 1: QUALITATIVE RESULTS (Large Figure ~74% width, ~26% interpretation)
        ----------------------------------------------------------------------- */}
        <div
          className={`absolute inset-0 flex gap-3.5 items-stretch transition-opacity duration-200 ease-in-out ${
            displayTab === 'qualitative' ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
        >
          {/* Dominant Visual Figure on PURE WHITE Surface */}
          <div
            ref={qualTriggerRef}
            role="button"
            tabIndex={displayTab === 'qualitative' ? 0 : -1}
            aria-label="Click to enlarge Qualitative Results figure"
            onClick={handleOpenQualLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenQualLightbox();
              }
            }}
            className="w-[74%] h-full relative bg-white rounded-xl border border-[#D9DDEE] p-2 flex items-center justify-center shadow-2xs group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            <img
              src="/images/phd-defense/foundations/foundation-isbi2024-qualitative-results.png"
              alt="Multi-model qualitative brainstem segmentation vs. atlas-derived reference"
              className="w-full h-full object-contain pointer-events-none"
            />
            {/* Subtle Tag */}
            <div className="absolute bottom-2 left-2.5 pointer-events-none">
              <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-[#D9DDEE] text-[9px] font-mono text-[#6F69C9] font-semibold shadow-2xs">
                INPUT · ATLAS-DERIVED REFERENCE · FPN · DEEPLABV3 · N-DECONET · U-DECONET
              </span>
            </div>
            <ZoomIndicatorBadge />
          </div>

          {/* Right: Concise Observation & Key Takeaway */}
          <div className="w-[26%] h-full bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-1.5 pb-1 border-b border-[#D9DDEE]/80 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
                <h3 className="text-xs font-bold text-[#24242A] uppercase tracking-wide">
                  What we observed
                </h3>
              </div>

              <div className="space-y-2 text-[11px] text-[#24242A] leading-snug">
                <p>
                  Multiple architectures could reproduce the atlas-derived multi-class brainstem structure.
                </p>
                <p className="text-[#626A7C]">
                  <strong className="text-[#24242A]">N-DecoNet</strong> remained competitive despite its simpler decoder.
                </p>
              </div>
            </div>

            {/* Emphasized Takeaway */}
            <div className="p-2.5 rounded-xl bg-white border border-[#6F69C9]/40 shadow-2xs">
              <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-1">
                KEY TAKEAWAY
              </span>
              <p className="text-xs font-bold text-[#24242A] flex items-center gap-1.5 leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6F69C9] shrink-0" />
                <span>Supervised segmentation was technically feasible.</span>
              </p>
              <p className="text-[10px] text-[#74747D] mt-1 italic">
                Evaluated against atlas-derived reference labels across 34 classes.
              </p>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            TAB 2: DECODER & LOSS (Optimized Split: Left 48% Bars, Right 52% Large Figure)
        ----------------------------------------------------------------------- */}
        <div
          className={`absolute inset-0 flex gap-3.5 items-stretch transition-opacity duration-200 ease-in-out ${
            displayTab === 'decoder-loss' ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
        >
          {/* Left: Decoder Architecture Comparison (~48% width) */}
          <div className="w-[48%] h-full bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE]/80 mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
                  <h3 className="text-xs font-bold text-[#24242A] tracking-tight">
                    Decoder Architecture Comparison
                  </h3>
                </div>
                <span className="text-[9px] text-[#74747D] font-mono">
                  Hover / Click to select
                </span>
              </div>

              {/* 9 Model Rows filling the vertical space efficiently */}
              <div
                className="flex-1 flex flex-col justify-around py-0.5"
                onMouseLeave={() => setHoveredModelName(null)}
              >
                {DECODER_MODELS.map((model) => {
                  const isSelected = activeModelName === model.name;
                  const isLocked = selectedModelName === model.name;
                  const barWidthPercent = (model.mIoU / 0.85) * 100;

                  return (
                    <div
                      key={model.name}
                      role="button"
                      tabIndex={displayTab === 'decoder-loss' ? 0 : -1}
                      aria-pressed={isLocked}
                      aria-label={`${model.name} macro mIoU ${model.mIoU.toFixed(3)}`}
                      onMouseEnter={() => setHoveredModelName(model.name)}
                      onFocus={() => setHoveredModelName(model.name)}
                      onBlur={() => setHoveredModelName(null)}
                      onClick={() => {
                        setSelectedModelName(model.name);
                        setHoveredModelName(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedModelName(model.name);
                        }
                      }}
                      className={`flex items-center gap-2 text-[10px] px-1.5 py-0.5 rounded-md transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6F69C9] ${
                        isSelected
                          ? 'bg-white ring-1 ring-[#6F69C9] shadow-2xs opacity-100'
                          : activeModelName
                          ? 'opacity-65 hover:opacity-100'
                          : 'opacity-100'
                      }`}
                    >
                      <div className="w-20 shrink-0">
                        <span
                          className={`truncate font-mono text-[10.5px] block ${
                            model.isCustom
                              ? 'font-bold text-[#6F69C9]'
                              : model.name === 'DeepLabV3'
                              ? 'font-bold text-[#24242A]'
                              : 'text-[#24242A]'
                          }`}
                        >
                          {model.name}
                        </span>
                      </div>

                      {/* Bar Track */}
                      <div className="flex-1 h-3 bg-white rounded-[3px] border border-[#D9DDEE] overflow-hidden relative">
                        <div
                          style={{ width: `${barWidthPercent}%` }}
                          className={`h-full rounded-[2px] transition-all duration-200 ${
                            model.isCustom
                              ? 'bg-[#6F69C9]'
                              : model.name === 'DeepLabV3'
                              ? 'bg-[#24242A]'
                              : 'bg-[#A7A3DE]'
                          }`}
                        />
                      </div>

                      {/* Value */}
                      <div className="w-12 text-right font-mono font-bold shrink-0 text-[10.5px]">
                        <span
                          className={
                            model.isCustom
                              ? 'text-[#6F69C9]'
                              : model.name === 'DeepLabV3'
                              ? 'text-[#24242A]'
                              : 'text-[#626A7C]'
                          }
                        >
                          {model.mIoU.toFixed(3)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compact Strip Directly Below Bars */}
            <div className="pt-1.5 border-t border-[#D9DDEE]/80">
              <div className="flex items-center justify-between text-[10.5px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#24242A]">{activeModel.name}</span>
                  <span className="text-[#74747D]">·</span>
                  <span className="font-bold text-[#6F69C9]">{activeModel.mIoU.toFixed(3)} macro mIoU</span>
                  <span className="text-[#74747D]">·</span>
                  <span className="text-[#626A7C]">{activeModel.params}</span>
                </div>
                <span className="text-[9px] text-[#74747D]">
                  Best: <strong className="text-[#24242A]">DeepLabV3 (0.789)</strong>
                </span>
              </div>
              <p className="text-[10px] text-[#626A7C] leading-snug mt-0.5 truncate">
                {activeModel.interpretation}
              </p>
            </div>
          </div>

          {/* Right: Loss Function Sensitivity (~52% width, Large Figure) */}
          <div className="w-[52%] h-full bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-2.5 flex flex-col justify-between shadow-2xs">
            {/* Header + Compact Formulation Selector */}
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-[#D9DDEE]/80 mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
                  <h3 className="text-xs font-bold text-[#24242A] tracking-tight">
                    Loss Function Sensitivity
                  </h3>
                </div>

                {/* Compact Loss Formulation Buttons */}
                <div
                  className="flex items-center gap-1"
                  onMouseLeave={() => setHoveredLossName(null)}
                >
                  {LOSS_OPTIONS.map((loss) => {
                    const isSelected = activeLossName === loss.name;
                    return (
                      <button
                        key={loss.name}
                        type="button"
                        tabIndex={displayTab === 'decoder-loss' ? 0 : -1}
                        onMouseEnter={() => setHoveredLossName(loss.name)}
                        onFocus={() => setHoveredLossName(loss.name)}
                        onBlur={() => setHoveredLossName(null)}
                        onClick={() => {
                          setSelectedLossName(loss.name);
                          setHoveredLossName(null);
                        }}
                        className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold transition-all duration-150 border cursor-pointer ${
                          isSelected
                            ? 'bg-[#6F69C9] text-white border-[#6F69C9] shadow-2xs'
                            : 'bg-white text-[#626A7C] border-[#D9DDEE] hover:text-[#24242A] hover:border-[#A7A3DE]'
                        }`}
                      >
                        {loss.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* DOMINANT Loss Figure (Takes ~60% of vertical height on pure white) */}
            <div
              ref={lossTriggerRef}
              role="button"
              tabIndex={displayTab === 'decoder-loss' ? 0 : -1}
              aria-label="Click to enlarge Loss Analysis figure"
              onClick={handleOpenLossLightbox}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLossLightbox();
                }
              }}
              className="flex-1 min-h-0 w-full bg-white rounded-lg border border-[#D9DDEE] p-1 flex items-center justify-center relative shadow-2xs group cursor-zoom-in my-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
            >
              <img
                src="/images/phd-defense/foundations/foundation-isbi2024-loss-analysis.png"
                alt="Loss function sensitivity curves across Dice, Focal, and SoftCE formulations"
                className="w-full h-full object-contain pointer-events-none"
              />
              <ZoomIndicatorBadge />
            </div>

            {/* Below Figure: ONE Compact Horizontal Results Row */}
            <div className="space-y-1 pt-0.5">
              <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-white border border-[#D9D8F4] text-[10.5px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9.5px] font-mono font-bold text-[#74747D] uppercase">Best Loss:</span>
                  <span className="font-mono font-bold text-[#24242A]">DiceCE</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <span className="text-[9.5px] text-[#74747D]">N-DecoNet nuclei mIoU:</span>
                  <span className="font-bold text-[#6F69C9]">
                    0.904{' '}
                    <span className="text-[8.5px] font-normal text-[#626A7C]">
                      (specifically nuclei classes)
                    </span>
                  </span>
                </div>
              </div>

              {/* One Short Interpretation */}
              <p className="text-[10px] text-[#626A7C] leading-snug px-0.5">
                Increasing the SoftCE contribution reduced performance, particularly for the small nuclei classes.
              </p>

              {/* One Emphasized Line */}
              <p className="text-[10.5px] font-bold text-[#24242A] flex items-center gap-1.5 px-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9] shrink-0" />
                <span>Fine-structure segmentation was highly sensitive to loss design.</span>
              </p>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            TAB 3: ENCODER & TRANSFER LEARNING (Large Figure 68% width, 32% findings)
        ----------------------------------------------------------------------- */}
        <div
          className={`absolute inset-0 flex gap-3.5 items-stretch transition-opacity duration-200 ease-in-out ${
            displayTab === 'encoder-transfer' ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
        >
          {/* Dominant Figure on PURE WHITE Surface (~68% width) */}
          <div
            ref={encTriggerRef}
            role="button"
            tabIndex={displayTab === 'encoder-transfer' ? 0 : -1}
            aria-label="Click to enlarge Encoder & Transfer Learning figure"
            onClick={handleOpenEncLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenEncLightbox();
              }
            }}
            className="w-[68%] h-full relative bg-white rounded-xl border border-[#D9DDEE] p-2 flex items-center justify-center shadow-2xs group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            <img
              src="/images/phd-defense/foundations/foundation-isbi2024-encoder-transfer.png"
              alt="Encoder backbone comparison and ImageNet pretraining vs random initialization"
              className="w-full h-full object-contain pointer-events-none"
            />
            <div className="absolute bottom-2 left-2.5 pointer-events-none">
              <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-[#D9DDEE] text-[9px] font-mono text-[#6F69C9] font-semibold shadow-2xs">
                ENCODER COMPLEXITY &amp; IMAGENET INITIALIZATION COMPARISON
              </span>
            </div>
            <ZoomIndicatorBadge />
          </div>

          {/* Right Findings & Takeaway (~32% width) */}
          <div className="w-[32%] h-full bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-1.5 pb-1 border-b border-[#D9DDEE]/80 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
                <h3 className="text-xs font-bold text-[#24242A] uppercase tracking-wide">
                  Encoder &amp; Pretraining Findings
                </h3>
              </div>

              {/* Two Large Conceptual Findings */}
              <div className="space-y-2 mb-2.5">
                <div
                  onMouseEnter={() => setHoveredFinding('encoder')}
                  onMouseLeave={() => setHoveredFinding(null)}
                  className={`p-2 rounded-xl border transition-all duration-150 flex items-center justify-between ${
                    hoveredFinding === 'encoder'
                      ? 'bg-white border-[#6F69C9] shadow-2xs'
                      : 'bg-white border-[#D9DDEE]'
                  }`}
                >
                  <span className="text-[11px] font-bold text-[#24242A]">
                    More complex encoder
                  </span>
                  <span className="text-xs font-bold text-[#6F69C9]">≠</span>
                  <span className="text-[11px] font-bold text-[#24242A]">
                    better segmentation
                  </span>
                </div>

                <div
                  onMouseEnter={() => setHoveredFinding('transfer')}
                  onMouseLeave={() => setHoveredFinding(null)}
                  className={`p-2 rounded-xl border transition-all duration-150 flex items-center justify-between ${
                    hoveredFinding === 'transfer'
                      ? 'bg-white border-[#6F69C9] shadow-2xs'
                      : 'bg-white border-[#D9DDEE]'
                  }`}
                >
                  <span className="text-[11px] font-bold text-[#24242A]">
                    ImageNet pretraining
                  </span>
                  <span className="text-xs font-bold text-[#6F69C9]">≈</span>
                  <span className="text-[11px] font-bold text-[#24242A]">
                    random initialization
                  </span>
                </div>
              </div>

              {/* Explanation */}
              <div className="space-y-1 text-[10.5px] text-[#626A7C] leading-snug">
                <p>
                  Deeper encoder backbones did not systematically improve performance on this dataset.
                </p>
                <p>
                  ImageNet-pretrained weights showed no clear advantage over random initialization for this specific task.
                </p>
              </div>
            </div>

            {/* Concise Takeaway */}
            <div className="p-2.5 rounded-xl bg-white border border-[#A7A3DE] shadow-2xs">
              <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase block mb-0.5">
                CONCISE TAKEAWAY
              </span>
              <p className="text-[11px] font-bold text-[#24242A] leading-snug">
                For this dataset, decoder and loss design mattered more than transfer learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PERSISTENT THREE KEY FINDINGS (Compact Horizontal Strip ~10-12% height)
      ========================================================================= */}
      <div className="shrink-0 grid grid-cols-3 gap-2 py-1.5 px-3 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] text-xs shadow-2xs my-0.5">
        {/* Finding 1 */}
        <div className="flex items-start gap-2 border-r border-[#D9DDEE]/80 pr-2">
          <Cpu className="w-3.5 h-3.5 text-[#6F69C9] shrink-0 mt-0.5" />
          <div className="min-w-0">
            <span className="text-[9.5px] font-bold text-[#24242A] uppercase tracking-wider block font-mono">
              DECODER MATTERS
            </span>
            <p className="text-[10px] text-[#626A7C] leading-tight">
              Simpler and pyramid-style decoding remained competitive.
            </p>
          </div>
        </div>

        {/* Finding 2 */}
        <div className="flex items-start gap-2 border-r border-[#D9DDEE]/80 pr-2">
          <Sliders className="w-3.5 h-3.5 text-[#6F69C9] shrink-0 mt-0.5" />
          <div className="min-w-0">
            <span className="text-[9.5px] font-bold text-[#24242A] uppercase tracking-wider block font-mono">
              LOSS MATTERS
            </span>
            <p className="text-[10px] text-[#626A7C] leading-tight">
              DiceCE produced the strongest results.
            </p>
          </div>
        </div>

        {/* Finding 3 */}
        <div className="flex items-start gap-2">
          <GitBranch className="w-3.5 h-3.5 text-[#6F69C9] shrink-0 mt-0.5" />
          <div className="min-w-0">
            <span className="text-[9.5px] font-bold text-[#24242A] uppercase tracking-wider block font-mono">
              TRANSFER LEARNING MATTERED LESS
            </span>
            <p className="text-[10px] text-[#626A7C] leading-tight">
              More complex or pretrained encoders did not systematically improve performance.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Final Transition & Academic Reference Footer (~5-7% height)
      ========================================================================= */}
      <div className="shrink-0 pt-1 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#24242A]">
        {/* Transition question */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-3.5 rounded-full bg-[#6F69C9] shrink-0" />
          <p className="text-xs text-[#24242A]">
            <span>Supervised segmentation was technically feasible — </span>
            <span className="font-bold text-[#6F69C9]">
              but what exactly were we learning to reproduce?
            </span>
          </p>
        </div>

        {/* Slide Reference on opposite side */}
        <span className="text-[10.5px] font-mono text-[#74747D] shrink-0">
          Oh et al., IEEE ISBI 2024
        </span>
      </div>

      {/* In-Presentation Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxData !== null}
        onClose={handleCloseLightbox}
        data={lightboxData}
      />
    </div>
  );
};

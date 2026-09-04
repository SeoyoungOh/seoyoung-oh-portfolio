import React, { useRef, useState } from 'react';
import { ArrowRight, Layers, Sliders, Cpu, Activity, Info, CheckCircle2 } from 'lucide-react';
import { ImageLightbox, LightboxData, ZoomIndicatorBadge } from '../ImageLightbox';

interface FoundationIsbi2024MethodSlideProps {
  isActive: boolean;
}

type StepKey = 1 | 2 | 3;

interface StepMeta {
  num: string;
  label: string;
  sub: string;
  question: string;
  categoryTag: string;
}

const WORKFLOW_STEPS: StepMeta[] = [
  {
    num: '01',
    label: 'Unified Atlas',
    sub: 'Atlas-derived supervision',
    question: 'WHAT WAS THE SUPERVISION?',
    categoryTag: 'ATLAS-DERIVED SUPERVISION',
  },
  {
    num: '02',
    label: 'Model Design',
    sub: 'Segmentation architectures',
    question: 'WHAT MODELS WERE COMPARED?',
    categoryTag: 'SEGMENTATION MODEL COMPARISON',
  },
  {
    num: '03',
    label: 'Controlled Experiments',
    sub: 'Controlled evaluation',
    question: 'HOW WERE THEY TESTED?',
    categoryTag: 'CONTROLLED EXPERIMENTS',
  },
];

export const FoundationIsbi2024MethodSlide: React.FC<FoundationIsbi2024MethodSlideProps> = () => {
  // Step navigation: default is Step 1 (Unified Atlas)
  const [selectedStep, setSelectedStep] = useState<StepKey>(1);
  const [hoveredStep, setHoveredStep] = useState<StepKey | null>(null);

  const activeStep: StepKey = hoveredStep ?? selectedStep;

  // Lightbox modal state for scientific raster figures
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const atlasTriggerRef = useRef<HTMLDivElement>(null);
  const modelTriggerRef = useRef<HTMLDivElement>(null);

  const handleOpenAtlasLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/foundations/foundation-isbi2024-atlas-generation.png',
      alt: 'Harmonized reference atlas generation pipeline in MNI space',
      title: 'Unified Reference Atlas Generation',
      subtitle: 'Harmonized 34-label MNI reference atlas (Agostinelli et al., 2023 & Nilearn)',
      isLightBg: true,
    });
  };

  const handleOpenModelLightbox = () => {
    setLightboxData({
      src: '/images/phd-defense/foundations/foundation-isbi2024-model-design.png',
      alt: 'N-DecoNet and U-DecoNet decoder architecture exploration',
      title: 'Model Design: N-DecoNet & U-DecoNet',
      subtitle: 'Systematic study of decoder connections and feature aggregation',
      isLightBg: true,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          TOP: Header Area (~10% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              FOUNDATIONS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              Building an Initial Brainstem Segmentation Framework
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed mt-0.5">
              Supervised segmentation pipeline established in the initial ISBI 2024 study.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">Oh et al., IEEE ISBI 2024</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TOP WORKFLOW: THREE PERSISTENT METHODOLOGICAL STEPS (~13% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1.5">
        {/* Step Progression Cues */}
        <div className="flex items-center justify-between text-[8.5px] font-mono font-bold px-1 mb-1">
          <div className="flex items-center gap-1.5 text-[#6F69C9]">
            <span className="uppercase tracking-wider">01 ATLAS-DERIVED SUPERVISION</span>
            <span className="h-[1px] w-14 bg-[#D9D8F4]" />
          </div>
          <div className="flex items-center gap-1.5 text-[#6F69C9]">
            <span className="uppercase tracking-wider">02 SEGMENTATION MODEL COMPARISON</span>
            <span className="h-[1px] w-14 bg-[#D9D8F4]" />
          </div>
          <div className="flex items-center gap-1.5 text-[#6F69C9]">
            <span className="uppercase tracking-wider">03 CONTROLLED EXPERIMENTS</span>
          </div>
        </div>

        {/* Three Interactive Workflow Buttons Connected with Arrows */}
        <div
          className="flex items-center gap-2 w-full"
          role="tablist"
          aria-label="Three-step methodological workflow"
          onMouseLeave={() => setHoveredStep(null)}
        >
          {WORKFLOW_STEPS.map((step, idx) => {
            const stepId = (idx + 1) as StepKey;
            const isSelected = activeStep === stepId;

            return (
              <React.Fragment key={step.num}>
                <button
                  type="button"
                  role="tab"
                  id={`workflow-step-${step.num}`}
                  aria-selected={isSelected}
                  aria-controls={`workflow-panel-${step.num}`}
                  onMouseEnter={() => setHoveredStep(stepId)}
                  onFocus={() => setHoveredStep(stepId)}
                  onBlur={() => setHoveredStep(null)}
                  onClick={() => {
                    setSelectedStep(stepId);
                    setHoveredStep(null);
                  }}
                  className={`flex-1 flex items-center justify-between py-1.5 px-3 rounded-xl transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                    isSelected
                      ? 'bg-[#D9D8F4]/50 text-[#6F69C9] border-[#6F69C9] shadow-xs'
                      : 'bg-white text-[#74747D] border-[#D9DDEE] hover:text-[#24242A] hover:border-[#A7A3DE]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                        isSelected ? 'bg-[#6F69C9] text-white' : 'bg-[#D9DDEE] text-[#626A7C]'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div className="text-left min-w-0">
                      <span className="block text-xs font-bold leading-tight truncate text-[#24242A]">
                        {step.label}
                      </span>
                      <span className="block text-[9px] font-mono text-[#74747D] truncate">
                        {step.sub}
                      </span>
                    </div>
                  </div>

                  <span className="text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/70 border border-[#D9DDEE]/60 text-[#6F69C9] shrink-0 hidden sm:inline-block">
                    {step.question}
                  </span>
                </button>

                {/* Connecting Arrow */}
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#A7A3DE] shrink-0 stroke-[2.5]" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          BOTTOM: ONE LARGE FIXED DETAIL VIEWPORT (Same size for all 3 steps)
      ========================================================================= */}
      <div className="relative flex-1 min-h-0 my-1">
        {/* -----------------------------------------------------------------------
            STEP 01: UNIFIED ATLAS
        ----------------------------------------------------------------------- */}
        <div
          id="workflow-panel-01"
          role="tabpanel"
          aria-labelledby="workflow-step-01"
          className={`absolute inset-0 grid grid-cols-12 gap-3 items-stretch transition-opacity duration-200 ease-in-out ${
            activeStep === 1 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
        >
          {/* Left: Scientific Raster on PURE WHITE Surface */}
          <div
            ref={atlasTriggerRef}
            role="button"
            tabIndex={activeStep === 1 ? 0 : -1}
            aria-label="Click to enlarge Unified Brainstem Reference Atlas"
            onClick={handleOpenAtlasLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenAtlasLightbox();
              }
            }}
            className="col-span-6 relative bg-white rounded-xl border border-[#D9DDEE] p-2 flex items-center justify-center shadow-2xs group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            <img
              src="/images/phd-defense/foundations/foundation-isbi2024-atlas-generation.png"
              alt="Harmonized reference atlas generation pipeline in MNI space"
              className="w-full h-full object-contain pointer-events-none"
            />
            <div className="absolute bottom-2 left-2.5 pointer-events-none">
              <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-[#D9DDEE] text-[9px] font-mono text-[#6F69C9] font-semibold shadow-2xs">
                UNIFIED MNI REFERENCE ATLAS PIPELINE
              </span>
            </div>
            <ZoomIndicatorBadge />
          </div>

          {/* Right: 34-Label Specification & Supervision Panel */}
          <div className="col-span-6 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
                <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                  SUPERVISION PROTOCOL
                </span>
                <span className="text-[9.5px] italic text-[#74747D]">
                  What supervision did the segmentation models receive?
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#24242A] mb-1">
                Unified atlas-derived supervision
              </h3>

              <p className="text-[11.5px] text-[#24242A] leading-snug mb-2.5">
                A unified multi-label reference atlas provided voxel-level supervision for the initial segmentation benchmark.
              </p>

              {/* 34 Labels Callout */}
              <div className="p-2.5 rounded-xl bg-white border border-[#D9D8F4] mb-2.5 shadow-2xs">
                <div className="flex items-center justify-between mb-1 text-xs">
                  <span className="font-extrabold text-[#6F69C9] text-sm">34 labels</span>
                  <span className="text-[10px] font-mono text-[#626A7C] uppercase font-bold">
                    Supervision Target
                  </span>
                </div>
                <div className="p-1.5 rounded-lg bg-[#FAFAFC] border border-[#D9DDEE] text-[10.5px] font-medium text-[#24242A]">
                  31 nuclei + gray matter + white matter + background
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white border border-[#D9DDEE] text-[10px] text-[#626A7C] space-y-1">
                <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block">
                  TERMINOLOGY DISTINCTION
                </span>
                <p className="leading-snug">
                  Careful scientific framing: represents <strong className="text-[#6F69C9]">atlas-derived reference</strong> and{' '}
                  <strong className="text-[#6F69C9]">atlas-derived supervision</strong>, not subject-specific anatomical ground truth.
                </p>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[10px] text-[#74747D] flex items-start gap-1.5 mt-2">
              <Info className="w-3.5 h-3.5 text-[#6F69C9] shrink-0 mt-0.5" />
              <span>
                Atlas-derived reference provided standard voxel-level targets for initial model comparison, prior to subject-specific anatomical evaluation.
              </span>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            STEP 02: MODEL DESIGN (2D Semantic Segmentation Benchmark)
        ----------------------------------------------------------------------- */}
        <div
          id="workflow-panel-02"
          role="tabpanel"
          aria-labelledby="workflow-step-02"
          className={`absolute inset-0 grid grid-cols-12 gap-3 items-stretch transition-opacity duration-200 ease-in-out ${
            activeStep === 2 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
        >
          {/* Scientific Image on PURE WHITE Surface (~42% width) */}
          <div
            ref={modelTriggerRef}
            role="button"
            tabIndex={activeStep === 2 ? 0 : -1}
            aria-label="Click to enlarge Model Design Architecture"
            onClick={handleOpenModelLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenModelLightbox();
              }
            }}
            className="col-span-5 relative bg-white rounded-xl border border-[#D9DDEE] p-2 flex items-center justify-center shadow-2xs group cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9]"
          >
            <img
              src="/images/phd-defense/foundations/foundation-isbi2024-model-design.png"
              alt="N-DecoNet and U-DecoNet decoder architecture exploration"
              className="w-full h-full object-contain pointer-events-none"
            />
            <div className="absolute bottom-2 left-2.5 pointer-events-none">
              <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-[#D9DDEE] text-[8.5px] font-mono text-[#6F69C9] font-semibold shadow-2xs">
                N-DECONET &amp; U-DECONET DECODER DESIGNS
              </span>
            </div>
            <ZoomIndicatorBadge />
          </div>

          {/* Right: Explicit Model-Comparison Structure (~58% width) */}
          <div className="col-span-7 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
            <div>
              {/* Header & Question */}
              <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
                <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                  2D SEMANTIC SEGMENTATION ARCHITECTURES BENCHMARKED
                </span>
                <span className="text-[9px] italic text-[#74747D]">
                  Which decoder design works best at this scale?
                </span>
              </div>

              {/* Conceptual Diagram Strip */}
              <div className="py-1 px-2.5 rounded-lg bg-white border border-[#D9D8F4] mb-2 flex items-center justify-between text-[9.5px] font-mono shadow-2xs">
                <span className="text-[#626A7C]">ENCODER FEATURES</span>
                <ArrowRight className="w-3 h-3 text-[#6F69C9] stroke-[2.5]" />
                <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/50 border border-[#6F69C9] text-[#6F69C9] font-extrabold">
                  DECODER STRATEGY
                </span>
                <ArrowRight className="w-3 h-3 text-[#6F69C9] stroke-[2.5]" />
                <span className="text-[#24242A] font-bold">34-CLASS SEGMENTATION</span>
              </div>

              {/* Group 1: PROPOSED DECODER DESIGNS */}
              <div className="p-2 rounded-lg bg-white border border-[#6F69C9]/40 mb-2 shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider">
                    PROPOSED DECODER DESIGNS
                  </span>
                  <div className="flex gap-1">
                    <span className="px-2 py-0.5 rounded bg-[#6F69C9] text-white font-mono font-bold text-[9.5px]">
                      N-DecoNet
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#6F69C9] text-white font-mono font-bold text-[9.5px]">
                      U-DecoNet
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-[#24242A] leading-snug">
                  Two decoder variants were introduced to study how decoder structure affects fine-grained brainstem segmentation.
                </p>
              </div>

              {/* Group 2: COMPARISON ARCHITECTURES BY FAMILY */}
              <div className="p-2 rounded-lg bg-white border border-[#D9DDEE] shadow-2xs mb-1.5">
                <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase block mb-1">
                  COMPARISON ARCHITECTURES (7 BENCHMARK BASELINES)
                </span>

                <div className="grid grid-cols-2 gap-1.5 text-[9.5px]">
                  <div className="p-1.5 rounded bg-[#FAFAFC] border border-[#D9DDEE]/80">
                    <span className="text-[8px] font-mono font-bold text-[#74747D] block uppercase">
                      Classical Encoder–Decoder
                    </span>
                    <div className="flex items-center gap-1.5 font-mono font-bold text-[#24242A] mt-0.5">
                      <span>U-Net</span>
                      <span className="text-[#D9DDEE]">·</span>
                      <span>U-Net++</span>
                    </div>
                  </div>

                  <div className="p-1.5 rounded bg-[#FAFAFC] border border-[#D9DDEE]/80">
                    <span className="text-[8px] font-mono font-bold text-[#74747D] block uppercase">
                      Attention-Based
                    </span>
                    <div className="font-mono font-bold text-[#24242A] mt-0.5">
                      <span>MAnet</span>
                    </div>
                  </div>

                  <div className="p-1.5 rounded bg-[#FAFAFC] border border-[#D9DDEE]/80">
                    <span className="text-[8px] font-mono font-bold text-[#74747D] block uppercase">
                      Multi-Scale / Pyramid
                    </span>
                    <div className="flex items-center gap-1.5 font-mono font-bold text-[#24242A] mt-0.5">
                      <span>PSPNet</span>
                      <span className="text-[#D9DDEE]">·</span>
                      <span>FPN</span>
                    </div>
                  </div>

                  <div className="p-1.5 rounded bg-[#FAFAFC] border border-[#D9DDEE]/80">
                    <span className="text-[8px] font-mono font-bold text-[#74747D] block uppercase">
                      DeepLab / Atrous
                    </span>
                    <div className="flex items-center gap-1.5 font-mono font-bold text-[#24242A] mt-0.5">
                      <span>DeepLabV3</span>
                      <span className="text-[#D9DDEE]">·</span>
                      <span>DeepLabV3+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why These Models Explanation */}
            <div className="pt-1.5 border-t border-[#D9DDEE]/80 text-[10px] text-[#626A7C] flex items-center justify-between">
              <p className="leading-snug">
                The comparison spans representative encoder–decoder, attention, pyramid, and atrous segmentation families to isolate the effect of decoder design.
              </p>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            STEP 03: CONTROLLED EXPERIMENTS (Pure HTML/CSS Infographic)
        ----------------------------------------------------------------------- */}
        <div
          id="workflow-panel-03"
          role="tabpanel"
          aria-labelledby="workflow-step-03"
          className={`absolute inset-0 bg-[#FAFAFC] rounded-xl border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs transition-opacity duration-200 ease-in-out ${
            activeStep === 3 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
        >
          <div>
            {/* Header & Micro-caption */}
            <div className="flex items-center justify-between pb-1.5 border-b border-[#D9DDEE]/80 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-[#6F69C9] uppercase">
                  CONTROLLED EXPERIMENTAL COMPARISON
                </span>
                <span className="text-[10px] text-[#626A7C]">· Standardized multi-factor benchmark</span>
              </div>
              <span className="text-[9.5px] italic text-[#74747D]">
                Which model and training choices actually matter?
              </span>
            </div>

            {/* Preprocessing Pipeline: Explicit 2D Slices */}
            <div className="p-2 rounded-xl bg-white border border-[#D9D8F4] mb-2 shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8.5px] font-mono font-bold text-[#74747D] uppercase">
                  PREPROCESSING PIPELINE (AXIAL 2D SLICES)
                </span>
                <span className="text-[8.5px] font-mono text-[#6F69C9] font-bold">
                  2D Semantic Segmentation Task
                </span>
              </div>
              <div className="flex items-center justify-between text-[9.5px]">
                <span className="px-2 py-0.5 rounded bg-[#D9D8F4]/40 text-[#24242A] font-bold">
                  T1w MRI
                </span>
                <ArrowRight className="w-3 h-3 text-[#6F69C9] shrink-0 stroke-[2]" />
                <span className="px-1.5 py-0.5 rounded bg-[#FAFAFC] text-[#626A7C] border border-[#D9DDEE] font-medium">
                  SPM12 preprocessing
                </span>
                <ArrowRight className="w-3 h-3 text-[#6F69C9] shrink-0 stroke-[2]" />
                <span className="px-1.5 py-0.5 rounded bg-[#FAFAFC] text-[#626A7C] border border-[#D9DDEE] font-medium">
                  MNI registration
                </span>
                <ArrowRight className="w-3 h-3 text-[#6F69C9] shrink-0 stroke-[2]" />
                <span className="px-1.5 py-0.5 rounded bg-[#FAFAFC] text-[#6F69C9] border border-[#A7A3DE] font-bold">
                  Axial slicing
                </span>
                <ArrowRight className="w-3 h-3 text-[#6F69C9] shrink-0 stroke-[2]" />
                <span className="px-1.5 py-0.5 rounded bg-[#FAFAFC] text-[#626A7C] border border-[#D9DDEE] font-medium">
                  50 × 50 brainstem crop
                </span>
                <ArrowRight className="w-3 h-3 text-[#6F69C9] shrink-0 stroke-[2]" />
                <span className="px-2 py-0.5 rounded bg-[#6F69C9] text-white font-bold shadow-2xs">
                  224 × 224 input
                </span>
              </div>
            </div>

            {/* Explicit Experimental Factors Matrix */}
            <div className="grid grid-cols-12 gap-2 mb-2">
              {/* MODELS (Cols: 5) */}
              <div className="col-span-5 p-2 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#24242A] mb-1">
                    <Cpu className="w-3.5 h-3.5 text-[#6F69C9]" />
                    <span>MODELS (9 ARCHITECTURES)</span>
                  </div>
                  <div className="flex flex-wrap gap-1 text-[8.5px] font-mono text-[#24242A]">
                    {['N-DecoNet', 'U-DecoNet', 'U-Net', 'U-Net++', 'MAnet', 'PSPNet', 'FPN', 'DeepLabV3', 'DeepLabV3+'].map((m) => (
                      <span
                        key={m}
                        className={`px-1.5 py-0.5 rounded border ${
                          m.includes('DecoNet')
                            ? 'bg-[#D9D8F4]/50 border-[#6F69C9] font-bold text-[#6F69C9]'
                            : 'bg-[#FAFAFC] border-[#D9DDEE] text-[#626A7C]'
                        }`}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[8px] font-mono text-[#74747D] mt-1 pt-1 border-t border-[#D9DDEE]/60">
                  Multiple decoder and encoder configurations
                </span>
              </div>

              {/* LOSSES (Cols: 4) */}
              <div className="col-span-4 p-2 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#24242A] mb-1">
                    <Sliders className="w-3.5 h-3.5 text-[#6F69C9]" />
                    <span>LOSS FORMULATIONS</span>
                  </div>
                  <div className="flex flex-wrap gap-1 text-[8.5px] font-mono text-[#626A7C]">
                    {['Dice', 'Jaccard', 'Focal', 'SoftCE', 'DiceFocal', 'DiceCE'].map((l) => (
                      <span key={l} className="px-1.5 py-0.5 rounded bg-[#FAFAFC] border border-[#D9DDEE]">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[8px] font-mono text-[#74747D] mt-1 pt-1 border-t border-[#D9DDEE]/60">
                  Overlap vs. distribution vs. compound
                </span>
              </div>

              {/* INITIALIZATION (Cols: 3) */}
              <div className="col-span-3 p-2 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#24242A] mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#6F69C9]" />
                    <span>INITIALIZATION</span>
                  </div>
                  <p className="text-[9.5px] text-[#24242A] leading-snug font-medium">
                    ImageNet pretrained vs. random initialization
                  </p>
                </div>
                <span className="text-[8px] font-mono text-[#74747D] mt-1 pt-1 border-t border-[#D9DDEE]/60">
                  Multiple encoder configs tested
                </span>
              </div>
            </div>

            {/* Bottom Row: TRAINING & EVALUATION */}
            <div className="grid grid-cols-2 gap-2">
              {/* TRAINING */}
              <div className="p-2 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#24242A] mb-0.5">
                  <Activity className="w-3.5 h-3.5 text-[#6F69C9]" />
                  <span>TRAINING SPECIFICATIONS</span>
                </div>
                <p className="text-[9.5px] text-[#626A7C] font-mono leading-snug">
                  Adam optimizer · 10 epochs · Batch size: 16 · Learning rate: 1 × 10⁻⁴ · 5 repeated runs
                </p>
              </div>

              {/* EVALUATION */}
              <div className="p-2 rounded-xl bg-white border border-[#D9DDEE] shadow-2xs">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#24242A] mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6F69C9]" />
                  <span>EVALUATION METRIC</span>
                </div>
                <p className="text-[9.5px] text-[#24242A] font-semibold leading-snug">
                  Macro mIoU evaluated across all 34 fine-grained anatomical classes
                </p>
              </div>
            </div>
          </div>

          {/* Dataset Size Line */}
          <div className="p-1.5 rounded-lg bg-white border border-[#D9DDEE] text-center text-[10px] text-[#74747D] font-mono mt-1.5">
            <strong className="text-[#24242A]">3,796 axial 2D images</strong> (Train: 1,100 · Validation: 798 · Test: 1,898)
          </div>
        </div>
      </div>

      {/* =========================================================================
          PERSISTENT BOTTOM: Takeaway Statement (Visible across all 3 steps, ~10% height)
      ========================================================================= */}
      <div className="shrink-0 space-y-1 pt-0.5">
        <div className="p-2 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-between gap-3 text-xs text-[#24242A] shadow-2xs">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-1.5 h-4.5 rounded-full bg-[#6F69C9] shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#24242A] leading-tight">
                From <span className="font-bold text-[#6F69C9]">atlas-derived supervision</span> to a controlled comparison of segmentation architectures, losses, and initialization strategies.
              </p>
              <p className="text-[10px] text-[#74747D] leading-tight mt-0.5 truncate">
                The framework was designed to identify which modeling choices actually mattered for fine-grained brainstem segmentation.
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono text-[#6F69C9] font-bold shrink-0">
            Slide 09: What Did the Study Show? →
          </span>
        </div>
      </div>

      {/* In-Presentation Lightbox Modal (Reusing existing ImageLightbox) */}
      <ImageLightbox
        isOpen={lightboxData !== null}
        onClose={handleCloseLightbox}
        data={lightboxData}
      />
    </div>
  );
};


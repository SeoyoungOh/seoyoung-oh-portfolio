import React, { useState } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

interface IntroBrainstemSlideProps {
  isActive: boolean;
}

type BrainstemMode = 'motor' | 'bulbar' | 'respiratory';

interface AnatomicalAnchor {
  name: string;
  labelX: number; // % in container
  labelY: number; // % in container
  targetX: number; // % in container
  targetY: number; // % in container
}

interface FunctionalCallout {
  name: string;
  func: string;
  labelX: number; // % in container
  labelY: number; // % in container
  targetX: number; // % in container
  targetY: number; // % in container
  isWarmAccent?: boolean;
}

interface ModeConfig {
  id: BrainstemMode;
  tabNumber: string;
  label: string;
  badge: string;
  imageSrc: string;
  calloutHeading: string;
  calloutText: string;
  warningLine?: string;
  // Separate anatomical coordinates for each PNG state
  anatomicalRegions: AnatomicalAnchor[];
  functionalCallouts: FunctionalCallout[];
}

/**
 * EXACT ANATOMICAL COORDINATES
 * Derived by pixel inspection of each transparent PNG illustration.
 *
 * Container: 640 x 360 (aspect ratio 16:9).
 * - intro-brainstem-motor.png: 1536x1024 (aspect 1.5, centered with 50px offset left/right)
 * - intro-brainstem-bulbar.png: 1672x941 (aspect 1.7768, fills full 640x360)
 * - intro-brainstem-respiratory.png: 1536x1024 (aspect 1.5, centered with 50px offset left/right)
 */
const MODES_CONFIG: Record<BrainstemMode, ModeConfig> = {
  motor: {
    id: 'motor',
    tabNumber: '01',
    label: 'Motor pathways',
    badge: 'DESCENDING TRACTS',
    imageSrc: '/images/phd-defense/intro/intro-brainstem-motor.png',
    calloutHeading: 'Motor pathways',
    calloutText: 'Major descending motor pathways traverse the brainstem.',
    anatomicalRegions: [
      // Midbrain: narrow upper portion below flared top
      { name: 'Midbrain', labelX: 47.0, labelY: 24.0, targetX: 67.13, targetY: 24.0 },
      // Pons: broad central bulge
      { name: 'Pons', labelX: 47.0, labelY: 43.9, targetX: 64.93, targetY: 43.9 },
      // Medulla: tapered lower brainstem below pons bulge
      { name: 'Medulla', labelX: 47.0, labelY: 68.4, targetX: 70.42, targetY: 68.4 },
      // Spinal cord: vertical descending continuation at very bottom
      { name: 'Spinal cord', labelX: 47.0, labelY: 88.9, targetX: 71.52, targetY: 88.9 },
    ],
    functionalCallouts: [
      {
        name: 'Corticobulbar fibers',
        func: 'Function: Cranial motor control',
        // Points directly to lateral branching purple fibers diverging in upper pons (X: 1363, Y: 501 in image)
        targetX: 82.65,
        targetY: 48.9,
        labelX: 88.5,
        labelY: 48.9,
      },
      {
        name: 'Corticospinal tract',
        func: 'Function: Limb motor control',
        // Points directly to thick continuous deep-purple descending tract in medulla (X: 1252, Y: 723 in image)
        targetX: 76.58,
        targetY: 70.6,
        labelX: 88.5,
        labelY: 70.6,
      },
    ],
  },
  bulbar: {
    id: 'bulbar',
    tabNumber: '02',
    label: 'Bulbar function',
    badge: 'CRANIAL NUCLEI',
    imageSrc: '/images/phd-defense/intro/intro-brainstem-bulbar.png',
    calloutHeading: 'Bulbar function',
    calloutText: 'Speech and swallowing depend on brainstem-related cranial motor systems.',
    anatomicalRegions: [
      // Midbrain
      { name: 'Midbrain', labelX: 48.0, labelY: 24.0, targetX: 70.59, targetY: 24.0 },
      // Pons
      { name: 'Pons', labelX: 48.0, labelY: 43.9, targetX: 67.59, targetY: 43.9 },
      // Medulla
      { name: 'Medulla', labelX: 48.0, labelY: 68.4, targetX: 74.19, targetY: 68.4 },
      // Spinal cord
      { name: 'Spinal cord', labelX: 48.0, labelY: 88.8, targetX: 75.39, targetY: 88.8 },
    ],
    functionalCallouts: [
      {
        name: 'Facial motor nucleus',
        func: 'Function: Facial / oral movement',
        // Uppermost dark-purple highlighted structure located in lower pons (X: 1377, Y: 446 in image)
        targetX: 82.38,
        targetY: 47.4,
        labelX: 88.0,
        labelY: 43.0,
      },
      {
        name: 'Nucleus ambiguus',
        func: 'Function: Swallowing / phonation',
        // Middle/lateral highlighted dark-purple structure in medulla (X: 1348, Y: 614 in image)
        targetX: 80.58,
        targetY: 65.3,
        labelX: 88.0,
        labelY: 64.0,
      },
      {
        name: 'Hypoglossal nucleus',
        func: 'Function: Tongue movement',
        // Lowest highlighted dark-purple medullary structure (X: 1324, Y: 693 in image)
        targetX: 79.18,
        targetY: 73.6,
        labelX: 88.0,
        labelY: 78.0,
      },
    ],
  },
  respiratory: {
    id: 'respiratory',
    tabNumber: '03',
    label: 'Respiratory control',
    badge: 'VITAL CIRCUIT',
    imageSrc: '/images/phd-defense/intro/intro-brainstem-respiratory.png',
    calloutHeading: 'Respiratory control',
    calloutText: 'Brainstem networks play a central role in breathing.',
    warningLine: 'Respiratory decline can progress to respiratory failure.',
    anatomicalRegions: [
      // Midbrain
      { name: 'Midbrain', labelX: 47.0, labelY: 24.0, targetX: 67.13, targetY: 24.0 },
      // Pons
      { name: 'Pons', labelX: 47.0, labelY: 43.9, targetX: 64.93, targetY: 43.9 },
      // Medulla
      { name: 'Medulla', labelX: 47.0, labelY: 68.4, targetX: 70.42, targetY: 68.4 },
      // Spinal cord
      { name: 'Spinal cord', labelX: 47.0, labelY: 88.9, targetX: 71.52, targetY: 88.9 },
    ],
    functionalCallouts: [
      {
        name: 'Pontine respiratory region',
        func: 'Function: Respiratory modulation',
        // Uppermost highlighted purple region located inside pons (X: 1190, Y: 500 in image)
        targetX: 73.2,
        targetY: 48.8,
        labelX: 88.0,
        labelY: 44.0,
      },
      {
        name: 'Pre-Bötzinger complex',
        func: 'Function: Respiratory rhythm',
        // Precisely anchors to the key warm red/pink accent in ventrolateral medulla (X: 1236, Y: 711 in image)
        targetX: 75.73,
        targetY: 69.4,
        labelX: 88.0,
        labelY: 65.0,
        isWarmAccent: true,
      },
      {
        name: 'Ventral respiratory group',
        func: 'Function: Respiratory motor drive',
        // Lower elongated dark-purple respiratory region in medulla (X: 1237, Y: 758 in image)
        targetX: 75.73,
        targetY: 74.0,
        labelX: 88.0,
        labelY: 79.0,
      },
    ],
  },
};

export const IntroBrainstemSlide: React.FC<IntroBrainstemSlideProps> = () => {
  // Interaction state: default is 'motor' (State 01)
  const [lockedMode, setLockedMode] = useState<BrainstemMode | null>(null);
  const [hoveredMode, setHoveredMode] = useState<BrainstemMode | null>(null);
  const [focusedMode, setFocusedMode] = useState<BrainstemMode | null>(null);

  const activeMode: BrainstemMode = hoveredMode ?? focusedMode ?? lockedMode ?? 'motor';
  const currentConfig = MODES_CONFIG[activeMode];

  const handleToggleLock = (id: BrainstemMode) => {
    setLockedMode((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Slide Category Header */}
      <div className="mb-2">
        <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-1">
          INTRODUCTION
        </span>
      </div>

      {/* Main Stage: Two-Part Scientific Composition */}
      <div className="grid grid-cols-12 gap-8 my-auto items-center">
        {/* =========================================================================
            LEFT COLUMN (approx 44%): Fixed Explanatory Content
            Remains completely static during interaction.
        ========================================================================= */}
        <div className="col-span-5 flex flex-col justify-between pr-2">
          {/* Title & Short Introduction */}
          <div className="mb-5">
            <h2 className="text-2xl lg:text-[27px] font-black text-[#24242A] tracking-tight leading-snug mb-2.5">
              Why Focus on the Brainstem?
            </h2>
            <p className="text-xs sm:text-[13px] text-[#626A7C] leading-relaxed">
              The brainstem is a small but clinically important region in ALS.
            </p>
          </div>

          {/* Three Concise Fixed Content Blocks */}
          <div className="space-y-4">
            {/* Block 1: Functional relevance */}
            <div className="border-l-2 border-[#A7A3DE] pl-3.5 py-0.5">
              <h3 className="text-xs sm:text-[13px] font-bold text-[#24242A] mb-0.5">
                Functional relevance
              </h3>
              <p className="text-xs text-[#626A7C] leading-relaxed">
                It supports motor, bulbar, and respiratory functions that are highly relevant in ALS.
              </p>
            </div>

            {/* Block 2: Anatomical importance */}
            <div className="border-l-2 border-[#A7A3DE] pl-3.5 py-0.5">
              <h3 className="text-xs sm:text-[13px] font-bold text-[#24242A] mb-0.5">
                Anatomical importance
              </h3>
              <p className="text-xs text-[#626A7C] leading-relaxed">
                It contains major descending pathways and multiple cranial nerve–related functional nuclei.
              </p>
            </div>

            {/* Block 3: Thesis motivation */}
            <div className="border-l-2 border-[#6F69C9] pl-3.5 py-0.5">
              <h3 className="text-xs sm:text-[13px] font-bold text-[#24242A] mb-0.5">
                Thesis motivation
              </h3>
              <p className="text-xs text-[#626A7C] leading-relaxed">
                This makes the brainstem a meaningful target for ALS imaging analysis.
              </p>
            </div>
          </div>

          {/* Bottom Takeaway Line */}
          <div className="mt-5 p-2.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex items-center gap-2 text-xs text-[#24242A]">
            <span className="w-1.5 h-4 rounded-full bg-[#6F69C9] shrink-0" />
            <span className="font-semibold text-[#24242A]">
              Clinically important — but difficult to study on routine MRI.
            </span>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN (approx 56%): Interactive Anatomical Area
        ========================================================================= */}
        <div className="col-span-7 flex flex-col justify-between pl-2">
          {/* TOP: Three Interactive Tabs (01 Motor pathways, 02 Bulbar function, 03 Respiratory control) */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div
              className="flex items-center gap-2 flex-1"
              role="group"
              aria-label="Brainstem functional domains"
              onMouseLeave={() => setHoveredMode(null)}
            >
              {(['motor', 'bulbar', 'respiratory'] as BrainstemMode[]).map((modeKey) => {
                const config = MODES_CONFIG[modeKey];
                const isCurrentActive = activeMode === modeKey;
                const isLocked = lockedMode === modeKey;

                return (
                  <button
                    key={modeKey}
                    type="button"
                    role="button"
                    aria-pressed={isLocked}
                    aria-label={`Select ${config.label}`}
                    onMouseEnter={() => setHoveredMode(modeKey)}
                    onFocus={() => setFocusedMode(modeKey)}
                    onBlur={() => setFocusedMode(null)}
                    onClick={() => handleToggleLock(modeKey)}
                    className={`group flex-1 flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                      isCurrentActive
                        ? 'bg-[#A7A3DE]/15 border-[#6F69C9] text-[#24242A] shadow-2xs ring-1 ring-[#6F69C9]/30'
                        : 'bg-[#FFFFFF] border-[#D9D8F4] text-[#24242A] hover:bg-[#FAFAFC] hover:border-[#A7A3DE]'
                    }`}
                  >
                    <span className="truncate">{config.label}</span>
                    <div className="flex items-center gap-1 shrink-0 ml-1">
                      <span
                        className={`text-[9.5px] font-mono transition-colors ${
                          isCurrentActive ? 'text-[#6F69C9] font-bold' : 'text-[#A7A3DE]'
                        }`}
                      >
                        {config.tabNumber}
                      </span>
                      <ArrowRight
                        className={`w-3 h-3 transition-transform duration-150 ${
                          isCurrentActive
                            ? 'text-[#6F69C9] translate-x-0.5'
                            : 'text-transparent group-hover:text-[#A7A3DE]'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {lockedMode && (
              <button
                type="button"
                onClick={() => setLockedMode(null)}
                className="text-[9.5px] font-semibold text-[#6F69C9] hover:underline cursor-pointer px-1 shrink-0"
                aria-label="Unlock to hover mode"
              >
                Reset
              </button>
            )}
          </div>

          {/* CENTER: Large Rounded Anatomical Display Area (Exact Same Container) */}
          <div
            className="relative w-full h-[360px] bg-[#FAFAFC] rounded-2xl border border-[#D9DDEE] overflow-hidden shadow-2xs flex items-center justify-center"
            aria-label="Interactive anatomical illustration of brainstem and functional pathways"
          >
            {/* The 3 Finalized Transparent PNG Illustrations (Zero jumping, identical container, 200ms cross-fade) */}
            <img
              src={MODES_CONFIG.motor.imageSrc}
              alt="Brainstem motor pathways"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out pointer-events-none ${
                activeMode === 'motor' ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <img
              src={MODES_CONFIG.bulbar.imageSrc}
              alt="Brainstem bulbar function"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out pointer-events-none ${
                activeMode === 'bulbar' ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <img
              src={MODES_CONFIG.respiratory.imageSrc}
              alt="Brainstem respiratory control"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out pointer-events-none ${
                activeMode === 'respiratory' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* SVG Leader Lines Layer (Independent coordinates per active PNG state) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* 1. ANATOMICAL REGION LEADER LINES (Dashed lavender, ending in small dot on enlarged brainstem) */}
              {currentConfig.anatomicalRegions.map((region) => (
                <g key={region.name} className="transition-all duration-200">
                  <line
                    x1={region.labelX}
                    y1={region.labelY}
                    x2={region.targetX}
                    y2={region.targetY}
                    stroke="#A7A3DE"
                    strokeWidth="0.32"
                    strokeDasharray="0.8 0.6"
                  />
                  <circle
                    cx={region.targetX}
                    cy={region.targetY}
                    r="0.48"
                    fill="#6F69C9"
                  />
                </g>
              ))}

              {/* 2. FUNCTIONAL CALLOUT LEADER LINES (Solid lavender, starting at actual highlighted structure) */}
              {currentConfig.functionalCallouts.map((callout) => (
                <g key={callout.name} className="transition-all duration-200">
                  <line
                    x1={callout.targetX}
                    y1={callout.targetY}
                    x2={callout.labelX}
                    y2={callout.labelY}
                    stroke={callout.isWarmAccent ? '#B91C1C' : '#6F69C9'}
                    strokeWidth="0.42"
                  />
                  <circle
                    cx={callout.targetX}
                    cy={callout.targetY}
                    r="0.68"
                    fill={callout.isWarmAccent ? '#B91C1C' : '#6F69C9'}
                  />
                </g>
              ))}
            </svg>

            {/* HTML/CSS Overlay: ANATOMICAL REGION LABELS (In empty space between whole brain & enlarged brainstem) */}
            {currentConfig.anatomicalRegions.map((region) => (
              <div
                key={region.name}
                style={{
                  left: `${region.labelX}%`,
                  top: `${region.labelY}%`,
                  transform: 'translate(-100%, -50%)',
                }}
                className="absolute pointer-events-none transition-all duration-200"
              >
                <span className="inline-block px-1.5 py-0.5 rounded bg-white/95 border border-[#D9DDEE] text-[10px] font-semibold text-[#24242A] shadow-2xs tracking-tight whitespace-nowrap">
                  {region.name}
                </span>
              </div>
            ))}

            {/* HTML/CSS Overlay: FUNCTIONAL CALLOUTS (Positioned to the right of the enlarged brainstem) */}
            {currentConfig.functionalCallouts.map((callout) => (
              <div
                key={callout.name}
                style={{
                  left: `${callout.labelX}%`,
                  top: `${callout.labelY}%`,
                  transform: 'translate(0, -50%)',
                }}
                className="absolute pointer-events-none transition-all duration-200"
              >
                <div className="bg-white/95 backdrop-blur-xs border border-[#D9D8F4] px-2 py-1 rounded-lg shadow-2xs max-w-[170px]">
                  <h5
                    className={`text-[10.5px] font-bold leading-tight tracking-tight ${
                      callout.isWarmAccent ? 'text-[#B91C1C]' : 'text-[#6F69C9]'
                    }`}
                  >
                    {callout.name}
                  </h5>
                  <p className="text-[9px] text-[#626A7C] font-medium leading-tight mt-0.5 whitespace-nowrap">
                    {callout.func}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM: Short Interpretation Card Corresponding to Active Tab (Fixed height) */}
          <div className="mt-2.5 w-full">
            <div className="h-[74px] rounded-xl border border-[#D9D8F4] bg-[#FFFFFF] px-4 py-2.5 flex flex-col justify-center shadow-2xs transition-all duration-150">
              <div className="flex items-center justify-between mb-0.5">
                <h4 className="text-xs font-bold text-[#24242A] tracking-tight">
                  {currentConfig.calloutHeading}
                </h4>
                <span className="text-[10px] font-bold text-[#6F69C9] uppercase tracking-wider px-2 py-0.5 rounded bg-[#D9D8F4]/30">
                  {currentConfig.badge}
                </span>
              </div>

              <p className="text-[11.5px] text-[#626A7C] leading-snug">
                {currentConfig.calloutText}
              </p>

              {/* Warning line visible ONLY in Respiratory State 03 */}
              {currentConfig.warningLine && (
                <div className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-[#B91C1C]">
                  <AlertCircle className="w-3 h-3 text-[#B91C1C] shrink-0" />
                  <span>{currentConfig.warningLine}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Neuroanatomy & Clinical Relevance</span>
        <span className="font-semibold text-[#6F69C9]">Focus on Brainstem</span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

interface IntroAlsSlideProps {
  isActive: boolean;
}

type SymptomDomain = 'als' | 'limb' | 'bulbar' | 'respiratory';

interface DomainMeta {
  id: SymptomDomain;
  label: string;
  tag: string;
  imageSrc: string;
  heading: string;
  text: string;
  criticalLine?: string;
}

const DOMAINS: DomainMeta[] = [
  {
    id: 'als',
    label: 'ALS',
    tag: 'Pathology',
    imageSrc: '/images/phd-defense/intro/intro-als-general.png',
    heading: 'Motor neuron degeneration',
    text: 'Progressive degeneration of motor neurons disrupts voluntary motor control.',
  },
  {
    id: 'limb',
    label: 'Limb weakness',
    tag: 'Limb Motor',
    imageSrc: '/images/phd-defense/intro/intro-als-limb.png',
    heading: 'Limb motor impairment',
    text: 'Progressive motor dysfunction can lead to weakness and loss of mobility.',
  },
  {
    id: 'bulbar',
    label: 'Bulbar symptoms',
    tag: 'Bulbar',
    imageSrc: '/images/phd-defense/intro/intro-als-bulbar.png',
    heading: 'Bulbar dysfunction',
    text: 'Speech and swallowing can become progressively impaired.',
  },
  {
    id: 'respiratory',
    label: 'Respiratory symptoms',
    tag: 'Respiratory',
    imageSrc: '/images/phd-defense/intro/intro-als-respiratory.png',
    heading: 'Respiratory dysfunction',
    text: 'Weakening of respiratory function can progress to respiratory failure.',
    criticalLine: 'Respiratory failure is a major cause of death in ALS.',
  },
];

const BASELINE_IMAGE = '/images/phd-defense/intro/intro-als-baseline.png';

export const IntroAlsSlide: React.FC<IntroAlsSlideProps> = () => {
  // Interaction state: hover has transient priority, lock keeps state on click/touch
  const [lockedState, setLockedState] = useState<SymptomDomain | null>(null);
  const [hoveredState, setHoveredState] = useState<SymptomDomain | null>(null);
  const [focusedState, setFocusedState] = useState<SymptomDomain | null>(null);

  const activeDomainId: SymptomDomain | 'baseline' =
    hoveredState ?? focusedState ?? lockedState ?? 'baseline';

  const activeMeta = DOMAINS.find((d) => d.id === activeDomainId);

  const handleToggleLock = (id: SymptomDomain) => {
    setLockedState((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Slide Header: Section Category */}
      <div className="mb-2">
        <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-1">
          INTRODUCTION
        </span>
      </div>

      {/* Main Stage: Two-Part Scientific Composition */}
      <div className="grid grid-cols-12 gap-8 my-auto items-center">
        {/* =========================================================================
            LEFT COLUMN (approx 44%): Fixed Scientific Narrative
            Remains completely static during interaction.
        ========================================================================= */}
        <div className="col-span-5 flex flex-col justify-between pr-2">
          {/* Title & Introductory Statement */}
          <div className="mb-5">
            <h2 className="text-2xl lg:text-[27px] font-black text-[#24242A] tracking-tight leading-snug mb-2.5">
              What is Amyotrophic Lateral Sclerosis?
            </h2>
            <p className="text-xs sm:text-[13px] text-[#626A7C] leading-relaxed">
              Amyotrophic lateral sclerosis (ALS) is a progressive neurodegenerative disease affecting motor neurons.
            </p>
          </div>

          {/* Three Concise Key Ideas */}
          <div className="space-y-4">
            {/* Key Idea 1: Progressive */}
            <div className="border-l-2 border-[#A7A3DE] pl-3.5 py-0.5">
              <h3 className="text-xs sm:text-[13px] font-bold text-[#24242A] mb-0.5">
                Progressive
              </h3>
              <p className="text-xs text-[#626A7C] leading-relaxed">
                Motor neurons progressively degenerate, impairing voluntary motor control.
              </p>
            </div>

            {/* Key Idea 2: Functional decline */}
            <div className="border-l-2 border-[#A7A3DE] pl-3.5 py-0.5">
              <h3 className="text-xs sm:text-[13px] font-bold text-[#24242A] mb-0.5">
                Functional decline
              </h3>
              <p className="text-xs text-[#626A7C] leading-relaxed">
                The disease can affect limb movement, speech, swallowing, and breathing.
              </p>
            </div>

            {/* Key Idea 3: Clinical importance */}
            <div className="border-l-2 border-[#6F69C9] pl-3.5 py-0.5">
              <h3 className="text-xs sm:text-[13px] font-bold text-[#24242A] mb-0.5">
                Clinical importance
              </h3>
              <p className="text-xs text-[#626A7C] leading-relaxed">
                Respiratory involvement is particularly critical because severe decline can progress to respiratory failure.
              </p>
            </div>
          </div>

          {/* Bottom thesis link hint */}
          <div className="mt-5 pt-3 border-t border-[#D9DDEE]/80 text-[11px] text-[#626A7C] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />
            <span>Foundational background for brainstem neuroimaging targets</span>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN (approx 56%): Interactive Progression / Symptom Illustration
            Fixed viewport for 5 images + compact vertical controls + micro-callout
        ========================================================================= */}
        <div className="col-span-7 flex flex-col justify-between pl-2">
          {/* Upper Row: Fixed Image Viewport + Vertical Controls immediately beside it */}
          <div className="flex items-center justify-center gap-5">
            {/* Fixed Illustration Viewport: 1024x1536 (2:3 aspect ratio) container */}
            <div
              className="relative w-[275px] h-[395px] shrink-0 bg-[#FAFAFC] rounded-2xl border border-[#D9DDEE] overflow-hidden shadow-2xs flex items-center justify-center"
              aria-label="Interactive anatomical representation of ALS functional domains"
            >
              {/* Baseline image */}
              <img
                src={BASELINE_IMAGE}
                alt="ALS baseline anatomical illustration"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out pointer-events-none ${
                  activeDomainId === 'baseline' ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* General ALS / Motor neuron degeneration image */}
              <img
                src={DOMAINS[0].imageSrc}
                alt="ALS motor neuron degeneration"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out pointer-events-none ${
                  activeDomainId === 'als' ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Limb weakness image */}
              <img
                src={DOMAINS[1].imageSrc}
                alt="ALS limb weakness"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out pointer-events-none ${
                  activeDomainId === 'limb' ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Bulbar symptoms image */}
              <img
                src={DOMAINS[2].imageSrc}
                alt="ALS bulbar symptoms"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out pointer-events-none ${
                  activeDomainId === 'bulbar' ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Respiratory symptoms image */}
              <img
                src={DOMAINS[3].imageSrc}
                alt="ALS respiratory symptoms"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ease-in-out pointer-events-none ${
                  activeDomainId === 'respiratory' ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            {/* Compact Vertical Group of Controls */}
            <div
              className="flex flex-col gap-2.5 w-[200px] shrink-0"
              role="group"
              aria-label="ALS symptom domain controls"
              onMouseLeave={() => setHoveredState(null)}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#626A7C] mb-0.5 flex items-center justify-between">
                <span>Functional Domains</span>
                {lockedState && (
                  <button
                    type="button"
                    onClick={() => setLockedState(null)}
                    className="text-[9.5px] font-semibold text-[#6F69C9] hover:underline cursor-pointer"
                    aria-label="Reset to baseline illustration"
                  >
                    Reset
                  </button>
                )}
              </div>

              {DOMAINS.map((domain, index) => {
                const isCurrentActive = activeDomainId === domain.id;
                const isLocked = lockedState === domain.id;
                const isRespiratory = domain.id === 'respiratory';

                return (
                  <button
                    key={domain.id}
                    type="button"
                    role="button"
                    aria-pressed={isLocked}
                    aria-label={`Show ${domain.label} presentation state`}
                    onMouseEnter={() => setHoveredState(domain.id)}
                    onFocus={() => setFocusedState(domain.id)}
                    onBlur={() => setFocusedState(null)}
                    onClick={() => handleToggleLock(domain.id)}
                    className={`group w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                      isCurrentActive
                        ? isRespiratory
                          ? 'bg-[#A7A3DE]/15 border-[#6F69C9] text-[#24242A] shadow-2xs ring-1 ring-[#6F69C9]/30'
                          : 'bg-[#A7A3DE]/15 border-[#6F69C9] text-[#24242A] shadow-2xs ring-1 ring-[#6F69C9]/30'
                        : 'bg-[#FFFFFF] border-[#D9D8F4] text-[#24242A] hover:bg-[#FAFAFC] hover:border-[#A7A3DE]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{domain.label}</span>
                      <div className="flex items-center gap-1">
                        <span
                          className={`text-[9px] font-mono transition-colors ${
                            isCurrentActive ? 'text-[#6F69C9] font-bold' : 'text-[#A7A3DE]'
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <ArrowRight
                          className={`w-3 h-3 transition-transform duration-150 ${
                            isCurrentActive
                              ? 'text-[#6F69C9] translate-x-0.5'
                              : 'text-transparent group-hover:text-[#A7A3DE]'
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lower Row: Contextual Micro-Callout (Fixed height to prevent layout shifting) */}
          <div className="mt-3.5 w-full">
            {activeDomainId === 'baseline' ? (
              /* Neutral Baseline State Caption */
              <div className="h-[74px] rounded-xl border border-dashed border-[#D9DDEE] bg-[#FAFAFC] px-4 py-3 flex items-center justify-between text-[#626A7C]">
                <div className="flex items-center gap-2.5 text-xs">
                  <Sparkles className="w-4 h-4 text-[#A7A3DE] shrink-0" />
                  <span className="font-medium text-[#24242A]">
                    Hover or select a symptom domain
                  </span>
                  <span className="text-[#626A7C] text-[11px]">
                    to view corresponding functional involvement
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[#6F69C9] tracking-wider uppercase px-2 py-0.5 rounded bg-[#D9D8F4]/30">
                  Interactive
                </span>
              </div>
            ) : (
              /* Active Symptom Domain Caption */
              <div
                className={`h-[74px] rounded-xl border px-4 py-2.5 flex flex-col justify-center transition-all duration-150 shadow-2xs ${
                  activeDomainId === 'respiratory'
                    ? 'bg-[#FFFFFF] border-[#D9D8F4] ring-1 ring-[#D9D8F4]'
                    : 'bg-[#FFFFFF] border-[#D9D8F4]'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-xs font-bold text-[#24242A] tracking-tight">
                    {activeMeta?.heading}
                  </h4>
                  <span className="text-[10px] font-bold text-[#6F69C9] uppercase tracking-wider px-2 py-0.5 rounded bg-[#D9D8F4]/30">
                    {activeMeta?.tag}
                  </span>
                </div>

                <p className="text-[11.5px] text-[#626A7C] leading-snug">
                  {activeMeta?.text}
                </p>

                {/* Additional critical line for Respiratory state only */}
                {activeMeta?.criticalLine && (
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-[#B91C1C]">
                    <AlertCircle className="w-3 h-3 text-[#B91C1C] shrink-0" />
                    <span>{activeMeta.criticalLine}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Clinical Context</span>
        <span className="font-semibold text-[#6F69C9]">Amyotrophic Lateral Sclerosis</span>
      </div>
    </div>
  );
};



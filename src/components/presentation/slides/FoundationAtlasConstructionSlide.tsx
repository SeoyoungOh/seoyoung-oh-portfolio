import React, { useState } from 'react';
import { ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface FoundationAtlasConstructionSlideProps {
  isActive: boolean;
}

interface WorkflowStepData {
  id: string;
  stepNum: string;
  label: string;
  heading: string;
  mainStatement: string;
  microCaption: string;
  conciseNote: string;
}

const WORKFLOW_STEPS: WorkflowStepData[] = [
  {
    id: 'step1',
    stepNum: '01',
    label: 'Source diagrams',
    heading: 'Source diagrams',
    mainStatement: 'Fine neuroanatomical information already existed in published anatomical diagrams.',
    microCaption: 'What anatomical knowledge was available?',
    conciseNote: 'Detailed anatomical knowledge was available, but not yet in a digital atlas format.',
  },
  {
    id: 'step2',
    stepNum: '02',
    label: 'Common spatial frame',
    heading: 'Common spatial frame',
    mainStatement: 'A common spatial framework was needed to relate diagram-based anatomy to MRI space.',
    microCaption: 'How could anatomy be related to MRI space?',
    conciseNote: 'The anatomical information had to be brought into a consistent computational coordinate system.',
  },
  {
    id: 'step3',
    stepNum: '03',
    label: 'Slice correspondence',
    heading: 'Slice correspondence',
    mainStatement: 'Diagram sections were matched to corresponding brainstem levels.',
    microCaption: 'How were diagram levels related to computational slices?',
    conciseNote: 'The anatomical reference had to be organized slice by slice.',
  },
  {
    id: 'step4',
    stepNum: '04',
    label: 'Landmark alignment',
    heading: 'Landmark alignment',
    mainStatement: 'Macro-anatomical landmarks were used to align diagram-based anatomy with MRI-compatible space.',
    microCaption: 'How was anatomical correspondence established?',
    conciseNote: 'Alignment relied on visible macro-anatomical correspondence rather than invisible fine nuclei boundaries.',
  },
  {
    id: 'step5',
    stepNum: '05',
    label: 'Digital label building',
    heading: 'Digital label building',
    mainStatement: 'Aligned anatomical regions were digitized into discrete labels and assembled into a volumetric representation.',
    microCaption: 'How did the diagrams become computational labels?',
    conciseNote: 'The anatomical regions became programmable multi-label structures.',
  },
  {
    id: 'step6',
    stepNum: '06',
    label: 'Final atlas',
    heading: 'Final atlas',
    mainStatement: 'This process produced an MNI-compatible task-oriented atlas for downstream evaluation and interpretation.',
    microCaption: 'What did the final atlas provide?',
    conciseNote: 'The atlas served as an anatomical scaffold rather than subject-specific ground truth.',
  },
];

export const FoundationAtlasConstructionSlide: React.FC<FoundationAtlasConstructionSlideProps> = () => {
  const [lockedStep, setLockedStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [focusedStep, setFocusedStep] = useState<number | null>(null);

  const activeIndex = hoveredStep ?? focusedStep ?? lockedStep ?? 0;
  const currentStep = WORKFLOW_STEPS[activeIndex];

  const handleToggleStep = (index: number) => {
    setLockedStep((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* =========================================================================
          ZONE 1: Header Area (~14% height)
      ========================================================================= */}
      <div className="shrink-0 mb-1">
        <div className="flex items-center justify-between pb-0.5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#6F69C9] uppercase block mb-0.5">
              FOUNDATIONS
            </span>
            <h2 className="text-2xl lg:text-[25px] font-black text-[#24242A] tracking-tight leading-snug">
              From Neuroanatomy Diagrams to a Programmable Atlas
            </h2>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Fine anatomical knowledge existed, but not in a directly usable computational form.
            </p>
          </div>

          {/* Pipeline Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] text-[11px] font-mono text-[#626A7C] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
            <span className="font-bold text-[#24242A]">6-Step Atlas Pipeline</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ZONE 2: Persistent Top Workflow (~14% height)
      ========================================================================= */}
      <div className="shrink-0 my-1">
        <div className="grid grid-cols-6 gap-1.5 items-center">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isSelected = activeIndex === idx;
            const isLocked = lockedStep === idx;

            return (
              <div key={step.id} className="flex items-center">
                <button
                  type="button"
                  tabIndex={0}
                  onClick={() => handleToggleStep(idx)}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onFocus={() => setFocusedStep(idx)}
                  onBlur={() => setFocusedStep(null)}
                  aria-pressed={isLocked}
                  aria-label={`Step ${step.stepNum}: ${step.label}`}
                  className={`flex-1 p-2 rounded-xl text-center transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F69C9] ${
                    isSelected
                      ? 'bg-[#D9D8F4]/50 border-2 border-[#6F69C9] shadow-2xs'
                      : 'bg-white border border-[#D9DDEE] hover:border-[#A7A3DE]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <span
                      className={`text-[9.5px] font-mono font-black ${
                        isSelected ? 'text-[#6F69C9]' : 'text-[#74747D]'
                      }`}
                    >
                      {step.stepNum}
                    </span>
                    {isLocked && <span className="w-1.5 h-1.5 rounded-full bg-[#6F69C9]" />}
                  </div>
                  <span
                    className={`text-[11px] font-bold block leading-tight truncate ${
                      isSelected ? 'text-[#24242A]' : 'text-[#24242A]/85'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>

                {/* Arrow connector */}
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="shrink-0 px-0.5 text-[#A7A3DE]">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          ZONE 3: Central Detail Viewport (~48% height, fixed size for all states)
      ========================================================================= */}
      <div className="flex-1 min-h-0 my-1 rounded-xl bg-white border border-[#D9DDEE] p-3 flex flex-col justify-between shadow-2xs">
        {/* Top Header of Active Step */}
        <div className="shrink-0 pb-1.5 border-b border-[#D9DDEE]/80 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase tracking-wider">
                {currentStep.microCaption}
              </span>
              <span className="text-[#D9DDEE]">·</span>
              <span className="text-[9px] font-mono font-bold text-[#74747D]">
                STAGE {currentStep.stepNum} OF 06
              </span>
            </div>
            <h3 className="text-base lg:text-[17px] font-black text-[#24242A] tracking-tight leading-tight">
              {currentStep.heading}
            </h3>
            <p className="text-xs text-[#24242A] font-medium mt-0.5">
              {currentStep.mainStatement}
            </p>
          </div>

          <div className="px-2 py-1 rounded-md bg-[#F4F5FB] border border-[#D9D8F4] text-right shrink-0">
            <span className="text-[8.5px] font-mono text-[#74747D] uppercase block">ACTIVE STEP</span>
            <span className="text-[11px] font-bold font-mono text-[#6F69C9]">
              {currentStep.stepNum} / 06
            </span>
          </div>
        </div>

        {/* Dynamic Schematic Diagram Area (HTML/CSS shapes only) */}
        <div className="flex-1 min-h-[140px] py-1 flex items-center justify-center">
          {activeIndex === 0 && (
            /* STEP 01 SCHEMATIC: Source Diagrams */
            <div className="flex items-center justify-center gap-6 w-full max-w-lg">
              <div className="p-3 rounded-lg bg-[#F4F5FB] border border-[#D9D8F4] flex flex-col items-center gap-1.5 w-32 shadow-2xs">
                <BookOpen className="w-5 h-5 text-[#6F69C9]" />
                <span className="text-[10.5px] font-bold text-[#24242A] text-center leading-tight">
                  Plate Diagrams
                </span>
                <div className="space-y-1 w-full pt-1 border-t border-[#D9DDEE]/80">
                  <div className="h-1 bg-[#D9D8F4] rounded-full w-full" />
                  <div className="h-1 bg-[#D9D8F4] rounded-full w-3/4" />
                  <div className="h-1 bg-[#D9D8F4] rounded-full w-5/6" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white border border-[#A7A3DE] text-[#6F69C9] text-[10px] font-mono font-bold shadow-2xs">
                  published diagrams
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-[#A7A3DE] text-[#6F69C9] text-[10px] font-mono font-bold shadow-2xs">
                  fine anatomy
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-[#A7A3DE] text-[#6F69C9] text-[10px] font-mono font-bold shadow-2xs">
                  obex-referenced
                </span>
              </div>
            </div>
          )}

          {activeIndex === 1 && (
            /* STEP 02 SCHEMATIC: Common Spatial Frame */
            <div className="flex items-center justify-center gap-5 w-full max-w-lg">
              {/* Left: Source Boxes */}
              <div className="flex flex-col gap-1.5">
                <div className="px-2.5 py-1 rounded bg-[#F4F5FB] border border-[#D9DDEE] text-[10px] font-mono font-bold text-[#74747D]">
                  Diagram Section A
                </div>
                <div className="px-2.5 py-1 rounded bg-[#F4F5FB] border border-[#D9DDEE] text-[10px] font-mono font-bold text-[#74747D]">
                  Diagram Section B
                </div>
                <div className="px-2.5 py-1 rounded bg-[#F4F5FB] border border-[#D9DDEE] text-[10px] font-mono font-bold text-[#74747D]">
                  Diagram Section C
                </div>
              </div>

              {/* Middle: Converging arrows */}
              <div className="text-[#6F69C9] flex flex-col items-center">
                <ArrowRight className="w-5 h-5" />
                <span className="text-[8.5px] font-mono text-[#74747D] mt-0.5">Registration</span>
              </div>

              {/* Right: MNI Space Box */}
              <div className="p-3.5 rounded-xl bg-[#F4F5FB] border-2 border-[#6F69C9] text-center w-36 shadow-2xs">
                <span className="text-xs font-black font-mono text-[#6F69C9] block">
                  MNI SPACE
                </span>
                <span className="text-[9.5px] text-[#74747D] block mt-0.5">
                  1 mm³ Standard Grid
                </span>
                <div className="flex justify-center gap-1.5 text-[8.5px] font-mono text-[#6F69C9] mt-2 pt-1.5 border-t border-[#D9DDEE]">
                  <span>(x, y, z)</span>
                  <span>ICBM 2009b</span>
                </div>
              </div>
            </div>
          )}

          {activeIndex === 2 && (
            /* STEP 03 SCHEMATIC: Slice Correspondence */
            <div className="flex items-center justify-center gap-8 w-full max-w-lg">
              {/* Left Column: Diagram Slices */}
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[9px] font-mono font-bold text-[#74747D] uppercase">
                  Diagram Sections
                </span>
                {['obex +8 mm', 'obex +4 mm', 'obex 0 mm', 'obex -4 mm'].map((lvl, i) => (
                  <div
                    key={i}
                    className="w-28 py-1 px-2 rounded bg-[#F4F5FB] border border-[#D9DDEE] text-[9.5px] font-mono text-center text-[#24242A]"
                  >
                    {lvl}
                  </div>
                ))}
              </div>

              {/* Connectors */}
              <div className="flex flex-col justify-around h-24 text-[#A7A3DE]">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
                    <div className="w-8 h-[1.5px] bg-[#A7A3DE]" />
                    <span className="w-2 h-2 rounded-full bg-[#6F69C9]" />
                  </div>
                ))}
              </div>

              {/* Right Column: MRI Space Slices */}
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[9px] font-mono font-bold text-[#6F69C9] uppercase">
                  MNI Axial Slices
                </span>
                {['Slice z = -46', 'Slice z = -50', 'Slice z = -54', 'Slice z = -58'].map((sl, i) => (
                  <div
                    key={i}
                    className="w-28 py-1 px-2 rounded bg-white border border-[#A7A3DE] text-[9.5px] font-mono text-center font-bold text-[#6F69C9]"
                  >
                    {sl}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeIndex === 3 && (
            /* STEP 04 SCHEMATIC: Landmark Alignment */
            <div className="flex flex-col items-center justify-center w-full max-w-lg">
              <div className="flex items-center justify-center gap-10 w-full">
                {/* Left: Diagram Contour */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-20 rounded-2xl bg-[#F4F5FB] border-2 border-dashed border-[#A7A3DE] relative flex items-center justify-center">
                    <span className="text-[9px] font-mono font-bold text-[#74747D]">Diagram</span>
                    <span className="w-2 h-2 rounded-full bg-[#6F69C9] absolute top-2 left-3" />
                    <span className="w-2 h-2 rounded-full bg-[#6F69C9] absolute top-2 right-3" />
                    <span className="w-2 h-2 rounded-full bg-[#6F69C9] absolute bottom-2 left-4" />
                    <span className="w-2 h-2 rounded-full bg-[#6F69C9] absolute bottom-2 right-4" />
                    <span className="w-2 h-2 rounded-full bg-[#6F69C9] absolute top-1/2 left-2" />
                  </div>
                  <span className="text-[9px] font-mono text-[#74747D] mt-1">Diagram Contour</span>
                </div>

                {/* Middle: Warping Arrow */}
                <div className="flex flex-col items-center text-[#6F69C9]">
                  <ArrowRight className="w-5 h-5" />
                  <span className="text-[9px] font-mono font-bold bg-[#D9D8F4]/50 px-2 py-0.5 rounded border border-[#6F69C9]/30 mt-1">
                    alignment / warping
                  </span>
                </div>

                {/* Right: Target MRI-compatible Contour */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-20 rounded-2xl bg-white border-2 border-[#6F69C9] relative flex items-center justify-center shadow-2xs">
                    <span className="text-[9px] font-mono font-bold text-[#6F69C9]">MNI Space</span>
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32] absolute top-2 left-3" />
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32] absolute top-2 right-3" />
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32] absolute bottom-2 left-4" />
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32] absolute bottom-2 right-4" />
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32] absolute top-1/2 left-2" />
                  </div>
                  <span className="text-[9px] font-mono text-[#6F69C9] font-bold mt-1">Target Space</span>
                </div>
              </div>
            </div>
          )}

          {activeIndex === 4 && (
            /* STEP 05 SCHEMATIC: Digital Label Building */
            <div className="flex items-center justify-center gap-3 w-full max-w-xl">
              <div className="flex flex-col items-center">
                <div className="w-16 h-14 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] flex items-center justify-center">
                  <div className="w-10 h-9 border border-dashed border-[#74747D] rounded" />
                </div>
                <span className="text-[8.5px] font-mono text-[#74747D] mt-1">Contour</span>
              </div>

              <ArrowRight className="w-3.5 h-3.5 text-[#A7A3DE]" />

              <div className="flex flex-col items-center">
                <div className="w-16 h-14 rounded-lg bg-white border border-[#D9DDEE] p-1.5 flex flex-wrap gap-1 items-center justify-center">
                  <span className="w-4 h-4 rounded bg-[#D9D8F4] border border-[#6F69C9]" />
                  <span className="w-4 h-4 rounded bg-[#E3F0E6] border border-[#2E7D32]" />
                  <span className="w-4 h-4 rounded bg-[#A7A3DE]/50 border border-[#6F69C9]" />
                </div>
                <span className="text-[8.5px] font-mono text-[#74747D] mt-1">Labeled regions</span>
              </div>

              <ArrowRight className="w-3.5 h-3.5 text-[#A7A3DE]" />

              <div className="flex flex-col items-center">
                <div className="w-16 h-14 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE] relative flex items-center justify-center">
                  <div className="w-10 h-2 bg-[#D9D8F4] rounded border border-[#6F69C9] absolute top-2" />
                  <div className="w-10 h-2 bg-[#E3F0E6] rounded border border-[#2E7D32] absolute top-5" />
                  <div className="w-10 h-2 bg-[#A7A3DE] rounded border border-[#6F69C9] absolute top-8" />
                </div>
                <span className="text-[8.5px] font-mono text-[#74747D] mt-1">Stacked slices</span>
              </div>

              <ArrowRight className="w-3.5 h-3.5 text-[#A7A3DE]" />

              <div className="flex flex-col items-center">
                <div className="w-16 h-14 rounded-lg bg-white border-2 border-[#6F69C9] flex items-center justify-center shadow-2xs">
                  <Layers className="w-6 h-6 text-[#6F69C9]" />
                </div>
                <span className="text-[8.5px] font-mono font-bold text-[#6F69C9] mt-1">3D Multi-label</span>
              </div>
            </div>
          )}

          {activeIndex === 5 && (
            /* STEP 06 SCHEMATIC: Final Atlas */
            <div className="flex items-center justify-center gap-8 w-full max-w-lg">
              {/* Atlas Volume Block */}
              <div className="p-3.5 rounded-xl bg-white border-2 border-[#6F69C9] text-center w-36 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-[#D9D8F4]/50 border border-[#6F69C9] mx-auto flex items-center justify-center mb-1.5">
                  <Layers className="w-5 h-5 text-[#6F69C9]" />
                </div>
                <span className="text-xs font-black font-mono text-[#6F69C9] block">
                  3D MNI ATLAS
                </span>
                <span className="text-[9px] text-[#74747D] block mt-0.5">
                  Task-Oriented Reference
                </span>
              </div>

              {/* Side Bullets */}
              <div className="space-y-1.5">
                {[
                  'ROI definition',
                  'Visualization',
                  'Score aggregation',
                  'Interpretation',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6F69C9] shrink-0" />
                    <span className="text-xs font-bold text-[#24242A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Concise Note Strip */}
        <div className="shrink-0 p-2 rounded-lg bg-[#F4F5FB] border border-[#D9D8F4] flex items-center justify-between">
          <p className="text-[11px] text-[#24242A] font-medium leading-tight">
            {currentStep.conciseNote}
          </p>
          <span className="text-[9.5px] font-mono font-bold text-[#6F69C9] shrink-0 ml-2">
            Click / hover steps to inspect
          </span>
        </div>
      </div>

      {/* =========================================================================
          ZONE 4: Persistent Summary & Final Takeaway (~18% height)
      ========================================================================= */}
      <div className="shrink-0 space-y-1.5 mt-0.5">
        {/* Bottom Persistent Summary */}
        <div className="p-2 rounded-xl bg-[#FAFAFC] border border-[#D9DDEE] shadow-2xs text-[10.5px] space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-[#6F69C9] font-mono uppercase tracking-wider shrink-0">
              Provides:
            </span>
            <span className="text-[#24242A] font-medium">
              ROI definition · visualization · score aggregation · anatomical interpretation
            </span>
          </div>
          <div className="flex items-center gap-1.5 pt-1 border-t border-[#D9DDEE]/60">
            <span className="font-extrabold text-[#6F69C9] font-mono uppercase tracking-wider shrink-0">
              Not:
            </span>
            <span className="text-[#74747D]">
              subject-specific ground truth · voxel-wise disease labels · direct pathology annotation
            </span>
          </div>
        </div>

        {/* Final Takeaway */}
        <div className="py-1.5 px-3 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] text-center shadow-2xs">
          <p className="text-xs font-semibold text-[#24242A]">
            We converted fine anatomical knowledge into a{' '}
            <span className="text-[#6F69C9] font-bold">computational reference</span> for evaluating and
            interpreting spatial evidence.
          </p>
        </div>
      </div>
    </div>
  );
};


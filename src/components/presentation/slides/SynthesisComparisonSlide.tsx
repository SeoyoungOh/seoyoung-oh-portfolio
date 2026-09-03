import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, GitMerge } from 'lucide-react';

interface SynthesisComparisonSlideProps {
  isActive: boolean;
}

type ComparisonTab = 'weak' | 'normal' | 'complementarity';

export const SynthesisComparisonSlide: React.FC<SynthesisComparisonSlideProps> = () => {
  const [activeTab, setActiveTab] = useState<ComparisonTab>('complementarity');

  const tabs: { key: ComparisonTab; label: string }[] = [
    { key: 'weak', label: 'Weak Supervision' },
    { key: 'normal', label: 'Normal Projection' },
    { key: 'complementarity', label: 'Complementarity' },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          ALS INTERPRETATION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Which Method Is Better?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Comparing the conceptual foundations, clinical roles, and synergy of both paradigms.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-2">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#9091DF] text-[#FFFFFF] shadow-2xs'
                    : 'bg-[#F4F5FB] text-[#626A7C] hover:text-[#20243C] border border-[#D9DDEE]'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="flex-1 min-h-[160px] flex flex-col justify-center">
          {activeTab === 'weak' && (
            <div className="p-4 rounded-xl bg-[#FBFBFF] border-2 border-[#9091DF]/40 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
                  CORE QUESTION
                </span>
                <h3 className="text-sm font-bold text-[#20243C] mb-2.5">
                  “What supports the diagnostic decision?”
                </h3>
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-[#20243C] flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9091DF]" /> Strengths:
                  </div>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Uses disease labels directly</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Identifies disease-discriminative evidence</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Highlights regions directly relevant to patient classification</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Highly useful when reliable diagnostic labels exist</p>
                </div>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-[#D9DDEE] pt-3 md:pt-0 md:pl-4">
                <span className="text-[10px] font-mono font-bold text-[#E06D6D] block mb-1">
                  CRITICAL BOUNDARIES
                </span>
                <div className="space-y-1.5 mt-2">
                  <div className="text-xs font-bold text-[#20243C] flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#E06D6D]" /> Limitations:
                  </div>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Strictly classifier-dependent</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Evidence can reflect confounding shortcuts and scanner biases</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Does not inherently represent anatomical abnormality</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'normal' && (
            <div className="p-4 rounded-xl bg-[#FBFBFF] border-2 border-[#DFF8E1] grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#20243C] block mb-1">
                  CORE QUESTION
                </span>
                <h3 className="text-sm font-bold text-[#20243C] mb-2.5">
                  “What deviates reliably from healthy anatomy?”
                </h3>
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-[#20243C] flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#20243C]" /> Strengths:
                  </div>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Does not require patient labels for model training</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Models normative physiological anatomy directly</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Provides pure deviation-from-normal evidence</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Supports uncertainty gating and false-positive calibration</p>
                </div>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-[#D9DDEE] pt-3 md:pt-0 md:pl-4">
                <span className="text-[10px] font-mono font-bold text-[#626A7C] block mb-1">
                  CRITICAL BOUNDARIES
                </span>
                <div className="space-y-1.5 mt-2">
                  <div className="text-xs font-bold text-[#20243C] flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#626A7C]" /> Limitations:
                  </div>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Deviation is not necessarily disease-specific (e.g. aging)</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Strongly depends on the healthy-reference demographic domain</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">• Residual evidence remains sensitive to acquisition variability</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'complementarity' && (
            <div className="p-3.5 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between gap-2.5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE]">
                  <span className="text-[10px] font-bold text-[#9091DF] uppercase block mb-0.5">When They Agree</span>
                  <p className="text-xs font-bold text-[#20243C] mb-1">Stronger candidate for investigation</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">
                    Regions showing high disease discrimination AND notable healthy deviation form prioritized targets.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE]">
                  <span className="text-[10px] font-bold text-[#626A7C] uppercase block mb-0.5">When They Disagree</span>
                  <p className="text-xs font-bold text-[#20243C] mb-1">Informative diagnostic signal</p>
                  <p className="text-[11px] text-[#626A7C] leading-snug">
                    Reveals classifier shortcuts, benign anatomical variants, partial volume effects, or site discrepancies.
                  </p>
                </div>
              </div>

              {/* Simple Visual Synthesis */}
              <div className="p-2.5 rounded-xl bg-[#20243C] text-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#A0A1F8]/20 text-[#A0A1F8] font-bold text-[10px]">
                    Weak Evidence
                  </span>
                  <span className="text-xs font-bold text-[#D9DDEE]">+</span>
                  <span className="px-2 py-0.5 rounded bg-[#DFF8E1] text-[#20243C] font-bold text-[10px]">
                    Normal Deviation
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[#DFF8E1] font-bold text-xs">
                  <ArrowRight className="w-4 h-4 text-[#9091DF]" />
                  <span>Anatomically Grounded Hypothesis</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Conclusion Banner */}
        <div className="p-2.5 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="font-bold text-[#20243C]">
            Synthesis: <span className="font-normal text-[#626A7C]">The two methods are <strong className="text-[#20243C]">complementary</strong> rather than interchangeable.</span>
          </p>
          <span className="text-[11px] text-[#626A7C] italic shrink-0">
            Agreement suggests a hypothesis — it does not prove histological pathology.
          </span>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Methodological Synthesis</span>
        <span className="font-semibold text-[#9091DF]">Comparative Evaluation</span>
      </div>
    </div>
  );
};

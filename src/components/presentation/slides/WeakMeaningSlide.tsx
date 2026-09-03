import React from 'react';
import { BookOpen } from 'lucide-react';

interface WeakMeaningSlideProps {
  isActive: boolean;
}

export const WeakMeaningSlide: React.FC<WeakMeaningSlideProps> = () => {
  const pillars = [
    {
      num: '01',
      title: 'Localization',
      question: 'Does the evidence align with known spatial targets when masks are available?',
      detail: 'Validated via benchmark pointing games, hit rates, and bounded overlap against verified lesions.',
    },
    {
      num: '02',
      title: 'Reliability',
      question: 'Is the evidence stable and consistent rather than dependent on one explanation map?',
      detail: 'Measured via multi-cue consensus, test-retest reproducibility, and perturbation invariance.',
    },
    {
      num: '03',
      title: 'Decision Relevance',
      question: 'Does the highlighted evidence actually contribute to the classifier decision?',
      detail: 'Evaluated by feature masking, gradual token removal, and faithfulness perturbation curves.',
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 1 · WEAK SUPERVISION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Why Is This Evidence More Meaningful?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          The three foundational pillars that establish scientific credibility beyond cosmetic saliency maps.
        </p>
      </div>

      {/* 3 Large Pillars */}
      <div className="my-auto py-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch">
        {pillars.map((p) => (
          <div
            key={p.num}
            className="p-4 rounded-xl bg-[#FBFBFF] border-2 border-[#9091DF]/40 shadow-2xs flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-mono font-black text-[#9091DF] px-2 py-0.5 rounded bg-[#A0A1F8]/15 inline-block mb-3">
                PILLAR {p.num}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#20243C] mb-2 leading-tight">
                {p.title}
              </h3>
              <p className="text-xs font-semibold text-[#20243C] mb-2 leading-snug">
                “{p.question}”
              </p>
              <p className="text-[11px] text-[#626A7C] leading-relaxed">
                {p.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Message & Secondary Publication Block */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-[#F4F5FB] border border-[#D9DDEE]">
        <p className="text-xs font-bold text-[#20243C]">
          A convincing heatmap should be <span className="text-[#9091DF]">more than visually plausible</span>.
        </p>

        {/* Publication Block (Visually Secondary) */}
        <div className="inline-flex items-center gap-1.5 text-[11px] text-[#626A7C] shrink-0">
          <BookOpen className="w-3.5 h-3.5 text-[#9091DF]" />
          <span><strong className="text-[#20243C]">ISBI 2026</strong> · Multi-map Fusion for Weakly Supervised Disease Localization</span>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Validation Rigor</span>
        <span className="font-semibold text-[#9091DF]">Evidence Credibility</span>
      </div>
    </div>
  );
};

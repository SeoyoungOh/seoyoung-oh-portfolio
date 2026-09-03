import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface WeakLimitationsSlideProps {
  isActive: boolean;
}

export const WeakLimitationsSlide: React.FC<WeakLimitationsSlideProps> = () => {
  const limitations = [
    {
      num: '01',
      title: 'Classifier dependency',
      desc: 'If the classifier learns the wrong signal or superficial shortcuts, the explanation can faithfully explain the wrong decision.',
    },
    {
      num: '02',
      title: 'Slice-based inference',
      desc: 'The method starts from 2D image slices, which limits direct volumetric consistency across full 3D scans.',
    },
    {
      num: '03',
      title: 'Evidence can appear in controls',
      desc: 'A heatmap indicates decision-relevant regions, but does not inherently represent pathological abnormality.',
    },
    {
      num: '04',
      title: 'Disease-discriminative ≠ deviation from normal',
      desc: 'The method tells us what supports classification, not necessarily what is anatomically abnormal.',
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
          But the Classifier Still Defines the Evidence
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Critical boundaries of weakly supervised classification and the rationale for normative modeling.
        </p>
      </div>

      {/* 4 Limitation Cards */}
      <div className="my-auto py-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {limitations.map((item) => (
          <div
            key={item.num}
            className="p-3 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-[#9091DF] block mb-1">
                LIMITATION {item.num}
              </span>
              <h3 className="text-xs font-bold text-[#20243C] mb-1">
                {item.title}
              </h3>
              <p className="text-[11px] text-[#626A7C] leading-snug">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Transition to Next Section at the Bottom */}
      <div className="p-3 rounded-2xl bg-[#20243C] text-[#FFFFFF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#A0A1F8]/20 text-[#A0A1F8] font-bold text-[10px] uppercase">
            Method 1
          </span>
          <span className="text-xs text-[#D9DDEE]">
            “What supports the diagnosis?”
          </span>
        </div>

        <div className="text-[#9091DF] hidden sm:block">
          <ArrowRight className="w-4 h-4" />
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#DFF8E1] text-[#20243C] font-bold text-[10px] uppercase">
            Next Question
          </span>
          <span className="text-xs font-bold text-[#FFFFFF]">
            “What if we learn normal anatomy first and search for reliable deviations?”
          </span>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Transition to Normative Modeling</span>
        <span className="font-semibold text-[#9091DF]">Method 1 Limitations & Evolution</span>
      </div>
    </div>
  );
};

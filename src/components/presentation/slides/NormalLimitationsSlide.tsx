import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NormalLimitationsSlideProps {
  isActive: boolean;
}

export const NormalLimitationsSlide: React.FC<NormalLimitationsSlideProps> = () => {
  const limitations = [
    {
      num: '01',
      title: 'Deviation is not disease specificity',
      desc: 'A region can differ from healthy anatomy without being specifically caused by ALS (e.g., normal aging, incidental vascular changes).',
    },
    {
      num: '02',
      title: 'Healthy-reference assumption',
      desc: 'The definition of “normal” depends heavily on the demographic diversity, age range, and scanner distribution of the healthy training cohort.',
    },
    {
      num: '03',
      title: 'Registration and imaging variability',
      desc: 'Residual evidence can still be affected by spatial alignment errors, gradient non-linearities, and partial-volume tissue boundaries.',
    },
    {
      num: '04',
      title: 'Evidence is not exact segmentation',
      desc: 'The method provides calibrated, statistically grounded anomaly evidence, not precise voxel-wise histological ground-truth boundaries.',
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          METHOD 2 · NORMAL PROJECTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Normal Deviation Is Not the Same as Disease
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Understanding the interpretive limits of anomaly detection and framing the synthesis.
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

      {/* Synthesis Transition Banner */}
      <div className="p-3 rounded-2xl bg-[#20243C] text-[#FFFFFF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-[#A0A1F8]/25 text-[#A0A1F8] font-bold text-[10px]">
            METHOD 1
          </span>
          <span className="text-[#D9DDEE]">“What supports diagnosis?”</span>
          <span className="text-[#626A7C] font-bold">+</span>
          <span className="px-2 py-0.5 rounded bg-[#DFF8E1] text-[#20243C] font-bold text-[10px]">
            METHOD 2
          </span>
          <span className="text-[#D9DDEE]">“What deviates from normal?”</span>
        </div>

        <div className="text-[#9091DF] hidden sm:block">
          <ArrowRight className="w-4 h-4" />
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#FFFFFF]/15 text-[#FFFFFF] font-bold text-[10px] uppercase">
            Next Question
          </span>
          <span className="text-xs font-bold text-[#DFF8E1]">
            “What do these two kinds of evidence mean when we interpret ALS brainstem MRI?”
          </span>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Synthesis Framing</span>
        <span className="font-semibold text-[#9091DF]">Connecting Both Methodologies</span>
      </div>
    </div>
  );
};

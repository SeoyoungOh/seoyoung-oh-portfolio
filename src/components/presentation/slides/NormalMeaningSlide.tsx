import React from 'react';
import { BookOpen } from 'lucide-react';

interface NormalMeaningSlideProps {
  isActive: boolean;
}

export const NormalMeaningSlide: React.FC<NormalMeaningSlideProps> = () => {
  const pillars = [
    {
      num: '01',
      title: 'Healthy Reference',
      detail: 'Normal anatomy is learned without patient labels, avoiding diagnostic shortcut bias.',
    },
    {
      num: '02',
      title: 'Multi-View Evidence',
      detail: 'Anomaly evidence combines pixel, latent, and high-frequency residuals rather than one view alone.',
    },
    {
      num: '03',
      title: 'Uncertainty Gating',
      detail: 'Evidence that fluctuates across plausible counterfactual normal projections is treated cautiously.',
    },
    {
      num: '04',
      title: 'False-Positive Control',
      detail: 'The detection threshold is explicitly calibrated using held-out healthy validation scans.',
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
          Why Is This Evidence More Reliable?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Four foundational principles ensuring anomaly evidence reflects genuine pathology over noise.
        </p>
      </div>

      {/* 4 Large Pillars */}
      <div className="my-auto py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
        {pillars.map((p) => (
          <div
            key={p.num}
            className="p-4 rounded-xl bg-[#FBFBFF] border-2 border-[#DFF8E1] shadow-2xs flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono font-black text-[#20243C] px-2 py-0.5 rounded bg-[#DFF8E1] inline-block mb-2.5">
                PILLAR {p.num}
              </span>
              <h3 className="text-sm font-bold text-[#20243C] mb-2 leading-tight">
                {p.title}
              </h3>
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
          A strong residual is not enough. Evidence must be: <span className="text-[#20243C]">strong</span> + <span className="text-[#9091DF]">stable</span> + <span className="text-[#20243C] underline decoration-[#DFF8E1] decoration-2">unusual relative to healthy anatomy</span>.
        </p>

        {/* Publication Block (Visually Secondary) */}
        <div className="inline-flex items-center gap-1.5 text-[11px] text-[#626A7C] shrink-0">
          <BookOpen className="w-3.5 h-3.5 text-[#9091DF]" />
          <span><strong className="text-[#20243C]">ECCV 2026</strong> · MedFM-Bench Workshop</span>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Reliability Verification</span>
        <span className="font-semibold text-[#9091DF]">Method 2 Principles</span>
      </div>
    </div>
  );
};

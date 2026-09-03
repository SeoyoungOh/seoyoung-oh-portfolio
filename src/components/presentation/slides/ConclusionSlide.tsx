import React from 'react';
import { ArrowRight, Clock, Activity, Target, Globe } from 'lucide-react';

interface ConclusionSlideProps {
  isActive: boolean;
}

export const ConclusionSlide: React.FC<ConclusionSlideProps> = () => {
  const trajectory = [
    {
      num: '01',
      title: 'Brainstem Segmentation',
      label: 'Voxel-wise / atlas-derived supervision',
      role: 'Establish anatomical and methodological foundations.',
      accent: 'border-[#9091DF]/40',
      badge: 'bg-[#A0A1F8]/15 text-[#9091DF]',
    },
    {
      num: '02',
      title: 'Weakly Supervised Localization',
      label: 'Diagnostic labels only',
      role: 'Extract disease-discriminative spatial evidence.',
      accent: 'border-[#9091DF]',
      badge: 'bg-[#9091DF] text-[#FFFFFF]',
    },
    {
      num: '03',
      title: 'Reliable Normal Projection',
      label: 'Healthy MRI only',
      role: 'Extract calibrated deviation-from-normal evidence.',
      accent: 'border-[#DFF8E1] bg-[#FBFBFF]',
      badge: 'bg-[#DFF8E1] text-[#20243C]',
    },
  ];

  const futureWork = [
    {
      icon: Clock,
      title: 'Longitudinal Validation',
      desc: 'Link spatial evidence with disease progression over time.',
    },
    {
      icon: Activity,
      title: 'Clinical Outcomes',
      desc: 'Correlate with bulbar & respiratory measures (SNIP, FVC).',
    },
    {
      icon: Target,
      title: 'Spatial Uncertainty',
      desc: 'Improve registration & atlas-aware nuclei interpretation.',
    },
    {
      icon: Globe,
      title: 'Multicenter Generalization',
      desc: 'Evaluate robustness across scanners, sites, and protocols.',
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          CONCLUSION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-1">
          From Segmentation to Reliable Evidence
        </h2>
        <div className="flex items-center gap-2 text-xs text-[#626A7C]">
          <span>Supervision Trajectory:</span>
          <span className="font-bold text-[#20243C]">Dense Spatial Labels</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#9091DF]" />
          <span className="font-bold text-[#9091DF]">Image-Level Labels</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#9091DF]" />
          <span className="font-bold text-[#20243C]">Healthy-Only Normative Prior</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="my-auto py-1 flex-1 flex flex-col justify-between">
        {/* 3-Stage Trajectory Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
          {trajectory.map((t) => (
            <div
              key={t.num}
              className={`p-3 rounded-xl bg-[#FBFBFF] border-2 ${t.accent} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-[#626A7C]">
                    PHASE {t.num}
                  </span>
                  <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded ${t.badge}`}>
                    {t.label}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1">
                  {t.title}
                </h3>
                <p className="text-[11px] text-[#626A7C] leading-snug">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central Thesis Core Message */}
        <div className="p-2.5 rounded-xl bg-[#20243C] text-[#FFFFFF] text-center shadow-xs">
          <p className="text-xs font-bold">
            The thesis progressively reduces dependence on dense annotation <span className="text-[#DFF8E1]">while preserving anatomically meaningful spatial interpretation</span>.
          </p>
        </div>

        {/* Future Work (Concise & Visually Secondary) */}
        <div>
          <span className="text-[10px] font-mono font-bold text-[#626A7C] uppercase tracking-wider block mb-1">
            FUTURE PERSPECTIVES
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {futureWork.map((fw, idx) => {
              const Icon = fw.icon;
              return (
                <div key={idx} className="p-2 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE]">
                  <div className="flex items-center gap-1.5 mb-0.5 text-[#20243C]">
                    <Icon className="w-3.5 h-3.5 text-[#9091DF] shrink-0" />
                    <h4 className="text-[11px] font-bold truncate">{fw.title}</h4>
                  </div>
                  <p className="text-[10px] text-[#626A7C] leading-snug">{fw.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Research Overview</span>
        <span className="font-semibold text-[#9091DF]">Thesis Summary & Horizons</span>
      </div>
    </div>
  );
};

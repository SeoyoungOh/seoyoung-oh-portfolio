import React from 'react';

interface FoundationLimitationsSlideProps {
  isActive: boolean;
}

export const FoundationLimitationsSlide: React.FC<FoundationLimitationsSlideProps> = () => {
  const limitations = [
    {
      num: '01',
      title: 'Missing target anatomy',
      desc: 'Many ALS-relevant neuroanatomical structures were not represented in the available atlases.',
    },
    {
      num: '02',
      title: 'Atlas labels are not direct MRI annotations',
      desc: 'Atlas-based labels do not guarantee that the segmented region corresponds precisely to subject-specific anatomy in routine MRI.',
    },
    {
      num: '03',
      title: 'Segmentation does not explain disease relevance',
      desc: 'Identifying an anatomical region does not directly indicate whether that region contains disease-related change.',
    },
    {
      num: '04',
      title: 'Limited clinical diversity',
      desc: 'The initial cohort mainly contained first scans, with limited symptom diversity and subtle imaging differences.',
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          FOUNDATIONS
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          Why Segmentation Alone Was Not Enough
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          Fundamental limitations encountered when relying strictly on standard supervised anatomical segmentation.
        </p>
      </div>

      {/* 4 Limitation Cards Grid */}
      <div className="my-auto py-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {limitations.map((item) => (
          <div
            key={item.num}
            className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-black text-[#9091DF] px-2 py-0.5 rounded bg-[#A0A1F8]/15">
                  LIMITATION {item.num}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#626A7C] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Critical Scrutiny</span>
        <span className="font-semibold text-[#9091DF]">Beyond Supervised Segmentation</span>
      </div>
    </div>
  );
};

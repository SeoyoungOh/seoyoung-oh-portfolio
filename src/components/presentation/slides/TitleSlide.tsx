import React from 'react';

interface TitleSlideProps {
  isActive: boolean;
}

export const TitleSlide: React.FC<TitleSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Top row: Institutional logo placeholder */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-[#D9DDEE] bg-[#FBFBFF] text-[#626A7C] text-[11px] font-mono tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#9091DF]/60" />
          <span>Institutional Logo Area</span>
        </div>
        <span className="text-[11px] font-bold text-[#9091DF] tracking-widest uppercase">
          Doctoral Dissertation Defense
        </span>
      </div>

      {/* Main Title Section */}
      <div className="my-auto py-3 max-w-3xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-[#20243C] tracking-tight leading-[1.25] mb-3">
          MRI Segmentation of Brainstem Structures<br />
          <span className="text-[#20243C]">Using Deep Learning Techniques</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-semibold text-[#9091DF] mb-6">
          Application to Amyotrophic Lateral Sclerosis
        </p>

        {/* Committee & Presenter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D9DDEE]/80">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#626A7C] block mb-1">
              Presenter
            </span>
            <p className="text-sm font-bold text-[#20243C]">Seoyoung Oh</p>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#626A7C] block mb-1">
              Supervisors
            </span>
            <p className="text-xs font-semibold text-[#20243C] leading-snug">Jérémie Sublime</p>
            <p className="text-xs font-semibold text-[#20243C] leading-snug">Véronique Marchand-Pauvert</p>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#626A7C] block mb-1">
              Co-supervisors
            </span>
            <p className="text-xs font-semibold text-[#20243C] leading-snug">Hélène Urien</p>
            <p className="text-xs font-semibold text-[#20243C] leading-snug">Mélanie Pélégrini-Issac</p>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Date of Defense</span>
        <span className="font-semibold text-[#20243C]">24 September 2026</span>
      </div>
    </div>
  );
};

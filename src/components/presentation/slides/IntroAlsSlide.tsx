import React from 'react';

interface IntroAlsSlideProps {
  isActive: boolean;
}

export const IntroAlsSlide: React.FC<IntroAlsSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase block mb-1.5">
          INTRODUCTION
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#20243C] tracking-tight leading-snug mb-2">
          What is Amyotrophic Lateral Sclerosis?
        </h2>
        <p className="text-xs sm:text-sm text-[#626A7C] max-w-2xl leading-relaxed">
          A fatal neurodegenerative pathology characterized by progressive loss of upper and lower motor neurons.
        </p>
      </div>

      {/* Structured placeholder panels */}
      <div className="my-auto py-2 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#A0A1F8]/15 text-[#9091DF] mb-2.5">
              MOTOR PATHWAY
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1.5">
              Progressive Motor Impairment
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Degeneration of corticospinal tracts leading to progressive muscle weakness, loss of voluntary movement, and spasticity.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#A0A1F8]/15 text-[#9091DF] mb-2.5">
              CRANIAL NERVES
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1.5">
              Bulbar Involvement
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Degeneration affecting speech (dysarthria) and swallowing (dysphagia), directly mediated through brainstem motor nuclei.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FBFBFF] border border-[#D9DDEE] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#DFF8E1] text-[#20243C] border border-[#C8DFCA] mb-2.5">
              PROGNOSTIC FACTOR
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#20243C] mb-1.5">
              Respiratory Involvement & Decline
            </h3>
            <p className="text-xs text-[#626A7C] leading-relaxed">
              Weakness of respiratory musculature; understanding respiratory decline is clinically critical as respiratory failure is the primary cause of mortality.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Clinical Context</span>
        <span className="font-semibold text-[#9091DF]">Amyotrophic Lateral Sclerosis</span>
      </div>
    </div>
  );
};

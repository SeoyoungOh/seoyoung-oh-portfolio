import React from 'react';

interface TitleSlideProps {
  isActive: boolean;
}

export const TitleSlide: React.FC<TitleSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Top row: Institutional logo & Eyebrow */}
      <div className="flex items-center justify-between gap-4">
        <div className="h-8 sm:h-9 md:h-10 flex items-center">
          <img
            src="/images/phd-defense/title/phd-defense-institution-logos.png"
            alt="Institutional logos"
            className="h-full w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[360px] object-contain object-left"
          />
        </div>
        <span className="text-[11px] font-bold text-[#9091DF] tracking-widest uppercase shrink-0">
          Doctoral Dissertation Defense
        </span>
      </div>

      {/* Main Title & QR Section */}
      <div className="my-auto py-2 flex-1 flex items-center justify-between gap-6 sm:gap-8">
        {/* Left: Title, Subtitle, Committee */}
        <div className="flex-1 max-w-xl lg:max-w-2xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-[#20243C] tracking-tight leading-[1.25] mb-2 sm:mb-3">
            MRI Segmentation of Brainstem Structures<br />
            <span className="text-[#20243C]">Using Deep Learning Techniques</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#9091DF] mb-4 sm:mb-6">
            Application to Amyotrophic Lateral Sclerosis
          </p>

          {/* Committee & Presenter Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#D9DDEE]/80">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#626A7C] block mb-0.5 sm:mb-1">
                Presenter
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#20243C]">Seoyoung Oh</p>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#626A7C] block mb-0.5 sm:mb-1">
                Supervisors
              </span>
              <div className="space-y-1.5">
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#20243C] leading-snug">Jérémie Sublime</p>
                  <p className="text-[10px] sm:text-[11px] text-[#626A7C] leading-tight">ISEP</p>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#20243C] leading-snug">Véronique Marchand-Pauvert</p>
                  <p className="text-[10px] sm:text-[11px] text-[#626A7C] leading-tight">Inserm</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#626A7C] block mb-0.5 sm:mb-1">
                Co-supervisors
              </span>
              <div className="space-y-1.5">
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#20243C] leading-snug">Hélène Urien</p>
                  <p className="text-[10px] sm:text-[11px] text-[#626A7C] leading-tight">ISEP</p>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#20243C] leading-snug">Mélanie Pélégrini-Issac</p>
                  <p className="text-[10px] sm:text-[11px] text-[#626A7C] leading-tight">Inserm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: QR Code & Caption */}
        <div className="shrink-0 flex flex-col items-center text-center p-3 rounded-2xl bg-[#FBFBFF] border border-[#D9DDEE]/80">
          <div className="p-2 rounded-xl bg-white border border-[#9091DF]/25">
            <img
              src="/images/phd-defense/title/phd-defense-presentation-qr.png"
              alt="QR code to view presentation"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 aspect-square object-contain"
            />
          </div>
          <div className="mt-2.5 space-y-0.5">
            <p className="text-xs sm:text-sm font-semibold text-[#20243C]">
              View Thesis Presentation
            </p>
            <p className="text-[10px] sm:text-[11px] text-[#626A7C]">
              Scan to open the interactive presentation
            </p>
          </div>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 sm:pt-3 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Date of Defense</span>
        <span className="font-semibold text-[#20243C]">24 September 2026</span>
      </div>
    </div>
  );
};

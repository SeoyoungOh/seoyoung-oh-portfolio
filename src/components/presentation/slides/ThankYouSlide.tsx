import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ThankYouSlideProps {
  isActive: boolean;
}

export const ThankYouSlide: React.FC<ThankYouSlideProps> = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full select-none">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9091DF] uppercase">
          CLOSING
        </span>
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg border border-dashed border-[#D9DDEE] bg-[#FBFBFF] text-[#626A7C] text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9091DF]/60" />
          <span>Institutional Logo Area</span>
        </div>
      </div>

      {/* Main Minimal Hero */}
      <div className="my-auto text-center py-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#20243C] tracking-tight mb-3">
          Thank You
        </h1>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#DFF8E1] text-[#20243C] font-semibold text-xs mb-6 border border-[#C8DFCA]">
          <MessageSquare className="w-3.5 h-3.5 text-[#20243C]" />
          <span>Questions & Discussion</span>
        </div>

        <div className="space-y-1">
          <p className="text-base sm:text-lg font-bold text-[#20243C]">
            Seoyoung Oh
          </p>
          <p className="text-xs sm:text-sm font-medium text-[#626A7C]">
            PhD Defense · Amyotrophic Lateral Sclerosis & Neuroimaging
          </p>
          <p className="text-xs font-mono text-[#9091DF] pt-1">
            24 September 2026
          </p>
        </div>
      </div>

      {/* Slide Bottom Bar */}
      <div className="pt-2 border-t border-[#D9DDEE] flex items-center justify-between text-xs text-[#626A7C]">
        <span>Doctoral Dissertation Defense</span>
        <span className="font-semibold text-[#9091DF]">Conclusion of Presentation</span>
      </div>
    </div>
  );
};

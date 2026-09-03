import React from 'react';

interface SlideCounterProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide?: (index: number) => void;
  className?: string;
}

export const SlideCounter: React.FC<SlideCounterProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Visual dots / pills */}
      <div
        className="flex items-center gap-1.5"
        role="tablist"
        aria-label="Slide navigation tabs"
      >
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Jump to slide ${idx + 1} of ${totalSlides}`}
              onClick={() => onSelectSlide?.(idx)}
              className={`transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] focus-visible:ring-offset-1 ${
                isActive
                  ? 'w-6 sm:w-8 h-2.5 bg-[#9091DF]'
                  : 'w-2.5 h-2.5 bg-[#D9DDEE] hover:bg-[#A0A1F8]'
              }`}
            />
          );
        })}
      </div>

      {/* Numeric Indicator */}
      <div className="px-2.5 py-1 rounded-lg bg-[#F4F5FB] border border-[#D9DDEE]/80 text-[#20243C] font-mono text-xs font-bold tracking-tight select-none">
        <span>{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="text-[#626A7C] font-normal mx-1">/</span>
        <span className="text-[#626A7C]">{String(totalSlides).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

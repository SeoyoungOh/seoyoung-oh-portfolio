import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SlideData } from './types';
import { SlideFrame } from './SlideFrame';
import { SlideCounter } from './SlideCounter';
import { FullscreenButton } from './FullscreenButton';

interface PresentationShellProps {
  slides: SlideData[];
  initialSlide?: number;
}

export const PresentationShell: React.FC<PresentationShellProps> = ({
  slides,
  initialSlide = 0,
}) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(initialSlide);
  const shellRef = useRef<HTMLDivElement>(null);
  const totalSlides = slides.length;

  // Prevent vertical window scrolling while presentation is mounted
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
      }
    },
    [totalSlides]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing inside an input or textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === ' ' || e.code === 'Space') {
        // Spacebar advances
        // Only prevent default if not clicking on an interactive button with space
        if (target.tagName !== 'BUTTON') {
          e.preventDefault();
          goToNextSlide();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, goToSlide, totalSlides]);

  const activeSlide = slides[currentSlide] || slides[0];
  const SlideComponent = activeSlide.component;

  return (
    <div
      ref={shellRef}
      className="fixed inset-0 z-50 bg-[#FBFBFF] text-[#20243C] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* ====================================================================
          TOP BAR: Exit, Title, Slide Counter & Fullscreen Controls
      ==================================================================== */}
      <header className="h-14 px-4 sm:px-6 bg-[#FFFFFF] border-b border-[#D9DDEE] flex items-center justify-between shrink-0 shadow-2xs z-20">
        {/* Left: Exit Presentation */}
        <div className="flex items-center gap-3">
          <Link
            to="/phd"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#626A7C] hover:text-[#20243C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] rounded-lg px-2.5 py-1.5 border border-transparent hover:border-[#D9DDEE] hover:bg-[#F4F5FB]"
            aria-label="Exit presentation and return to PhD hub"
          >
            <ArrowLeft className="w-4 h-4 text-[#9091DF]" />
            <span>Exit to PhD Hub</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-[#D9DDEE]">
            <Sparkles className="w-3.5 h-3.5 text-[#9091DF]" />
            <span className="text-xs font-bold text-[#20243C]">
              Doctoral Thesis Presentation System
            </span>
          </div>
        </div>

        {/* Center: Slide Counter */}
        <div className="flex items-center">
          <SlideCounter
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onSelectSlide={goToSlide}
          />
        </div>

        {/* Right: Fullscreen Button */}
        <div className="flex items-center gap-2">
          <span className="hidden lg:inline text-[11px] font-medium text-[#626A7C]">
            [← / →] or [Space]
          </span>
          <FullscreenButton targetElementRef={shellRef} />
        </div>
      </header>

      {/* ====================================================================
          STAGE AREA: Strictly 16:9, Contained, No Vertical Scrolling
      ==================================================================== */}
      <main className="flex-1 w-full flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden bg-[#FBFBFF]">
        <SlideFrame
          slideId={activeSlide.id}
          category={activeSlide.category}
          slideNumber={currentSlide + 1}
          totalSlides={totalSlides}
        >
          <SlideComponent isActive={true} />
        </SlideFrame>
      </main>

      {/* ====================================================================
          BOTTOM BAR: Navigation & Step Controls
      ==================================================================== */}
      <footer className="h-14 px-4 sm:px-6 bg-[#FFFFFF] border-t border-[#D9DDEE] flex items-center justify-between shrink-0 shadow-2xs z-20">
        {/* Previous Button */}
        <button
          type="button"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          aria-label="Go to previous slide"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] text-xs font-bold text-[#20243C] hover:border-[#9091DF] hover:text-[#9091DF] disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF]"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous Slide</span>
        </button>

        {/* Center: Slide Category Tag */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#626A7C] font-medium hidden sm:inline">Current Section:</span>
          <span className="font-bold text-[#20243C] px-2.5 py-0.5 rounded bg-[#A0A1F8]/15 border border-[#A0A1F8]/30">
            {activeSlide.category}
          </span>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Go to next slide"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#20243C] text-[#FFFFFF] text-xs font-bold hover:bg-[#9091DF] disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF]"
        >
          <span className="hidden sm:inline">Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};

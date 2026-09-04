import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, RotateCcw } from 'lucide-react';
import { SlideData } from './types';
import { SlideFrame } from './SlideFrame';
import { SlideCounter } from './SlideCounter';
import { FullscreenButton } from './FullscreenButton';

interface PresentationShellProps {
  slides: SlideData[];
  initialSlide?: number;
}

const BASE_SLIDE_WIDTH = 1280;
const BASE_SLIDE_HEIGHT = 720;

export const PresentationShell: React.FC<PresentationShellProps> = ({
  slides,
  initialSlide = 0,
}) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(initialSlide);
  const shellRef = useRef<HTMLDivElement>(null);
  const stageContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: BASE_SLIDE_WIDTH,
    height: BASE_SLIDE_HEIGHT,
  });

  const totalSlides = slides.length;

  // Prevent vertical scrolling on the document while presentation is mounted
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  // Measure stage dimensions and update on resize, orientation change, or fullscreen toggle
  const updateDimensions = useCallback(() => {
    if (stageContainerRef.current) {
      const rect = stageContainerRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({ width: rect.width, height: rect.height });
      }
    }
  }, []);

  useEffect(() => {
    updateDimensions();

    const handleResize = () => {
      updateDimensions();
    };

    const handleOrientation = () => {
      updateDimensions();
      setTimeout(updateDimensions, 100);
      setTimeout(updateDimensions, 300);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientation);
    document.addEventListener('fullscreenchange', handleResize);
    document.addEventListener('webkitfullscreenchange', handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && stageContainerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(stageContainerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientation);
      document.removeEventListener('fullscreenchange', handleResize);
      document.removeEventListener('webkitfullscreenchange', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [updateDimensions]);

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

  // Compute uniform scaling factor to fit 16:9 canvas into available stage area
  const paddingX = dimensions.width < 640 ? 10 : dimensions.width < 1024 ? 20 : 32;
  const paddingY = dimensions.height < 500 ? 8 : dimensions.height < 768 ? 16 : 24;

  const availW = Math.max(dimensions.width - paddingX * 2, 80);
  const availH = Math.max(dimensions.height - paddingY * 2, 60);

  const scale = Math.min(availW / BASE_SLIDE_WIDTH, availH / BASE_SLIDE_HEIGHT);
  const scaledWidth = Math.round(BASE_SLIDE_WIDTH * scale);
  const scaledHeight = Math.round(BASE_SLIDE_HEIGHT * scale);

  const isPortraitMobile = dimensions.height > dimensions.width && dimensions.width < 640;

  return (
    <div
      ref={shellRef}
      className="fixed inset-0 z-50 bg-[#FBFBFF] text-[#20243C] flex flex-col justify-between select-none overflow-hidden font-sans h-screen h-[100dvh] max-h-[100dvh]"
    >
      {/* ====================================================================
          TOP BAR: Exit, Title, Slide Counter & Fullscreen Controls
          Single row, no text wrapping, essential controls only on mobile
      ==================================================================== */}
      <header className="h-12 sm:h-14 px-3 sm:px-6 bg-[#FFFFFF] border-b border-[#D9DDEE] flex items-center justify-between shrink-0 shadow-2xs z-20 gap-2">
        {/* Left: Exit Presentation */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            to="/phd"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-[#626A7C] hover:text-[#20243C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] rounded-lg px-2 sm:px-2.5 py-1.5 border border-transparent hover:border-[#D9DDEE] hover:bg-[#F4F5FB] shrink-0 whitespace-nowrap"
            aria-label="Exit presentation and return to PhD hub"
          >
            <ArrowLeft className="w-4 h-4 text-[#9091DF] shrink-0" />
            <span className="hidden sm:inline">PhD Hub</span>
          </Link>

          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-[#D9DDEE]">
            <Sparkles className="w-3.5 h-3.5 text-[#9091DF] shrink-0" />
            <span className="text-xs font-bold text-[#20243C] whitespace-nowrap">
              Doctoral Thesis Presentation System
            </span>
          </div>
        </div>

        {/* Center: Slide Counter / Progress */}
        <div className="flex items-center justify-center shrink min-w-0">
          <SlideCounter
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onSelectSlide={goToSlide}
          />
        </div>

        {/* Right: Fullscreen Button & Keyboard Hint */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden xl:inline text-[11px] font-medium text-[#626A7C] whitespace-nowrap">
            [← / →] or [Space]
          </span>
          <FullscreenButton targetElementRef={shellRef} />
        </div>
      </header>

      {/* ====================================================================
          STAGE AREA: Fixed 16:9 Canvas Uniform Scaling, Centered, No Cropping
      ==================================================================== */}
      <main
        ref={stageContainerRef}
        className="flex-1 w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#FBFBFF] select-none p-2 sm:p-4"
      >
        {/* Sizer container with exact scaled footprint for clean auto-centering */}
        <div
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
            position: 'relative',
            flexShrink: 0,
          }}
        >
          {/* Logical 1280x720 canvas rendered with transform scale */}
          <div
            className="presentation-canvas"
            style={{
              width: `${BASE_SLIDE_WIDTH}px`,
              height: `${BASE_SLIDE_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <SlideFrame
              slideId={activeSlide.id}
              category={activeSlide.category}
              slideNumber={currentSlide + 1}
              totalSlides={totalSlides}
            >
              <SlideComponent isActive={true} />
            </SlideFrame>
          </div>
        </div>

        {/* Subtle Portrait Rotation Hint on narrow screens (outside the slide canvas) */}
        {isPortraitMobile && (
          <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none px-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#20243C]/80 backdrop-blur-xs text-[#FFFFFF] text-[11px] font-medium shadow-sm animate-pulse">
              <RotateCcw className="w-3 h-3 text-[#9091DF]" />
              <span>Rotate your device for the best presentation view</span>
            </div>
          </div>
        )}
      </main>

      {/* ====================================================================
          BOTTOM BAR: Compact Navigation & Section Indicator
      ==================================================================== */}
      <footer className="h-12 sm:h-14 px-3 sm:px-6 bg-[#FFFFFF] border-t border-[#D9DDEE] flex items-center justify-between shrink-0 shadow-2xs z-20 gap-2">
        {/* Previous Button */}
        <button
          type="button"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          aria-label="Go to previous slide"
          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] text-xs font-bold text-[#20243C] hover:border-[#9091DF] hover:text-[#9091DF] disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] shrink-0 whitespace-nowrap"
        >
          <ChevronLeft className="w-4 h-4 shrink-0" />
          <span className="hidden sm:inline">Previous Slide</span>
        </button>

        {/* Center: Slide Category Tag */}
        <div className="flex items-center gap-2 text-xs min-w-0 shrink overflow-hidden justify-center">
          <span className="text-[#626A7C] font-medium hidden md:inline shrink-0">Current Section:</span>
          <span
            className="font-bold text-[#20243C] px-2.5 py-0.5 rounded bg-[#A0A1F8]/15 border border-[#A0A1F8]/30 text-[10px] sm:text-xs truncate max-w-[170px] sm:max-w-xs md:max-w-md"
            title={activeSlide.category}
          >
            {activeSlide.category}
          </span>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Go to next slide"
          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#20243C] text-[#FFFFFF] text-xs font-bold hover:bg-[#9091DF] disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] shrink-0 whitespace-nowrap"
        >
          <span className="hidden sm:inline">Next Slide</span>
          <ChevronRight className="w-4 h-4 shrink-0" />
        </button>
      </footer>
    </div>
  );
};

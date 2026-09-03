import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

interface FullscreenButtonProps {
  targetElementRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

export const FullscreenButton: React.FC<FullscreenButtonProps> = ({
  targetElementRef,
  className = '',
}) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        const target = targetElementRef?.current || document.documentElement;
        if (target.requestFullscreen) {
          await target.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleFullscreen}
      aria-label={isFullscreen ? 'Exit fullscreen (Esc)' : 'Enter fullscreen'}
      title={isFullscreen ? 'Exit fullscreen (Esc)' : 'Enter fullscreen'}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FFFFFF] border border-[#D9DDEE] text-xs font-bold text-[#20243C] hover:border-[#9091DF] hover:text-[#9091DF] transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9091DF] focus-visible:ring-offset-1 ${className}`}
    >
      {isFullscreen ? (
        <>
          <Minimize2 className="w-3.5 h-3.5 text-[#9091DF]" />
          <span className="hidden sm:inline">Exit Fullscreen</span>
        </>
      ) : (
        <>
          <Maximize2 className="w-3.5 h-3.5 text-[#9091DF]" />
          <span className="hidden sm:inline">Fullscreen</span>
        </>
      )}
    </button>
  );
};

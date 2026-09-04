import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { X, ZoomIn } from 'lucide-react';

export interface LightboxData {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  isLightBg?: boolean;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  data: LightboxData | null;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  data,
  triggerRef,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  // Keep portal target updated, respecting Fullscreen API container
  useEffect(() => {
    const updateTarget = () => {
      const target = (document.fullscreenElement as HTMLElement) || document.body;
      setPortalTarget(target);
    };
    updateTarget();
    document.addEventListener('fullscreenchange', updateTarget);
    document.addEventListener('webkitfullscreenchange', updateTarget);
    return () => {
      document.removeEventListener('fullscreenchange', updateTarget);
      document.removeEventListener('webkitfullscreenchange', updateTarget);
    };
  }, []);

  // Intercept keyboard navigation in capture phase:
  // - Escape closes the lightbox
  // - Navigation keys (ArrowLeft, ArrowRight, Space, PageUp, PageDown, Home, End) are neutralized
  // - Prevents PresentationShell slide changes while lightbox is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDownCapture = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }

      // Block slide navigation keys from advancing or retreating slides
      if (
        e.key === 'ArrowRight' ||
        e.key === 'ArrowLeft' ||
        e.key === ' ' ||
        e.code === 'Space' ||
        e.key === 'PageUp' ||
        e.key === 'PageDown' ||
        e.key === 'Home' ||
        e.key === 'End'
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener('keydown', handleKeyDownCapture, true);
    return () => {
      window.removeEventListener('keydown', handleKeyDownCapture, true);
    };
  }, [isOpen, onClose]);

  // Focus management: focus close button when modal opens, return focus when it closes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else if (triggerRef?.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);

  if (!isOpen || !data || !portalTarget) return null;

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${data.title} - ${data.subtitle}`}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-3 sm:p-5 md:p-7 select-none animate-in fade-in duration-150"
      style={{
        backgroundColor: 'rgba(36, 36, 42, 0.85)',
        backdropFilter: 'blur(5px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top bar with image context and close button */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-2 px-1 text-white">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
          <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
            {data.title}
          </span>
          <span className="text-[11px] sm:text-xs text-[#D9DDEE]/85 font-medium">
            {data.subtitle}
          </span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close enlarged image view"
          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7A3DE]"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Enlarged image viewport */}
      <div
        className={`relative max-w-[90vw] max-h-[82vh] max-h-[82dvh] w-auto h-auto flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/15 p-2 ${
          data.isLightBg ? 'bg-white' : 'bg-[#0A0B10]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={data.src}
          alt={data.alt}
          className="max-w-[86vw] max-h-[76vh] max-h-[76dvh] w-auto h-auto object-contain rounded-lg pointer-events-none"
        />
      </div>

      {/* Subtle contextual hint */}
      <div className="mt-2 text-center">
        <span className="text-[10.5px] text-white/60 font-mono">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-white/90 font-sans text-[10px]">Esc</kbd> or click outside to close
        </span>
      </div>
    </div>,
    portalTarget
  );
};

export const ZoomIndicatorBadge: React.FC = () => (
  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/65 backdrop-blur-xs border border-white/20 text-[9px] text-white/90">
      <ZoomIn className="w-2.5 h-2.5 text-[#A7A3DE]" />
      <span>Enlarge</span>
    </span>
  </div>
);

import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, X } from 'lucide-react';

export interface ScientificFigureProps {
  src: string;
  alt: string;
  caption: string;
  subheading?: string;
  interpretationNote?: string;
  enableLightbox?: boolean;
  priority?: boolean;
  surfaceColor?: 'white' | 'lavender';
  allowHorizontalScrollOnMobile?: boolean;
  containerClassName?: string;
  imageClassName?: string;
}

export const ScientificFigure: React.FC<ScientificFigureProps> = ({
  src,
  alt,
  caption,
  subheading,
  interpretationNote,
  enableLightbox = true,
  priority = false,
  surfaceColor = 'white',
  allowHorizontalScrollOnMobile = false,
  containerClassName = '',
  imageClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const surfaceBg = surfaceColor === 'lavender' ? 'bg-[#F8F9FE]' : 'bg-[#FFFFFF]';

  const handleOpen = () => {
    if (enableLightbox) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleImageError = () => {
    // Keep original src if webp loading fails
    console.error(`Failed to load image: ${imgSrc}`);
  };

  return (
    <figure className={`my-8 w-full ${containerClassName}`}>
      {subheading && (
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#20243C] tracking-tight mb-3">
          {subheading}
        </h3>
      )}

      {/* Main Container Surface */}
      <div
        className={`${surfaceBg} rounded-2xl border border-[#D9DDEE] p-4 sm:p-6 shadow-xs relative group transition-all hover:border-[#A0A1F8]/80 ${
          allowHorizontalScrollOnMobile ? 'overflow-x-auto max-w-full' : 'overflow-hidden'
        }`}
      >
        <div className="relative flex justify-center items-center min-w-[280px]">
          <img
            src={imgSrc}
            alt={alt}
            onError={handleImageError}
            loading={priority ? 'eager' : 'lazy'}
            className={`w-full h-auto object-contain max-h-[700px] rounded-lg ${imageClassName}`}
          />

          {enableLightbox && (
            <button
              ref={triggerRef}
              onClick={handleOpen}
              className="absolute top-3 right-3 p-2.5 rounded-xl bg-[#20243C]/80 hover:bg-[#20243C] text-[#FBFBFF] backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-[#9091DF] cursor-pointer shadow-sm flex items-center gap-1.5 text-xs font-bold"
              aria-label={`Enlarge figure: ${alt}`}
            >
              <Maximize2 className="w-4 h-4 text-[#A0A1F8]" />
              <span className="hidden sm:inline">Enlarge Figure</span>
            </button>
          )}
        </div>

        {interpretationNote && (
          <div className="mt-4 p-3 rounded-xl bg-[#B6BAFA]/10 border border-[#B6BAFA]/30 text-xs font-medium text-[#20243C] leading-relaxed">
            <span className="font-bold text-[#20243C]">Interpretation Note: </span>
            {interpretationNote}
          </div>
        )}
      </div>

      {/* Caption below figure */}
      <figcaption className="mt-3 text-xs sm:text-sm font-medium text-[#626A7C] leading-relaxed px-1">
        <span className="font-bold text-[#20243C] mr-1.5">Figure:</span>
        {caption}
      </figcaption>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#20243C]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={caption}
        >
          <div
            className="relative bg-[#FFFFFF] rounded-2xl max-w-6xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#D9DDEE]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#D9DDEE] bg-[#F8F9FE]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9091DF] px-2.5 py-1 rounded-md bg-[#A0A1F8]/15">
                  Scientific Figure Lightbox
                </span>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-xl text-[#626A7C] hover:text-[#20243C] hover:bg-[#E5E7EB] transition-colors focus-visible:outline-2 focus-visible:outline-[#9091DF] cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-[#FAFAFC]">
              <img
                src={imgSrc}
                alt={alt}
                onError={handleImageError}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Modal Caption Footer */}
            <div className="p-4 sm:p-5 border-t border-[#D9DDEE] bg-[#FFFFFF]">
              <p className="text-xs sm:text-sm font-medium text-[#20243C] leading-relaxed">
                <span className="font-bold text-[#20243C] mr-1.5">Caption:</span>
                {caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
};

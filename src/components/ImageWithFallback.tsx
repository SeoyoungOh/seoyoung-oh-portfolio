import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackType?: 'reliable-normal-projection' | 'weakly-supervised-localization' | 'edge-computer-vision' | 'brainstem-segmentation' | 'profile' | 'og';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackType,
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Try SVG version of the filename if webp failed
      if (src.endsWith('.webp')) {
        setImgSrc(src.replace('.webp', '.svg'));
      } else if (fallbackType) {
        setImgSrc(`/images/project-${fallbackType}.svg`);
      }
    }
  };

  if (hasError && imgSrc === src) {
    // Render polished SVG placeholder if image fails to load completely
    return (
      <div
        className={`bg-[#20243C] text-[#FBFBFF] flex flex-col items-center justify-center p-6 text-center rounded-xl border border-[#D9DDEE]/20 relative overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#A0A1F8]/10 via-transparent to-[#DFF8E1]/10 pointer-events-none" />
        <svg className="w-12 h-12 text-[#A0A1F8] mb-3 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
          <path d="M12 7v10M7 12h10" />
        </svg>
        <span className="text-xs font-semibold tracking-wider text-[#A0A1F8] uppercase mb-1">Scientific Evidence Visual</span>
        <span className="text-sm font-medium text-[#B9E0FC] max-w-xs">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

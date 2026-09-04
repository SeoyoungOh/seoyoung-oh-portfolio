import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SlideFrameProps {
  slideId: string;
  category?: string;
  slideNumber: number;
  totalSlides: number;
  children: React.ReactNode;
}

export const SlideFrame: React.FC<SlideFrameProps> = ({
  slideId,
  category,
  slideNumber,
  totalSlides,
  children,
}) => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] rounded-2xl border border-[#D9DDEE] shadow-sm flex flex-col justify-between overflow-hidden select-text">
      {/* Subtle Corner Accent Gradients */}
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#A0A1F8]/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#DFF8E1]/40 blur-2xl pointer-events-none" />

      {/* Slide Inner Body with Subtle Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slideId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative z-10 w-full h-full flex flex-col justify-between p-8 sm:p-10 lg:p-12 overflow-hidden"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Subtle Frame Watermark Line at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#9091DF]/20 to-transparent pointer-events-none" />
    </div>
  );
};

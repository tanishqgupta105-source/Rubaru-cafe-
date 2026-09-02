import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 text-white hover:text-amber-400 hover:bg-white/20 transition-all cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next Nav Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:text-amber-400 hover:bg-white/20 transition-all cursor-pointer"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:text-amber-400 hover:bg-white/20 transition-all cursor-pointer"
        aria-label="Next photo"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main Image View & Caption */}
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative rounded-sm overflow-hidden border border-amber-500/30 max-h-[75vh] w-full flex items-center justify-center bg-black">
          <img
            src={current.imageUrl}
            alt={current.title}
            className="w-full h-full max-h-[75vh] object-contain"
          />
        </div>

        {/* Caption bar */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                {current.category}
              </span>
              <h3 className="font-serif text-xl text-[#F9F6F0]">{current.title}</h3>
            </div>
            <p className="text-xs text-[#B5AEA1] mt-1 font-light">{current.subtitle}</p>
          </div>

          <div className="text-xs text-white/50 tracking-widest">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};

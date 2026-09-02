import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { LightboxModal } from './LightboxModal';
import { Sparkles, Maximize2 } from 'lucide-react';

export const AmbienceGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Ambience', 'Dining', 'Mixology', 'Nightlife'];

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  const handleOpenLightbox = (itemId: string) => {
    const index = GALLERY_ITEMS.findIndex((i) => i.id === itemId);
    if (index !== -1) setLightboxIndex(index);
  };

  return (
    <section id="gallery" className="relative py-28 bg-[#090A0C] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90">
              Visual Narrative
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F6F0] font-normal">
            An Experience in <span className="gold-gradient-text italic font-serif">Every Corner</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B3ABA0] font-light leading-relaxed">
            Immerse yourself in our architectural spaces — from open-air starlight terraces facing Bhopal’s historic waters to sultry velvet lounge booths.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/50'
                    : 'text-[#8A8376] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[240px]">
          {filteredGallery.map((item, idx) => {
            // Apply varied bento spans for editorial rhythm
            const isSpanTwoCols = idx === 0 || idx === 3 || idx === 7;
            const isSpanTwoRows = idx === 1 || idx === 4;

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item.id)}
                className={`group relative rounded-sm overflow-hidden border border-white/10 hover:border-amber-400/60 cursor-pointer transition-all duration-500 shadow-xl ${
                  isSpanTwoCols ? 'sm:col-span-2' : 'col-span-1'
                } ${isSpanTwoRows ? 'row-span-2' : 'row-span-1'}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-750"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-amber-300 group-hover:border-amber-400/50 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Bar on Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300/90 font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#F9F6F0] font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C8C2B6] font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() => {
          if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
          }
        }}
        onPrev={() => {
          if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
          }
        }}
      />
    </section>
  );
};

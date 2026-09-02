import React from 'react';
import { Sparkles, Wine, Flame, Music, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#0B0D11] overflow-hidden">
      {/* Decorative Gold Glow in Background */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling & Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Main Primary Image */}
              <div className="relative rounded-sm overflow-hidden border border-amber-500/20 shadow-2xl shadow-black/80 group">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=85"
                  alt="RuBarRu Elegant Dining Ambience"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Inset Secondary Image (Artisanal Cocktails / Plating) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 h-48 sm:h-60 rounded-sm overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-black/90 hidden sm:block group">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=85"
                  alt="Artisanal Cocktails at RuBarRu"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[9px] uppercase tracking-widest text-amber-300 font-semibold block">Craft Bar</span>
                  <span className="text-xs text-white/90 font-serif">Aged Spirits & Infusions</span>
                </div>
              </div>

              {/* Floating Luxury Seal */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#161920]/90 border border-amber-400/30 backdrop-blur-md p-4 rounded-sm shadow-xl flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center text-amber-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-amber-300/80 font-medium">Bhopal, MP</span>
                  <span className="font-serif text-sm text-[#F3EFE6] font-semibold">Shamla Hills / VIP Lake</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-400/90">
                  The RuBarRu Philosophy
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F6F0] leading-[1.18] font-normal">
                More Than Just <br className="hidden sm:block" />
                <span className="italic gold-gradient-text font-serif">a Place to Dine</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#D2CBC0] font-light leading-relaxed">
              RuBarRu brings together great flavours, vibrant conversations and unforgettable evenings in an atmosphere designed for every mood.
            </p>

            <p className="text-sm text-[#A8A196] leading-relaxed">
              Born from a passion for elevated hospitality and the soulful cultural cadence of the City of Lakes, RuBarRu blends heirloom culinary craftsmanship with contemporary nightlife allure. Whether you seek an intimate candlelit dinner under celestial skies, handcrafted signature mixology at our glowing onyx bar, or high-energy weekend rhythms, each visit is an invitation to be truly present.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-sm bg-[#12151B] border border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <h3 className="font-serif text-base text-[#F4EFE6] font-medium">Culinary Artistry</h3>
                </div>
                <p className="text-xs text-[#9B958A] leading-relaxed">
                  Authentic clay tandoors, slow-simmered regional heirlooms, and contemporary world classics.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#12151B] border border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <Wine className="w-4 h-4 text-amber-400" />
                  <h3 className="font-serif text-base text-[#F4EFE6] font-medium">Alchemy & Mixology</h3>
                </div>
                <p className="text-xs text-[#9B958A] leading-relaxed">
                  Botanical cordials, cold-smoked aromatics, single-estate cold brews, and zero-proof elixirs.
                </p>
              </div>
            </div>

            {/* Quote Signature Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="font-serif text-lg text-amber-200/90 italic block">
                  “RuBarRu — Meeting soul to soul over flavour.”
                </span>
                <span className="text-[11px] uppercase tracking-widest text-white/40">
                  Hospitality with Heart & Grandeur
                </span>
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ChevronDown, Utensils, Calendar, Sparkles, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#090A0C]"
    >
      {/* Background Image with Cinematic Depth & Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="RuBarRu Cafe & Lounge Atmosphere"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_8s_ease-in-out_infinite] opacity-45 transition-transform duration-1000"
        />

        {/* Multi-tier Cinematic Dark Gradients & Vignette for Ultra-readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/70 to-[#090A0C]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C]/90 via-transparent to-[#090A0C]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#090A0C_85%)]" />

        {/* Subtle Golden Ambient Light Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        
        {/* Editorial Top Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-[#121419]/70 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[11px] uppercase tracking-[0.25em] text-amber-300/90 font-medium">
            Bhopal's Premier Luxury Dining & Lounge
          </span>
          <div className="hidden sm:flex items-center space-x-1 pl-1 border-l border-white/15 text-[10px] text-amber-200/80">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>4.9 / 5.0</span>
          </div>
        </div>

        {/* Cinematic Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F9F6F0] leading-[1.08] mb-6 drop-shadow-2xl">
          Where Evenings <br />
          <span className="gold-gradient-text italic font-normal">Come Alive</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#D8D2C4] font-light leading-relaxed mb-10 tracking-wide">
          {RESTAURANT_INFO.subheadline}
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          {/* Explore Menu Button */}
          <button
            id="hero-explore-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto min-w-[200px] px-8 py-4 text-xs uppercase tracking-[0.22em] font-semibold text-[#F4EFE6] border border-amber-500/40 bg-[#121418]/80 hover:bg-[#1A1D24] hover:border-amber-400 rounded-sm transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2.5 group cursor-pointer shadow-lg shadow-black/50"
          >
            <Utensils className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            <span>Explore Menu</span>
          </button>

          {/* Reserve Table Button */}
          <button
            id="hero-reserve-table-btn"
            onClick={onReserveTable}
            className="w-full sm:w-auto min-w-[200px] relative px-8 py-4 text-xs uppercase tracking-[0.22em] font-bold text-black rounded-sm overflow-hidden group transition-all duration-300 shadow-xl shadow-amber-900/30 hover:shadow-amber-500/20 cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ECCB76] via-[#D4AF37] to-[#A97E25] transition-all duration-300 group-hover:scale-105"></span>
            <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative flex items-center justify-center space-x-2.5">
              <Calendar className="w-4 h-4" />
              <span>Reserve Your Table</span>
            </span>
          </button>
        </div>

        {/* Key Atmosphere Pillars */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-amber-300 font-semibold">Gourmet</span>
            <span className="text-[11px] text-white/60 tracking-wider uppercase">Global & Heritage</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-amber-300 font-semibold">Mixology</span>
            <span className="text-[11px] text-white/60 tracking-wider uppercase">Craft Cocktail Bar</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-amber-300 font-semibold">Rooftop</span>
            <span className="text-[11px] text-white/60 tracking-wider uppercase">Bhopal Lake Breeze</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-amber-300 font-semibold">Music</span>
            <span className="text-[11px] text-white/60 tracking-wider uppercase">Acoustic & Lounge DJ</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group">
        <a
          href="#about"
          className="flex flex-col items-center text-white/50 hover:text-amber-400 transition-colors"
          aria-label="Scroll to About Section"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium mb-2 opacity-70">
            Scroll To Discover
          </span>
          <div className="w-5 h-8 rounded-full border border-amber-500/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

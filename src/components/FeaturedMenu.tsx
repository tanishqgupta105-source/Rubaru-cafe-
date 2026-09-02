import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types';
import { Sparkles, UtensilsCrossed, Leaf, Award, BookOpen } from 'lucide-react';

interface FeaturedMenuProps {
  onOpenFullMenu: () => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onOpenFullMenu }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');
  const [vegFilterOnly, setVegFilterOnly] = useState<boolean>(false);

  const categories: { id: MenuCategory; label: string; count: number }[] = [
    { id: 'starters', label: 'Starters & Small Plates', count: MENU_ITEMS.filter((i) => i.category === 'starters').length },
    { id: 'mains', label: 'Main Course', count: MENU_ITEMS.filter((i) => i.category === 'mains').length },
    { id: 'beverages', label: 'Beverages & Bar', count: MENU_ITEMS.filter((i) => i.category === 'beverages').length },
    { id: 'desserts', label: 'Desserts & Confectionery', count: MENU_ITEMS.filter((i) => i.category === 'desserts').length },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    if (vegFilterOnly) {
      return matchesCategory && item.isVeg;
    }
    return matchesCategory;
  });

  return (
    <section id="menu" className="relative py-28 bg-[#0B0D12] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90">
              Gastronomy & Libations
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F6F0] font-normal">
            A Symphony of <span className="gold-gradient-text italic font-serif">Flavours</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B3ABA0] font-light leading-relaxed">
            Every dish is an artistic composition — combining authentic culinary traditions with refined modern presentation.
          </p>
        </div>

        {/* Category Tabs & Dietary Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 rounded-sm cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#181B22] text-amber-300 border border-amber-400/60 shadow-lg shadow-amber-950/40'
                    : 'text-[#A0988C] hover:text-[#F3EFE6] hover:bg-white/5 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Vegetarian / Signature Quick Filter */}
          <div className="flex items-center space-x-3 text-xs">
            <button
              onClick={() => setVegFilterOnly(!vegFilterOnly)}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                vegFilterOnly
                  ? 'border-emerald-500/70 bg-emerald-950/40 text-emerald-300'
                  : 'border-white/15 bg-white/5 text-[#A0988C] hover:text-white'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${vegFilterOnly ? 'bg-emerald-400' : 'bg-emerald-600'}`}></span>
              <span>Vegetarian Only</span>
            </button>
          </div>

        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#111319] rounded-sm overflow-hidden border border-white/8 hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between shadow-xl shadow-black/40 hover:-translate-y-1.5"
            >
              {/* Dish Visual Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-[#111319]/30 to-transparent" />

                {/* Badges Overlay */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  {/* Veg / Non-Veg Indicator */}
                  <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        dish.isVeg ? 'bg-emerald-400' : 'bg-red-500'
                      }`}
                    ></span>
                    <span className="text-[9px] uppercase tracking-wider text-white/80 font-medium">
                      {dish.isVeg ? 'Pure Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  {/* Special Tag */}
                  {dish.tag && (
                    <div className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[10px] font-medium tracking-wide">
                      <Award className="w-3 h-3" />
                      <span>{dish.tag}</span>
                    </div>
                  )}
                </div>

                {/* Price Display */}
                <div className="absolute bottom-3 right-4 font-serif text-xl text-amber-300 font-semibold drop-shadow-md">
                  {dish.price}
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#F9F6F0] font-normal group-hover:text-amber-200 transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#A8A094] leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                {/* Sommelier / Bar pairing recommendation if available */}
                {dish.pairing && (
                  <div className="pt-3 border-t border-white/5 text-[11px] text-[#C4BCAD]/70 flex items-center space-x-1.5">
                    <span className="text-amber-400/90 font-medium">Pairs with:</span>
                    <span className="italic">{dish.pairing}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA Banner */}
        <div className="mt-16 pt-8 text-center">
          <button
            id="view-full-menu-btn"
            onClick={onOpenFullMenu}
            className="inline-flex items-center space-x-3 px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#F3EFE6] border border-amber-500/50 bg-[#161921] hover:bg-amber-500/10 hover:border-amber-400 rounded-sm transition-all duration-300 group shadow-xl cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>View Complete RuBarRu Menu</span>
          </button>
          <p className="text-[11px] text-[#8C8478] tracking-wider uppercase mt-3">
            Includes Tasting Sets, Handcrafted Breads, Artisanal Teas & Reserve Cellar
          </p>
        </div>

      </div>
    </section>
  );
};

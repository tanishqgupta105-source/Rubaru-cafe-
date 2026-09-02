import React, { useState } from 'react';
import { X, Search, Sparkles, BookOpen, Calendar, ChevronRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onReserve,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Main Course' },
    { id: 'beverages', label: 'Cocktails & Beverages' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1015] border border-amber-500/30 rounded-sm shadow-2xl flex flex-col overflow-hidden text-left">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#13161E]">
          <div>
            <div className="flex items-center space-x-2 text-amber-400">
              <BookOpen className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                Complete A La Carte & Bar List
              </span>
            </div>
            <h2 className="font-serif text-2xl text-[#F9F6F0]">The RuBarRu Menu</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:px-6 bg-[#101218] border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/50'
                    : 'text-[#968E82] hover:text-white border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or cocktails..."
              className="w-full bg-[#181B24] border border-white/10 rounded-sm py-1.5 pl-8 pr-3 text-xs text-white placeholder:text-white/30 focus:border-amber-400 focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-white/40 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Menu Items List (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 text-[#8B8477]">
              No dishes found matching your query.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((dish) => (
                <div
                  key={dish.id}
                  className="p-4 bg-[#141720] border border-white/5 hover:border-amber-500/30 rounded-sm flex space-x-4 items-center transition-colors group"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-20 h-20 rounded-sm object-cover shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center space-x-1.5 truncate">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            dish.isVeg ? 'bg-emerald-400' : 'bg-red-500'
                          }`}
                        />
                        <h4 className="font-serif text-base text-[#F4EFE6] truncate group-hover:text-amber-200">
                          {dish.name}
                        </h4>
                      </div>
                      <span className="font-serif text-sm text-amber-300 font-semibold shrink-0">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#9E9789] line-clamp-2 mt-1">
                      {dish.description}
                    </p>

                    {dish.tag && (
                      <span className="inline-block mt-2 text-[9px] uppercase tracking-wider text-amber-400/90 font-medium">
                        ✦ {dish.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Bar with CTA */}
        <div className="p-4 sm:px-6 bg-[#12151D] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#A8A194]">
            Prices in INR (₹) • Taxes & discretionary service as applicable • Ask server for allergen card
          </span>

          <button
            onClick={() => {
              onClose();
              onReserve();
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-bold uppercase tracking-wider rounded-sm hover:opacity-95 transition-opacity flex items-center space-x-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table to Taste</span>
          </button>
        </div>

      </div>

    </div>
  );
};

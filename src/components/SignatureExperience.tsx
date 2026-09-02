import React, { useState } from 'react';
import { Utensils, Music, Wine, ArrowUpRight, Sparkles } from 'lucide-react';

interface SignatureExperienceProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({
  onReserveClick,
  onExploreMenuClick,
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      icon: Utensils,
      title: 'Exquisite Dining',
      tagline: 'Flavours Crafted For Memorable Moments',
      description:
        'From slow-braised heritage delicacies and artisanal clay-oven kebabs to contemporary global small plates, each creation is a celebration of taste and culinary devotion.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
      badge: 'Gourmet Gastronomy',
      actionLabel: 'Discover Flavours',
      action: onExploreMenuClick,
    },
    {
      id: 2,
      icon: Music,
      title: 'Vibrant Evenings',
      tagline: 'Music, Energy & Atmosphere Alive',
      description:
        'As dusk falls across Bhopal’s lakes, the tempo rises. Experience curated deep melodic house, soulful acoustic sets, and bespoke craft cocktails beneath sultry golden lighting.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=85',
      badge: 'Lounge & Nightlife',
      actionLabel: 'Reserve VIP Booth',
      action: onReserveClick,
    },
    {
      id: 3,
      icon: Wine,
      title: 'Celebrate Together',
      tagline: 'Conversations & Special Occasions',
      description:
        'Whether it is an intimate starlight proposal on our open terrace, a landmark birthday, or an executive triumph, our dedicated hospitality team curates every detail flawlessly.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
      badge: 'Bespoke Moments',
      actionLabel: 'Plan Your Occasion',
      action: onReserveClick,
    },
  ];

  return (
    <section id="experience" className="relative py-28 bg-[#090A0C]">
      {/* Background Subtle Accent Lights */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90">
              Signature Pillars
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F6F0] font-normal tracking-tight">
            Crafted for <span className="gold-gradient-text italic font-serif">Unmatched Moments</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B3ABA0] font-light leading-relaxed">
            Three distinctive dimensions woven seamlessly under one roof — curating the ultimate sensory experience in Bhopal.
          </p>
        </div>

        {/* 3 Premium Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isHovered = activeCard === index;

            return (
              <div
                key={exp.id}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative group rounded-sm overflow-hidden border transition-all duration-500 flex flex-col justify-between h-[480px] cursor-pointer ${
                  isHovered
                    ? 'border-amber-400/60 shadow-2xl shadow-amber-500/10 -translate-y-2'
                    : 'border-white/10 bg-[#101217]'
                }`}
              >
                {/* Background Image with Zoom & Dark Dramatic Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 opacity-35 group-hover:opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/80 to-[#090A0C]/40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#090A0C]/60 via-transparent to-[#090A0C]" />
                </div>

                {/* Card Top: Icon & Badge */}
                <div className="relative z-10 p-7 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#1A1D24]/80 border border-amber-500/30 backdrop-blur-md flex items-center justify-center text-amber-300 group-hover:border-amber-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber-300/80 bg-black/50 backdrop-blur-md border border-amber-500/20 px-3 py-1 rounded-full">
                    {exp.badge}
                  </span>
                </div>

                {/* Card Bottom: Content & Interactive Action */}
                <div className="relative z-10 p-7 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-amber-400/90 font-medium block mb-1">
                      {exp.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F9F6F0] font-normal group-hover:text-amber-200 transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C8C2B5] leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        exp.action();
                      }}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-amber-300 hover:text-amber-100 transition-colors group/btn cursor-pointer"
                    >
                      <span>{exp.actionLabel}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Bottom Gold Indicator Line */}
                <div
                  className={`h-0.5 w-full bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20 transition-all duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

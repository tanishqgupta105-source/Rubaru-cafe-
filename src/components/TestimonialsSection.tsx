import React from 'react';
import { TESTIMONIALS } from '../data/restaurantData';
import { Star, Sparkles, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#090A0C] border-t border-white/5 overflow-hidden">
      {/* Subtle gold aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90">
              Patron Impressions
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F6F0] font-normal">
            Loved by <span className="gold-gradient-text italic font-serif">Our Guests</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B3ABA0] font-light leading-relaxed">
            Reflections and praise from Bhopal’s culinary lovers, traveling dignitaries, and celebratory gatherings.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#111319] border border-white/10 hover:border-amber-400/40 rounded-sm p-8 flex flex-col justify-between transition-all duration-400 hover:-translate-y-1.5 shadow-xl relative group"
            >
              {/* Subtle top quote mark watermark */}
              <div className="absolute top-6 right-6 text-amber-500/10 group-hover:text-amber-500/20 transition-colors pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#D5CEBF] font-light leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Occasion */}
              <div className="pt-5 border-t border-white/10 flex items-center space-x-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover border border-amber-400/40"
                />
                <div className="text-left">
                  <h4 className="font-serif text-base text-[#F9F6F0] font-medium leading-tight">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-[#9A9285] block">{review.title}</span>
                  <span className="text-[10px] uppercase tracking-wider text-amber-300/80 font-medium">
                    {review.occasion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Aggregate Seal */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-center text-xs text-[#A0988C]">
          <div className="flex items-center space-x-2">
            <span className="text-amber-300 font-serif text-lg font-bold">4.9 / 5</span>
            <span>Google Hospitality Reviews</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="flex items-center space-x-2">
            <span className="text-amber-300 font-serif text-lg font-bold">98%</span>
            <span>Recommended by Guests</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="flex items-center space-x-2">
            <span className="text-amber-300 font-serif text-lg font-bold">Top 3</span>
            <span>Fine Dining & Lounge in Bhopal</span>
          </div>
        </div>

      </div>
    </section>
  );
};

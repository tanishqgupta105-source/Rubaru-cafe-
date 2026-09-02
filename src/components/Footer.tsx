import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Sparkles,
  Check,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-[#060709] border-t border-amber-500/20 text-[#A69E91] relative overflow-hidden">
      
      {/* VIP Club / Newsletter Ribbon */}
      <div className="border-b border-white/10 bg-[#0A0C10]/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-1">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-medium">The RuBarRu Circle</span>
            </div>
            <h3 className="font-serif text-2xl text-[#F9F6F0]">
              Receive Private Invitations & Secret Tasting Menus
            </h3>
            <p className="text-xs text-[#9E978A] font-light">
              Be the first to access guest mixologist takeovers, acoustic evenings, and seasonal menus in Bhopal.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full max-w-md flex items-center">
            <div className="relative w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#13161D] border border-white/15 focus:border-amber-400 px-4 py-3 text-xs text-white rounded-l-sm placeholder:text-white/30 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-bold uppercase tracking-wider rounded-r-sm hover:opacity-95 transition-opacity flex items-center space-x-1.5 shrink-0 cursor-pointer"
            >
              {subscribed ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-baseline space-x-1.5">
              <span className="font-serif text-3xl tracking-[0.12em] font-medium text-[#F4EFE6]">
                RuBarRu
              </span>
              <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200"></span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/90 font-medium block">
              Cafe, Lounge & Bar • Bhopal
            </span>

            <p className="text-xs text-[#A8A194] leading-relaxed max-w-sm pt-2 font-light">
              RuBarRu is Bhopal’s preeminent hospitality destination, fusing royal Nawabi heritage culinary arts with contemporary craft cocktails and twilight lake views.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#12141A] border border-white/10 hover:border-amber-400 text-white/80 hover:text-amber-300 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#12141A] border border-white/10 hover:border-amber-400 text-white/80 hover:text-amber-300 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#12141A] border border-white/10 hover:border-amber-400 text-white/80 hover:text-amber-300 flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-serif text-base text-[#F9F6F0] tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-300 transition-colors">
                  Home & Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  Our Culinary Philosophy
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  A La Carte & Beverages Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-300 transition-colors">
                  Dining, Lounge & Celebrations
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Atmosphere & Gallery
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-amber-300 transition-colors">
                  Table Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="font-serif text-base text-[#F9F6F0] tracking-wider uppercase">
              Bhopal Hospitality Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_INFO.address}, <br />
                  {RESTAURANT_INFO.cityState}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-amber-300 font-mono">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-amber-300">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-amber-400/90 font-mono">
              Open Daily: 12:00 PM – 12:30 AM (Fri - Sun till 01:30 AM)
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A7367] gap-4">
          <div>
            © {new Date().getFullYear()} RuBarRu Cafe & Lounge, Bhopal. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Dress Code: Smart Casual / Evening Glamour</span>
            <span>•</span>
            <span>Valet Available</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

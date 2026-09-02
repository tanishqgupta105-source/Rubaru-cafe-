import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#reservation' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveClick = () => {
    setMobileMenuOpen(false);
    if (onOpenReservationModal) {
      onOpenReservationModal();
    } else {
      const el = document.querySelector('#reservation');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#090A0C]/90 backdrop-blur-md border-b border-amber-500/20 py-3.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex flex-col cursor-pointer"
          >
            <div className="flex items-baseline space-x-1.5">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.12em] font-medium text-[#F4EFE6] group-hover:text-amber-300 transition-colors">
                RuBarRu
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200"></span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-amber-400/80 font-medium -mt-1">
              Cafe & Lounge • Bhopal
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-xs uppercase tracking-[0.2em] text-[#E0DACB]/80 hover:text-amber-300 transition-colors duration-200 py-1 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-amber-200 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Action CTA & Contact */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 text-xs text-[#E0DACB]/70 hover:text-amber-300 transition-colors"
              title="Call for direct inquiries"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="tracking-wider">{RESTAURANT_INFO.phone}</span>
            </a>

            <button
              id="navbar-reserve-button"
              onClick={handleReserveClick}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 rounded-sm overflow-hidden group shadow-lg shadow-amber-900/20 cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ECCB76] via-[#D4AF37] to-[#A97E25] group-hover:opacity-95 transition-opacity"></span>
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative flex items-center space-x-2 text-[#0A0A0C] font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Now</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={handleReserveClick}
              className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-black rounded-sm"
            >
              Reserve
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4EFE6] hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#090A0C]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 border-b border-amber-500/20 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6 pt-4">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-400/80">Navigation</span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-serif text-2xl text-[#F4EFE6] hover:text-amber-400 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs tracking-widest text-white/30 font-sans">0{navLinks.indexOf(link) + 1}</span>
              </button>
            ))}
          </div>

          <div className="space-y-5 pt-6 border-t border-white/10">
            <div className="flex items-center space-x-3 text-xs text-[#E0DACB]/80">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{RESTAURANT_INFO.address}, Bhopal</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-[#E0DACB]/80">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Open today: {RESTAURANT_INFO.hours.weekdays}</span>
            </div>

            <button
              onClick={handleReserveClick}
              className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-black bg-gradient-to-r from-[#ECCB76] via-[#D4AF37] to-[#A97E25] rounded-sm shadow-xl"
            >
              Book a Table Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

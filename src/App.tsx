import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SignatureExperience } from './components/SignatureExperience';
import { FeaturedMenu } from './components/FeaturedMenu';
import { AmbienceGallery } from './components/AmbienceGallery';
import { ReservationSection } from './components/ReservationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { FullMenuModal } from './components/FullMenuModal';

export default function App() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#F3EFE6] selection:bg-amber-400/20 selection:text-amber-200">
      
      {/* Sticky Obsidian & Glass Navbar */}
      <Navbar onOpenReservationModal={() => scrollToSection('reservation')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Full-Screen Cinematic Hero */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onReserveTable={() => scrollToSection('reservation')}
        />

        {/* 2. Editorial About Section (Split Screen) */}
        <AboutSection />

        {/* 3. Signature Experience (Exquisite Dining, Vibrant Evenings, Celebrate Together) */}
        <SignatureExperience
          onReserveClick={() => scrollToSection('reservation')}
          onExploreMenuClick={() => scrollToSection('menu')}
        />

        {/* 4. Featured Menu Section */}
        <FeaturedMenu onOpenFullMenu={() => setIsFullMenuOpen(true)} />

        {/* 5. Ambience & Experience Masonry Gallery with Lightbox */}
        <AmbienceGallery />

        {/* 6. Dark Luxury Reservation Section with Opening Hours & Bhopal Location */}
        <ReservationSection />

        {/* 7. Patrons & Testimonials Section */}
        <TestimonialsSection />
      </main>

      {/* 8. Luxury Footer */}
      <Footer />

      {/* Interactive Full Tasting & Bar Menu Modal */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        onReserve={() => scrollToSection('reservation')}
      />
    </div>
  );
}

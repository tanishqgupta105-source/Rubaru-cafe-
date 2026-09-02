import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types';
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  Share2,
  ShieldCheck,
  Compass,
} from 'lucide-react';

interface ReservationSectionProps {
  onReservationComplete?: (data: ReservationData) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onReservationComplete,
}) => {
  // Form State
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    seatingPreference: 'Lakeview Rooftop Terrace',
    occasion: 'Casual Dining & Cocktails',
    specialRequests: '',
  });

  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    data: ReservationData;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const seatingOptions = [
    'Lakeview Rooftop Terrace',
    'VIP Emerald Lounge & Bar',
    'Candlelit Dining Booth',
    'Private Celebration Salon',
  ];

  const occasionOptions = [
    'Casual Dining & Cocktails',
    'Anniversary / Date Night',
    'Birthday Celebration',
    'Corporate Dinner',
    'Family Gathering',
  ];

  const timeSlots = [
    '13:00', '14:00', '17:30', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const bookingId = `RBR-${Math.floor(1000 + Math.random() * 9000)}`;
      const completed = {
        id: bookingId,
        data: { ...formData, id: bookingId },
      };
      setSubmittedBooking(completed);
      setIsSubmitting(false);

      if (onReservationComplete) {
        onReservationComplete(completed.data);
      }
    }, 600);
  };

  return (
    <section id="reservation" className="relative py-28 bg-[#0B0D12] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-96 h-96 bg-amber-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-amber-400/90">
              Host An Unforgettable Evening
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F6F0] font-normal">
            Reserve Your <span className="gold-gradient-text italic font-serif">Experience</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B3ABA0] font-light leading-relaxed">
            Secure your preferred table for evening dining, sunset cocktails, or weekend lounge sessions in Bhopal.
          </p>
        </div>

        {/* Main Grid: Form + Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Reservation Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#111319] border border-amber-500/20 rounded-sm p-6 sm:p-10 shadow-2xl relative">
            
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label htmlFor="guest-name" className="block text-xs uppercase tracking-wider text-[#C0B8AC]">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Adv. Rohit Verma"
                    className="w-full bg-[#171A22] border border-white/10 focus:border-amber-400/70 focus:outline-none px-4 py-3 text-sm text-[#F3EFE6] rounded-sm placeholder:text-white/30 transition-colors"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="guest-phone" className="block text-xs uppercase tracking-wider text-[#C0B8AC]">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="guest-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full bg-[#171A22] border border-white/10 focus:border-amber-400/70 focus:outline-none px-4 py-3 text-sm text-[#F3EFE6] rounded-sm placeholder:text-white/30 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Guests & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label htmlFor="guest-count" className="block text-xs uppercase tracking-wider text-[#C0B8AC]">
                    Number of Guests <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="guest-count"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-[#171A22] border border-white/10 focus:border-amber-400/70 focus:outline-none px-4 py-3 text-sm text-[#F3EFE6] rounded-sm transition-colors cursor-pointer appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((num) => (
                        <option key={num} value={num} className="bg-[#171A22] text-white">
                          {num} {num === 1 ? 'Guest (Solo Tasting)' : `${num} Guests`}
                        </option>
                      ))}
                    </select>
                    <Users className="w-4 h-4 text-amber-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="reservation-date" className="block text-xs uppercase tracking-wider text-[#C0B8AC]">
                    Date <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="reservation-date"
                      type="date"
                      required
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#171A22] border border-white/10 focus:border-amber-400/70 focus:outline-none px-4 py-3 text-sm text-[#F3EFE6] rounded-sm transition-colors cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Time Slot Selector */}
              <div className="space-y-2 text-left">
                <label className="block text-xs uppercase tracking-wider text-[#C0B8AC]">
                  Preferred Time <span className="text-amber-400">*</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 px-1 text-center text-xs font-mono rounded-sm border transition-all cursor-pointer ${
                        formData.time === slot
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-bold'
                          : 'bg-[#171A22] border-white/10 text-white/70 hover:border-white/30'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Seating Preference & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label htmlFor="seating-area" className="block text-xs uppercase tracking-wider text-[#C0B8AC]">
                    Preferred Seating Area
                  </label>
                  <select
                    id="seating-area"
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                    className="w-full bg-[#171A22] border border-white/10 focus:border-amber-400/70 focus:outline-none px-4 py-3 text-sm text-[#F3EFE6] rounded-sm transition-colors cursor-pointer"
                  >
                    {seatingOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#171A22] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="occasion-type" className="block text-xs uppercase tracking-wider text-[#C0B8AC]">
                    Special Occasion
                  </label>
                  <select
                    id="occasion-type"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-[#171A22] border border-white/10 focus:border-amber-400/70 focus:outline-none px-4 py-3 text-sm text-[#F3EFE6] rounded-sm transition-colors cursor-pointer"
                  >
                    {occasionOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#171A22] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2 text-left">
                <label htmlFor="special-requests" className="block text-xs uppercase tracking-wider text-[#C0B8AC]">
                  Dietary Preferences or Special Requests
                </label>
                <textarea
                  id="special-requests"
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Jain preparation, quiet corner table, anniversary flowers or cake..."
                  className="w-full bg-[#171A22] border border-white/10 focus:border-amber-400/70 focus:outline-none px-4 py-3 text-sm text-[#F3EFE6] rounded-sm placeholder:text-white/30 transition-colors"
                ></textarea>
              </div>

              {/* Submit CTA Button */}
              <button
                id="submit-reservation-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 relative text-xs font-bold uppercase tracking-[0.22em] text-black bg-gradient-to-r from-[#ECCB76] via-[#D4AF37] to-[#A97E25] rounded-sm hover:opacity-95 transition-all shadow-xl shadow-amber-900/30 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Curating Your Table...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Reserve Your Experience</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-[#A0988C]/80 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant concierge SMS & WhatsApp confirmation upon submission</span>
              </div>
            </form>

            {/* Instant Booking Confirmation Pass Preview when booked */}
            {submittedBooking && (
              <div className="mt-8 p-6 bg-[#0E1015] border border-amber-400/40 rounded-sm animate-in fade-in slide-in-from-top-4 duration-500 text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center space-x-2 text-amber-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-serif text-lg text-white">Table Reserved Successfully</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    {submittedBooking.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-white/40 block">Guest Name</span>
                    <span className="text-white font-medium">{submittedBooking.data.name}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Date & Time</span>
                    <span className="text-white font-medium">
                      {submittedBooking.data.date} at {submittedBooking.data.time}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Party Size</span>
                    <span className="text-white font-medium">{submittedBooking.data.guests} Guests</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Seating Area</span>
                    <span className="text-amber-300 font-medium">{submittedBooking.data.seatingPreference}</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#A8A196] mt-4 pt-3 border-t border-white/5">
                  Our front-of-house host in Bhopal will hold your table for up to 15 minutes past reservation time. Smart casual / lounge attire recommended.
                </p>
              </div>
            )}

          </div>

          {/* Side Panel Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Hours Card */}
            <div className="p-7 bg-[#111319] border border-white/10 rounded-sm space-y-4">
              <div className="flex items-center space-x-3 text-amber-300">
                <Clock className="w-5 h-5" />
                <h3 className="font-serif text-xl text-[#F9F6F0]">Opening Hours</h3>
              </div>

              <div className="space-y-2.5 text-xs text-[#C8C2B5]">
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span>Monday – Thursday</span>
                  <span className="text-white font-mono">{RESTAURANT_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span>Friday – Sunday (Lounge Nights)</span>
                  <span className="text-amber-300 font-mono">{RESTAURANT_INFO.hours.weekends}</span>
                </div>
                <div className="text-[11px] text-amber-400/90 pt-1 italic">
                  * {RESTAURANT_INFO.hours.loungeHours}
                </div>
              </div>
            </div>

            {/* Location & Navigation Card */}
            <div className="p-7 bg-[#111319] border border-white/10 rounded-sm space-y-4">
              <div className="flex items-center space-x-3 text-amber-300">
                <MapPin className="w-5 h-5" />
                <h3 className="font-serif text-xl text-[#F9F6F0]">Location</h3>
              </div>

              <p className="text-xs text-[#C8C2B5] leading-relaxed">
                {RESTAURANT_INFO.address}, <br />
                {RESTAURANT_INFO.cityState}
              </p>

              <div className="p-3 bg-black/40 rounded border border-white/5 text-[11px] text-[#A0988C]">
                Overlooking Upper Lake • Valet parking and chauffeur waiting bay provided at entrance.
              </div>

              <a
                href="https://maps.google.com/?q=Upper+Lake+Bhopal"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-amber-300 hover:text-amber-100 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Contact Details Card */}
            <div className="p-7 bg-[#111319] border border-white/10 rounded-sm space-y-4">
              <div className="flex items-center space-x-3 text-amber-300">
                <Phone className="w-5 h-5" />
                <h3 className="font-serif text-xl text-[#F9F6F0]">Concierge & Direct Contact</h3>
              </div>

              <div className="space-y-3 text-xs text-[#C8C2B5]">
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Direct Phone:</span>
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-white hover:text-amber-300 font-mono">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">WhatsApp Concierge:</span>
                  <a href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-mono">
                    {RESTAURANT_INFO.whatsapp}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">General Inquiries:</span>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-white hover:text-amber-300">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Editable Placeholders Note */}
              <div className="pt-2 border-t border-white/5 text-[10px] text-white/30 tracking-wider">
                * RuBarRu Cafe Bhopal Demo • Details formatted for luxury hospitality preview.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

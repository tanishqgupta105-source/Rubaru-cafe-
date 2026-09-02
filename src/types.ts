export type MenuCategory = 'starters' | 'mains' | 'beverages' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  tag?: 'Chef Signature' | 'Must Try' | 'Bestseller' | 'New';
  isVeg: boolean;
  pairing?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Ambience' | 'Dining' | 'Mixology' | 'Nightlife';
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  occasion: string;
  rating: number;
  avatar: string;
}

export interface ReservationData {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  guests: number;
  date: string;
  time: string;
  seatingPreference: string;
  occasion: string;
  specialRequests?: string;
}

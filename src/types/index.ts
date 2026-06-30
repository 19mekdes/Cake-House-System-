export interface Cake {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  badge?: string | null;
}

export interface CartItem extends Cake {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  emoji: string;
  image?: string;
  social?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
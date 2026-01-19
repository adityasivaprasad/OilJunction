
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Cooking' | 'Wellness' | 'Skincare';
  benefits: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ShopInfo {
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
  openingHours: string;
}

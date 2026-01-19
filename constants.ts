
import { Product, ShopInfo } from './types';

export const SHOP_INFO: ShopInfo = {
  name: "Oil Junction",
  address: "Shop no. 1, Alcon Rethos, Gate no. 1, Eon Free Zone Rd, Kharadi, Pune, Maharashtra 411014",
  phone: "9545450656",
  mapUrl: "https://maps.app.goo.gl/BEkekXw7rfAS54Pu7",
  openingHours: "Mon - Sun: 10:00 AM - 9:00 PM"
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cold-Pressed Groundnut Oil',
    description: 'Traditionally extracted using wooden ghana for a rich, nutty flavor and heart-healthy nutrients.',
    price: '₹350 / Litre',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/SQ/VL/SJ/21363253/cold-pressed-groundnut-oil.jpg',
    category: 'Cooking',
    benefits: ['Rich in Vitamin E', 'Zero Cholesterol', 'High Smoke Point']
  },
  {
    id: '2',
    name: 'Pure Virgin Coconut Oil',
    description: 'Extracted from sun-dried coconuts, perfect for cooking, hair care, and skin nourishment.',
    price: '₹330 / Litre',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/WA/SF/PW/105970142/cold-pressed-coconut-oil-500x500.jpg',
    category: 'Wellness',
    benefits: ['Lauric Acid rich', 'Immunity Booster', 'Great for Hair']
  },
  {
    id: '3',
    name: 'Lakdi Ghana Safflower Oil',
    description: 'Heart-healthy Kardi oil, ideal for weight management and daily healthy cooking.',
    price: '₹450 / Litre',
    image: 'https://spiceography.com/wp-content/uploads/2020/09/7BA7A9B2-656A-44E7-BF64-6BF683265155-scaled.jpeg',
    category: 'Cooking',
    benefits: ['Low Saturated Fats', 'Good for Skin', 'Weight Management']
  },
  {
    id: '4',
    name: 'Premium Sesame Oil',
    description: 'Traditional wood-pressed Til oil, loaded with antioxidants and natural minerals.',
    price: '₹600 / Litre',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/541727833/PZ/JQ/LT/66767894/freeimagekit-com-img-size-px-27-1000x1000.jpg',
    category: 'Cooking',
    benefits: ['Joint Health', 'Antioxidant Rich', 'Sun Protection']
  },
  {
    id: '5',
    name: 'Golden Mustard Oil',
    description: 'Pure, pungent, and powerful. Authentic cold-pressed mustard oil for traditional recipes.',
    price: '₹350 / Litre',
    image: 'https://t3.ftcdn.net/jpg/00/77/97/20/360_F_77972049_iYuv8eKfTdwxCR7XaqczMJfqZ1rGRzAz.jpg',
    category: 'Cooking',
    benefits: ['Digestive Aid', 'Cold & Cough relief', 'Strong Flavor']
  },
  {
    id: '6',
    name: 'Almond Oil',
    description: 'Cold-pressed from premium almonds, a luxury for your skin and hair routine.',
    price: '₹250 / 100ml',
    image: 'https://cdn.cdnparenting.com/articles/2018/07/431623270-H-1024x700.webp',
    category: 'Skincare',
    benefits: ['Skin Brightening', 'Hair Growth', 'Vitamin A & D']
  }
];

export interface Dish {
  id: string;
  name: string;
  prefix: string; // The cursive part e.g. "Mutton"
  price: number;
  originalPrice: number;
  rating: number;
  description: string;
  image: string;
  theme: 'olive' | 'orange';
}
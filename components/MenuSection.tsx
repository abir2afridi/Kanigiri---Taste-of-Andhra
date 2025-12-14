import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Truck, ShieldCheck } from 'lucide-react';
import DishCard from './DishCard';
import { Dish } from '../types';

const dishes: Dish[] = [
  {
    id: '1',
    prefix: 'Jeera',
    name: 'Chawal',
    price: 180,
    originalPrice: 200,
    rating: 4.5,
    description: 'Aromatic basmati rice tempered with cumin seeds and mild spices. A perfect accompaniment.',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=400&q=80',
    theme: 'olive'
  },
  {
    id: '2',
    prefix: 'Kadai',
    name: 'Chicken',
    price: 220,
    originalPrice: 260,
    rating: 4.5,
    description: 'Spicy, flavorful chicken cooked in a traditional iron wok with bell peppers and tomatoes.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=400&q=80',
    theme: 'orange'
  },
  {
    id: '3',
    prefix: 'Palak',
    name: 'Paneer',
    price: 200,
    originalPrice: 220,
    rating: 4.5,
    description: 'Fresh cottage cheese cubes simmered in a smooth, creamy, and delicious spinach gravy.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=400&q=80',
    theme: 'olive'
  },
  {
    id: '4',
    name: 'Hyderabadi',
    prefix: 'Dum',
    price: 350,
    originalPrice: 400,
    rating: 4.8,
    description: 'The world-famous biryani from Hyderabad. Rich, aromatic and absolutely authentic.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80',
    theme: 'orange'
  }
];

const categories = ["Popular", "Biryani", "Starters", "Curries", "Rice", "Breads", "Desserts"];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  return (
    <section className="relative w-full pb-24 overflow-hidden bg-white">
      
      {/* Features Strip */}
      <div className="max-w-6xl mx-auto px-6 mb-16 -mt-10 relative z-20">
         <div className="bg-white rounded-3xl shadow-xl shadow-gray-200 border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Award size={32} />
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 text-lg">Top Quality</h3>
                  <p className="text-sm text-gray-500">Fresh ingredients daily</p>
               </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShieldCheck size={32} />
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 text-lg">100% Halal</h3>
                  <p className="text-sm text-gray-500">Certified standards</p>
               </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Truck size={32} />
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 text-lg">Fast Delivery</h3>
                  <p className="text-sm text-gray-500">Hot food in 30 mins</p>
               </div>
            </div>
         </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
           <span className="text-primary font-script text-3xl md:text-4xl block mb-2">Discover</span>
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Menu</h2>
           <p className="max-w-2xl mx-auto text-gray-500">Explore our curated list of authentic Andhra dishes, made with love and traditional spices.</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
           {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                   activeCategory === cat 
                   ? 'bg-gray-900 text-white shadow-lg transform scale-105' 
                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                 {cat}
              </button>
           ))}
        </div>

        {/* Carousel Arrows */}
        <div className="absolute top-1/2 left-4 lg:left-0 transform -translate-y-1/2 z-20 hidden lg:block">
           <button className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
             <ChevronLeft size={24} />
           </button>
        </div>
        <div className="absolute top-1/2 right-4 lg:right-0 transform -translate-y-1/2 z-20 hidden lg:block">
           <button className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
             <ChevronRight size={24} />
           </button>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 pb-10">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
        
        <div className="text-center mt-8">
           <button className="text-primary font-bold text-sm tracking-widest uppercase border-b-2 border-primary pb-1 hover:text-primary-dark transition-colors">
              View Full Menu
           </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
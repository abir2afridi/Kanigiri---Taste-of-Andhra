
import React, { useState } from 'react';
// Added ArrowRight to the lucide-react imports to fix the error on line 111
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import DishCard from './DishCard';
import { Dish } from '../types';

const dishes: Dish[] = [
  {
    id: '1',
    prefix: 'Special',
    name: 'Mutton Biryani',
    price: 450,
    originalPrice: 520,
    rating: 4.9,
    description: 'Slow-cooked succulent mutton pieces layered with long-grain basmati rice and signature hand-ground spices.',
    image: 'https://images.unsplash.com/photo-1633945274407-8472523020d3?auto=format&fit=crop&w=400&q=80',
    theme: 'orange'
  },
  {
    id: '2',
    prefix: 'Crispy',
    name: 'Chicken 65',
    price: 280,
    originalPrice: 320,
    rating: 4.7,
    description: 'A spicy, deep-fried chicken starter from Andhra. Tempered with curry leaves and green chilies.',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=400&q=80',
    theme: 'olive'
  },
  {
    id: '3',
    prefix: 'Creamy',
    name: 'Butter Naan',
    price: 45,
    originalPrice: 60,
    rating: 4.5,
    description: 'Freshly baked tandoori bread brushed with pure clarified butter. Soft and charred to perfection.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=400&q=80',
    theme: 'orange'
  },
  {
    id: '4',
    prefix: 'Zesty',
    name: 'Prawn Curry',
    price: 420,
    originalPrice: 480,
    rating: 4.8,
    description: 'Fresh coastal prawns simmered in a thick, spicy gravy with tamarind and toasted coconut.',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=400&q=80',
    theme: 'olive'
  }
];

const categories = ["Best Sellers", "Biryani", "Curries", "Starters", "Breads", "Desserts"];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Best Sellers");

  return (
    <section className="relative w-full pt-12 pb-32 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div className="max-w-xl">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">
                 <Sparkles size={16} /> Signature Flavors
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                 From Our <span className="text-olive">Chef's</span> <br/> 
                 Heart to Your Table
              </h2>
           </div>
           <div className="flex gap-4">
              <button className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center hover:bg-primary transition-all shadow-xl shadow-gray-200">
                <ChevronRight size={24} />
              </button>
           </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-4 gap-3 mb-16 scrollbar-hide">
           {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                   activeCategory === cat 
                   ? 'bg-gray-900 text-white border-gray-900 shadow-xl shadow-gray-200' 
                   : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                 {cat}
              </button>
           ))}
        </div>

        {/* Grid Container */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-y-20 gap-x-8">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <p className="text-gray-400 text-sm font-medium mb-6">Explore over 120+ authentic items from our full menu</p>
           <button className="group inline-flex items-center gap-3 px-10 py-4 bg-white border-2 border-gray-900 rounded-2xl text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all shadow-lg active:scale-95">
              BROWSE FULL MENU
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

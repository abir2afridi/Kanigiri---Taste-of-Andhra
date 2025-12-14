import React from 'react';
import { Star } from 'lucide-react';
import Button from './Button';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const isOlive = dish.theme === 'olive';
  const bgColorClass = isOlive ? 'bg-olive' : 'bg-primary';
  const shadowClass = isOlive ? 'shadow-olive/30' : 'shadow-primary/30';

  return (
    <div className={`relative w-72 flex-shrink-0 flex flex-col pt-24 pb-6 px-4 rounded-3xl ${bgColorClass} text-white shadow-xl ${shadowClass} mt-12 mb-8 mx-4 group transition-transform hover:-translate-y-2 duration-300`}>
      
      {/* Image Container - Floating above */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-48 h-48">
        <div className="w-full h-full rounded-[30px] overflow-hidden shadow-2xl border-4 border-white bg-black">
          <img 
            src={dish.image} 
            alt={dish.name} 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        
        {/* Price Tag */}
        <div className="absolute top-8 -right-8 w-20 h-20 rounded-full bg-white text-gray-800 flex flex-col items-center justify-center shadow-lg border-2 border-gray-100 z-10 transform rotate-12 group-hover:rotate-0 transition-transform">
           <span className="text-[8px] uppercase tracking-wider font-bold text-gray-400">Price</span>
           <span className="text-xl font-bold leading-none text-olive">₹{dish.price}</span>
           <span className="text-[10px] line-through text-gray-400">₹{dish.originalPrice}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-script text-white/90 mb-[-5px]">{dish.prefix}</h3>
        <h3 className="text-2xl font-bold text-white tracking-wide mb-4">{dish.name}</h3>
        
        <div className="flex justify-center items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full py-1 px-3 mx-auto w-max mb-4">
           <div className="flex text-yellow-300">
             {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
             ))}
           </div>
           <span className="text-xs font-bold ml-1">{dish.rating}</span>
        </div>

        <p className="text-white/80 text-xs leading-relaxed mb-6 line-clamp-3 px-2 h-12">
          {dish.description}
        </p>

        <Button 
          className={isOlive ? 'bg-[#4a5420] text-white hover:bg-[#3d451a]' : 'bg-[#b87d2a] text-white hover:bg-[#a16d24]'}
          size="sm"
        >
          ORDER NOW
        </Button>
      </div>
    </div>
  );
};

export default DishCard;
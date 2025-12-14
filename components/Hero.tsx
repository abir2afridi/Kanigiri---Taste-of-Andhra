import React from 'react';
import { Play, ArrowRight, Star, Clock, Bike, Flame } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative w-full pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-orange-100/60 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-yellow-100/60 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="relative z-10 space-y-8 text-center lg:text-left order-2 lg:order-1">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 rounded-full shadow-sm text-primary text-xs font-bold uppercase tracking-wider animate-in slide-in-from-bottom-4 duration-700 fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              #1 Authentic Andhra Cuisine
           </div>
           
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight animate-in slide-in-from-bottom-6 duration-700 fade-in delay-100">
             Taste the <span className="text-primary relative inline-block">
               Soul
               <svg className="absolute w-full h-3 bottom-2 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
             </span> of <br/>
             <span className="font-script text-6xl md:text-7xl lg:text-8xl text-olive block mt-2 transform -rotate-2">Spicy Tradition</span>
           </h1>

           <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200">
             Experience the rich, aromatic flavors of Guntur and Vijayawada delivered hot to your doorstep. Authentic spices, traditional recipes.
           </p>

           <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-in slide-in-from-bottom-10 duration-700 fade-in delay-300">
              <Button size="lg" className="shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-transform h-14 px-10 text-base">
                 Order Now <ArrowRight size={20} className="ml-2" />
              </Button>
              <button className="flex items-center gap-3 px-8 py-3 rounded-full font-bold text-gray-700 hover:bg-white hover:shadow-lg hover:text-primary transition-all duration-300 group">
                 <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all">
                    <Play size={20} fill="currentColor" className="ml-1" />
                 </div>
                 <span>How it works</span>
              </button>
           </div>

           <div className="pt-8 flex items-center gap-8 justify-center lg:justify-start animate-in slide-in-from-bottom-12 duration-700 fade-in delay-500">
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md" alt="User" />
                 ))}
                 <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-900 text-white flex items-center justify-center text-xs font-bold shadow-md">+2k</div>
              </div>
              <div>
                 <div className="flex items-center gap-1 text-yellow-500">
                    <Star fill="currentColor" size={18} />
                    <span className="font-bold text-gray-900 text-lg">4.9</span>
                 </div>
                 <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Happy Customers</p>
              </div>
           </div>
        </div>

        {/* Hero Image Composition */}
        <div className="relative z-10 flex items-center justify-center order-1 lg:order-2">
           <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px]">
              
              {/* Background Circle */}
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/30 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-100 to-transparent opacity-50 blur-3xl transform scale-90"></div>
              
              {/* Main Dish Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-[90%] h-[90%] rounded-full shadow-2xl shadow-orange-900/20 border-8 border-white bg-white overflow-hidden animate-in zoom-in duration-1000">
                    <img 
                      src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80" 
                      className="w-full h-full object-cover animate-[spin_120s_linear_infinite]"
                      alt="Biryani"
                    />
                 </div>
              </div>
              
              {/* Floating Card 1 */}
              <div className="absolute top-12 -right-2 sm:right-0 bg-white/90 backdrop-blur-xl p-4 pr-6 rounded-2xl shadow-xl border border-white/50 z-20 animate-bounce flex items-center gap-3 transform hover:scale-105 transition-transform cursor-default" style={{ animationDuration: '4s' }}>
                 <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary shadow-inner">
                    <Clock size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Delivery</p>
                    <p className="text-base font-bold text-gray-900">30 Mins</p>
                 </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-20 -left-4 sm:left-0 bg-white/90 backdrop-blur-xl p-4 pr-6 rounded-2xl shadow-xl border border-white/50 z-20 animate-bounce flex items-center gap-3 transform hover:scale-105 transition-transform cursor-default" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                 <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-olive shadow-inner">
                    <Bike size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Status</p>
                    <p className="text-base font-bold text-gray-900">Live Tracking</p>
                 </div>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute bottom-4 right-10 sm:right-20 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-xl shadow-lg border border-white/50 z-20 animate-pulse flex items-center gap-2 transform rotate-[-5deg]">
                 <Flame size={16} className="text-red-500 fill-red-500" />
                 <span className="text-xs font-bold text-gray-800">Best Seller</span>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Play, ArrowRight, Star, Clock, Bike, Flame, ShieldCheck, TrendingUp } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative w-full pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[700px] h-[700px] bg-orange-100/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-olive/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Content Side */}
        <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
           <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-orange-100 rounded-full shadow-sm mb-8 animate-in slide-in-from-bottom-4 duration-700 fade-in">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                    </div>
                 ))}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500">
                Loved by <span className="text-primary">2,500+</span> Foodies
              </span>
           </div>
           
           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-8 animate-in slide-in-from-bottom-6 duration-700 fade-in delay-100">
             The <span className="text-primary italic">Art</span> of <br/>
             <span className="relative">
               Spices
               <svg className="absolute w-full h-4 -bottom-1 left-0 text-olive/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
             </span>
             <span className="font-script text-5xl md:text-6xl lg:text-7xl text-olive block mt-4 transform -rotate-1 ml-4 lg:ml-12">Redefined.</span>
           </h1>

           <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200 font-medium">
             From the royal kitchens of the Nizams to your dining table. Experience authentic Andhra flavors crafted with 32 hand-picked spices.
           </p>

           <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-in slide-in-from-bottom-10 duration-700 fade-in delay-300">
              <Button size="lg" className="h-16 px-10 rounded-2xl shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all text-base font-bold tracking-widest bg-gray-900 hover:bg-primary border-none">
                 EXPLORE MENU <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <button className="group flex items-center gap-4 text-gray-800 font-bold hover:text-primary transition-all">
                 <div className="w-14 h-14 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="ml-1 text-primary fill-current" />
                 </div>
                 <div className="text-left">
                    <span className="block text-xs text-gray-400 uppercase tracking-widest">Our Story</span>
                    <span className="text-sm">Watch Video</span>
                 </div>
              </button>
           </div>
        </div>

        {/* Visual Composition Side */}
        <div className="relative z-10 flex items-center justify-center order-1 lg:order-2 perspective-1000">
           <div className="relative w-full aspect-square max-w-[580px]">
              
              {/* Rotating Plate Decor */}
              <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-primary/40 animate-[spin_40s_linear_infinite] opacity-50"></div>
              <div className="absolute inset-[15%] rounded-full border-[1px] border-dashed border-olive/30 animate-[spin_60s_linear_infinite_reverse] opacity-50"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-[85%] h-[85%] rounded-full shadow-[0_40px_100px_-20px_rgba(118,132,54,0.3)] border-[12px] border-white bg-white overflow-hidden animate-in zoom-in duration-1000">
                    <img 
                      src="https://images.unsplash.com/photo-1633945274407-8472523020d3?auto=format&fit=crop&w=1200&q=90" 
                      className="w-full h-full object-cover animate-[pulse_10s_ease-in-out_infinite]"
                      alt="Premium Biryani"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                 </div>
              </div>
              
              {/* Floating Glass Indicators */}
              <div className="absolute top-[10%] -right-4 bg-white/80 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-white/50 z-20 animate-in slide-in-from-right-12 duration-1000 flex items-center gap-4 group">
                 <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform shadow-inner">
                    <TrendingUp size={28} />
                 </div>
                 <div>
                    <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">Orders Today</p>
                    <p className="text-xl font-black text-gray-900 tracking-tight">480+</p>
                 </div>
              </div>

              <div className="absolute bottom-[15%] -left-8 bg-white/80 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-white/50 z-20 animate-in slide-in-from-left-12 duration-1000 flex items-center gap-4 group">
                 <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center text-olive group-hover:-rotate-12 transition-transform shadow-inner">
                    <Star size={28} fill="currentColor" />
                 </div>
                 <div>
                    <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">User Rating</p>
                    <p className="text-xl font-black text-gray-900 tracking-tight">4.9/5</p>
                 </div>
              </div>

              {/* Central Badge */}
              <div className="absolute -bottom-4 right-[20%] bg-gray-900 text-white p-6 rounded-full shadow-2xl z-30 border-4 border-white animate-bounce flex flex-col items-center justify-center w-28 h-28 text-center" style={{ animationDuration: '3s' }}>
                 <Flame size={20} className="text-primary fill-current mb-1" />
                 <span className="text-[10px] font-bold uppercase leading-none">House</span>
                 <span className="text-xs font-black uppercase">Special</span>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
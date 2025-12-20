import React from 'react';
import { Send, BellRing } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="relative overflow-hidden rounded-[3rem] bg-gray-900 text-white p-12 md:p-20 text-center">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-olive/20 rounded-full blur-[80px] -ml-32 -mb-32"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mb-8 animate-bounce" style={{ animationDuration: '4s' }}>
            <BellRing className="text-primary" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Stay Hungry for <span className="text-primary">Spicy Deals</span></h2>
          <p className="text-gray-400 text-lg mb-12 font-medium">Join our newsletter to receive secret coupons, new menu alerts, and authentic recipes from our master chefs.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent px-6 py-4 outline-none text-white placeholder:text-gray-500 font-medium"
            />
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
              SUBSCRIBE <Send size={18} />
            </button>
          </form>
          
          <p className="text-[10px] text-gray-500 mt-6 uppercase tracking-[0.2em] font-bold">No spam. Only delicious updates. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
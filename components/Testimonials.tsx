import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Varma",
    role: "Food Critic",
    content: "The Mutton Biryani here is unlike anything else in the city. The spice balance is perfectly reminiscent of traditional Guntur kitchens.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?u=rajesh"
  },
  {
    name: "Priya Reddy",
    role: "Regular Customer",
    content: "Speed of delivery is amazing. Even during peak hours, my food arrives steaming hot. The packaging is premium and eco-friendly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?u=priya"
  },
  {
    name: "Anand Kumar",
    role: "Software Engineer",
    content: "Best Chicken 65 I've had in years. It's properly spicy and crispy. Kanigiri has become my go-to for weekend family dinners.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?u=anand"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs block mb-4">Wall of Love</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our <span className="text-olive">Guests</span> Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 relative group hover:shadow-2xl transition-all duration-500">
              <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 italic">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
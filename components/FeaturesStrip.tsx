import React from 'react';
import { Award, Truck, ShieldCheck, Zap } from 'lucide-react';

const FeaturesStrip = () => {
  const features = [
    { 
      icon: <Award size={28} />, 
      title: "Royal Taste", 
      desc: "Authentic Nizam recipes", 
      color: "bg-orange-50", 
      text: "text-primary" 
    },
    { 
      icon: <ShieldCheck size={28} />, 
      title: "100% Halal", 
      desc: "Certified hygiene standards", 
      color: "bg-olive/10", 
      text: "text-olive" 
    },
    { 
      icon: <Truck size={28} />, 
      title: "Fast Delivery", 
      desc: "Hot food in 30 mins", 
      color: "bg-blue-50", 
      text: "text-blue-500" 
    },
    { 
      icon: <Zap size={28} />, 
      title: "Fresh Daily", 
      desc: "Organic local spices", 
      color: "bg-red-50", 
      text: "text-red-500" 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-10 md:p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-20 -mt-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-5 group cursor-default transition-transform hover:-translate-y-1">
            <div className={`w-16 h-16 rounded-2xl ${feature.color} ${feature.text} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
              {feature.icon}
            </div>
            <div>
              <h3 className="font-black text-gray-900 text-lg leading-tight">{feature.title}</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesStrip;
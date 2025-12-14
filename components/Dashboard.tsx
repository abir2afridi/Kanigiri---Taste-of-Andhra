import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  ShoppingBag, 
  Heart, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  Plus, 
  Minus,
  Flower,
  Star,
  Compass,
  Gift,
  Zap,
  Clock,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  User as UserIcon,
  Utensils,
  Coffee,
  IceCream,
  Flame,
  Percent,
  Ticket,
  MapPin,
  ArrowRight,
  Truck,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  Edit2,
  Trash2,
  ToggleLeft,
  ToggleRight,
  RefreshCw,
  ShoppingCart,
  ShoppingBasket,
  Receipt,
  Copy,
  Wallet,
  HelpCircle,
  ShieldCheck,
  Smartphone,
  Info,
  ChefHat,
  ThumbsUp,
  MessageCircle,
  Banknote,
  Bike,
  Sparkles,
  TrendingUp,
  Award,
  Calendar,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react';
import { Dish } from '../types';

interface DashboardProps {
  onLogout: () => void;
}

interface CartItem extends Dish {
  quantity: number;
}

const categories = ['All', 'Biryani', 'Starters', 'Curries', 'Desserts', 'Beverages'];

const foodMindCategories = [
  { name: 'Biryani', image: 'https://images.unsplash.com/photo-1633945274407-8472523020d3?auto=format&fit=crop&w=150&q=80' },
  { name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80' },
  { name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80' },
  { name: 'Rolls', image: 'https://images.unsplash.com/photo-1536521642388-441263f88a61?auto=format&fit=crop&w=150&q=80' },
  { name: 'Thali', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=150&q=80' },
  { name: 'Dosa', image: 'https://images.unsplash.com/photo-1668236543090-d2f8969463d6?auto=format&fit=crop&w=150&q=80' },
];

const dashboardDishes: Dish[] = [
  {
    id: '1',
    name: 'Hyderabadi Mutton',
    prefix: 'Mutton',
    price: 360,
    originalPrice: 410,
    rating: 4.8,
    description: 'Classic Hyderabadi style dum biryani with tender mutton pieces.',
    image: 'https://images.unsplash.com/photo-1633945274407-8472523020d3?auto=format&fit=crop&w=400&q=80',
    theme: 'olive'
  },
  {
    id: '2',
    name: 'Chicken 65',
    prefix: 'Spicy',
    price: 280,
    originalPrice: 320,
    rating: 4.6,
    description: 'Deep-fried chicken marinated in ginger, lemon, red chiles, and spices.',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=400&q=80',
    theme: 'orange'
  },
  {
    id: '3',
    name: 'Butter Naan',
    prefix: 'Soft',
    price: 45,
    originalPrice: 60,
    rating: 4.5,
    description: 'Traditional Indian flatbread baked in a clay oven with butter.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=400&q=80',
    theme: 'olive'
  },
  {
    id: '4',
    name: 'Prawn Curry',
    prefix: 'Coastal',
    price: 420,
    originalPrice: 480,
    rating: 4.9,
    description: 'Spicy prawn curry cooked with coconut milk and spices.',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=400&q=80',
    theme: 'orange'
  },
  {
    id: '5',
    name: 'Gulab Jamun',
    prefix: 'Sweet',
    price: 120,
    originalPrice: 150,
    rating: 4.7,
    description: 'Soft delicious berry sized balls made with milk solids, flour & a leavening agent.',
    image: 'https://images.unsplash.com/photo-1593701478530-84322dd84ace?auto=format&fit=crop&w=400&q=80',
    theme: 'olive'
  },
  {
    id: '6',
    name: 'Paneer Tikka',
    prefix: 'Tandoori',
    price: 290,
    originalPrice: 340,
    rating: 4.5,
    description: 'Chunks of paneer marinated in spices and grilled in a tandoor.',
    image: 'https://images.unsplash.com/photo-1567188040706-fb8d89f3d9b6?auto=format&fit=crop&w=400&q=80',
    theme: 'orange'
  }
];

const cuisines = [
  { name: 'Biryani', image: 'https://images.unsplash.com/photo-1633945274407-8472523020d3?auto=format&fit=crop&w=400&q=80', icon: <Flame size={18} />, color: 'from-orange-400 to-red-500' },
  { name: 'Curries', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80', icon: <Utensils size={18} />, color: 'from-yellow-400 to-orange-500' },
  { name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-569d6f46319c?auto=format&fit=crop&w=400&q=80', icon: <IceCream size={18} />, color: 'from-pink-400 to-rose-500' },
  { name: 'Beverages', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80', icon: <Coffee size={18} />, color: 'from-blue-400 to-cyan-500' },
];

const collections = [
  { title: 'Midnight Cravings', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80', places: '18 Places' },
  { title: 'Healthy Eats', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80', places: '12 Places' },
  { title: 'Best of Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80', places: '25 Places' },
  { title: 'Spicy Treats', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80', places: '9 Places' },
];

const offers = [
  { id: 1, title: '50% OFF', desc: 'On your first order', code: 'WELCOME50', color: 'from-gray-900 via-gray-800 to-primary', icon: <Percent /> },
  { id: 2, title: 'Free Delivery', desc: 'Orders above ₹499', code: 'FREEDEL', color: 'from-blue-600 to-indigo-700', icon: <Zap /> },
  { id: 3, title: 'Buy 1 Get 1', desc: 'On all Starters', code: 'STARTERBOGO', color: 'from-green-600 to-emerald-700', icon: <Gift /> },
  { id: 4, title: 'Flat ₹100', desc: 'Cashback via UPI', code: 'UPI100', color: 'from-purple-600 to-fuchsia-700', icon: <Ticket /> },
];

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('Home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });
  
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Detail View State
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  // Checkout State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Favorites Tab State
  const [activeFavoriteTab, setActiveFavoriteTab] = useState<'Dishes' | 'Restaurants'>('Dishes');

  // Settings State
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
  };

  const isVisualExpanded = !isSidebarCollapsed || isSidebarHovered || isMobileMenuOpen;
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsSidebarHovered(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsSidebarHovered(false);
    }, 300);
  };

  const handleToggleSidebar = () => {
    if (!isSidebarCollapsed) {
      setIsSidebarHovered(false);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    }
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Cart Functions
  const handleAddToCart = (dish: Dish, quantity: number, openCart = false) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === dish.id);
      if (existing) {
        return prev.map(item => item.id === dish.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...dish, quantity }];
    });
    if (openCart) {
      setIsCartOpen(true);
    } else {
      showToast(`Added ${quantity} ${dish.name} to cart`);
    }
    // Close detail view if open
    if (selectedDish?.id === dish.id && !openCart) {
        setSelectedDish(null);
    }
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleBuyNow = (dish: Dish, quantity: number) => {
    handleAddToCart(dish, quantity, false);
    setSelectedDish(null);
    setIsCheckoutOpen(true);
  };

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderPlaced = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
    setActiveTab('Orders');
    showToast('Order placed successfully! 🎉');
  };

  // Render Functions
  const renderHomeContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Banner */}
      <div className="w-full min-h-[220px] rounded-[32px] bg-gradient-to-r from-gray-900 via-gray-800 to-primary relative overflow-hidden shadow-2xl shadow-gray-200/60 mb-12 flex items-center px-8 lg:px-16 group transition-all hover:shadow-primary/20">
         <div className="relative z-10 text-white max-w-lg py-8">
           <div className="flex items-center gap-3 mb-4">
             <span className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Special Offer</span>
             <span className="text-orange-300 text-xs font-bold flex items-center gap-1.5"><Clock size={14} /> Limited Time</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight tracking-tight">Get 50% OFF</h2>
           <p className="text-gray-300 mb-8 text-sm md:text-base font-medium leading-relaxed max-w-sm">On your first Hyderabadi Dum Biryani order. Taste the authentic spices of Nizams.</p>
           <button onClick={() => setIsCartOpen(true)} className="bg-primary text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-primary/30 hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1 hover:shadow-xl active:scale-95">
             Order Now
           </button>
         </div>
         <div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-primary/30 via-primary/5 to-transparent skew-x-12"></div>
         <img 
           src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80" 
           alt="Biryani"
           className="absolute right-[-20px] md:right-10 bottom-[-40px] md:bottom-[-20px] w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-8 border-white/5 shadow-2xl rotate-12 group-hover:rotate-6 transition-transform duration-700 ease-out"
         />
      </div>

      {/* Recommended Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
           <h3 className="text-xl font-bold text-gray-800 tracking-tight">Recommended for You <span className="text-lg">✨</span></h3>
           <button className="text-primary text-sm font-bold hover:underline">See All</button>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
           {dashboardDishes.slice(0, 4).map((dish) => (
             <div key={`rec-${dish.id}`} className="min-w-[260px] p-3 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer group" onClick={() => handleDishClick(dish)}>
                <div className="relative h-32 rounded-2xl overflow-hidden mb-3">
                   <img src={dish.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 shadow-sm">
                      <Star size={10} className="text-yellow-400 fill-yellow-400" /> {dish.rating}
                   </div>
                </div>
                <h4 className="font-bold text-gray-800 text-sm truncate">{dish.name}</h4>
                <div className="flex justify-between items-center mt-2">
                   <span className="text-primary font-bold text-sm">₹{dish.price}</span>
                   <button 
                      onClick={(e) => { e.stopPropagation(); handleAddToCart(dish, 1); }}
                      className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                   >
                      <Plus size={14} />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* "What's on your mind?" Section */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 tracking-tight mb-6">What's on your mind?</h3>
        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
          {foodMindCategories.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3 cursor-pointer group min-w-[80px]">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-primary/30 group-hover:scale-105 transition-all">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Filter */}
      <div className="mb-8 sticky top-0 bg-[#FDFBF7] z-20 py-2">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 snap-center border ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white border-gray-900 shadow-md' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-8">
        {dashboardDishes.map((dish) => (
          <DashboardCard 
            key={dish.id} 
            dish={dish} 
            onAddToCart={(qty) => handleAddToCart(dish, qty)}
            onBuyNow={(qty) => handleBuyNow(dish, qty)}
            onClick={() => handleDishClick(dish)}
          />
        ))}
      </div>
    </div>
  );

  const renderExploreContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Explore Search */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-blue-100/50 rounded-[32px] -z-10 blur-xl opacity-50"></div>
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
           <h3 className="text-2xl font-bold text-gray-800 mb-6">Find your craving</h3>
           <div className="relative group mb-6">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={24} />
               <input 
                 type="text" 
                 placeholder="Search for restaurants, cuisines, or a dish..." 
                 className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-4 text-base focus:ring-2 focus:ring-primary/20 transition-all outline-none"
               />
           </div>
           
           {/* Trending Now */}
           <div>
              <div className="flex items-center gap-2 mb-3">
                 <TrendingUp size={18} className="text-primary" />
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Trending Now:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Spicy Biryani', 'Chocolate Cake', 'Paneer Butter Masala', 'Iced Coffee', 'Mutton Rogan Josh'].map(tag => (
                  <button key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-primary hover:text-primary transition-colors shadow-sm">
                    {tag}
                  </button>
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* Curated Collections */}
      <div className="mb-12">
         <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-6">Curated Collections</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item) => (
               <div key={item.title} className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                     <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                     <div className="flex items-center justify-between">
                        <span className="text-white/80 text-xs font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">{item.places}</span>
                        <div className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                           <ArrowRight size={16} />
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-6">Explore Cuisines</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cuisines.map((cuisine) => (
            <div key={cuisine.name} className="relative h-48 rounded-[2rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cuisine.color} opacity-10 rounded-bl-[4rem]`}></div>
              <div className="p-6 h-full flex flex-col items-center justify-center text-center relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cuisine.color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {cuisine.icon}
                </div>
                <h3 className="text-gray-800 font-bold text-lg">{cuisine.name}</h3>
                <p className="text-gray-400 text-xs mt-1 font-medium">120+ Places</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOffersContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      
      {/* Deal of the Day */}
      <div className="mb-10 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-2xl shadow-gray-200 p-8 md:p-12">
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-16 -mt-16"></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                  <Sparkles size={14} /> Deal of the Day
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Flat 60% OFF</h2>
               <p className="text-gray-400 text-lg mb-8 max-w-md">On all Gourmet Burgers. Use code <span className="text-white font-bold">BURGER60</span> at checkout.</p>
               
               <div className="flex gap-4 justify-center md:justify-start">
                  {['02', '14', '45'].map((time, i) => (
                     <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-2xl font-bold shadow-lg">
                           {time}
                        </div>
                        <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">{['Hrs', 'Mins', 'Secs'][i]}</span>
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
               <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" 
                  className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl rotate-12 hover:rotate-6 transition-transform duration-700" 
               />
               <div className="absolute bottom-4 -left-4 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold shadow-xl transform -rotate-6">
                  Only ₹149
               </div>
            </div>
         </div>
      </div>

      {/* Bank Offers */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-gray-800 tracking-tight mb-4 flex items-center gap-2">
           <CreditCard size={20} className="text-primary" /> Bank Offers
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
           {[1, 2, 3].map(i => (
             <div key={i} className="min-w-[280px] p-4 bg-white border border-gray-100 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center font-bold text-indigo-600 text-xs border border-indigo-100">HDFC</div>
                <div>
                   <h4 className="font-bold text-gray-800 text-sm">10% Instant Discount</h4>
                   <p className="text-xs text-gray-400 mt-0.5">Min spend ₹500. Max disc ₹150.</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-6">Exclusive Coupons</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {offers.map((offer) => (
           <div key={offer.id} className="relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-gray-100 border border-gray-100 group hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${offer.color}`}></div>
              <div className="p-6 md:p-8 flex items-center justify-between relative z-10">
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                       <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${offer.color} flex items-center justify-center text-white shadow-md`}>
                         {offer.icon}
                       </div>
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Limited Time</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{offer.title}</h3>
                    <p className="text-gray-500 text-sm font-medium mb-6">{offer.desc}</p>
                    
                    <div className="flex items-center gap-3">
                       <div className="bg-gray-50 border-2 border-dashed border-gray-200 px-4 py-2 rounded-lg font-mono font-bold text-gray-600 tracking-wider flex items-center gap-2">
                         {offer.code}
                       </div>
                       <button 
                         onClick={() => {
                           navigator.clipboard.writeText(offer.code);
                           showToast(`Code ${offer.code} Copied!`);
                         }}
                         className="p-2 text-primary hover:bg-orange-50 rounded-lg transition-colors"
                         title="Copy Code"
                       >
                         <Copy size={18} />
                       </button>
                    </div>
                 </div>
                 
                 {/* Decorative Circle */}
                 <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${offer.color} opacity-10 absolute -right-6 -bottom-6 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
              </div>
           </div>
        ))}
      </div>
    </div>
  );

  const renderOrdersContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-6">Track Order</h2>
      
      {/* Active Order Card */}
      <div className="bg-white rounded-[2.5rem] p-0 shadow-2xl shadow-orange-100/50 border border-orange-50 mb-10 relative overflow-hidden">
         {/* Map Placeholder Header */}
         <div className="h-48 bg-gray-200 w-full relative">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/OpenStreetMap_Standard_Map.png')] bg-cover opacity-50 grayscale"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                   <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping absolute inset-0"></div>
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10">
                      <Truck className="text-primary" size={24} />
                   </div>
                </div>
            </div>
         </div>

         <div className="p-8 -mt-6 bg-white rounded-t-[2.5rem] relative z-10">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
                <div>
                   <h3 className="text-xl font-bold text-gray-800 mb-1">Order #KG-2849</h3>
                   <p className="text-gray-400 text-sm">3 Items • ₹890</p>
                </div>
                <div className="mt-4 md:mt-0">
                   <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold flex items-center gap-2 w-max">
                     <Clock size={16} /> Arriving in 15 mins
                   </span>
                </div>
            </div>

            {/* Stepper */}
            <div className="relative mb-10">
               <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100 md:hidden"></div>
               <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-100 hidden md:block"></div>
               
               <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                  {[
                    { label: 'Order Placed', time: '7:32 PM', done: true },
                    { label: 'Cooking', time: '7:45 PM', done: true },
                    { label: 'Out for Delivery', time: '8:00 PM', done: true },
                    { label: 'Delivered', time: 'Est 8:15 PM', done: false }
                  ].map((step, idx) => (
                    <div key={idx} className="flex md:flex-col items-center gap-4 md:gap-3">
                       <div className={`w-9 h-9 rounded-full border-4 ${step.done ? 'bg-primary border-orange-100' : 'bg-white border-gray-200'} flex items-center justify-center flex-shrink-0 transition-colors`}>
                         {step.done && <CheckCircle2 size={14} className="text-white" />}
                       </div>
                       <div className="md:text-center">
                          <p className={`text-sm font-bold ${step.done ? 'text-gray-800' : 'text-gray-400'}`}>{step.label}</p>
                          <p className="text-xs text-gray-400">{step.time}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Live Updates Log */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Live Updates</h4>
               <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></div>
                     <div>
                        <p className="text-sm font-medium text-gray-700">Ramesh has picked up your order.</p>
                        <p className="text-[10px] text-gray-400">8:02 PM</p>
                     </div>
                  </div>
                  <div className="flex gap-3 items-start">
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></div>
                     <div>
                        <p className="text-sm font-medium text-gray-500">Your food is ready for pickup.</p>
                        <p className="text-[10px] text-gray-400">7:55 PM</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Delivery Partner */}
            <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-2xl mb-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                   <h4 className="font-bold text-gray-800">Ramesh Kumar</h4>
                   <p className="text-xs text-gray-500">Delivery Partner • 4.9 ★</p>
                </div>
                <div className="flex gap-2">
                   <button className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-primary hover:border-primary transition-colors">
                      <Smartphone size={20} />
                   </button>
                </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 py-3.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-md">
                Detailed Status
              </button>
              <button className="px-6 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
                Help
              </button>
            </div>
         </div>
      </div>

      {/* Past Orders Mini List */}
      <div>
         <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h3>
         <div className="space-y-4">
            {[1, 2].map(i => (
               <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        <ShoppingBag size={18} />
                     </div>
                     <div>
                        <p className="font-bold text-gray-800 text-sm">Paradise Biryani</p>
                        <p className="text-xs text-gray-400">Delivered Yesterday</p>
                     </div>
                  </div>
                  <button className="text-primary text-xs font-bold hover:underline">Reorder</button>
               </div>
            ))}
         </div>
      </div>
    </div>
  );

  const renderFavoritesContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
       <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Your Favorites ❤️</h2>
          <div className="bg-white p-1 rounded-xl border border-gray-200 inline-flex w-max">
             <button 
               onClick={() => setActiveFavoriteTab('Dishes')}
               className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeFavoriteTab === 'Dishes' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
             >
               Dishes
             </button>
             <button 
               onClick={() => setActiveFavoriteTab('Restaurants')}
               className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeFavoriteTab === 'Restaurants' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
             >
               Restaurants
             </button>
          </div>
       </div>
       
       {activeFavoriteTab === 'Dishes' ? (
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[dashboardDishes[0], dashboardDishes[3], dashboardDishes[5]].map((dish) => (
            <div key={dish.id} className="relative">
               <DashboardCard 
                  dish={dish}
                  onAddToCart={(qty) => handleAddToCart(dish, qty)}
                  onBuyNow={(qty) => handleBuyNow(dish, qty)}
                  onClick={() => handleDishClick(dish)}
               />
               {/* Visual Tag */}
               <div className="absolute top-4 left-4 z-20 bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm border border-white">
                  Spicy & Tasty
               </div>
            </div>
          ))}
        </div>
       ) : (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
               <div key={i} className="bg-white p-5 rounded-[2rem] border border-gray-100 flex gap-5 items-center hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-24 h-24 rounded-2xl bg-gray-100 overflow-hidden">
                     <img src={`https://source.unsplash.com/random/200x200?restaurant&sig=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-800 text-lg">Paradise Food Court</h3>
                     <p className="text-sm text-gray-500 mb-2">North Indian, Biryani • 4.2 ★</p>
                     <p className="text-xs text-gray-400">Jubilee Hills • 30 mins</p>
                  </div>
               </div>
            ))}
         </div>
       )}
    </div>
  );

  const renderHistoryContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
       <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Order History</h2>
          <button className="flex items-center gap-2 text-sm font-bold text-primary hover:bg-orange-50 px-4 py-2 rounded-xl transition-colors">
             <Search size={16} /> Search
          </button>
       </div>

       {/* Monthly Stats */}
       <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
             <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Total Spent (Oct)</p>
             <p className="text-2xl font-bold text-gray-800">₹4,250</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
             <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Total Orders</p>
             <p className="text-2xl font-bold text-gray-800">8</p>
          </div>
       </div>
       
       <div className="space-y-8">
         {/* Group: This Month */}
         <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 pl-2">This Month</h3>
            <div className="space-y-4">
              {[1, 2].map((order, i) => (
                <HistoryCard key={i} orderId={2840 - i} date={`${20 - i} Oct, 2023`} amount={450 + (i * 120)} items={['Chicken Biryani', 'Coke']} onReorder={() => setIsCartOpen(true)} />
              ))}
            </div>
         </div>
         {/* Group: September */}
         <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 pl-2">September</h3>
            <div className="space-y-4">
              {[3].map((order, i) => (
                <HistoryCard key={i} orderId={2835} date={`15 Sep, 2023`} amount={1200} items={['Family Pack', 'Starters x2']} onReorder={() => setIsCartOpen(true)} />
              ))}
            </div>
         </div>
       </div>
    </div>
  );

  const renderSettingsContent = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
       <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-8">Settings</h2>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-br from-primary to-orange-400 z-0 group-hover:h-32 transition-all duration-500"></div>
                <div className="relative z-10 -mt-2">
                   <div className="w-28 h-28 mx-auto bg-white p-1 rounded-full shadow-md mb-4 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" 
                        className="w-full h-full object-cover rounded-full"
                        alt="Profile"
                      />
                      <button className="absolute bottom-0 right-0 p-2 bg-gray-900 text-white rounded-full hover:bg-primary transition-colors border-2 border-white">
                        <Edit2 size={14} />
                      </button>
                   </div>
                   <h3 className="text-xl font-bold text-gray-800">Suresh Kumar</h3>
                   <p className="text-sm text-gray-500 mb-6">suresh.k@example.com</p>
                   
                   <div className="flex gap-2 justify-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 cursor-pointer transition-colors"><Smartphone size={16} /></div>
                      <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 cursor-pointer transition-colors"><Wallet size={16} /></div>
                   </div>

                   <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3 bg-gray-50 rounded-2xl text-center border border-gray-100">
                         <span className="block font-bold text-gray-800 text-lg">12</span>
                         <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Orders</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-2xl text-center border border-gray-100">
                         <span className="block font-bold text-gray-800 text-lg">4.8</span>
                         <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Rating</span>
                      </div>
                   </div>
                   <button className="w-full py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                     Manage Profile
                   </button>
                </div>
             </div>
          </div>
          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
             {/* Preferences */}
             <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                   <Bell size={18} className="text-primary" /> Preferences
                </h4>
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                      <div>
                         <p className="font-bold text-gray-700 text-sm">Push Notifications</p>
                         <p className="text-xs text-gray-400">Receive order updates and offers</p>
                      </div>
                      <button onClick={() => setNotifications(!notifications)} className="text-primary transition-transform active:scale-95">
                         {notifications ? <ToggleRight size={32} className="fill-current" /> : <ToggleLeft size={32} className="text-gray-300" />}
                      </button>
                   </div>
                   <div className="flex items-center justify-between">
                      <div>
                         <p className="font-bold text-gray-700 text-sm">Email Updates</p>
                         <p className="text-xs text-gray-400">Receive newsletter and promotions</p>
                      </div>
                      <button onClick={() => setEmailUpdates(!emailUpdates)} className="text-primary transition-transform active:scale-95">
                         {emailUpdates ? <ToggleRight size={32} className="fill-current" /> : <ToggleLeft size={32} className="text-gray-300" />}
                      </button>
                   </div>
                   <div className="flex items-center justify-between">
                      <div>
                         <p className="font-bold text-gray-700 text-sm">Dark Mode</p>
                         <p className="text-xs text-gray-400">Switch between light and dark theme</p>
                      </div>
                      <button onClick={() => setDarkMode(!darkMode)} className="text-gray-800 transition-transform active:scale-95 flex items-center gap-2 bg-gray-100 rounded-full p-1">
                         <div className={`p-1.5 rounded-full ${!darkMode ? 'bg-white shadow-sm' : 'text-gray-400'}`}><Sun size={14} /></div>
                         <div className={`p-1.5 rounded-full ${darkMode ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400'}`}><Moon size={14} /></div>
                      </button>
                   </div>
                </div>
             </div>

             {/* Payment Methods */}
             <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                   <Wallet size={18} className="text-primary" /> Payment Methods
                </h4>
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl mb-3">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-white text-[8px] font-bold tracking-widest">VISA</div>
                      <span className="text-sm font-bold text-gray-700">•••• 4242</span>
                   </div>
                   <button className="text-xs font-bold text-red-500 hover:underline">Remove</button>
                </div>
                <button className="text-sm font-bold text-primary flex items-center gap-2 hover:underline">
                   <Plus size={16} /> Add New Card
                </button>
             </div>
             
             {/* Addresses */}
             <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                   <MapPin size={18} className="text-primary" /> Saved Addresses
                </h4>
                <div className="space-y-4">
                   <div className="p-4 rounded-2xl border border-gray-200 bg-gray-50 flex items-start justify-between">
                      <div className="flex gap-3">
                         <div className="mt-1 text-gray-500"><Home size={16} /></div>
                         <div>
                            <p className="text-sm font-bold text-gray-800">Home</p>
                            <p className="text-xs text-gray-500 leading-relaxed mt-1">Flat 402, Krishna Residency,<br/>Jubilee Hills, Hyderabad - 500033</p>
                         </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                   </div>
                   <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-sm font-bold text-gray-400 hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2">
                      <Plus size={16} /> Add New Address
                   </button>
                </div>
             </div>
             <div className="flex gap-4 pt-4">
               <button className="flex-1 py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl text-sm hover:bg-gray-50 flex items-center justify-center gap-2">
                  <HelpCircle size={16} /> Help & Support
               </button>
               <button className="flex-1 py-3 bg-red-50 text-red-500 font-bold rounded-xl text-sm hover:bg-red-100 flex items-center justify-center gap-2" onClick={onLogout}>
                  <LogOut size={16} /> Log Out
               </button>
             </div>
          </div>
       </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#FDFBF7] font-sans overflow-hidden">
      
      {/* Toast Notification */}
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[200] bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 ${toast.visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
         <CheckCircle2 size={18} className="text-green-400" />
         <span className="text-sm font-bold">{toast.message}</span>
      </div>

      {/* Mobile Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Cart Drawer Overlay */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Dish Detail Drawer */}
      <DishDetailDrawer
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onPlaceOrder={handleOrderPlaced}
      />

      {/* Desktop Spacer */}
      <div className={`hidden md:block transition-all duration-300 ease-in-out shrink-0 ${isVisualExpanded ? 'w-72' : 'w-24'}`} />

      {/* Unified Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-[100] border-r border-gray-100/50 flex flex-col justify-between
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0'}
          ${isVisualExpanded ? 'md:w-72' : 'md:w-24'}
          bg-white shadow-2xl md:shadow-xl md:shadow-gray-200/40
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Desktop Toggle Button */}
        <button 
          onClick={handleToggleSidebar}
          className={`hidden md:flex absolute -right-3 top-10 bg-white border border-gray-100 text-gray-400 hover:text-primary rounded-full p-1.5 shadow-sm z-50 transition-all duration-300 items-center justify-center w-7 h-7 hover:scale-110 active:scale-95 hover:shadow-md ${isSidebarHovered ? 'opacity-100' : isSidebarCollapsed ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}
        >
          {isSidebarCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Logo Section */}
        <div className={`h-28 flex items-center ${isVisualExpanded ? 'px-8 justify-between' : 'justify-center'} border-b border-gray-50/50 transition-all duration-300 overflow-hidden`}>
           <div className="flex items-center group">
             <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-orange-400 text-white flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-lg shadow-orange-200 group-hover:shadow-orange-300 group-hover:scale-105">
               <Flower size={26} className="animate-[spin_10s_linear_infinite]" />
             </div>
             <div className={`transition-all duration-500 ease-in-out ${isVisualExpanded ? 'max-w-[200px] opacity-100 ml-3' : 'max-w-0 opacity-0 ml-0'}`}>
                <h1 className="font-bold text-xl tracking-wider text-gray-800 leading-none whitespace-nowrap">KANIGIRI</h1>
                <span className="text-[10px] text-primary uppercase tracking-[0.2em] mt-1 block font-bold whitespace-nowrap">Dashboard</span>
             </div>
           </div>
           
           {/* Mobile Close Button */}
           <button 
             onClick={() => setIsMobileMenuOpen(false)}
             className="md:hidden text-gray-400 hover:text-red-500 transition-colors p-1"
           >
             <X size={24} />
           </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-8 custom-scrollbar overflow-x-hidden">
          
          {/* Menu Group */}
          <div>
            <h4 className={`px-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden ${isVisualExpanded ? 'opacity-100 max-h-10 mb-4' : 'opacity-0 max-h-0 mb-0'}`}>
              Main Menu
            </h4>
            <div className="space-y-1.5">
              <NavItem expanded={isVisualExpanded} icon={<Home />} label="Overview" active={activeTab === 'Home'} onClick={() => setActiveTab('Home')} />
              <NavItem expanded={isVisualExpanded} icon={<Compass />} label="Explore" active={activeTab === 'Explore'} onClick={() => setActiveTab('Explore')} />
              <NavItem expanded={isVisualExpanded} icon={<Gift />} label="Offers" badge="4" active={activeTab === 'Offers'} onClick={() => setActiveTab('Offers')} />
            </div>
          </div>

          {/* Account Group */}
          <div>
            <h4 className={`px-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden ${isVisualExpanded ? 'opacity-100 max-h-10 mb-4' : 'opacity-0 max-h-0 mb-0'}`}>
              Personal
            </h4>
            <div className="space-y-1.5">
              <NavItem expanded={isVisualExpanded} icon={<ShoppingBag />} label="Orders" badge="2" active={activeTab === 'Orders'} onClick={() => setActiveTab('Orders')} />
              <NavItem expanded={isVisualExpanded} icon={<Heart />} label="Favorites" active={activeTab === 'Favorites'} onClick={() => setActiveTab('Favorites')} />
              <NavItem expanded={isVisualExpanded} icon={<Clock />} label="History" active={activeTab === 'History'} onClick={() => setActiveTab('History')} />
              <NavItem expanded={isVisualExpanded} icon={<Settings />} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
            </div>
          </div>

          {/* Upgrade Card */}
          <div className="mt-8 mx-1">
             {!isVisualExpanded ? (
               <div className="relative group flex justify-center py-2">
                  <button className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-gray-400/20 group-hover:shadow-primary/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
                    <Zap size={20} className="text-yellow-400 fill-yellow-400 relative z-10" />
                  </button>
               </div>
             ) : (
               <div className="p-6 rounded-3xl bg-gray-900 text-white relative overflow-hidden shadow-2xl shadow-gray-200/50 group cursor-pointer hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border border-gray-700/50 mx-1 animate-in fade-in zoom-in duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 animate-pulse"></div>
                   
                   <div className="relative z-10">
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-md border border-white/10 shadow-inner">
                          <Zap size={24} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                       </div>
                       <h5 className="font-bold text-lg leading-tight mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Premium Plan</h5>
                       <p className="text-xs text-gray-400 mb-5 leading-relaxed font-medium">Unlock free delivery & exclusive discounts.</p>
                       <button className="w-full py-3 bg-white text-gray-900 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-primary hover:text-white transition-all shadow-lg transform active:scale-95 flex items-center justify-center gap-2 group-hover:shadow-primary/50">
                         Upgrade Now
                       </button>
                   </div>
                   <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
               </div>
             )}
          </div>

        </nav>

        {/* User Footer */}
        <div className="p-5 border-t border-gray-50 bg-white/50 backdrop-blur-sm z-10">
          <div className={`flex items-center gap-4 p-2.5 rounded-2xl hover:bg-white hover:shadow-md hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer group border border-transparent hover:border-gray-50 ${!isVisualExpanded ? 'justify-center' : ''}`}>
             <div className="relative flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
                  alt="User" 
                  className="w-11 h-11 rounded-full object-cover border-[3px] border-white shadow-md group-hover:border-primary/30 transition-all"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm"></span>
             </div>
             
             <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isVisualExpanded ? 'max-w-[150px] opacity-100 ml-0' : 'max-w-0 opacity-0 ml-0'}`}>
                <h4 className="text-sm font-bold text-gray-800 truncate group-hover:text-primary transition-colors whitespace-nowrap">Suresh Kumar</h4>
                <p className="text-xs text-gray-500 truncate font-medium whitespace-nowrap">Gold Member</p>
             </div>
             
             <button 
                onClick={(e) => { e.stopPropagation(); onLogout(); }}
                className={`text-gray-400 hover:text-red-500 hover:bg-red-50 p-2.5 rounded-xl transition-all ${!isVisualExpanded ? 'hidden' : 'opacity-0 group-hover:opacity-100'}`}
                title="Logout"
             >
                <LogOut size={18} />
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative bg-[#FDFBF7]">
        
        {/* Header */}
        <header className="h-28 flex items-center justify-between px-6 lg:px-12 z-10 transition-all bg-transparent">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            
            <div className="flex-col hidden md:flex">
               <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                 {activeTab === 'Home' ? 'Welcome Back, Suresh! 👋' : 
                  activeTab === 'Explore' ? 'Discover Tastes 🌍' :
                  activeTab === 'Offers' ? 'Your Wallet will Love This 💸' :
                  activeTab === 'Orders' ? 'Track Your Cravings 🛵' :
                  activeTab === 'Favorites' ? 'Your Loved Dishes ❤️' :
                  activeTab === 'History' ? 'Past Delights 📜' :
                  activeTab === 'Settings' ? 'Customize Experience ⚙️' :
                  activeTab}
               </h2>
               <p className="text-sm text-gray-500 font-medium mt-1">
                 {activeTab === 'Home' ? "Hungry? Let's get some food." :
                  activeTab === 'Explore' ? "Find your next favorite dish." :
                  activeTab === 'Offers' ? "Best deals picked just for you." :
                  activeTab === 'Orders' ? "Real-time updates on your food." :
                  activeTab === 'Favorites' ? "Quick access to what you love." :
                  activeTab === 'History' ? "Reorder your favorites easily." :
                  activeTab === 'Settings' ? "Manage your profile and preferences." :
                  ""}
               </p>
            </div>
          </div>
          
          <div className="flex-1 max-w-sm md:max-w-md mx-4 md:mx-12">
             <div className="relative group shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/5">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
               <input 
                 type="text" 
                 placeholder="Search for biryani, curries..." 
                 className="w-full bg-transparent border-none rounded-2xl py-4 pl-14 pr-4 text-sm focus:ring-0 transition-all outline-none placeholder:text-gray-400 text-gray-700 font-medium"
               />
             </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
             {/* Cart Button */}
             <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-3.5 bg-white border border-gray-100 rounded-full text-gray-400 hover:text-primary hover:bg-orange-50 transition-all shadow-sm hover:shadow-md active:scale-95"
             >
               <ShoppingCart size={20} />
               {cartItems.length > 0 && (
                 <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-gray-900 text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                 </span>
               )}
             </button>

             <button className="relative p-3.5 bg-white border border-gray-100 rounded-full text-gray-400 hover:text-primary hover:bg-orange-50 transition-all shadow-sm hover:shadow-md active:scale-95">
               <Bell size={20} />
               <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
             </button>
             
             <div className="md:hidden w-10 h-10 rounded-full bg-orange-100 border-2 border-white shadow-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto px-6 lg:px-12 pb-12 custom-scrollbar">
          {activeTab === 'Home' && renderHomeContent()}
          {activeTab === 'Explore' && renderExploreContent()}
          {activeTab === 'Offers' && renderOffersContent()}
          {activeTab === 'Orders' && renderOrdersContent()}
          {activeTab === 'Favorites' && renderFavoritesContent()}
          {activeTab === 'History' && renderHistoryContent()}
          {activeTab === 'Settings' && renderSettingsContent()}
        </div>
      </main>
    </div>
  );
};

// Cart Drawer Component
const CartDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove, onCheckout }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const delivery = subtotal > 499 ? 0 : 40;
  const tax = subtotal * 0.05;
  const total = subtotal + delivery + tax;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-[150] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-[160] w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white z-10">
           <div className="flex items-center gap-3">
              <ShoppingBasket className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
              <span className="bg-orange-100 text-orange-600 px-2.5 py-0.5 rounded-full text-xs font-bold">{cartItems.length} Items</span>
           </div>
           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
             <X size={20} />
           </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-gray-50/50">
           {cartItems.length === 0 ? (
             <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
                   <ShoppingBag size={40} />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-gray-800">Your cart is empty</h3>
                   <p className="text-gray-400 text-sm max-w-xs mx-auto mt-1">Looks like you haven't added anything to your cart yet.</p>
                </div>
                <button onClick={onClose} className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl text-sm hover:bg-gray-50 transition-colors">
                  Browse Menu
                </button>
             </div>
           ) : (
             <div className="space-y-4">
               {cartItems.map((item) => (
                 <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                          <h4 className="font-bold text-gray-800 text-sm line-clamp-2 pr-2">{item.name}</h4>
                          <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                             <Trash2 size={16} />
                          </button>
                       </div>
                       <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-gray-800">₹{item.price * item.quantity}</span>
                          <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                             <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-7 h-7 flex items-center justify-center hover:bg-white hover:text-primary rounded-l-lg transition-colors"><Minus size={14} /></button>
                             <span className="w-6 text-center text-xs font-bold text-gray-700">{item.quantity}</span>
                             <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-7 h-7 flex items-center justify-center hover:bg-white hover:text-primary rounded-r-lg transition-colors"><Plus size={14} /></button>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
           )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-100 shadow-lg z-10">
             <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm text-gray-500">
                   <span>Item Total</span>
                   <span className="font-bold text-gray-800">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                   <span>Delivery Charges</span>
                   <span className="font-bold text-green-600">{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                   <span>Tax (5%)</span>
                   <span className="font-bold text-gray-800">₹{tax.toFixed(0)}</span>
                </div>
                <div className="border-t border-gray-100 my-2 pt-2 flex justify-between text-base font-bold text-gray-900">
                   <span>To Pay</span>
                   <span>₹{total.toFixed(0)}</span>
                </div>
             </div>
             
             <button 
                onClick={onCheckout}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-primary transition-colors shadow-lg shadow-gray-200 active:scale-95 flex items-center justify-center gap-2"
             >
               <span>Proceed to Checkout</span>
               <ArrowRight size={18} />
             </button>
          </div>
        )}
      </div>
    </>
  );
};

// Checkout Modal
const CheckoutModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onPlaceOrder: () => void;
}> = ({ isOpen, onClose, cartItems, onPlaceOrder }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const delivery = subtotal > 499 ? 0 : 40;
  const tax = subtotal * 0.05;
  const total = subtotal + delivery + tax;

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // Wait for success animation then close
      setTimeout(() => {
        setIsSuccess(false); // Reset for next time
        onPlaceOrder();
      }, 2500);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
       {/* Backdrop */}
       <div 
         className="absolute inset-0 bg-gray-900/70 backdrop-blur-md transition-opacity"
         onClick={!isProcessing ? onClose : undefined}
       />

       {/* Modal */}
       <div className="relative w-full max-w-4xl bg-[#FDFBF7] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[600px] animate-in fade-in zoom-in duration-300">
          
          {/* Close Button */}
          {!isSuccess && !isProcessing && (
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
            >
              <X size={20} />
            </button>
          )}

          {isSuccess ? (
             <div className="w-full h-full flex flex-col items-center justify-center bg-white p-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                   <CheckCircle2 size={48} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Order Placed! 🎉</h2>
                <p className="text-gray-500 mb-8 max-w-sm">Your order has been confirmed and will be delivered shortly.</p>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4 max-w-xs w-full">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <Bike size={24} className="text-primary" />
                   </div>
                   <div className="text-left">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Estimated Delivery</p>
                      <p className="text-lg font-bold text-gray-800">30-45 mins</p>
                   </div>
                </div>
             </div>
          ) : (
            <>
              {/* Left Side - Details */}
              <div className="flex-1 p-8 md:p-10 overflow-y-auto custom-scrollbar">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                     Checkout <span className="w-2 h-2 rounded-full bg-primary mt-1"></span>
                  </h2>

                  {/* Delivery Address */}
                  <div className="mb-8">
                     <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                           <MapPin size={16} /> Delivery Address
                        </h3>
                        <button className="text-primary text-xs font-bold hover:underline">Change</button>
                     </div>
                     <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-primary/30 transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              <Home size={18} />
                           </div>
                           <div>
                              <div className="flex items-center gap-2 mb-1">
                                 <h4 className="font-bold text-gray-800">Home</h4>
                                 <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-md uppercase">Default</span>
                              </div>
                              <p className="text-sm text-gray-500 leading-relaxed">Flat 402, Krishna Residency, Road No. 45, Jubilee Hills, Hyderabad - 500033</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                     <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2 mb-4">
                        <Wallet size={16} /> Payment Method
                     </h3>
                     <div className="space-y-3">
                        <div 
                          className={`p-4 border rounded-2xl flex items-center gap-4 cursor-pointer transition-all ${paymentMethod === 'card' ? 'bg-white border-primary shadow-md shadow-primary/5' : 'bg-transparent border-gray-200 hover:bg-white'}`}
                          onClick={() => setPaymentMethod('card')}
                        >
                           <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-primary' : 'border-gray-300'}`}>
                              {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                           </div>
                           <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                              <CreditCard size={20} />
                           </div>
                           <div className="flex-1">
                              <p className="font-bold text-gray-800 text-sm">Credit / Debit Card</p>
                              <p className="text-xs text-gray-400">Visa, Mastercard, RuPay</p>
                           </div>
                        </div>

                        <div 
                          className={`p-4 border rounded-2xl flex items-center gap-4 cursor-pointer transition-all ${paymentMethod === 'upi' ? 'bg-white border-primary shadow-md shadow-primary/5' : 'bg-transparent border-gray-200 hover:bg-white'}`}
                          onClick={() => setPaymentMethod('upi')}
                        >
                           <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'upi' ? 'border-primary' : 'border-gray-300'}`}>
                              {paymentMethod === 'upi' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                           </div>
                           <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                              <Smartphone size={20} />
                           </div>
                           <div className="flex-1">
                              <p className="font-bold text-gray-800 text-sm">UPI</p>
                              <p className="text-xs text-gray-400">Google Pay, PhonePe, Paytm</p>
                           </div>
                        </div>

                        <div 
                          className={`p-4 border rounded-2xl flex items-center gap-4 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'bg-white border-primary shadow-md shadow-primary/5' : 'bg-transparent border-gray-200 hover:bg-white'}`}
                          onClick={() => setPaymentMethod('cod')}
                        >
                           <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-primary' : 'border-gray-300'}`}>
                              {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                           </div>
                           <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">
                              <Banknote size={20} />
                           </div>
                           <div className="flex-1">
                              <p className="font-bold text-gray-800 text-sm">Cash on Delivery</p>
                              <p className="text-xs text-gray-400">Pay when you receive</p>
                           </div>
                        </div>
                     </div>
                  </div>
              </div>

              {/* Right Side - Summary */}
              <div className="w-full md:w-[380px] bg-white p-8 md:p-10 border-l border-gray-100 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-6">Order Summary</h3>
                  
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 mb-6">
                     <div className="space-y-4">
                        {cartItems.map((item) => (
                           <div key={item.id} className="flex gap-3">
                              <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                 <img src={item.image} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-start">
                                    <p className="text-sm font-bold text-gray-800 line-clamp-1">{item.name}</p>
                                    <p className="text-sm font-bold text-gray-800">₹{item.price * item.quantity}</p>
                                 </div>
                                 <p className="text-xs text-gray-500">{item.quantity} x ₹{item.price}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-3 border-t border-gray-100 pt-6">
                     <div className="flex justify-between text-sm text-gray-500">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                     </div>
                     <div className="flex justify-between text-sm text-gray-500">
                        <span>Delivery</span>
                        <span className="text-green-600 font-medium">{delivery === 0 ? 'Free' : `₹${delivery}`}</span>
                     </div>
                     <div className="flex justify-between text-sm text-gray-500">
                        <span>Tax (5%)</span>
                        <span>₹{tax.toFixed(0)}</span>
                     </div>
                     <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                        <span>Total</span>
                        <span>₹{total.toFixed(0)}</span>
                     </div>
                  </div>

                  <button 
                     onClick={handlePlaceOrder}
                     disabled={isProcessing}
                     className="w-full mt-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-primary transition-all shadow-lg shadow-gray-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                     {isProcessing ? (
                        <>
                           <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                           Processing...
                        </>
                     ) : (
                        <>
                           Place Order <ArrowRight size={18} />
                        </>
                     )}
                  </button>
              </div>
            </>
          )}
       </div>
    </div>
  );
};

// Dish Detail Drawer Component
const DishDetailDrawer: React.FC<{
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish, quantity: number) => void;
  onBuyNow: (dish: Dish, quantity: number) => void;
}> = ({ dish, onClose, onAddToCart, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const isOpen = !!dish;
  
  // Reset quantity when dish changes
  useEffect(() => {
    if (dish) setQuantity(1);
  }, [dish]);

  if (!dish) return null;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-gray-900/60 backdrop-blur-md z-[150] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed inset-y-0 right-0 z-[160] w-full max-w-2xl bg-[#FDFBF7] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         
         <button onClick={onClose} className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-red-500 transition-colors shadow-lg">
           <X size={20} />
         </button>

         <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Hero Image */}
            <div className="relative h-[400px]">
               <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${dish.theme === 'olive' ? 'bg-olive text-white' : 'bg-primary text-white'}`}>
                        {dish.prefix} Cuisine
                     </span>
                     <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-bold">{dish.rating} (128)</span>
                     </div>
                  </div>
                  <h2 className="text-4xl font-bold mb-1">{dish.name}</h2>
               </div>
            </div>

            <div className="p-8 space-y-8">
               
               {/* Description */}
               <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <ChefHat size={20} className="text-primary" /> Chef's Note
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                     {dish.description} Prepared with authentic spices sourced directly from the farms of Andhra Pradesh, ensuring every bite takes you on a flavorful journey. Cooked slowly in a traditional dum style to retain maximum aroma.
                  </p>
               </div>

               {/* Nutritional Info (Mock) */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Calories', value: '450 kcal', icon: <Flame size={16} /> },
                    { label: 'Proteins', value: '18g', icon: <Zap size={16} /> },
                    { label: 'Fats', value: '12g', icon: <Info size={16} /> },
                    { label: 'Carbs', value: '45g', icon: <Coffee size={16} /> },
                  ].map((stat, i) => (
                     <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-1">
                           {stat.icon}
                        </div>
                        <span className="text-sm font-bold text-gray-800">{stat.value}</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</span>
                     </div>
                  ))}
               </div>

               {/* Reviews */}
               <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                     <MessageCircle size={20} className="text-primary" /> Customer Reviews
                  </h3>
                  <div className="space-y-4">
                     {[
                        { user: 'Ravi Teja', rating: 5, date: '2 days ago', comment: 'Absolutely authentic taste! The mutton pieces were so tender.' },
                        { user: 'Sneha Reddy', rating: 4, date: '1 week ago', comment: 'Spicy but delicious. Best biryani in town for sure.' }
                     ].map((review, i) => (
                        <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                           <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                                    {review.user.charAt(0)}
                                 </div>
                                 <div>
                                    <h5 className="font-bold text-gray-800 text-sm">{review.user}</h5>
                                    <div className="flex text-yellow-400">
                                       {[...Array(review.rating)].map((_, j) => <Star key={j} size={10} fill="currentColor" strokeWidth={0} />)}
                                    </div>
                                 </div>
                              </div>
                              <span className="text-xs text-gray-400">{review.date}</span>
                           </div>
                           <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Sticky Footer */}
         <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full md:w-auto">
               <span className="text-xs text-gray-400 uppercase tracking-wide font-bold">Total Price</span>
               <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-800">₹{dish.price * quantity}</span>
                  {quantity > 1 && <span className="text-sm text-gray-400">(₹{dish.price} x {quantity})</span>}
               </div>
            </div>
            
            <div className="flex items-center bg-gray-50 rounded-xl px-2 border border-gray-100 h-12 w-full md:w-auto justify-between md:justify-start">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-full flex items-center justify-center hover:text-primary transition-colors rounded-l-lg"><Minus size={18} /></button>
                <span className="w-8 text-center text-lg font-bold text-gray-700">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-full flex items-center justify-center hover:text-primary transition-colors rounded-r-lg"><Plus size={18} /></button>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
               <button 
                  onClick={() => onAddToCart(dish, quantity)}
                  className="flex-1 md:flex-none px-6 h-12 bg-white border-2 border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
               >
                  Add to Cart
               </button>
               <button 
                  onClick={() => onBuyNow(dish, quantity)}
                  className="flex-1 md:flex-none px-8 h-12 bg-primary text-white rounded-xl font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 whitespace-nowrap"
               >
                  Buy Now
               </button>
            </div>
         </div>
      </div>
    </>
  );
};

const DashboardCard: React.FC<{
  dish: Dish;
  onAddToCart: (quantity: number) => void;
  onBuyNow: (quantity: number) => void;
  onClick: () => void;
}> = ({ dish, onAddToCart, onBuyNow, onClick }) => {
  return (
    <div className="bg-white p-4 rounded-[2rem] shadow-lg shadow-gray-100/50 border border-gray-100 flex flex-col group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden h-full">
        {/* Hover Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center p-6 pointer-events-none">
        </div>
        
        <div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-4 cursor-pointer" onClick={onClick}>
          <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors z-20">
             <Heart size={18} />
          </div>
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1">
             <Star size={12} className="text-yellow-400 fill-yellow-400" /> {dish.rating}
          </div>
        </div>

        <div className="px-2 pb-2 flex-1 flex flex-col">
           <div className="flex justify-between items-start mb-2">
             <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors cursor-pointer" onClick={onClick}>{dish.name}</h3>
             <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${dish.theme === 'olive' ? 'bg-olive/10 text-olive' : 'bg-orange-100 text-orange-600'}`}>{dish.prefix}</span>
           </div>
           <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">{dish.description}</p>
           
           <div className="mt-auto flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-gray-800">₹{dish.price}</span>
                <span className="text-xs text-gray-400 line-through ml-2">₹{dish.originalPrice}</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onAddToCart(1); }}
                className="p-2.5 bg-gray-900 text-white rounded-xl hover:bg-primary transition-colors shadow-lg shadow-gray-200 active:scale-95"
              >
                <Plus size={18} />
              </button>
           </div>
        </div>
    </div>
  );
};

const HistoryCard: React.FC<{
  orderId: number;
  date: string;
  amount: number;
  items: string[];
  onReorder: () => void;
}> = ({ orderId, date, amount, items, onReorder }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-primary/30 transition-all shadow-sm group">
     <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-primary">
              <ShoppingBag size={18} />
           </div>
           <div>
              <h4 className="font-bold text-gray-800 text-sm">Order #{orderId}</h4>
              <p className="text-xs text-gray-400">{date} • Delivered</p>
           </div>
        </div>
        <span className="font-bold text-gray-800">₹{amount}</span>
     </div>
     <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 truncate max-w-[200px]">{items.join(', ')}</p>
        <button onClick={onReorder} className="flex items-center gap-1 text-xs font-bold text-primary hover:bg-orange-50 px-3 py-1.5 rounded-lg transition-colors">
           <RefreshCw size={12} /> Reorder
        </button>
     </div>
  </div>
);

const NavItem: React.FC<{
  expanded: boolean;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
  onClick: () => void;
}> = ({ expanded, icon, label, active, badge, onClick }) => (
  <button 
    onClick={onClick}
    className={`
      w-full flex items-center relative group
      ${expanded ? 'px-4 py-3.5' : 'justify-center py-3.5 px-0'}
      rounded-2xl transition-all duration-300 ease-out
      ${active ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-gray-500 hover:bg-gray-50 hover:text-primary'}
    `}
    title={!expanded ? label : undefined}
  >
    <div className={`relative flex items-center justify-center transition-transform duration-300 ${active && !expanded ? 'scale-110' : ''}`}>
       {/* Icon */}
       {React.cloneElement(icon as React.ReactElement, { size: 20, strokeWidth: active ? 2.5 : 2 })}
       
       {/* Collapsed Badge */}
       {!expanded && badge && (
         <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-[9px] flex items-center justify-center rounded-full border-2 border-white font-bold">
           {badge}
         </span>
       )}
    </div>

    {/* Label & Expanded Badge */}
    <div className={`flex items-center justify-between flex-1 overflow-hidden transition-all duration-300 ${expanded ? 'ml-3 opacity-100 max-w-[150px]' : 'ml-0 opacity-0 max-w-0'}`}>
       <span className={`text-sm whitespace-nowrap ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
       {badge && (
         <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
           {badge}
         </span>
       )}
    </div>

    {/* Active Indicator Bar (Left) */}
    {active && (
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/20 rounded-r-full ${expanded ? 'hidden' : 'hidden'}`}></div>
    )}
  </button>
);

export default Dashboard;
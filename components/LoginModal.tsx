import React, { useState } from 'react';
import { X, User, Lock, Loader2 } from 'lucide-react';
import Button from './Button';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      onLogin(); // Trigger login state in App
      onClose(); // Close modal
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-md rounded-[30px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
         
         {/* Decorative Header */}
         <div className="bg-primary p-8 text-center relative overflow-hidden">
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            >
              <X size={24} />
            </button>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute top-10 -right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <h2 className="text-3xl font-bold text-white relative z-10 tracking-wide">Welcome Back</h2>
            <p className="text-orange-100 text-sm mt-2 relative z-10">Sign in to order your favorite food</p>
         </div>

         {/* Login Form */}
         <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email or Phone</label>
                 <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                      type="text" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary block p-3.5 pl-12 outline-none transition-all placeholder:text-gray-300" 
                      placeholder="user@kanigiri.com"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Password</label>
                 <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                      type="password" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary block p-3.5 pl-12 outline-none transition-all placeholder:text-gray-300" 
                      placeholder="••••••••"
                    />
                 </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <label className="flex items-center gap-2 cursor-pointer hover:text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="hover:text-primary transition-colors font-medium">Forgot Password?</a>
              </div>

              <Button 
                variant="primary" 
                fullWidth 
                className="!py-3 shadow-orange-200 shadow-lg text-base flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'LOGIN'}
              </Button>
            </form>

            <div className="mt-8 text-center border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-500">
                Don't have an account? <button className="text-primary font-bold hover:underline ml-1">Sign up</button>
              </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LoginModal;
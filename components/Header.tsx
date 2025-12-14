import React from 'react';
import { Phone, Menu, Flower } from 'lucide-react';
import Button from './Button';

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-transparent relative z-50">
      {/* Logo Area */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="text-primary">
          <Flower size={32} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-widest text-gray-800 leading-none">KANIGIRI</h1>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">Taste of Andhra</span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-gray-600 font-medium text-sm border-r border-gray-300 pr-6">
          <div className="w-8 h-8 rounded-full border border-olive text-olive flex items-center justify-center">
             <Phone size={14} fill="currentColor" />
          </div>
          <span>CALL: +91 90007 90007</span>
        </div>
        
        <Button 
          variant="primary" 
          size="sm" 
          className="hidden sm:inline-flex !normal-case !px-6"
          onClick={onLoginClick}
        >
          LOGIN
        </Button>
        
        <button className="p-2 text-gray-600 hover:text-primary transition-colors border border-gray-200 rounded-full bg-white shadow-sm">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
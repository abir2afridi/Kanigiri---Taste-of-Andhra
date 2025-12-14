import React from 'react';
import { Facebook, Twitter, Instagram, Pin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <SocialIcon icon={<Facebook size={18} />} />
          <SocialIcon icon={<Pin size={18} />} />
          <SocialIcon icon={<Twitter size={18} />} />
          <SocialIcon icon={<Instagram size={18} />} />
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <span className="text-gray-300">/</span>
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
          <span className="text-gray-300">/</span>
          <a href="#" className="hover:text-primary transition-colors">Menu</a>
          <span className="text-gray-300">/</span>
          <a href="#" className="hover:text-primary transition-colors">Blog</a>
          <span className="text-gray-300">/</span>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <span className="text-gray-300">/</span>
          <a href="#" className="hover:text-primary transition-colors">Return Policy</a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          Copyright © 2010-2024 Kanigiri Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-md flex items-center justify-center hover:bg-primary transition-colors duration-300 shadow-sm">
    {icon}
  </a>
);

export default Footer;
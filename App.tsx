import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesStrip from './components/FeaturesStrip';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If user is logged in, show the Dashboard
  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  // Otherwise, show the Landing Page
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans overflow-x-hidden relative">
      {/* Background decoration for Hero */}
      <div className="absolute top-0 right-0 w-2/3 h-[900px] bg-gradient-to-bl from-orange-50/70 to-transparent rounded-bl-[300px] -z-0 pointer-events-none opacity-60"></div>
      
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <FeaturesStrip />
        <MenuSection />
        <Testimonials />
        <Newsletter />
      </main>
      
      <Footer />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={() => setIsLoggedIn(true)}
      />
    </div>
  );
}

export default App;
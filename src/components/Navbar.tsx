
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-huriky-black/90 backdrop-blur-sm border-b border-huriky-yellow/10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-huriky-yellow transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-huriky-yellow transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-gray-300 hover:text-huriky-yellow transition-colors">
            FAQ
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-gray-300 hover:text-white">
            Login
          </Button>
          <Button className="bg-huriky-yellow hover:bg-huriky-yellow/80 text-huriky-black">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

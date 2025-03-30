
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-huriky-black/90 backdrop-blur-sm border-b border-huriky-yellow/10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-huriky-yellow transition-colors">
            Функции
          </a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-huriky-yellow transition-colors">
            Цены
          </a>
          <a href="#faq" className="text-sm text-gray-300 hover:text-huriky-yellow transition-colors">
            FAQ
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-gray-300 hover:text-white">
            Вход
          </Button>
          <Button className="bg-huriky-yellow hover:bg-huriky-yellow/80 text-huriky-black">
            Начать
          </Button>
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-huriky-darkgray/95 backdrop-blur-md border-b border-huriky-yellow/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-huriky-yellow py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Функции
            </a>
            <a 
              href="#pricing" 
              className="text-gray-300 hover:text-huriky-yellow py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Цены
            </a>
            <a 
              href="#faq" 
              className="text-gray-300 hover:text-huriky-yellow py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button variant="ghost" className="justify-start text-gray-300 hover:text-white">
              Вход
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

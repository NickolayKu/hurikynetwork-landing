
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import TechAnimation from '@/components/TechAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-huriky-black text-white overflow-x-hidden relative">
      <TechAnimation />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

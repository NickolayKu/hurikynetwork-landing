
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-pattern pt-32 pb-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center p-1 bg-huriky-darkgray rounded-full px-4 py-1 border border-huriky-yellow/20">
            <Zap size={14} className="mr-2 text-huriky-yellow" />
            <span className="text-xs font-medium">Fast. Secure. Private.</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Your Digital Presence, <span className="text-huriky-yellow">Fortified</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            HurikyNetwork provides military-grade encryption with our premium VLESS VPN service, 
            ensuring your internet activity remains untraceable in this surveillance age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-huriky-yellow hover:bg-huriky-yellow/90 text-huriky-black">
              Start your free trial
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-300">
              View Features
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800">
              <Shield className="h-10 w-10 mb-4 text-huriky-yellow" />
              <h3 className="text-lg font-medium mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-gray-400 text-center">
                Your data is encrypted from your device to destination.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800">
              <Globe className="h-10 w-10 mb-4 text-huriky-yellow" />
              <h3 className="text-lg font-medium mb-2">Global Network</h3>
              <p className="text-sm text-gray-400 text-center">
                Access points in over 90 countries for maximum flexibility.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800">
              <Zap className="h-10 w-10 mb-4 text-huriky-yellow" />
              <h3 className="text-lg font-medium mb-2">Lightning Speed</h3>
              <p className="text-sm text-gray-400 text-center">
                Optimized servers provide minimal latency for your connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

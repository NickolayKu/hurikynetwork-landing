
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-huriky-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Protection Plan</h2>
          <p className="text-gray-400">
            Select the level of security that suits your needs. All plans include our core technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Basic"
            price={9.99}
            features={[
              "5 Simultaneous Connections",
              "30+ Server Locations",
              "VLESS Protocol",
              "Standard Encryption",
              "Email Support",
              "No Bandwidth Limits"
            ]}
            isPopular={false}
          />
          
          <PricingCard 
            title="Premium"
            price={14.99}
            features={[
              "10 Simultaneous Connections",
              "70+ Server Locations",
              "VLESS Protocol",
              "Advanced Encryption",
              "24/7 Priority Support",
              "No Bandwidth Limits",
              "Traffic Obfuscation"
            ]}
            isPopular={true}
          />
          
          <PricingCard 
            title="Enterprise"
            price={24.99}
            features={[
              "Unlimited Connections",
              "90+ Server Locations",
              "VLESS Protocol",
              "Military-Grade Encryption",
              "24/7 Dedicated Support",
              "No Bandwidth Limits",
              "Traffic Obfuscation",
              "Custom Deployment Options",
              "Dedicated IP Addresses"
            ]}
            isPopular={false}
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Need a custom solution for your organization?</p>
          <Button variant="outline" className="border-gray-700 text-gray-300">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, isPopular }: { 
  title: string, 
  price: number, 
  features: string[], 
  isPopular: boolean 
}) => {
  return (
    <div className={`rounded-lg border ${isPopular ? 'border-huriky-yellow glow-effect' : 'border-gray-800'} p-8 relative`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-huriky-yellow text-huriky-black text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-400 ml-1">/month</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-huriky-yellow mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className={`w-full ${isPopular ? 'bg-huriky-yellow hover:bg-huriky-yellow/90 text-huriky-black' : 'bg-huriky-darkgray hover:bg-huriky-darkgray/70'}`}>
        {isPopular ? 'Get Started' : 'Select Plan'}
      </Button>
    </div>
  );
};

export default Pricing;

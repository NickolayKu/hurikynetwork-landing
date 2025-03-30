
import React from 'react';
import { Lock, Server, Network, Eye, Zap, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-huriky-black to-huriky-blue/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Advanced VLESS VPN Features</h2>
          <p className="text-gray-400">
            Experience unparalleled privacy and performance with our cutting-edge VPN technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Server className="h-8 w-8 text-huriky-yellow" />}
            title="VLESS Protocol"
            description="Our advanced VLESS protocol provides better performance than traditional VPN technologies with minimal detection footprint."
          />
          
          <FeatureCard 
            icon={<Lock className="h-8 w-8 text-huriky-yellow" />}
            title="Zero-Logging Policy"
            description="We maintain a strict no-logs policy. Your browsing history, connection timestamps, and IP addresses remain private."
          />
          
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-huriky-yellow" />}
            title="10 Gbps Network"
            description="Our high-capacity network infrastructure provides blazing fast speeds without compromising security."
          />
          
          <FeatureCard 
            icon={<Network className="h-8 w-8 text-huriky-yellow" />}
            title="Multi-Platform Support"
            description="Seamless integration across Windows, macOS, Linux, iOS, Android, and router implementations."
          />
          
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-huriky-yellow" />}
            title="Traffic Obfuscation"
            description="Advanced traffic masking makes your VPN connection appear as regular HTTPS traffic, bypassing deep packet inspection."
          />
          
          <FeatureCard 
            icon={<Eye className="h-8 w-8 text-huriky-yellow" />}
            title="DNS Protection"
            description="Prevents DNS leaks ensuring your queries are not exposed to your ISP or other surveillance entities."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-800 bg-huriky-darkgray/30 hover:bg-huriky-darkgray/50 transition-colors group">
      <div className="mb-4 p-3 bg-huriky-darkgray rounded-lg inline-block group-hover:bg-huriky-yellow/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Features;

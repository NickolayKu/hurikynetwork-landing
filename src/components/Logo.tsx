
import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 24, className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-huriky-black p-1 rounded-md">
        <Zap size={size} className="text-huriky-yellow fill-huriky-yellow" />
      </div>
      <span className="font-bold text-white tracking-tight">Huriky<span className='text-gray-300'>Network</span></span>
    </div>
  );
};

export default Logo;

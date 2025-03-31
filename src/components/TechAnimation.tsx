
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TechAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gargantua Black Hole animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-3xl max-h-3xl">
          <motion.div 
            className="absolute inset-0 rounded-full bg-huriky-black"
            style={{
              background: 'radial-gradient(circle, rgba(15,15,15,1) 30%, rgba(30,27,75,0.8) 60%, rgba(253,224,71,0.1) 90%)',
            }}
          />
          
          {/* Accretion disk */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ 
              boxShadow: '0 0 60px rgba(253, 224, 71, 0.4)',
              background: 'linear-gradient(45deg, transparent 20%, rgba(253,224,71,0.1) 40%, rgba(253,224,71,0.3) 50%, rgba(253,224,71,0.1) 60%, transparent 80%)',
            }}
          />
          
          {/* Inner event horizon glow */}
          <motion.div 
            className="absolute inset-[25%] rounded-full"
            animate={{ 
              boxShadow: ['0 0 20px rgba(253, 224, 71, 0.3)', '0 0 40px rgba(253, 224, 71, 0.5)', '0 0 20px rgba(253, 224, 71, 0.3)'] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              background: 'radial-gradient(circle, rgba(30,27,75,0.5) 0%, rgba(15,15,15,0) 70%)'
            }}
          />
        </div>
      </div>
      
      {/* Advanced grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      {/* Futuristic data particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-huriky-yellow/50 rounded-full shadow-glow"
            initial={{ 
              x: Math.random() * 100 - 50, 
              y: Math.random() * 100 - 50, 
              scale: 0 
            }}
            animate={{ 
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              scale: [0, Math.random() * 0.5 + 0.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Digital circuit lines */}
      <div className="absolute bottom-0 left-0 w-full h-96 opacity-20">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={`circuit-${i}`}
              d={`M${Math.random() * 20},${70 + i * 5} Q${25 + Math.random() * 20},${50 + Math.random() * 30} ${50 + Math.random() * 10},${70 + i * 3} T${100 - Math.random() * 20},${65 + i * 5}`}
              stroke="#FDE047"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0.3 + Math.random() * 0.5 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </svg>
      </div>
      
      {/* Holographic overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          backgroundImage: 'repeating-linear-gradient(rgba(253, 224, 71, 0.03) 1px, transparent 2px, transparent 4px, rgba(253, 224, 71, 0.03) 5px)',
          backgroundSize: '100% 5px'
        }}
        animate={{ 
          y: [0, 10]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear", 
          repeatType: "reverse" 
        }}
      />
    </div>
  );
};

export default TechAnimation;

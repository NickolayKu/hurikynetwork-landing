
import React from 'react';
import { motion } from 'framer-motion';

const TechAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      
      {/* Floating tech elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24">
        <motion.div 
          className="w-full h-full rounded-full border border-huriky-yellow/20 flex items-center justify-center"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="w-12 h-12 bg-huriky-yellow/10 rounded-full backdrop-blur-sm"></div>
        </motion.div>
      </div>
      
      <div className="absolute top-2/3 right-1/4 w-32 h-32">
        <motion.div 
          className="w-full h-full border border-huriky-yellow/30 rounded-lg flex items-center justify-center"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-16 h-16 border border-huriky-yellow/20 rounded-lg backdrop-blur-sm"></div>
        </motion.div>
      </div>
      
      {/* Digital circuit lines */}
      <div className="absolute bottom-0 left-0 w-full h-48 opacity-20">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <motion.path 
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="#FDE047"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.path 
            d="M0,60 Q35,40 70,60 T100,60"
            stroke="#FDE047"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
          />
          <motion.path 
            d="M0,40 Q45,60 75,40 T100,40"
            stroke="#FDE047"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
        </svg>
      </div>
    </div>
  );
};

export default TechAnimation;

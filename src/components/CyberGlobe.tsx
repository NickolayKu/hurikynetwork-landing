
import React from 'react';
import { motion } from 'framer-motion';

const CyberGlobe = () => {
  return (
    <div className="relative w-60 h-60 mx-auto my-12">
      <div className="absolute inset-0 rounded-full border-4 border-dashed border-huriky-yellow/20 animate-spin-slow" style={{ animationDuration: '30s' }}></div>
      
      <motion.div 
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-huriky-black to-huriky-purple/20 backdrop-blur-sm border border-huriky-yellow/10"
        animate={{
          boxShadow: ['0 0 20px rgba(253, 224, 71, 0.1)', '0 0 30px rgba(253, 224, 71, 0.2)', '0 0 20px rgba(253, 224, 71, 0.1)']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </div>
      </motion.div>
      
      {/* Orbital rings */}
      <motion.div
        className="absolute inset-2 rounded-full border border-huriky-yellow/20"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(65deg)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      
      <motion.div
        className="absolute inset-8 rounded-full border border-huriky-yellow/30"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(65deg)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", direction: "reverse" }}
      ></motion.div>
      
      {/* Connection points */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-huriky-yellow rounded-full shadow-glow"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default CyberGlobe;

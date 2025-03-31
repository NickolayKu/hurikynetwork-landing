
import React from 'react';
import { motion } from 'framer-motion';

const CyberGlobe = () => {
  return (
    <div className="relative w-64 h-64 mx-auto my-12">
      {/* Outer orbital rings */}
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-huriky-yellow/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute inset-4 rounded-full border border-huriky-yellow/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Main sphere */}
      <motion.div 
        className="absolute inset-8 rounded-full bg-gradient-to-tr from-huriky-black to-huriky-purple/30 border border-huriky-yellow/10 overflow-hidden"
        animate={{
          boxShadow: ['0 0 20px rgba(253, 224, 71, 0.1)', '0 0 40px rgba(253, 224, 71, 0.2)', '0 0 20px rgba(253, 224, 71, 0.1)']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Grid pattern inside sphere */}
        <motion.div 
          className="absolute inset-0 bg-cyber-grid opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Digital meridian lines */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(0deg, transparent 49.5%, rgba(253, 224, 71, 0.15) 50%, transparent 50.5%), linear-gradient(90deg, transparent 49.5%, rgba(253, 224, 71, 0.15) 50%, transparent 50.5%)'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Orbiting data nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 80;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-huriky-yellow rounded-full shadow-glow"
            style={{
              left: 'calc(50% - 1px)',
              top: 'calc(50% - 1px)',
            }}
            animate={{
              x: [x * 0.5, x * 1, x * 0.5],
              y: [y * 0.5, y * 1, y * 0.5],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
              times: [0, 0.5, 1]
            }}
          />
        );
      })}
      
      {/* Glowing center */}
      <motion.div
        className="absolute rounded-full bg-huriky-yellow/30"
        style={{
          left: 'calc(50% - 5px)',
          top: 'calc(50% - 5px)',
          width: '10px',
          height: '10px',
          filter: 'blur(3px)'
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Scanning effect */}
      <motion.div
        className="absolute inset-8 rounded-full"
        style={{
          background: 'linear-gradient(transparent 0%, rgba(253, 224, 71, 0.1) 45%, rgba(253, 224, 71, 0.3) 50%, rgba(253, 224, 71, 0.1) 55%, transparent 100%)',
          opacity: 0.5,
        }}
        animate={{ y: [-50, 50] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      />
      
      {/* "Holographic" data projections */}
      <motion.div
        className="absolute w-20 h-20"
        style={{
          left: 'calc(50% + 60px)',
          top: 'calc(50% - 10px)',
          borderLeft: '1px solid rgba(253, 224, 71, 0.3)',
        }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.div
          className="absolute left-2 top-0 w-16 h-1 bg-huriky-yellow/20"
          animate={{ width: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="absolute left-2 top-3 w-12 h-1 bg-huriky-yellow/20"
          animate={{ width: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="absolute left-2 top-6 w-14 h-1 bg-huriky-yellow/20"
          animate={{ width: [0, 14, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default CyberGlobe;

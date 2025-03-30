
import React from 'react';
import { motion } from 'framer-motion';

const DataStream = () => {
  const particles = 20;
  
  return (
    <div className="relative h-60 my-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(particles)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-huriky-yellow rounded-full shadow-glow"
            initial={{
              x: -100,
              y: -50 + Math.random() * 100,
              opacity: 0
            }}
            animate={{
              x: [null, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-huriky-yellow/30 to-transparent"
            style={{
              width: '80%',
              top: `${30 + i * 20}%`,
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          className="h-20 bg-gradient-to-t from-huriky-yellow/10 to-transparent"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default DataStream;

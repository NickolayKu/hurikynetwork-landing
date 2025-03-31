
import React from 'react';
import { motion } from 'framer-motion';

const DataStream = () => {
  const particles = 30;
  
  return (
    <div className="relative h-60 my-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Data particles */}
        {[...Array(particles)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-huriky-yellow/80 rounded-full shadow-glow"
            initial={{
              x: Math.random() < 0.5 ? -200 : 200,
              y: -50 + Math.random() * 100,
              opacity: 0
            }}
            animate={{
              x: Math.random() < 0.5 ? [null, 200] : [null, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Energy waves */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute h-px"
            style={{
              width: '90%',
              top: `${20 + i * 15}%`,
              backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(253, 224, 71, 0.3) 50%, transparent 100%)',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [-50, 0, 50]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Digital nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 rounded-full bg-huriky-yellow/70"
            style={{
              left: `${10 + i * 16}%`,
              top: '50%',
              boxShadow: '0 0 10px rgba(253, 224, 71, 0.8), 0 0 20px rgba(253, 224, 71, 0.4)'
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${10 + i * 16}%`}
              y1="50%"
              x2={`${26 + i * 16}%`}
              y2="50%"
              stroke="rgba(253, 224, 71, 0.5)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          className="h-20 bg-gradient-to-t from-huriky-yellow/10 to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default DataStream;


import React from 'react';
import { motion } from 'framer-motion';

const TechAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gargantua Black Hole animation - improved version */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="absolute w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(15,15,15,1) 30%, rgba(15,15,15,0.9) 40%, rgba(253,224,71,0.7) 55%, rgba(253,224,71,0.1) 70%, rgba(15,15,15,0) 75%)',
            boxShadow: '0 0 100px 50px rgba(253, 224, 71, 0.3)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Bright event horizon ring */}
        <motion.div 
          className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full border-[15px] md:border-[30px] border-huriky-yellow"
          style={{
            boxShadow: '0 0 70px 20px rgba(253, 224, 71, 0.6), inset 0 0 70px 20px rgba(253, 224, 71, 0.6)',
            background: 'transparent',
          }}
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.8, 0.6, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Central black hole */}
        <motion.div 
          className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-huriky-black"
          style={{
            boxShadow: 'inset 0 0 50px 10px rgba(15, 15, 15, 1)',
          }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Accretion disk with rotation */}
        <motion.div 
          className="absolute w-[85vw] h-[85vw] md:w-[55vw] md:h-[55vw] rounded-full"
          style={{
            background: 'linear-gradient(45deg, transparent 25%, rgba(253,224,71,0.2) 45%, rgba(253,224,71,0.4) 50%, rgba(253,224,71,0.2) 55%, transparent 75%)',
            boxShadow: '0 0 80px rgba(253, 224, 71, 0.3)'
          }}
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Light flares */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`flare-${i}`}
            className="absolute rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(253,224,71,0.8) 0%, rgba(253,224,71,0) 70%)',
              width: `${30 + Math.random() * 40}px`,
              height: `${30 + Math.random() * 40}px`,
              left: `calc(50% + ${Math.cos(i * 72 * Math.PI / 180) * (25 + Math.random() * 5)}vw)`,
              top: `calc(50% + ${Math.sin(i * 72 * Math.PI / 180) * (25 + Math.random() * 5)}vw)`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechAnimation;

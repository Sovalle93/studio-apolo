'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Handle scroll direction for fade in/out
  useEffect(() => {
    let lastScroll = 0;
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < lastScroll);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, x, scale }}
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0184c5]/5 to-[#272e80]/5"
    >
      {/* Shiny text effect */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-[#0184c5] via-[#272e80] to-[#0184c5] opacity-10 blur-xl"
      />

      <div className="relative z-10 max-w-6xl px-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            textShadow: [
              '0 0 10px rgba(1, 132, 197, 0.3)',
              '0 0 20px rgba(39, 46, 128, 0.5)',
              '0 0 10px rgba(1, 132, 197, 0.3)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0184c5] to-[#272e80]">
            STUDIO APOLO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-700 max-w-2xl mx-auto"
        >
          Soluciones creativas que transforman negocios
        </motion.p>
      </div>

      {/* Scroll indicator - only shows on initial view */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="h-8 w-5 rounded-full border-2 border-[#272e80] flex justify-center">
              <motion.div
                animate={{ y: [0, 5, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-1 bg-[#0184c5] rounded-full mt-1"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
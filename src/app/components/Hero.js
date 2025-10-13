'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < lastScroll || currentScroll < 10);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-white">
      {/* Video Logo */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain p-4"
        >
          <source 
            src="https://res.cloudinary.com/dmivjpb65/video/upload/v1760379785/WhatsApp_Video_2025-10-04_at_10.36.11_kwvzmv.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Scroll Indicator */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <motion.svg
              width="24"
              height="40"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M12 0V20M12 20L16 16M12 20L8 16"
                stroke="#0184c5"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M12 25V40M12 25L16 29M12 25L8 29"
                stroke="#272e80"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.svg>
            <motion.span 
              className="mt-2 text-sm text-gray-600"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
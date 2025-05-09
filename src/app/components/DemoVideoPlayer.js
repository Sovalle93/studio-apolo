'use client';

import { motion } from 'framer-motion';
import { FiPlay, FiYoutube } from 'react-icons/fi';

export default function DemoVideoPlayer() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring', 
        damping: 12, 
        stiffness: 100 
      }
    }
  };

  // Replace with your actual YouTube video ID
  const youtubeVideoId = "2zU6uaVIURU"; 
  const thumbnailUrl = `https://img.youtube.com/vi/${2zU6uaVIURU}/maxresdefault.jpg`;

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900"
        >
          Mira Nuestro Demo
        </motion.h2>
        
        <motion.p 
          variants={item}
          className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12"
        >
          Descubre cómo nuestras soluciones pueden transformar tu negocio
        </motion.p>
        
        <motion.div 
          variants={item}
          className="max-w-4xl mx-auto aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-2xl relative group"
          whileHover={{ scale: 1.01 }}
        >
          {/* YouTube Thumbnail with Play Button */}
          <div className="w-full h-full relative">
            <img 
              src={thumbnailUrl} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <motion.a
              href={`https://www.youtube.com/watch?v=${2zU6uaVIURU}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-[#0184c5] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2
                }}
                className="relative z-10 bg-[#272e80] text-white p-6 rounded-full shadow-xl"
              >
                <FiPlay className="h-8 w-8" />
              </motion.div>
            </motion.a>
            
            {/* YouTube Badge */}
            <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-1 rounded-md flex items-center text-sm font-medium">
              <FiYoutube className="mr-2" />
              YouTube
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    { id: 1, url: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1746629047/Screenshot_2025-05-07_104303_nnic0m.png', alt: 'Imagen 1' },
    { id: 2, url: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1746630655/Screenshot_2025-05-07_110954_pgmwhs.png', alt: 'Imagen 2' },
    { id: 3, url: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1745007297/Screenshot_2025-04-18_161258_zuv9xb.png', alt: 'Imagen 3' },
    { id: 4, url: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1746629047/Screenshot_2025-05-07_104303_nnic0m.png', alt: 'Imagen 4' },
    { id: 5, url: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1746629047/Screenshot_2025-05-07_104303_nnic0m.png', alt: 'Imagen 5' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          <span className="text-[#0184c5]">Creamos tu próximo proyecto</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Cuidamos tu marca
        </p>

        {/* Carousel with enforced aspect ratio */}
        <div className="relative w-full aspect-[16/9] max-h-[800px] overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={images[currentIndex].url} 
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-4 rounded-full transition-all"
            aria-label="Previous image"
          >
            <FiChevronLeft className="h-8 w-8 text-white" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-4 rounded-full transition-all"
            aria-label="Next image"
          >
            <FiChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#272e80] w-6' : 'bg-[#0184c5]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

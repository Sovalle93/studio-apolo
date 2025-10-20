'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function StaticImage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Use Cloudinary transformations for better quality
  const baseUrl = 'https://res.cloudinary.com/dmivjpb65/image/upload';
  const transformations = 'f_auto,q_90,w_1920'; // Higher quality and width
  const staticImageUrl = `${baseUrl}/${transformations}/v1747080592/Screenshot_2025-05-12_160611_ofedji.png`;

  return (
    <section className="relative w-full pt-16 pb-16 bg-white" style={{ marginTop: 0 }}>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          <span className="text-[#0184c5]">Creamos tu próximo proyecto</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Cuidamos tu marca
        </p>
        {/* Static image container with same aspect ratio */}
        <div className="relative w-full aspect-[16/9] max-h-[800px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={staticImageUrl}
              alt="Creamos tu próximo proyecto"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
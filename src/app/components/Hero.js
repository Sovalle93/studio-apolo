'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className="relative w-full bg-white overflow-hidden"
      style={{ 
        height: 'calc(100vh + 1px)',
        minHeight: 'calc(100vh + 1px)',
        marginBottom: 0
      }}
    >
      {/* Video Logo */}
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-white">
        {isLoaded && (
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
              style={{
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              <source
                src="https://res.cloudinary.com/dmivjpb65/video/upload/v1760379785/WhatsApp_Video_2025-10-04_at_10.36.11_kwvzmv.mp4"
                type="video/mp4"
              />
            </video>
            {/* White border overlay to mask the black line */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 0 4px white',
              }}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
}
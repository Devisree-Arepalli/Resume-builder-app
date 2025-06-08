// app/components/Testimonial.tsx
/*'use client';

import { useEffect } from 'react';

const videos = [
  { id: 'wngme9ri7f' },
  { id: 'brxdsa81ir' },
  { id: 'r5tik7suu5' },
];

export default function Testimonial() {
  useEffect(() => {
    // Dynamically loading Wistia script
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    script.onload = () => {
      console.log('Wistia script loaded successfully');
    };
    document.body.appendChild(script);

    return () => {
      // Clean up when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="aspect-video w-full">
            <wistia-player
              media-id={video.id}
              seo="false"
              aspect="1.7777777777777777"
              unique-id={`wistia-${video.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
*/

/*'use client';

import { useEffect, useRef } from 'react';

const videos = [
  { id: 'wngme9ri7f' },
  { id: 'brxdsa81ir' },
  { id: 'r5tik7suu5' },
];

// Sample images next to videos (replace with your actual image URLs)
const images = [
  './images/pic1.jpg',
  './images/pic2.jpeg',
  './images/pic3.jpeg',
  './images/pic4.jpeg',
  './images/pic5.jpg',
  './images/pic6.jpg',
];

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Wistia script
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Auto scroll images left infinitely
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let rafId: number;

    const step = () => {
      if (!scrollContainer) return;

      scrollAmount += 1; // pixels per frame
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Duplicate images to create infinite scrolling effect
  const scrollingImages = [...images, ...images];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Videos *///}
/*      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-shrink-0 md:w-3/5">
        {videos.map((video) => (
          <div key={video.id} className="aspect-video w-full rounded overflow-hidden shadow-md">
            <wistia-player
              media-id={video.id}
              seo="false"
              aspect="1.7777777777777777"
              unique-id={`wistia-${video.id}`}
            />
          </div>
        ))}
      </div>

      {/* Auto-scrolling images *///}
/*      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden whitespace-nowrap scroll-smooth md:w-2/5"
        style={{ scrollBehavior: 'smooth' }}
      >
        {scrollingImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Testimonial pic ${i + 1}`}
            className="inline-block w-28 h-28 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
*/'use client';

import { useEffect, useRef } from 'react';

const items = [
  { type: 'video', id: 'wngme9ri7f' },
  { type: 'image', src: '/images/pic1.jpg' },
  { type: 'video', id: 'brxdsa81ir' },
  { type: 'image', src: '/images/pic2.jpeg' },
  { type: 'video', id: 'r5tik7suu5' },
  { type: 'image', src: '/images/pic3.jpeg' },
  {type: 'image', src:'/images/pic4.jpeg'},
];

export default function UnifiedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load Wistia
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let rafId: number;

    const step = () => {
      if (!scrollContainer) return;

      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Duplicate for smooth looping
  const scrollingItems = [...items, ...items];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 w-full overflow-hidden"
        style={{ height: '220px' }}
      >
        {scrollingItems.map((item, i) => (
          <div
            key={i}
            className="min-w-[320px] h-[200px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 flex items-center justify-center"
          >
            {item.type === 'video' ? (
              <wistia-player
                media-id={item.id}
                seo="false"
                aspect="1.6"
                unique-id={`wistia-${item.id}-${i}`}
              />
            ) : (
              <img
                src={item.src}
                alt={`preview ${i}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

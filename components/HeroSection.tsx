'use client';
import Link from 'next/link';

interface HeroSectionProps {
  onLoginClick: () => void;
}

export default function HeroSection({ onLoginClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gray-100 px-6 py-20 text-center overflow-hidden">
      {/* Top right button */}
      <div className="absolute right-4 top-[70px] z-50">

         
         
      </div>

      <h2 className="text-4xl font-bold mb-4">
        Your Premium Resume Builder for IIT and IIM Graduates
      </h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Create professional resumes tailored for top companies in minutes. 
        Stand out with specialized templates designed for IIT, IIM graduates, and tech professionals.
      </p>

      
    </section>
  );
}

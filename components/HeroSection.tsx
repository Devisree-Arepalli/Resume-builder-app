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

         
         <div className="bg-white border border-pink-900 text-pink-900 px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out transform hover:bg-pink-900 hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
           <Link
                  href="./Resume1"
                  className="block px-4 py-2.5 hover:bg-gray-100 transition rounded-t-xl"
                >
          Resume Create
          </Link>
          
</div>
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

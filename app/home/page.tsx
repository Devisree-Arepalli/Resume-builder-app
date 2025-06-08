'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection1 from '@/components/FeaturesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import InterviewPrepSection from '@/components/InterviewPrepSection';
import LoginModal from '@/components/LoginModal';
//import PricingSection from '../app/PreviewPanel/page';
// FeaturesSection1 from '@/components/FeaturesSection1';
import Testimonial from '@/components/Testimonials';
export default function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  return (
  
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar onLoginClick={handleLoginClick} />
      <HeroSection onLoginClick={handleLoginClick} />
      <FeaturesSection1/>
     
      <Testimonial />
      <InterviewPrepSection />
       <WhyChooseUsSection />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
     
      </main>
      
  );
}

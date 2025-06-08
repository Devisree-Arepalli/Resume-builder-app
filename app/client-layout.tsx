'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BannerSection from '@/components/BannerSection';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  //const hideLayout = pathname === '/login' || pathname === '/register';
  const hide=pathname== '/home';
  return (
    <>
    <Navbar/>
     {hide&&<Footer/>}
     <main>{children}</main>
     
    </>
  );
}

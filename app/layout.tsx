
/*import './globals.css';
//import Sidebar from './Dashboard/page';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import ClientLayout from './client-layout';
export const metadata = {
  title: 'Home',
  description: 'Resume builder dashboard',
};

import ClientLayout from './client-layout';
export default function RootLayout({ children }: { children: React.ReactNode }) {
 
 

  return (
    <html lang="en">
      <body className="h-screen">
      
        <div className="flex h-screen">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        <ClientLayout />
          </main>
        </div>
      </body>
   
    </html>
  );
}
*/



// app/layout.tsx
'use client';

import './globals.css';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ClientLayout from './client-layout';
import Navbar from '@/components/Navbar';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const loginStatus = localStorage.getItem('loggedIn');
    setLoggedIn(loginStatus === 'true');
  }, []);

  // Determine if responsiveness should be enabled
  const isResponsiveAllowed = loggedIn || pathname === '/home' || pathname === '/login-new';

  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={`min-h-screen ${isResponsiveAllowed ? 'w-full' : 'min-w-[1024px] overflow-x-auto'}`}>
          {children}
        </div>
        <Toaster position= "top-right" />
            <ClientLayout />
      </body>
    </html>
  );
}

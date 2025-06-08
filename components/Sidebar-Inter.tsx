'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkStyle = (path: string) =>
    `block px-3 py-2 rounded transition ${
      pathname === path
        ? 'bg-white text-pink-900 font-semibold'
        : 'hover:text-pink-300'
    }`;

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-pink-700 text-white p-2 rounded-md"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Overlay for mobile sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${
          sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 p-6 bg-gradient-to-b from-pink-900 to-pink-400 text-white flex flex-col shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${
            sidebarOpen
              ? 'translate-x-0'
              : '-translate-x-full md:translate-x-0'
          }
        `}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Top Section */}
          <div>
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              <h1 className="text-3xl font-bold mb-8 cursor-pointer hover:text-pink-300">
                Home
              </h1>
            </Link>
           
          </div>

          {/* Middle Navigation with flex-grow to fill space */}
           <div className="space-y-3 text-sm font-bold">
            <img
              src="images/pic2.jpeg"
              alt="Resume 2"/>
              </div>
              
          <nav className="space-y-3 text-sm font-bold flex-grow flex flex-col justify-center">
            
           
            <Link
              href="/job-final"
              className="flex items-center justify-between px-3 py-2 rounded hover:text-pink-300"
              onClick={() => setSidebarOpen(false)}
            >
              <span>Job Search</span>
              <span className="text-xs bg-green-500 px-2 py-0.5 rounded-full">NEW</span>
            </Link>
            
            
            <Link href="/ai-inter" className="block px-3 py-2 rounded hover:text-pink-300" onClick={() => setSidebarOpen(false)}>
              AI Interview
            </Link>
          </nav>

          {/* Bottom Section */}
          <div className="space-y-4 text-sm font-bold">
            <div className="flex justify-between items-center bg-white/10 px-3 py-2 rounded">
              <span>AI Generations</span>
              <span className="bg-white text-pink-900 px-2 py-0.5 rounded text-xs">10</span>
            </div>
            
           
          </div>

 <div className="mt-6 flex flex-col items-center gap-3">
           
            <img
              src="images/pic3.jpeg"
              alt="Resume 2"
             
            />

               
            
            
          </div>



        </div>

        {/* Close button on mobile */}
        <button
          className="absolute top-4 right-4 md:hidden text-white"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>
      </aside>
    </>
  );
}

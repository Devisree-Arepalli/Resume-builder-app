'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  // Dropdown state toggles
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isInterviewOpen, setIsInterviewOpen] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('loggedIn');
    setIsLoggedIn(status === 'true');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
    setShowLogout(false);
    window.location.href = '/login-new';
  };

  // Close dropdowns if user clicks outside (optional enhancement)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#resume-dropdown') && !target.closest('#resume-trigger')) {
        setIsResumeOpen(false);
      }
      if (!target.closest('#interview-dropdown') && !target.closest('#interview-trigger')) {
        setIsInterviewOpen(false);
      }
      if (!target.closest('#user-menu') && !target.closest('#user-icon')) {
        setShowLogout(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav
  className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
    showNavbar ? 'translate-y-0' : '-translate-y-full'
  } shadow-lg font-semibold custom1`}
>

      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1
          className="text-xl cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          IIT IIM Resume
        </h1>

        <ul className="hidden md:flex gap-6 items-center text-sm relative">
          <li>
            <Link href="/home" className="px-4 py-2 rounded">
              Home
            </Link>
          </li>

          {/* Resume Templates Dropdown */}
          <li
            className="group relative"
            onClick={() => setIsResumeOpen(!isResumeOpen)}
            id="resume-trigger"
          >
            <span className="px-4 py-2 rounded hover:bg-pink-800 cursor-pointer transition select-none">
              Resume Templates
            </span>

            <ul
              id="resume-dropdown"
              className={`
                absolute left-0 top-full mt-3 flex-col min-w-[220px] bg-white text-black rounded-xl shadow-2xl
                divide-y divide-gray-200 z-50 transition-all duration-300
                ${isResumeOpen ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-3'}
                group-hover:flex group-hover:opacity-100 group-hover:translate-y-0
              `}
            >
              <li>
                <Link
                  href="/sample-lib"
                  className="block px-4 py-2.5 hover:bg-gray-100 transition rounded-t-xl"
                >
                  Sample Templates
                </Link>
              </li>
              <li>
                <span className="block px-4 py-2.5 hover:bg-gray-100 cursor-pointer transition">
                  
                  <Link href="./analyze">Resume-Analyzer</Link>
                </span>
              </li>
              <li>
                <Link
                  href="/My"
                  className="block px-4 py-2.5 hover:bg-gray-100 transition rounded-b-xl"
                >
                  My Resume
                </Link>
              </li>
            </ul>
          </li>

          {/* Interview Prep Dropdown */}
          <li
            className="group relative"
            onClick={() => setIsInterviewOpen(!isInterviewOpen)}
            id="interview-trigger"
          >
            <span className="px-4 py-2 rounded hover:bg-pink-800 cursor-pointer transition select-none">
              Interview Prep
            </span>
            <ul
              id="interview-dropdown"
              className={`
                absolute left-0 top-full mt-3 flex-col min-w-[220px] bg-white text-black rounded-xl shadow-2xl
                divide-y divide-gray-200 z-50 transition-all duration-300
                ${isInterviewOpen ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-3'}
                group-hover:flex group-hover:opacity-100 group-hover:translate-y-0
              `}
            >
              <li>
                <Link
                  href="./job-final"
                  className="block px-4 py-2.5 hover:bg-gray-100 transition rounded-t-xl"
                >
                  JOB-Search
                </Link>
              </li>
              <li>
                <Link
                  href="./ai"
                  className="block px-4 py-2.5 hover:bg-gray-100 transition"
                >
                  AI-Interview
                </Link>
              </li>
              
            </ul>
          </li>

          {/* Login / Logout */}
          <li className="relative" id="user-icon">
            {isLoggedIn ? (
              <div
                className="relative cursor-pointer select-none"
                onClick={() => setShowLogout(!showLogout)}
              >
                <FaUserCircle className="text-2xl hover:text-yellow-300 transition" />
                {showLogout && (
                  <div
                    id="user-menu"
                    className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-xl z-50"
                  >
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login-new"
                className="px-4 py-2 rounded hover:bg-pink-800 transition"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [interviewOpen, setInterviewOpen] = useState(false);

  const resumeRef = useRef(null);
  const interviewRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const status = localStorage.getItem('loggedIn');
    setIsLoggedIn(status === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
    setShowLogout(false);
    window.location.href = '/login-new';
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resumeRef.current &&
        !(resumeRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setResumeOpen(false);
      }
      if (
        interviewRef.current &&
        !(interviewRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setInterviewOpen(false);
      }
      if (
        userRef.current &&
        !(userRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setShowLogout(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-semibold custom1 bg-white shadow">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1
          className="text-xl cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          IIT IIM Resume
        </h1>

        <ul className="hidden md:flex gap-6 items-center text-sm relative">
          <li>
            <Link href="/home" className="px-4 py-2 rounded hover:bg-pink-800 hover:text-white transition">
              Home
            </Link>
          </li>

          {/* Resume Dropdown */}
          <li ref={resumeRef} className="relative">
            <button
              onClick={() => setResumeOpen(prev => !prev)}
              className="px-4 py-2 flex items-center gap-1 rounded hover:bg-pink-800 hover:text-white transition select-none"
            >
              Resume Templates
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${resumeOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {resumeOpen && (
              <ul className="absolute left-0 top-full mt-2 flex-col min-w-[220px] bg-white text-black rounded-xl shadow-2xl divide-y divide-gray-200 z-50">
               <li>
                  <Link href="/My" className="block px-4 py-2.5 hover:bg-gray-100 rounded-b-xl transition">
                    My Resume
                  </Link>
                </li>
                <li>
                  <Link href="/sample-lib" className="block px-4 py-2.5 hover:bg-gray-100 rounded-t-xl transition">
                    Sample Templates
                  </Link>
                </li>
                <li>
                  <Link href="/analyze" className="block px-4 py-2.5 hover:bg-gray-100 transition">
                    Resume Analyzer
                  </Link>
                </li>
                <li>
                  <Link href="/optimize" className="block px-4 py-2.5 hover:bg-gray-100 rounded-b-xl transition">
                    Resume Optimizer
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Interview Dropdown */}
          <li ref={interviewRef} className="relative">
            <button
              onClick={() => setInterviewOpen(prev => !prev)}
              className="px-4 py-2 flex items-center gap-1 rounded hover:bg-pink-800 hover:text-white transition select-none"
            >
              Interview Prep
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${interviewOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {interviewOpen && (
              <ul className="absolute left-0 top-full mt-2 flex-col min-w-[220px] bg-white text-black rounded-xl shadow-2xl divide-y divide-gray-200 z-50">
                <li>
                  <Link href="/job-final" className="block px-4 py-2.5 hover:bg-gray-100 rounded-t-xl transition">
                    Job Search
                  </Link>
                </li>
                <li>
                  <Link href="/ai" className="block px-4 py-2.5 hover:bg-gray-100 rounded-b-xl transition">
                    AI Interview
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* User Icon */}
          <li ref={userRef} className="relative">
            {isLoggedIn ? (
              <div
                className="relative cursor-pointer select-none"
                onClick={() => setShowLogout(prev => !prev)}
              >
                <FaUserCircle className="text-2xl hover:text-yellow-400 transition" />
                {showLogout && (
                  <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-xl z-50">
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
              <Link href="/login-new" className="px-4 py-2 rounded hover:bg-pink-800 hover:text-white transition">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

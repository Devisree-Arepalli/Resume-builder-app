"use client";

import CreateResumeModal from '../create-new resume/page';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `block px-3 py-2 rounded transition ${
      pathname === path
        ? 'bg-white text-black font-semibold'
        : 'hover:text-blue-300'
    }`;

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-gradient-to-b from-[#1B2845] to-[#1B3276] p-6 text-white flex flex-col justify-between shadow-xl">
      <div className="space-y-8">
      <div>
            <h1 className="text-3xl font-bold mb-6">Rezi</h1>
            <button
              onClick={() => CreateResumeModal}
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4 text-sm font-medium"
            >
              Create New Resume
            </button>
          </div>

        <nav className="space-y-3 text-sm font-bold">
          <Link href="login" className={linkStyle('/dashboard')}>
            My Dashboard
          </Link>
          <a href="/job-final" target="_self" className="flex items-center justify-between px-3 py-2 rounded hover:text-blue-300">
            <span>Job Search</span>
            <span className="text-xs bg-green-500 px-2 py-0.5 rounded-full">NEW</span>
          </a>
          <a href="/sample-lib" target="_self" className="block px-3 py-2 rounded hover:text-blue-300">Sample Library</a>
          <Link href="/review-resume" className={linkStyle('/review')}>
            Review My Resume
          </Link>
          <a href="/ai-inter" target="_self" className="block px-3 py-2 rounded hover:text-blue-300">AI Interview</a>
        </nav>
      </div>

      <div className="space-y-4 text-sm font-bold">
        <div className="flex justify-between items-center bg-white/10 px-3 py-2 rounded">
          <span>AI Generations</span>
          <span className="bg-white text-black px-2 py-0.5 rounded text-xs">10</span>
        </div>
        <a href="https://www.youtube.com" target="_self" className="block text-yellow-300 hover:text-yellow-400 px-3">Get Hired Fast</a>
        <a href="https://www.youtube.com" target="_self" className="block px-3">
          <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded text-white">
            Upgrade
          </button>
        </a>
        <a href="https://www.youtube.com" target="_self" className="block px-3 py-2 rounded hover:text-blue-300">Talk to other users</a>
      </div>
    </aside>
  );
}

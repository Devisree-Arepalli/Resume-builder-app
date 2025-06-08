// app/layout.tsx
import React from "react";
import "../globals.css"; // Make sure Tailwind CSS is imported

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-gray-800 text-white">
        <aside className="flex flex-col h-full p-6">
          {/* Logo & CTA */}
          <div className="mb-8">
            <a href="/dashboard" className="text-white text-xl font-bold">
              My Logo
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-y-4">
            <a
              href="/dashboard/resumes"
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              My Dashboard
            </a>
            <a
              href="/dashboard/job-search"
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              Job Search
            </a>
            <a
              href="/dashboard/samples"
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              Sample Library
            </a>
            <a
              href="/dashboard/review"
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              Review My Resume
            </a>
            <a
              href="/dashboard/interviews"
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              AI Interview
            </a>
            <a
              href="https://www.rezi.ai/community"
              target="_blank"
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              Talk to Users
            </a>
          </nav>

          {/* Footer */}
          <div className="mt-auto text-gray-400 text-xs">
            <p>&copy; 2025 My Company</p>
          </div>
        </aside>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
}

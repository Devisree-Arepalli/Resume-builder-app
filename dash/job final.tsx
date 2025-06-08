'use client';

import { useState } from 'react';
import {
  FiMenu,
  FiFileText,
  FiDownload,
  FiCheckCircle,
  FiMessageSquare,
  FiDatabase,
  FiZap,
  FiLock,
} from 'react-icons/fi';
import { FaBriefcase, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const sidebarItems = [
  { icon: <FiMenu />, label: 'Dashboard' },
  { icon: <FiFileText />, label: 'Documents' },
  { icon: <FiDownload />, label: 'Downloads' },
  { icon: <FiCheckCircle />, label: 'Applied' },
  { icon: <FiDatabase />, label: 'Saved Jobs' },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('India');

  return (
    <div className="flex h-screen font-sans overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-gradient-to-b from-indigo-900 to-purple-900 text-white flex flex-col transition-all duration-300
        ${sidebarOpen ? 'w-48' : 'w-16'} md:w-16 md:block`}
      >
        <div className="flex items-center justify-between p-4 md:hidden">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FiMenu />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-center space-y-6 mt-8">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedItem(item.label)}
              className={`flex items-center gap-2 w-full justify-center md:justify-center px-3 py-2 text-lg rounded-md
                ${selectedItem === item.label ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}
              title={item.label}
            >
              {item.icon}
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center mt-auto mb-6 space-y-4">
          <button className="text-yellow-300" title="Upgrade">
            <FiZap />
          </button>
          <FiLock className="text-gray-300" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-4 overflow-y-auto">
        {/* Top bar (visible on mobile) */}
        <div className="flex items-center justify-between md:hidden mb-4">
          <h1 className="text-xl font-bold">{selectedItem}</h1>
          <button
            className="text-gray-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {['All Jobs', 'Saved', 'Applied', 'Interviewing', 'Rejected'].map(
            (tab) => (
              <button
                key={tab}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  tab === 'All Jobs'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {tab} (0)
              </button>
            )
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
          <div className="flex items-center w-full bg-white border rounded px-3 py-2">
            <FaBriefcase className="text-gray-400 mr-2" />
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job title"
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center w-full bg-white border rounded px-3 py-2">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full outline-none"
            />
          </div>

          <button className="flex items-center bg-white border rounded px-4 py-2 font-medium hover:bg-gray-50 transition">
            <FaSearch className="mr-2" />
            Filter
          </button>
        </div>

        {/* Job Table */}
        <div className="mt-6 overflow-x-auto">
          <div className="min-w-full border rounded overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              <div>Title</div>
              <div>Short Description</div>
              <div>Date</div>
            </div>
            <div className="grid grid-cols-3 px-4 py-4 text-sm text-gray-500 text-center">
              <div className="col-span-3">
                Enter a job title and location to start your search.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

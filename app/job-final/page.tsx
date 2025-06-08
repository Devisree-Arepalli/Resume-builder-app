'use client';

import { useState } from 'react';
import {
  FiMenu,
  FiFileText,
  FiDownload,
  FiCheckCircle,
  FiDatabase,
  FiZap,
  FiLock,
  FiSearch,
  FiGrid,
  FiList,
} from 'react-icons/fi';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const jobCategories = [
  'SDE',
  'Data Scientist',
  'Full-stack',
  'Marketing',
  'Business',
];

// Dummy job data for demo
const dummyJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    category: 'SDE',
    location: 'USA',
    description: 'Work on modern React apps.',
    date: '2025-06-01',
  },
  {
    id: 2,
    title: 'Data Scientist',
    category: 'Data Scientist',
    location: 'India',
    description: 'Analyze data and build ML models.',
    date: '2025-05-28',
  },
  {
    id: 3,
    title: 'Full-stack Engineer',
    category: 'Full-stack',
    location: 'Remote',
    description: 'Build end-to-end web applications.',
    date: '2025-06-02',
  },
  {
    id: 4,
    title: 'Marketing Specialist',
    category: 'Marketing',
    location: 'UK',
    description: 'Create marketing campaigns.',
    date: '2025-05-30',
  },
  {
    id: 5,
    title: 'Business Analyst',
    category: 'Business',
    location: 'Canada',
    description: 'Analyze business processes.',
    date: '2025-06-03',
  },
];

export default function Home() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Filter jobs based on filters
  const filteredJobs = dummyJobs.filter((job) => {
    const matchesTitle = jobTitle
      ? job.title.toLowerCase().includes(jobTitle.toLowerCase())
      : true;
    const matchesLocation = location
      ? job.location.toLowerCase().includes(location.toLowerCase())
      : true;
    const matchesCategory = category ? job.category === category : true;
    return matchesTitle && matchesLocation && matchesCategory;
  });

  return (
    <div className="min-h-screen p-4 bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Search</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 max-w-5xl mx-auto mb-6">
        {/* Job Title */}
        <div className="flex items-center flex-1 bg-white border rounded px-3 py-2 shadow-sm">
          <FaBriefcase className="text-gray-400 mr-2" />
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Job title"
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Location */}
        <div className="flex items-center flex-1 bg-white border rounded px-3 py-2 shadow-sm">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (anywhere)"
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 bg-white border rounded px-3 py-2 shadow-sm text-gray-700 cursor-pointer"
        >
          <option value="">All Categories</option>
          {jobCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Filter Button (optional, you could also do real-time filtering) */}
        <button
  onClick={() => {}}
  className="flex items-center rounded px-5 py-2 transition custom-b"
  aria-label="Filter jobs"
>

          <FiSearch className="mr-2" />
          Filter
        </button>
      </div>

      {/* View Toggle */}
      <div className="max-w-5xl mx-auto flex justify-end mb-4 gap-2">
        <button
  aria-label="Grid view"
  className={`p-2 rounded ${
    viewMode === 'grid' ? 'custom-b' : 'custom-b-alt'
  }`}
  onClick={() => setViewMode('grid')}
>

          <FiGrid size={20} />
        </button>
       <button
  aria-label="List view"
  className={`p-2 rounded ${
    viewMode === 'list' ? 'custom-b' : 'custom-b-alt'
  }`}
  onClick={() => setViewMode('list')}
>

          <FiList size={20} />
        </button>
      </div>

      {/* Jobs Results */}
      <div className="max-w-5xl mx-auto">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found matching your criteria.</p>
        ) : viewMode === 'grid' ? (
          // Grid view
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded shadow p-4 flex flex-col justify-between hover:shadow-md transition cursor-pointer"
              >
                <h2 className="font-semibold text-lg mb-1">{job.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{job.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{job.category}</span>
                  <span>{job.location}</span>
                </div>
                <div className="mt-2 text-xs text-gray-400 text-right">
                  Posted on {job.date}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List view
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-md transition cursor-pointer"
              >
                <div>
                  <h2 className="font-semibold text-lg">{job.title}</h2>
                  <p className="text-sm text-gray-600">{job.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500 mt-1">
                    <span>{job.category}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 text-xs text-gray-400 whitespace-nowrap">
                  Posted on {job.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

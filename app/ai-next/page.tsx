'use client';

import { useState } from 'react';

export default function ResumeUploadPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !jobTitle || !jobDescription.trim()) {
      alert('Please fill all fields');
      return;
    }

    // Mock form submission
    console.log({ jobTitle, jobDescription, fileName: file.name });
    alert('Form submitted!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Your Resume</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Job Title */}
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              id="jobTitle"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. Frontend Developer"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Job Description */}
          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
              Job Description
            </label>
            <input
              id="jobDescription"
              type="text"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Brief job description"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume (PDF/DOC)
            </label>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <button
            type="submit"
  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

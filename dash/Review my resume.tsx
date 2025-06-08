'use client';

import { useState, ChangeEvent } from 'react';
import { cn } from '@/lib/utils'; // if you're using a classnames util

export default function ResumeReviewPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [reziFile, setReziFile] = useState<File | null>(null);
  const [notes, setNotes] = useState('');
  const [showReziUpload, setShowReziUpload] = useState(false);
  const [showResumeUpload, setShowResumeUpload] = useState(true);

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setResumeFile(file);
  };

  const handleReziChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setReziFile(file);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-16">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900">
        One Step Away From A Perfect Resume
      </h1>
      <p className="text-gray-700 mb-10 max-w-3xl">
        The Rezi Resume Review is your resume’s last stop before being submitted. Upload your resume for expert feedback.
      </p>

      {/* Upload Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Select Resume For Review *</h2>

        {/* Toggle .rezi section */}
        <div className="mb-4">
          <button
            className="text-sm text-blue-600 underline"
            onClick={() => setShowReziUpload((prev) => !prev)}
          >
            {showReziUpload ? 'Hide' : 'Import from LinkedIn (.rezi file)'}
          </button>
          {showReziUpload && (
            <div className="mt-2">
              <input
                type="file"
                accept=".rezi"
                onChange={handleReziChange}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white rounded file:cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-1">
                Don’t have a .rezi file? Try our <a href="#" className="text-blue-600 font-medium">Chrome Extension</a>.
              </p>
            </div>
          )}
        </div>

        {/* Upload PDF/DOCX */}
        {showResumeUpload && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Upload Existing Resume (PDF/DOCX)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white rounded file:cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">
              This process may take up to 60 seconds. Keep this page open.
            </p>
          </div>
        )}

        {/* Notes Input */}
        <div className="mb-6">
          <label htmlFor="notes" className="block text-sm font-semibold mb-1">
            Notes for reviewer
          </label>
          <input
            id="notes"
            type="text"
            placeholder="Explain anything you'd like us to know"
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-800"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-6">
          <input type="checkbox" id="preserve-format" className="mr-2" />
          <label htmlFor="preserve-format" className="text-sm text-gray-700">Preserve resume formatting</label>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="w-full bg-blue-600 text-white uppercase text-sm font-semibold py-2.5 rounded hover:bg-blue-500 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

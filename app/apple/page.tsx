'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, FileSearch } from 'lucide-react';
import '../globals.css'; // <- relative path to the CSS file

export default function ResumeOptionsPage() {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeWithJD, setResumeWithJD] = useState<File | null>(null);
  const [resumeWithoutJD, setResumeWithoutJD] = useState<File | null>(null);
  const [showSuccessJD, setShowSuccessJD] = useState(false);
  const [showSuccessBasic, setShowSuccessBasic] = useState(false);

  const unifiedButtonClass =
    'w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full transition';

  const handleWithJDSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resumeWithJD && jobDescription.trim()) {
      console.log('Job Description:', jobDescription);
      console.log('Resume File:', resumeWithJD.name);
      setShowSuccessJD(true);
      setTimeout(() => setShowSuccessJD(false), 3000);
    } else {
      alert('Please fill in both the job description and resume.');
    }
  };

  const handleWithoutJDSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resumeWithoutJD) {
      console.log('Resume File:', resumeWithoutJD.name);
      setShowSuccessBasic(true);
      setTimeout(() => setShowSuccessBasic(false), 3000);
    } else {
      alert('Please upload your resume.');
    }
  };

  return (
<main className="min-h-screen bg-gray-50 pt-28 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Choose How You Want to Generate Your Resume
        </h1>
        <p className="text-gray-600">
          Select an option below based on whether you have a job description or just want to enhance your existing resume.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* With Job Description */}
        <Card className="hover:shadow-xl transition duration-300">
          <CardContent className="p-6 flex flex-col h-full justify-between">
            <div>
              <FileSearch className="w-10 h-10 text-indigo-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">With Job Description</h2>
              <p className="text-gray-600 mb-4">
                Use your existing resume and a job description to tailor and optimize your resume for a specific role.
              </p>

              {showSuccessJD && (
                <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-800 rounded-md text-sm">
                  Successfully submitted with job description!
                </div>
              )}

              <form onSubmit={handleWithJDSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description
                  </label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Paste the job description here..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      setResumeWithJD(e.target.files ? e.target.files[0] : null)
                    }
                    className="w-full"
                  />
                </div>

                <button type="submit" className={customb}>
                  Submit
                </button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Without Job Description */}
        <Card className="hover:shadow-xl transition duration-300">
          <CardContent className="p-6 flex flex-col h-full justify-between">
            <div>
              <FileText className="w-10 h-10 text-indigo-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Without Job Description</h2>
              <p className="text-gray-600 mb-4">
                Upload your resume to reformat, improve layout, or enhance readability without tailoring it to a specific job.
              </p>

              {showSuccessBasic && (
                <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-800 rounded-md text-sm">
                  Successfully submitted without job description!
                </div>
              )}

              <form onSubmit={handleWithoutJDSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      setResumeWithoutJD(e.target.files ? e.target.files[0] : null)
                    }
                    className="w-full"
                  />
                </div>

                <button type="submit" className={unifiedButtonClass}>
                  Submit
                </button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

import '../globals.css'; // <- relative path to the CSS file


export default function optimizer() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const jobOptions = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Engineer',
    'DevOps Engineer',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !jobTitle || !jobDescription.trim()) {
      alert('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobTitle', jobTitle);
    formData.append('jobDescription', jobDescription);

    // Mock submit
    console.log('Uploading:', {
      jobTitle,
      jobDescription,
      fileName: file.name,
    });

    alert('Form submitted (mock)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Optimize Your Resume
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div className="space-y-2">
            <Label htmlFor="jobTitle" className="text-base">
              Job Title
            </Label>
            <Select onValueChange={setJobTitle}>
              <SelectTrigger id="jobTitle" className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {jobOptions.map((title) => (
                  <SelectItem key={title} value={title}>
                    {title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Job Description */}
          <div className="space-y-2">
            <Label htmlFor="jobDescription" className="text-base">
              Job Description
            </Label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Briefly describe the job role or expectations..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume" className="text-base">
              Resume (PDF/DOC)
            </Label>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-700"
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="customb">
            Optimize
          </Button>
        </form>
      </div>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ResumesPage() {
  const router = useRouter();

  // Mock state for created resumes
  const [resumes, setResumes] = useState<string[]>([]);

  const handleCreateNew = () => {
    const name = prompt('Enter name for your new resume:');
    if (name && name.trim() !== '') {
      setResumes((prev) => [...prev, name.trim()]);
      router.push('./Resume1'); // Change to your actual create resume path
    }
  };

  const handleUseExisting = () => {
    router.push('./sample-lib'); // Change to your actual existing resume page
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-10">
      <h1 className="text-3xl font-bold text-center">My Resumes</h1>

      {/* Actions */}
      <div className="flex gap-6 flex-wrap justify-center">
        <button
          onClick={handleCreateNew}
          className="bg-green-600 text-white px-6 py-3 rounded-xl transition shadow-md"
        >
          Create New Resume
        </button>

        <button
          onClick={handleUseExisting}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          Use Existing Resume
        </button>
      </div>

      {/* Resume Table */}
      <div className="w-full max-w-md mt-10">
        <table className="w-full text-left border-t border-gray-300">
          <thead>
            <tr>
              <th className="pb-2 text-gray-700">Resume Name</th>
              <th className="pb-2 text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {resumes.length === 0 ? (
              <tr>
                <td colSpan={2} className="py-4 text-center text-gray-500 italic">
                  No resumes found.
                </td>
              </tr>
            ) : (
              resumes.map((name, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-2">{name}</td>
                  <td className="py-2">{new Date().toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

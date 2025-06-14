'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  // Dummy action handlers — replace with actual logic later
  const handleReset = () => {
    alert('Form has been reset!');
  };

  const handleDownload = () => {
    alert('Downloading resume...');
  };

  const handleEdit = () => {
    alert('Edit mode enabled!');
  };

  const handleCancel = () => {
    setShowConfirm(true);
  };

  const confirmCancel = () => {
    setShowConfirm(false);
    router.push('/home');
  };

  return (
    <>
    <header className="border-b bg-white dark:bg-gray-900 shadow-sm w-full z-40 mt-8">

        {/*<header className="border-b bg-white dark:bg-gray-900 shadow-sm fixed top-[0px] left-0 w-full z-50">
         */}<div className="container mx-auto py-4 px-4 md:px-6 flex flex-col gap-4 sm:flex-row items-center justify-between">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-center sm:text-left">
            RESUME
          </h1>

          {/* Buttons container - responsive wrap */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
            {/* AI Assistant */}
            <button
              className="flex items-center gap-2 h-10 px-4 py-2 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => alert('AI Assistant opened!')}
            >
              <svg className="h-4 w-4" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>AI Assistant</span>
            </button>

            {/* Edit */}
            <button
              className="h-10 px-4 py-2 text-sm rounded-md border bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
              onClick={handleEdit}
            >
              Edit
            </button>

            {/* Reset */}
            <button
              className="h-10 px-4 py-2 text-sm rounded-md border bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition"
              onClick={handleReset}
            >
              Reset
            </button>

            {/* Download */}
            <button
              className="h-10 px-4 py-2 text-sm rounded-md border bg-green-100 text-green-700 hover:bg-green-200 transition"
              onClick={handleDownload}
            >
              Download
            </button>

            {/* Cancel */}
            <button
              onClick={handleCancel}
              className="h-10 px-4 py-2 rounded-md text-sm border bg-red-100 text-red-700 hover:bg-red-200 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </header>

      {/* Cancel Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[90%] max-w-sm text-center space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Confirm Cancel</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Are you sure you want to cancel? All unsaved changes will be lost.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                No, go back
              </button>
              <button
                onClick={confirmCancel}
                className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
              >
                Yes, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

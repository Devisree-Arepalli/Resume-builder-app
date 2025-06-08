// /components/CreateResumeModal.tsx
"use client";

import { Dispatch, SetStateAction } from "react";

interface CreateResumeModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function CreateResumeModal({ show, setShow }: CreateResumeModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-pink-300/50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative mx-4">
        <h2 className="text-2xl font-semibold mb-5">Create a Resume</h2>

        <label className="block mb-1 text-sm font-medium">
          Resume name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter here..."
          className="w-full border px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <label className="block mb-1 text-sm font-medium">Experience</label>
        <select className="w-full border px-4 py-2 rounded-md mb-4 focus:outline-none">
          <option>Select...</option>
          <option>0-1 years</option>
          <option>1-3 years</option>
          <option>3+ years</option>
        </select>

        <div className="mb-4">
          <button className="text-pink-600 underline text-sm">
            Import your resume from LinkedIn
          </button>
        </div>

        <div className="bg-pink-100 p-4 rounded-md text-sm text-gray-800 mb-6">
          <strong className="block font-medium mb-1">Target your resume</strong>
          A targeted resume is tailored to a specific job opening. You have a significantly higher chance of getting an interview when you show that you meet the job's requirements.
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShow(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

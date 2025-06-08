'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  const options = [
    'Search for help',
    'Create Resume',
    'Download your resume',
    'Cancel Subscription',
    'Adding a custom section',
    'The team can help if needed'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end">
        {open && (
          <div className="bg-white shadow-xl rounded-2xl p-4 w-72 mb-2 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/natalia-profile.jpg"
                alt="Profile image for Natalia"
                width={40}
                height={40}
                className="rounded-full border"
              />
              <div className="text-sm font-medium text-gray-800">
                Natalia<br /><span className="text-xs text-gray-500">How can we help?</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              {options.map((option, index) => (
                <li key={index} className="hover:bg-gray-100 rounded-md px-2 py-1 cursor-pointer">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={toggleChat}
          aria-label="Help Chat"
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 focus:outline-none transition"
        >
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

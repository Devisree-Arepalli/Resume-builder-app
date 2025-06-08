/*'use client';

import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated login
    router.push('/Dashboard');
  };

  const loginWithGoogle = () => {
    // Simulated Google login
    router.push('/youtube');
  };

  const loginWithFacebook = () => {
    // Simulated Facebook login
    router.push('/youtube');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={loginWithGoogle}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <FaGoogle />
            <span>Google</span>
          </button>
          <button
            onClick={loginWithFacebook}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <FaFacebook />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}
*/

'use client';

import React, { useState } from 'react';
import LoginModal from '@/components/LoginModal';

export default function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal after login
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Pass the isOpen state and onClose handler to LoginModal */}
      <LoginModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

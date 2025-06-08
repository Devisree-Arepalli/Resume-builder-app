'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Add your actual login validation logic here
    if (email && password) {
      console.log('Logging in...');
      // Simulate a successful login and redirect to the dashboard
      router.push('./Dashboard'); // Redirect to dashboard after successful login
      onClose(); // Close the modal
    } else {
      alert('Please enter valid credentials');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign in to your account</h2>
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between items-center mb-4">
          <label>
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 text-sm">Forgot your password?</a>
        </div>
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded">Sign In</button>
        <p className="text-center mt-4 text-sm">Or continue with</p>
        <div className="flex justify-center gap-4 mt-2">
          <button className="border rounded px-4 py-2">Google</button>
          <button className="border rounded px-4 py-2">Facebook</button>
        </div>
        <button onClick={onClose} className="mt-4 text-sm text-gray-500 block mx-auto">Close</button>
      </div>
    </div>
  );
};

export default LoginModal;

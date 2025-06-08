// app/login-new/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('loggedIn', 'true');
      toast.success('Successfully logged in!');
      router.push('/home');
    } else {
      toast.error('Please enter email and password.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex justify-center items-center px-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-6">Welcome Back!</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-pink-500"
              />
              Remember me
            </label>
            <a href="#" className="text-pink-600 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg text-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full justify-center hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            Google
          </button>
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full justify-center hover:bg-gray-100 transition"
          >
            <FaFacebook className="text-xl text-blue-600" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

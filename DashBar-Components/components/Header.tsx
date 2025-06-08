import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Next.js App</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-lg hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="text-lg hover:text-gray-400">About</a></li>
            <li><a href="/contact" className="text-lg hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

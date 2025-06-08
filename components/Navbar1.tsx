'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbarb = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex justify-between items-center h-10">
        <Link href="/" className="flex items-center space-x-1">
          <img
            src="https://cdn.prod.website-files.com/62f0854c1cef28185535ab61/62f0a15cf4eb678703006e9b_rezi.svg"
            alt="Logo"
            className="h-5 w-auto grayscale"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-3 text-xs font-medium">
          <Link href="/ai-resume-builder" className="hover:text-blue-600">AI Resume Builder</Link>

          {/* Resume Tools Dropdown */}
          <DropdownMenu
            title="Resume Tools"
            open={openDropdown === 'resume'}
            onClick={() => toggleDropdown('resume')}
            items={[
              { href: '/ai-resume-editor', label: 'AI Resume Editor', description: 'Improve bullet points instantly', badge: 'New' },
              { href: '/ai-resume-summary-generator', label: 'Summary Generator', description: 'Generate resume summary' },
              { href: '/keyword-scanner', label: 'Keyword Scanner', description: 'Optimize with keywords' },
              { href: '/resume-checker', label: 'ATS Checker', description: 'Check content best practices' }
            ]}
          />

          {/* Examples & Templates Dropdown */}
          <DropdownMenu
            title="Examples & Templates"
            open={openDropdown === 'examples'}
            onClick={() => toggleDropdown('examples')}
            items={[
              { href: '/resume-templates', label: 'Resume Templates', description: 'ATS Optimized' },
              { href: '/resume-examples', label: 'Resume Examples', description: 'Cloneable resumes' },
              { href: '/cover-letter-templates', label: 'Cover Letter Examples', description: 'Cloneable cover letters' },
              { href: '/resignation-letter-templates', label: 'Resignation Letter Examples', description: 'Prewritten resignations' }
            ]}
          />

          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/login" className="hover:text-blue-600">Login</Link>
          <Link href="/register" className="hover:text-blue-600">Register for Free</Link>
        </nav>
      </div>
    </header>
  );
};

const DropdownMenu = ({
  title,
  open,
  onClick,
  items,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  items: { href: string; label: string; description?: string; badge?: string }[];
}) => (
  <div className="relative group">
    <button onClick={onClick} className="flex items-center hover:text-blue-600">
      {title}
      <ChevronDown className="ml-1 h-3 w-3" />
    </button>
    {open && (
      <div className="absolute top-full left-0 bg-white shadow-lg border rounded mt-1 w-56 z-10 text-xs">
        <ul className="py-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block px-3 py-1 hover:bg-gray-100">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-green-100 text-green-800 px-1 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-[10px] text-gray-500">{item.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default Navbarb;

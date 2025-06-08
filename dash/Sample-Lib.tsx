'use client';

import { useState } from 'react';

const Page = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="p-4">
      {/* 🔍 Search Box */}
      <form className="relative flex w-full flex-row items-center justify-start self-stretch mb-6">
        <div className="flex w-full flex-col gap-1">
          <div className="w-full h-10 sm:h-12 flex items-center border-2 rounded border-input-stroke px-3 py-1 bg-input-bg gap-1 transition-all duration-200">
            <div className="flex h-6 w-6 items-center justify-center p-0">
              <i className="fad fa-magnifying-glass" aria-hidden="true"></i>
            </div>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search resume and cover letter samples by role or skill"
              className="bg-input-bg text-gray-900 h-6 w-full border-0 px-1 text-base font-semibold leading-6 placeholder:text-gray-300 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </form>

      {/* 📁 Navigation Bar */}
      <div className="hidden w-full sm:flex">
        <nav className="flex content-center gap-2 self-stretch flex-wrap min-h-[32px]">
          {[
            'Pro', 'Business', 'Programming', 'Engineering', 'Marketing',
            'Design', 'Student', 'Medical', 'Finance', 'Education', 'Legal', 'Other',
          ].map((label, idx) => (
            <a key={idx} href={`/dashboard/samples/${label.toLowerCase()}`}>
              <div className="rounded-md bg-tab-normal hover:bg-tab-hover focus:bg-tab-focus flex items-center h-6 px-2 text-xs cursor-pointer text-gray-900 relative font-semibold font-sans-pro uppercase duration-200 whitespace-nowrap tracking-[.12px] bg-grey-100 data-[active=true]:bg-rezi-blue-600 data-[active=true]:text-white">
                <span className="uppercase text-xs font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                  {label}
                </span>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Page;

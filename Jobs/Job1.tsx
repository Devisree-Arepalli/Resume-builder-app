'use client';

import { useState } from 'react';

const JobTabs = () => {
  const [activeTab, setActiveTab] = useState('ALL JOBS');

  const tabs = [
    { name: 'ALL JOBS', count: 0 },
    { name: 'SAVED', count: 0 },
    { name: 'APPLIED', count: 0 },
    { name: 'INTERVIEWING', count: 0 },
    { name: 'REJECTED', count: 0 },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="relative flex w-full items-center gap-1 lg:max-w-screen-lg xl:max-w-screen-xl">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className="relative inline-flex h-fit items-center gap-1 whitespace-nowrap rounded-md border border-surface-2-stroke bg-surface-1 px-1 py-1"
        >
          <div
            onClick={() => handleTabClick(tab.name)}
            className={`rounded-md inline-flex items-center gap-1 ${
              tab.name === activeTab
                ? 'text-neutral-0 bg-rezi-blue-600 cursor-pointer'
                : 'hover:bg-tab-hover hover:text-gray-900 cursor-pointer'
            } text-xs leading-4 h-6 px-2`}
            role="tab"
            aria-disabled="false"
          >
            <div className="w-full overflow-hidden">
              <p className="font-semibold uppercase truncate" aria-disabled="false">
                {tab.name}
              </p>
            </div>
          </div>
          <span
            className={`${
              tab.name === activeTab ? 'text-neutral-0' : 'text-gray-500'
            }`}
          >
            ({tab.count})
          </span>
        </div>
      ))}
    </div>
  );
};

export default JobTabs;

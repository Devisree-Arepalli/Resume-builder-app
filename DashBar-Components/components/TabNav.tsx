import React from 'react';

const TabNav: React.FC = () => {
  return (
    <div className="hidden w-full flex-row items-center justify-between self-stretch sm:flex">
      <div className="relative inline-flex items-center whitespace-nowrap rounded-md border border-surface-2-stroke w-fit h-fit bg-surface-1 px-1 py-1 gap-1 my-6">
        <div id="unsafe-nav-0" className="rounded-md inline-flex items-center gap-1 disabled:bg-input-bg-disabled group relative text-xs leading-4 h-6 px-2 bg-rezi-blue-600 text-neutral-0 cursor-pointer" role="tab" aria-disabled="false">
          <div className="w-full overflow-hidden">
            <p className="font-semibold uppercase truncate" aria-disabled="false">Resumes</p>
          </div>
        </div>
        <div id="unsafe-nav-1" className="rounded-md inline-flex items-center gap-1 disabled:bg-input-bg-disabled group relative text-xs leading-4 h-6 px-2 focus:bg-tab-focus hover:bg-tab-hover hover:text-gray-900 cursor-pointer" role="tab" aria-disabled="false">
          <div className="w-full overflow-hidden">
            <p className="font-semibold uppercase truncate" aria-disabled="false">Cover Letters</p>
          </div>
        </div>
        <div id="unsafe-nav-2" className="rounded-md inline-flex items-center gap-1 disabled:bg-input-bg-disabled group relative text-xs leading-4 h-6 px-2 focus:bg-tab-focus hover:bg-tab-hover hover:text-gray-900 cursor-pointer" role="tab" aria-disabled="false">
          <div className="w-full overflow-hidden">
            <p className="font-semibold uppercase truncate" aria-disabled="false">Resignation Letters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabNav;

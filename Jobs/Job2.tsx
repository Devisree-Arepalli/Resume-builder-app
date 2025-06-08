// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('US');

  const handleFilterClick = () => {
    // Here, you can implement the filter logic
    console.log("Filtering with", { jobTitle, location });
  };

  return (
    <div className="px-4 md:px-6 lg:px-0">
      <div data-test-id="job-search-search-page" className="mb-6 w-full xl:max-w-screen-xl">
        <section data-test-id="job-search__search-filter" className="mb-4 flex flex-col gap-2 sm:mb-6">
          <div className="flex flex-row">
            <div className="bg-surface-2 rounded-lg border border-surface-2-stroke flex w-full flex-col">
              <div className="w-full">
                <div className="flex flex-col gap-4 p-4 sm:flex-row">
                  {/* Job Title Input */}
                  <div className="relative w-full sm:w-1/2">
                    <div className="flex w-full flex-col gap-1">
                      <div className="w-full h-10 text-base flex w-full flex-row items-center self-stretch border-2 rounded group-[.company-found]:rounded-b-none rounded transition-all duration-200 group-[.company-found]:border-purple-200 border-input-stroke px-3 py-1 focus:ring-0 bg-input-bg gap-1">
                        <div className="flex h-6 w-6 content-center items-center gap-[-1.5rem] p-0">
                          <i className="fad fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <input
                          type="text"
                          name="title"
                          placeholder="Job title"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          className="bg-input-bg text-gray-900 h-6 w-full !border-0 px-1 text-base font-semibold leading-6 placeholder:text-gray-300 text-ellipsis focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Input */}
                  <div className="relative w-full sm:w-1/2">
                    <div className="flex w-full flex-col gap-1">
                      <div className="w-full h-10 text-base flex w-full flex-row items-center self-stretch border-2 rounded group-[.company-found]:rounded-b-none rounded transition-all duration-200 group-[.company-found]:border-purple-200 border-input-stroke px-3 py-1 focus:ring-0 bg-input-bg gap-1">
                        <div className="flex h-6 w-6 content-center items-center gap-[-1.5rem] p-0">
                          <i className="fad fa-location-dot" aria-hidden="true"></i>
                        </div>
                        <input
                          type="text"
                          name="location"
                          placeholder="Location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="bg-input-bg text-gray-900 h-6 w-full !border-0 px-1 text-base font-semibold leading-6 placeholder:text-gray-300 text-ellipsis focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Filter Button */}
                  <button
                    type="button"
                    onClick={handleFilterClick}
                    className="relative flex items-center justify-center font-bold uppercase focus:ring-0 focus:outline-none transition transition-200 cursor-pointer disabled:bg-input-bg-disabled disabled:text-input-disabled disabled:cursor-not-allowed bg-surface-2 disabled:text-input-disabled disabled:bg-transparent disabled:border-input-disabled disabled:border text-gray-900 border-solid border border-button-secondary-stroke focus:bg-button-secondary-hover active:bg-button-secondary-active hover:bg-button-secondary-hover px-3 py-2.5 h-10 leading-5 rounded-md text-[14px]"
                  >
                    <i className="fad fa-sliders !flex items-center justify-center !leading-[0] flex-none text-sm w-5 h-5 mr-1" aria-hidden="true"></i>
                    <span className="px-1">FILTER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Search Results */}
        <section data-test-id="job-search__search-results">
          <div role="table" aria-label="job search table">
            <div role="row" className="hidden flex-row gap-4 rounded-tl-md rounded-tr-md border-[1px] border-b-0 border-surface-2-stroke bg-surface-2 px-4 lg:flex">
              <div role="columnheader" className="flex h-12 flex-1 items-center text-base font-normal leading-6 text-gray-500">Title</div>
              <div role="columnheader" className="flex h-12 flex-1 items-center text-base font-normal leading-6 text-gray-500">Short Description</div>
              <div role="columnheader" className="flex h-12 items-center text-base font-normal leading-6 text-gray-500" style={{ minWidth: "100px" }}>Date</div>
              <div role="columnheader" className="flex h-12" style={{ minWidth: "185px" }}></div>
            </div>

            <div role="rowgroup" className="relative rounded-b-md border-0 border-surface-2-stroke lg:border-[1px]">
              <div className="rounded-md border-[1px] border-surface-2-stroke bg-surface-2 px-2 py-6 text-center text-base font-normal leading-6 text-gray-500 lg:rounded-b-md lg:border-0 lg:py-3">
                Enter a job title and location to start your search.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

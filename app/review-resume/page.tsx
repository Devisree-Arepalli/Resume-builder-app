import React from 'react';
import Sidebar from '@/components/Sidebar';
const ResumeReviewPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Sidebar />
      <div className="relative flex flex-col gap-6 w-full px-4 md:px-6 lg:px-8 xl:max-w-[1248px] xl:px-8 ml-[300px]">
        <main className="sm:h-full lg:h-auto w-full">
          <div className="relative inline-flex items-center whitespace-nowrap rounded-md border border-surface-2-stroke w-fit h-fit bg-surface-1 px-1 py-1 gap-1 my-6">
            <div className="rounded-md inline-flex items-center gap-1 disabled:bg-input-bg-disabled group relative text-xs leading-4 h-6 px-2 bg-rezi-blue-600 text-neutral-0 cursor-pointer" role="tab" aria-disabled="false">
              <p className="font-semibold uppercase truncate">Review Options</p>
            </div>
            <div className="rounded-md inline-flex items-center gap-1 disabled:bg-input-bg-disabled group relative text-xs leading-4 h-6 px-2 focus:bg-tab-focus hover:bg-tab-hover hover:text-gray-900 cursor-pointer" role="tab" aria-disabled="false">
              <p className="font-semibold uppercase truncate">My Reviews</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 sm:gap-6">
            <div className="text-xl sm:text-2xl lg:text-3xl leading-7 sm:leading-8 lg:leading-9 font-semibold text-gray-900 text-center">
              One Step Away From A Perfect Resume
            </div>
            <div className="text-base leading-6 font-normal text-gray-900 text-center">
              The Rezi Resume Review is your resume’s last stop before being submitted for any job application. Often, we see talented job seekers create their resume with mistakes that might ruin an otherwise perfect resume. With the Rezi Resume Review, we will review your indicated resume directly in your dashboard.
            </div>

            <div className="w-full pb-10">
              <div className="flex flex-col items-center justify-center gap-6 sm:gap-6 sm:px-0 md:w-[49.125rem] lg:w-[52rem] xl:w-[62rem] 2xl:w-[72rem] mx-auto">
                <div className="bg-surface-2 rounded-lg border border-surface-2-stroke p-4 lg:p-6 w-full sm:w-full md:w-[23.5625rem] lg:w-[25rem] xl:w-[25rem] xl:max-w-[34rem] 2xl:w-[35rem]">
                  <div className="flex flex-col items-start gap-4">
                    <label htmlFor="resume-upload" className="text-lg font-semibold text-gray-900">Select Resume For Review *</label>
                    <div className="flex flex-col gap-2">
                      <button className="text-sm text-gray-900">Import your resume from Linkedin</button>
                      <button className="text-sm text-gray-900">Import your existing resume</button>
                    </div>

                    <div className="flex flex-col gap-2">
                      <input type="file" id="resume-upload" className="h-full w-full cursor-pointer bg-surface-2 border-2 border-input-stroke rounded px-3 py-1" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col pt-10 gap-2 self-stretch items-center w-full">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl leading-7 sm:leading-8 font-semibold text-center">
                    Frequently Asked Questions (FAQ)
                  </h2>

                  <div className="flex w-full py-4 px-0 justify-center items-start flex-col border-b border-surface-2-stroke">
                    <div className="flex w-full flex-row items-center text-lg leading-7 font-semibold justify-between gap-x-4 cursor-pointer">
                      Why can't I see any changes? 
                    </div>
                    <div className="text-base leading-6 font-normal opacity-0">
                      <p className="py-3">While some of the resume edits may not be immediately visible...</p>
                    </div>
                  </div>

                  {/* Repeat FAQ sections as needed */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResumeReviewPage;

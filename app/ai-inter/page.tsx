import React from 'react';
import ResumeUploadPage from '../ai-next/page';
//import Sidebar from '@/components/Sidebar-Inter';
const YourComponent = () => {
  return (
    <div className="flex justify-center px-0 pt-16 lg:pt-0 lg:px-16">
    
      <div
        className="relative flex w-[100vw] flex-col gap-6 flex min-h-[calc(100dvh_-_64px)] w-full flex-col justify-start gap-4 px-4 md:px-6 lg:min-h-[calc(100dvh_-_16px)] lg:max-w-[824px] lg:px-6 xl1:max-w-[968px] xl:max-w-[1248px] xl:px-8"
        id="layout_full_screen"
      >
        <main className="sm:h-full lg:h-auto">
          <div className="flex flex-col relative h-screen">
            <div className="flex justify-between items-center py-6 w-full">
              <h1 className="transform translate-x-[200px]">AI Interview</h1>
             <button
  type="button"
  data-busy="false"
  className="relative flex items-center justify-center font-bold uppercase focus:ring-0 focus:outline-none transition transition-200 disabled:border-0 disabled:cursor-not-allowed disabled:custom-disabled custom-b px-2 py-1 min-h-8 leading-4 rounded-md text-xs transform translate-x-[30px]"
>

                <span className="px-1">Start AI Interview</span>
                <div className="normal-case pointer-events-none h-fit z-50 bg-surface-3 px-2 py-1 text-sm font-normal leading-5 text-surface-3-label transition-opacity rounded before:border-surface-3 before:absolute before:border-[6px] before:border-l-transparent before:border-r-transparent before:border-t-transparent before:left-1/2 before:-translate-x-1/2 before:-top-[12px] w-fit min-w-fit whitespace-pre opacity-0 fixed"></div>
              </button>
            </div>
            <div className="h-full">
              <div className="flex justify-center items-center h-full">
                <div className="flex justify-center flex-col items-center max-w-[700px] text-center -mt-20">
                  <svg
                    width="200"
                    height="144"
                    viewBox="0 0 200 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3424_7600)">
                      <path
                        d="M102.183 139.636C140.771 139.636 172.052 108.378 172.052 69.8182C172.052 31.2587 140.771 0 102.183 0C63.5958 0 32.3144 31.2587 32.3144 69.8182C32.3144 108.378 63.5958 139.636 102.183 139.636Z"
                        fill="#E5E7EB"
                      ></path>
                      <path
                        d="M28.821 24.4364C32.6797 24.4364 35.8079 21.3105 35.8079 17.4545C35.8079 13.5986 32.6797 10.4727 28.821 10.4727C24.9622 10.4727 21.8341 13.5986 21.8341 17.4545C21.8341 21.3105 24.9622 24.4364 28.821 24.4364Z"
                        fill="#F3F4F6"
                      ></path>
                      <path
                        d="M179.039 115.2C181.933 115.2 184.279 112.856 184.279 109.964C184.279 107.072 181.933 104.727 179.039 104.727C176.145 104.727 173.799 107.072 173.799 109.964C173.799 112.856 176.145 115.2 179.039 115.2Z"
                        fill="#F3F4F6"
                      ></path>
                      <path
                        d="M27.9476 129.164C32.771 129.164 36.6812 125.256 36.6812 120.436C36.6812 115.616 32.771 111.709 27.9476 111.709C23.1242 111.709 19.214 115.616 19.214 120.436C19.214 125.256 23.1242 129.164 27.9476 129.164Z"
                        fill="#F3F4F6"
                      ></path>
                      <path
                        d="M189.52 41.8909C194.343 41.8909 198.253 37.9836 198.253 33.1636C198.253 28.3437 194.343 24.4364 189.52 24.4364C184.696 24.4364 180.786 28.3437 180.786 33.1636C180.786 37.9836 184.696 41.8909 189.52 41.8909Z"
                        fill="#F3F4F6"
                      ></path>
                      <path
                        d="M172.926 15.7091C176.302 15.7091 179.039 12.974 179.039 9.6C179.039 6.22604 176.302 3.49091 172.926 3.49091C169.549 3.49091 166.812 6.22604 166.812 9.6C166.812 12.974 169.549 15.7091 172.926 15.7091Z"
                        fill="#F3F4F6"
                      ></path>
                      <g filter="url(#filter0_dd_3424_7600)">
                        <path
                          d="M107.7 30.625C107.7 27.5137 105.153 25 102 25C98.8472 25 96.3 27.5137 96.3 30.625V109.375C96.3 112.486 98.8472 115 102 115C105.153 115 107.7 112.486 107.7 109.375V30.625ZM141.9 41.875C141.9 38.7637 139.353 36.25 136.2 36.25C133.047 36.25 130.5 38.7637 130.5 41.875V98.125C130.5 101.236 133.047 103.75 136.2 103.75C139.353 103.75 141.9 101.236 141.9 98.125V41.875ZM90.6 47.5C90.6 44.3887 88.0528 41.875 84.9 41.875C81.7472 41.875 79.2 44.3887 79.2 47.5V92.5C79.2 95.6113 81.7472 98.125 84.9 98.125C88.0528 98.125 90.6 95.6113 90.6 92.5V47.5ZM124.8 53.125C124.8 50.0137 122.253 47.5 119.1 47.5C115.947 47.5 113.4 50.0137 113.4 53.125V86.875C113.4 89.9863 115.947 92.5 119.1 92.5C122.253 92.5 124.8 89.9863 124.8 86.875V53.125ZM73.5 64.375C73.5 61.2637 70.9528 58.75 67.8 58.75C64.6472 58.75 62.1 61.2637 62.1 64.375V75.625C62.1 78.7363 64.6472 81.25 67.8 81.25C70.9528 81.25 73.5 78.7363 73.5 75.625V64.375ZM45 70C45 71.4918 45.6005 72.9226 46.6695 73.9775C47.7384 75.0324 49.1883 75.625 50.7 75.625C52.2117 75.625 53.6616 75.0324 54.7305 73.9775C55.7995 72.9226 56.4 71.4918 56.4 70C56.4 68.5082 55.7995 67.0774 54.7305 66.0225C53.6616 64.9676 52.2117 64.375 50.7 64.375C49.1883 64.375 47.7384 64.9676 46.6695 66.0225C45.6005 67.0774 45 68.5082 45 70ZM147.6 70C147.6 71.4918 148.201 72.9226 149.269 73.9775C150.338 75.0324 151.788 75.625 153.3 75.625C154.812 75.625 156.262 75.0324 157.331 73.9775C158.399 72.9226 159 71.4918 159 70C159 68.5082 158.399 67.0774 157.331 66.0225C156.262 64.9676 154.812 64.375 153.3 64.375C151.788 64.375 150.338 64.9676 149.269 66.0225C148.201 67.0774 147.6 68.5082 147.6 70Z"
                          fill="url(#paint0_linear_3424_7600)"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_3424_7600"
                        x="21"
                        y="21"
                        width="162"
                        height="138"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="8"></feOffset>
                        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0"
                        ></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3424_7600"></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="20"></feOffset>
                        <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                        ></feColorMatrix>
                        <feBlend mode="normal" in2="effect1_dropShadow_3424_7600" result="effect2_dropShadow_3424_7600"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3424_7600" result="shape"></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_3424_7600"
                        x1="48.9702"
                        y1="113.935"
                        x2="45.6755"
                        y2="31.6119"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E2E8F0"></stop>
                        <stop offset="1" stopColor="#F8FAFC"></stop>
                      </linearGradient>
                      <clipPath id="clip0_3424_7600">
                        <rect width="200" height="144" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <h1 className="mt-8 transform translate-x-[30px]">Get started with AI interview</h1>
                  <p className="py-6">
                    AI Interview is a tool for practicing job interview questions using AI technology. It helps you refine your answers and gain confidence for real interviews.
                  </p>
                  <div className="-ml-1 flex">
                    <a
                      rel="noopener noreferrer"
                      href="/ai-next"
                      target="_blank"
                    >
                    {/*} <button
  type="button"
  data-busy="false"
  className="relative flex items-center justify-center font-bold uppercase focus:ring-0 focus:outline-none transition transition-200 border-0 px-2 py-1 min-h-8 leading-4 rounded-md text-xs transform translate-x-[30px] custom-b disabled:custom-disabled"
>

                        <span className="px-1">Start AI Interview</span>
                        <div className="normal-case pointer-events-none h-fit z-50 bg-surface-3 px-2 py-1 text-sm font-normal leading-5 text-surface-3-label transition-opacity rounded before:border-surface-3 before:absolute before:border-[6px] before:border-l-transparent before:border-r-transparent before:border-t-transparent before:left-1/2 before:-translate-x-1/2 before:-top-[12px] w-fit min-w-fit whitespace-pre opacity-0 fixed"></div>
                      </button>
                      */}
                    </a>
                  </div>
                </div>
<ResumeUploadPage/>              </div>
            
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};


export default YourComponent;

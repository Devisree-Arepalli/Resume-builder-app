npm install @headlessui/react

'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function UpgradeModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-sm"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 backdrop-blur-sm"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="bg-white p-6">
                  <Dialog.Title className="text-lg font-bold text-gray-900">
                    Upgrade to Pro
                  </Dialog.Title>
                  <p className="mt-1 text-sm text-gray-600">
                    Upgrade your plan to get access to unlimited AI Generations.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-gray-800">
                    <li>✅ Unlimited AI Writer Use</li>
                    <li>✅ Unlimited Resumes, Cover Letters, Resignation Letters</li>
                    <li>✅ Unlimited Keyword Targeting, Content Analysis</li>
                    <li className="text-gray-400">✅ 1 Free Monthly Resume Review <span className="text-sm text-gray-500">(unavailable on Pro Lifetime)</span></li>
                    <li>✅ All other features</li>
                  </ul>

                  <div className="mt-6 space-y-2">
                    <div className="border rounded p-3 flex justify-between items-center cursor-pointer border-blue-500 bg-blue-50">
                      <div>Monthly</div>
                      <div className="font-bold">$29.00/mo</div>
                    </div>
                    <div className="border rounded p-3 flex justify-between items-center cursor-pointer">
                      <div className="flex items-center">
                        Quarterly
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">SAVE 34%</span>
                      </div>
                      <div className="font-bold">$19.00/mo</div>
                    </div>
                    <div className="border rounded p-3 flex justify-between items-center cursor-pointer">
                      <div>Lifetime</div>
                      <div className="font-bold">$149.00/once</div>
                    </div>
                  </div>

                  <button
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={onClose}
                  >
                    Continue
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

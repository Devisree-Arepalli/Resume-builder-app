'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function FeaturesSection1() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const templates = [
    {
      title: "IIM Template",
      thumb: "/thumbs/iim.png",
      preview: "/previews/iim-full.png",
    },
    {
      title: "IIT Template",
      thumb: "/thumbs/iit.png",
      preview: "/previews/iit-full.png",
    },
    {
      title: "SDE Template",
      thumb: "/thumbs/sde.png",
      preview: "/previews/sde-full.png",
    },
  ];

  const closeModal = () => setSelected(null);

  return (
    <section className="w-full px-4 sm:px-10 lg:px-20 py-20 bg-gray-[#d3d3d3] text-black">
      <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Preview Templates</h3>

   <div className="flex overflow-x-auto space-x-6 px-4 py-4 scrollbar-hide">
        {templates.map((tpl, index) => (
          <div
            key={index}
            className="border border-[#cccccc] rounded-xl p-6 shadow-md bg-[#cccccc] flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={tpl.thumb}
              alt={`${tpl.title} Thumbnail`}
              className="w-44 h-56 object-cover rounded-md cursor-pointer"
              onClick={() => setSelected(tpl.preview)}
            />
            <h4 className="text-xl font-semibold text-black">{tpl.title}</h4>
            <p className="text-sm text-gray-800 text-center">
              Clean & optimized design for top-tier job applications.
            </p>
            <button
              onClick={() => router.push('/sample-lib')}
              className="mt-2 px-5 py-2 rounded bg-[#7c1c2b] text-white font-medium hover:bg-[#661321] transition"
            >
              Use Template
            </button>
          </div>
        ))}
      </div>

      {/* Arrow Button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => router.push('/sample-lib')}
          className="w-16 h-16 rounded-full bg-[#7c1c2b] text-white flex items-center justify-center hover:bg-[#661321] transition animate-pulse"
          aria-label="Go to all templates"
        >
          <ArrowRight size={30} />
        </button>
      </div>

      {/* Preview Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-6xl w-full mx-6 p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-3xl font-bold"
              aria-label="Close preview"
            >
              &times;
            </button>
            <img
              src={selected}
              alt="Selected Template Preview"
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

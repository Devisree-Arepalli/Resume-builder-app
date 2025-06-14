'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function FeaturesSection1() {
  const [selected, setSelected] = useState<null | {
    title: string;
    preview: string;
  }>(null);

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

    {
        title: "Marketing Template",
      thumb: "/thumbs/market.png",
      preview: "/previews/market-full.png",
    },
  ];

  const closeModal = () => setSelected(null);

  const handleUseTemplate = () => {
     router.push('./apple'); // change this to your route
// window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // your YouTube link
  };

  return (
    <section className="w-full px-4 sm:px-10 lg:px-20 py-20 bg-[#d3d3d3] text-black relative">
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
              className="w-44 h-56 object-cover rounded-md"
            />
            <h4 className="text-xl font-semibold text-black">{tpl.title}</h4>
            <p className="text-sm text-gray-800 text-center">
              Clean & optimized design for top-tier job applications.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={() => setSelected({ title: tpl.title, preview: tpl.preview })}
                className="px-4 py-2 rounded-full customb text-white font-medium hover:bg-[#661321] transition"
              >
                Preview Template
              </button>
              <button
                onClick={handleUseTemplate}
                className="px-4 py-2 rounded-full bg-green-400 text-white font-medium hover:bg-[#661321] transition"
              >
                Use This Template
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Navigation Button */}
      

      {/* Preview Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={closeModal}
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
            <h4 className="text-2xl font-bold mb-4 text-center">{selected.title}</h4>
            <img
              src={selected.preview}
              alt="Template Preview"
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <div className="mt-6 flex justify-center">
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-full bg-gray-700 text-white font-medium hover:bg-gray-900 transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

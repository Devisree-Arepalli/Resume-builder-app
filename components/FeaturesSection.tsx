/*export default function FeaturesSection() {
    const templates = [
      { title: 'IIT Template', desc: 'For technical roles and engineers' },
      { title: 'IIM Template', desc: 'For business and management roles' },
      { title: 'SDE Template', desc: 'Highlight projects and coding skills' },
      { title: 'Marketing Template', desc: 'Showcase creativity and campaigns' },
    ];
  
    return (
      <section className="px-6 py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Specialized Resume Templates</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {templates.map((tpl, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold mb-2">{tpl.title}</h4>
              <p className="text-gray-600">{tpl.desc}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Use Template</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  */

  /*export default function FeaturesSection() {
  const templates = [
    { title: 'IIT Template', desc: 'For technical roles and engineers' },
    { title: 'IIM Template', desc: 'For business and management roles' },
    { title: 'SDE Template', desc: 'Highlight projects and coding skills' },
    { title: 'Marketing Template', desc: 'Showcase creativity and campaigns' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6 py-16">
      <h3 className="text-3xl font-bold mb-10">Specialized Resume Templates</h3>
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        {templates.map((tpl, i) => (
          <div key={i} className="border rounded-lg p-6 shadow-sm w-full">
            <h4 className="text-xl font-semibold mb-2">{tpl.title}</h4>
            <p className="text-gray-600">{tpl.desc}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
*/


'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function FeaturesSection() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const templates = [
    {
      title: "IIT Template",
      thumb: "/thumbs/iit.png",
      preview: "/previews/iit-full.png",
    },
    {
      title: "IIM Template",
      thumb: "/thumbs/iim.png",
      preview: "/previews/iim-full.png",
    },
    {
      title: "SDE Template",
      thumb: "/thumbs/sde.png",
      preview: "/previews/sde-full.png",
    },
    {
      title: "Marketing Template",
      thumb: "/thumbs/marketing.png",
      preview: "/previews/marketing-full.png",
    },
  ];

  return (
    <section className="px-6 py-16 bg-white text-center max-w-xl mx-auto">
      <h3 className="text-3xl font-bold mb-10">Preview Templates</h3>

      <div className="flex flex-col space-y-8 mb-10">
        {templates.map((tpl, i) => (
          <div
            key={i}
            className="border rounded-lg p-6 shadow-sm flex flex-col items-center space-y-4"
          >
            <img
              src={tpl.thumb}
              alt={`${tpl.title} Thumbnail`}
              className="w-32 h-40 object-cover cursor-pointer rounded"
              onClick={() => setSelected(tpl.preview)}
            />
            <h4 className="text-xl font-semibold">{tpl.title}</h4>
          </div>
        ))}
      </div>

      

      {/* Preview of selected template */}
      {selected && (
        <div className="mt-12 flex justify-center">
          <img
            src={selected}
            alt="Selected Template Preview"
            className="max-w-2xl w-full rounded-lg shadow-lg border"
          />
        </div>
      )}
    </section>
  );
}

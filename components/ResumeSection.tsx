// app/components/ResumeSection.tsx

import React from 'react';

const ResumeSection: React.FC = () => {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-2">
            <div className="font-semibold text-primary-600">
              The smartest AI for resume & cover letter writing
            </div>
          </div>
          <h2 className="text-3xl text-gray-100 font-bold">
            Resume + cover letter ready in 5 minutes. <span className="highlight">Perfectly optimized.</span>
          </h2>
        </div>
      </div>
  
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-gray-25">
          No job interview callbacks? Maybe your resume isn’t up to par. Let Rezi help. Our AI resume maker follows best practices
          and understands what kind of skills and experience employers need, so it can help you write an amazing resume in minutes.
        </p>
      </div>
    </section>
  );
};

export default ResumeSection;

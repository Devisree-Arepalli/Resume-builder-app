'use client';

import { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';

export default function ResumeBuilder() {
  const [showModal, setShowModal] = useState(false);
  const [educationList, setEducationList] = useState<any[]>([]);
  const [experienceList, setExperienceList] = useState<any[]>([]);
  const [skillsList, setSkillsList] = useState<string[]>([]);
  const [projectsList, setProjectsList] = useState<any[]>([]);
  const [certificationsList, setCertificationsList] = useState<any[]>([]);
  const [urlsList, setUrlsList] = useState<any[]>([]);

  const handleAddEducation = () => setEducationList([...educationList, {
    institution: '', degree: '', field: '', gpa: '', startDate: '', endDate: '', location: ''
  }]);

  const handleAddExperience = () => setExperienceList([...experienceList, {
    company: '', title: '', location: '', startDate: '', endDate: '', description: ''
  }]);

  const handleAddSkill = () => setSkillsList([...skillsList, '']);

  const handleAddProject = () => setProjectsList([...projectsList, {
    title: '', tech: '', description: '', link: ''
  }]);

  const handleAddCertification = () => setCertificationsList([...certificationsList, {
    name: '', issuer: '', date: '', link: ''
  }]);

  const handleAddUrl = () => setUrlsList([...urlsList, {
    label: '', url: ''
  }]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition text-lg"
      >
        Create Resume
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-6xl p-6 rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <div className="space-y-10 mt-4 text-gray-800">
              {/* Personal Info */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="input" placeholder="Full Name" />
                  <input className="input" placeholder="Email" />
                  <input className="input" placeholder="Phone" />
                  <input className="input" placeholder="Location" />
                  <input className="md:col-span-2 input" placeholder="Professional Headline" />
                  <textarea rows={3} className="md:col-span-2 input" placeholder="Professional Summary" />
                </div>
              </section>

              <Section title="Education" onAdd={handleAddEducation}>
                {educationList.map((_, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="input" placeholder="Institution" />
                    <input className="input" placeholder="Degree" />
                    <input className="input" placeholder="Field of Study" />
                    <input className="input" placeholder="GPA/Percentage" />
                    <input type="date" className="input" />
                    <input type="date" className="input" />
                    <input className="md:col-span-2 input" placeholder="Location" />
                  </div>
                ))}
              </Section>

              <Section title="Experience" onAdd={handleAddExperience}>
                {experienceList.map((_, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="input" placeholder="Company/Organization" />
                    <input className="input" placeholder="Job Title" />
                    <input className="input" placeholder="Location" />
                    <input type="date" className="input" />
                    <input type="date" className="input" />
                    <textarea className="md:col-span-2 input" placeholder="Job Description" />
                  </div>
                ))}
              </Section>

              <Section title="Skills" onAdd={handleAddSkill}>
                {skillsList.map((_, i) => (
                  <div key={i} className="flex items-center gap-4 mb-2">
                    <input className="input flex-1" placeholder="e.g. Python, Machine Learning" />
                    <select className="input">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                ))}
              </Section>

              <Section title="Projects" onAdd={handleAddProject}>
                {projectsList.map((_, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="input" placeholder="Project Title" />
                    <input className="input" placeholder="Technologies Used" />
                    <textarea className="md:col-span-2 input" placeholder="Project Description" />
                    <input className="md:col-span-2 input" placeholder="Project Link (optional)" />
                  </div>
                ))}
              </Section>

              <Section title="Certifications" onAdd={handleAddCertification}>
                {certificationsList.map((_, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="input" placeholder="Certificate Name" />
                    <input className="input" placeholder="Issuing Organization" />
                    <input type="date" className="input" placeholder="Issued Date" />
                    <input className="md:col-span-2 input" placeholder="Certificate URL (optional)" />
                  </div>
                ))}
              </Section>

              <Section title="URLs (LinkedIn, GitHub, etc.)" onAdd={handleAddUrl}>
                {urlsList.map((_, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="input" placeholder="Label (e.g. LinkedIn, GitHub, Portfolio)" />
                    <input className="input" placeholder="URL" />
                  </div>
                ))}
              </Section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, onAdd, children }: { title: string; onAdd: () => void; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={onAdd}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100"
        >
          <PlusCircle size={16} />
          <span>Add</span>
        </button>
      </div>
      {children}
    </section>
  );
}

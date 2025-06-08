'use client';

import { useState } from 'react';

interface Education {
  degree: string;
  school: string;
  startYear: string;
  endYear: string;
  currentlyStudying: boolean;
  fieldOfStudy?: string;
}

export default function EducationForm() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [formData, setFormData] = useState<Education>({
    degree: '',
    school: '',
    startYear: '',
    endYear: '',
    currentlyStudying: false,
    fieldOfStudy: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const addEducation = () => {
    if (!formData.degree || !formData.school || !formData.startYear) {
      alert('Please fill at least Degree, School and Start Year.');
      return;
    }
    setEducations((prev) => [...prev, formData]);
    setFormData({
      degree: '',
      school: '',
      startYear: '',
      endYear: '',
      currentlyStudying: false,
      fieldOfStudy: '',
    });
  };

  const removeEducation = (index: number) => {
    setEducations((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">Education</h2>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="degree">Degree *</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Bachelor of Science"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="fieldOfStudy">Field of Study</label>
          <input
            type="text"
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Computer Science"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="school">School *</label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Harvard University"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="startYear">Start Year *</label>
          <input
            type="number"
            id="startYear"
            name="startYear"
            value={formData.startYear}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. 2015"
            min="1900"
            max={new Date().getFullYear()}
            required
          />
        </div>

        {/* End Year or Currently Studying */}
        <div className="flex items-center space-x-2">
          <label className="block mb-1 font-medium" htmlFor="endYear">End Year</label>
          <input
            type="number"
            id="endYear"
            name="endYear"
            value={formData.endYear}
            onChange={handleChange}
            className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full ${formData.currentlyStudying ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="e.g. 2019"
            min="1900"
            max={new Date().getFullYear() + 10}
            disabled={formData.currentlyStudying}
          />
        </div>

        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            id="currentlyStudying"
            name="currentlyStudying"
            checked={formData.currentlyStudying}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="currentlyStudying" className="font-medium cursor-pointer">Currently Studying</label>
        </div>
      </div>

      {/* Buttons */}
     <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-6">
  <button
    type="button"
    onClick={addEducation}
    className="px-5 py-2 rounded transition custom-b"
  >

          Add
        </button>
        {/* Save button example - you can connect to your save logic */}
        <button
          type="button"
          onClick={() => alert('Save functionality to be implemented')}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>

      {/* List of Added Educations */}
      {educations.length > 0 && (
        <div>
          <h3 className="font-semibold mb-4 text-center sm:text-left">Added Educations:</h3>
          <ul className="space-y-4">
            {educations.map((edu, i) => (
              <li
                key={i}
                className="border p-4 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <p>
                    <strong>{edu.degree}</strong>{' '}
                    {edu.fieldOfStudy && <em>in {edu.fieldOfStudy}</em>}
                  </p>
                  <p>{edu.school}</p>
                  <p>
                    {edu.startYear} - {edu.currentlyStudying ? 'Present' : edu.endYear || 'N/A'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeEducation(i)}
                  className="text-red-600 font-semibold text-base hover:text-red-800 border border-red-600 rounded px-3 py-1 transition self-end sm:self-auto"
                  aria-label="Remove education"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

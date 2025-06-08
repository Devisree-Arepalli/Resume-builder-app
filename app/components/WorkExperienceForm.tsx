'use client'

import { useState } from 'react'

interface Experience {
  jobTitle: string
  employer: string
  city: string
  startMonth: string
  startYear: string
  endMonth: string
  endYear: string
  currentlyWorking: boolean
  responsibilities: string
  achievements: string
}

export default function WorkExperienceForm() {
  const [experiences, setExperiences] = useState<Experience[]>([])

  const [jobTitle, setJobTitle] = useState('')
  const [employer, setEmployer] = useState('')
  const [city, setCity] = useState('')
  const [startMonth, setStartMonth] = useState('')
  const [startYear, setStartYear] = useState('')
  const [endMonth, setEndMonth] = useState('')
  const [endYear, setEndYear] = useState('')
  const [currentlyWorking, setCurrentlyWorking] = useState(false)
  const [responsibilities, setResponsibilities] = useState('')
  const [achievements, setAchievements] = useState('')

  const [saved, setSaved] = useState(false)

  function addExperience() {
    if (!jobTitle.trim() || !employer.trim() || !startMonth || !startYear) return

    const newExp: Experience = {
      jobTitle: jobTitle.trim(),
      employer: employer.trim(),
      city: city.trim(),
      startMonth,
      startYear,
      endMonth: currentlyWorking ? 'Present' : endMonth,
      endYear: currentlyWorking ? '' : endYear,
      currentlyWorking,
      responsibilities: responsibilities.trim(),
      achievements: achievements.trim(),
    }

    setExperiences([...experiences, newExp])

    // Reset form fields
    setJobTitle('')
    setEmployer('')
    setCity('')
    setStartMonth('')
    setStartYear('')
    setEndMonth('')
    setEndYear('')
    setCurrentlyWorking(false)
    setResponsibilities('')
    setAchievements('')
    setSaved(false)
  }

  function removeExperience(index: number) {
    setExperiences(experiences.filter((_, i) => i !== index))
  }

  function handleSave() {
    if (experiences.length === 0) return
    setSaved(true)
  }

  const months = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ]

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Work Experience Form</h2>

      {/* Job Title */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="jobTitle">Job Title *</label>
        <input
          id="jobTitle"
          type="text"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="e.g. Software Engineer"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
      </div>

      {/* Employer */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="employer">Employer Name *</label>
        <input
          id="employer"
          type="text"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="e.g. ABC Technologies"
          value={employer}
          onChange={(e) => setEmployer(e.target.value)}
          required
        />
      </div>

      {/* City */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="e.g. Hyderabad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* Start Month/Year */}
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block font-semibold mb-1" htmlFor="startMonth">Start Month *</label>
          <select
            id="startMonth"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            value={startMonth}
            onChange={(e) => setStartMonth(e.target.value)}
            required
          >
            <option value="">Select month</option>
            {months.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="flex-1">
          <label className="block font-semibold mb-1" htmlFor="startYear">Start Year *</label>
          <input
            id="startYear"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="e.g. 2020"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            required
          />
        </div>
      </div>

      {/* End Month/Year and Currently Working */}
      <div className="mb-4 flex flex-col sm:flex-row gap-4 items-end">
        <div className="flex-1">
          <label className="block font-semibold mb-1" htmlFor="endMonth">End Month</label>
          <select
            id="endMonth"
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            value={endMonth}
            onChange={(e) => setEndMonth(e.target.value)}
            disabled={currentlyWorking}
          >
            <option value="">Select month</option>
            {months.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="flex-1">
          <label className="block font-semibold mb-1" htmlFor="endYear">End Year</label>
          <input
            id="endYear"
            type="number"
            min={1900}
            max={new Date().getFullYear() + 10}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="e.g. 2022"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            disabled={currentlyWorking}
          />
        </div>

        <div className="flex items-center gap-2 mb-1">
          <input
            type="checkbox"
            checked={currentlyWorking}
            onChange={() => setCurrentlyWorking(!currentlyWorking)}
            id="currentlyWorking"
            className="w-5 h-5 cursor-pointer"
          />
          <label htmlFor="currentlyWorking" className="cursor-pointer select-none font-semibold">Currently Working Here</label>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="responsibilities">Responsibilities</label>
        <textarea
          id="responsibilities"
          rows={3}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Describe your responsibilities"
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
        />
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <label className="block font-semibold mb-1" htmlFor="achievements">Achievements</label>
        <textarea
          id="achievements"
          rows={3}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Describe achievements"
          value={achievements}
          onChange={(e) => setAchievements(e.target.value)}
        />
      </div>

      {/* Buttons Row */}
    <div className="flex flex-col sm:flex-row sm:gap-4 mb-8">
  <button
    type="button"
    onClick={addExperience}
    className="font-semibold px-6 py-3 rounded mb-4 sm:mb-0 w-full sm:w-auto transition custom-b"
  >

          + Add Work Experience
        </button>

        <button
          type="button"
          onClick={handleSave}
          disabled={experiences.length === 0}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded w-full sm:w-auto transition
            ${experiences.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          Save Work Experiences
        </button>
      </div>

      {/* Experience List */}
      {experiences.length > 0 && (
        <div>
          <h3 className="font-semibold mb-4 text-lg text-center">Added Work Experiences:</h3>
          <ul className="space-y-4">
            {experiences.map((exp, i) => (
              <li
                key={i}
                className="border p-4 rounded shadow-sm relative hover:shadow-md transition"
              >
                <button
                  type="button"
                  onClick={() => removeExperience(i)}
                  className="absolute top-3 right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                  aria-label="Remove experience"
                  title="Delete this experience"
                >
                  &times;
                </button>
                <p className="text-lg font-bold">{exp.jobTitle}</p>
                <p className="italic">{exp.employer}{exp.city ? `, ${exp.city}` : ''}</p>
                <p className="text-sm text-gray-700">
                  {exp.startMonth} {exp.startYear} - {exp.currentlyWorking ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
                </p>
                {exp.responsibilities && (
                  <p className="mt-2"><strong>Responsibilities:</strong> {exp.responsibilities}</p>
                )}
                {exp.achievements && (
                  <p className="mt-1"><strong>Achievements:</strong> {exp.achievements}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {saved && (
        <p className="text-green-600 mt-6 text-center font-semibold">Work experiences saved!</p>
      )}
    </div>
  )
}

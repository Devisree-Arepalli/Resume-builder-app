'use client'
import { useState, FormEvent } from 'react'

type Skill = {
  name: string
  proficiency: string
}

export default function SkillsForm() {
  const [skills, setSkills] = useState<Skill[]>([{ name: '', proficiency: '' }])
  const [bulkInput, setBulkInput] = useState('')
  const [saved, setSaved] = useState(false)

  function handleSkillChange(index: number, field: keyof Skill, value: string) {
    const updated = [...skills]
    updated[index][field] = value
    setSkills(updated)
    setSaved(false)
  }

  function addSkill() {
    setSkills([...skills, { name: '', proficiency: '' }])
  }

  function removeSkill(index: number) {
    setSkills(skills.filter((_, i) => i !== index))
  }

  function handleBulkAdd() {
    const newSkills = bulkInput
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .map((name) => ({ name, proficiency: '' }))

    setSkills([...skills, ...newSkills])
    setBulkInput('')
    setSaved(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const filtered = skills.filter((s) => s.name.trim() !== '')
    setSkills(filtered)
    setSaved(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Skills Form</h2>

      {skills.map((skill, i) => (
        <div
          key={i}
          className="mb-4 flex flex-col sm:flex-row sm:items-center gap-3"
        >
          <input
            type="text"
            className="border p-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder={`Skill #${i + 1}`}
            value={skill.name}
            onChange={(e) => handleSkillChange(i, 'name', e.target.value)}
            required
          />
          <select
            className="border p-2 w-full sm:w-40 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={skill.proficiency}
            onChange={(e) =>
              handleSkillChange(i, 'proficiency', e.target.value)
            }
          >
            <option value="">Proficiency (optional)</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
          {skills.length > 1 && (
            <button
              type="button"
              onClick={() => removeSkill(i)}
              className="text-red-600 font-bold text-3xl leading-none hover:text-red-800 transition"
              aria-label="Remove skill"
            >
              &times;
            </button>
          )}
        </div>
      ))}

      <button
  type="button"
  onClick={addSkill}
  className="w-full sm:w-auto mb-5 px-5 py-2 rounded transition focus:outline-none focus:ring-2 custom-b"
>

        + Add Skill
      </button>

      <textarea
        className="border p-3 w-full mb-4 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        rows={4}
        placeholder="Add skills in bulk (one skill per line)"
        value={bulkInput}
        onChange={(e) => setBulkInput(e.target.value)}
      />
      <button
        type="button"
        onClick={handleBulkAdd}
        className="w-full sm:w-auto mb-6 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white px-5 py-2 rounded transition"
      >
        Add Bulk Skills
      </button>

      <div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white px-5 py-2 rounded transition"
        >
          Save Skills
        </button>
        {saved && (
          <p className="text-green-600 mt-3 font-medium text-center">
            Skills saved!
          </p>
        )}
      </div>
    </form>
  )
}

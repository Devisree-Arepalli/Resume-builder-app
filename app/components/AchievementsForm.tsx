'use client'

import { useState } from 'react'

export default function AchievementsForm() {
  const [achievements, setAchievements] = useState<string[]>([''])

  const handleChange = (index: number, value: string) => {
    const updated = [...achievements]
    updated[index] = value
    setAchievements(updated)
  }

  const handleAddAchievement = () => {
    setAchievements([...achievements, ''])
  }

  const handleRemoveAchievement = (index: number) => {
    const updated = [...achievements]
    updated.splice(index, 1)
    setAchievements(updated)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted Achievements:', achievements)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>

      {achievements.map((ach, i) => (
        <div key={i} className="mb-3 flex gap-2 items-center">
          <input
            type="text"
            value={ach}
            onChange={(e) => handleChange(i, e.target.value)}
            placeholder={`Achievement ${i + 1}`}
            className="border p-2 flex-grow rounded"
            required
          />
          {achievements.length > 1 && (
            <button
  type="button"
  onClick={() => handleRemoveAchievement(i)}
  className="custom-b"
>

              ✕
            </button>
          )}
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
  type="button"
  onClick={handleAddAchievement}
  className="px-4 py-2 rounded custom-b"
>

          + Add Achievement
        </button>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Achievements
        </button>
      </div>
    </form>
  )
}

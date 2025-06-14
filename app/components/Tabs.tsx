'use client';

import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { useState } from 'react';
import PersonalInfo from '../components/PersonalInfoForm';
import Achievements from '../components/AchievementsForm';
import Education from '../components/EducationForm';
import Experience from '../components/WorkExperienceForm';
import Skills from '../components/SkillsForm';

const tabList = [
  { value: 'personal', label: 'Personal Info' },
  { value: 'achievements', label: 'Achievements' },
  { value: 'experience', label: 'Experience' },
  { value: 'education', label: 'Education' },
  { value: 'skills', label: 'Skills' },
];

export default function ResumeTabsPage() {
  // This is just to simulate valid state; replace with real validation
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = () => {
    // Ideally, call validation methods from each form here
    const allFieldsValid = true; // Replace with real checks

    if (allFieldsValid) {
      alert('All sections are complete. Submitting...');
      // You can handle API submission or routing here
    } else {
      alert('Please fill all fields in all sections before submitting.');
    }
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="w-full max-w-5xl mx-auto">
        <Tabs.Root defaultValue="personal" className="w-full">
          <Tabs.List className="flex flex-wrap justify-center gap-2 border-b border-gray-200 mb-6">
            {tabList.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className={clsx(
                  'px-4 py-2 text-sm sm:text-base font-medium transition-colors',
                  'rounded-t-md border-b-2 border-transparent',
                  'hover:text-blue-600 hover:border-blue-400',
                  'data-[state=active]:text-blue-600 data-[state=active]:border-blue-600'
                )}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <div className="bg-white rounded-lg shadow p-6 min-h-[200px]">
            <Tabs.Content value="personal">
              <PersonalInfo />
            </Tabs.Content>
            <Tabs.Content value="achievements">
              <Achievements />
            </Tabs.Content>
            <Tabs.Content value="experience">
              <Experience />
            </Tabs.Content>
            <Tabs.Content value="education">
              <Education />
            </Tabs.Content>
            <Tabs.Content value="skills">
              <Skills />
            </Tabs.Content>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Submit Resume
            </button>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}

// app/dashboard/page.tsx

/*"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid2x2, List } from "lucide-react";

export default function ResumeDashboard() {
  const [sortBy, setSortBy] = useState("Created");
  const [view, setView] = useState("grid");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue="resumes">
          <TabsList>
            <TabsTrigger value="resumes">Resumes</TabsTrigger>
            <TabsTrigger value="cover-letters">Cover Letters</TabsTrigger>
            <TabsTrigger value="resignation-letters">Resignation Letters</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{sortBy}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {['Name', 'Created', 'Edited'].map(option => (
                <DropdownMenuItem key={option} onClick={() => setSortBy(option)}>
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" onClick={() => setView("grid")}> <Grid2x2 /> </Button>
          <Button variant="ghost" onClick={() => setView("list")}> <List /> </Button>
        </div>
      </div>

      <div className={view === "grid" ? "grid grid-cols-3 gap-6" : "space-y-4"}>
        <div className="border border-dashed rounded-lg p-10 text-center text-gray-500 cursor-pointer hover:border-gray-400">
          Create new resume
        </div>
        {/* Dynamically render existing documents here *///}
   /*   </div>
    </div>
  );
}*/'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Grid2x2, List } from 'lucide-react';
import ResumeBuilder from '@/components/resume/resumeBuilder';

export default function ResumeDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [sortBy, setSortBy] = useState('Created');
  const [view, setView] = useState('grid');

  return (
    <div className="pt-24 px-6">
      {/* Tabs + Sorting */}
      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue="resumes">
          <TabsList>
            <TabsTrigger value="resumes">Resumes</TabsTrigger>
            <TabsTrigger value="cover-letters">Cover Letters</TabsTrigger>
            <TabsTrigger value="resignation-letters">Resignation Letters</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{sortBy}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {['Name', 'Created', 'Edited'].map((option) => (
                <DropdownMenuItem key={option} onClick={() => setSortBy(option)}>
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" onClick={() => setView('grid')}>
            <Grid2x2 />
          </Button>
          <Button variant="ghost" onClick={() => setView('list')}>
            <List />
          </Button>
        </div>
      </div>

      {/* Grid/List View */}
      <div className={view === 'grid' ? 'grid grid-cols-3 gap-6' : 'space-y-4'}>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-pink-500 text-white px-6 py-3 rounded font-semibold text-lg hover:bg-pink-900 transition"
          >
            Create New Resume
          </button>
        )}

        {/* Render Resume Builder only if form is shown */}
        {showForm && (
          <div className="col-span-3 mt-12 border-t pt-12">
            <ResumeBuilder />
          </div>
        )}

        {/* TODO: Render resume cards here */}
      </div>
    </div>
  );
}


/*'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Grid2x2, List } from 'lucide-react';
import ResumeFormStackedPage from '@/components/resume/ResumeFormStackedPage';
import ResumeBuilder from '@/components/resume/resumeBuilder';

export default function ResumeDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [resumeData, setResumeData] = useState<{ fullName?: string } | null>(null); // Add a state for resume data
  const [sortBy, setSortBy] = useState('Created');
  const [view, setView] = useState('grid');

  // Simulating an API call to fetch resume data
  useEffect(() => {
    const fetchResumeData = async () => {
      // Here, you should replace this with your actual API call or data fetching logic
      try {
        const response = await fetch('/api/resume'); // Replace with your actual API endpoint
        const data = await response.json();
        setResumeData(data); // Set fetched data
      } catch (error) {
        console.error('Error fetching resume data:', error);
        setResumeData(null); // Handle errors by setting resumeData to null
      }
    };

    fetchResumeData();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  // Loading state to handle when resume data is still being fetched
  if (resumeData === null) {
    return <div>Loading...</div>; // Show loading text if data is not yet fetched
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue="resumes">
          <TabsList>
            <TabsTrigger value="resumes">Resumes</TabsTrigger>
            <TabsTrigger value="cover-letters">Cover Letters</TabsTrigger>
            <TabsTrigger value="resignation-letters">Resignation Letters</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{sortBy}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {['Name', 'Created', 'Edited'].map((option) => (
                <DropdownMenuItem key={option} onClick={() => setSortBy(option)}>
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" onClick={() => setView('grid')}>
            <Grid2x2 />
          </Button>
          <Button variant="ghost" onClick={() => setView('list')}>
            <List />
          </Button>
        </div>
      </div>

      <div className={view === 'grid' ? 'grid grid-cols-3 gap-6' : 'space-y-4'}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded font-semibold text-lg hover:bg-blue-700 transition"
        >
          Create New Resume
        </button>

        {showForm && (
          <div className="mt-12 border-t pt-12">
            <ResumeBuilder />
          </div>
        )}

        {/* Dynamically render existing documents here */ //}
{/* </div>
  </div>
);
}*/}



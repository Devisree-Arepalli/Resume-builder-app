"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function ResumeUploadPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const jobOptions = ["Frontend Developer", "Backend Developer", "Full Stack Engineer", "DevOps Engineer"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !jobTitle) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobTitle", jobTitle);

    // Mock submit
    console.log("Uploading:", jobTitle, file.name);
    alert("Form submitted (mock)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Your Resume</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Job Title Dropdown */}
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Select onValueChange={setJobTitle}>
              <SelectTrigger id="jobTitle" className="mt-1">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {jobOptions.map((title) => (
                  <SelectItem key={title} value={title}>
                    {title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Resume Upload */}
          <div>
            <Label htmlFor="resume">Resume (PDF/DOC)</Label>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

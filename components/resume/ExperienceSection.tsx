'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([{}]);

  const addExperience = () => setExperiences([...experiences, {}]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      {experiences.map((_, index) => (
        <div
          key={index}
          className="border p-4 mb-6 rounded-md shadow-sm bg-white grid grid-cols-2 gap-4"
        >
          <Input placeholder="e.g. Google" className="col-span-1" />
          <Input placeholder="e.g. Software Engineer" className="col-span-1" />
          <Input placeholder="e.g. Bangalore, India" className="col-span-2" />
          <Input type="date" className="col-span-1" />
          <Input type="date" className="col-span-1" />
          <Textarea
            placeholder="Describe your responsibilities..."
            className="col-span-2 h-28"
          />
          <div className="col-span-2 text-right">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setExperiences(experiences.filter((_, i) => i !== index))
              }
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
      <Button onClick={addExperience}>Add</Button>
    </div>
  );
}

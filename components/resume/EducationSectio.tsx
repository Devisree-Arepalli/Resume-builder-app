/*'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function EducationSection() {
  const [educationList, setEducationList] = useState([{}]);

  const addEducation = () => setEducationList([...educationList, {}]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {educationList.map((_, index) => (
        <div
          key={index}
          className="border p-4 mb-6 rounded-md shadow-sm bg-white grid grid-cols-2 gap-4"
        >
          <Input placeholder="e.g. IIT Delhi" className="col-span-1" />
          <Input placeholder="e.g. B.Tech" className="col-span-1" />
          <Input placeholder="e.g. Computer Science" className="col-span-1" />
          <Input placeholder="e.g. 9.5/10 or 95%" className="col-span-1" />
          <Input type="date" className="col-span-1" />
          <Input type="date" className="col-span-1" />
          <Input placeholder="e.g. New Delhi, India" className="col-span-2" />
          <div className="col-span-2 text-right">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setEducationList(educationList.filter((_, i) => i !== index))
              }
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
      <Button onClick={addEducation}>Add</Button>
    </div>
  );
}
*/

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function EducationSection() {
  const [educationList, setEducationList] = useState([
    {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      gpa: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);

  const handleChange = (index, key, value) => {
    const updated = [...educationList];
    updated[index][key] = value;
    setEducationList(updated);
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        gpa: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    const updated = [...educationList];
    updated.splice(index, 1);
    setEducationList(updated);
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Education</h2>
      {educationList.map((edu, index) => (
        <div
          key={index}
          className="border p-4 rounded-xl shadow bg-white space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="e.g. IIT Delhi"
              value={edu.institution}
              onChange={(e) => handleChange(index, "institution", e.target.value)}
            />
            <Input
              placeholder="e.g. B.Tech"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
            <Input
              placeholder="e.g. Computer Science"
              value={edu.fieldOfStudy}
              onChange={(e) => handleChange(index, "fieldOfStudy", e.target.value)}
            />
            <Input
              placeholder="e.g. 9.5/10 or 95%"
              value={edu.gpa}
              onChange={(e) => handleChange(index, "gpa", e.target.value)}
            />
            <Input
              type="date"
              value={edu.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            />
            <Input
              type="date"
              value={edu.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            />
            <Input
              className="col-span-2"
              placeholder="e.g. New Delhi, India"
              value={edu.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
            />
          </div>
          <div className="text-right">
            <Button variant="destructive" onClick={() => removeEducation(index)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
      <Button onClick={addEducation}>Add</Button>
    </div>
  );
}

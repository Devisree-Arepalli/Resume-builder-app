import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SkillsSection() {
  const [skills, setSkills] = useState([{ name: "", proficiency: "" }]);

  const handleChange = (index, key, value) => {
    const updated = [...skills];
    updated[index][key] = value;
    setSkills(updated);
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", proficiency: "" }]);
  };

  const removeSkill = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="grid grid-cols-12 gap-4 border p-4 rounded-xl bg-white shadow"
        >
          <Input
            placeholder="Skill Name"
            className="col-span-6"
            value={skill.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <Input
            placeholder="Proficiency (e.g. Beginner, Intermediate, Expert)"
            className="col-span-5"
            value={skill.proficiency}
            onChange={(e) => handleChange(index, "proficiency", e.target.value)}
          />
          <Button
            className="col-span-1"
            variant="destructive"
            onClick={() => removeSkill(index)}
          >
            X
          </Button>
        </div>
      ))}
      <Button onClick={addSkill}>Add</Button>
    </div>
  );
}

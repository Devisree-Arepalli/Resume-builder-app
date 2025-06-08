import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([
    {
      name: "",
      techStack: "",
      description: "",
    },
  ]);

  const handleChange = (index, key, value) => {
    const updated = [...projects];
    updated[index][key] = value;
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([...projects, { name: "", techStack: "", description: "" }]);
  };

  const removeProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="space-y-4 border p-4 rounded-xl bg-white shadow"
        >
          <Input
            placeholder="Project Name"
            value={project.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <Input
            placeholder="Tech Stack Used (e.g. React, Node.js, MongoDB)"
            value={project.techStack}
            onChange={(e) => handleChange(index, "techStack", e.target.value)}
          />
          <Textarea
            placeholder="Brief description of the project..."
            value={project.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />
          <div className="text-right">
            <Button variant="destructive" onClick={() => removeProject(index)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
      <Button onClick={addProject}>Add</Button>
    </div>
  );
}

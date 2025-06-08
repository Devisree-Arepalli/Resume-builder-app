import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LanguagesSection() {
  const [languages, setLanguages] = useState([
    { language: "", proficiency: "" },
  ]);

  const handleChange = (index, key, value) => {
    const updated = [...languages];
    updated[index][key] = value;
    setLanguages(updated);
  };

  const addLanguage = () => {
    setLanguages([...languages, { language: "", proficiency: "" }]);
  };

  const removeLanguage = (index) => {
    const updated = [...languages];
    updated.splice(index, 1);
    setLanguages(updated);
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Languages</h2>
      {languages.map((lang, index) => (
        <div
          key={index}
          className="grid grid-cols-12 gap-4 border p-4 rounded-xl bg-white shadow"
        >
          <Input
            placeholder="Language"
            className="col-span-6"
            value={lang.language}
            onChange={(e) => handleChange(index, "language", e.target.value)}
          />
          <Input
            placeholder="Proficiency (e.g. Native, Fluent, Basic)"
            className="col-span-5"
            value={lang.proficiency}
            onChange={(e) => handleChange(index, "proficiency", e.target.value)}
          />
          <Button
            className="col-span-1"
            variant="destructive"
            onClick={() => removeLanguage(index)}
          >
            X
          </Button>
        </div>
      ))}
      <Button onClick={addLanguage}>Add</Button>
    </div>
  );
}
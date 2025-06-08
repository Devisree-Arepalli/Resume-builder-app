import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Define a type for certification
interface Certification {
  title: string;
  organization: string;
  date: string;
}

export default function CertificationsSection() {
  const [certifications, setCertifications] = useState<Certification[]>([
    { title: "", organization: "", date: "" },
  ]);

  // Define types for parameters
  const handleChange = (
    index: number,
    key: keyof Certification,
    value: string
  ) => {
    const updated = [...certifications];
    updated[index][key] = value;
    setCertifications(updated);
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      { title: "", organization: "", date: "" },
    ]);
  };

  const removeCertification = (index: number) => {
    const updated = [...certifications];
    updated.splice(index, 1);
    setCertifications(updated);
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Certifications</h2>
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="grid grid-cols-12 gap-4 border p-4 rounded-xl bg-white shadow"
        >
          <Input
            placeholder="Certification Title"
            className="col-span-5"
            value={cert.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
          />
          <Input
            placeholder="Issuing Organization"
            className="col-span-5"
            value={cert.organization}
            onChange={(e) =>
              handleChange(index, "organization", e.target.value)
            }
          />
          <Input
            type="date"
            className="col-span-2"
            value={cert.date}
            onChange={(e) => handleChange(index, "date", e.target.value)}
          />
          <div className="col-span-12 text-right">
            <Button variant="outline" onClick={() => removeCertification(index)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
      <Button onClick={addCertification}>Add</Button>
    </div>
  );
}

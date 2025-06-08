// app/components/PersonalInfoSection.tsx
/*'use client';

import { ChangeEvent } from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

export default function PersonalInfoSection({ formData, setFormData }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold mb-2">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="fullName"
          value={formData.fullName || ''}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 rounded w-full"
        />

        <input
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded w-full"
        />

        <input
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-2 rounded w-full"
        />

        <input
          name="linkedin"
          value={formData.linkedin || ''}
          onChange={handleChange}
          placeholder="LinkedIn Profile"
          className="border p-2 rounded w-full"
        />

        <input
          name="github"
          value={formData.github || ''}
          onChange={handleChange}
          placeholder="GitHub Profile"
          className="border p-2 rounded w-full"
        />

        <input
          name="address"
          value={formData.address || ''}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 rounded w-full"
        />
      </div>
    </section>
  );
}*/

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function PersonalInfoSection() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  });

  const handleChange = (key, value) => {
    setInfo({ ...info, [key]: value });
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Personal Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Full Name"
          value={info.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          placeholder="Email Address"
          value={info.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          value={info.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <Input
          placeholder="Address"
          value={info.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
      </div>
      <Textarea
        placeholder="Professional Summary"
        value={info.summary}
        onChange={(e) => handleChange("summary", e.target.value)}
      />
    </div>
  );
}


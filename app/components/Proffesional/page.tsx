// components/ProfessionalBackground.js
"use client";
import { useState } from "react";

export default function Professional() {
  const [open, setOpen] = useState<string|null>("");

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

  const sections = [
    { title: "Education", content: "Details about your education go here." },
    { title: "Licensure", content: "Licensure information goes here." },
    { title: "Certifications", content: "Certification details go here." },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-5xl text-[#2D3A25] font-serif font-semibold py-6 md:py-10">
      My Professional Background
    </h2>
    <div>
      {sections.map((sec) => (
        <div key={sec.title} className="border-b border-gray-200 pb-2 text-[#2D3A25]">
          <button
            onClick={() => toggle(sec.title)}
            className="flex justify-between items-center w-full text-left py-3 text-xl md:text-2xl"
          >
            {sec.title}
            <span>{open === sec.title ? "−" : "+"}</span>
          </button>
          {open === sec.title && (
            <div className="mt-2 text-sm text-gray-700">{sec.content}</div>
          )}
          <hr className="bg-black"/>
        </div>
        
      ))}
    </div>
  </div>
</section>

  );
}
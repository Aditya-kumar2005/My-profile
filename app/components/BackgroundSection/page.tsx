"use client";
import { useState } from "react";

export default function BackgroundSection() {
  const [openSection, setOpenSection] = useState("education");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <section className="bg-[#F5F2EA] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#2D3A25] mb-8">
          My Professional Background
        </h2>

        <div className="divide-y divide-gray-300">
          {/* Education */}
          <div className="py-4">
            <button
              onClick={() => toggleSection("education")}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-lg font-medium text-[#2D3A25]">Education</span>
              <span className="text-2xl font-bold text-[#2D3A25]">
                {openSection === "education" ? "−" : "+"}
              </span>
            </button>
            {openSection === "education" && (
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia
                false artemesia moluccella gladiolus cirsium trollius anthurium
                prunus delphinium achillea.
              </p>
            )}
          </div>

          {/* Licensure */}
          <div className="py-4">
            <button
              onClick={() => toggleSection("license")}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-lg font-medium text-[#2D3A25]">Licensure</span>
              <span className="text-2xl font-bold text-[#2D3A25]">
                {openSection === "licensure" ? "−" : "+"}
              </span>
            </button>
            {openSection === "license" && (
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                Licensure details go here...
              </p>
            )}
          </div>

          {/* Certifications */}
          <div className="py-4">
            <button
              onClick={() => toggleSection("certifications")}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-lg font-medium text-[#2D3A25]">Certifications</span>
              <span className="text-2xl font-bold text-[#2D3A25]">
                {openSection === "certifications" ? "−" : "+"}
              </span>
            </button>
            {openSection === "certifications" && (
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                Certification details go here...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
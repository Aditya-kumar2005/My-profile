"use client"
import Image from "next/image";
import { useState } from "react";
// import faqImg from "/assests/flower.png"; // replace with your actual image

export default function FAQSection() {
  const [open,setOpen]= useState<string|"">("");
  const click=(det:string)=>{
    setOpen(open===det?"":det);

  }
  const sections = [
    { title: "Education", content: "Details about your education go here." },
    { title: "License", content: "Licensure information goes here." },
    { title: "Certifications", content: "Certification details go here." },
  ];
  return (
    <section className="bg-white py-12 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    
    {/* Left side - Image */}
    <div className="flex justify-center md:pt-12">
      <Image
        src="/faqs.jpg"
        alt="Decorative flowers"
        className="rounded-lg object-cover"
        width={400}
        height={300}
      />
    </div>

    {/* Right side - FAQ */}
    <div className="text-[#2D3A25] w-full">
      <h2 className="text-3xl md:text-5xl font-serif font-semibold pb-8 md:pb-20">
        FAQs
      </h2>

      <div>
        {sections.map((sec) => (
          <div key={sec.title} className="border-b">
            <button
              onClick={() => click(sec.title)}
              className="flex justify-between items-center w-full text-left py-3 text-xl md:text-2xl"
            >
              <span>{open === sec.title ? "−" : "+"}</span>
              {sec.title}
            </button>
            {open === sec.title && (
              <div className="mt-2 text-sm">{sec.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
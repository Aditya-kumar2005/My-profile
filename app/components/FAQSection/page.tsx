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
    <section className="bg-white py-16 px-6 h-200 pb-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start">
        
        {/* Left side - Image */}
        <div className="flex justify-center">
          <Image
            src="/apple.png" // replace with your actual image
            alt="Decorative flowers"
            className="rounded-lg object-cover"
            width={400}
            height={300}
          />
        </div>

        {/* Right side - FAQ */}
        <div className="text-bold text-[#2D3A25] w-full mb-40">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold pb-20">
            FAQs
          </h2>

          <div className="">
        {sections.map((sec) => (
          
          <div key={sec.title} className="border-b  ">
            <hr />
            <button
              onClick={() => click(sec.title)}
              className="text-3xl flex justify-between items-center w-full text-left  font-large py-3"
            >
              <span className="text-2xl py-2">
                {open === sec.title ? "−" : "+"}
              </span>
              {sec.title}
            </button>
            {open === sec.title && (
              <div className="mt-2 text-sm ">
                {sec.content}
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>
        </div>
      </div>
    </section>
  );
}
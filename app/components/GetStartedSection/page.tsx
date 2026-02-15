// components/GetStartedSection.js
import Link from "next/link";
export default function GetStartedSection() {
  return (
    <section className="bg-[#3d4a35] text-white py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">Get started today.</h2>
        <br />
        <p className="text-lg mb-8">
          Ready to take the first step towards a happier, healthier you? 
          Contact me to book your first session. I look forward to starting 
          this therapeutic journey with you.
        </p>
        <Link href="/pages/Contact" className="mt-6 px-6 py-3 text-[#ffffff] bg-[#3d4a35]   border-2 border-[#ffffff] hover:text-[#3d4a35] hover:bg-[#ffffff] transition">
            GET IN TOUCH
          </Link>
      </div>
    </section>
  );
}
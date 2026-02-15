import Image from "next/image";
import Link from "next/link";
// import personImg from "../public/scenery.jpg"; // replace with your actual image

export default function Section2() {
  return (
    <section className="bg-gray-300  py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Image */}
        <div className="flex justify-center">
          <Image
            src="/apple.png"
            alt="Reflective person"
            className="rounded-lg object-cover"
            width={500}
            height={600}
          />
        </div>

        {/* Right side - Text */}
        <div className="text-[#2D3A25] space-y-6">
          <h2 className="text-3xl text-[#2D3A25] md:text-5xl font-serif font-semibold text-center pb-5">
            You don’t have to do this all alone.
          </h2>
          <p className="text-gray-700">
            If you are facing any of these, there’s hope:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>
          <p className="text-gray-700">
            With empathy and guidance, we’ll work together to navigate the challenges life throws your way.
          </p>
          <br />
          <Link
            href="/pages/Contact"
            className="mt-4 inline-block w-full md:w-auto text-center px-4 md:px-8 py-2 text-sm md:text-base text-[#3d4a35] bg-white border-2 border-[#3d4a35] hover:text-white hover:bg-[#3d4a35] transition rounded"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </section>
  );
}
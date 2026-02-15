// import personImg from "../public/scenery.jpg"; // replace with your actual image
import Link from 'next/link';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="bg-[#F5F2EA] py-16 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        

        {/* Left side -Text*/}
        <div className="flex flex-col text-[#3d4a35] items-start">
          <h2 className="text-2xl md:text-5xl font-serif font-semibold leading-tight">
            Live a fulfilling life.
          </h2>
          <br />
          <p className="text-gray-700">
            Life can be challenging&mdash;especially when you&apos;re trying to balance your personal and professional life.
          </p>
          <br />
          <p className="text-gray-700">
            It&apos;s easy to feel like you&apos;re alone in facing these challenges, but I&apos;m here to help.
          </p>
            <Link href="/pages/Contact" className="mt-6 px-4 md:px-8 py-2 text-[#3d4a35] bg-[#F5F2EA] border-2 border-[#3d4a35] hover:text-white hover:bg-[#3d4a35] transition rounded">
            GET IN TOUCH
          </Link>
        </div>
		{/*Right side -Image*/}
        <div className="flex justify-center">
          <Image
            src="/apple.png"
            alt="Reflective person"
            className="rounded-lg object-cover"
            width={400}
            height={300}
            />
        </div>
      </div>
    </section>
  );
}
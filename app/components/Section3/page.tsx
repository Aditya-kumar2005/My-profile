import Image from "next/image";
import Link from "next/link";
export default function Section3() {
  return (
    <section className="bg-[#E8E4D9] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left side - Text */}
        <div className="text-[#2D3A25] space-y-6">
          <h2 className="text-2xl md:text-5xl font-serif font-semibold leading-tight">
            Hi, I’m Lilac.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I’m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we’ll work together to navigate the challenges life throws your way.
          </p>
          <br />
          <br />
          <Link href="/pages/Contact" className="px-6 md:px-8 py-2 text-[#3d4a35] bg-[#E8E4D9] border-2 border-[#3d4a35] hover:text-white hover:bg-[#3d4a35] transition rounded">
            LET&apos;S CHAT →
          </Link>
        </div>

        {/* Right side - Images */}
        <div className="relative flex justify-center">
          {/* Main image */}
          <Image
            src="/apple.png"
            alt="Person holding lilacs"
            className="rounded-t-[200px] object-cover w-64 h-64 md:w-96 md:h-96"
            width={400}
            height={400}
          />

          {/* Circular inset image */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/apple.png"
              alt="Close-up of lilac flowers"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
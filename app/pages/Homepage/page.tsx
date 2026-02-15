 import Image from "next/image";


 // replace with your actual image
export default function Homepage() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="m-2.5 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Left side - Image */}
      <div className="flex justify-center items-center">
        <Image
          src="/maya.png"
          alt="Apple"
          className="rounded-t-[200px] object-cover w-48 md:w-[500px] h-auto"
          width={500}
          height={600}
        />
      </div>


        {/* Right side - Text */}
        <div className="flex flex-col text-[#3d4a35] items-center text-center">
              <h2 className="text-2xl md:text-7xl font-serif font-semibold leading-tight">
                Dr. Maya Reynolds, PsyD
              </h2>
              <p className="text-[#3d4a35] text-lg mt-4">
                Licensed Clinical Psychologist (Fictional Therapist)
              </p>
              <a
                href="./"
                className="mt-6 px-4 md:px-6 py-2 text-center text-[#3d4a35] bg-white border-2 border-[#3d4a35] hover:text-white hover:bg-[#3d4a35] transition rounded"
              >
                CONNECT WITH ME →
              </a>
        </div>

      </div>
    </section>
  );
}
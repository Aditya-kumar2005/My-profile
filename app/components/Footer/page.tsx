import React from 'react';
import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="bg-[#F5F2EA] text-[#2D3A25] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-12">
        
        {/* Contact Info */}
        <div className="space-y-2 ">
          <h3 className="text-bold text-4xl">Lilac Template</h3>
          <br />
          <br />
          <p>123 Example Road</p>
          <p>Minneapolis, MN</p>
          <p>email@example.com</p>
          <p>(555) 555-5555</p>
        </div>

        {/* Business Hours */}
        <div className="space-y-2">
          <h4 className="text-4xl text-bold pb-15">Hours</h4>
          <p className="font-medium">Monday – Friday</p>
          <p>10am – 6pm</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 pl-70">
          <h4 className="text-4xl text-bold">Find</h4>
          <br />
          <br />
          <p>
          <Link href="/" className="hover:underline">Home</Link><br />
          <Link href="/pages/Contact" className="hover:underline">Contact</Link><br />
          <Link href="/pages/Blog" className="hover:underline">Blog</Link>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-300 pt-6 space-y-4 text-1xl text-gray-700">
          <div className="ml-100 flex flex-wrap gap-10">
          <Link href="/privacy" className="hover:underline">Privacy & Cookies Policy</Link>
          <Link href="/estimate" className="hover:underline">Good Faith Estimate</Link>
          <Link href="/terms" className="hover:underline">Website Terms & Conditions</Link>
          <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
        </div>
          <br />
        <p className="text-gray-600">
          Website Template Credits: <Link href="./" className="hover:underline">Go Bloom Creative</Link>
        </p>
          <br />
          <br />
        <p className="text-gray-600">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
        </div>
    </footer>
  );
}
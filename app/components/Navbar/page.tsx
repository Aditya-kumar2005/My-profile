"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='bg-white'>
      <div className='max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6'>
        <Link href="/" className='text-2xl md:text-3xl font-bold text-[#3d4a35] transition'>Profile</Link>

        <div className='hidden md:flex items-center space-x-8 text-2xl text-[#3d4a35] font-medium'>
          <Link href="/pages/Blog">Blog</Link>
          <Link href="/pages/Contact">Contact</Link>
        </div>

        <button
          aria-label='Menu'
          className='md:hidden p-2 rounded-md text-2xl'
          onClick={() => setOpen((s) => !s)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className='md:hidden bg-white border-t'>
          <div className='max-w-6xl mx-auto flex flex-col p-4 space-y-3'>
            <Link href="/pages/Blog" onClick={() => setOpen(false)} className='text-lg'>Blog</Link>
            <Link href="/pages/Contact" onClick={() => setOpen(false)} className='text-lg'>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

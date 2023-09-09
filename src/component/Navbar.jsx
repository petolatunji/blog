import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4'>
      <div className='hidden xl:flex flex-1 items-center gap-x-3'>
        <Image src='/facebook.png' alt='' width={20} height={20} />
        <Image src='/tiktok.png' alt='' width={20} height={20} />
        <Image src='/youtube.png' alt='' width={20} height={20} />
        <Image src='/instagram.png' alt='' width={20} height={20} />
      </div>
      <div className=' flex-1 text-left xl:text-center font-bold text-2xl xl:text-4xl'>
        LindaBlog
      </div>
      <div className='flex flex-1 items-center gap-x-3 text-[20px] justify-end'>
        <ThemeToggle />
        <Link href='/' className='hidden xl:block'>
          Homepage
        </Link>
        <Link href='/' className='hidden xl:block'>
          About
        </Link>
        <Link href='/' className='hidden xl:block'>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar

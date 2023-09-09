'use client'
import Link from 'next/link'
import { useState } from 'react'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)

  const status = 'nonauthenticated'
  return (
    <>
      {status === 'nonauthenticated' ? (
        <Link href='/login' className='hidden xl:block'>
          Login
        </Link>
      ) : (
        <>
          <Link href='write' className='hidden xl:block'>
            Write
          </Link>
          <span className='cursor-pointer'>Logout</span>
        </>
      )}
      <div
        onClick={() => setOpen(!open)}
        className='w-[20px] h-4 flex flex-col justify-between cursor-pointer xl:hidden relative'
      >
        <div className='w-[100%] h-[2px] bg-[var(--textColor)]'></div>
        <div className='w-[100%] h-[2px] bg-[var(--textColor)]'></div>
        <div className='w-[100%] h-[2px] bg-[var(--textColor)]'></div>
      </div>
      {open && (
        <div className='absolute top-[80px] left-0 gap-12 w-full flex flex-col items-center justify-center z-[999] bg-[var(--bg)]'>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === 'nonauthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='write'>Write</Link>
              <span className='cursor-pointer'>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks

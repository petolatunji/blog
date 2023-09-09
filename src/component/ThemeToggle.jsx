'use client'

import Image from 'next/image'

import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext)

  return (
    <div
      className='w-[40px] h-[20px] cursor-pointer flex items-center justify-between relative rounded-[50px]'
      onClick={toggle}
      style={
        theme === 'dark'
          ? { backgroundColor: 'white' }
          : { backgroundColor: '#0f172a' }
      }
    >
      <Image src='/moon.png' alt='' width={14} height={14} />
      <div
        className='w-[15px] h-[15px] rounded-full absolute'
        style={
          theme === 'dark'
            ? { left: 1, background: '#0f172a' }
            : { right: 1, background: 'white' }
        }
      ></div>
      <Image src='/sun.png' alt='' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle

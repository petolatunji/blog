'use client'
import 'react-quill/dist/quill.bubble.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'

const WritePage = () => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [media, setMedia] = useState('')
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState('')
  return (
    <div className='relative flex flex-col'>
      <input
        type='text'
        placeholder='Title'
        className='p-12 text-[64px] border-none outline-none bg-transparent text-[var(--textColor)]'
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className='mb-12 px-3 py-5 w-max'
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value='style'>style</option>
        <option value='fashion'>fashion</option>
        <option value='food'>food</option>
        <option value='culture'>culture</option>
        <option value='travel'>travel</option>
        <option value='coding'>coding</option>
      </select>
      <div className='flex gap-5 h-[700px] relative'>
        <button
          className='w-9 h-9 rounded-full bg-transparent border-[var(--textColor)] flex items-center justify-center'
          onClick={() => setOpen(!open)}
        >
          <Image src='/food.png' alt='' width={16} height={16} />
        </button>
        {open && (
          <div className='flex gap-4 bg-[var(--bg)] absolute z-[999] w-full left-12'>
            <input
              type='file'
              id='image'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className='w-9 h-9 rounded-full bg-transparent border-[var(--textColor)] flex items-center justify-center'>
              <label htmlFor='image'>
                <Image src='/culture.png' alt='' width={16} height={16} />
              </label>
            </button>
            <button className='w-9 h-9 rounded-full bg-transparent border-[var(--textColor)] flex items-center justify-center'>
              <Image src='/culture.png' alt='' width={16} height={16} />
            </button>
            <button className='w-9 h-9 rounded-full bg-transparent border-[var(--textColor)] flex items-center justify-center'>
              <Image src='/travel.png' alt='' width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className='w-full'
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder='Tell your story...'
        />
      </div>
      <button className='absolute top-0 right-0 px-2 py-5 border-none bg-green-500 text-white rounded-2xl'>
        Publish
      </button>
    </div>
  )
}

export default WritePage

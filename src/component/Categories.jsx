import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const Categories = () => {
  return (
    <div>
      <div className='mt-[30px]'>
        <h1 className='font-bold text-xl'>Popular Categories</h1>
        <div className='flex flex-wrap justify-between gap-5 mt-8'>
          <Link
            href=''
            className='flex items-center gap-2 w-full xl:w-[15%] h-20 justify-center rounded-lg bg-[#da85c731]'
          >
            <Image
              src='/fashion.png'
              alt=''
              width={32}
              height={32}
              className='rounded-full object-cover'
            />
            Fashion
          </Link>
          <Link
            href=''
            className='flex items-center gap-2 w-full xl:w-[15%] h-20 justify-center rounded-lg bg-[#5e4fff31]'
          >
            <Image
              src='/culture.png'
              alt=''
              width={32}
              height={32}
              className='rounded-full object-cover'
            />
            Culture
          </Link>
          <Link
            href=''
            className='flex items-center gap-2 w-full xl:w-[15%] h-20 justify-center rounded-lg bg-[#ffb04f45]'
          >
            <Image
              src='/coding.png'
              alt=''
              width={32}
              height={32}
              className='rounded-full object-cover'
            />
            Coding
          </Link>
          <Link
            href=''
            className='flex items-center gap-2 w-full xl:w-[15%] h-20 justify-center rounded-lg bg-[#ff795736;]'
          >
            <Image
              src='/food.png'
              alt=''
              width={32}
              height={32}
              className='rounded-full object-cover'
            />
            Food
          </Link>
          <Link
            href=''
            className='flex items-center gap-2 w-full xl:w-[15%] h-20 justify-center rounded-lg bg-[#7fb88133]'
          >
            <Image
              src='/style.png'
              alt=''
              width={32}
              height={32}
              className='rounded-full object-cover'
            />
            Style
          </Link>
          <Link
            href=''
            className='flex items-center gap-2 w-full xl:w-[15%] h-20 justify-center rounded-lg bg-[#57c4ff31]'
          >
            <Image
              src='/travel.png'
              alt=''
              width={32}
              height={32}
              className='rounded-full object-cover'
            />
            Travel
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories

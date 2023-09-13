import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className='flex mt-12 items-center gap-12'>
      <div className='flex-1 h-80 relative hidden xl:block'>
        <Image src='/fe.avif' alt='' fill className='object-cover' />
      </div>
      <div className='flex-1 flex flex-col gap-7'>
        <div className='flex items-center gap-1'>
          <span className='text-gray-400'>05.09.93</span>
          <span className='font-bold text-red-600'>Coding</span>
        </div>
        <Link href='/' className='border border-red-700  px-1 py-0'>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className='text-xl xl:text-2xl font-light text-[var(--softTextColor) text-justify]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero
          quo unde repellat dignissimos voluptatum nostrum ea, distinctio
          aliquam soluta perspiciatis nobis, quia facere est at nemo!
          Doloremque, dicta dolores.
        </p>
        <Link className='border-b-4 px-1 w-max border-red-700' href='/'>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card

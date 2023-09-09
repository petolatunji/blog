import Image from 'next/image'
import Link from 'next/link'

const MenuPosts = ({ withImage }) => {
  return (
    <div className='mt-9 mb-16 flex flex-col gap-9'>
      <Link href='/' className='flex items-center gap-5'>
        {withImage && (
          <div className='flex-1 aspect-[1/1] relative'>
            <Image
              src='/p1.jpeg'
              alt=''
              fill
              className='rounded-full border border-gray-300 object-cover'
            />
          </div>
        )}
        <div className='flex-4 flex flex-col gap-1'>
          <span className='px-1 py-2 rounded-xl text-white w-max text-xs bg-[#ff7857]'>
            Travel
          </span>
          <h3 className='text-xl font-bold color-[var(--softTextColor)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-xs'>
            <span className='text-green-500'>John Doe</span>
            <span className='text-gray-300'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className='flex items-center gap-5'>
        {withImage && (
          <div className='flex-1 aspect-[1/1] relative'>
            <Image
              src='/p1.jpeg'
              alt=''
              fill
              className='rounded-full border border-gray-300 object-cover'
            />
          </div>
        )}
        <div className='flex-4 flex flex-col gap-1'>
          <span className='px-1 py-2 rounded-xl text-white w-max text-xs bg-[#ffb14f]'>
            Culture
          </span>
          <h3 className='text-xl font-bold color-[var(--softTextColor)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-xs'>
            <span className='text-green-500'>John Doe</span>
            <span className='text-gray-300'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className='flex items-center gap-5'>
        {withImage && (
          <div className='flex-1 aspect-[1/1] relative'>
            <Image
              src='/p1.jpeg'
              alt=''
              fill
              className='rounded-full border border-gray-300 object-cover'
            />
          </div>
        )}
        <div className='flex-4 flex flex-col gap-1'>
          <span className='px-1 py-2 rounded-xl text-white w-max text-xs bg-[#7fb881]'>
            Food
          </span>
          <h3 className='text-xl font-bold color-[var(--softTextColor)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-xs'>
            <span className='text-green-500'>John Doe</span>
            <span className='text-gray-300'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className='flex items-center gap-5'>
        {withImage && (
          <div className='flex-1 aspect-[1/1] relative'>
            <Image
              src='/p1.jpeg'
              alt=''
              fill
              className='rounded-full border border-gray-300 object-cover'
            />
          </div>
        )}
        <div className='flex-4 flex flex-col gap-1'>
          <span className='px-1 py-2 rounded-xl text-white w-max text-xs bg-[#ff7887]'>
            Fashion
          </span>
          <h3 className='text-xl font-bold color-[var(--softTextColor)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='text-xs'>
            <span className='text-green-500'>John Doe</span>
            <span className='text-gray-300'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPosts

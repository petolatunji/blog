import Image from 'next/image'
import Link from 'next/link'
const Comments = () => {
  const status = 'authenticated'
  return (
    <div className='mt-12'>
      <h1 className='mb-7 text-[var(--softTextColor)]'>Comments</h1>
      {status === 'authenticated' ? (
        <div className='flex items-center justify-between gap-7'>
          <textarea placeholder='write a comment...' className='w-full p-5' />
          <button className='px-4 py-5 bg-green-500 text-white font-bold border-none rounded-md '>
            Send
          </button>
        </div>
      ) : (
        <Link href='/login' className='bg-red-600 text-white p-2'>
          Login to write comment
        </Link>
      )}

      <div className='mt-[50px]'>
        <div className='mb-[50px]'>
          <div className='flex items-center gap-5 mb-5'>
            <Image
              src='/fe.avif'
              alt=''
              width={50}
              height={50}
              className='rounded-full object-cover'
            />

            <div className='flex flex-col gap-1 text-[var(--softTextColor)]'>
              <span className='font-medium'>Peter Pan</span>
              <span className='text-sm'>13.09.2023</span>
            </div>
          </div>
          <p className='text-lg font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dolores eligendi hic facere dolorem ea quia! Eligendi tempora
            officia molestiae voluptatum corrupti veritatis quisquam
            perspiciatis, esse illo accusantium recusandae similique ipsam rerum
            animi temporibus cupiditate? Voluptatem voluptatibus, ea repellendus
            vel quibusdam tempore neque maxime harum delectus animi repudiandae,
            molestiae inventore.
          </p>
        </div>
      </div>
      <div className='mt-[50px]'>
        <div className='mb-[50px]'>
          <div className='flex items-center gap-5 mb-5'>
            <Image
              src='/fe.avif'
              alt=''
              width={50}
              height={50}
              className='rounded-full object-cover'
            />

            <div className='flex flex-col gap-1 text-[var(--softTextColor)]'>
              <span className='font-medium'>Peter Pan</span>
              <span className='text-sm'>13.09.2023</span>
            </div>
          </div>
          <p className='text-lg font-light'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className='mt-[50px]'>
        <div className='mb-[50px]'>
          <div className='flex items-center gap-5 mb-5'>
            <Image
              src='/fe.avif'
              alt=''
              width={50}
              height={50}
              className='rounded-full object-cover'
            />

            <div className='flex flex-col gap-1 text-[var(--softTextColor)]'>
              <span className='font-medium'>Peter Pan</span>
              <span className='text-sm'>13.09.2023</span>
            </div>
          </div>
          <p className='text-lg font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dolores eligendi hic facere dolorem ea quia!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments

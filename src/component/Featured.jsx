import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-[30px]'>
      <h1 className='text-[48x] xl:text-[90px] font-bold xl:font-light'>
        <b>Hey, LindaBlog is here!</b> Discover my stories and creative ideas.
      </h1>
      <div className='flex flex-col xl:flex-row items-center gap-12 mt-8 xl:mt-14 '>
        <div className='flex-1 relative h-[500px] hidden xl:block'>
          <Image src='/fe.avif' alt='' fill className='cover' />
        </div>

        <div className='flex-1 flex flex-col gap-5'>
          <h1 className=' text-2xl xl:text-4xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className='text-xl xl:text-2xl text-justify font-light text-[var(--softTextColor)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            libero labore quis, reiciendis doloribus saepe quaerat eum facilis
            dicta nisi, ipsam maiores assumenda atque consequuntur voluptates
            ab? Tempora ad laborum illo eos animi quasi amet! Sequi at ex
            assumenda exercitationem dolore voluptatum necessitatibus fugiat,
            sint aut animi molestiae perspiciatis. Magnam!
          </p>
          <button className=' bg-white px-4 py-5 rounded-md w-max border-none'>
            Read Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-10 px-5 flex flex-col xl:flex-row xl:items-center justify-between text-[var(--softTextColor)]'>
      <div className='flex flex-1 flex-col gap-[14px]'>
        <div className='flex items-center gap-[10px]'>
          <Image
            src='/coding.png'
            alt=''
            width={50}
            height={50}
            className='rounded-full object-cover'
          />
          <h1 className='text-2xl font-bold'>Lindablog</h1>
        </div>
        <p className='font-light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className='mt-[10px] flex gap-[10px]'>
          <Image src='/facebook.png' alt='' width={18} height={18} />
          <Image src='/instagram.png' alt='' width={18} height={18} />
          <Image src='/tiktok.png' alt='' width={18} height={18} />
          <Image src='/youtube.png' alt='' width={18} height={18} />
        </div>
      </div>

      <div className=' mt-[20px] xl:mt-[0px] flex-1 flex flex-col xl:flex-row xl:justify-end gap-[20px] xl:gap-[100px]'>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className='flex flex-col gap-[10px] font-light'>
          <span className='font-bold'>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Tiktok</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

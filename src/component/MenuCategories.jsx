import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className='mt-9 mb-14 flex flex-wrap gap-5'>
      <Link
        href='/blog?cat=style'
        className='px-2 py-6 rounded-lg text-sm bg-[#5e4fff31]'
      >
        Style
      </Link>
      <Link
        href='/blog'
        className='px-2 py-6 rounded-lg text-sm bg-[#ffb04f45]'
      >
        Fashion
      </Link>
      <Link
        href='/blog'
        className='px-2 py-6 rounded-lg text-sm bg-[#ff795736]'
      >
        Food
      </Link>
      <Link
        href='/blog'
        className='px-2 py-6 rounded-lg text-sm bg-[#7fb88133]'
      >
        Travel
      </Link>
      <Link
        href='/blog'
        className='px-2 py-6 rounded-lg text-sm bg-[#da85c731]'
      >
        Culture
      </Link>
      <Link
        href='/blog'
        className='px-2 py-6 rounded-lg text-sm bg-[#57c4ff31]'
      >
        Coding
      </Link>
    </div>
  )
}

export default MenuCategories

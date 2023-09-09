import CardList from '@/component/CardList'
import Menu from '@/component/Menu'

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams

  return (
    <div className=''>
      <h1 className='text-white px-1 py-2 text-center capitalize bg-red-400'>
        {cat} Blog
      </h1>
      <div className='flex gap-12 '>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage

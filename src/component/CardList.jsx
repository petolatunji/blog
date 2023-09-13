import Card from './Card'
import Pagination from './Pagination'

const CardList = () => {
  return (
    <div className='flex-5'>
      <h1 className='mt-[50px] first-letter:font-bold text-2xl '>
        Recent Posts
      </h1>
      <div>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default CardList

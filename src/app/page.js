import CartList from '@/component/CardList'
import Categories from '@/component/Categories'
import Featured from '@/component/Featured'
import Menu from '@/component/Menu'

export default function Home() {
  return (
    <div>
      <Featured />
      <Categories />
      <div className='flex gap-[50px]'>
        <CartList />
        <Menu />
      </div>
    </div>
  )
}

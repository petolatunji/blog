import MenuPosts from './MenuPosts'
import MenuCategories from './MenuCategories'

const Menu = () => {
  return (
    <div className='flex-2 mt-[50px] hidden xl:block'>
      <h2 className='text-gray font-bold text-2xl'>{"What's hot"}</h2>
      <h1 className='text-3xl'>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className='text-gray font-bold text-2xl'>Discover by topic</h2>
      <h1 className='text-3xl'>Categories</h1>
      <MenuCategories />
      <h2 className='text-gray font-bold text-xl'>Chosen by the editor</h2>
      <h1 className='text-3xl mt-1'>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu

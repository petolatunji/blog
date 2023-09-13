import Comments from '@/component/Comments'
import Menu from '@/component/Menu'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div>
      <div className='flex items-center gap-12'>
        <div className='flex-1'>
          <h1 className='text-2xl xl:text-6xl mb-[60px]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className='flex items-center gap-5'>
            <div className='w-[50px] h-[50px] relative'>
              <Image
                src='/p1.jpeg'
                fill
                alt=''
                className='rounded-full object-cover'
              />
            </div>
            <div className='flex flex-col gap-1 text-[var(--softTextColor)]'>
              <span className='font-semibold text-xl'>Peter</span>
              <span className='font-light text-xl'>13.09.2023</span>
            </div>
          </div>
        </div>
        <div className='hidden xl:block flex-1 h-[350px] relative'>
          <Image src='/p1.jpeg' alt='' fill className='object-cover' />
        </div>
      </div>
      <div className='flex gap-12'>
        <div className='flex-5 mt-14'>
          <p className='text-base xl:text-xl font-light mb-5 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            exercitationem consequatur impedit facere, neque voluptas
            perspiciatis sunt at? Fugiat eveniet veniam similique minima
            distinctio corrupti vel sed, ratione, molestiae illo ullam
            perspiciatis amet nam aperiam excepturi aliquam beatae eum saepe?
            Impedit beatae tempora ratione consequuntur, molestias mollitia
            earum deserunt amet. Reiciendis impedit aliquid voluptatibus,
            aspernatur, quia non cumque incidunt ullam dolorem excepturi, eius
            reprehenderit. Doloribus autem eligendi placeat ullam vitae
            veritatis nobis reprehenderit, repellat adipisci voluptatibus
            aliquam praesentium maiores fugiat?
          </p>
          <p className='text-base xl:text-xl font-light mb-5 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            libero quos nisi ut quibusdam soluta eveniet quae iste sed, debitis
            neque labore ipsam enim! Ad suscipit excepturi mollitia doloremque
            fuga?
          </p>
          <div>
            <Comments />
          </div>
        </div>

        <Menu />
      </div>
    </div>
  )
}

export default SinglePage

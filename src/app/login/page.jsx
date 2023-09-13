'use client'
/**import { signIn, useSession } from 'next-auth/react'

import { useRouter } from 'next/navigation' **/

const LoginPage = () => {
  /**  const { status } = useSession()

  const router = useRouter()

  if (status === 'loading') {
    return <div className=''>Loading...</div>
  }

  if (status === 'authenticated') {
    router.push('/')
  }
**/
  return (
    <div className='flex items-center justify-center mt-14'>
      <div className='bg-[var(--softBg)] p-8 md:px-[50px] md:py-[100px] xl:px-[150px] xl:py-[200px] flex flex-col gap-12 rounded-lg'>
        <div
          className='p-5 rounded-md border-none text-white font-bold flex items-center justify-center bg-[#ff5555] cursor-pointer'
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </div>
        <div className='p-5 rounded-md border-none text-white font-bold flex items-center justify-center bg-[#111] cursor-pointer'>
          Sign in with Github
        </div>
        <div className='p-5 rounded-md border-none text-white font-bold flex items-center justify-center bg-[#087bea] cursor-pointer'>
          Sign in with Facebook
        </div>
      </div>
    </div>
  )
}

export default LoginPage

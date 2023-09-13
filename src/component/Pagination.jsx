import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between my-7'>
      <button className='w-[100px] border-none p-4 bg-red-600 text-white'>
        Previous
      </button>
      <button className='w-[100px] border-none p-4 bg-red-600 text-white'>
        Next
      </button>
    </div>
  )
}

export default Pagination

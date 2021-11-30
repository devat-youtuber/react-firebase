import React from 'react'

import { PhotographIcon } from '@heroicons/react/outline'


const Home = () => {
  return (
    <div className='w-full mx-auto max-w-7xl'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold uppercase'>My Collections</h2>
        <div>
          <button className="px-2 mx-1 border">
            ASC
          </button>
          <button className="px-2 mx-1 border">
            DESC
          </button>
        </div>
      </div>

      <form className='w-full my-4'>
        <div className='relative h-12'>
          <input type="text" className='w-full h-full px-2 border-b-2 border-gray-200 outline-none'
          placeholder='Enter your title...'
          />
              
          <div className='absolute top-0 right-0 flex'>
            <PhotographIcon className='w-8 h-8 my-2 text-yellow-400 cursor-pointer' />
          </div>
        </div>
        
        {/* Input Files */}
        
        
        <div className='text-right'>
          <button type='submit' className='h-full px-6 py-2 my-2 bg-gray-700 rounded-md text-yellow-50'>
            Create
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default Home

import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header

import React from 'react'


const DisplayName = () => {
  
 
  return (
    <div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Display Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          className="block w-full p-2 mt-1 bg-gray-100 border-gray-300 rounded-sm shadow-sm outline-none sm:text-sm"
          required
        />
      </div>
      <div className='text-right'>
        <button className='px-6 py-1 my-2 text-sm font-semibold text-right border rounded-md hover:bg-gray-50'
        >
          Change
        </button>
      </div>
    </div>
  )
}

export default DisplayName

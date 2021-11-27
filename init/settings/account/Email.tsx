import React from 'react'


const Email = () => {

  return (
    <div>
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          className="block w-full p-2 mt-1 bg-gray-100 border-gray-300 rounded-sm shadow-sm outline-none sm:text-sm"
          required
        />
      </div>
      {/*Current Password */}
      
        <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          className="block w-full p-2 mt-1 bg-gray-100 border-gray-300 rounded-sm shadow-sm outline-none sm:text-sm"
          required
        />
        </div>
      
      {/* button */}
      <div className='text-right'>
        <button className='px-6 py-1 my-2 text-sm font-semibold text-right border rounded-md hover:bg-gray-50'
        >
          Change
        </button>
      </div>
    </div>
  )
}

export default Email

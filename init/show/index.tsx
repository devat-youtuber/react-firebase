import React from 'react'
import { CogIcon } from '@heroicons/react/solid'


const Show = () => {
  
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className='flex items-center justify-between'>
        
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
          <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and application.</p>
        </div>
        
        <CogIcon className='w-10 h-10 mx-4 text-blue-500 cursor-pointer animate-spin hover:animate-none' 
        />
      </div>

      <div className="border-t border-gray-200">
        <dl>
          {/* Full Name */}
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full Name</dt>
            <dd className="mt-1 text-sm text-gray-900 capitalize sm:mt-0 sm:col-span-2"> Full Name </dd>
          </div>
         
          {/* Email Contact */}
          <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email contact</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Email contact</dd>
          </div>
          {/* Address */}
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Address</dd>
          </div>
          {/* Phone Number */}
          <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Phone number</dd>
          </div>
          {/* Website */}
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Website</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href='' target="_blank" rel="noreferrer"
              className='hover:underline hover:text-blue-600'>
                Website
              </a>
            </dd>
          </div>
          {/* About */}
          <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            About
            </dd>
          </div>
          
        </dl>
      </div>

    </div>
  )
}
export default Show;
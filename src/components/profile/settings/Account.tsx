import React from 'react'
import Avatar from './account/Avatar'
import DisplayName from './account/DisplayName'
import Email from './account/Email'



const Account = () => {
  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Account</h3>
              <p className="mt-1 text-sm text-gray-600">Your account information. Be careful when changing.</p>
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div>
                    {/* Avatar */}
                    <Avatar />
                    {/* Display Name */}
                    <DisplayName />
                    {/* Email */}
                    <Email />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default Account

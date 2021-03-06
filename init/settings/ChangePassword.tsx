import React from 'react'


const ChangePassword = () => {
  
  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Change Password</h3>
              
              <p className="mt-1 text-sm text-gray-600">Function only for Google Account or Email/Password.</p>
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    {/* Old Password */}
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="old_password" className="block text-sm font-medium text-gray-700">
                        Old Password
                      </label>
                      <input
                        type="password"
                        name="old_password"
                        id="old_password"
                        required
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {/* New Password */}
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="new_password"
                        id="new_password"
                        required
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {/* Confirm New Password */}
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="cf_password" className="block text-sm font-medium text-gray-700">
                        Confirm New Passwrod
                      </label>
                      <input
                        type="password"
                        name="cf_password"
                        id="cf_password"
                        required
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                   
                  </div>
                </div>

                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
                
              </div>
            </form>
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

export default ChangePassword

import React from 'react'
import ProfileForm from './ProfileForm';



const Settings = () => {
  
  return (
    <div className="p-3 rounded-md shadow">
      {/* ProfileForm */}
      <ProfileForm />
      {/* Account */}
      
      {/* Change Password */}
      
      <button className="px-4 py-2 mt-5 font-semibold tracking-wider text-white uppercase bg-gray-500 rounded-md hover:bg-gray-600"
      >
        Cancel
      </button>
    </div>
  )
}

export default Settings;